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
      "Especialistas certificados prontos para projetos, consultorias, migrações e soluções escaláveis em Amazon Web Services.",
    professionals: [
      {
        name: "João Souza",
        role: "Cloud Architect",
        location: "São Paulo, SP",
        availability: "available",
        summary:
          "Arquitetura AWS com foco em alta disponibilidade, governança, segurança e otimização de custos.",
        certifications:
          "SAA-C03 · AWS Solutions Architect Associate · SAP-C02 · AWS Solutions Architect Professional",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
      },
      {
        name: "Maria Lima",
        role: "DevOps & Cloud Engineer",
        location: "Belo Horizonte, MG",
        availability: "open-to-opps",
        summary:
          "CI/CD, automação, IaC e observabilidade para ambientes nativos em nuvem.",
        certifications:
          "DOP-C02 · AWS DevOps Engineer Professional",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
      },
    ],
  },
  {
    id: "azure",
    title: "Microsoft Azure",
    subtitle:
      "Profissionais certificados em Azure para ambientes híbridos, identidades, redes, governança e segurança corporativa.",
    professionals: [
      {
        name: "Carlos Oliveira",
        role: "Azure Cloud Engineer",
        location: "Curitiba, PR",
        availability: "available",
        summary:
          "Identidade, redes, segurança, monitoramento e arquitetura híbrida Azure.",
        certifications:
          "AZ‑900 · Azure Fundamentals · AZ‑104 · Azure Administrator Associate",
        linkedin: "https://www.linkedin.com",
      },
    ],
  },
  {
    id: "gcp",
    title: "Google Cloud",
    subtitle:
      "Engenheiros e arquitetos certificados para BigQuery, Data Engineering, ML e workloads em Google Cloud Platform.",
    professionals: [
      {
        name: "Ana Pereira",
        role: "Data & ML Engineer",
        location: "Remoto · Brasil",
        availability: "available",
        summary:
          "Pipelines de dados, BigQuery, machine learning operacional e governança.",
        certifications:
          "Google Cloud Professional Data Engineer",
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
      "Profissionais especializados em OCI para projetos críticos, banco de dados, segurança e workloads corporativos.",
    professionals: [
      {
        name: "Ricardo Santos",
        role: "Cloud Architect OCI",
        location: "Porto Alegre, RS",
        availability: "open-to-opps",
        summary:
          "Arquitetura Oracle Cloud para workloads críticos e alta disponibilidade.",
        certifications:
          "OCI Foundations · OCI Architect Professional",
        linkedin: "https://www.linkedin.com",
      },
    ],
  },
];

function availabilityLabel(status: Availability) {
  return status === "available"
    ? "Disponível para projetos"
    : "Ouvindo propostas";
}

function availabilityClassName(status: Availability) {
  return status === "available"
    ? "inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40"
    : "inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-500/40";
}

function DirectoryCtaButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
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

        {/* HERO • mais persuasivo e com foco total em cadastro */}
        <header className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Diretório Oficial · Alta Cloud
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Profissionais Certificados em Cloud — Encontre ou Seja Encontrado
          </h1>

          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Aqui você descobre especialistas certificados em{" "}
            <strong>AWS, Azure, Google Cloud e Oracle</strong> —
            prontos para projetos, vagas, consultorias e parcerias.  
            Se você trabalha com cloud, esta é sua oportunidade de ganhar
            **visibilidade real**, gratuita e de alto impacto.
          </p>

          <DirectoryCtaButton href="/profissionais/inscricao?from=hero">
            Quero aparecer no diretório
          </DirectoryCtaButton>
        </header>

        {/* COMO FUNCIONA • agora mais direto e convincente */}
        <section className="mt-10 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:grid-cols-2 sm:p-6">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-slate-100">
              Como funciona
            </h2>
            <ol className="mt-1 list-decimal space-y-2 pl-5 text-sm text-slate-300">
              <li>
                Escolha a nuvem e explore os perfis certificados disponíveis.
              </li>
              <li>
                Veja experiência, certificações e links profissionais.
              </li>
              <li>
                Fale diretamente com o especialista — sem intermediários.
              </li>
            </ol>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Curadoria e qualidade
            </h3>
            <p>
              Todos os perfis passam por validação básica antes de entrar no
              diretório. Em breve, filtros avançados, ranking e novos recursos
              de visibilidade.
            </p>
          </div>
        </section>

        {/* Ads */}
        <div className="mt-8">
          <AdsBanner position="directory_top" />
        </div>

        {/* LISTAGEM */}
        <div className="mt-12 space-y-12">
          {directorySections.map((section, index) => (
            <section key={section.id} id={section.id} className="space-y-4">
              <header className="space-y-2">
                <h2 className="text-lg font-semibold sm:text-xl">
                  {section.title}
                </h2>
                <p className="max-w-2xl text-sm text-slate-300">
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
                      <div className="flex items-start justify-between">
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

        {/* CTA FINAL — persuasivo */}
        <section className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5">
              <h2 className="text-base font-semibold sm:text-lg">
                Quer receber mais oportunidades?
              </h2>
              <p className="max-w-xl text-sm text-slate-300">
                Inscreva-se no diretório oficial da Alta Cloud e seja encontrado
                por empresas, recrutadores e parceiros — visibilidade gratuita.
              </p>
            </div>

            <DirectoryCtaButton href="/profissionais/inscricao?from=footer">
              Quero aparecer no diretório
            </DirectoryCtaButton>
          </div>
        </section>
      </div>
    </main>
  );
}
