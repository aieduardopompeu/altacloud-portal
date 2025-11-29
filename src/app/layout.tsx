// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/cookies/CookieBanner";

import { siteConfig, ldOrganization, ldWebsite } from "../lib/seo";

const GA_ID = siteConfig.gaMeasurementId || "";

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
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const hasValidGAId =
    typeof GA_ID === "string" &&
    GA_ID.length > 0 &&
    GA_ID !== "G-XXXXXXXXXX";

  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD – Organização */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldOrganization),
          }}
        />

        {/* JSON-LD – Website */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldWebsite),
          }}
        />

        {/* GA4 base – carrega gtag.js apenas se tiver Measurement ID válido */}
        {hasValidGAId && (
          <Script
            id="ga4-base"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        )}

        {/* GA4 config – define dataLayer e gtag, e faz o config do GA4 */}
        {hasValidGAId && (
          <Script
            id="ga4-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: true
                });
              `,
            }}
          />
        )}

        {/* GA4 Debug – ativa debug_mode para localhost ou URLs com ?_dbg=1 */}
        {hasValidGAId && (
          <Script
            id="ga4-debug"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  if (typeof window === 'undefined') return;

                  const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
                  const hasDebugParam = location.search.includes('_dbg=1');

                  if (!isLocalhost && !hasDebugParam) return;

                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('set', 'debug_mode', true);
                })();
              `,
            }}
          />
        )}
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
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
