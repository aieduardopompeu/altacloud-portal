// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import path from "path";
import { readdir } from "fs/promises";

const SITE_URL = "https://www.altacloud.com.br";
const APP_DIR = path.join(process.cwd(), "src", "app");

type SlugItem = { slug: string; date?: string };

const EXCLUDE_DIRS = new Set([
  "api",
  "components",
  "lib",
  "config",
  "styles",
  "public",
  "data",
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

function parseISODate(input?: string): Date | null {
  if (!input) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input)) return null;
  const d = new Date(`${input}T00:00:00.000Z`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function daysBetween(a: Date, b: Date) {
  const ms = Math.abs(b.getTime() - a.getTime());
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function normalizeSlug(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const slug = raw.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  if (!slug) return null;
  if (slug.includes(" ")) return null;
  return slug;
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

  return Array.from(new Set(routes))
    .filter((p) => !p.startsWith("/admin"))
    .sort();
}

// Import dinâmico SEM string literal (evita TS exigir o arquivo existir no build).
async function safeImport(modulePath: string): Promise<any | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const importer = new Function("p", "return import(p);") as (p: string) => Promise<any>;
    return await importer(modulePath);
  } catch {
    return null;
  }
}

function extractArray(mod: any): SlugItem[] {
  if (!mod) return [];
  const candidates = [
    mod.articles,
    mod.artigos,
    mod.glossario,
    mod.glossary,
    mod.terms,
    mod.trilhas,
    mod.tracks,
    mod.items,
    mod.default,
  ];
  const arr = candidates.find((c) => Array.isArray(c));
  return Array.isArray(arr) ? (arr as SlugItem[]) : [];
}

function makeEntriesFromSlugs(params: {
  basePath: string;
  items: SlugItem[];
  now: Date;
  defaultPriority: number;
  maxAgeWeeklyDays: number;
}): MetadataRoute.Sitemap {
  const { basePath, items, now, defaultPriority, maxAgeWeeklyDays } = params;

  const bySlug = new Map<string, { slug: string; lastModified: Date }>();

  for (const item of items) {
    const slug = normalizeSlug(item.slug);
    if (!slug) continue;

    const lm = parseISODate(item.date) ?? now;

    const existing = bySlug.get(slug);
    if (!existing || existing.lastModified.getTime() < lm.getTime()) {
      bySlug.set(slug, { slug, lastModified: lm });
    }
  }

  return Array.from(bySlug.values()).map((x) => {
    const ageDays = daysBetween(x.lastModified, now);
    const freq: "weekly" | "monthly" =
      ageDays <= maxAgeWeeklyDays ? "weekly" : "monthly";

    return {
      url: `${SITE_URL}${basePath}/${x.slug}`,
      lastModified: x.lastModified,
      changeFrequency: freq,
      priority: defaultPriority,
    };
  });
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

  // Tenta carregar módulos opcionais. Se não existirem, retorna [] sem quebrar build.
  const [articlesMod, glossarioMod, trilhasMod] = await Promise.all([
    safeImport("./data/articles"),
    safeImport("./data/glossario"),
    safeImport("./data/trilhas"),
  ]);

  const articleEntries = makeEntriesFromSlugs({
    basePath: "/artigos",
    items: extractArray(articlesMod),
    now,
    defaultPriority: 0.8,
    maxAgeWeeklyDays: 30,
  });

  const glossaryEntries = makeEntriesFromSlugs({
    basePath: "/glossario",
    items: extractArray(glossarioMod),
    now,
    defaultPriority: 0.7,
    maxAgeWeeklyDays: 60,
  });

  const trackEntries = makeEntriesFromSlugs({
    basePath: "/trilhas",
    items: extractArray(trilhasMod),
    now,
    defaultPriority: 0.85,
    maxAgeWeeklyDays: 60,
  });

  const all = [...staticEntries, ...articleEntries, ...glossaryEntries, ...trackEntries];
  const dedup = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const item of all) dedup.set(item.url, item);

  return Array.from(dedup.values());
}
