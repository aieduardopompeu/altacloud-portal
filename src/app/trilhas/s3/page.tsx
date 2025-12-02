// src/app/trilhas/s3/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsBanner } from "../../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Módulo S3 na prática | Alta Cloud",
  description:
    "Módulo S3 na prática: buckets, objetos, classes de armazenamento, versionamento e políticas de acesso para projetos reais em nuvem.",
};

export default function S3Page() {
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
          <Link
            href="/trilhas/fundamentos"
            className="transition-colors hover:text-slate-100"
          >
            Fundamentos de Cloud
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-100">S3 na prática</span>
        </nav>

        {/* Cabeçalho */}
        <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Trilha Alta Cloud · Módulo 3
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              S3 na prática
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Neste módulo você foca em{" "}
              <strong className="font-semibold text-slate-100">
                Amazon S3 (Simple Storage Service)
              </strong>
              : como pensar em buckets, organizar objetos, escolher classes de
              armazenamento, habilitar versionamento e proteger tudo com
              políticas de acesso bem definidas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                S3 · Armazenamento em nuvem
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                Foco: AWS
              </span>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-500/30">
                Módulo essencial
              </span>
            </div>
          </div>

          {/* Thumbnail S3 */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <Image
              src="/thumbnails/s3.jpg"
              alt="Thumbnail do módulo S3 na prática"
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

        {/* CTA */}
        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
                Estruture o armazenamento do seu ambiente em nuvem
              </h2>
              <p className="mt-1 text-sm text-slate-300 md:text-base">
                S3 é um dos serviços mais usados da AWS. Entender bem como
                organizar buckets, proteger acessos e otimizar custo é
                obrigatório para qualquer projeto sério em cloud.
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

        {/* ADS – meio da trilha (track_middle) */}
        <div className="mt-8">
          <AdsBanner position="track_middle" />
        </div>

        {/* Conteúdo do módulo */}
        <section id="conteudo" className="mt-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
              O que você vai ver neste módulo
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Assim como no módulo IAM, esta estrutura é uma base sugerida.
              Depois você pode conectar cada parte a aulas, artigos ou labs
              práticos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Bloco 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 1
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Conceitos de S3 e buckets
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que é S3 e onde ele se encaixa na arquitetura</li>
                <li>• Buckets, objetos e chaves</li>
                <li>• Naming, regiões e boas práticas de criação</li>
                <li>• Diferença entre S3 e sistemas de arquivo tradicionais</li>
              </ul>
            </div>

            {/* Bloco 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 2
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Classes de armazenamento e custo
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Standard, Infrequent Access, Glacier e variações</li>
                <li>• Como escolher a classe certa para cada cenário</li>
                <li>
                  • Noções de custo: armazenamento, requisições, transferência
                </li>
                <li>• Estratégias simples para evitar sustos na fatura</li>
              </ul>
            </div>

            {/* Bloco 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 3
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Versionamento, lifecycle e proteção
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Habilitando versionamento e quando faz sentido</li>
                <li>• Regras de lifecycle para arquivar e expirar dados</li>
                <li>• Protegendo contra deleção acidental</li>
                <li>• Cenários comuns de conformidade e backup</li>
              </ul>
            </div>

            {/* Bloco 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 4
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Políticas de acesso e segurança em S3
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Bucket policies vs. IAM policies</li>
                <li>• Bloqueio de acesso público (Block Public Access)</li>
                <li>• Cenários de hospedagem de site estático com S3</li>
                <li>• Boas práticas para ambientes de produção</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADS – final da trilha (track_bottom) */}
        <div className="mt-10">
          <AdsBanner position="track_bottom" />
        </div>

        {/* Link de volta para a trilha */}
        <section className="mt-8">
          <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4 md:flex-row md:items-center md:justify-between">
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
              href="/trilhas/fundamentos"
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
