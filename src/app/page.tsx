// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { AdsBanner } from "./components/ads/AdsBanner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Alta Cloud · Cloud · AWS · DevOps
            </p>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Aprenda Cloud de forma clara,
              <span className="block text-sky-400">
                sem atalhos mágicos nem enrolação.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Trilhas guiadas, conteúdo direto ao ponto e foco na prática:
              fundamentos, IAM, S3, EC2, VPC e mais. Tudo organizado para você
              construir uma base sólida em computação em nuvem, passo a passo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/trilhas/fundamentos"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Começar pela trilha Fundamentos
              </Link>

              <Link
                href="/trilhas"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-sky-300"
              >
                Ver todas as trilhas
              </Link>
            </div>

            {/* Mini info */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span>✔ Conteúdo em português</span>
              <span>✔ Sequência pensada para iniciantes</span>
              <span>✔ Foco em AWS hoje, aberto a multi-cloud</span>
            </div>
          </div>

          {/* Imagem destaque geral da home */}
          <div className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
            <Image
              src="/aprenda-cloud-de-forma-clara.jpg"
              alt="Visual de cloud moderna representando o aprendizado em nuvem"
              width={1200}
              height={675}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* ADSENSE – display_topo_altacloud (discreto entre hero e trilhas) */}
        <div className="mt-10 mb-4">
          <AdsBanner adSlot="6664851396" />
        </div>

        {/* TRILHAS EM DESTAQUE */}
        <section className="mt-6 space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Trilhas em destaque
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                Comece por uma dessas trilhas recomendadas para montar sua base
                de cloud.
              </p>
            </div>

            <Link
              href="/trilhas"
              className="text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              Ver todas as trilhas →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card Fundamentos */}
            <Link
              href="/trilhas/fundamentos"
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/fundamentos.jpg"
                  alt="Fundamentos de Cloud"
                  width={800}
                  height={450}
                  className="h-auto w-full object-contain transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  Fundamentos de Cloud
                </h3>
                <p className="text-sm text-slate-300">
                  Conceitos essenciais, modelos de serviço, regiões,
                  disponibilidade e visão geral da AWS.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                  Nível: Iniciante
                </span>
              </div>
            </Link>

            {/* Card IAM */}
            <Link
              href="/trilhas/iam"
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/iam.jpg"
                  alt="IAM na prática"
                  width={800}
                  height={450}
                  className="h-auto w-full object-contain transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  IAM na Prática
                </h3>
                <p className="text-sm text-slate-300">
                  Usuários, grupos, permissões e políticas para manter seu
                  ambiente seguro desde o início.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                  Segurança · Identidade
                </span>
              </div>
            </Link>

            {/* Card S3 */}
            <Link
              href="/trilhas/s3"
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/s3.jpg"
                  alt="S3 na prática"
                  width={800}
                  height={450}
                  className="h-auto w-full object-contain transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  S3 na Prática
                </h3>
                <p className="text-sm text-slate-300">
                  Buckets, objetos, versionamento, classes de armazenamento e
                  políticas de acesso para cenários reais.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-500/30">
                  Armazenamento · Essencial
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* POR QUE APRENDER CLOUD AQUI */}
        <section className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold md:text-2xl">
            Por que aprender cloud aqui?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Linguagem direta, sem jargão desnecessário
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Conceitos explicados de forma simples, em português, pensando em
                quem está começando ou vindo de outras áreas.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Trilhas pensadas como “mapa” de estudos
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Em vez de conteúdo solto, você segue uma ordem lógica:
                fundamentos, identidade, armazenamento, compute, redes e além.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Foco em prática e vida real
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Sempre conectando conceitos com cenários reais, boas práticas e
                problemas que realmente aparecem no dia a dia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
