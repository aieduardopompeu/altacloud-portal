// src/app/lib/seo.ts

export const siteConfig = {
  name: "Alta Cloud",
  description:
    "Alta Cloud é um hub de conhecimento sobre Cloud Computing: AWS, Azure, GCP, DevOps e mais.",
  url: "https://altacloud.com.br",

  // OG padrão
  ogImage: "/og-default.jpg",

  // GA4 — coloque seu ID real aqui depois
  gaMeasurementId: "G-XXXXXXXXXX",
};

// Template para meta titles
export function buildTitle(title: string) {
  return `${title} - ${siteConfig.name}`;
}

// Canonical
export function buildCanonical(path: string) {
  return siteConfig.url + path;
}

// JSON-LD Organization
export function ldOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.url + "/logo.png",
    sameAs: [
      "https://www.youtube.com/@altacloud",
      "https://www.instagram.com/altacloudofficial",
    ],
  };
}

// JSON-LD Website + SearchAction
export function ldWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
