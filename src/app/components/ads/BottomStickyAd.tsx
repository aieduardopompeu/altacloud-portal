// src/app/components/ads/BottomStickyAd.tsx
"use client";

import { useEffect, useState } from "react";
import { AdsBanner } from "./AdsBanner";

const STORAGE_KEY = "altacloud.bottomAd.collapsed";

export function BottomStickyAd() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setIsCollapsed(true);
    }
  }, []);

  const toggle = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, String(next));
      }
      return next;
    });
  };

  // Se quiser esconder em telas muito pequenas, dá pra colocar um return null aqui baseado em width.

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pb-3">
        <div className="rounded-t-xl border border-slate-800 bg-slate-950/95 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between gap-3 px-3 pt-2">
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
            <div className="px-3 pb-3 pt-1">
              <AdsBanner
                adSlot="7666231438" // use aqui o slot que você quiser para o rodapé
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
