// src/app/contato/page.tsx
export default function ContatoPage() {
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
            Tem sugestão de trilha, encontrou algo que pode ser melhorado ou
            quer compartilhar sua experiência estudando cloud? Manda uma
            mensagem.
          </p>
        </header>

        <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Formulário (estático por enquanto) */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
            <form action="#" method="post" className="space-y-4">
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
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="Como posso te chamar?"
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
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="seuemail@exemplo.com"
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
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-sky-500"
                  placeholder="Conta um pouco do que você precisa ou quer compartilhar."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Enviar mensagem
              </button>

              <p className="text-xs text-slate-500">
                Este formulário ainda não está ligado a um backend. No futuro,
                ele pode ser conectado a um serviço de e-mail, planilha ou API
                própria para receber as mensagens.
              </p>
            </form>
          </div>

          {/* Informações extras */}
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
          </div>
        </section>
      </div>
    </main>
  );
}
