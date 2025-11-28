"use client";

import { useEffect } from "react";

type ConsentLevel = "essential" | "all" | "none";

interface AnalyticsManagerProps {
  gaId?: string; // ex.: "G-XXXXXXXXXX"
  adsenseClientId?: string; // ex.: "ca-pub-XXXXXXXXXXXX"
}

const STORAGE_KEY = "altacloud.cookieConsent";

function getStoredConsentLevel(): ConsentLevel | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { level?: ConsentLevel };
    return parsed.level ?? null;
  } catch {
    return null;
  }
}

function loadGA4(gaId: string) {
  if (!gaId) return;

  // Evitar duplicar
  if (document.querySelector('script[data-altacloud-ga4="true"]')) return;

  const scriptTag = document.createElement("script");
  scriptTag.async = true;
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  scriptTag.setAttribute("data-altacloud-ga4", "true");
  document.head.appendChild(scriptTag);

  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;
  document.head.appendChild(inlineScript);
}

function loadAdSense(clientId: string) {
  if (!clientId) return;

  if (document.querySelector('script[data-altacloud-adsense="true"]')) return;

  const scriptTag = document.createElement("script");
  scriptTag.async = true;
  scriptTag.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
  scriptTag.crossOrigin = "anonymous";
  scriptTag.setAttribute("data-altacloud-adsense", "true");
  document.head.appendChild(scriptTag);
}

export function AnalyticsManager({ gaId, adsenseClientId }: AnalyticsManagerProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    function applyConsent(level: ConsentLevel | null) {
      if (level === "all") {
        if (gaId) loadGA4(gaId);
        if (adsenseClientId) loadAdSense(adsenseClientId);
      }
      // "essential" e "none" → não carregam GA4/AdSense
    }

    const initialLevel =
      (window as any).ALTACLOUD_COOKIE_CONSENT_LEVEL ??
      getStoredConsentLevel();

    applyConsent(initialLevel);

    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ level?: ConsentLevel }>;
      if (!custom.detail?.level) return;
      applyConsent(custom.detail.level);
    };

    window.addEventListener("altacloud:cookie-consent-change", handler);
    return () => {
      window.removeEventListener("altacloud:cookie-consent-change", handler);
    };
  }, [gaId, adsenseClientId]);

  return null;
}
