// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect } from "react";
import { adsConfig, type AdPosition } from "../../../config/ads";

declare global {
  interface Window {
    // o AdSense injeta esse array global
    adsbygoogle?: unknown[];
  }
}

type AdsBannerProps = {
  position: AdPosition;
  className?: string;
};

export function AdsBanner({ position, className }: AdsBannerProps) {
  const config = adsConfig[position];

  // Se posição não estiver configurada ou estiver desativada, não renderiza nada
  if (!config || config.enabled === false) {
    return null;
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Inicializa / dispara o anúncio
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.error("Erro ao inicializar AdSense:", error);
      }
    }
  }, [position]);

  return (
    <ins
      className={`adsbygoogle block overflow-hidden rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 ${
        className ?? ""
      }`}
      style={{ display: config.styleDisplay ?? "block" }}
      data-ad-client={config.client}
      data-ad-slot={config.slot}
      data-ad-format={config.format}
      data-ad-layout={config.layout}
      data-full-width-responsive={
        config.fullWidthResponsive ? "true" : undefined
      }
    />
  );
}
