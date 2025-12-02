// src/app/profissionais/inscricao/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AdsBanner } from "../../components/ads/AdsBanner";

export default function ProfessionalsApplicationPage() {
  const searchParams = useSearchParams();
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Se veio do diretório (?from=directory), abre o popup
  useEffect(() => {
    if (searchParams.get("from") === "directory") {
      setShowInfoModal(true);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* MODAL / POPUP DE INFORMAÇÃO */}
      {showInfoModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 px-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <h2 className="text-base font-semibold text-slate-50">
              Área gratuita nesta fase inicial
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Nesta etapa de lançamento, a participação no diretório de
              profissionais é{" "}
              <span className="font-semibold text-emerald-300">
                totalmente gratuita
              </span>
              . Em breve, vamos liberar benefícios extras para perfis em
              destaque, como maior visibilidade, recomendações e oportunidades
              exclusivas.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="rounded-lg border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-slate-400"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-2xl px-4 pt-24 pb-16 md:px-6 lg:px-0">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Alta Cloud · Diretório
          </p>
          <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Quero aparecer na lista
          </h1>
          <p className="text-sm text-slate-300 sm:text-base">
            Preencha os dados abaixo para entrar na fila de curadoria do
            diretório de profissionais certificados em cloud. Vamos revisar as
            informações com calma antes de publicar seu perfil.
          </p>
        </header>

        {/* Banner de anúncio opcional */}
        <div className="mt-6">
          <AdsBanner position="directory_top" />
        </div>

        {/* FORMULÁRIO SIMPLES / PLACEHOLDER */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  E-mail principal
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                  placeholder="voce@exemplo.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Localidade
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                  placeholder="Cidade · Estado / País"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Nuvem principal
                </label>
                <select
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="aws">AWS</option>
                  <option value="azure">Microsoft Azure</option>
                  <option value="gcp">Google Cloud</option>
                  <option value="oci">Oracle Cloud</option>
                  <option value="multi">Multi-cloud</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Resumo profissional
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                placeholder="Conte em poucas linhas como você atua com cloud, áreas de foco, senioridade e tipos de projetos."
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Certificações em cloud
              </label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                placeholder="Liste certificações relevantes (ex: AWS SAA-C03, DOP-C02, AZ-104, etc.)"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  LinkedIn
                </label>
                <input
                  type="url"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                  placeholder="URL do seu perfil"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  GitHub / Portfólio
                </label>
                <input
                  type="url"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
                  placeholder="Repositórios ou site com projetos"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-slate-400">
                Ao enviar, você concorda em ter seus dados analisados pela equipe Alta
                Cloud para possível inclusão no diretório público.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-cyan-400/60"
              >
                Enviar inscrição
              </button>
            </div>
          </form>
        </section>

        <div className="mt-6 text-center text-xs text-slate-500">
          <Link
            href="/profissionais"
            className="text-sky-400 underline-offset-2 hover:underline"
          >
            Voltar para o diretório de profissionais
          </Link>
        </div>
      </div>
    </main>
  );
}
