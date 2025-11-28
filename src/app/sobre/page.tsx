// src/app/sobre/page.tsx
export default function SobrePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Sobre o projeto
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            O que é o Alta Cloud?
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Um hub independente para ajudar pessoas em língua portuguesa a
            aprender Cloud Computing de forma clara, honesta e sem atalhos
            mágicos.
          </p>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-300 md:text-base">
            <h2 className="text-sm font-semibold text-slate-50 md:text-lg">
              Por que esse portal existe?
            </h2>
            <p>
              O objetivo do Alta Cloud é ser um ponto de apoio para quem quer
              aprender cloud do jeito certo: entendendo fundamentos, praticando
              com calma e construindo uma base sólida para a carreira.
            </p>
            <p>
              Em vez de só colecionar certificados ou decorar perguntas de
              prova, a ideia aqui é focar em entendimento real, prática guiada e
              conexão com cenários do mercado.
            </p>
            <p>
              As trilhas, artigos e materiais vão sendo construídos aos poucos,
              sempre com a mesma filosofia:{" "}
              <span className="font-semibold">
                clareza, honestidade e zero enrolação.
              </span>
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300 md:text-base">
            <h2 className="text-sm font-semibold text-slate-50 md:text-lg">
              Como usar o Alta Cloud
            </h2>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold text-sky-300">
                  1. Comece pela trilha Fundamentos
                </span>
                <p>
                  Ela te dá a base de Cloud e de AWS que vai ser usada nas
                  próximas trilhas.
                </p>
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  2. Siga para IAM, S3, compute e redes
                </span>
                <p>
                  Você aprofunda em segurança, armazenamento, servidores e
                  conectividade — os blocos principais de qualquer ambiente.
                </p>
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  3. Use os artigos e o glossário como apoio
                </span>
                <p>
                  Sempre que travar em algum conceito, consulte o glossário ou
                  procure um artigo específico sobre o tema.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14 space-y-4 text-sm text-slate-300 md:text-base">
          <h2 className="text-sm font-semibold text-slate-50 md:text-lg">
            Sobre quem está por trás
          </h2>
          <p>
            O Alta Cloud é um projeto independente, criado para organizar
            aprendizados reais de estudos, projetos e experiências em cloud,
            transformando tudo isso em conteúdo acessível para outras pessoas.
          </p>
          <p>
            Aos poucos, a ideia é evoluir o portal com mais trilhas, roteiros de
            estudo, materiais complementares e, no futuro, talvez até labs
            interativos e cursos completos.
          </p>
        </section>
      </div>
    </main>
  );
}
