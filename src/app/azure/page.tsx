import type { Metadata } from "next";
import { Section } from "../components/ui/Section";
import { ArticleCard } from "../components/ui/ArticleCard";
import { articles } from "../data/articles";

export const metadata: Metadata = {
  title: "Trilha Azure · Alta Cloud",
  description: "Conteúdos sobre Microsoft Azure, serviços principais e certificações.",
};

export default function Page() {
  const filtered = articles.filter((article) => article.track === "azure");

  return (
    <Section
      title="Trilha Azure"
      eyebrow="Trilhas de estudo"
      className="py-10 lg:py-14"
    >
      <p className="mb-6 max-w-2xl text-sm text-slate-300">
        Trilha focada em Microsoft Azure, ideal para quem trabalha com o ecossistema Microsoft.
      </p>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400">
          Em breve você encontrará aqui conteúdos específicos desta trilha no Alta Cloud.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard
              key={article.slug}
              article={{
                title: article.title,
                description: article.description,
                href: "/artigos/" + article.slug,
                tag: article.category,
              }}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
