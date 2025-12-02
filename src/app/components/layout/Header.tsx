// src/app/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mainLinks = [
  { href: "/", label: "Início" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/profissionais", label: "Profissionais" }, // NOVO
  { href: "/artigos", label: "Artigos" },
  { href: "/noticias", label: "Notícias" },
  { href: "/glossario", label: "Glossário" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const tracks = [
  { href: "/trilhas/fundamentos", label: "Fundamentos de Cloud" },
  { href: "/trilhas/iam", label: "IAM" },
  { href: "/trilhas/s3", label: "Amazon S3" },
  { href: "/trilhas/ec2", label: "Amazon EC2" },
  { href: "/trilhas/vpc", label: "VPC" },
];

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openTracks, setOpenTracks] = useState(false); // usado para desktop E mobile

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LOGO + CLOUD ICONS */}
        <div className="flex items-center gap-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-altacloud.png"
              alt="Alta Cloud"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* CLOUD PROVIDERS */}
          <div className="hidden items-center gap-4 md:flex">
            <Image
              src="/icons/aws.svg"
              alt="AWS"
              width={28}
              height={14}
              className="invert brightness-200"
            />
            <Image
              src="/icons/azure.svg"
              alt="Azure"
              width={28}
              height={14}
              className="invert brightness-200"
            />
            <Image
              src="/icons/gcp.svg"
              alt="Google Cloud"
              width={28}
              height={14}
              className="invert brightness-200"
            />
            <Image
              src="/icons/ibm.svg"
              alt="IBM Cloud"
              width={28}
              height={14}
              className="invert brightness-200"
            />
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-6 md:flex">
          {mainLinks.map((link) =>
            link.href === "/trilhas" ? (
              <div key={link.href} className="relative">
                {/* Botão Trilhas (abre por clique no desktop) */}
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm transition hover:text-sky-400 ${
                    isActive("/trilhas")
                      ? "font-semibold text-sky-400"
                      : "text-slate-300"
                  }`}
                  onClick={() => setOpenTracks((v) => !v)}
                >
                  {link.label}
                  <span className="text-xs">{openTracks ? "▴" : "▾"}</span>
                </button>

                {/* Dropdown Trilhas (desktop) */}
                {openTracks && (
                  <div className="absolute right-0 top-full z-30 mt-3 w-64 rounded-xl border border-slate-800 bg-slate-900/95 p-2 shadow-xl">
                    {tracks.map((track) => (
                      <Link
                        key={track.href}
                        href={track.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-sky-300"
                        onClick={() => setOpenTracks(false)}
                      >
                        {track.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:text-sky-400 ${
                  isActive(link.href)
                    ? "font-semibold text-sky-400"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-sky-500 md:hidden"
          onClick={() => {
            setOpenMenu((v) => !v);
            if (!openMenu) setOpenTracks(false); // fecha trilhas ao abrir menu
          }}
        >
          <span>Menu</span>
          <span className="flex flex-col gap-[3px]">
            <span className="block h-[2px] w-4 rounded-full bg-white" />
            <span className="block h-[2px] w-4 rounded-full bg-white" />
            <span className="block h-[2px] w-4 rounded-full bg-white" />
          </span>
        </button>
      </nav>

      {/* MENU MOBILE */}
      {openMenu && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {mainLinks.map((link) =>
              link.href === "/trilhas" ? (
                <div key={link.href} className="space-y-1">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${
                      isActive("/trilhas")
                        ? "bg-slate-800 text-sky-300"
                        : "text-slate-200 hover:bg-slate-900"
                    }`}
                    onClick={() => setOpenTracks((v) => !v)}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs">{openTracks ? "▴" : "▾"}</span>
                  </button>

                  {openTracks && (
                    <div className="space-y-1 pl-4">
                      {tracks.map((track) => (
                        <Link
                          key={track.href}
                          href={track.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-sky-300"
                          onClick={() => {
                            setOpenMenu(false);
                            setOpenTracks(false);
                          }}
                        >
                          {track.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    isActive(link.href)
                      ? "bg-slate-800 text-sky-300"
                      : "text-slate-200 hover:bg-slate-900"
                  }`}
                  onClick={() => setOpenMenu(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
