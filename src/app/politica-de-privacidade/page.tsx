// src/app/politica-de-privacidade/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Alta Cloud",
  description:
    "Saiba como a Alta Cloud trata seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Privacidade
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Política de Privacidade – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e protegemos seus dados pessoais ao utilizar o site da
            Alta Cloud.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Recomendamos que você leia este documento com atenção.
          </p>
        </header>

        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. Sobre a Alta Cloud
            </h2>
            <p className="mt-2">
              A <strong>Alta Cloud</strong> é um hub de conhecimento em Cloud
              Computing, focado em conteúdos educativos, trilhas de estudo,
              comparativos e notícias relacionadas a computação em nuvem.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Dados pessoais coletados
            </h2>
            <p className="mt-2">
              Os dados pessoais coletados podem variar de acordo com sua forma
              de interação com o site, e podem incluir:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nome e e-mail informados em formulários;</li>
              <li>
                Dados de navegação, como páginas acessadas, cliques, tempo de
                permanência e origem de tráfego;
              </li>
              <li>
                Informações técnicas do dispositivo, como navegador, sistema
                operacional e endereço IP aproximado.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Finalidade do tratamento de dados
            </h2>
            <p className="mt-2">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Melhorar a experiência de navegação no site;</li>
              <li>
                Analisar métricas de acesso e engajamento com os conteúdos;
              </li>
              <li>
                Enviar comunicações sobre novos conteúdos, materiais ou
                atualizações, quando houver consentimento;
              </li>
              <li>
                Cumprir obrigações legais, regulatórias ou de segurança da
                plataforma.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Cookies e tecnologias similares
            </h2>
            <p className="mt-2">
              A Alta Cloud utiliza cookies e tecnologias similares para
              reconhecer seu navegador, entender como você interage com o site e
              melhorar a qualidade dos serviços. Alguns cookies são essenciais
              para o funcionamento da página, enquanto outros servem a fins
              estatísticos ou de experiência do usuário.
            </p>
            <p className="mt-2">
              Você pode gerenciar ou bloquear cookies nas configurações do seu
              navegador. Para mais detalhes, consulte a{" "}
              <strong>Política de Cookies</strong> disponível neste site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Compartilhamento de dados
            </h2>
            <p className="mt-2">
              Não vendemos, alugamos ou comercializamos dados pessoais dos
              usuários. Seus dados podem ser compartilhados com:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Fornecedores de serviços de análise e métricas (como Google
                Analytics);
              </li>
              <li>
                Provedores de hospedagem e infraestrutura de tecnologia da
                informação;
              </li>
              <li>
                Autoridades públicas, quando houver obrigação legal ou
                regulatória.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              6. Segurança das informações
            </h2>
            <p className="mt-2">
              Adotamos boas práticas de segurança da informação, incluindo
              conexões protegidas (<strong>HTTPS/SSL</strong>) e medidas
              técnicas e organizacionais para reduzir riscos de acessos não
              autorizados, perda ou uso indevido de dados pessoais.
            </p>
            <p className="mt-2">
              Apesar dos esforços, nenhum ambiente digital é totalmente livre de
              riscos. Por isso, recomendamos que você também adote boas práticas
              de segurança ao navegar na internet.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              7. Direitos do titular de dados
            </h2>
            <p className="mt-2">
              Em conformidade com a LGPD, você pode exercer, entre outros, os
              seguintes direitos:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Confirmar se tratamos dados pessoais sobre você;</li>
              <li>Acessar, corrigir ou atualizar seus dados pessoais;</li>
              <li>
                Solicitar a exclusão de dados que não sejam mais necessários;
              </li>
              <li>
                Revogar consentimentos concedidos anteriormente, quando
                aplicável.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-50">
              8. Contato
            </h2>
            <p className="mt-2">
              Caso tenha dúvidas sobre esta política ou queira exercer seus
              direitos como titular de dados, entre em contato:
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
              Esta política pode ser atualizada periodicamente para refletir
              melhorias no site ou mudanças na legislação aplicável.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
