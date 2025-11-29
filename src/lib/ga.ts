// src/lib/ga.ts
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const pageview = (url: string): void => {
  if (typeof window === "undefined") return;
  if (!GA_ID || !window.gtag) return;

  window.gtag("config", GA_ID, {
    page_path: url,
  } as Record<string, unknown>);
};

export type GAEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const gaEvent = ({ action, category, label, value }: GAEvent): void => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  const params: Record<string, unknown> = {
    event_category: category,
  };

  if (label) params.event_label = label;
  if (typeof value === "number") params.value = value;

  window.gtag("event", action, params);
};
