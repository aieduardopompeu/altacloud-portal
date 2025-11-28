import { ReactNode } from "react";
import { Section } from "../ui/Section";
import { TagPill } from "../ui/TagPill";

interface ArticleLayoutProps {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  date: string;
  children: ReactNode;
}

export function ArticleLayout({
  category,
  title,
  description,
  readingTime,
  date,
  children,
}: ArticleLayoutProps) {
  return (
    <Section className="py-10 lg:py-14">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-8 shadow-xl shadow-slate-950/60">
        <header className="space-y-3">
          <TagPill>{category}</TagPill>

          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            {title}
          </h1>

          <p className="text-sm text-slate-200">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>{date}</span>
            <span></span>
            <span>{readingTime} de leitura</span>
          </div>
        </header>

        {/* Slot de anúncio - topo do artigo */}
        <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/60 px-4 py-6 text-[11px] text-slate-400">
          Slot de anúncio (topo do artigo)  insira aqui o bloco de anúncio do
          Google AdSense.
        </div>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-100">
          {children}
        </div>

        {/* Slot de anúncio - fim do artigo */}
        <div className="mt-8 flex items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/60 px-4 py-6 text-[11px] text-slate-400">
          Slot de anúncio (meio/fim do artigo) – ideal para anúncios in-article.
        </div>
      </article>
    </Section>
  );
}
