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

const ADSENSE_CLIENT = "ca-pub-4436420746304287";
const STORAGE_KEY = "altacloud.cookieConsent";

type ConsentLevel = "essential" | "all" | "none";

function getConsentLevel(): ConsentLevel {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return "essential";
    const parsed = JSON.parse(saved) as { level?: ConsentLevel };
    if (parsed.level === "all" || parsed.level === "none" || parsed.level === "essential") {
      return parsed.level;
    }
    return "essential";
  } catch {
    return "essential";
  }
}

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
}: AdsBannerProps) {
  const config = adsConfig?.[position];
  const insRef = useRef<HTMLModElement | null>(null);

  // Re-render quando o usuário muda consentimento (para reinicializar o <ins>)
  const [consentTick, setConsentTick] = useState(0);

  useEffect(() => {
    const onConsent = () => setConsentTick((v) => v + 1);
    window.addEventListener("altacloud:cookie-consent-change", onConsent as any);
    return () =>
      window.removeEventListener("altacloud:cookie-consent-change", onConsent as any);
  }, []);

  const consentLevel = useMemo(() => {
    if (typeof window === "undefined") return "essential" as ConsentLevel;
    return getConsentLevel();
  }, [consentTick]);

  // Key força um novo <ins> quando o consentimento muda (evita 'sumir' após F5/rota/consent)
  const insKey = `${position}:${consentLevel}:${config?.adSlot ?? "noslot"}`;

  const wrapperClasses = ["w-full", className ?? ""].filter(Boolean).join(" ");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!config || config.enabled === false) return;

    const ins = insRef.current;
    if (!ins) return;

    // Se não aceitou "all", força Non-Personalized Ads (mais consistente e compatível com LGPD/Consent Mode básico)
    // Importante: isso NÃO bloqueia anúncio — apenas reduz personalização.
    if (consentLevel !== "all") {
      ins.setAttribute("data-npa", "1");
    } else {
      ins.removeAttribute("data-npa");
    }

    // Evita push duplicado no MESMO <ins>
    const alreadyProcessed =
      ins.getAttribute("data-adsbygoogle-status") || ins.getAttribute("data-ad-status");
    if (alreadyProcessed) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // silencioso
    }
  }, [config, position, consentLevel, insKey]);

  if (!config || config.enabled === false) {
    return null;
  }

  const insProps: any = {
    key: insKey,
    className: "adsbygoogle block w-full h-auto",
    style: { display: "block" as const },
    "data-ad-client": ADSENSE_CLIENT,
    "data-ad-slot": config.adSlot,
  };

  // Display ads responsivos (recomendado)
  if (config.format === "auto") {
    insProps["data-ad-format"] = "auto";
    if (config.fullWidthResponsive !== false) {
      insProps["data-full-width-responsive"] = "true";
    }
  }

  // In-article (quando usado)
  if (config.format === "in-article") {
    insProps["data-ad-format"] = "fluid";
    insProps["data-ad-layout"] = "in-article";
  }

  return (
    <div className={wrapperClasses}>
      <AdsContainer minHMobile={minHMobile} minHDesktop={minHDesktop}>
        <ins ref={insRef} {...insProps} />
      </AdsContainer>
    </div>
  );
}
