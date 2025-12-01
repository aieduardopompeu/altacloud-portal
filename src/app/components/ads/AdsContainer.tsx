// src/app/components/ads/AdsContainer.tsx
import { ReactNode } from "react";

type AdsContainerProps = {
  children: ReactNode;
};

export function AdsContainer({ children }: AdsContainerProps) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "280px",
        display: "block",
        margin: "20px 0",
      }}
      className="ads-container"
    >
      {children}
    </div>
  );
}
