// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect, useMemo, useRef } from "react";
import { adsConfig, AdPosition } from "../../../config/ads";
import { AdsContainer } from "./AdsContainer";

type AdsBannerProps = {
  position: AdPosition;
  className?: string;

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

// Se quiser esconder posições no mobile, adicione aqui.
const DESKTOP_ONLY_POSITIONS: AdPosition[] = [];

function getPushedSet(): Set<string> {
  if (!window.__adsensePushedKeys) window.__adsensePushedKeys = new Set<string>();
  return window.__adsensePushedKeys;
}

function hasAdSenseScriptInDom(): boolean {
  return !!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
}

function insHasStatus(ins: HTMLElement) {
  // Quando o AdSense processa, costuma setar este atributo:
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

  const wrapperClasses = [
    DESKTOP_ONLY_POSITIONS.includes(position) ? "hidden md:block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // chave estável para impedir push duplicado por re-render/navegação
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

    // Se já tem status, não precisa fazer nada
    if (insHasStatus(ins)) {
      pushed.add(pushKey);
      return;
    }

    // Já considerou "pushKey" como feito? Ainda assim, se não tem status, vamos tentar novamente.
    // (Isso corrige o caso de push "cedo demais" que não inicializou o <ins>.)
    const maxAttempts = 8; // ~ 8 * 700ms = ~5-6s de tentativas
    const delayMs = 700;

    const tryPush = () => {
      // Se já processou, encerra
      if (!insRef.current) return;
      if (insHasStatus(insRef.current)) {
        pushed.add(pushKey);
        return;
      }

      // Se o script nem está no DOM, não adianta tentar agora
      if (!hasAdSenseScriptInDom()) {
        scheduleRetry();
        return;
      }

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        // NÃO marca pushed aqui; só marca quando o <ins> ganhar status.
      } catch (e) {
        // Log apenas para você depurar; se quiser “silencioso” em prod, posso condicionar por env
        console.error("AdSense push error:", e);
      }

      scheduleRetry();
    };

    const scheduleRetry = () => {
      attemptsRef.current += 1;
      if (attemptsRef.current >= maxAttempts) return;

      window.setTimeout(() => {
        tryPush();
      }, delayMs);
    };

    // Reset de tentativas por mudança de posição/refreshKey
    attemptsRef.current = 0;
    tryPush();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, pushKey]);

  // Monta props do <ins> conforme config
  const insProps: any = {
    className:
      "adsbygoogle block w-full min-h-[var(--ads-min-h)] md:min-h-[var(--ads-min-h-md)]",
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
            insRef.current = el;
          }}
          {...insProps}
        />
      </AdsContainer>
    </div>
  );
}
