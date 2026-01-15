import type { Metadata } from "next";
import { ArticleLayout } from "../../components/layout/ArticleLayout";
import { siteConfig, buildCanonical } from "../../../lib/seo";

const slug = "introducao-ao-amazon-s3";
const title = "Introdução ao Amazon S3";
const description =
  "O que é o Amazon S3, como funcionam buckets e objetos, classes de armazenamento, políticas de acesso e casos de uso práticos na nuvem.";
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
        id="ld-article-s3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      ></script>
      <script
        id="ld-breadcrumb-s3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      ></script>

      <ArticleLayout
        category="AWS"
        title={title}
        description={description}
        readingTime="10 min"
        date={datePublished}
      >
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">
            O que é o Amazon S3?
          </h2>

          <p>
            O <strong>Amazon S3 (Simple Storage Service)</strong> é o serviço de armazenamento
            de objetos da AWS. Ele foi projetado para guardar qualquer tipo de dado:
            imagens, vídeos, documentos, backups, logs, assets estáticos e muito mais.
          </p>

          <p>
            Em vez de pensar em discos e pastas, no S3 você trabalha com{" "}
            <strong>buckets</strong> (baldes) e <strong>objetos</strong>. É um dos serviços
            mais usados em qualquer arquitetura em nuvem.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Conceitos básicos: bucket, objeto e chave
          </h2>

          <p>Os três conceitos fundamentais são:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Bucket:</strong> é o “container” onde seus arquivos ficam
              armazenados. O nome do bucket é globalmente único.
            </li>
            <li>
              <strong>Objeto:</strong> é o arquivo em si (dados + metadados).
            </li>
            <li>
              <strong>Key (chave):</strong> é o caminho/nome daquele objeto dentro do bucket.
            </li>
          </ul>

          <p>
            Exemplo: em um bucket chamado <code>altacloud-assets</code>, você pode ter
            um objeto com key <code>imagens/logo.png</code>.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Durabilidade e disponibilidade
          </h2>

          <p>
            Um dos grandes diferenciais do S3 é a durabilidade projetada de{" "}
            <strong>11 noves</strong>: 99.999999999%. Isso significa que a chance de
            perder um objeto é extremamente baixa.
          </p>

          <p>
            Essa durabilidade é alcançada espalhando cópias dos dados por múltiplos
            dispositivos e, em muitos casos, múltiplas zonas de disponibilidade.
          </p>

          <p>
            A disponibilidade varia conforme a classe de armazenamento, mas o S3
            Standard já oferece SLA muito alto para a maioria dos casos de uso.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Classes de armazenamento do S3
          </h2>

          <p>
            O S3 oferece diferentes <strong>classes de armazenamento</strong>, que
            equilibram custo, performance e frequência de acesso:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>S3 Standard:</strong> acesso frequente, baixa latência, uso geral.
            </li>
            <li>
              <strong>S3 Standard-IA:</strong> acesso infrequente (dados que você lê pouco).
            </li>
            <li>
              <strong>S3 One Zone-IA:</strong> acesso infrequente em uma única zona.
            </li>
            <li>
              <strong>S3 Glacier / Glacier Deep Archive:</strong> arquivamento de longo prazo.
            </li>
          </ul>

          <p>
            Você pode combinar classes usando políticas de ciclo de vida (Lifecycle)
            para mover dados automaticamente conforme envelhecem.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Controle de acesso: IAM, bucket policy e ACL
          </h2>

          <p>
            O acesso ao S3 é controlado por uma combinação de:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Políticas IAM:</strong> definem o que um usuário/role pode fazer
              em buckets e objetos.
            </li>
            <li>
              <strong>Bucket policies:</strong> políticas anexadas diretamente ao bucket,
              controlando acesso em nível de recurso.
            </li>
            <li>
              <strong>ACLs (Access Control Lists):</strong> mecanismo mais antigo e granular de permissão.
            </li>
          </ul>

          <p>
            Em projetos modernos, a combinação mais comum é: políticas IAM +
            bucket policies, deixando ACLs apenas para cenários específicos.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Criptografia e segurança de dados
          </h2>

          <p>
            O S3 oferece múltiplas opções de <strong>criptografia</strong>:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>SSE-S3:</strong> a própria AWS gerencia as chaves;
            </li>
            <li>
              <strong>SSE-KMS:</strong> integração com o AWS KMS, permitindo
              controle mais fino de chaves;
            </li>
            <li>
              <strong>Criptografia no cliente:</strong> você cifra antes de enviar.
            </li>
          </ul>

          <p>
            Também é possível habilitar <strong>versionamento</strong> para manter
            múltiplas versões de um mesmo objeto e <strong>replicação</strong> para
            copiar dados entre buckets e regiões.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Casos de uso comuns do S3
          </h2>

          <p>Alguns exemplos clássicos de uso do S3:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Armazenar assets de aplicações web (imagens, vídeos, PDFs);</li>
            <li>Hospedar sites estáticos (HTML, CSS, JS);</li>
            <li>Backup e arquivamento de longa duração;</li>
            <li>Data lake para analytics e machine learning;</li>
            <li>Armazenar logs de aplicações, serviços e infraestrutura.</li>
          </ul>

          <p>
            O S3 é altamente integrado com outros serviços da AWS, o que o torna
            peça central em arquiteturas modernas.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Criando seu primeiro bucket S3
          </h2>

          <p>No console da AWS:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Acesse <strong>S3</strong> no menu de serviços;</li>
            <li>Clique em <strong>Create bucket</strong>;</li>
            <li>Escolha um nome único, ex: <code>altacloud-lab-seu-nome</code>;</li>
            <li>Selecione a região desejada;</li>
            <li>Defina se o bucket será público ou privado (por padrão, privado);</li>
            <li>Opcional: habilite versionamento e criptografia.</li>
          </ul>

          <p>
            Após criar, você pode fazer upload de arquivos diretamente pelo
            console, ou via AWS CLI/SDK.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Upload via AWS CLI (exemplo rápido)
          </h2>

          <p>
            Com a AWS CLI configurada, você pode enviar um arquivo local para o S3 assim:
          </p>

          <pre className="bg-slate-900 p-4 rounded text-slate-200 overflow-x-auto text-xs">
{`aws s3 cp ./minha-imagem.png s3://altacloud-lab-seu-nome/imagens/minha-imagem.png`}
          </pre>

          <p>
            Esse comando cria (se não existir) o caminho{" "}
            <code>imagens/minha-imagem.png</code> dentro do bucket.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Conectando S3 com o resto da arquitetura
          </h2>

          <p>
            Na prática, o S3 raramente trabalha sozinho. Alguns cenários comuns:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>EC2 lendo e gravando arquivos no S3;</li>
            <li>CloudFront distribuindo conteúdo do S3 com CDN global;</li>
            <li>Lambda processando arquivos enviados para um bucket;</li>
            <li>Serviços de analytics lendo dados de um data lake no S3.</li>
          </ul>

          <p>
            Por isso, entender IAM + S3 te coloca em um patamar muito mais forte
            para construir soluções reais na nuvem.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Próximos passos na trilha
          </h2>

          <p>
            Depois de dominar o básico de S3, você pode evoluir para:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Configurar sites estáticos completos no S3 + CloudFront;</li>
            <li>Criar pipelines de ingestão de dados usando S3 como data lake;</li>
            <li>Usar Lifecycle para otimizar custos automaticamente;</li>
            <li>Integrar S3 com Lambda para automação de processos.</li>
          </ul>

          <p>
            Com Fundamentos de Cloud, VPC, EC2, IAM e S3, você já construiu um
            alicerce sólido para qualquer jornada em Cloud Computing.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
