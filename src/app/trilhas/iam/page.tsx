// src/app/trilhas/iam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsBanner } from "../../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Módulo IAM na prática | Alta Cloud",
  description:
    "Módulo IAM na prática: usuários, grupos, permissões e políticas para começar com segurança no ambiente AWS.",
};

export default function IamPage() {
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
          <span className="text-slate-100">IAM na prática</span>
        </nav>

        {/* Cabeçalho */}
        <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Trilha Alta Cloud · Módulo 2
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              IAM na prática
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Este módulo é focado em{" "}
              <strong className="font-semibold text-slate-100">
                Identity and Access Management (IAM)
              </strong>{" "}
              na AWS. Você vai entender, na prática, como funcionam usuários,
              grupos, papéis, políticas e permissões — e como isso se conecta
              diretamente com segurança e governança em ambiente de nuvem.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                IAM · Identidade e Acesso
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                Foco: AWS
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                Módulo intermediário
              </span>
            </div>
          </div>

          {/* Thumbnail IAM */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <Image
              src="/thumbnails/iam.jpg"
              alt="Thumbnail do módulo IAM na prática"
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
                Comece estruturando identidades e permissões
              </h2>
              <p className="mt-1 text-sm text-slate-300 md:text-base">
                IAM é a base de segurança na AWS. Antes de criar VPC, EC2, S3
                ou qualquer outro serviço, você precisa garantir que somente as
                pessoas certas tenham os acessos certos.
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

        {/* Anúncio discreto dentro da trilha (inarticle_altacloud_tutorial) */}
        <div className="my-10">
          <AdsBanner adSlot="7666231438" />
        </div>

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
                Conceitos fundamentais de IAM
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que é IAM e por que ele é central na AWS</li>
                <li>• Root user vs. usuários individuais</li>
                <li>• Autenticação vs. autorização</li>
                <li>• Princípios de menor privilégio</li>
              </ul>
            </div>

            {/* Bloco 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 2
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Usuários, grupos e políticas
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Criando usuários individuais</li>
                <li>• Organizando permissões com grupos</li>
                <li>• Tipos de políticas IAM (AWS managed, customer managed)</li>
                <li>• Analisando JSON de políticas com calma</li>
              </ul>
            </div>

            {/* Bloco 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 3
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Roles, perfis e acesso temporário
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que são roles e quando usar</li>
                <li>• IAM roles para serviços (EC2, Lambda, etc.)</li>
                <li>• Acesso temporário e segurança em produção</li>
              </ul>
            </div>

            {/* Bloco 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 4
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Boas práticas e erros comuns
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Erros clássicos de IAM em contas novas</li>
                <li>• Como não travar a si mesmo fora da conta</li>
                <li>• Dicas de organização para ambientes reais</li>
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
