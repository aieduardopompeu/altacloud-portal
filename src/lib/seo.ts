// src/app/lib/seo.ts
//
// Ajustes aplicados:
// - Mantém URL canônica em https://www.altacloud.com.br
// - Remove SearchAction (evita URLs de busca/parametrizadas aparecerem no GSC)
//   Se no futuro você criar uma página /buscar com noindex, dá para reativar com segurança.

export const siteConfig = {
  name: "Alta Cloud",
  description:
    "Alta Cloud é um hub de conhecimento sobre Cloud Computing: AWS, Azure, GCP, DevOps e mais.",

  // URL canônica (domínio oficial)
  url: "https://www.altacloud.com.br",

  // OG padrão (mantenha se existir em /public)
  ogImage: "/og-default.jpg",

  // GA4 (opcional — se você já configura no layout, pode manter aqui só como referência)
  gaMeasurementId: "G-TZKCQC7Q7Y",
};

// Template para meta titles
export function buildTitle(title: string) {
  return `${title} - ${siteConfig.name}`;
}

// Canonical (garante barra inicial)
export function buildCanonical(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return siteConfig.url + cleanPath;
}

// JSON-LD Organization (OBJETO)
export const ldOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    "https://www.youtube.com/@altacloud",
    "https://www.instagram.com/altacloudofficial",
  ],
};

// JSON-LD Website (OBJETO)
// Nota: sem SearchAction para evitar indexação de URLs de busca/parametrizadas.
export const ldWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
