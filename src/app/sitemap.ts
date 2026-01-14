// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import path from "path";
import { readdir } from "fs/promises";

const SITE_URL = "https://www.altacloud.com.br";

const APP_DIR = path.join(process.cwd(), "src", "app");

// Pastas/rotas que não devem entrar no sitemap
const EXCLUDE_DIRS = new Set([
  "api",
  "components",
  "lib",
  "config",
  "styles",
  "public",
]);

const PAGE_FILES = new Set(["page.tsx", "page.jsx", "page.mdx", "page.md"]);

function isRouteGroup(dirName: string) {
  // Ex.: (marketing), (admin)
  return dirName.startsWith("(") && dirName.endsWith(")");
}

function isPrivateOrInternal(dirName: string) {
  // Ex.: _next, _internal, pastas auxiliares
  return dirName.startsWith("_");
}

function hasDynamicSegment(segment: string) {
  // Ex.: [slug], [...slug]
  return segment.startsWith("[") && segment.endsWith("]");
}

function toUrlPath(relativeDir: string) {
  // Converte path do filesystem para rota URL
  const normalized = relativeDir.split(path.sep).join("/");
  // raiz do app vira "/"
  return normalized === "" ? "/" : `/${normalized}`;
}

async function collectStaticRoutesFromAppDir(): Promise<string[]> {
  const routes: string[] = [];

  async function walk(currentAbs: string, currentRel: string) {
    const entries = await readdir(currentAbs, { withFileTypes: true });

    // Se esta pasta tem page.*, ela é uma rota “renderizável”
    const hasPage = entries.some(
      (e) => e.isFile() && PAGE_FILES.has(e.name)
    );

    // Não adiciona se for rota dinâmica
    const segments = currentRel ? currentRel.split(path.sep) : [];
    const isDynamic = segments.some(hasDynamicSegment);

    if (hasPage && !isDynamic) {
      routes.push(toUrlPath(currentRel));
    }

    // Desce recursivamente nas subpastas
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const name = entry.name;

      // Ignora pastas especiais
      if (EXCLUDE_DIRS.has(name)) continue;
      if (isRouteGroup(name)) continue;
      if (isPrivateOrInternal(name)) continue;

      // Ignora pasta de assets caso exista
      if (name === "assets") continue;

      const nextAbs = path.join(currentAbs, name);
      const nextRel = currentRel ? path.join(currentRel, name) : name;

      await walk(nextAbs, nextRel);
    }
  }

  await walk(APP_DIR, "");

  // Remove duplicatas e normaliza
  const unique = Array.from(new Set(routes));

  // Opcional: remover rotas que você não quer indexar
  // Ex.: páginas internas ou testes
  const filtered = unique.filter((p) => !p.startsWith("/admin"));

  // Ordena para estabilidade
  filtered.sort();

  return filtered;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes = await collectStaticRoutesFromAppDir();

  // Ajuste simples de prioridades (home e hubs principais)
  const highPriority = new Set([
    "/",
    "/trilhas",
    "/artigos",
    "/noticias",
    "/glossario",
    "/profissionais",
  ]);

  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: highPriority.has(route) ? "weekly" : "monthly",
    priority: highPriority.has(route) ? 1 : 0.7,
  }));
}
