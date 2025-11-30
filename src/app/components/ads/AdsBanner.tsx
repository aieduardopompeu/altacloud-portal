// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdsBannerProps = {
  /** ID do slot do AdSense (data-ad-slot) */
  slot: string;
  /** Classe opcional para estilizar/posicionar o wrapper */
  className?: string;
};

export function AdsBanner({ slot, className }: AdsBannerProps) {
  const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!adRef.current) return;

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
  }, []);

  return (
    <div className={className ?? "my-8 flex justify-center"}>
      <ins
        ref={adRef as any}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4436420746304287"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
