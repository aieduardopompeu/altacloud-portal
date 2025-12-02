// src/app/trilhas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trilhas de Aprendizado em Cloud | Alta Cloud",
  description:
    "Trilhas de aprendizado da Alta Cloud: Fundamentos, IAM, S3, EC2, VPC e DevOps. Caminhos organizados para aprender cloud computing com clareza e segurança.",
};

export default function TrilhasPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        {/* Header da página */}
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Alta Cloud
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Trilhas de Aprendizado
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Siga a ordem recomendada ou comece por qualquer trilha. Tudo foi
            organizado para você aprender cloud computing com clareza e
            segurança.
          </p>
        </header>

        {/* Grid de trilhas */}
        <section>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Fundamentos de Cloud */}
            <Link
              href="/trilhas/fundamentos"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/fundamentos-de-cloud.jpg"
                  alt="Fundamentos de Cloud"
                  width={800}
                  height={450}
                  className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  Fundamentos de Cloud
                </h2>
                <p className="text-sm text-slate-300">
                  Conceitos essenciais, modelos de serviço, regiões,
                  disponibilidade e visão geral da AWS.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                  Iniciante
                </span>
              </div>
            </Link>

            {/* IAM na Prática */}
            <Link
              href="/trilhas/iam"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/iam.jpg"
                  alt="IAM na Prática"
                  width={800}
                  height={450}
                  className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  IAM na Prática
                </h2>
                <p className="text-sm text-slate-300">
                  Usuários, grupos, permissões, políticas e segurança em
                  ambientes AWS.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                  Intermediário
                </span>
              </div>
            </Link>

            {/* S3 na Prática */}
            <Link
              href="/trilhas/s3"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/s3.jpg"
                  alt="S3 na Prática"
                  width={800}
                  height={450}
                  className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  S3 na Prática
                </h2>
                <p className="text-sm text-slate-300">
                  Buckets, objetos, versionamento, classes de armazenamento e
                  políticas de acesso.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-500/30">
                  Essencial
                </span>
              </div>
            </Link>

            {/* EC2 na Prática */}
            <Link
              href="/trilhas/ec2"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/ec2.jpg"
                  alt="EC2 na Prática"
                  width={800}
                  height={450}
                  className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  EC2 na Prática
                </h2>
                <p className="text-sm text-slate-300">
                  Tipos de instância, sizing, grupos de segurança, key pairs e
                  workloads na AWS.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                  Intermediário
                </span>
              </div>
            </Link>

            {/* VPC na Prática */}
            <Link
              href="/trilhas/vpc"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/vpc.jpg"
                  alt="VPC na Prática"
                  width={800}
                  height={450}
                  className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  VPC na Prática
                </h2>
                <p className="text-sm text-slate-300">
                  VPC, subnets, roteamento, NAT, IGW, NACLs e arquitetura de
                  redes na AWS.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
                  Essencial
                </span>
              </div>
            </Link>

            {/* DevOps */}
            <Link
              href="/trilhas/devops"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:border-sky-500"
            >
              <div className="w-full overflow-hidden border-b border-slate-800">
                <Image
                  src="/thumbnails/devops.jpg"
                  alt="Trilha DevOps"
                  width={800}
                  height={450}
                  className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-300">
                  Trilha DevOps
                </h2>
                <p className="text-sm text-slate-300">
                  Fundamentos de DevOps, CI/CD, containers, IaC e
                  observabilidade conectando desenvolvimento e operações.
                </p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-500/30">
                  DevOps
                </span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
