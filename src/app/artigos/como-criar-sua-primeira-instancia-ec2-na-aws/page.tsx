import type { Metadata } from "next";
import { ArticleLayout } from "../../components/layout/ArticleLayout";
import { siteConfig, buildCanonical } from "../../../lib/seo";

const slug = "guia-cloud-computing-para-iniciantes";
const title = "Guia de Cloud Computing para iniciantes";
const description =
  "Entenda, de forma simples e prática, o que é Cloud Computing, seus principais modelos (IaaS, PaaS, SaaS), provedores e conceitos essenciais para começar na nuvem.";
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
      {/* JSON-LD Article */}
      <script
        id="ld-article-cloud-beginner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}></script>

      {/* JSON-LD Breadcrumb */}
      <script
        id="ld-breadcrumb-cloud-beginner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}></script>

      <ArticleLayout
        category="Fundamentos"
        title={title}
        description={description}
        readingTime="12 min"
        date={datePublished}
      >
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">
            O que é Cloud Computing?
          </h2>

          <p>
            <strong>Cloud Computing</strong> é o modelo de entregar recursos de TI
            — como servidores, banco de dados, redes, armazenamento, segurança,
            análise de dados e muito mais — pela internet, sob demanda e com
            pagamento conforme o uso.
          </p>

          <p>
            Em vez de comprar e manter servidores físicos no seu escritório ou
            datacenter, você “aluga” infraestrutura em provedores como{" "}
            <strong>AWS, Azure e Google Cloud</strong>, pagando apenas pelo que
            realmente consome.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Por que a nuvem se tornou o padrão?
          </h2>

          <p>Alguns motivos explicam por que Cloud deixou de ser tendência e virou padrão:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Escalabilidade:</strong> você aumenta ou reduz recursos em minutos, sem comprar hardware.
            </li>
            <li>
              <strong>Pagamento sob demanda:</strong> paga só pelo que usa, em vez de grandes investimentos iniciais.
            </li>
            <li>
              <strong>Velocidade:</strong> criar ambientes em minutos, e não em semanas ou meses.
            </li>
            <li>
              <strong>Confiabilidade:</strong> datacenters distribuídos, redundância e alta disponibilidade.
            </li>
            <li>
              <strong>Inovação:</strong> acesso fácil a serviços de IA, analytics, serverless e muito mais.
            </li>
          </ul>

          <p>
            Em outras palavras: Cloud não é só “computador de outra pessoa”.
            É uma plataforma completa para construir produtos modernos mais rápido,
            com menos atrito e muito mais flexibilidade.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Os principais modelos: IaaS, PaaS e SaaS
          </h2>

          <p>
            Quando falamos em Cloud Computing, normalmente falamos de três grandes modelos:
          </p>

          <h3 className="text-lg font-semibold text-white mt-4">IaaS — Infrastructure as a Service</h3>
          <p>
            É o nível mais básico. O provedor oferece infraestrutura:
            servidores, redes, discos, firewalls virtuais, VPN, balanceadores etc.
          </p>
          <p>Exemplos:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>AWS: EC2, VPC, EBS, ELB</li>
            <li>Azure: Virtual Machines, Virtual Network</li>
            <li>GCP: Compute Engine, VPC</li>
          </ul>
          <p>
            Você controla sistema operacional, aplicações, bibliotecas e configurações
            — mas não se preocupa com o hardware físico.
          </p>

          <h3 className="text-lg font-semibold text-white mt-4">PaaS — Platform as a Service</h3>
          <p>
            Aqui o foco é plataforma. Em vez de gerenciar servidores, você coloca sua
            aplicação em um ambiente já preparado e a plataforma cuida de scaling,
            updates e parte da gestão.
          </p>
          <p>Exemplos:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>AWS: Elastic Beanstalk, App Runner</li>
            <li>Azure: App Service</li>
            <li>GCP: App Engine</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-4">SaaS — Software as a Service</h3>
          <p>
            Nesse modelo, você não gerencia infraestrutura nem plataforma — apenas usa o software pronto.
          </p>
          <p>Exemplos:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Gmail, Office 365, Salesforce</li>
            <li>Plataformas de CRM, ERP e colaboração</li>
          </ul>

          <p>
            Como profissional de Cloud, você geralmente atua mais forte em IaaS e PaaS,
            mas é importante entender todo o contexto.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Principais provedores de nuvem
          </h2>

          <p>
            Hoje o mercado é dominado por três grandes players globais:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>AWS (Amazon Web Services):</strong> líder de mercado, enorme catálogo de serviços,
              muita documentação e comunidade.
            </li>
            <li>
              <strong>Microsoft Azure:</strong> forte integração com o ecossistema Microsoft
              (Windows Server, Active Directory, Office 365).
            </li>
            <li>
              <strong>Google Cloud Platform (GCP):</strong> muito forte em dados, analytics e machine learning.
            </li>
          </ul>

          <p>
            Começar por um deles e depois expandir para os outros é uma estratégia muito comum.
            No Alta Cloud, a trilha começa forte em AWS, mas sempre conectando com conceitos que
            valem para qualquer provedor.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Conceitos essenciais para quem está começando
          </h2>

          <p>Alguns conceitos aparecem o tempo todo em Cloud:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Região:</strong> localização física onde seus recursos rodam
              (ex: São Paulo, Virgínia, Irlanda).
            </li>
            <li>
              <strong>Zona de disponibilidade (AZ):</strong> datacenters dentro de uma região,
              usados para alta disponibilidade.
            </li>
            <li>
              <strong>VPC / Rede virtual:</strong> sua rede isolada dentro da nuvem.
            </li>
            <li>
              <strong>Instância:</strong> servidor virtual em execução.
            </li>
            <li>
              <strong>Storage:</strong> onde você guarda dados (bloco, arquivo, objeto).
            </li>
            <li>
              <strong>Banco gerenciado:</strong> banco de dados que o provedor administra para você.
            </li>
          </ul>

          <p>
            Dominar esses termos deixa toda documentação e curso muito mais fácil de entender.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Como a cobrança funciona na nuvem?
          </h2>

          <p>
            Um dos pontos mais importantes (e sensíveis) em Cloud é a parte de custos.
          </p>

          <p>De forma geral, você paga por:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Compute:</strong> tempo de uso das instâncias/serviços de processamento.
            </li>
            <li>
              <strong>Storage:</strong> GB armazenados e tipo de armazenamento.
            </li>
            <li>
              <strong>Tráfego de rede:</strong> principalmente saída (egress) para a internet.
            </li>
            <li>
              <strong>Serviços gerenciados:</strong> banco de dados, filas, mensageria, analytics, etc.
            </li>
          </ul>

          <p>
            A boa notícia é que os provedores oferecem camadas gratuitas (Free Tier)
            e ferramentas de estimativa de custo, o que permite aprender sem surpresas.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Por onde começar na prática?
          </h2>

          <p>
            Se você é iniciante total, uma sequência prática e inteligente pode ser:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Criar sua conta em um provedor (como a AWS);</li>
            <li>Configurar autenticação e segurança básica (IAM);</li>
            <li>Entender regiões, zonas e VPC;</li>
            <li>Subir sua primeira instância (EC2);</li>
            <li>Armazenar arquivos em um bucket (S3);</li>
            <li>Explorar um banco gerenciado (RDS ou equivalente).</li>
          </ul>

          <p>
            Cada um desses passos constrói uma base que você usa depois em cenários
            mais avançados: microsserviços, containers, serverless, automação com Terraform
            e muito mais.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Como o Alta Cloud pode te ajudar nessa jornada
          </h2>

          <p>
            O objetivo do <strong>Alta Cloud</strong> é justamente ser um hub em português,
            direto ao ponto, com guias práticos, explicações claras e exemplos aplicáveis
            no dia a dia.
          </p>

          <p>
            Em vez de ficar perdido entre mil abas, você segue uma trilha estruturada:
            dos fundamentos às arquiteturas profissionais.
          </p>

          <p>
            A partir deste guia, você pode seguir para os próximos artigos da trilha:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Como criar sua primeira VPC na AWS;</li>
            <li>Como criar sua primeira instância EC2;</li>
            <li>Introdução a armazenamento na nuvem (S3);</li>
            <li>Fundamentos de IAM (identidade e acesso).</li>
          </ul>

          <p>
            Cloud não é só tecnologia — é uma mudança de mentalidade.
            E você já deu o primeiro passo.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
