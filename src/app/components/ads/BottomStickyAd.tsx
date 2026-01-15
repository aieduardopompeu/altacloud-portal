// src/app/components/ads/BottomStickyAd.tsx
"use client";

import { useEffect, useState } from "react";
import { AdsBanner } from "./AdsBanner";

export function BottomStickyAd() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // opcional: pode persistir preferencia do usuário depois
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-slate-800 bg-slate-950/95 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-2 md:px-6">
        {/* Garante altura para o slot sticky não colapsar */}
        <div className="relative min-h-[90px] md:min-h-[120px]">
          <AdsBanner position="home_tracks_bottom" minHMobile={90} minHDesktop={120} />
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800"
          aria-label="Fechar anúncio"
        >
          ×
        </button>
      </div>
    </div>
  );
}
