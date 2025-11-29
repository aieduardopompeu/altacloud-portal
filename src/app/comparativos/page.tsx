// src/app/comparativos/page.tsx
import Link from "next/link";

export default function ComparativosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Comparativos
          </p>
          <h1 className="mt-2 text-3xl font-semibold">
            Comparativos Cloud – Entenda antes de escolher
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Comparativos diretos e objetivos entre serviços, provedores e ferramentas de computação em nuvem.  
            Tudo explicado em português, sem enrolação, do jeito Alta Cloud.
          </p>
        </header>

        {/* GRID */}
        <section className="grid gap-6 sm:grid-cols-2">
          
          {/* CARD 1 */}
          <Link
            href="#"
            className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
          >
            <h2 className="text-lg font-semibold group-hover:text-sky-300">
              AWS vs Azure – Qual escolher?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Comparativo direto entre as duas maiores nuvens do mercado.  
              Preços, certificações, serviços e cenários recomendados.
            </p>
            <span className="mt-3 inline-block text-xs text-sky-400">
              Em breve →
            </span>
          </Link>

          {/* CARD 2 */}
          <Link
            href="#"
            className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
          >
            <h2 className="text-lg font-semibold group-hover:text-sky-300">
              EC2 vs Lambda – Quando usar cada um?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Entenda se seu projeto precisa de servidores tradicionais ou arquitetura serverless.
            </p>
            <span className="mt-3 inline-block text-xs text-sky-400">
              Em breve →
            </span>
          </Link>

          {/* CARD 3 */}
          <Link
            href="#"
            className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
          >
            <h2 className="text-lg font-semibold group-hover:text-sky-300">
              S3 vs Google Cloud Storage
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Armazenamento de objetos na prática: durabilidade, custos, classes e performance.
            </p>
            <span className="mt-3 inline-block text-xs text-sky-400">
              Em breve →
            </span>
          </Link>

          {/* CARD 4 */}
          <Link
            href="#"
            className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
          >
            <h2 className="text-lg font-semibold group-hover:text-sky-300">
              RDS vs DynamoDB
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              SQL x NoSQL: quando escolher banco relacional ou altamente escalável.
            </p>
            <span className="mt-3 inline-block text-xs text-sky-400">
              Em breve →
            </span>
          </Link>

        </section>

        {/* CTA */}
        <div className="mt-12 rounded-lg border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-300">
            Quer ver um comparativo específico aqui no portal?
          </p>
          <Link
            href="/contato"
            className="mt-3 inline-block rounded-md bg-sky-600 px-5 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            Sugerir tema
          </Link>
        </div>

      </div>
    </main>
  );
}
