// src/app/lgpd/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | Alta Cloud",
  description:
    "Entenda como a Alta Cloud coleta, usa e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function LGPDPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            LGPD • Privacidade de Dados
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Política de Privacidade &amp; LGPD – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Esta página explica como tratamos seus dados pessoais, em
            conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>
        </header>

        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. Quem somos
            </h2>
            <p className="mt-2">
              A <strong>Alta Cloud</strong> é um hub de conhecimento em Cloud
              Computing, com foco em conteúdos didáticos, trilhas de estudo e
              materiais para auxiliar profissionais e iniciantes na área de
              computação em nuvem.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Quais dados coletamos
            </h2>
            <p className="mt-2">
              Os dados coletados podem incluir, por exemplo:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nome e e-mail informados em formulários do site;</li>
              <li>
                Dados de navegação, como páginas visitadas, cliques e tempo de
                permanência;
              </li>
              <li>
                Informações técnicas do dispositivo, como tipo de navegador,
                sistema operacional e endereço IP aproximado.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Como usamos seus dados
            </h2>
            <p className="mt-2">
              Utilizamos os dados coletados para:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Melhorar a experiência de navegação no site;</li>
              <li>
                Entender quais conteúdos são mais relevantes para o público;
              </li>
              <li>
                Enviar comunicações relacionadas a novidades, conteúdos e
                atualizações (quando autorizado);
              </li>
              <li>
                Cumprir obrigações legais e requisitos de segurança da
                plataforma.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Cookies e ferramentas de terceiros
            </h2>
            <p className="mt-2">
              A Alta Cloud utiliza cookies e ferramentas de análise, como o{" "}
              <strong>Google Analytics</strong>, para compreender a performance
              do site e melhorar os conteúdos oferecidos.
            </p>
            <p className="mt-2">
              Você pode gerenciar ou desativar cookies diretamente nas
              configurações do seu navegador. Entretanto, isso pode impactar
              algumas funcionalidades do site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Seus direitos como titular de dados
            </h2>
            <p className="mt-2">
              Em conformidade com a LGPD, você possui, entre outros, os
              seguintes direitos:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Confirmar se tratamos dados pessoais sobre você;</li>
              <li>
                Acessar, corrigir ou atualizar seus dados pessoais armazenados;
              </li>
              <li>
                Solicitar a exclusão de dados que não sejam mais necessários;
              </li>
              <li>
                Revogar o consentimento para usos específicos de seus dados.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              6. Segurança das informações
            </h2>
            <p className="mt-2">
              Adotamos boas práticas de segurança e utilizamos conexões{" "}
              <strong>SSL</strong> para proteger os dados trafegados entre o
              seu navegador e nossos servidores. Ainda assim, nenhum ambiente
              digital é 100% livre de riscos, e recomendamos que você também
              adote boas práticas de segurança ao navegar na internet.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              7. Contato do responsável pelos dados
            </h2>
            <p className="mt-2">
              Caso queira exercer seus direitos como titular de dados ou tirar
              dúvidas sobre esta política, entre em contato:
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
            <p className="mt-1">
              Poderemos atualizar esta política periodicamente para refletir
              melhorias no site ou mudanças na legislação aplicável.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
