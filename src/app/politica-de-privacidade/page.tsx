// src/app/politica-de-privacidade/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Alta Cloud",
  description:
    "Saiba como a Alta Cloud trata seus dados pessoais e utiliza cookies para oferecer uma melhor experiência de navegação.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* CABEÇALHO */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Privacidade
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Política de Privacidade – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Esta Política de Privacidade descreve, de forma simples e direta,
            como coletamos, utilizamos, armazenamos e protegemos informações ao
            longo do uso do site da Alta Cloud.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Recomendamos que você leia este documento com atenção. Ao utilizar
            o site, você declara estar ciente dos termos aqui descritos.
          </p>
        </header>

        {/* CONTEÚDO */}
        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          {/* 1. SOBRE A ALTA CLOUD */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. Sobre a Alta Cloud
            </h2>
            <p className="mt-2">
              A <strong>Alta Cloud</strong> é um hub de conhecimento em Cloud
              Computing, focado em conteúdos educativos, trilhas de estudo,
              comparativos e materiais relacionados à computação em nuvem.
            </p>
            <p className="mt-2">
              Nosso objetivo é oferecer informação clara e organizada, em
              português, para ajudar estudantes e profissionais a se
              desenvolverem na área de tecnologia.
            </p>
          </div>

          {/* 2. DADOS COLETADOS */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Dados pessoais coletados
            </h2>
            <p className="mt-2">
              Os tipos de dados coletados podem variar de acordo com a forma
              como você interage com o site. De maneira geral, podem incluir:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Dados fornecidos diretamente por você</strong>, como
                nome e e-mail, em formulários de contato ou inscrição em
                novidades (quando disponíveis);
              </li>
              <li>
                <strong>Dados de navegação</strong>, como páginas acessadas,
                cliques, tempo de permanência e origem de tráfego;
              </li>
              <li>
                <strong>Informações técnicas do dispositivo</strong>, como
                tipo de navegador, sistema operacional, idioma, endereço IP
                aproximado e resolução de tela.
              </li>
            </ul>
            <p className="mt-2 text-xs text-slate-400">
              Não solicitamos, de forma intencional, dados sensíveis (como
              informações de saúde, religião, orientação política etc.).
            </p>
          </div>

          {/* 3. FINALIDADE */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Finalidade do uso das informações
            </h2>
            <p className="mt-2">
              Utilizamos as informações coletadas para fins como:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Monitorar o funcionamento do site e melhorar a experiência de
                navegação;
              </li>
              <li>
                Entender quais conteúdos são mais acessados, a fim de
                organizar melhor trilhas e materiais;
              </li>
              <li>
                Produzir métricas agregadas de audiência e engajamento, sem
                foco em identificar individualmente o usuário;
              </li>
              <li>
                Exibir conteúdos e recursos que financiam o projeto, como
                anúncios veiculados por plataformas parceiras;
              </li>
              <li>
                Cumprir obrigações legais, regulatórias ou de segurança da
                plataforma, quando aplicável.
              </li>
            </ul>
          </div>

          {/* 4. COOKIES */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Cookies e tecnologias similares
            </h2>
            <p className="mt-2">
              Cookies são pequenos arquivos armazenados no seu navegador, que
              ajudam o site a lembrar algumas informações sobre sua visita,
              como preferências e determinadas ações realizadas nas páginas.
            </p>
            <p className="mt-2">
              Na Alta Cloud, utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Garantir o funcionamento básico e seguro do site;</li>
              <li>
                Entender padrões gerais de acesso e navegação, de forma
                estatística e agregada;
              </li>
              <li>
                Apoiar a exibição de conteúdos e anúncios fornecidos por
                parceiros, quando aplicável.
              </li>
            </ul>
            <p className="mt-2">
              Você pode gerenciar suas preferências de cookies diretamente no
              banner exibido ao acessar o site ou ajustando as configurações do
              seu navegador. Para mais detalhes, consulte também a{" "}
              <a
                href="/cookies"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                Política de Cookies
              </a>
              .
            </p>
          </div>

          {/* 5. COMPARTILHAMENTO */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Compartilhamento de informações com terceiros
            </h2>
            <p className="mt-2">
              Não vendemos ou alugamos dados pessoais de usuários. No entanto,
              alguns dados podem ser compartilhados com terceiros nas seguintes
              situações:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Ferramentas de análise e métricas</strong>, que nos
                ajudam a entender o uso do site e melhorar conteúdos e
                funcionalidades;
              </li>
              <li>
                <strong>Serviços de hospedagem e infraestrutura</strong>, que
                mantêm o site disponível e estável;
              </li>
              <li>
                <strong>Plataformas de publicidade</strong>, responsáveis por
                exibir anúncios em espaços do site;
              </li>
              <li>
                <strong>Autoridades públicas</strong>, quando houver obrigação
                legal, judicial ou regulatória.
              </li>
            </ul>
            <p className="mt-2 text-xs text-slate-400">
              Esses terceiros atuam de acordo com suas próprias políticas de
              privacidade, às quais você também está sujeito ao utilizar seus
              serviços.
            </p>
          </div>

          {/* 6. SEGURANÇA */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              6. Segurança das informações
            </h2>
            <p className="mt-2">
              Adotamos boas práticas de segurança da informação, incluindo
              conexões protegidas (<strong>HTTPS/SSL</strong>) e medidas
              técnicas e organizacionais destinadas a reduzir riscos de acesso
              não autorizado, perda ou uso indevido de dados.
            </p>
            <p className="mt-2">
              Apesar disso, nenhum ambiente digital é totalmente livre de
              riscos. Por isso, recomendamos que você mantenha seus dispositivos
              atualizados e utilize senhas fortes e únicas sempre que possível.
            </p>
          </div>

          {/* 7. DIREITOS DO TITULAR */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              7. Seus direitos em relação aos dados
            </h2>
            <p className="mt-2">
              Em conformidade com a legislação brasileira de proteção de dados,
              você pode exercer, entre outros, os seguintes direitos:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Solicitar confirmação da existência de tratamento de dados;</li>
              <li>Requisitar acesso, correção ou atualização de dados;</li>
              <li>
                Pedir a exclusão de dados pessoais que não sejam mais
                necessários para as finalidades informadas;
              </li>
              <li>
                Solicitar esclarecimentos sobre como as informações são
                utilizadas;
              </li>
              <li>
                Revogar consentimentos concedidos, quando o tratamento se basear
                nessa hipótese.
              </li>
            </ul>
          </div>

          {/* 8. CONTATO */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              8. Contato para questões de privacidade
            </h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta Política de Privacidade, sobre o
              uso de dados pessoais ou para exercer seus direitos como titular,
              você pode entrar em contato pelo e-mail:
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

          {/* 9. ATUALIZAÇÕES */}
          <div className="border-t border-slate-800 pt-6 text-xs text-slate-400">
            <p>
              Última atualização:{" "}
              <span className="font-mono">2025-11-28</span>
            </p>
            <p className="mt-1">
              Esta Política de Privacidade pode ser ajustada periodicamente para
              refletir mudanças no site, em tecnologias utilizadas ou na
              legislação aplicável. Sempre que houver alteração relevante, a
              nova versão será publicada nesta página.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
