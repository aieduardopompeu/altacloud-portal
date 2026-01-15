// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/cookies/CookieBanner";

import { siteConfig } from "../lib/seo";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* AdSense - injeção direta no HEAD */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4436420746304287"
          crossOrigin="anonymous"
        />
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
