import type { Metadata } from "next";
import { Section } from "../components/ui/Section";

export const metadata: Metadata = {
  title: "Certificações em Cloud · Alta Cloud",
  description:
    "Roadmaps e materiais para certificações AWS, Azure e Google Cloud.",
};

export default function Page() {
  return (
    <Section title="Certificações em Cloud">
      <p className="text-sm text-slate-300 max-w-2xl">
        Em breve você encontrará aqui conteúdos aprofundados sobre Certificações em Cloud no Alta Cloud.
      </p>
    </Section>
  );
}
