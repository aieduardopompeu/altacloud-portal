// src/app/termos-de-uso/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Alta Cloud",
  description:
    "Termos e condições de uso do site Alta Cloud. Leia com atenção antes de utilizar nossos conteúdos.",
};

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Termos de uso
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Termos de Uso – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Ao acessar e utilizar o site da Alta Cloud, você concorda com os
            Termos de Uso descritos abaixo. Caso não concorde com alguma
            condição, recomendamos que não utilize o site.
          </p>
        </header>

        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. Objeto
            </h2>
            <p className="mt-2">
              A Alta Cloud disponibiliza conteúdos, artigos, trilhas de estudo,
              comparativos e materiais relacionados à computação em nuvem, com
              finalidade estritamente informativa e educativa.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Uso permitido
            </h2>
            <p className="mt-2">
              O usuário se compromete a utilizar o site de forma ética e em
              conformidade com a legislação vigente, sendo vedado:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Utilizar o conteúdo para fins ilícitos ou que violem direitos de
                terceiros;
              </li>
              <li>
                Tentar obter acesso não autorizado a áreas restritas do site ou
                de sistemas relacionados;
              </li>
              <li>
                Praticar qualquer ato que possa comprometer a disponibilidade,
                integridade ou desempenho do site.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Propriedade intelectual
            </h2>
            <p className="mt-2">
              Salvo indicação em contrário, todos os textos, layouts, gráficos,
              logotipos e demais conteúdos disponibilizados no site são de
              titularidade da Alta Cloud ou de seus parceiros, sendo protegidos
              por direitos autorais e outras normas de propriedade intelectual.
            </p>
            <p className="mt-2">
              É permitido compartilhar links para os conteúdos, mas é proibido
              reproduzir, distribuir ou modificar materiais de forma integral ou
              parcial sem autorização prévia e expressa.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Conteúdos de terceiros
            </h2>
            <p className="mt-2">
              O site pode conter links ou referências a serviços, produtos ou
              conteúdos de terceiros. A Alta Cloud não se responsabiliza por
              informações, práticas ou políticas de privacidade de sites ou
              serviços externos.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Isenção de responsabilidades
            </h2>
            <p className="mt-2">
              Os conteúdos disponibilizados pela Alta Cloud têm caráter
              informativo e educacional, podendo sofrer atualizações a qualquer
              momento. Não garantimos que todas as informações estejam sempre
              completas, atualizadas ou livres de erros.
            </p>
            <p className="mt-2">
              Decisões técnicas, profissionais ou comerciais tomadas com base em
              conteúdos do site são de responsabilidade exclusiva do usuário.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              6. Modificações nos Termos de Uso
            </h2>
            <p className="mt-2">
              A Alta Cloud poderá alterar estes Termos de Uso a qualquer
              momento, especialmente em razão de atualizações do site ou
              mudanças legais. A versão mais recente estará sempre disponível
              nesta página.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              7. Contato
            </h2>
            <p className="mt-2">
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
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
