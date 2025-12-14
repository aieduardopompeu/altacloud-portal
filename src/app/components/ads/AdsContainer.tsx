// src/app/components/ads/AdsContainer.tsx
import { ReactNode } from "react";

type AdsContainerProps = {
  children: ReactNode;
  className?: string;

  /**
   * Altura mínima do espaço do anúncio.
   * Mobile ~90-110px, Desktop ~120-160px.
   */
  minHMobile?: number;
  minHDesktop?: number;
};

export function AdsContainer({
  children,
  className,
  minHMobile = 90,
  minHDesktop = 120,
}: AdsContainerProps) {
  // CSS vars para permitir min-height responsivo sem styled-jsx e sem "use client"
  const style = {
    ["--ads-min-h" as any]: `${minHMobile}px`,
    ["--ads-min-h-md" as any]: `${minHDesktop}px`,
  } as React.CSSProperties;

  return (
    <div
      className={[
        "w-full",
        "my-5",
        "overflow-hidden",
        "rounded-2xl",
        "border",
        "border-slate-800/70",
        "bg-slate-950/20",
        "flex",
        "items-center",
        "justify-center",
        // min-height responsivo via CSS variables
        "min-h-[var(--ads-min-h)]",
        "md:min-h-[var(--ads-min-h-md)]",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
