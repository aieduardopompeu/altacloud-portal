// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/cookies/CookieBanner";

import { siteConfig, ldOrganization, ldWebsite } from "../lib/seo";

const GA_ID = "G-TZKCQC7Q7Y";
const ADSENSE_ID = "ca-pub-4436420746304287";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const gaInit = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js', new Date());",
    `gtag('config', '${GA_ID}', { send_page_view: true });`,
  ].join("\n");

  const gaDebug = [
    "(function(){",
    "  try {",
    "    var isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';",
    "    var hasDebugParam = location.search.indexOf('_dbg=1') >= 0;",
    "    if (!isLocalhost && !hasDebugParam) return;",
    "    window.dataLayer = window.dataLayer || [];",
    "    function gtag(){window.dataLayer.push(arguments);}",
    "    gtag('set', 'debug_mode', true);",
    "  } catch(e) {}",
    "})();",
  ].join("\n");

  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4436420746304287"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className="bg-slate-950 text-slate-50 antialiased">
        {/* JSON-LD */}
        <script
          id="ld-organization"
          type="application/ld+json"
         
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }}
        ></script>
        <script
          id="ld-website"
          type="application/ld+json"
         
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebsite) }}
        ></script>

        {/* GA4 */}
        <script
          id="ga-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
         
        ></script>
        <script
          id="ga-init"
         
          dangerouslySetInnerHTML={{ __html: gaInit }}
        ></script>
        <script
          id="ga-debug"
         
          dangerouslySetInnerHTML={{ __html: gaDebug }}
        ></script>
<CookieBanner />

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
