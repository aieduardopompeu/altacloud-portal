// src/app/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AdsBanner } from "./components/ads/AdsBanner"; // <-- CORRIGIDO: Caminho relativo correto
import { BottomStickyAd } from "./components/ads/BottomStickyAd"; // <-- CORRIGIDO: Caminho relativo correto

// --- Bloco de Metadata ---
export const metadata: Metadata = {
  title: "Alta Cloud | Seu Portal de Conhecimento e Profissionais Cloud",
  description: "Descubra o universo Cloud com o Alta Cloud: artigos, trilhas de aprendizado em AWS, Azure, GCP, OCI e um diretório exclusivo de profissionais certificados. Conecte-se, aprenda e evolua na nuvem.",
  keywords: [
    "Alta Cloud", "AWS", "Azure", "Google Cloud", "Oracle Cloud", "GCP", "OCI",
    "Cloud Computing", "Profissionais Cloud", "Certificações Cloud", "Trilhas de Aprendizado",
    "Artigos Cloud", "Diretório de Profissionais AWS", "Diretório de Profissionais Azure",
    "Diretório de Profissionais GCP", "Diretório de Profissionais OCI", "Tecnologia Cloud",
    "Carreira Cloud", "Desenvolvimento Cloud", "Infraestrutura Cloud"
  ],
  openGraph: {
    title: "Alta Cloud | Seu Portal de Conhecimento e Profissionais Cloud",
    description: "Descubra o universo Cloud com o Alta Cloud: artigos, trilhas de aprendizado em AWS, Azure, GCP, OCI e um diretório exclusivo de profissionais certificados. Conecte-se, aprenda e evolua na nuvem.",
    url: "https://altacloud.com.br",
    siteName: "Alta Cloud",
    images: [
      {
        url: "https://altacloud.com.br/altacloud-cover.webp",
        width: 1200,
        height: 630,
        alt: "Alta Cloud - Portal de Conhecimento e Profissionais Cloud",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alta Cloud | Seu Portal de Conhecimento e Profissionais Cloud",
    description: "Descubra o universo Cloud com o Alta Cloud: artigos, trilhas de aprendizado em AWS, Azure, GCP, OCI e um diretório exclusivo de profissionais certificados. Conecte-se, aprenda e evolua na nuvem.",
    images: ["https://altacloud.com.br/altacloud-cover.webp"],
  },
};
// --- Fim do Bloco de Metadata ---

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
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span>✔ Conteúdo em português</span>
              <span>✔ Sequência pensada para iniciantes</span>
              <span>✔ Foco em AWS hoje, aberto a multi-cloud</span>
            </div>
          </div>
          {/* Imagem */}
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
        {/* ADS – logo abaixo do hero (home_top) */}
        <div className="mt-8">
          <AdsBanner position="home_hero" />
        </div>
        {/* DESTAQUE – DIRETÓRIO DE PROFISSIONAIS */}
        <section className="mt-8">
          <div className="rounded-2xl border border-cyan-500/30 bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-6 shadow-lg shadow-cyan-500/15 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  NOVO · DIRETÓRIO
                </p>
                <h2 className="text-xl font-bold text-slate-50 sm:text-2xl">
                  Profissionais Certificados em Cloud
                </h2>
                <p className="max-w-xl text-sm text-slate-300">
                  Encontre especialistas certificados em{" "}
                  <span className="font-semibold text-cyan-300">
                    AWS, Azure, Google Cloud e Oracle
                  </span>{" "}
                  para projetos, consultorias, treinamentos e oportunidades.
                  Diretório gratuito mantido pelo Alta Cloud.
                </p>
                <p className="text-[11px] text-slate-400">
                  MVP em evolução · Em breve, filtros avançados, perfis em
                  destaque e indicações premium.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <Link
                  href="/profissionais"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400 hover:shadow-cyan-400/60"
                >
                  Ver diretório de profissionais
                </Link>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Inscrição gratuita para profissionais nesta fase inicial
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* ADS – entre diretório e trilhas (home_between_sections) */}
        <div className="mt-8">
          <AdsBanner position="home_between_sections" />
        </div>
        {/* TRILHAS EM DESTAQUE */}
        <section className="mt-10 space-y-5">
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
        {/* ADS – rodapé da home (home_bottom) – controlado por enabled no adsConfig */}
        <div className="mt-10">
          <AdsBanner position="home_tracks_bottom" />
        </div>
      </div>
      <BottomStickyAd />
    </main>
  );
}
