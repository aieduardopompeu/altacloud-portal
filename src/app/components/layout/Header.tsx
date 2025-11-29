"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/artigos", label: "Artigos" },
  { href: "/comparativos", label: "Comparativos" },
  { href: "/noticias", label: "Notícias" },
  { href: "/glossario", label: "Glossário" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO + MARCA */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600">
              <span className="text-xs font-bold text-white leading-none">
                AL
                <br />
                T A
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-50">
                Alta Cloud
              </span>
              <span className="text-[10px] uppercase tracking-wide text-slate-400">
                Cloud Computing em português
              </span>
            </div>
          </Link>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-5 text-xs font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-sky-300 ${
                isActive(link.href) ? "text-sky-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO MENU MOBILE – AGORA BEM DESTACADO */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu de navegação"
          className="flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-sky-500 md:hidden"
        >
          <span>Menu</span>
          <span className="flex flex-col gap-0.5">
            <span className="block h-[2px] w-4 rounded-full bg-white" />
            <span className="block h-[2px] w-4 rounded-full bg-white" />
            <span className="block h-[2px] w-4 rounded-full bg-white" />
          </span>
        </button>
      </div>

      {/* NAV MOBILE DROPDOWN */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3 text-sm text-slate-100 sm:px-6 lg:px-8">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-[13px] transition hover:bg-slate-900 ${
                      isActive(link.href)
                        ? "bg-slate-900 text-sky-300"
                        : "text-slate-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive(link.href) && (
                      <span className="text-[10px] uppercase text-sky-400">
                        ativo
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
