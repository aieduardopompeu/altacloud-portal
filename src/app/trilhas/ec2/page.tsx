// src/app/trilhas/ec2/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsBanner } from "../../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Módulo EC2 na prática | Alta Cloud",
  description:
    "Módulo EC2 na prática: instâncias, tipos, sizing, grupos de segurança e boas práticas para rodar workloads na AWS.",
};

export default function EC2Page() {
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
          <span className="text-slate-100">EC2 na prática</span>
        </nav>

        {/* Cabeçalho */}
        <header className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Trilha Alta Cloud · Módulo 4
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              EC2 na prática
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Neste módulo você entra de cabeça em{" "}
              <strong className="font-semibold text-slate-100">
                Amazon EC2
              </strong>
              : tipos de instância, sizing, grupos de segurança, key pairs e o
              básico necessário para subir workloads reais com segurança e
              controle de custo.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                EC2 · Máquinas virtuais
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                Foco: AWS
              </span>
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-500/30">
                Módulo prático
              </span>
            </div>
          </div>

          {/* Thumbnail EC2 */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <Image
              src="/thumbnails/ec2.jpg"
              alt="Thumbnail do módulo EC2 na prática"
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
                Aprenda a subir e gerenciar instâncias EC2 com segurança
              </h2>
              <p className="mt-1 text-sm text-slate-300 md:text-base">
                Entender EC2 é obrigatório para praticamente qualquer projeto em
                nuvem. Aqui você vai organizar os conceitos sem pressa, do zero
                até os primeiros cenários reais.
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
              Estrutura pensada para você conectar depois a aulas em vídeo,
              artigos e laboratórios práticos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Bloco 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 1
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Conceitos de EC2 e tipos de instância
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• O que é EC2 e quando usar</li>
                <li>• Tipos de instância (t, m, c, etc.) e usos comuns</li>
                <li>• vCPU, memória, rede e disco – visão prática</li>
                <li>• Noções rápidas de sizing sem complicação</li>
              </ul>
            </div>

            {/* Bloco 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 2
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Grupos de segurança e acesso
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Security Groups na prática</li>
                <li>• Portas, IPs e boas práticas de exposição</li>
                <li>• Chaves SSH (key pairs) e acesso seguro</li>
                <li>• Erros comuns que travam o acesso à instância</li>
              </ul>
            </div>

            {/* Bloco 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 3
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Storage, snapshots e imagens
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• EBS volumes: tipos, tamanho e performance</li>
                <li>• Snapshots para backup e recuperação</li>
                <li>• AMIs (imagens) e reuso de configurações</li>
                <li>• Cuidados básicos com custo de storage</li>
              </ul>
            </div>

            {/* Bloco 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Parte 4
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-50">
                Boas práticas e próximos passos
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>• Evitando desperdício de recursos</li>
                <li>• Monitoramento básico e alerts</li>
                <li>• Quando considerar autoscaling e load balancer</li>
                <li>• Como EC2 se conecta com o restante da arquitetura</li>
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
                IAM, S3 e EC2.
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
