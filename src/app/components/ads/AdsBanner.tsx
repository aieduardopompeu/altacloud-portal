// src/app/components/ads/AdsBanner.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

type AdKind = "display" | "in-article" | "multiplex";

type AdsBannerProps = {
  adSlot: string;
  type?: AdKind; // display, in-article ou multiplex
  className?: string;
};

export function AdsBanner({
  adSlot,
  type = "display",
  className,
}: AdsBannerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("Erro ao carregar AdSense", error);
    }
  }, [adSlot, pathname]);

  let adFormat = "auto";
  let adLayout: string | undefined;
  let fullWidthResponsive: string | undefined;

  // Ajuste fino por tipo de bloco
  if (type === "in-article") {
    adFormat = "fluid";
    adLayout = "in-article";
  } else if (type === "multiplex") {
    adFormat = "autorelaxed";
  } else {
    // display padrão responsivo
    adFormat = "auto";
    fullWidthResponsive = "true";
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        {...(adLayout ? { "data-ad-layout": adLayout } : {})}
        {...(fullWidthResponsive
          ? { "data-full-width-responsive": fullWidthResponsive }
          : {})}
      />
    </div>
  );
}
