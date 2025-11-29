"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const STORAGE_KEY = "altacloud.cookieConsent";

  const [isOpen, setIsOpen] = useState(false);
  const [level, setLevel] = useState<"essential" | "all" | "none">("essential");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setIsOpen(true);
      return;
    }

    const parsed = JSON.parse(saved) as { level?: "essential" | "all" | "none" };
    if (parsed?.level) {
      setLevel(parsed.level);
    }
  }, []);

  const savePreferences = (selected: "essential" | "all" | "none") => {
    const value = JSON.stringify({ level: selected });
    localStorage.setItem(STORAGE_KEY, value);
    setLevel(selected);
    setIsOpen(false);

    // Dispara evento global se quiser usar no futuro
    const event = new CustomEvent("altacloud:cookie-consent-change", {
      detail: { level: selected },
    });
    window.dispatchEvent(event);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-md bg-slate-800 px-4 py-2 text-xs text-slate-100 shadow hover:bg-slate-700"
      >
        Cookies
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 shadow-xl border border-slate-700 p-6">
        {/* TÍTULO */}
        <p className="text-sm text-slate-300 leading-relaxed">
          Usamos cookies para melhorar sua experiência no site e oferecer
          funcionalidades essenciais. Você pode aceitar todos, recusar ou
          ajustar suas preferências. Leia nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="text-sky-400 hover:text-sky-300"
          >
            Política de Privacidade
          </a>
          .
        </p>

        <h3 className="mt-5 mb-2 text-xs font-semibold uppercase text-slate-400">
          Escolha seu nível
        </h3>

        {/* OPÇÕES */}
        <div className="space-y-3">
          {/* Essenciais */}
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 p-3 hover:border-slate-500">
            <input
              type="radio"
              checked={level === "essential"}
              onChange={() => setLevel("essential")}
            />
            <div>
              <p className="text-sm text-slate-200">Somente essenciais</p>
              <p className="text-xs text-slate-400">
                Cookies necessários para o funcionamento básico do site.
              </p>
            </div>
          </label>

          {/* Todos */}
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 p-3 hover:border-slate-500">
            <input
              type="radio"
              checked={level === "all"}
              onChange={() => setLevel("all")}
            />
            <div>
              <p className="text-sm text-slate-200">Todos</p>
              <p className="text-xs text-slate-400">
                Habilita todos os tipos de cookies para melhorar a experiência.
              </p>
            </div>
          </label>

          {/* Recusar */}
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 p-3 hover:border-slate-500">
            <input
              type="radio"
              checked={level === "none"}
              onChange={() => setLevel("none")}
            />
            <div>
              <p className="text-sm text-slate-200">Recusar</p>
              <p className="text-xs text-slate-400">
                Apenas cookies essenciais permanecem ativos.
              </p>
            </div>
          </label>
        </div>

        {/* BOTÕES */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md border border-slate-600 px-4 py-2 text-xs text-slate-300 hover:bg-slate-800"
          >
            Cancelar
          </button>

          <button
            onClick={() => savePreferences(level)}
            className="rounded-md bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow hover:bg-sky-500"
          >
            Salvar preferências
          </button>

          <button
            onClick={() => savePreferences("all")}
            className="rounded-md bg-sky-700 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-sky-600"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
