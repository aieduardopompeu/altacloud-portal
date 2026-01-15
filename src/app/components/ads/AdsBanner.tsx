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
   * Se não passar nada, usa o padrão do AdsContainer.
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

function getPushedSet(): Set<string> {
  if (!window.__adsensePushedKeys) window.__adsensePushedKeys = new Set<string>();
  return window.__adsensePushedKeys;
}

function hasAdSenseScriptInDom(): boolean {
  return !!document.querySelector(
    'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
  );
}

function insHasStatus(ins: HTMLElement) {
  // Quando o AdSense processa, costuma setar:
  // data-adsbygoogle-status="done" | "unfilled" | etc.
  return ins.hasAttribute("data-adsbygoogle-status");
}

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
  refreshKey,
}: AdsBannerProps) {
  const config = adsConfig?.[position];

  if (!config || config.enabled === false) return null;

  const wrapperClasses = [className ?? ""].filter(Boolean).join(" ");

  // Chave estável para evitar push duplicado por re-render/navegação
  const pushKey = useMemo(
    () => `${position}::${refreshKey ?? "static"}`,
    [position, refreshKey]
  );

  const insRef = useRef<HTMLElement | null>(null);
  const attemptsRef = useRef(0);

  useEffect(() => {
    if (!config || config.enabled === false) return;
    if (!insRef.current) return;

    const ins = insRef.current;
    const pushed = getPushedSet();

    // Se já tem status, considera pronto
    if (insHasStatus(ins)) {
      pushed.add(pushKey);
      return;
    }

    // Já tentou nesta mesma rota/refreshKey? Se sim, mas ainda sem status,
    // tentamos de novo (caso o primeiro push tenha ocorrido cedo demais).
    const maxAttempts = 10; // ~10 * 700ms = ~7s
    const delayMs = 700;

    const scheduleRetry = () => {
      attemptsRef.current += 1;
      if (attemptsRef.current >= maxAttempts) return;
      window.setTimeout(tryPush, delayMs);
    };

    const tryPush = () => {
      if (!insRef.current) return;
      if (insHasStatus(insRef.current)) {
        pushed.add(pushKey);
        return;
      }

      // Se o script não está no DOM ainda, aguarda.
      if (!hasAdSenseScriptInDom()) {
        scheduleRetry();
        return;
      }

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense push error:", e);
      }

      scheduleRetry();
    };

    attemptsRef.current = 0;
    tryPush();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, pushKey]);

  // Monta props do <ins> conforme config
  const insProps: any = {
    className:
      "adsbygoogle block w-full min-h-[var(--ads-min-h)] md:min-h-[var(--ads-min-h-md)]",
    style: { display: "block" as const },
    "data-ad-client": "ca-pub-4436420746304287",
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
            insRef.current = el;
          }}
          {...insProps}
        />
      </AdsContainer>
    </div>
  );
}
