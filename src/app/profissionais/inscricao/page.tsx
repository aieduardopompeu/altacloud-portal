"use client";

import Link from "next/link";
import { useState } from "react";
import { AdsBanner } from "@/app/components/ads/AdsBanner";

export default function InscricaoProfissionaisPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);
    setErr(null);
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      nome: String(fd.get("nome") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      localizacao: String(fd.get("localizacao") || "").trim(),
      nuvem: String(fd.get("nuvem") || "").trim(),
      certificacoes: String(fd.get("certificacoes") || "").trim(),
      resumo: String(fd.get("resumo") || "").trim(),
      linkedin: String(fd.get("linkedin") || "").trim(),
      github: String(fd.get("github") || "").trim(),
      portfolio: String(fd.get("portfolio") || "").trim(),
      company: String(fd.get("company") || "").trim(), // honeypot anti-spam
    };

    try {
      const res = await fetch("/api/profissionais/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErr(data.error || "Não foi possível enviar sua inscrição.");
        setLoading(false);
        return;
      }

      setOk("Inscrição enviada com sucesso. Em breve seu perfil será analisado.");
      form.reset();
      setLoading(false);
    } catch {
      setErr("Erro de rede ao enviar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-3xl px-4 pt-24 pb-20 md:px-6">
        {/* Header */}
        <header className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Diretório Alta Cloud
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Cadastre Seu Perfil e Seja Encontrado
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sua visibilidade começa aqui. Profissionais de AWS, Azure, Google Cloud e Oracle podem
            enviar seus dados para entrar no diretório oficial da Alta Cloud. É gratuito, rápido
            e ajuda você a aparecer para empresas, recrutadores e parceiros.
          </p>
        </header>

        {/* ADS */}
        <div className="mt-8">
          <AdsBanner position="inscricao_top" />
        </div>

        {/* Por que entrar */}
        <section className="mt-10 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold">Por que entrar no Diretório?</h2>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Visibilidade real para empresas e recrutadores.</li>
            <li>• Perfil público com certificações, resumo e links profissionais.</li>
            <li>• Contato direto: WhatsApp, LinkedIn, GitHub ou portfólio.</li>
            <li>• Inclusão gratuita durante a fase inicial da plataforma.</li>
            <li>• Posicionamento por categoria (AWS, Azure, GCP, OCI).</li>
          </ul>
        </section>

        {/* Como funciona */}
        <section className="mt-8 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-lg font-semibold">Como funciona</h2>

          <ol className="space-y-2 text-sm text-slate-300 list-decimal pl-5">
            <li>Preencha o formulário abaixo com seus dados.</li>
            <li>Nossa equipe valida suas informações.</li>
            <li>Seu perfil é publicado no diretório oficial.</li>
            <li>Você passa a receber contatos diretamente.</li>
          </ol>
        </section>

        {/* Aviso importante */}
        <section className="mt-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/80">
          <h3 className="text-sm font-semibold text-amber-300 mb-2">Importante</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Todas as informações enviadas ficam visíveis publicamente, inclusive nome,
            certificações, resumo profissional e links externos. A Alta Cloud não intermedia
            conversas, pagamentos, entrevistas ou processos seletivos.
          </p>
        </section>

        {/* Formulário */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold mb-4">Formulário de Inscrição</h2>

          <form className="space-y-5 text-sm" onSubmit={onSubmit}>
            {/* Honeypot anti-spam (não remover) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">Nome completo</label>
              <input
                required
                name="nome"
                type="text"
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">E-mail</label>
              <input
                required
                name="email"
                type="email"
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* Localidade */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">Localização</label>
              <input
                required
                name="localizacao"
                type="text"
                placeholder="Ex: São Paulo, SP"
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* Nuvem */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">Nuvem principal</label>
              <select
                required
                name="nuvem"
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
                <option value="GCP">Google Cloud</option>
                <option value="OCI">Oracle Cloud</option>
              </select>
            </div>

            {/* Certificações */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">Certificações</label>
              <textarea
                required
                name="certificacoes"
                rows={3}
                placeholder="Liste suas certificações relevantes"
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* Resumo */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">Resumo profissional</label>
              <textarea
                required
                name="resumo"
                rows={4}
                placeholder="Descreva sua experiência de forma objetiva"
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">LinkedIn (opcional)</label>
              <input
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* GitHub */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">GitHub (opcional)</label>
              <input
                name="github"
                type="url"
                placeholder="https://github.com/..."
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {/* Portfólio */}
            <div className="flex flex-col gap-1">
              <label className="text-slate-200 font-medium">Portfólio (opcional)</label>
              <input
                name="portfolio"
                type="url"
                placeholder="https://..."
                className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100 border border-slate-700"
              />
            </div>

            {err && (
              <div className="rounded-xl border border-red-900/40 bg-red-950/30 px-4 py-3 text-sm text-red-200">
                {err}
              </div>
            )}

            {ok && (
              <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200">
                {ok}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar inscrição"}
            </button>
          </form>
        </section>

        {/* ADS */}
        <div className="mt-12">
          <AdsBanner position="inscricao_bottom" />
        </div>

        {/* Link de voltar */}
        <div className="mt-10 text-center">
          <Link href="/profissionais" className="text-cyan-400 hover:text-cyan-300 text-sm">
            ← Voltar ao diretório
          </Link>
        </div>
      </div>
    </main>
  );
}
