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
      // Se o AdBlock bloquear, não quebra a página
    }
  }, []);

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!clientId) {
    // Se não tiver client configurado, não renderiza nada
    return null;
  }

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
