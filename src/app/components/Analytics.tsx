"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_ID } from "@/lib/ga";

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
      if (!gtag) return;

      if (progress > 50) {
        gtag("event", "scroll_50");
      }
      if (progress > 90) {
        gtag("event", "scroll_90");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      {/* Script base do GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            debug_mode: true,
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
