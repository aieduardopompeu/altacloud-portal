// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect } from "react";

type AdsBannerProps = {
  /**
   * Novo nome da prop (recomendado)
   * Ex.: "6664851396"
   */
  slot?: string;

  /**
   * Nome antigo da prop (legado).
   * Mantido só para compatibilidade com chamadas existentes,
   * ex.: <AdsBanner adSlot="..." />
   */
  adSlot?: string;

  /** Ex.: "auto", "horizontal", etc. */
  format?: string;

  /** Classes extras para o wrapper */
  className?: string;
};

declare global {
  interface Window {
    // adsbygoogle é basicamente um array que recebe objetos.
    // Usar unknown[] evita encrenca de tipo no .push({}).
    adsbygoogle: unknown[];
  }
}

export function AdsBanner({
  slot,
  adSlot,
  format = "auto",
  className = "",
}: AdsBannerProps) {
  // Aceita tanto slot quanto adSlot; dá prioridade ao novo nome.
  const finalSlot = slot ?? adSlot;

  useEffect(() => {
    if (!finalSlot) return;

    try {
      // Garante o array e empurra um novo "pedido" de anúncio
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Erro ao inicializar adsbygoogle:", err);
      }
    }
  }, [finalSlot]);

  // Se não tiver slot nenhum, não renderiza nada
  if (!finalSlot) {
    if (process.env.NODE_ENV === "development") {
      console.warn("AdsBanner renderizado sem 'slot' ou 'adSlot'.");
    }
    return null;
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT}
        data-ad-slot={finalSlot}
        data-ad-format={format}
      />
    </div>
  );
}
