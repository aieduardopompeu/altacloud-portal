"use client";

// src/app/components/ads/AdsBanner.tsx
import { useEffect, useMemo, useRef } from "react";
import { adsConfig, AdPosition } from "../../../config/ads";
import { AdsContainer } from "./AdsContainer";

type AdsBannerProps = {
  position: AdPosition;
  className?: string;

  minHMobile?: number;
  minHDesktop?: number;
};

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

// ✅ seu publisher id fixo (não depende do AdConfig)
const ADSENSE_ID = "ca-pub-4436420746304287";

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
}: AdsBannerProps) {
  const config = adsConfig[position];

  // <ins> é HTMLModElement (serve para <ins> e <del>)
  const insRef = useRef<HTMLModElement | null>(null);

  const enabled = useMemo(() => {
    if (!config || config.enabled === false) return false;
    return true;
  }, [config]);

  useEffect(() => {
    if (!enabled) return;

    const el = insRef.current;
    if (!el) return;

    // ✅ Evita push duplicado em re-render / route change
    if (el.dataset.adsPushed === "1") return;

    let cancelled = false;

    const tryPush = () => {
      if (cancelled) return;

      const node = insRef.current;
      if (!node) return;

      if (node.dataset.adsPushed === "1") return;

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        node.dataset.adsPushed = "1";
      } catch {
        // Script do AdSense pode não estar pronto ainda; tenta novamente
        setTimeout(tryPush, 800);
      }
    };

    const t = window.setTimeout(tryPush, 150);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [enabled, position, config?.adSlot]);

  if (!enabled || !config) return null;

  const isInArticle = config.format === "in-article";
  const isAutoRelaxed = config.format === "autorelaxed";
  const fullWidthResponsive = config.fullWidthResponsive !== false;

  return (
    <div className={className}>
      <AdsContainer minHMobile={minHMobile} minHDesktop={minHDesktop}>
        <ins
          ref={insRef}
          className="adsbygoogle block w-full h-auto"
          style={
            isInArticle
              ? ({ display: "block", textAlign: "center" } as const)
              : ({ display: "block" } as const)
          }
          data-ad-client={ADSENSE_ID}
          data-ad-slot={config.adSlot}
          data-ad-format={isInArticle ? "fluid" : isAutoRelaxed ? "autorelaxed" : "auto"}
          {...(isInArticle ? { "data-ad-layout": "in-article" } : {})}
          {...(!isInArticle
            ? { "data-full-width-responsive": fullWidthResponsive ? "true" : "false" }
            : {})}
        />
      </AdsContainer>
    </div>
  );
}
