"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { name: "Início", href: "/" },
    ...segments.map((seg, idx) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
      href: "/" + segments.slice(0, idx + 1).join("/"),
    })),
  ];

  return (
    <nav className="mb-6 text-xs text-slate-400">
      <ul className="flex flex-wrap gap-1">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <Link
              href={crumb.href}
              className="hover:text-sky-300 transition-colors"
            >
              {crumb.name}
            </Link>
            {i < crumbs.length - 1 && <span>/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
