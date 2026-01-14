// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import path from "path";
import { readdir } from "fs/promises";

// 1) Alinhe com seu domínio canônico
const SITE_URL = "https://www.altacloud.com.br";

// 2) Ajuste se seu app estiver em outro caminho
const APP_DIR = path.join(process.cwd(), "src", "app");

// 3) Import da fonte de dados dos artigos
//    Este import vai funcionar se `src/app/data/artigos.ts` exportar um array
//    (export const artigos = [...]) ou export default [...]
import * as ArtigosModule from "./data/articles";

type MaybeArticle = {
  slug?: string;
  updatedAt?: string | Date;
  date?: string | Date;
  publishedAt?: string | Date;
};

const EXCLUDE_DIRS = new Set([
  "api",
  "components",
  "lib",
  "config",
  "styles",
  "public",
  "data", // <- data não é rota
]);

const PAGE_FILES = new Set(["page.tsx", "page.jsx", "page.mdx", "page.md"]);

function isRouteGroup(dirName: string) {
  return dirName.startsWith("(") && dirName.endsWith(")");
}
function isPrivateOrInternal(dirName: string) {
  return dirName.startsWith("_");
}
function hasDynamicSegment(segment: string) {
  return segment.startsWith("[") && segment.endsWith("]");
}
function toUrlPath(relativeDir: string) {
  const normalized = relativeDir.split(path.sep).join("/");
  return normalized === "" ? "/" : `/${normalized}`;
}

async function collectStaticRoutesFromAppDir(): Promise<string[]> {
  const routes: string[] = [];

  async function walk(currentAbs: string, currentRel: string) {
    const entries = await readdir(currentAbs, { withFileTypes: true });

    const hasPage = entries.some((e) => e.isFile() && PAGE_FILES.has(e.name));

    const segments = currentRel ? currentRel.split(path.sep) : [];
    const isDynamic = segments.some(hasDynamicSegment);

    if (hasPage && !isDynamic) routes.push(toUrlPath(currentRel));

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;

      if (EXCLUDE_DIRS.has(name)) continue;
      if (isRouteGroup(name)) continue;
      if (isPrivateOrInternal(name)) continue;

      const nextAbs = path.join(currentAbs, name);
      const nextRel = currentRel ? path.join(currentRel, name) : name;

      await walk(nextAbs, nextRel);
    }
  }

  await walk(APP_DIR, "");

  const unique = Array.from(new Set(routes))
    .filter((p) => !p.startsWith("/admin"))
    .sort();

  return unique;
}

function getArtigosArray(): MaybeArticle[] {
  // Tenta suportar múltiplos formatos:
  // - export const artigos = [...]
  // - export default [...]
  // - export const posts = [...]
  const anyMod: any = ArtigosModule;

  const candidates = [
    anyMod.artigos,
    anyMod.posts,
    anyMod.articles,
    anyMod.default,
  ];

  const arr = candidates.find((c) => Array.isArray(c));
  return Array.isArray(arr) ? (arr as MaybeArticle[]) : [];
}

function normalizeSlug(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const s = raw.trim();
  if (!s) return null;

  // remove barras acidentais
  const cleaned = s.replace(/^\/+/, "").replace(/\/+$/, "");

  // evita slugs inválidos
  if (cleaned.includes(" ")) return null;

  return cleaned;
}

function pickLastModified(article: MaybeArticle): Date | undefined {
  const cand = article.updatedAt ?? article.publishedAt ?? article.date;
  if (!cand) return undefined;

  const d = cand instanceof Date ? cand : new Date(String(cand));
  if (Number.isNaN(d.getTime())) return undefined;
  return d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = await collectStaticRoutesFromAppDir();

  const highPriority = new Set([
    "/",
    "/trilhas",
    "/artigos",
    "/noticias",
    "/glossario",
    "/profissionais",
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: highPriority.has(route) ? "weekly" : "monthly",
    priority: highPriority.has(route) ? 1 : 0.7,
  }));

  // ====== ARTIGOS (dinâmicos) ======
  const artigos = getArtigosArray();

  const artigoEntries: MetadataRoute.Sitemap = artigos
    .map((a) => {
      const slug = normalizeSlug(a.slug);
      if (!slug) return null;

      // Ajuste aqui caso sua rota real seja diferente
      const url = `${SITE_URL}/artigos/${slug}`;

      return {
        url,
        lastModified: pickLastModified(a) ?? now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    })
    .filter(Boolean) as MetadataRoute.Sitemap;

  // Remove duplicatas caso alguma rota já exista no estático por acidente
  const all = [...staticEntries, ...artigoEntries];
  const dedup = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const item of all) dedup.set(item.url, item);

  return Array.from(dedup.values());
}
