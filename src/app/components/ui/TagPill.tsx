import { ReactNode } from "react";

export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-medium text-sky-200">
      {children}
    </span>
  );
}
