import type { Metadata } from "next";
import { Section } from "../components/ui/Section";

export const metadata: Metadata = {
  title: "Política de Privacidade · Alta Cloud",
  description:
    "Política de privacidade e uso de dados do portal Alta Cloud.",
};

export default function Page() {
  return (
    <Section title="Política de Privacidade">
      <p className="text-sm text-slate-300 max-w-2xl">
        Em breve você encontrará aqui conteúdos aprofundados sobre Política de Privacidade no Alta Cloud.
      </p>
    </Section>
  );
}
