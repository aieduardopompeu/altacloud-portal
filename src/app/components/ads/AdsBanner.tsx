// src/app/components/ads/AdsBanner.tsx
import Script from "next/script";
import { adsConfig, AdPosition } from "../../../config/ads";

type AdsBannerProps = {
  position: AdPosition;
  className?: string;
};

declare global {
  // Evita erro de tipo com (adsbygoogle = window.adsbygoogle || [])
  interface Window {
    adsbygoogle: any[];
  }
}

const ADSENSE_ID = "ca-pub-4436420746304287";

// Posições que DEVEM aparecer apenas em telas médias/grandes (desktop/tablet)
const DESKTOP_ONLY_POSITIONS: AdPosition[] = [
  // HOME: anúncios extras
  "home_between_sections",
  "home_tracks_bottom",

  // DIRETÓRIO: anúncios depois da AWS / meio da página
  "directory_aws_after",
  "directory_middle",

  // TRILHAS: anúncios de meio e final de página
  "track_middle",
  "track_bottom",

  // ARTIGOS: anúncio do meio do texto
  "article_middle",
];

export function AdsBanner({ position, className }: AdsBannerProps) {
  const config = adsConfig[position];

  // Se não tiver config ou estiver desativado, não renderiza nada
  if (!config || config.enabled === false) {
    return null;
  }

  // Classes do wrapper: aqui controlamos "desktop only"
  const wrapperClasses = [
    DESKTOP_ONLY_POSITIONS.includes(position) ? "hidden md:block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // Props dinâmicas do <ins> de acordo com o formato
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
    // default: display responsivo
    insProps["data-ad-format"] = "auto";
    if (config.fullWidthResponsive !== false) {
      insProps["data-full-width-responsive"] = "true";
    }
  }

  return (
    <div className={wrapperClasses}>
      {/* Placeholder discreto (quando o anúncio ainda não carregou) */}
      <div className="mb-3 rounded-2xl border border-dashed border-slate-800/80 bg-slate-900/60 px-4 py-3 text-center text-[11px] text-slate-500">
        <span className="opacity-80">
          Espaço de anúncio{" "}
          <span className="hidden sm:inline">(slot: {config.adSlot})</span>
        </span>
      </div>

      {/* Bloco real do Google AdSense */}
      <ins {...insProps} />

      {/* Script para disparar o anúncio */}
      <Script id={`adsbygoogle-${position}`} strategy="afterInteractive">
        {`
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("Adsense error on position: ${position}", e);
          }
        `}
      </Script>
    </div>
  );
}
