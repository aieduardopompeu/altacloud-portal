// src/app/trilhas/fundamentos/page.tsx
import type { Metadata } from "next";
import { AdsBanner } from "../../components/ads/AdsBanner";

export const metadata: Metadata = {
  title: "Trilha Fundamentos de Cloud | Alta Cloud",
  description:
    "Comece sua jornada em Cloud entendendo conceitos, modelos, serviços e boas práticas.",
};

const modules = [
  {
    title: "Visão geral de Cloud Computing",
    items: [
      "O que é Cloud e por que as empresas migram",
      "Capex vs Opex, escalabilidade e elasticidade",
      "Responsabilidade compartilhada",
    ],
  },
  {
    title: "Modelos de serviço e implantação",
    items: [
      "IaaS, PaaS, SaaS – diferenças práticas",
      "Nuvem pública, privada e híbrida",
      "Casos reais de uso",
    ],
  },
  {
    title: "Conceitos de contas e regiões",
    items: [
      "Regions, AZs e alta disponibilidade",
      "Latência, compliance e escolha de região",
      "Multi-account e organização",
    ],
  },
  {
    title: "Pilares de boa arquitetura",
    items: [
      "Segurança desde o primeiro dia",
      "Custo, performance e confiabilidade",
      "Operabilidade e otimização contínua",
    ],
  },
];

export default function FundamentosPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-12 pt-8">
      <h1 className="text-3xl font-bold text-slate-50">
        Trilha — Fundamentos de Cloud
      </h1>
      <p className="mt-3 text-sm text-slate-300">
        Esta trilha é o ponto de partida. A ideia é te dar vocabulário, visão
        de mercado e clareza pra entender tudo o que vem depois: IAM, S3, EC2,
        VPC e além.
      </p>

      {/* Anúncio discreto dentro da trilha (inarticle_altacloud_tutorial) */}
      <div className="my-8">
        <AdsBanner adSlot="7666231438" />
      </div>

      <div className="mt-6 space-y-5">
        {modules.map((mod) => (
          <section
            key={mod.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
          >
            <h2 className="text-base font-semibold text-slate-50">
              {mod.title}
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              {mod.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
