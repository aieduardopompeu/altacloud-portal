// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect, useMemo, useRef } from "react";
import { adsConfig, AdPosition } from "../../../config/ads";
import { AdsContainer } from "./AdsContainer";

type AdsBannerProps = {
  position: AdPosition;
  className?: string;

  /**
   * Controle fino de altura (opcional).
   * Se não passar nada, usa o padrão do AdsContainer (90/120).
   */
  minHMobile?: number;
  minHDesktop?: number;

  /**
   * Em páginas dinâmicas, passe algo estável (ex: slug)
   * para garantir “1 push por conteúdo” quando a rota mudar.
   */
  refreshKey?: string;
};

declare global {
  interface Window {
    adsbygoogle?: any[];
    __adsensePushedKeys?: Set<string>;
  }
}

const ADSENSE_ID = "ca-pub-4436420746304287";

const DESKTOP_ONLY_POSITIONS: AdPosition[] = [
  "home_between_sections",
  "home_tracks_bottom",
  "directory_aws_after",
  "directory_middle",
  "track_middle",
  "track_bottom",
  "article_middle",
];

function getPushedSet(): Set<string> {
  if (typeof window === "undefined") return new Set<string>();
  if (!window.__adsensePushedKeys) window.__adsensePushedKeys = new Set<string>();
  return window.__adsensePushedKeys;
}

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
  refreshKey,
}: AdsBannerProps) {
  const config = adsConfig[position];

  if (!config || config.enabled === false) {
    return null;
  }

  const wrapperClasses = [
    DESKTOP_ONLY_POSITIONS.includes(position) ? "hidden md:block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // Key estável para evitar push duplicado por re-render/hidratação
  const pushKey = useMemo(
    () => `${position}::${refreshKey ?? "static"}`,
    [position, refreshKey]
  );

  // Ref do <ins> (garante que o elemento exista antes de push)
  const insRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!config || config.enabled === false) return;

    const pushed = getPushedSet();
    if (pushed.has(pushKey)) return;

    // precisa existir <ins> no DOM antes do push
    if (!insRef.current) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushed.add(pushKey);
    } catch {
      // Silencioso por estabilidade (evita console spam e reações em cascata)
    }
  }, [config, pushKey]);

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
        <ins
          ref={(el) => {
            insRef.current = el as unknown as HTMLModElement | null;
          }}
          {...insProps}
        />
      </AdsContainer>
    </div>
  );
}
