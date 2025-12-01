// src/app/profissionais/inscricao/page.tsx
import Link from "next/link";
import { AdsBanner } from "../../components/ads/AdsBanner";

export default function ProfessionalsApplicationPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto w-full max-w-2xl px-4 pt-24 pb-16 md:px-6 lg:px-0">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Alta Cloud · Diretório
          </p>
          <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Quero aparecer na lista
          </h1>
          <p className="text-sm text-slate-300 sm:text-base">
            Esta é a etapa inicial para entrar no diretório de{" "}
            <span className="font-semibold text-cyan-300">
              Profissionais Certificados em Cloud
            </span>{" "}
            do Alta Cloud. Preencha seus dados com atenção. Nesta fase (MVP), o
            envio é manual e a curadoria é feita pela nossa equipe.
          </p>
          <p className="text-xs text-slate-400">
            Em breve, vamos automatizar o fluxo com painel para atualização de
            perfil, destaque premium e muito mais.
          </p>
        </header>

        {/* STATUS DO MVP */}
        <section className="mt-5 space-y-3 rounded-2xl border border-amber-500/40 bg-amber-950/40 p-4">
          <h2 className="text-sm font-semibold text-amber-200">
            MVP em andamento 🚧
          </h2>
          <p className="text-sm text-amber-100/90">
            Nesta primeira versão, o cadastro ainda não está 100% automatizado.
            Enquanto finalizamos o fluxo completo, use o formulário abaixo para
            enviar suas informações. Entraremos em contato assim que seu perfil
            for aprovado e publicado.
          </p>
        </section>

        {/* PUBLICIDADE – ENTRE AVISO E FORMULÁRIO (IN-ARTICLE) */}
        <AdsBanner
          adSlot="7666231438"
          type="in-article"
          className="mt-4 flex justify-center"
        />

        {/* FORMULÁRIO BASE (SEM BACKEND AINDA) */}
        <section className="mt-4 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-lg shadow-slate-900/40">
          <h2 className="text-base font-semibold text-slate-50">
            Dados do profissional
          </h2>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-slate-300"
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Ex.: João Souza"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-300"
                >
                  E-mail de contato
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="seuemail@empresa.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="role"
                  className="text-xs font-medium text-slate-300"
                >
                  Cargo principal
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Ex.: Cloud Architect, DevOps Engineer..."
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="location"
                  className="text-xs font-medium text-slate-300"
                >
                  Localização
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Cidade · Estado ou Remoto"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="cloud"
                className="text-xs font-medium text-slate-300"
              >
                Nuvem principal
              </label>
              <select
                id="cloud"
                name="cloud"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              >
                <option value="">Selecione...</option>
                <option value="aws">AWS</option>
                <option value="azure">Microsoft Azure</option>
                <option value="gcp">Google Cloud</option>
                <option value="oracle">Oracle Cloud (OCI)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="headline"
                className="text-xs font-medium text-slate-300"
              >
                Headline / resumo profissional
              </label>
              <textarea
                id="headline"
                name="headline"
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="Ex.: Arquitetura em AWS focada em alta disponibilidade, segurança e custo otimizado."
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="certifications"
                className="text-xs font-medium text-slate-300"
              >
                Certificações (códigos e nomes)
              </label>
              <textarea
                id="certifications"
                name="certifications"
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="Ex.: SAA-C03 – AWS Certified Solutions Architect Associate; AZ-104 – Azure Administrator Associate..."
              />
              <p className="text-[11px] text-slate-500">
                Quanto mais detalhado, melhor para curadoria e exibição no
                diretório.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <label
                  htmlFor="linkedin"
                  className="text-xs font-medium text-slate-300"
                >
                  LinkedIn
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="URL do seu perfil"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="github"
                  className="text-xs font-medium text-slate-300"
                >
                  GitHub (opcional)
                </label>
                <input
                  id="github"
                  name="github"
                  type="url"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="URL do seu GitHub"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="website"
                  className="text-xs font-medium text-slate-300"
                >
                  Site / portfólio (opcional)
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="URL do seu site"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">
                Disponibilidade
              </label>
              <div className="flex flex-wrap gap-3 text-xs text-slate-200">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="availability"
                    value="available"
                    className="h-3 w-3 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                  />
                  Disponível para novos projetos
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="availability"
                    value="listening"
                    className="h-3 w-3 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                  />
                  Ouvindo propostas
                </label>
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-300"
              >
                Mensagem para a curadoria (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="Conte um pouco sobre seu momento profissional, tipos de projetos que busca, etc."
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400 hover:shadow-cyan-400/60"
              >
                Enviar interesse (MVP)
              </button>
              <p className="text-[11px] text-slate-500">
                Em breve, este botão fará o envio direto para nossa API + painel
                interno. Por enquanto, usamos este layout como base da futura
                experiência final.
              </p>
            </div>
          </form>
        </section>

        {/* PUBLICIDADE – RODAPÉ (MULTIPLEX) */}
        <AdsBanner
          adSlot="9227543350"
          type="multiplex"
          className="mt-6 flex justify-center"
        />

        <div className="mt-4 text-xs text-slate-500">
          <Link
            href="/profissionais"
            className="text-cyan-300 hover:text-cyan-200"
          >
            ← Voltar para a lista de profissionais
          </Link>
        </div>
      </div>
    </main>
  );
}
