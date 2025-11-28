import type { Metadata } from "next";
import Script from "next/script";
import { ArticleLayout } from "../../components/layout/ArticleLayout";
import { siteConfig, buildCanonical } from "../../../lib/seo";

const slug = "como-criar-vpc-na-aws";
const title = "Como criar VPC na AWS";
const description =
  "Guia prático para criar sua primeira VPC na AWS com sub-redes públicas e privadas.";
const datePublished = "2025-11-26";
const url = buildCanonical("/artigos/como-criar-vpc-na-aws");

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
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* JSON-LD Breadcrumb */}
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <ArticleLayout
        category="AWS"
        title={title}
        description={description}
        readingTime="8 min"
        date={datePublished} // <<<<<< AQUI RESOLVE O ERRO
      >
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">O que é uma VPC?</h2>

          <p>
            A <strong>VPC (Virtual Private Cloud)</strong> é o ambiente privado dentro da
            AWS onde ficam suas aplicações, servidores, bancos de dados,
            containers e serviços. É como uma “cidade virtual” totalmente isolada
            e segura.
          </p>

          <p>
            Dentro dela você cria zonas, ruas, regras de entrada e saída,
            sub-redes e estruturas completas de rede. Toda infraestrutura moderna
            em AWS começa com uma VPC bem configurada.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Estrutura recomendada para iniciantes
          </h2>

          <p>A arquitetura mínima recomendada para estudo e pequenos ambientes é:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>1 VPC (rede principal)</li>
            <li>2 subnets públicas</li>
            <li>2 subnets privadas</li>
            <li>1 Internet Gateway</li>
            <li>1 NAT Gateway (opcional, mas ideal para prática real)</li>
            <li>2 Route Tables (pública e privada)</li>
          </ul>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Passo 1 — Criar a VPC
          </h2>

          <p>
            No console da AWS, acesse: <strong>VPC → Create VPC</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Name:</strong> minha-primeira-vpc
            </li>
            <li>
              <strong>CIDR IPv4:</strong> 10.0.0.0/16
            </li>
          </ul>

          <p>
            Essa faixa de IP permite criar dezenas de sub-redes e milhares de
            endereços, perfeita para estudos e ambientes reais.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Passo 2 — Criar as subnets
          </h2>

          <p>Criamos quatro sub-redes distribuídas em duas zonas de disponibilidade:</p>

          <h3 className="text-lg font-semibold text-white">Subnets públicas</h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>10.0.1.0/24 — Public-a</li>
            <li>10.0.2.0/24 — Public-b</li>
          </ul>

          <h3 className="text-lg font-semibold text-white">Subnets privadas</h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>10.0.10.0/24 — Private-a</li>
            <li>10.0.11.0/24 — Private-b</li>
          </ul>

          <p>
            Subnets públicas podem acessar a internet. Subnets privadas são ideais
            para EC2, RDS, ECS e outros serviços que não devem ficar expostos.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Passo 3 — Criar o Internet Gateway
          </h2>

          <p>
            Vá em <strong>Internet Gateway → Create</strong> e depois:
            <strong> Attach to VPC → minha-primeira-vpc</strong>.
          </p>

          <p>
            Ele permite que as subnets públicas tenham saída para a internet.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Passo 4 — Criar a Route Table pública
          </h2>

          <p>
            Acesse <strong>Route Tables → Create Route Table</strong>.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Name: public-rt</li>
            <li>VPC: minha-primeira-vpc</li>
          </ul>

          <p>
            Depois, em <strong>Edit routes → Add route</strong>:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Destination: 0.0.0.0/0</li>
            <li>Target: Internet Gateway</li>
          </ul>

          <p>
            Agora associe essa Route Table às duas subnets públicas criadas.
          </p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Passo 5 — Criar Route Table privada (com NAT Gateway)
          </h2>

          <p>
            Para que recursos em subnets privadas tenham acesso à internet para
            updates, downloads e repositórios (sem ficarem expostos), crie:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Um NAT Gateway em uma subnet pública</li>
            <li>Uma Route Table privada apontando para o NAT</li>
          </ul>

          <p>Essa é a arquitetura mais comum em ambientes reais.</p>

          <hr className="border-slate-700" />

          <h2 className="text-xl font-semibold text-white">
            Arquitetura final
          </h2>

          <pre className="bg-slate-900 p-4 rounded text-slate-200 overflow-x-auto text-sm">
VPC: 10.0.0.0/16
│
├── Subnet Pública A:   10.0.1.0/24
├── Subnet Pública B:   10.0.2.0/24
│
├── Subnet Privada A:   10.0.10.0/24
└── Subnet Privada B:   10.0.11.0/24

Internet Gateway → Subnets Públicas  
NAT Gateway → Subnets Privadas
          </pre>

          <h2 className="text-xl font-semibold text-white">
            Próximos passos
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Criar EC2 em subnet pública</li>
            <li>Criar EC2 em subnet privada</li>
            <li>Testar acesso via NAT Gateway</li>
            <li>Adicionar Security Groups e NACLs</li>
            <li>Criar RDS dentro da subnet privada</li>
            <li>Integrar com Load Balancer (ALB)</li>
          </ul>

          <p>
            Dominando VPC, você domina a base de toda infraestrutura em AWS.
            Esse é um dos blocos fundamentais para qualquer jornada em Cloud.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
