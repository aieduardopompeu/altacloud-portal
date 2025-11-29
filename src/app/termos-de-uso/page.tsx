// src/app/termos-de-uso/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Alta Cloud",
  description:
    "Leia os Termos de Uso da Alta Cloud e entenda as condições para navegação e utilização dos conteúdos do site.",
};

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* CABEÇALHO */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Termos de Uso
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Termos de Uso – Alta Cloud
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Estes Termos de Uso estabelecem as condições para acesso e uso do
            site da Alta Cloud. Ao navegar pelo site, você declara ter lido,
            compreendido e concordado com os termos abaixo.
          </p>
        </header>

        {/* CONTEÚDO */}
        <section className="space-y-8 text-sm leading-relaxed text-slate-200">
          {/* 1. OBJETO */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              1. Objeto do site
            </h2>
            <p className="mt-2">
              A <strong>Alta Cloud</strong> é um hub de conhecimento em Cloud
              Computing que disponibiliza conteúdos educativos, trilhas de
              estudo, comparativos, guias e materiais relacionados à computação
              em nuvem, com foco em informação clara e organizada.
            </p>
            <p className="mt-2">
              O uso do site tem caráter informativo e educativo, não
              constituindo, por si só, consultoria técnica individualizada ou
              garantia de resultados profissionais.
            </p>
          </div>

          {/* 2. USO ADEQUADO */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              2. Uso adequado do site
            </h2>
            <p className="mt-2">
              Ao utilizar o site, você se compromete a:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Respeitar a legislação vigente e estes Termos de Uso;
              </li>
              <li>
                Não tentar obter acesso não autorizado a áreas restritas, sistemas
                ou dados da plataforma;
              </li>
              <li>
                Não utilizar o site para fins ilícitos, difamatórios, abusivos
                ou que possam prejudicar a imagem da Alta Cloud ou de terceiros;
              </li>
              <li>
                Não inserir, compartilhar ou distribuir conteúdos maliciosos,
                como vírus, códigos maliciosos ou qualquer recurso que comprometa
                a segurança e o funcionamento do site.
              </li>
            </ul>
          </div>

          {/* 3. PROPRIEDADE INTELECTUAL */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              3. Propriedade intelectual
            </h2>
            <p className="mt-2">
              Salvo indicação em contrário, todos os textos, layouts, marcas,
              logotipos, gráficos, ilustrações e demais conteúdos disponíveis no
              site são de titularidade da Alta Cloud ou utilizados mediante
              autorização.
            </p>
            <p className="mt-2">
              É proibida a reprodução, distribuição, modificação, tradução,
              exibição ou qualquer outra forma de utilização de conteúdos do
              site para fins comerciais, sem autorização prévia e por escrito.
              O uso pessoal e não comercial, para estudo e consulta, é
              permitido, desde que mantidas as devidas referências à fonte.
            </p>
          </div>

          {/* 4. CONTEÚDOS DE TERCEIROS E LINKS EXTERNOS */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              4. Conteúdos de terceiros e links externos
            </h2>
            <p className="mt-2">
              O site da Alta Cloud pode conter links para sites de terceiros,
              bem como referências a serviços, plataformas, cursos ou materiais
              externos. Esses conteúdos não são controlados diretamente pela
              Alta Cloud.
            </p>
            <p className="mt-2">
              A inclusão de links ou menções não implica endosso, garantia ou
              responsabilidade sobre informações, produtos ou serviços de
              terceiros. Recomendamos que você leia os termos de uso e políticas
              de privacidade de cada site externo que visitar.
            </p>
          </div>

          {/* 5. LIMITAÇÃO DE RESPONSABILIDADE */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              5. Limitação de responsabilidade
            </h2>
            <p className="mt-2">
              Embora a Alta Cloud se esforce para manter as informações
              atualizadas e precisas, não garantimos que todo o conteúdo esteja
              livre de erros, omissões ou desatualizações.
            </p>
            <p className="mt-2">
              O uso das informações disponibilizadas é de responsabilidade do
              próprio usuário. A Alta Cloud não se responsabiliza por decisões
              tomadas com base nos conteúdos do site, nem por eventuais danos,
              diretos ou indiretos, decorrentes do uso ou da impossibilidade de
              uso do site.
            </p>
          </div>

          {/* 6. PRIVACIDADE E DADOS PESSOAIS */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              6. Privacidade e proteção de dados
            </h2>
            <p className="mt-2">
              O tratamento de dados pessoais realizado no âmbito da Alta Cloud é
              regido pela nossa{" "}
              <a
                href="/politica-de-privacidade"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                Política de Privacidade
              </a>{" "}
              e pela{" "}
              <a
                href="/cookies"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                Política de Cookies
              </a>
              . Recomendamos que você leia esses documentos para entender como
              coletamos, utilizamos e protegemos informações.
            </p>
          </div>

          {/* 7. ALTERAÇÕES DOS TERMOS */}
          <div>
            <h2 className="text-base font-semibold text-slate-50">
              7. Alterações destes Termos de Uso
            </h2>
            <p className="mt-2">
              Estes Termos de Uso podem ser atualizados periodicamente para
              refletir mudanças no site, em funcionalidades disponibilizadas ou
              em requisitos legais. A versão vigente será sempre a mais recente,
              publicada nesta página.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Última atualização: <span className="font-mono">2025-11-28</span>
            </p>
          </div>

          {/* 8. CONTATO E FORO */}
          <div className="border-t border-slate-800 pt-6 text-xs text-slate-400">
            <p>
              Em caso de dúvidas sobre estes Termos de Uso, você pode entrar em
              contato pelo e-mail{" "}
              <a
                href="mailto:contato@altacloud.com.br"
                className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
              >
                contato@altacloud.com.br
              </a>
              .
            </p>
            <p className="mt-2">
              Eventuais conflitos relacionados a estes Termos serão preferencialmente
              resolvidos de forma amigável. Se não houver acordo, fica eleito o
              foro da comarca de domicílio do responsável pela Alta Cloud, com
              renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
