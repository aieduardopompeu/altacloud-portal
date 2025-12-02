// src/app/profissionais/page.tsx
import Link from "next/link";
import { AdsBanner } from "../components/ads/AdsBanner";

type Availability = "available" | "open-to-opps";

type Professional = {
  name: string;
  role: string;
  location: string;
  availability: Availability;
  summary: string;
  certifications: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
};

type CloudSection = {
  id: string;
  title: string;
  subtitle: string;
  professionals: Professional[];
};

const directorySections: CloudSection[] = [
  {
    id: "aws",
    title: "AWS",
    subtitle:
      "Especialistas com certificações oficiais na AWS. Use este diretório para encontrar profissionais para projetos, consultorias, treinamentos e oportunidades.",
    professionals: [
      {
        name: "João Souza",
        role: "Cloud Architect",
        location: "São Paulo, SP",
        availability: "available",
        summary:
          "Arquitetura em AWS focada em alta disponibilidade, segurança e custo otimizado.",
        certifications:
          "Associate · SAA-C03 · AWS Certified Solutions Architect — Associate · Professional · SAP-C02 · AWS Certified Solutions Architect — Professional",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
      },
      {
        name: "Maria Lima",
        role: "DevOps & Cloud Engineer",
        location: "Belo Horizonte, MG",
        availability: "open-to-opps",
        summary:
          "Pipelines CI/CD, IaC e observabilidade para ambientes nativos em nuvem.",
        certifications:
          "Professional · DOP-C02 · AWS Certified DevOps Engineer — Professional",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
      },
    ],
  },
  {
    id: "azure",
    title: "Microsoft Azure",
    subtitle:
      "Especialistas com certificações oficiais na Microsoft Azure. Use este diretório para encontrar profissionais para projetos, consultorias, treinamentos e oportunidades.",
    professionals: [
      {
        name: "Carlos Oliveira",
        role: "Azure Cloud Engineer",
        location: "Curitiba, PR",
        availability: "available",
        summary:
          "Ambientes híbridos, identidade, rede e segurança em Azure para empresas.",
        certifications:
          "Foundational · AZ-900 · Microsoft Certified: Azure Fundamentals · Associate · AZ-104 · Microsoft Certified: Azure Administrator Associate",
        linkedin: "https://www.linkedin.com",
      },
    ],
  },
  {
    id: "gcp",
    title: "Google Cloud",
    subtitle:
      "Especialistas com certificações oficiais na Google Cloud. Use este diretório para encontrar profissionais para projetos, consultorias, treinamentos e oportunidades.",
    professionals: [
      {
        name: "Ana Pereira",
        role: "Data & ML Engineer",
        location: "Remoto · Brasil",
        availability: "available",
        summary:
          "Pipelines de dados, BigQuery, machine learning em produção e governança.",
        certifications:
          "Professional · Google Cloud Professional Data Engineer",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
        portfolio: "https://example.com",
      },
    ],
  },
  {
    id: "oci",
    title: "Oracle Cloud",
    subtitle:
      "Especialistas com certificações oficiais na Oracle Cloud. Use este diretório para encontrar profissionais para projetos, consultorias, treinamentos e oportunidades.",
    professionals: [
      {
        name: "Ricardo Santos",
        role: "Cloud Architect OCI",
        location: "Porto Alegre, RS",
        availability: "open-to-opps",
        summary:
          "Arquitetura em Oracle Cloud para workloads críticos e banco de dados.",
        certifications:
          "Foundational · Oracle Cloud Infrastructure Foundations · Professional · Oracle Cloud Infrastructure Architect Professional",
        linkedin: "https://www.linkedin.com",
      },
    ],
  },
];

function availabilityLabel(status: Availability) {
  if (status === "available") return "Disponível para projetos";
  return "Ouvindo propostas";
}

function availabilityClassName(status: Availability) {
  if (status === "available") {
    return "inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40";
  }

  return "inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-500/40";
}

// Botão padrão do diretório (usado no topo e no rodapé)
function DirectoryCtaButton({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center overflow-hidden rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition-transform hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-cyan-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-[-40%] bg-gradient-to-r from-cyan-300/0 via-cyan-100/30 to-cyan-300/0 opacity-0 blur-[2px] transition group-hover:translate-x-[40%] group-hover:opacity-100"
      />
      <span className="relative flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        <span>{children}</span>
        <span className="text-xs opacity-80 transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}

export default function ProfessionalsDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-6 lg:px-0">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Alta Cloud · Diretório
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
                Profissionais Certificados em Cloud
              </h1>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Encontre especialistas certificados em{" "}
                <span className="font-semibold">
                  AWS, Azure, Google Cloud e Oracle
                </span>{" "}
                para projetos, consultorias, treinamentos e oportunidades de
                carreira. Esta primeira versão do diretório é{" "}
                <span className="font-semibold">
                  gratuita para empresas e profissionais
                </span>{" "}
                enquanto consolidamos a base inicial.
              </p>
            </div>

            {/* CTA topo – botão + tudo na mesma linha */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <DirectoryCtaButton href="/profissionais/inscricao?from=directory">
                Quero aparecer na lista
              </DirectoryCtaButton>

              {/* Texto explicativo foi removido daqui.
                  Agora essa mensagem aparece como popup
                  na página /profissionais/inscricao. */}
            </div>
          </div>
        </header>

        {/* Como usar o diretório */}
        <section className="mt-8 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:p-6">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
              Como usar este diretório
            </h2>
            <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm text-slate-300 sm:text-[0.95rem]">
              <li>
                <span className="font-medium">Escolha a nuvem:</span> navegue
                pelas seções de AWS, Azure, Google Cloud ou Oracle.
              </li>
              <li>
                <span className="font-medium">Avalie o perfil:</span> veja
                certificações, resumo profissional e links de contato.
              </li>
              <li>
                <span className="font-medium">Converse direto:</span> use os
                links do próprio profissional para falar sobre vagas, projetos
                ou parcerias.
              </li>
            </ol>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Curadoria em evolução
            </h3>
            <p className="mt-1">
              Os dados são informados pelos próprios profissionais e passam por
              uma revisão básica da equipe Alta Cloud antes de serem
              publicados. Em breve, novos recursos de destaque, filtros
              avançados e recomendações inteligentes.
            </p>
          </div>
        </section>

        {/* Primeiro banner de anúncio */}
        <div className="mt-8">
          <AdsBanner position="directory_top" />
        </div>

        {/* Seções por nuvem */}
        <div className="mt-10 space-y-12">
          {directorySections.map((section, index) => (
            <section key={section.id} id={section.id} className="space-y-4">
              <header className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                  {section.title}
                </h2>
                <p className="max-w-2xl text-sm text-slate-300 sm:text-[0.95rem]">
                  {section.subtitle}
                </p>
                <p className="text-xs font-medium text-slate-400">
                  {section.professionals.length}{" "}
                  {section.professionals.length === 1
                    ? "profissional listado"
                    : "profissionais listados"}
                </p>
              </header>

              <div className="grid gap-4 md:grid-cols-2">
                {section.professionals.map((pro) => (
                  <article
                    key={pro.name}
                    className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-950/40"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-slate-50">
                            {pro.name}
                          </h3>
                          <p className="text-xs text-slate-400">{pro.role}</p>
                        </div>
                        <span className={availabilityClassName(pro.availability)}>
                          {availabilityLabel(pro.availability)}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400">{pro.location}</p>

                      <p className="text-sm text-slate-200">{pro.summary}</p>

                      <p className="text-xs text-slate-400">
                        <span className="font-semibold">Certificações: </span>
                        {pro.certifications}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {pro.linkedin && (
                        <a
                          href={pro.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                        >
                          LinkedIn
                        </a>
                      )}
                      {pro.github && (
                        <a
                          href={pro.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                        >
                          GitHub
                        </a>
                      )}
                      {pro.portfolio && (
                        <a
                          href={pro.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                        >
                          Portfólio
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* Banners adicionais entre blocos */}
              {index === 0 && (
                <div className="mt-6">
                  <AdsBanner position="directory_aws_after" />
                </div>
              )}
              {index === 2 && (
                <div className="mt-6">
                  <AdsBanner position="directory_middle" />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA final */}
        <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5">
              <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                Quer fazer parte do diretório?
              </h2>
              <p className="max-w-xl text-sm text-slate-300">
                Se você é profissional de cloud com certificações oficiais e
                quer mais visibilidade para projetos, vagas e parcerias, envie
                seus dados para a curadoria do Alta Cloud.
              </p>
            </div>

            <DirectoryCtaButton href="/profissionais/inscricao?from=directory">
              Quero aparecer na lista
            </DirectoryCtaButton>
          </div>
        </section>
      </div>
    </main>
  );
}
