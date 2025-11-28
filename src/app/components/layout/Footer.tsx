// src/app/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          {/* BLOCO INSTITUCIONAL + REDES SOCIAIS */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
              Alta Cloud
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Hub de conhecimento em Cloud Computing, com conteúdo em português,
              direto ao ponto.
            </p>

            {/* REDES SOCIAIS */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-slate-400">
              <a
                href="https://www.youtube.com/@altacloud"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:text-sky-300"
                aria-label="YouTube Alta Cloud"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M21.6 7.2a2.3 2.3 0 0 0-1.6-1.6C18.2 5.2 12 5.2 12 5.2s-6.2 0-8 .4A2.3 2.3 0 0 0 2.4 7.2 24.3 24.3 0 0 0 2 12a24.3 24.3 0 0 0 .4 4.8 2.3 2.3 0 0 0 1.6 1.6c1.8.4 8 .4 8 .4s6.2 0 8-.4a2.3 2.3 0 0 0 1.6-1.6A24.3 24.3 0 0 0 22 12a24.3 24.3 0 0 0-.4-4.8ZM10.4 14.8V9.2L15.2 12Z"
                  />
                </svg>
                <span>YouTube</span>
              </a>

              <a
                href="https://www.instagram.com/altacloud/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:text-sky-300"
                aria-label="Instagram Alta Cloud"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 2.2C8.9 2.2 8.5 2.2 7.3 2.3a5.4 5.4 0 0 0-3.8 1.4 5.4 5.4 0 0 0-1.4 3.8C2 8.7 2 9.1 2 12s0 3.3.1 4.5a5.4 5.4 0 0 0 1.4 3.8 5.4 5.4 0 0 0 3.8 1.4c1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1a5.4 5.4 0 0 0 3.8-1.4 5.4 5.4 0 0 0 1.4-3.8c.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7a5.4 5.4 0 0 0-1.4-3.8A5.4 5.4 0 0 0 16.7 2.3C15.5 2.2 15.1 2.2 12 2.2Zm0 1.6c3 0 3.4 0 4.6.1a3.7 3.7 0 0 1 2.6 1 3.7 3.7 0 0 1 1 2.6c.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6a3.7 3.7 0 0 1-1 2.6 3.7 3.7 0 0 1-2.6 1c-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1a3.7 3.7 0 0 1-2.6-1 3.7 3.7 0 0 1-1-2.6C3.2 15.4 3.2 15 3.2 12s0-3.4.1-4.6a3.7 3.7 0 0 1 1-2.6 3.7 3.7 0 0 1 2.6-1c1.2-.1 1.6-.1 4.6-.1Z"
                  />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://x.com/alta_cloud"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:text-sky-300"
                aria-label="X (Twitter) Alta Cloud"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M5 3h4.1l3 4.5L15.8 3H19l-5 7 5.4 8H15l-3.3-5L8 18H5.1L10.3 11Z"
                  />
                </svg>
                <span>X</span>
              </a>

              <a
                href="https://web.facebook.com/altacloudbr/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:text-sky-300"
                aria-label="Facebook Alta Cloud"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 21v-7.2h2.4l.4-3h-2.8V8.4c0-.9.3-1.5 1.6-1.5H16V4.2A19.5 19.5 0 0 0 14.1 4C11.9 4 10.5 5.2 10.5 7.9V10H8v3h2.5V21Z"
                  />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* BLOCO CONTEÚDO */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
              Conteúdo
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              <li>
                <Link href="/artigos" className="hover:text-sky-300">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/comparativos" className="hover:text-sky-300">
                  Comparativos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-sky-300">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/glossario" className="hover:text-sky-300">
                  Glossário
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOCO CARREIRA */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
              Carreira
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              <li>
                <Link href="/certificacoes" className="hover:text-sky-300">
                  Certificações
                </Link>
              </li>
              <li>
                <Link href="/trilhas" className="hover:text-sky-300">
                  Trilhas de estudo
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOCO INSTITUCIONAL */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
              Institucional
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              <li>
                <Link href="/sobre" className="hover:text-sky-300">
                  Sobre o projeto
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-sky-300">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-sky-300"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LINHA FINAL */}
        <div className="mt-8 border-t border-slate-800 pt-4 flex justify-between text-[11px] text-slate-500">
          <span>
            {new Date().getFullYear()} Alta Cloud. Todos os direitos
            reservados.
          </span>
          <span>Desenvolvido por Eduardo Pompeu + Gepeto 🤖.</span>
        </div>
      </div>
    </footer>
  );
}
