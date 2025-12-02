// src/app/trilhas/devops/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsBanner } from "../../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Trilha DevOps – Fundamentos e caminho completo | Alta Cloud",
  description:
    "Trilha DevOps da Alta Cloud: fundações, ferramentas, pipelines, automação, IaC e projetos práticos para iniciar ou acelerar sua carreira em DevOps.",
};

export default function DevOpsTrilhaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 md:pt-14 lg:px-8">
        {/* Breadcrumb (segue padrão das trilhas) */}
        <nav className="mb-6 text-sm text-slate-400">
          <Link
            href="/trilhas"
            className="transition-colors hover:text-slate-100"
          >
            Trilhas
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-100">DevOps</span>
        </nav>

        {/* CABEÇALHO – padrão VPC/EC2 */}
        <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Trilha Alta Cloud · DevOps
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Fundamentos de DevOps – O caminho completo
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Tudo o que você precisa para começar sua carreira como{" "}
              <strong className="font-semibold text-slate-100">
                DevOps Engineer
              </strong>
              : fundamentos, ferramentas essenciais, pipelines reais e
              integração com AWS, Azure e Google Cloud.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                DevOps · Cultura e Automação
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                Foco: CI/CD · IaC · Observabilidade
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                Trilha em construção
              </span>
            </div>
          </div>

          {/* Thumbnail DevOps */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <Image
              src="/thumbnails/devops.jpg"
              alt="Thumbnail da Trilha DevOps"
              width={1200}
              height={675}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </header>

        {/* ADS – topo da trilha (track_top) */}
        <div className="mt-8">
          <AdsBanner position="track_top" />
        </div>

        {/* SEÇÃO 1 – O QUE É DEVOPS */}
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold text-sky-300">O que é DevOps?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            DevOps é um conjunto de práticas, ferramentas e uma mudança de
            cultura que aproxima desenvolvimento (Dev) e operações (Ops) para
            entregar software de forma mais rápida, estável e confiável.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-400">
            <li>Automação de builds, testes e deploys;</li>
            <li>Integração e entrega contínua (CI/CD);</li>
            <li>Infraestrutura como código (IaC);</li>
            <li>Monitoramento e feedback contínuo;</li>
            <li>Colaboração entre times de produto, dev e operações.</li>
          </ul>
        </section>

        {/* SEÇÃO 2 – PILARES */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-sky-300">
            Pilares da Trilha DevOps
          </h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Fundamentos de Cloud & Linux",
                desc: "Base sólida em sistemas operacionais e principais conceitos de nuvem.",
              },
              {
                title: "Git & GitHub",
                desc: "Controle de versão, fluxos de trabalho e colaboração em equipe.",
              },
              {
                title: "CI/CD na prática",
                desc: "Pipelines automatizados para build, teste e deploy contínuo.",
              },
              {
                title: "Docker & Containers",
                desc: "Empacotamento de aplicações e ambientes reprodutíveis.",
              },
              {
                title: "IaC com Terraform",
                desc: "Provisionamento de infraestrutura declarativa em nuvem.",
              },
              {
                title: "Observabilidade",
                desc: "Logs, métricas, dashboards e alertas para acompanhar produção.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="text-sm font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADS – meio da trilha (track_middle) */}
        <div className="mb-12">
          <AdsBanner position="track_middle" />
        </div>

        {/* SEÇÃO 3 – ETAPAS DA TRILHA */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-sky-300">
            Etapas sugeridas de estudo
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-slate-300">
            <li>Fundamentos de Linux, redes e cloud.</li>
            <li>Git, GitHub e boas práticas de versionamento.</li>
            <li>Integração contínua com GitHub Actions ou GitLab CI.</li>
            <li>Containers com Docker e imagens otimizadas.</li>
            <li>Orquestração com Kubernetes (EKS, AKS ou GKE).</li>
            <li>Infraestrutura como código com Terraform.</li>
            <li>Monitoramento, logs e alertas para produção.</li>
            <li>Projetos práticos conectando tudo em um pipeline completo.</li>
          </ol>
        </section>

        {/* SEÇÃO 4 – MINI PROJETOS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-sky-300">
            Mini projetos práticos
          </h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Pipeline CI/CD completo",
                desc: "Do commit ao deploy automático em ambiente cloud.",
              },
              {
                title: "Infraestrutura com Terraform",
                desc: "Criar VPC, sub-redes, EC2, security groups e S3.",
              },
              {
                title: "Deploy com Docker + Kubernetes",
                desc: "Aplicação containerizada rodando em cluster gerenciado.",
              },
              {
                title: "Stack de observabilidade",
                desc: "Prometheus + Grafana + alertas básicos de saúde do sistema.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="text-sm font-semibold text-slate-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADS – final da trilha (track_bottom) */}
        <div className="mb-12">
          <AdsBanner position="track_bottom" />
        </div>

        {/* CTA FINAL */}
        <section className="rounded-lg border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-300">
            Em breve, essa trilha terá aulas completas, materiais para download
            e projetos guiados.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Quer receber novidades quando a trilha DevOps for atualizada?
          </p>
          <Link
            href="/contato"
            className="mt-4 inline-block rounded-md bg-sky-600 px-5 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            Fale com a Alta Cloud
          </Link>
        </section>
      </div>
    </main>
  );
}
