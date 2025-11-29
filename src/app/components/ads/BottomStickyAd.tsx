// src/app/components/ads/BottomStickyAd.tsx
"use client";

import { useState } from "react";
import { AdsBanner } from "./AdsBanner";

export function BottomStickyAd() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pb-4 pt-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 shadow-lg">
          <div className="flex items-center justify-between gap-3 px-3 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Publicidade
            </span>
            <button
              type="button"
              onClick={toggle}
              className="rounded-full border border-slate-700 px-3 py-1 text-[10px] font-medium text-slate-200 hover:border-sky-500 hover:text-sky-300"
            >
              {isCollapsed ? "Mostrar anúncio ▲" : "Recolher ▼"}
            </button>
          </div>

          {!isCollapsed && (
            <div className="px-3 pb-3">
              <AdsBanner
                adSlot="7666231438"
                className="w-full"
                format="auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
