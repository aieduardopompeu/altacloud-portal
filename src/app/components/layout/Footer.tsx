// src/app/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-sm md:grid-cols-4">
          {/* COLUNA 1 – SOBRE + REDES SOCIAIS */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Alta Cloud
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Hub de conhecimento em Cloud Computing, com conteúdo em
              português, direto ao ponto.
            </p>

            {/* Ícones sociais */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.youtube.com/@altacloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Alta Cloud"
              >
                <img
                  src="/icons/youtube.png"
                  alt="YouTube"
                  className="h-7 w-7 opacity-80 invert brightness-200 transition hover:opacity-100"
                />
              </a>
              <a
                href="https://www.instagram.com/altacloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Alta Cloud"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="h-7 w-7 opacity-80 invert brightness-200 transition hover:opacity-100"
                />
              </a>
              <a
                href="https://x.com/alta_cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Alta Cloud"
              >
                <img
                  src="/icons/x.png"
                  alt="X"
                  className="h-7 w-7 opacity-80 invert brightness-200 transition hover:opacity-100"
                />
              </a>
              <a
                href="https://web.facebook.com/altacloudbr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Alta Cloud"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="h-7 w-7 opacity-80 invert brightness-200 transition hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {/* COLUNA 2 – CONTEÚDO */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
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

          {/* COLUNA 3 – CARREIRA */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
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

          {/* COLUNA 4 – INSTITUCIONAL + SELOS DE SEGURANÇA */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
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

            {/* Selos de segurança */}
            <div className="mt-4 flex items-center gap-4 opacity-70">
              {/* LGPD → página interna /lgpd */}
              <Link href="/lgpd" aria-label="Política de Privacidade e LGPD">
                <img
                  src="/icons/lgpd.svg"
                  alt="Conformidade com LGPD"
                  className="h-8 w-auto hover:opacity-100 transition-opacity"
                />
              </Link>

              {/* SSL → relatório SSL externo */}
              <a
                href="https://www.ssllabs.com/ssltest/analyze.html?d=altacloud.com.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verificação de conexão segura SSL"
              >
                <img
                  src="/icons/ssl-secure.svg"
                  alt="Conexão segura SSL"
                  className="h-8 w-auto hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Google Safe → relatório Google Safe Browsing */}
              <a
                href="https://transparencyreport.google.com/safe-browsing/search?url=altacloud.com.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verificação Google Safe Browsing"
              >
                <img
                  src="/icons/google-safe.svg"
                  alt="Navegação segura Google"
                  className="h-8 w-auto hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT / ASSINATURA */}
        <div className="mt-8 flex flex-col items-start justify-between border-t border-slate-800 pt-4 text-[11px] text-slate-500 sm:flex-row sm:items-center">
          <span>
            {new Date().getFullYear()} Alta Cloud. Todos os direitos
            reservados.
          </span>
          <span className="mt-1 sm:mt-0">
            Desenvolvido por Eduardo Pompeu + Gepeto 🤖
          </span>
        </div>
      </div>
    </footer>
  );
}
