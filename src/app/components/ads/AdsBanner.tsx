// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect, useRef } from "react";
import { adsConfig, AdPosition } from "../../../config/ads";
import { AdsContainer } from "./AdsContainer";

type AdsBannerProps = {
  position: AdPosition;
  className?: string;

  /**
   * Controle fino de altura (opcional).
   * Se não passar nada, usa o padrão do AdsContainer.
   */
  minHMobile?: number;
  minHDesktop?: number;
};

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

const ADSENSE_ID = "ca-pub-4436420746304287";

// Se você quiser esconder posições específicas no mobile, liste aqui.
const DESKTOP_ONLY_POSITIONS: AdPosition[] = [];

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
}: AdsBannerProps) {
  const config = adsConfig?.[position];

  // Sem config ou desabilitado => não renderiza.
  if (!config || config.enabled === false) return null;

  const wrapperClasses = [
    DESKTOP_ONLY_POSITIONS.includes(position) ? "hidden md:block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const insRef = useRef<HTMLModElement | null>(null);


  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!config || config.enabled === false) return;

    const ins = insRef.current;
    if (!ins) return;

    // Evita push duplicado no MESMO <ins>.
    // O AdSense marca o elemento processado com data-adsbygoogle-status.
    const alreadyProcessed =
      ins.getAttribute("data-adsbygoogle-status") ||
      ins.getAttribute("data-ad-status");

    if (alreadyProcessed) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // silencioso
    }
  }, [config, position]);

  const insProps: any = {
    className: "adsbygoogle block w-full h-auto",
    style: { display: "block" as const },
    "data-ad-client": ADSENSE_ID,
    "data-ad-slot": config.adSlot,
  };

  if (config.format === "in-article") {
    insProps.style = { display: "block", textAlign: "center" as const };
    insProps["data-ad-layout"] = "in-article";
    insProps["data-ad-format"] = "fluid";
  } else if (config.format === "autorelaxed") {
    insProps["data-ad-format"] = "autorelaxed";
  } else {
    insProps["data-ad-format"] = "auto";
    if (config.fullWidthResponsive !== false) {
      insProps["data-full-width-responsive"] = "true";
    }
  }

  return (
    <div className={wrapperClasses}>
      <AdsContainer minHMobile={minHMobile} minHDesktop={minHDesktop}>
        <ins ref={insRef} {...insProps} />
      </AdsContainer>
    </div>
  );
}
