import Link from "next/link";
import { Section } from "./components/ui/Section";

export default function NotFound() {
  return (
    <Section className="py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-50">404</h1>
      <p className="mt-2 text-slate-300">Página não encontrada.</p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-sky-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg hover:bg-sky-400"
      >
        Voltar ao início
      </Link>
    </Section>
  );
}
