// src/app/profissionais/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { AdsBanner } from "../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Profissionais Certificados em Cloud | Alta Cloud",
  description:
    "Encontre profissionais certificados em AWS, Azure, Google Cloud e Oracle. Diretório gratuito de especialistas em computação em nuvem, mantido pelo Alta Cloud.",
};

type CloudId = "aws" | "azure" | "gcp" | "oracle";

type CertificationLevel =
  | "Foundational"
  | "Associate"
  | "Professional"
  | "Specialty"
  | "Expert"
  | "Other";

type Certification = {
  id: string;
  name: string;
  code?: string;
  level: CertificationLevel;
};

type Professional = {
  id: string;
  name: string;
  role: string;
  cloud: CloudId;
  location?: string;
  headline?: string;
  certifications: Certification[];
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  isAvailable: boolean;
};

// =====================
// DATABASE ESTÁTICO (MVP)
// =====================

const professionals: Professional[] = [
  {
    id: "joao-souza",
    name: "João Souza",
    role: "Cloud Architect",
    cloud: "aws",
    location: "São Paulo, SP",
    headline:
      "Arquitetura em AWS focada em alta disponibilidade, segurança e custo otimizado.",
    certifications: [
      {
        id: "aws-sa-associate",
        name: "AWS Certified Solutions Architect",
        code: "SAA-C03",
        level: "Associate",
      },
      {
        id: "aws-sa-pro",
        name: "AWS Certified Solutions Architect",
        code: "SAP-C02",
        level: "Professional",
      },
    ],
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/",
    isAvailable: true,
  },
  {
    id: "maria-lima",
    name: "Maria Lima",
    role: "DevOps & Cloud Engineer",
    cloud: "aws",
    location: "Belo Horizonte, MG",
    headline:
      "Pipelines CI/CD, IaC e observabilidade para ambientes nativos em nuvem.",
    certifications: [
      {
        id: "aws-devops-pro",
        name: "AWS Certified DevOps Engineer",
        code: "DOP-C02",
        level: "Professional",
      },
    ],
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/",
    isAvailable: false,
  },
  {
    id: "carlos-oliveira",
    name: "Carlos Oliveira",
    role: "Azure Cloud Engineer",
    cloud: "azure",
    location: "Curitiba, PR",
    headline:
      "Ambientes híbridos, identidade, rede e segurança em Azure para empresas.",
    certifications: [
      {
        id: "az-900",
        name: "Microsoft Certified: Azure Fundamentals",
        code: "AZ-900",
        level: "Foundational",
      },
      {
        id: "az-104",
        name: "Microsoft Certified: Azure Administrator Associate",
        code: "AZ-104",
        level: "Associate",
      },
    ],
    linkedinUrl: "https://www.linkedin.com/",
    isAvailable: true,
  },
  {
    id: "ana-pereira",
    name: "Ana Pereira",
    role: "Data & ML Engineer",
    cloud: "gcp",
    location: "Remoto · Brasil",
    headline:
      "Pipelines de dados, BigQuery, machine learning em produção e governança.",
    certifications: [
      {
        id: "gcp-data-pro",
        name: "Google Cloud Professional Data Engineer",
        level: "Professional",
      },
    ],
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/",
    websiteUrl: "https://example.com",
    isAvailable: true,
  },
  {
    id: "ricardo-santos",
    name: "Ricardo Santos",
    role: "Cloud Architect OCI",
    cloud: "oracle",
    location: "Porto Alegre, RS",
    headline:
      "Arquitetura em Oracle Cloud para workloads críticos e banco de dados.",
    certifications: [
      {
        id: "oci-foundation",
        name: "Oracle Cloud Infrastructure Foundations",
        level: "Foundational",
      },
      {
        id: "oci-architect-pro",
        name: "Oracle Cloud Infrastructure Architect Professional",
        level: "Professional",
      },
    ],
    linkedinUrl: "https://www.linkedin.com/",
    isAvailable: false,
  },
];

// =====================
// COMPONENTES
// =====================

const clouds: {
  id: CloudId;
  label: string;
  badgeClass: string;
  titleClass: string;
}[] = [
  {
    id: "aws",
    label: "AWS",
    badgeClass: "bg-yellow-400/10 text-yellow-300 ring-yellow-400/40",
    titleClass: "text-yellow-300",
  },
  {
    id: "azure",
    label: "Microsoft Azure",
    badgeClass: "bg-blue-500/10 text-blue-300 ring-blue-500/40",
    titleClass: "text-blue-300",
  },
  {
    id: "gcp",
    label: "Google Cloud",
    badgeClass: "bg-red-500/10 text-red-300 ring-red-500/40",
    titleClass: "text-red-300",
  },
  {
    id: "oracle",
    label: "Oracle Cloud",
    badgeClass: "bg-red-700/10 text-red-300 ring-red-700/40",
    titleClass: "text-red-300",
  },
];

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-0.5 text-xs font-medium text-slate-200">
      {children}
    </span>
  );
}

function AvailabilityBadge({ isAvailable }: { isAvailable: boolean }) {
  if (isAvailable) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Disponível para projetos
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-700/30 px-2.5 py-0.5 text-xs font-medium text-slate-300 ring-1 ring-slate-600/60">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      Ouvindo propostas
    </span>
  );
}

function ProfessionalCard({ professional }: { professional: Professional }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-lg shadow-slate-900/40 transition-all hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-cyan-500/20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-50">
            {professional.name}
          </h3>
          <p className="mt-0.5 text-sm text-slate-300">{professional.role}</p>
          {professional.location && (
            <p className="mt-0.5 text-xs text-slate-400">
              📍 {professional.location}
            </p>
          )}
        </div>
        <AvailabilityBadge isAvailable={professional.isAvailable} />
      </div>

      {professional.headline && (
        <p className="mt-3 text-sm text-slate-300">{professional.headline}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {professional.certifications.map((cert) => (
          <Badge key={cert.id}>
            <span className="font-semibold">
              {cert.level}
              {cert.code ? ` • ${cert.code}` : ""}
            </span>
            <span className="mx-1.5 text-slate-500">·</span>
            <span>{cert.name}</span>
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-slate-300">
        {professional.linkedinUrl && (
          <Link
            href={professional.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
          >
            <span>LinkedIn</span>
          </Link>
        )}
        {professional.githubUrl && (
          <Link
            href={professional.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
          >
            <span>GitHub</span>
          </Link>
        )}
        {professional.websiteUrl && (
          <Link
            href={professional.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
          >
            <span>Portfólio</span>
          </Link>
        )}
      </div>
    </article>
  );
}

// =====================
// PÁGINA PRINCIPAL
// =====================

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-24 pb-16 md:px-6">
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Alta Cloud · Diretório
            </p>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Profissionais Certificados em Cloud
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              Aqui você encontra profissionais certificados em{" "}
              <span className="font-semibold text-cyan-300">
                AWS, Azure, Google Cloud e Oracle
              </span>
              . Esta primeira versão do diretório é{" "}
              <span className="font-semibold text-emerald-300">
                totalmente gratuita
              </span>{" "}
              tanto para profissionais quanto para empresas. Em breve, novas
              funcionalidades de destaque, filtros avançados e indicações
              premium.
            </p>
            <p className="text-xs text-slate-400">
              Obs.: Esta é uma versão inicial (MVP). As informações são
              fornecidas pelos próprios profissionais e podem ser atualizadas ao
              longo do tempo.
            </p>
          </div>

          {/* CTA "Quero aparecer na lista" */}
          <div className="md:pt-8">
            <Link
              href="/profissionais/inscricao"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400 hover:shadow-cyan-400/50"
            >
              Quero aparecer na lista
            </Link>
            <p className="mt-2 max-w-xs text-xs text-slate-400">
              Área gratuita nesta fase inicial. Em breve, benefícios exclusivos
              para profissionais em destaque.
            </p>
          </div>
        </header>

        {/* PUBLICIDADE – DISPLAY TOPO (display_topo_altacloud → 6664851396) */}
        <AdsBanner adSlot="6664851396" className="my-4 flex justify-center" />

        {/* LISTAGEM + ANÚNCIO DE MEIO */}
        <section className="mt-4 space-y-10">
          {clouds.map((cloud, index) => {
            const cloudProfessionals = professionals.filter(
              (p) => p.cloud === cloud.id
            );

            if (cloudProfessionals.length === 0) return null;

            return (
              <div key={cloud.id} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${cloud.badgeClass}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {cloud.label}
                    </div>
                    <h2
                      className={`text-lg font-semibold ${cloud.titleClass}`}
                    >
                      Profissionais certificados em {cloud.label}
                    </h2>
                    <p className="text-sm text-slate-300">
                      Especialistas com certificações oficiais na {cloud.label}.
                      Use este diretório para encontrar profissionais para
                      projetos, consultorias, treinamentos e oportunidades.
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">
                    {cloudProfessionals.length}{" "}
                    {cloudProfessionals.length === 1
                      ? "profissional listado"
                      : "profissionais listados"}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cloudProfessionals.map((professional) => (
                    <ProfessionalCard
                      key={professional.id}
                      professional={professional}
                    />
                  ))}
                </div>

                {/* Após a segunda nuvem, banner in-article (7666231438) */}
                {index === 1 && (
                  <AdsBanner
                    adSlot="7666231438"
                    className="mt-6 flex justify-center"
                  />
                )}
              </div>
            );
          })}
        </section>

        {/* PUBLICIDADE – RODAPÉ (multiplex_footer_altacloud → 9227543350) */}
        <AdsBanner
          adSlot="9227543350"
          className="mt-10 flex justify-center"
        />
      </div>
    </main>
  );
}
