import type { Metadata } from "next";
import { Section } from "../components/ui/Section";
import { ArticleCard } from "../components/ui/ArticleCard";
import { articles } from "../data/articles";

export const metadata: Metadata = {
  title: "Trilha Google Cloud · Alta Cloud",
  description: "Guias e materiais sobre Google Cloud Platform, dados, analytics e machine learning.",
};

export default function Page() {
  const filtered = articles.filter((article) => article.track === "gcp");

  return (
    <Section
      title="Trilha Google Cloud"
      eyebrow="Trilhas de estudo"
      className="py-10 lg:py-14"
    >
      <p className="mb-6 max-w-2xl text-sm text-slate-300">
        Trilha dedicada à Google Cloud Platform, com foco em dados, aplicações modernas e serviços gerenciados.
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
