import type { Metadata } from "next";
import { ArticleLayout } from "../../components/layout/ArticleLayout";
import { siteConfig, buildCanonical } from "../../../lib/seo";

const slug = "fundamentos-de-iam-na-aws";
const title = "Fundamentos de IAM na AWS";
const description =
  "Entenda o que é IAM na AWS, como funcionam usuários, grupos, roles e políticas, e quais são as melhores práticas de segurança para começar do jeito certo.";
const datePublished = "2025-11-26";
const url = buildCanonical(`/artigos/${slug}`);

export const metadata: Metadata = {
  title: `${title} · ${siteConfig.name}`,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `${title} · ${siteConfig.name}`,
    description,
    url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "article",
  },
};

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.url + "/logo.png",
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artigos",
        item: buildCanonical("/artigos"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        id="ld-article-iam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}></script>
      <script
        id="ld-breadcrumb-iam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}></script>

      <ArticleLayout
        category="AWS"
        title={title}
        description={description}
        readingTime="9 min"
        date={datePublished}
      >
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">
            O que é IAM na AWS?
          </h2>

          <p>
            <strong>IAM (Identity and Access Management)</strong> é o serviço da AWS
            responsável por gerenciar <strong>quem</strong> pode fazer <strong>o quê</strong> em
            <strong>quais recursos</strong>. É o coração da segurança na nuvem.
          </p>

          <p>
            Toda vez que alguém faz login no console, usa a AWS CLI, chama uma API
            ou acessa um recurso, o IAM está por trás autorizando (ou bloqueando) a
            ação. Por isso, aprender IAM cedo evita sérios problemas de segurança
            no futuro.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            A conta root e o risco de usá-la no dia a dia
          </h2>

          <p>
            Quando você cria uma conta AWS, é gerado um usuário <strong>root</strong>, que
            tem acesso total e irrestrito a todos os recursos e configurações,
            incluindo faturamento.
          </p>

          <p>
            Boas práticas recomendam:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Ativar MFA no usuário root;</li>
            <li>Usá-lo apenas para tarefas críticas de conta (raramente);</li>
            <li>NUNCA usar o root no dia a dia de operação;</li>
            <li>Criar usuários IAM para uso cotidiano.</li>
          </ul>

          <p>
            Pense no root como a chave-mestra do cofre: existe, mas quase nunca
            sai da gaveta.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Usuários, grupos e roles (papéis)
          </h2>

          <p>No IAM, você trabalha com três tipos principais de identidade:</p>

          <h3 className="text-lg font-semibold text-white mt-2">
            Usuários IAM
          </h3>
          <p>
            Representam pessoas ou aplicações que precisam de acesso direto à AWS
            (via console, CLI ou API). Cada usuário pode ter:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Credenciais de console (login/senha);</li>
            <li>Access keys (para CLI/SDK);</li>
            <li>Políticas anexadas diretamente (não é o ideal).</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-4">
            Grupos IAM
          </h3>
          <p>
            Grupos são coleções de usuários. Em vez de anexar políticas em cada
            usuário, você anexa no grupo.
          </p>
          <p>Exemplos:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>grupo <code>Desenvolvedores</code>;</li>
            <li>grupo <code>DevOps</code>;</li>
            <li>grupo <code>SomenteLeitura</code>.</li>
          </ul>
          <p>
            Você coloca as políticas nos grupos e adiciona usuários ao grupo. Isso
            deixa a gestão muito mais simples.
          </p>

          <h3 className="text-lg font-semibold text-white mt-4">
            Roles (funções)
          </h3>
          <p>
            Roles não representam pessoas, e sim <strong>perfis de acesso</strong> que
            outros serviços assumem temporariamente.
          </p>
          <p>Exemplos comuns:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Uma EC2 que precisa ler de um bucket S3;</li>
            <li>Uma Lambda que grava logs no CloudWatch;</li>
            <li>Uma aplicação em EKS que acessa um banco RDS.</li>
          </ul>
          <p>
            Em vez de colocar access keys dentro do código (péssima prática), você
            atribui uma Role ao serviço, e a AWS cuida das credenciais temporárias.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            O que são políticas IAM?
          </h2>

          <p>
            Políticas são documentos em JSON que descrevem <strong>quais ações</strong> são
            permitidas ou negadas em <strong>quais recursos</strong>, sob certas <strong>condições</strong>.
          </p>

          <p>Estrutura básica:</p>

          <pre className="bg-slate-900 p-4 rounded text-slate-200 overflow-x-auto text-xs">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": ["arn:aws:s3:::meu-bucket-exemplo"]
    }
  ]
}`}
          </pre>

          <p>Principais tipos:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Políticas gerenciadas pela AWS:</strong> prontas para uso
              (ex: <code>AmazonS3ReadOnlyAccess</code>).
            </li>
            <li>
              <strong>Políticas gerenciadas pelo cliente:</strong> criadas por você,
              reutilizáveis em múltiplas identidades.
            </li>
            <li>
              <strong>Políticas inline:</strong> anexadas diretamente a um único
              usuário/role/grupo (menos reutilizáveis).
            </li>
          </ul>

          <p>
            Para quem está começando, as políticas gerenciadas pela AWS ajudam muito
            a ganhar velocidade com segurança.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Princípios de segurança: mínimo privilégio e MFA
          </h2>

          <p>
            Dois princípios dominam qualquer conversa séria sobre IAM:
            <strong> mínimo privilégio</strong> e <strong>MFA</strong>.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Mínimo privilégio:</strong> cada identidade deve ter somente as
              permissões estritamente necessárias para executar suas tarefas.
            </li>
            <li>
              <strong>MFA (Multi-Factor Authentication):</strong> adicionar um segundo fator
              (app, token, SMS) ao login, principalmente em contas privilegiadas.
            </li>
          </ul>

          <p>
            Em produção, permissões do tipo <code>*:* </code> (“tudo em tudo”) são um
            enorme risco. Para labs é aceitável em ambientes isolados, mas nunca
            leve isso para o mundo real.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Boas práticas para começar com IAM
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Proteja o usuário root com MFA e use-o o mínimo possível;</li>
            <li>Crie usuários IAM individuais, nunca compartilhados;</li>
            <li>Use grupos para organizar permissões por função;</li>
            <li>Use roles para aplicações e serviços (EC2, Lambda, ECS, etc.);</li>
            <li>Evite colocar access keys diretamente no código;</li>
            <li>Revogue acessos de quem não precisa mais;</li>
            <li>Revise políticas amplas e reduza privilégios com o tempo.</li>
          </ul>

          <p>
            Segurança em Cloud não é um estado final, é um processo contínuo.
            IAM é onde essa jornada começa.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Próximos passos na trilha
          </h2>

          <p>
            Depois de entender os fundamentos de IAM, você está pronto para:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Aprofundar em políticas avançadas e condições;</li>
            <li>Integrar IAM com S3, EC2, RDS e outros serviços;</li>
            <li>Explorar autenticação federada (SSO, AD, etc.);</li>
            <li>Construir ambientes multi-conta com segurança centralizada.</li>
          </ul>

          <p>
            Agora, siga para o próximo módulo da trilha:{" "}
            <strong>Introdução ao Amazon S3</strong>, onde você vai aprender a
            armazenar dados de forma segura e escalável na nuvem.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
