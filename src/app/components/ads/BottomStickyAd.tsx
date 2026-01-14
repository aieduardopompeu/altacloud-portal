// src/app/components/ads/BottomStickyAd.tsx
"use client";

import { useEffect, useState } from "react";
import { AdsBanner } from "./AdsBanner";
import type { AdPosition } from "@/config/ads";
import { adsConfig } from "@/config/ads";

const CLOSE_KEY = "altacloud_bottom_ad_closed";
const POSITION: AdPosition = "bottom_sticky";

export function BottomStickyAd() {
  // Se o slot estiver desativado no config, não renderiza NADA (evita barra vazia).
  if (!adsConfig[POSITION]?.enabled) return null;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyClosed = window.localStorage.getItem(CLOSE_KEY);
    if (alreadyClosed === "true") return;

    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-slate-800 bg-slate-950/95 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 6px)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-4 py-3 md:px-6">
        {/* Botão de fechar (overlay absoluto para não sumir em telas Android) */}
        <button
          type="button"
          aria-label="Fechar anúncio"
          onClick={() => {
            setVisible(false);
            try {
              window.localStorage.setItem(CLOSE_KEY, "true");
            } catch {}
          }}
          className="
            absolute right-3 top-2 z-[80]
            h-9 w-9
            rounded-full
            border border-slate-700/80
            bg-slate-950/90
            text-slate-100
            shadow-md
            flex items-center justify-center
            hover:border-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-400/60
            pointer-events-auto
          "
        >
          <span className="text-lg leading-none">×</span>
        </button>

        <div className="flex items-start gap-3 pr-12 md:pr-14">
          {/* Texto discreto (só desktop) */}
          <div className="hidden text-xs text-slate-400 md:block">
            <p className="font-semibold text-slate-300">Apoie a Alta Cloud</p>
            <p>Este conteúdo é mantido com a ajuda de parceiros e anúncios.</p>
          </div>

          {/* ANÚNCIO */}
          <div className="flex-1">
            <AdsBanner position={POSITION} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
