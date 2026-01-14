// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import path from "path";
import { readdir } from "fs/promises";

// Domínio canônico
const SITE_URL = "https://www.altacloud.com.br";

// Pasta do App Router
const APP_DIR = path.join(process.cwd(), "src", "app");

// Import do seu data source real
import { articles } from "./data/articles";

type ArticleMeta = {
  slug: string;
  date: string; // ex: "2025-11-26" ou "Jan 2025"
};

const EXCLUDE_DIRS = new Set([
  "api",
  "components",
  "lib",
  "config",
  "styles",
  "public",
  "data", // data não é rota
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

// Tenta extrair uma data válida do seu campo `date`
function parseArticleDate(input: string): Date | null {
  if (!input) return null;

  // 1) ISO (YYYY-MM-DD)
  const iso = new Date(input);
  if (!Number.isNaN(iso.getTime()) && /^\d{4}-\d{2}-\d{2}/.test(input)) {
    return iso;
  }

  // 2) "Jan 2025" (ou variações)
  // Fallback: tenta parsear como "01 <input>"
  const loose = new Date(`01 ${input}`);
  if (!Number.isNaN(loose.getTime())) return loose;

  return null;
}

async function collectStaticRoutesFromAppDir(): Promise<string[]> {
  const routes: string[] = [];

  async function walk(currentAbs: string, currentRel: string) {
    const entries = await readdir(currentAbs, { withFileTypes: true });

    const hasPage = entries.some((e) => e.isFile() && PAGE_FILES.has(e.name));

    const segments = currentRel ? currentRel.split(path.sep) : [];
    const isDynamic = segments.some(hasDynamicSegment);

    // Adiciona somente rotas renderizáveis e não-dinâmicas
    if (hasPage && !isDynamic) {
      routes.push(toUrlPath(currentRel));
    }

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

  // remove duplicatas e rotas que você não quer indexar
  const unique = Array.from(new Set(routes))
    .filter((p) => !p.startsWith("/admin"))
    .sort();

  return unique;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ====== 1) Rotas estáticas (varredura do /app) ======
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

  // ====== 2) Artigos dinâmicos (/artigos/[slug]) ======
  // Dedup por slug (se houver duplicado no array)
  const bySlug = new Map<string, { slug: string; lastModified: Date }>();

  for (const a of (articles as ArticleMeta[])) {
    const slug = String(a.slug || "").trim().replace(/^\/+/, "").replace(/\/+$/, "");
    if (!slug) continue;

    const d = parseArticleDate(a.date) ?? now;

    // Se duplicado, fica com o mais recente
    const existing = bySlug.get(slug);
    if (!existing || existing.lastModified.getTime() < d.getTime()) {
      bySlug.set(slug, { slug, lastModified: d });
    }
  }

  const articleEntries: MetadataRoute.Sitemap = Array.from(bySlug.values()).map(
    (a) => ({
      url: `${SITE_URL}/artigos/${a.slug}`,
      lastModified: a.lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // ====== 3) Dedup final por URL ======
  const all = [...staticEntries, ...articleEntries];
  const dedupByUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const item of all) dedupByUrl.set(item.url, item);

  return Array.from(dedupByUrl.values());
}
