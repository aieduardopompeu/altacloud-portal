// src/lib/seo.ts
//
// Fonte única de configuração de SEO do Alta Cloud.
// Mantém URL canônica em https://www.altacloud.com.br
// e evita SearchAction para não gerar URLs parametrizadas no GSC.

export const siteConfig = {
  name: "Alta Cloud",
  description:
    "Alta Cloud é um hub de conhecimento sobre Cloud Computing: AWS, Azure, GCP, DevOps e mais.",
  url: "https://www.altacloud.com.br",
  ogImage: "/og-default.jpg",
  gaMeasurementId: "G-TZKCQC7Q7Y",
};

export function buildTitle(title: string) {
  return `${title} - ${siteConfig.name}`;
}

export function buildCanonical(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return siteConfig.url + cleanPath;
}

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

export const ldWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
