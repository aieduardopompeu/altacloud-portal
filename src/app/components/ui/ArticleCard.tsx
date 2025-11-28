import Link from "next/link";
import { TagPill } from "./TagPill";

interface ArticleCardProps {
  article: {
    title: string;
    description: string;
    href: string;
    tag?: string;
  };
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-400/70 hover:bg-slate-900">
      {article.tag && <TagPill>{article.tag}</TagPill>}
      <h3 className="mt-2 text-sm font-semibold text-slate-50">
        <Link href={article.href}>{article.title}</Link>
      </h3>
      <p className="mt-2 flex-1 text-xs text-slate-300">
        {article.description}
      </p>
      <div className="mt-3 text-[11px] font-medium text-sky-300">
        <Link href={article.href}>Ler artigo completo </Link>
      </div>
    </article>
  );
}
