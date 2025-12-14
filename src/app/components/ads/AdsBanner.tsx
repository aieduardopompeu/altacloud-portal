// src/app/components/ads/AdsBanner.tsx
import Script from "next/script";
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

const DESKTOP_ONLY_POSITIONS: AdPosition[] = [
  "home_between_sections",
  "home_tracks_bottom",
  "directory_aws_after",
  "directory_middle",
  "track_middle",
  "track_bottom",
  "article_middle",
];

export function AdsBanner({
  position,
  className,
  minHMobile,
  minHDesktop,
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
      {/* Sem placeholder textual: remove completamente "Espaço de anúncio (slot: ...)" */}
      <AdsContainer minHMobile={minHMobile} minHDesktop={minHDesktop}>
        <ins {...insProps} />
      </AdsContainer>

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
