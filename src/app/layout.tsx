// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/cookies/CookieBanner";
import { siteConfig, ldOrganization, ldWebsite } from "../lib/seo";

// Lê dos env, mas cai no siteConfig se precisar
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || siteConfig.gaMeasurementId || "";
const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-4436420746304287";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: SITE_URL,
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
        {/* GA4 – sempre carregando (métricas completas) */}
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

        {/* ADSENSE GLOBAL – exatamente como o código do print, entre <head> */}
        {ADSENSE_CLIENT_ID && (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}

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

        {/* BANNER DE COOKIES – agora só informativo / preferências visuais */}
        <CookieBanner />
      </body>
    </html>
  );
}
