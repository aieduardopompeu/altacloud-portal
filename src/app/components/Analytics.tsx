// src/app/components/Analytics.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "../../lib/ga";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const search = searchParams?.toString();
    const url = search ? `${pathname}?${search}` : pathname;

    // Envia pageview para o GA4
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
