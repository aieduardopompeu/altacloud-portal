// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.altacloud.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Rotas “fixas” principais
  const staticRoutes = [
    "",
    "/trilhas",
    "/profissionais",
    "/artigos",
    "/noticias",
    "/glossario",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  // Se você tiver listas dinâmicas (artigos/notícias/trilhas),
  // dá para evoluir depois buscando do seu data source.
  // Por ora, este sitemap já resolve descoberta e consolidação.

  return staticEntries;
}
