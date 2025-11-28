// src/app/cookies/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Alta Cloud",
  description:
    "Entenda como a Alta Cloud utiliza cookies e tecnologias similares para melhorar sua experiência.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Cookies
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Política de Cookies – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Esta Política de Cookies explica o que são cookies, como os
            utilizamos no site da Alta Cloud e quais são suas opções em relação
            ao uso dessas tecnologias.
          </p>
        </header>

        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. O que são cookies?
            </h2>
            <p className="mt-2">
              Cookies são pequenos arquivos de texto armazenados no seu
              navegador quando você visita um site. Eles permitem reconhecer seu
              dispositivo, lembrar preferências e entender como você interage
              com as páginas.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Tipos de cookies utilizados
            </h2>
            <p className="mt-2">
              No site da Alta Cloud, podemos utilizar os seguintes tipos de
              cookies:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o
                funcionamento básico do site e para permitir o acesso a recursos
                principais;
              </li>
              <li>
                <strong>Cookies de performance e análise:</strong> utilizados
                para entender como os usuários interagem com o site, como quais
                páginas são mais visitadas, tempo de permanência e possíveis
                erros (ex.: Google Analytics);
              </li>
              <li>
                <strong>Cookies de funcionalidade:</strong> ajudam a lembrar
                preferências do usuário, como idioma ou configurações de
                exibição, quando disponíveis.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Cookies de terceiros
            </h2>
            <p className="mt-2">
              Alguns cookies podem ser definidos por serviços de terceiros
              integrados ao site, como ferramentas de análise, vídeos
              incorporados ou serviços de hospedagem. Esses terceiros podem
              coletar informações adicionais de acordo com suas próprias
              políticas de privacidade e cookies.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Como gerenciar ou desativar cookies
            </h2>
            <p className="mt-2">
              Você pode gerenciar o uso de cookies diretamente nas configurações
              do seu navegador, podendo bloquear, limitar ou excluir cookies já
              armazenados. No entanto, algumas partes do site podem não
              funcionar corretamente sem determinados cookies essenciais.
            </p>
            <p className="mt-2">
              Para orientações específicas, consulte a documentação do seu
              navegador (Chrome, Firefox, Edge, Safari, etc.).
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Atualizações desta política
            </h2>
            <p className="mt-2">
              Podemos atualizar esta Política de Cookies periodicamente para
              refletir mudanças técnicas, legais ou na forma como utilizamos
              cookies no site. A versão mais recente estará sempre disponível
              nesta página.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              6. Contato
            </h2>
            <p className="mt-2">
              Em caso de dúvidas sobre o uso de cookies no site da Alta Cloud,
              entre em contato:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                E-mail:{" "}
                <a
                  href="mailto:contato@altacloud.com.br"
                  className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
                >
                  contato@altacloud.com.br
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-800 pt-6 text-xs text-slate-400">
            <p>
              Última atualização:{" "}
              <span className="font-mono">2025-11-28</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
