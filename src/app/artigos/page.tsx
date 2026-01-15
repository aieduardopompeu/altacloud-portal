// src/app/artigos/page.tsx
import Link from "next/link";
import { articles } from "../data/articles";
import { AdsBanner } from "@/app/components/ads/AdsBanner";

type Article = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  track?: string;
  readingTime?: string;
  date?: string;
};

const typedArticles: Article[] = articles as Article[];

export default function ArtigosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Conteúdo · Artigos
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            Artigos para acelerar seus estudos em Cloud
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Textos diretos ao ponto sobre fundamentos, AWS, práticas de mercado,
            carreira e muito mais. Use os artigos como complemento das trilhas.
          </p>
        </header>

        {/* ANÚNCIO: topo da página */}
        <div className="mt-8">
          <AdsBanner position="article_top" className="w-full" />
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {typedArticles.length === 0 && (
            <p className="text-sm text-slate-400">
              Ainda não há artigos publicados. Em breve você verá conteúdos
              novos aqui.
            </p>
          )}

          {typedArticles.map((article, idx) => (
            <div key={article.slug} className="contents">
              <Link
                href={`/artigos/${article.slug}`}
                className="group flex h-full flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg transition hover:border-sky-500"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {article.category && (
                      <span className="rounded-full bg-sky-500/10 px-3 py-1 font-medium text-sky-300 ring-1 ring-sky-500/40">
                        {article.category}
                      </span>
                    )}
                    {article.track && (
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                        Trilha: {article.track}
                      </span>
                    )}
                    {article.readingTime && (
                      <span className="text-slate-400">
                        ⏱ {article.readingTime}
                      </span>
                    )}
                    {article.date && (
                      <span className="text-slate-500">{article.date}</span>
                    )}
                  </div>

                  <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300 md:text-lg">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-300">
                    {article.description ?? "Resumo em breve."}
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center text-xs font-semibold text-sky-400 group-hover:text-sky-300">
                  Ler artigo completo →
                </span>
              </Link>

              {/* ANÚNCIO: depois do 2º card (span total no desktop) */}
              {idx === 1 && (
                <div className="md:col-span-2 my-2">
                  <AdsBanner position="article_middle" className="w-full" />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
