// src/app/comparativos/devops-vs-sre/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps vs SRE – Diferenças completas, papéis e quando escolher | Alta Cloud",
  description:
    "Guia definitivo comparando DevOps e SRE. Entenda diferenças, papéis, ferramentas, salários, responsabilidades e qual caminho seguir na carreira em Cloud Computing.",
  openGraph: {
    title: "DevOps vs SRE – Guia Definitivo",
    description:
      "Entenda diferenças entre DevOps e SRE com o guia mais completo em português. Comparativo, tabelas, ferramentas, salários e trilhas de estudo.",
    url: "https://altacloud.com.br/comparativos/devops-vs-sre",
    images: [
      {
        url: "/og/devops-vs-sre.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function DevOpsVsSREPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        {/* BREADCRUMB */}
        <nav className="mb-8 text-xs text-slate-400">
          <a href="/" className="hover:text-sky-400">Início</a> /
          <a href="/comparativos" className="ml-1 hover:text-sky-400">Comparativos</a> /
          <span className="ml-1 text-sky-300">DevOps vs SRE</span>
        </nav>

        {/* HEADER */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Comparativo
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            DevOps vs SRE: Guia Definitivo (2025)
          </h1>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            DevOps e SRE são duas das carreiras mais importantes e bem pagas da área de tecnologia.
            Embora pareçam semelhantes, possuem objetivos diferentes: DevOps aumenta a velocidade
            de entrega, enquanto SRE aumenta a confiabilidade. Este guia explica tudo de forma
            simples, profunda e prática — no estilo Alta Cloud.
          </p>
        </header>

        {/* INTRO */}
        <section className="mb-12 space-y-6 text-sm leading-relaxed text-slate-300">
          <h2 className="text-xl font-semibold text-sky-300">1. Introdução</h2>
          <p>
            DevOps e SRE trabalham com automação, pipelines, nuvem e sistemas distribuídos.
            Porém, <strong className="text-sky-300">DevOps é sobre velocidade</strong> e
            <strong className="text-sky-300"> SRE é sobre confiabilidade</strong>.
          </p>
          <p>
            Se você quer entender qual caminho seguir — ou como essas áreas se complementam —
            esta é a melhor explicação que você vai encontrar em português.
          </p>
        </section>

        {/* DEVOPS */}
        <section className="mb-12 text-sm leading-relaxed text-slate-300">
          <h2 className="text-xl font-semibold text-sky-300">2. O que é DevOps?</h2>

          <p className="mt-4">
            DevOps é uma filosofia + conjunto de práticas que aproxima os times de desenvolvimento
            (Dev) e operações (Ops), com foco em:
          </p>

          <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-400">
            <li>Automação de processos</li>
            <li>Entrega contínua</li>
            <li>Pipelines CI/CD</li>
            <li>Infraestrutura como código</li>
            <li>Containers e orquestração</li>
            <li>Integração entre equipes</li>
          </ul>

          <p className="mt-4">
            DevOps é sobre <strong className="text-sky-300">acelerar entregas</strong>,
            reduzir retrabalho e manter o fluxo:
          </p>
          <p className="font-mono text-slate-400 mt-1">código → build → teste → deploy → usuário</p>
        </section>

        {/* SRE */}
        <section className="mb-12 text-sm leading-relaxed text-slate-300">
          <h2 className="text-xl font-semibold text-sky-300">3. O que é SRE?</h2>

          <p className="mt-4">
            SRE (Site Reliability Engineering) nasceu no Google e foi criado para garantir que
            sistemas gigantescos permaneçam:
          </p>

          <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-400">
            <li>Disponíveis</li>
            <li>Escaláveis</li>
            <li>Confiáveis</li>
            <li>Monitoráveis</li>
            <li>Resilientes</li>
          </ul>

          <p className="mt-4">
            SRE combina engenharia de software com operações avançadas. É uma área mais profunda,
            com foco em métricas, observabilidade e performance.
          </p>
        </section>

        {/* TABELA */}
        <section className="mb-14 text-sm leading-relaxed">
          <h2 className="text-xl font-semibold text-sky-300">
            4. DevOps vs SRE – Tabela comparativa
          </h2>

          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-800 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="px-4 py-3">Critério</th>
                  <th className="px-4 py-3">DevOps</th>
                  <th className="px-4 py-3">SRE</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                {[
                  ["Origem", "Movimento cultural", "Criado pelo Google"],
                  ["Objetivo", "Velocidade de entrega", "Confiabilidade e estabilidade"],
                  ["Foco", "CI/CD e automação", "Reliability, SLIs e SLOs"],
                  ["Entrega principal", "Pipelines prontos", "Sistemas que não quebram"],
                  ["Ferramentas", "Docker, Terraform, GitHub Actions", "Prometheus, Grafana, SRE Workbook"],
                  ["Perfil", "Automação e cloud", "Engenharia e análise profunda"],
                  ["Salários BR", "R$ 7k–16k", "R$ 12k–28k"],
                ].map(([a, b, c], i) => (
                  <tr key={i} className="border-t border-slate-800">
                    <td className="px-4 py-3">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DIFERENÇAS */}
        <section className="mb-14 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-sky-300">
            5. Diferenças fundamentais (explicadas simples)
          </h2>

          <h3 className="mt-6 text-slate-200 font-medium">5.1 DevOps → velocidade</h3>
          <p className="mt-2">
            DevOps existe para acelerar o fluxo de entrega. É sobre automação.
          </p>

          <h3 className="mt-6 text-slate-200 font-medium">5.2 SRE → confiabilidade</h3>
          <p className="mt-2">
            SRE existe para evitar quedas, reduzir incidentes e garantir resiliência.
          </p>

          <h3 className="mt-6 text-slate-200 font-medium">5.3 Como se complementam</h3>
          <p className="mt-2">
            DevOps constrói a esteira (pipelines).  
            SRE garante que ela não exploda em produção.
          </p>
        </section>

        {/* CASES */}
        <section className="mb-14 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-sky-300">6. DevOps vs SRE na prática</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium text-slate-200">Caso 1: Deploy frequente</h3>
              <p className="text-slate-400 mt-1">
                DevOps acelera o deploy.  
                SRE monitora e garante estabilidade pós-deploy.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200">Caso 2: Sistema caiu no pico</h3>
              <p className="text-slate-400 mt-1">
                DevOps faz rollback.  
                SRE descobre causa-raiz e evita repetição.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200">Caso 3: Escalabilidade real</h3>
              <p className="text-slate-400 mt-1">
                DevOps cria IaC (Terraform).  
                SRE define SLIs e ajusta capacidade.
              </p>
            </div>
          </div>
        </section>

        {/* SALÁRIOS */}
        <section className="mb-14 text-sm leading-relaxed text-slate-300">
          <h2 className="text-xl font-semibold text-sky-300">
            7. Salários DevOps e SRE no Brasil (2025)
          </h2>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-medium">DevOps Engineer</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-400 text-sm">
                <li>Júnior: R$ 5–8 mil</li>
                <li>Pleno: R$ 9–14 mil</li>
                <li>Sênior: R$ 15–20 mil</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-medium">SRE Engineer</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-400 text-sm">
                <li>Júnior: R$ 7–12 mil</li>
                <li>Pleno: R$ 13–20 mil</li>
                <li>Sênior: R$ 22–30 mil</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DECISION */}
        <section className="mb-14 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-sky-300">
            8. Qual caminho seguir?
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium text-slate-200">Você deve seguir DevOps se:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-400">
                <li>Gosta de automação</li>
                <li>Curte pipelines</li>
                <li>Quer entrar rápido no mercado</li>
                <li>Gosta de velocidade e entrega</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-slate-200">Você deve seguir SRE se:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-400">
                <li>Gosta de engenharia profunda</li>
                <li>Curte logs, métricas e sistemas distribuídos</li>
                <li>Quer trabalhar com alta escala</li>
                <li>Gosta de investigação e performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="mt-14 rounded-lg border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-300">
            Quer uma trilha completa de DevOps e SRE aqui no portal?
          </p>
          <a
            href="/contato"
            className="mt-3 inline-block rounded-md bg-sky-600 px-5 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            Solicitar trilha →
          </a>
        </div>
      </div>
    </main>
  );
}
