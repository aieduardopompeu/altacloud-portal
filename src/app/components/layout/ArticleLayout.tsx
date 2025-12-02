// src/app/components/layout/ArticleLayout.tsx
import type { ReactNode } from "react";
import { AdsBanner } from "../ads/AdsBanner";

type ArticleLayoutProps = {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  date: string;
  children: ReactNode;
};

export function ArticleLayout({
  category,
  title,
  description,
  readingTime,
  date,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/95 px-4 pb-10 pt-6 shadow-2xl md:px-8 md:pt-8">
          {/* HEADER */}
          <header className="mb-6">
            <div className="mb-4 flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 font-medium text-slate-100">
                {category}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span>{date}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>{readingTime}</span>
            </div>
          </header>

          {/* ✅ APENAS UM BLOCO DE ANÚNCIO NO TOPO DO ARTIGO */}
          <div className="mb-6">
            <AdsBanner position="article_top" />
          </div>

          {/* CONTEÚDO DO ARTIGO */}
          <div className="space-y-4 text-sm leading-relaxed text-slate-200 md:text-base">
            {children}
          </div>
        </article>
      </div>
    </main>
  );
}
