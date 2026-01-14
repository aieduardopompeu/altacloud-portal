// src/app/components/ads/AdsBanner.tsx
"use client";

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
    adsbygoogle?: any[];
  }
}

const ADSENSE_ID = "ca-pub-4436420746304287";
const CONSENT_STORAGE_KEY = "altacloud.cookieConsent"; // mesmo do CookieBanner

// Se quiser esconder posições específicas no mobile, liste aqui.
const DESKTOP_ONLY_POSITIONS: AdPosition[] = [];

type ConsentLevel = "essential" | "all" | "none";

function getConsentLevel(): ConsentLevel {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return "essential";
    const parsed = JSON.parse(raw) as { level?: ConsentLevel };
    if (parsed?.level === "all" || parsed?.level === "none" || parsed?.level === "essential") {
      return parsed.level;
    }
    return "essential";
  } catch {
    return "essential";
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Espera o AdSense estar pronto para processar a fila.
 * Mantém timeout curto para evitar "aparece e some" em refresh/navegação.
 */
async function waitForAdSenseReady(timeoutMs = 2500) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (typeof window !== "undefined" && Array.isArray(window.adsbygoogle)) return true;
    await sleep(120);
  }
  return Array.isArray(window.adsbygoogle);
}

export function AdsBanner({ position, className, minHMobile, minHDesktop }: AdsBannerProps) {
  const config = adsConfig?.[position];
  if (!config || config.enabled === false) return null;

  const wrapperClasses = useMemo(() => {
    return [
      DESKTOP_ONLY_POSITIONS.includes(position) ? "hidden md:block" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");
  }, [position, className]);

  // HTMLElement é suficiente para ler atributos e marcar status
  const insRef = useRef<HTMLElement | null>(null);

  // Re-executa push quando o usuário altera consentimento
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => setTick((t) => t + 1);
    window.addEventListener("altacloud:cookie-consent-change", handler as any);
    return () =>
      window.removeEventListener("altacloud:cookie-consent-change", handler as any);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (typeof window === "undefined") return;
      if (!config || config.enabled === false) return;

      const ins = insRef.current;
      if (!ins) return;

      // Evita push duplicado no MESMO <ins>
      const alreadyProcessed =
        ins.getAttribute("data-adsbygoogle-status") ||
        ins.getAttribute("data-ad-status");
      if (alreadyProcessed) return;

      // Se não aceitou "all", força Non-Personalized Ads (NPA) para estabilidade.
      const level = getConsentLevel();
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      if (level !== "all") {
        (window as any).adsbygoogle.requestNonPersonalizedAds = 1;
      } else {
        try {
          delete (window as any).adsbygoogle.requestNonPersonalizedAds;
        } catch {}
      }

      // Aguarda script carregar antes do push
      await waitForAdSenseReady(2500);
      if (cancelled) return;

      // Última checagem
      const processedAfterWait =
        ins.getAttribute("data-adsbygoogle-status") ||
        ins.getAttribute("data-ad-status");
      if (processedAfterWait) return;

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch {
        // silencioso
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [config, position, tick]);

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
