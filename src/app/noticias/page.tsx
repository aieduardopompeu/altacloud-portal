// src/app/noticias/page.tsx
import Link from "next/link";

type NewsItem = {
  title: string;
  subtitle: string;
  date: string;
  tag: string;
};

const newsItems: NewsItem[] = [
  {
    title: "Novas trilhas: IAM, S3 e VPC ganham conteúdos extras",
    subtitle:
      "Atualizações nas trilhas com mais prática, exercícios guiados e exemplos reais de arquitetura.",
    date: "Nov 2025",
    tag: "Atualização de conteúdo",
  },
  {
    title: "Roadmap Alta Cloud: próximos módulos de compute e redes",
    subtitle:
      "Planejamento de trilhas futuras cobrindo EC2, ECS, Lambda e fundamentos de redes em nuvem.",
    date: "Out 2025",
    tag: "Roadmap",
  },
  {
    title: "Guia para criar seu primeiro laboratório de estudos em AWS",
    subtitle:
      "Checklist para montar um ambiente seguro de testes sem estourar o orçamento.",
    date: "Set 2025",
    tag: "Guia prático",
  },
];

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Atualizações · Notícias
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            Novidades do Alta Cloud
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Acompanhe o que está chegando de novo: trilhas, melhorias, conteúdos
            extras e ideias para os próximos passos do portal.
          </p>
        </header>

        <section className="mt-10 space-y-5">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="rounded-full bg-sky-500/10 px-3 py-1 font-medium text-sky-300 ring-1 ring-sky-500/40">
                  {item.tag}
                </span>
                <span>{item.date}</span>
              </div>

              <h2 className="mt-3 text-base font-semibold md:text-lg">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
            </article>
          ))}
        </section>

        <p className="mt-10 text-xs text-slate-500">
          No futuro, esta página pode ser integrada com um backend ou planilha
          para você publicar notícias de forma dinâmica.
        </p>
      </div>
    </main>
  );
}
