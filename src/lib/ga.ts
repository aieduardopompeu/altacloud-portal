// src/lib/ga.ts

export const GA_ID = "G-TZKCQC7Q7Y"; // coloque seu ID real do GA4 aqui

export const gaEvent = (
  action: string,
  params: Record<string, any> = {}
) => {
  // Garantia de que só roda no browser
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
  if (!gtag) return;

  gtag("event", action, params);
};
