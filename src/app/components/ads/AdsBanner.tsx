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

const ADSENSE_ID = "ca-pub-4436420746304287";

// Ajuste aqui se você quiser esconder algumas posições no mobile.
// Se você não usa isso, pode deixar vazio.
const DESKTOP_ONLY_POSITIONS: AdPosition[] = [
  // Exemplo (adicione/remova conforme seu config real):
  // "directory_top",
  // "directory_middle",
  // "track_top",
  // "track_middle",
  // "track_bottom",
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
  const config = adsConfig?.[position];

  // Se não existe config para a posição ou está desabilitado, não renderiza.
  if (!config || config.enabled === false) return null;

  const wrapperClasses = [
    DESKTOP_ONLY_POSITIONS.includes(position) ? "hidden md:block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // Chave estável para impedir push duplicado por re-render/navegação
  const pushKey = useMemo(
    () => `${position}::${refreshKey ?? "static"}`,
    [position, refreshKey]
  );

  // Ref do <ins> — garante que o elemento exista antes do push
  const insRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!config || config.enabled === false) return;
    if (!insRef.current) return;

    const pushed = getPushedSet();
    if (pushed.has(pushKey)) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushed.add(pushKey);
    } catch {
      // Não loga erro para não poluir console (e evitar “tempestade” em produção)
    }
  }, [config, pushKey]);

  // Monta props do <ins> conforme o seu config
  const insProps: any = {
    className: "adsbygoogle block w-full h-auto",
    style: { display: "block" as const },
    "data-ad-client": ADSENSE_ID,
    "data-ad-slot": config.adSlot,
  };

  // Alguns configs usam "in-article"/"fluid"
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
