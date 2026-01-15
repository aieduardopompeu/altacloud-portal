"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

type Props = {
  slot: string;              // obrigatório
  className?: string;
  style?: React.CSSProperties;
};

export default function Ad({ slot, className, style }: Props) {
  const insRef = useRef<HTMLModElement | null>(null);

  // BLOQUEIO: nunca renderizar sem slot
  if (!slot || String(slot).trim() === "") return null;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // noop
    }

    // Colapsa se não houver preenchimento (remove “buraco”)
    const t = window.setTimeout(() => {
      const ins = insRef.current as unknown as HTMLElement | null;
      if (!ins) return;
      const iframe = ins.querySelector("iframe") as HTMLIFrameElement | null;
      const h = iframe?.offsetHeight ?? 0;
      if (h === 0) {
        const wrap = ins.parentElement as HTMLElement | null;
        if (wrap) wrap.style.display = "none";
      }
    }, 1800);

    return () => window.clearTimeout(t);
  }, [slot]);

  return (
    <div className={className} style={style}>
      <ins
        ref={insRef as any}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
