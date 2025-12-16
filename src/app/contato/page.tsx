// src/app/contato/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AdsBanner } from "@/app/components/ads/AdsBanner";

type FormState = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  company: string; // honeypot anti-bot
};

export default function ContatoPage() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
    company: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  // Timer para auto-limpar o status (evita warning ao sair da página)
  const statusTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        window.clearTimeout(statusTimerRef.current);
        statusTimerRef.current = null;
      }
    };
  }, []);

  const canSubmit = useMemo(() => {
    return (
      form.nome.trim().length >= 2 &&
      form.email.trim().length >= 6 &&
      form.mensagem.trim().length >= 10 &&
      !sending
    );
  }, [form, sending]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // limpa status anterior + timers anteriores
    setStatus(null);
    if (statusTimerRef.current) {
      window.clearTimeout(statusTimerRef.current);
      statusTimerRef.current = null;
    }

    setSending(true);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok || !data?.ok) {
        setStatus({
          ok: false,
          msg: data?.error ?? "Não foi possível enviar. Tente novamente.",
        });

        // auto-limpa erro também (opcional)
        statusTimerRef.current = window.setTimeout(() => setStatus(null), 8000);
        return;
      }

      setStatus({ ok: true, msg: "Mensagem enviada com sucesso. Obrigado!" });
      setForm({ nome: "", email: "", assunto: "", mensagem: "", company: "" });

      // auto-limpa sucesso
      statusTimerRef.current = window.setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus({ ok: false, msg: "Erro de rede. Tente novamente." });
      statusTimerRef.current = window.setTimeout(() => setStatus(null), 8000);
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Fale comigo
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            Contato e sugestões
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Tem sugestão de trilha, encontrou algo que pode ser melhorado ou quer
            compartilhar sua experiência estudando cloud? Manda uma mensagem.
          </p>
        </header>

        <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Formulário */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* honeypot */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="nome"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-300"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="Como posso te chamar?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-300"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="seuemail@exemplo.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-300"
                >
                  Assunto
                </label>
                <input
                  id="assunto"
                  name="assunto"
                  type="text"
                  value={form.assunto}
                  onChange={(e) =>
                    setForm({ ...form, assunto: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="Sugestão, dúvida, feedback..."
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-300"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({ ...form, mensagem: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="Conta um pouco do que você precisa ou quer compartilhar."
                  required
                />
                <p className="mt-1 text-xs text-slate-500">
                  Mínimo recomendado: 10 caracteres.
                </p>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Enviando..." : "Enviar mensagem"}
              </button>

              {status && (
                <div
                  className={`rounded-lg border p-3 text-sm ${
                    status.ok
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-500/40 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>

          {/* ANÚNCIO (MOBILE): entre form e “Como posso te ajudar?” */}
          <div className="md:hidden">
            <AdsBanner position="contact_between" className="w-full" />
          </div>

          {/* Coluna direita */}
          <div className="space-y-5 text-sm text-slate-300 md:text-base">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                Como posso te ajudar?
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Sugestões de novos conteúdos ou trilhas.</li>
                <li>• Correções ou melhorias em explicações.</li>
                <li>• Ideias de formatos: vídeos, labs, roteiros de estudo.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                Tempo de resposta
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Como o projeto está em construção, as respostas podem não ser
                imediatas. Mas toda sugestão é lida e considerada na evolução do
                portal.
              </p>
            </div>

            {/* ANÚNCIO (DESKTOP): abaixo de “Tempo de resposta” */}
            <div className="hidden md:block">
              <AdsBanner position="contact_sidebar" className="w-full" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
