// src/app/components/ads/BottomStickyAd.tsx
"use client";

import { useEffect, useState } from "react";
import { AdsBanner } from "./AdsBanner";

const CLOSE_KEY = "altacloud_bottom_ad_closed";

export function BottomStickyAd() {
  const [visible, setVisible] = useState(false);

  // Mostra o banner alguns segundos depois, se o usuário não tiver fechado
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyClosed = window.localStorage.getItem(CLOSE_KEY);
    if (alreadyClosed === "true") return;

    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/95 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]">
      <div className="mx-auto flex max-w-6xl items-start gap-3 px-4 py-3 md:px-6">
        {/* Texto discreto de apoio */}
        <div className="hidden text-xs text-slate-400 md:block">
          <p className="font-semibold text-slate-300">Apoie o Alta Cloud</p>
          <p>Este conteúdo é mantido com a ajuda de parceiros e anúncios.</p>
        </div>

        {/* Anúncio propriamente dito */}
        <div className="flex-1">
          <AdsBanner adSlot="9227543350" className="w-full" />
        </div>

        {/* Botão de fechar */}
        <button
          type="button"
          aria-label="Fechar anúncio"
          onClick={() => {
            setVisible(false);
            if (typeof window !== "undefined") {
              window.localStorage.setItem(CLOSE_KEY, "true");
            }
          }}
          className="ml-2 mt-1 rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300 hover:border-slate-500 hover:text-slate-100"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
