"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

type AdsBannerProps = {
  adSlot: string;
  className?: string;
};

export function AdsBanner({ adSlot, className = "" }: AdsBannerProps) {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (err) {
      // Se o AdBlock bloquear, não quebra o site
      console.warn("Adsense error:", err);
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-500">
        Publicidade
      </span>

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4436420746304287"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
