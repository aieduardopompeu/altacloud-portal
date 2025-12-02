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

  // pega o client de qualquer um dos dois nomes
  const adClient =
    process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT ??
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!adClient) return; // sem client, não tenta carregar

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("Erro ao carregar AdSense", error);
    }
  }, [adSlot, pathname, adClient]);

  let adFormat = "auto";
  let adLayout: string | undefined;
  let fullWidthResponsive: string | undefined;

  if (type === "in-article") {
    adFormat = "fluid";
    adLayout = "in-article";
  } else if (type === "multiplex") {
    adFormat = "autorelaxed";
  } else {
    adFormat = "auto";
    fullWidthResponsive = "true";
  }

  // em dev, avisa se a env não veio
  if (!adClient) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "AdsBanner: NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT / NEXT_PUBLIC_ADSENSE_CLIENT_ID não definida."
      );
    }
    return null;
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={adClient}
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
