// src/app/trilhas/fundamentos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fundamentos de Cloud | Alta Cloud",
  description:
    "Módulo Fundamentos de Cloud: conceitos essenciais de cloud computing, modelos de serviço, regiões, contas e pilares de boa arquitetura.",
};

export default function FundamentosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-400">
          <Link
            href="/trilhas"
            className="transition-colors hover:text-slate-100"
          >
            Trilhas
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-100">Fundamentos de Cloud</span>
        </nav>

        {/* Cabeçalho */}
        <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Trilha Alta Cloud · Módulo 1
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Fundamentos de Cloud
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Este módulo é o seu ponto de partida em{" "}
              <strong className="font-semibold text-slate-100">
                Cloud Computing
              </strong>
              . Aqui você vai entender os conceitos essenciais, os principais
              modelos de serviço, como provedores organizam regiões e contas, e
              quais são os pilares de uma arquitetura bem feita — para depois
              avançar com segurança para IAM, S3, EC2, VPC e além.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                Fundamentos · Cloud Computing
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                Foco: visão geral
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                Módulo iniciante
              </span>
            </div>
          </div>

          {/* Thumbnail Fundamentos (mesmo estilo do IAM) */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <Image
              src="/thumbnails/fundamentos-de-cloud.jpg"
              alt="Thumbnail do módulo Fundamentos de Cloud"
              width={1200}
              height={675}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </header>

        {/* CTA */}
        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
                Comece entendendo os fundamentos certos
              </h2>
              <p className="mt-1 text-sm text-slate-300 md:text-base">
                Fundamentos é o módulo que organiza sua visão de Cloud. Em vez
                de sair decorando serviços soltos, você entende o contexto,
                modelos de serviço, regiões, contas e os pilares que vão guiar
                suas decisões técnicas daqui pra frente.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="#conteudo"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Ver conteúdo do módulo
              </Link>
            </div>
          </div>
        </section>

        {/* Conteúdo do módulo */}
        <section id="conteudo" className="mt-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
              O que você vai ver neste módulo
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Esta é uma visão sugerida. Depois, você pode conectar cada seção
              a aulas em vídeo, artigos ou laboratórios práticos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Bloco 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 1
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Conceitos fundamentais de Cloud
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que é computação em nuvem e por que as empresas migram</li>
                <li>• Capex vs Opex, escalabilidade e elasticidade</li>
                <li>• Visão geral de responsabilidade compartilhada</li>
              </ul>
            </div>

            {/* Bloco 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 2
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Modelos de serviço e exemplos práticos
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Diferenças entre IaaS, PaaS e SaaS</li>
                <li>• Exemplos: EC2, RDS, S3 e serviços gerenciados</li>
                <li>• Quando faz sentido cada modelo no dia a dia</li>
              </ul>
            </div>

            {/* Bloco 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 3
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Regiões, zonas e contas na nuvem
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que são regiões e zonas de disponibilidade</li>
                <li>
                  • Latência, compliance e escolha de região para aplicações reais
                </li>
                <li>• Por que empresas usam múltiplas contas e organizações</li>
              </ul>
            </div>

            {/* Bloco 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 4
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Pilares de uma boa arquitetura em Cloud
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Segurança e identidade como base (gancho para IAM)</li>
                <li>• Equilíbrio entre custo, performance e confiabilidade</li>
                <li>• Operação, observabilidade e melhoria contínua</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Link de volta para a trilha */}
        <section className="mt-10">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-50">
                Faz parte da Trilha Fundamentos de Cloud
              </p>
              <p className="text-sm text-slate-300">
                Volte para a trilha para navegar entre os módulos Fundamentos,
                IAM e S3.
              </p>
            </div>
            <Link
              href="/trilhas"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-sky-300"
            >
              Voltar para a trilha
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
