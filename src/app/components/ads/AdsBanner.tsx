// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect } from "react";

type AdsBannerProps = {
  adSlot: string;
  format?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdsBanner({ adSlot, format = "auto", className }: AdsBannerProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Se o AdBlock bloquear ou o script não carregar, não quebra a página
    }
  }, []);

  // Usa a env SE existir, senão cai pro ID fixo do seu AdSense
  const clientId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-4436420746304287";

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={clientId}
      data-ad-slot={adSlot}
      data-ad-format={format}
    />
  );
}
