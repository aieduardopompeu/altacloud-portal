// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdsBannerProps = {
  /** ID do slot do AdSense */
  slot?: string;
  adSlot?: string; // compatibilidade com código antigo
  className?: string;
  /** data-ad-format: "auto", "autorelaxed", etc. */
  format?: string;
};

export function AdsBanner({ slot, adSlot, className, format }: AdsBannerProps) {
  const adRef = useRef<HTMLDivElement | null>(null);
  const effectiveSlot = slot ?? adSlot;
  const effectiveFormat = format ?? "auto";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!adRef.current) return;
    if (!effectiveSlot) return;

    try {
      const el = adRef.current as any;

      // evita push duplicado
      if (el.getAttribute("data-adsbygoogle-status") === "done") {
        return;
      }

      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("Erro ao inicializar AdSense:", error);
    }
  }, [effectiveSlot]);

  if (!effectiveSlot) return null;

  return (
    <div className={className ?? "my-8 flex justify-center"}>
      <ins
        ref={adRef as any}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4436420746304287"
        data-ad-slot={effectiveSlot}
        data-ad-format={effectiveFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
