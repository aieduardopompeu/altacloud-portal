import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  className?: string;
}

export function Section({ children, title, eyebrow, className }: SectionProps) {
  return (
    <section className={clsx("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      <div className="mb-6 space-y-1">
        {eyebrow && (
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            {title}
          </h2>
        )}
      </div>
      {children}
    </section>
  );
}
