// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdsBannerProps = {
  /**
   * ID do slot do AdSense.
   * Pode usar tanto `slot="..."` quanto `adSlot="..."` para compatibilidade.
   */
  slot?: string;
  adSlot?: string;
  /** Classe opcional para estilizar/posicionar o wrapper */
  className?: string;
};

export function AdsBanner({ slot, adSlot, className }: AdsBannerProps) {
  const adRef = useRef<HTMLDivElement | null>(null);
  const effectiveSlot = slot ?? adSlot;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!adRef.current) return;
    if (!effectiveSlot) return;

    try {
      const el = adRef.current as any;

      // evita push duplicado no mesmo bloco
      if (el.getAttribute("data-adsbygoogle-status") === "done") {
        return;
      }

      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("Erro ao inicializar AdSense:", error);
    }
  }, [effectiveSlot]);

  if (!effectiveSlot) {
    // se esquecer de passar o slot, não quebra o layout
    return null;
  }

  return (
    <div className={className ?? "my-8 flex justify-center"}>
      <ins
        ref={adRef as any}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4436420746304287"
        data-ad-slot={effectiveSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
