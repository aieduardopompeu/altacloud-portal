// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/cookies/CookieBanner";
import { BottomStickyAd } from "./components/ads/BottomStickyAd";
import { siteConfig, ldOrganization, ldWebsite } from "../lib/seo";

// GA4 fixo por enquanto, pra garantir que funcione
const GA_ID: string = "G-TZKCQC7Q7Y";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {/* GA4 */}
        {GA_ID && (
          <>
            <Script
              id="ga4-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* ADSENSE GLOBAL */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4436420746304287"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(ldOrganization())}
        </Script>

        {/* JSON-LD Website + SearchAction */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(ldWebsite())}
        </Script>

        {/* HEADER GLOBAL */}
        <Header />

        {/* CONTEÚDO DAS PÁGINAS */}
        {children}

        {/* RODAPÉ GLOBAL */}
        <Footer />

        {/* BANNER DE COOKIES */}
        <CookieBanner />

        {/* PUBLICIDADE FIXA NO RODAPÉ – RECOLHÍVEL */}
        <BottomStickyAd />
      </body>
    </html>
  );
}
