// src/app/glossario/page.tsx
import { AdsBanner } from "@/app/components/ads/AdsBanner";

type Term = {
  term: string;
  alias?: string;
  category: string;
  description: string;
};

const terms: Term[] = [
  {
    term: "Cloud Computing",
    category: "Fundamentos",
    description:
      "Modelo de entrega de recursos de TI (compute, armazenamento, redes, banco de dados) pela internet, sob demanda e com pagamento pelo uso.",
  },
  {
    term: "AWS",
    alias: "Amazon Web Services",
    category: "Provedor",
    description:
      "Plataforma de serviços em nuvem da Amazon. Inclui centenas de serviços de infraestrutura e plataforma para construir aplicações em escala.",
  },
  {
    term: "Região",
    category: "Infraestrutura",
    description:
      "Conjunto de data centers em uma localização geográfica específica. Cada região é isolada das demais para questões de latência e conformidade.",
  },
  {
    term: "Zona de Disponibilidade (AZ)",
    category: "Infraestrutura",
    description:
      "Conjunto de um ou mais data centers dentro de uma mesma região, com energia e rede independentes. Usadas para alta disponibilidade.",
  },
  {
    term: "IAM",
    alias: "Identity and Access Management",
    category: "Segurança",
    description:
      "Serviço responsável por gerenciar identidades (usuários, grupos, roles) e permissões de acesso aos recursos em nuvem.",
  },
  {
    term: "S3",
    alias: "Simple Storage Service",
    category: "Armazenamento",
    description:
      "Serviço de armazenamento de objetos da AWS. Muito usado para guardar arquivos, backups, estáticos de sites e dados de análise.",
  },
  {
    term: "EC2",
    alias: "Elastic Compute Cloud",
    category: "Compute",
    description:
      "Serviço de máquinas virtuais da AWS. Permite criar instâncias com diferentes tamanhos de CPU/RAM para rodar aplicações e serviços.",
  },
  {
    term: "VPC",
    alias: "Virtual Private Cloud",
    category: "Redes",
    description:
      "Rede virtual isolada dentro da nuvem, onde você controla faixas de IP, sub-redes, rotas e regras de segurança.",
  },
];

export default function GlossarioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Apoio · Glossário
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            Glossário de termos de Cloud
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Use este glossário como apoio enquanto estuda. A ideia é ter
            definições claras, em português, sem jargão desnecessário.
          </p>
        </header>

        {/* ANÚNCIO: topo da página */}
        <div className="my-8">
          <AdsBanner position="article_top" className="w-full" />
        </div>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {terms.map((item, idx) => (
            <div key={item.term} className="contents">
              <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                      {item.term}
                    </h2>
                    {item.alias && (
                      <p className="text-xs text-slate-400">{item.alias}</p>
                    )}
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300">
                    {item.category}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </article>

              {/* ANÚNCIO: depois do 2º card (span total no desktop) */}
              {idx === 1 && (
                <div className="my-2 md:col-span-2">
                  <AdsBanner position="article_middle" className="w-full" />
                </div>
              )}
            </div>
          ))}
        </section>

        <p className="mt-8 text-xs text-slate-500">
          Você pode ampliar este glossário aos poucos, adicionando termos à lista{" "}
          <code>terms</code> neste arquivo ou movendo para uma fonte de dados
          externa no futuro.
        </p>
      </div>
    </main>
  );
}
