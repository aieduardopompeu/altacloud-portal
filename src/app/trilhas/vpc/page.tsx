// src/app/trilhas/vpc/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsBanner } from "../../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Módulo VPC na prática | Alta Cloud",
  description:
    "Módulo VPC na prática: redes, subnets, route tables, NAT, internet gateway e boas práticas de isolamento em cloud.",
};

export default function VPCPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-400">
          <Link
            href="/trilhas"
            className="transition-colors hover:text-slate-100"
          >
            Trilhas
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <Link
            href="/trilhas/fundamentos"
            className="transition-colors hover:text-slate-100"
          >
            Fundamentos de Cloud
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-100">VPC na prática</span>
        </nav>

        {/* Cabeçalho */}
        <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Trilha Alta Cloud · Módulo 5
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              VPC na prática
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Aqui você organiza a cabeça em torno de{" "}
              <strong className="font-semibold text-slate-100">
                Virtual Private Cloud (VPC)
              </strong>
              : blocos de IP, subnets públicas e privadas, roteamento, NAT,
              gateways e o desenho básico de uma rede segura em cloud.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                VPC · Redes em nuvem
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                Foco: AWS
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                Módulo de arquitetura
              </span>
            </div>
          </div>

          {/* Thumbnail VPC */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <Image
              src="/thumbnails/vpc.jpg"
              alt="Thumbnail do módulo VPC na prática"
              width={1200}
              height={675}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </header>

        {/* ADS – topo da trilha (track_top) */}
        <div className="mt-8">
          <AdsBanner position="track_top" />
        </div>

        {/* CTA */}
        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
                Desenhe uma VPC clara, simples e segura
              </h2>
              <p className="mt-1 text-sm text-slate-300 md:text-base">
                Em vez de decorar siglas, você vai entender a lógica da rede:
                como o tráfego entra, sai e circula dentro da sua VPC — e como
                isso impacta segurança, custo e operação no dia a dia.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="#conteudo"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Ver conteúdo do módulo
              </Link>
            </div>
          </div>
        </section>

        {/* ADS – meio da trilha (track_middle) */}
        <div className="mt-8">
          <AdsBanner position="track_middle" />
        </div>

        {/* Conteúdo do módulo */}
        <section id="conteudo" className="mt-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
              O que você vai ver neste módulo
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Estrutura pensada para conectar depois com diagramas, aulas e
              labs, sem virar terror de rede.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Bloco 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 1
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Fundamentos de VPC e blocos de IP
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que é uma VPC e por que ela existe</li>
                <li>• CIDR blocks: 10.0.0.0/16 sem neurose</li>
                <li>• Planejamento simples de endereçamento</li>
                <li>• Limites e boas práticas de desenho</li>
              </ul>
            </div>

            {/* Bloco 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 2
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Subnets públicas e privadas
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Dividindo a VPC em subnets</li>
                <li>• Quando algo é “público” ou “privado” de verdade</li>
                <li>• AZs (Availability Zones) na prática</li>
                <li>• Exemplo de layout simples para ambiente inicial</li>
              </ul>
            </div>

            {/* Bloco 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 3
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Roteamento, IGW e NAT
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Route tables: como o tráfego sabe para onde ir</li>
                <li>• Internet Gateway (IGW) e saída para a internet</li>
                <li>• NAT Gateway x NAT Instance</li>
                <li>
                  • Cenário clássico: app em subnet privada com acesso web
                </li>
              </ul>
            </div>

            {/* Bloco 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 4
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Segurança e boas práticas de VPC
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Security Groups x NACLs – sem drama</li>
                <li>• Separação de ambientes (dev, homolog, prod)</li>
                <li>• Logs e visibilidade básica de tráfego</li>
                <li>• Próximos passos: VPC Peering, Transit Gateway, etc.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADS – final da trilha (track_bottom) */}
        <div className="mt-10">
          <AdsBanner position="track_bottom" />
        </div>

        {/* Link de volta para a trilha */}
        <section className="mt-8">
          <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-50">
                Faz parte da Trilha Fundamentos de Cloud
              </p>
              <p className="text-sm text-slate-300">
                Volte para a trilha para navegar entre os módulos Fundamentos,
                IAM, S3, EC2 e VPC.
              </p>
            </div>
            <Link
              href="/trilhas/fundamentos"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-sky-300"
            >
              Voltar para a trilha
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
