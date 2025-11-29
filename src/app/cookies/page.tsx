// src/app/cookies/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Alta Cloud",
  description:
    "Entenda como a Alta Cloud utiliza cookies e tecnologias similares para oferecer uma melhor experiência de navegação.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* CABEÇALHO */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Cookies
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Política de Cookies – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Esta Política de Cookies explica o que são cookies, quais tipos
            utilizamos em nosso site e como você pode gerenciar suas
            preferências.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Ao continuar navegando no site da Alta Cloud, você concorda com o
            uso de cookies conforme descrito nesta página, respeitadas as
            escolhas realizadas no banner de consentimento e nas configurações
            do seu navegador.
          </p>
        </header>

        {/* CONTEÚDO */}
        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          {/* 1. O QUE SÃO COOKIES */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. O que são cookies?
            </h2>
            <p className="mt-2">
              Cookies são pequenos arquivos de texto armazenados no seu
              navegador quando você visita um site. Eles permitem que certas
              informações sobre a navegação sejam lembradas entre uma visita e
              outra, ajudando a melhorar a experiência de uso, manter sessões
              ativas, lembrar preferências e apoiar recursos de segurança,
              estatística e personalização de conteúdo.
            </p>
          </div>

          {/* 2. TIPOS DE COOKIES UTILIZADOS */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Tipos de cookies utilizados
            </h2>
            <p className="mt-2">
              Na Alta Cloud, podemos utilizar diferentes categorias de cookies,
              agrupadas de forma simplificada da seguinte maneira:
            </p>

            <h3 className="mt-4 text-sm font-semibold text-slate-50">
              2.1 Cookies estritamente necessários (essenciais)
            </h3>
            <p className="mt-1 text-slate-200">
              São cookies fundamentais para o funcionamento básico do site, como
              navegação entre páginas, manutenção de sessão e recursos de
              segurança. Sem eles, partes do site podem não funcionar
              corretamente.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-slate-50">
              2.2 Cookies de desempenho e estatística
            </h3>
            <p className="mt-1 text-slate-200">
              Esses cookies nos ajudam a entender como os visitantes interagem
              com o site de forma agregada, permitindo analisar páginas mais
              acessadas, tempo de permanência, eventuais erros de navegação e
              outros indicadores. As informações são utilizadas para melhorar
              conteúdo, estrutura e usabilidade.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-slate-50">
              2.3 Cookies de funcionalidade
            </h3>
            <p className="mt-1 text-slate-200">
              São utilizados para lembrar algumas escolhas do usuário, como
              idioma, preferências de exibição ou certas opções selecionadas
              durante a navegação, proporcionando uma experiência mais
              personalizada.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-slate-50">
              2.4 Cookies de publicidade e parceiros
            </h3>
            <p className="mt-1 text-slate-200">
              Em determinadas páginas, podemos disponibilizar espaços para
              exibição de anúncios fornecidos por plataformas parceiras. Essas
              plataformas podem utilizar cookies e tecnologias similares para
              medir o desempenho de campanhas e evitar repetição excessiva de
              anúncios para o mesmo usuário.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Esses cookies são gerenciados diretamente pelos parceiros,
              conforme suas próprias políticas de privacidade e de cookies.
            </p>
          </div>

          {/* 3. COOKIES DE TERCEIROS */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Cookies de terceiros
            </h2>
            <p className="mt-2">
              Alguns cookies utilizados em nosso site podem ser definidos por
              serviços de terceiros, como ferramentas de análise de tráfego,
              plataformas de anúncios, players de mídia ou recursos incorporados
              (por exemplo, vídeos, mapas e widgets).
            </p>
            <p className="mt-2">
              Esses terceiros atuam de forma independente e possuem suas
              próprias políticas de privacidade e de cookies, às quais
              recomendamos que você também consulte para entender como seus
              dados são tratados nesses ambientes.
            </p>
          </div>

          {/* 4. GERENCIAMENTO DE COOKIES */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Como gerenciar ou desativar cookies
            </h2>
            <p className="mt-2">
              Você tem diferentes opções para gerenciar o uso de cookies:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Banner de preferências:</strong> ao acessar o site, você
                pode ajustar suas preferências por meio do aviso de cookies
                exibido, selecionando o nível desejado.
              </li>
              <li>
                <strong>Configurações do navegador:</strong> a maioria dos
                navegadores permite bloquear, apagar ou limitar cookies nas
                preferências de privacidade. O procedimento varia conforme o
                navegador (Chrome, Firefox, Edge, Safari etc.).
              </li>
              <li>
                <strong>Ferramentas de limpeza:</strong> alguns aplicativos e
                extensões de navegador permitem apagar cookies e dados de
                navegação periodicamente.
              </li>
            </ul>
            <p className="mt-2 text-xs text-slate-400">
              Ao desativar certos tipos de cookies, algumas funcionalidades do
              site podem ficar limitadas ou apresentar comportamento diferente
              do esperado.
            </p>
          </div>

          {/* 5. ATUALIZAÇÕES */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Atualizações desta Política de Cookies
            </h2>
            <p className="mt-2">
              Esta Política de Cookies pode ser revisada periodicamente para
              refletir mudanças no site, em fornecedores parceiros ou na
              legislação aplicável. Sempre que houver alteração relevante, o
              conteúdo atualizado será publicado nesta página.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Última atualização: <span className="font-mono">2025-11-28</span>
            </p>
          </div>

          {/* 6. CONTATO */}
          <div className="border-t border-slate-800 pt-6 text-xs text-slate-400">
            <p>
              Em caso de dúvidas sobre o uso de cookies na Alta Cloud, você
              pode entrar em contato pelo e-mail{" "}
              <a
                href="mailto:contato@altacloud.com.br"
                className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
              >
                contato@altacloud.com.br
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
