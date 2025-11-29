// src/app/certificacoes/page.tsx
export default function CertificacoesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Certificações
          </p>
          <h1 className="mt-2 text-3xl font-semibold">
            Certificações Cloud – O caminho para sua carreira
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Conheça as principais certificações em Cloud Computing, como elas funcionam,  
            para quem são recomendadas e como começar seus estudos.
          </p>
        </header>

        <section className="space-y-10">

          {/* AWS */}
          <div>
            <h2 className="text-xl font-semibold text-sky-300">AWS</h2>
            <div className="mt-4 space-y-4">
              
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">AWS Cloud Practitioner</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Certificação introdutória da AWS. Ideal para quem está
                  começando na nuvem e quer entender fundamentos.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">AWS Solutions Architect – Associate</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Uma das mais procuradas. Foca em arquitetura, boas práticas e
                  serviços essenciais da AWS.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">AWS Developer – Associate</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Para quem desenvolve aplicações na nuvem com foco em Lambda,
                  API Gateway, S3, DynamoDB e CI/CD.
                </p>
              </div>
            </div>
          </div>

          {/* AZURE */}
          <div>
            <h2 className="text-xl font-semibold text-sky-300">Microsoft Azure</h2>
            <div className="mt-4 space-y-4">
              
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">AZ-900 – Azure Fundamentals</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Certificação básica da Microsoft. Perfeita para quem está
                  começando no Azure.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">AZ-104 – Azure Administrator</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Foco em administração, gerenciamento de recursos, networking
                  e segurança dentro do Azure.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">AZ-305 – Azure Solutions Architect</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Nível avançado. Indicada para quem quer projetar soluções em
                  ambientes híbridos ou cloud-only.
                </p>
              </div>
            </div>
          </div>

          {/* GOOGLE CLOUD */}
          <div>
            <h2 className="text-xl font-semibold text-sky-300">Google Cloud</h2>
            <div className="mt-4 space-y-4">
              
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">Cloud Digital Leader</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Introdução ao ecossistema Google Cloud.  
                  Boa para entender cloud em nível estratégico.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">Associate Cloud Engineer</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Profissionalizante. Ensina implantação, monitoramento e
                  administração de ambientes no GCP.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-medium">Professional Cloud Architect</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Certificação avançada e muito valorizada no mercado.  
                  Indica domínio profundo de soluções Google Cloud.
                </p>
              </div>

            </div>
          </div>

        </section>

        {/* CTA */}
        <div className="mt-14 rounded-lg border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-300">
            Quer um guia de estudos completo para alguma dessas certificações?
          </p>
          <a
            href="/contato"
            className="mt-3 inline-block rounded-md bg-sky-600 px-5 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            Solicitar guia
          </a>
        </div>

      </div>
    </main>
  );
}
