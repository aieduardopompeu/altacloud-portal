"use client";

// src/app/components/ads/AdsBanner.tsx
import { useEffect, useMemo, useRef, useState } from "react";
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
};

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const ADSENSE_ID = "ca-pub-4436420746304287";

/**
 * Posições que devem existir somente em desktop/tablet.
 * IMPORTANTE: não podemos renderizar isso no mobile (mesmo hidden),
 * senão o push roda com availableWidth=0.
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

    // Compatibilidade
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
  const config = adsConfig[position];
  const isDesktop = useIsDesktop(768);

  // 1) Se a posição é desktop-only, não monta no mobile.
  const isDesktopOnly = DESKTOP_ONLY_POSITIONS.includes(position);
  if (isDesktopOnly && !isDesktop) return null;

  if (!config || config.enabled === false) return null;

  const wrapperClasses = useMemo(
    () => [className ?? ""].filter(Boolean).join(" "),
    [className]
  );

  const insProps: any = useMemo(() => {
    const base: any = {
      className: "adsbygoogle block w-full h-auto",
      style: { display: "block" as const },
      "data-ad-client": ADSENSE_ID,
      "data-ad-slot": config.adSlot,
    };

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
  }, [config.adSlot, config.format, config.fullWidthResponsive]);

  // 2) Push só quando estiver visível e com largura > 0
  const hostRef = useRef<HTMLDivElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!hostRef.current) return;
    if (pushedRef.current) return;

    const el = hostRef.current;

    const tryPush = () => {
      if (pushedRef.current) return;

      const rect = el.getBoundingClientRect();
      // Evita "availableWidth=0"
      if (!rect.width || rect.width <= 0) return;

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch (e) {
        // Mantém log limpo; se você quiser depurar:
        // console.error(`Adsense push error on position: ${position}`, e);
      }
    };

    // Observa quando entra em viewport
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        tryPush();
      },
      { threshold: 0.1 }
    );

    io.observe(el);

    // Fallback: tenta após pequeno delay (caso já esteja visível)
    const t = window.setTimeout(tryPush, 250);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [position]);

  return (
    <div className={wrapperClasses} ref={hostRef}>
      <AdsContainer minHMobile={minHMobile} minHDesktop={minHDesktop}>
        <ins {...insProps} />
      </AdsContainer>
    </div>
  );
}
