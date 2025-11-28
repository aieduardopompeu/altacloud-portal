// src/app/components/layout/Footer.tsx
import Link from "next/link";
import { AdsBanner } from "../ads/AdsBanner";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Anúncio multiplex no topo do rodapé */}
        <div className="mb-8">
          <AdsBanner adSlot="9227543350" />
        </div>

        <div className="grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
              Alta Cloud
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Hub de conhecimento em Cloud Computing, com conteúdo em português,
              direto ao ponto.
            </p>
          </div>

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
                <Link href="/politica-de-privacidade" className="hover:text-sky-300">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 flex justify-between text-[11px] text-slate-500">
          <span>{new Date().getFullYear()} Alta Cloud. Todos os direitos reservados.</span>
          <span>Desenvolvido por Eduardo + IA.</span>
        </div>
      </div>
    </footer>
  );
}
