"use client";

import { useEffect, useRef } from "react";

type Props = {
  client?: string; // default: ca-pub-4436420746304287
  slot: string;
  className?: string;
  style?: React.CSSProperties;
  format?: "auto" | "fluid";
  fullWidthResponsive?: boolean;
};

export default function AdSenseSlot({
  slot,
  client = "ca-pub-4436420746304287",
  className,
  style,
  format = "auto",
  fullWidthResponsive = true,
}: Props) {
  const pushed = useRef(false);

  if (!slot) {
    return null;
  }

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
}

