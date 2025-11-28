// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/cookies/CookieBanner";
import { AnalyticsManager } from "./components/analytics/AnalyticsManager";
import { siteConfig, ldOrganization, ldWebsite } from "../lib/seo";

// IDs vindos do .env.local
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
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
        {/* GA4 / AdSense controlados pelo consentimento */}
        <AnalyticsManager
          gaId={GA_ID}
          adsenseClientId={ADSENSE_CLIENT_ID}
        />

        {/* JSON-LD */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(ldOrganization())}
        </Script>

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(ldWebsite())}
        </Script>

        {/* HEADER */}
        <Header />

        {/* CONTEÚDO */}
        {children}

        {/* FOOTER */}
        <Footer />

        {/* BANNER DE COOKIES */}
        <CookieBanner />
      </body>
    </html>
  );
}
