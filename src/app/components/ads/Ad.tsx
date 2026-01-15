"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

type Props = {
  slot: string;
  className?: string;
  /** default 250 */
  minHeight?: number;
};

export default function Ad({ slot, className, minHeight = 250 }: Props) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // não quebra a página
      console.error("Adsense push error:", e);
    }
  }, []);

  // Regra de ouro: NUNCA renderizar <ins> sem slot
  if (!slot) return null;

  return (
    <div className={`ads-wrapper ${className ?? ""}`.trim()} style={{ minHeight }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight }}
        data-ad-client="ca-pub-4436420746304287"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
