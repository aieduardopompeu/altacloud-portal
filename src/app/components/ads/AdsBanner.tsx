// src/app/components/ads/AdsBanner.tsx
"use client";

import React from "react";
import { adsConfig, AdPosition } from "../../../config/ads";

type AdsBannerProps = {
  position: AdPosition;
  className?: string;
};

export function AdsBanner({ position, className }: AdsBannerProps) {
  const config = adsConfig[position];

  // Se não houver config para essa posição ou estiver desativado, não renderiza nada
  if (!config || !config.enabled) {
    return null;
  }

  const { slot } = config;

  if (!slot) {
    return null;
  }

  return (
    <div
      className={
        className ??
        "my-4 flex items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/60 px-4 py-3 text-xs text-slate-400"
      }
    >
      <span>
        Espaço de anúncio{" "}
        <span className="opacity-70">(slot: {slot})</span>
      </span>
    </div>
  );
}
