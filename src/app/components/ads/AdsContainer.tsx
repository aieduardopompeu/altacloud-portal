// src/app/components/ads/AdsContainer.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  minHMobile?: number;
  minHDesktop?: number;
  className?: string;
};

export function AdsContainer({
  children,
  minHMobile = 90,
  minHDesktop = 120,
  className,
}: Props) {
  return (
    <div
      className={[
        "w-full my-5 rounded-2xl border border-slate-800/70 bg-slate-950/20",
        "flex items-center justify-center",
        // IMPORTANTE: não cortar o iframe do AdSense
        "overflow-visible",
        className ?? "",
      ].join(" ")}
      style={
        {
          ["--ads-min-h" as any]: `${minHMobile}px`,
          ["--ads-min-h-md" as any]: `${minHDesktop}px`,
        } as React.CSSProperties
      }
    >
      {/* garante altura mínima real para o conteúdo */}
      <div className="w-full min-h-[var(--ads-min-h)] md:min-h-[var(--ads-min-h-md)]">
        {children}
      </div>
    </div>
  );
}
