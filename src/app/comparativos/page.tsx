import type { Metadata } from "next";
import { Section } from "../components/ui/Section";

export const metadata: Metadata = {
  title: "Comparativos de provedores · Alta Cloud",
  description:
    "Comparativos entre AWS, Azure, Google Cloud e outros provedores de nuvem.",
};

export default function Page() {
  return (
    <Section title="Comparativos de Cloud">
      <p className="text-sm text-slate-300 max-w-2xl">
        Em breve você encontrará aqui conteúdos aprofundados sobre Comparativos de Cloud no Alta Cloud.
      </p>
    </Section>
  );
}
