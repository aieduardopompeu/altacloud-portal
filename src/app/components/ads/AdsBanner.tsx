"use client";

// src/app/components/ads/AdsBanner.tsx
import { useEffect, useMemo, useRef, useState } from "react";
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
    adsbygoogle: any[];
  }
}

const ADSENSE_ID = "ca-pub-4436420746304287";

/**
 * Posições que devem existir somente em desktop/tablet.
 * Importante: não renderizar nem o <ins> no mobile.
 */
const DESKTOP_ONLY_POSITIONS: AdPosition[] = [
  "home_between_sections",
  "home_tracks_bottom",
  "directory_aws_after",
  "directory_middle",
  "track_middle",
  "track_bottom",
  "article_middle",
];

function useIsDesktop(breakpointPx = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpointPx}px)`);

    const update = () => setIsDesktop(mq.matches);
    update();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, [breakpointPx]);

  return isDesktop;
}

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
}: AdsBannerProps) {
  /**
   * HOOKS SEMPRE NO TOPO (para nunca variar o nº de hooks entre renders)
   */
  const isDesktop = useIsDesktop(768);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const pushedRef = useRef(false);

  const config = adsConfig[position];

  const isDesktopOnly = useMemo(
    () => DESKTOP_ONLY_POSITIONS.includes(position),
    [position]
  );

  const shouldRender = useMemo(() => {
    if (!config || config.enabled === false) return false;
    if (isDesktopOnly && !isDesktop) return false;
    return true;
  }, [config, isDesktopOnly, isDesktop]);

  const wrapperClasses = useMemo(
    () => [className ?? ""].filter(Boolean).join(" "),
    [className]
  );

  const insProps = useMemo(() => {
    if (!config) return null;

    const base: any = {
      className: "adsbygoogle block w-full h-auto",
      style: { display: "block" as const },
      "data-ad-client": ADSENSE_ID,
      "data-ad-slot": config.adSlot,
    };
      base["data-adtest"] = "on";

    if (config.format === "in-article") {
      base.style = { display: "block", textAlign: "center" as const };
      base["data-ad-layout"] = "in-article";
      base["data-ad-format"] = "fluid";
    } else if (config.format === "autorelaxed") {
      base["data-ad-format"] = "autorelaxed";
    } else {
      base["data-ad-format"] = "auto";
      if (config.fullWidthResponsive !== false) {
        base["data-full-width-responsive"] = "true";
      }
    }

    return base;
  }, [config]);

  /**
   * Push do AdSense: só quando:
   * - o componente deve renderizar
   * - está em viewport
   * - largura > 0 (mata o availableWidth=0)
   */
  useEffect(() => {
    if (!shouldRender) return;
    if (!hostRef.current) return;
    if (!insProps) return;

    // evita push duplicado (SPA navigation / re-render)
    pushedRef.current = false;

    const el = hostRef.current;

    const tryPush = () => {
      if (pushedRef.current) return;

      const rect = el.getBoundingClientRect();
      if (!rect.width || rect.width <= 0) return;

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch {
        // Sem log para não poluir console em produção
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        tryPush();
      },
      { threshold: 0.1 }
    );

    io.observe(el);

    // fallback: tenta depois de pequeno delay (caso já esteja visível)
    const t = window.setTimeout(tryPush, 250);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [shouldRender, insProps]);

  /**
   * Depois de TODOS os hooks, pode retornar null com segurança.
   */
  if (!shouldRender || !insProps) return null;

  return (
    <div className={wrapperClasses} ref={hostRef}>
      <AdsContainer minHMobile={minHMobile} minHDesktop={minHDesktop}>
        <ins {...insProps} />
      </AdsContainer>
    </div>
  );
}
