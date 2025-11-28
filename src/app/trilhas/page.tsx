// src/app/trilhas/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trilhas | Alta Cloud",
  description: "Selecione uma trilha para iniciar seus estudos em computação em nuvem.",
};

export default function TrilhasPage() {
  const trilhas = [
    {
      slug: "fundamentos",
      titulo: "Fundamentos de Cloud",
      descricao:
        "Conceitos essenciais, modelos de serviço, regiões, disponibilidade e visão geral da AWS.",
      nivel: "Iniciante",
      badgeColor: "bg-sky-500/10 text-sky-300 ring-sky-500/30",
      thumbnail: "/thumbnails/fundamentos.jpg",
    },
    {
      slug: "iam",
      titulo: "IAM na Prática",
      descricao:
        "Usuários, grupos, permissões, políticas e segurança em ambientes AWS.",
      nivel: "Intermediário",
      badgeColor: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
      thumbnail: "/thumbnails/iam.jpg",
    },
    {
      slug: "s3",
      titulo: "S3 na Prática",
      descricao:
        "Buckets, objetos, versionamento, classes de armazenamento e políticas de acesso.",
      nivel: "Essencial",
      badgeColor: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
      thumbnail: "/thumbnails/s3.jpg",
    },
    {
      slug: "ec2",
      titulo: "EC2 na Prática",
      descricao:
        "Tipos de instância, sizing, grupos de segurança, key pairs e workloads na AWS.",
      nivel: "Intermediário",
      badgeColor: "bg-purple-500/10 text-purple-300 ring-purple-500/30",
      thumbnail: "/thumbnails/ec2.jpg",
    },
    {
      slug: "vpc",
      titulo: "VPC na Prática",
      descricao:
        "VPC, subnets, roteamento, NAT, IGW, NACLs e arquitetura de redes na AWS.",
      nivel: "Essencial",
      badgeColor: "bg-cyan-500/10 text-cyan-300 ring-cyan-500/30",
      thumbnail: "/thumbnails/vpc.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        
        {/* Cabeçalho da página */}
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Alta Cloud
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Trilhas de Aprendizado
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Siga a ordem recomendada ou comece por qualquer trilha. Tudo foi organizado
            para você aprender cloud computing com clareza e segurança.
          </p>
        </header>

        {/* Cards de trilhas */}
        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trilhas.map((trilha) => (
            <Link
              key={trilha.slug}
              href={`/trilhas/${trilha.slug}`}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 shadow-lg overflow-hidden transition hover:border-sky-500"
            >
              {/* Thumbnail */}
              <div className="w-full overflow-hidden border-b border-slate-800 bg-slate-900/70">
                <Image
                  src={trilha.thumbnail}
                  alt={trilha.titulo}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-contain transition group-hover:scale-[1.02]"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-4 space-y-3">
                <h2 className="text-lg font-semibold text-slate-50 group-hover:text-sky-300 transition">
                  {trilha.titulo}
                </h2>
                <p className="text-sm text-slate-300">{trilha.descricao}</p>

                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ring-1 ${trilha.badgeColor}`}
                >
                  {trilha.nivel}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
