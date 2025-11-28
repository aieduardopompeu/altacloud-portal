"use client";

import { useEffect, useState } from "react";

type ConsentLevel = "essential" | "all" | "none";

const STORAGE_KEY = "altacloud.cookieConsent";

interface CookieConsentValue {
  level: ConsentLevel;
  updatedAt: string;
}

function saveConsent(level: ConsentLevel) {
  if (typeof window === "undefined") return;

  const value: CookieConsentValue = {
    level,
    updatedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar consentimento de cookies:", error);
  }

  // Expor para outros scripts (GA4 / AdSense etc.)
  try {
    (window as any).ALTACLOUD_COOKIE_CONSENT_LEVEL = level;
    const event = new CustomEvent("altacloud:cookie-consent-change", {
      detail: { level },
    });
    window.dispatchEvent(event);
  } catch {
    // ignora se der algo errado
  }
}

function getStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentValue;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<ConsentLevel>("essential");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = getStoredConsent();
    if (!stored) {
      // Ainda não escolheu → mostra banner
      setIsOpen(true);
      setSelectedLevel("essential");
    } else {
      // Já tem escolha → não mostra
      setIsOpen(false);
      (window as any).ALTACLOUD_COOKIE_CONSENT_LEVEL = stored.level;
    }

    // Função global para reabrir o banner (usada no footer)
    const openBanner = () => {
      setIsOpen(true);
    };
    (window as any).ALTACLOUD_OPEN_COOKIE_BANNER = openBanner;

    return () => {
      if (
        (window as any).ALTACLOUD_OPEN_COOKIE_BANNER === openBanner
      ) {
        delete (window as any).ALTACLOUD_OPEN_COOKIE_BANNER;
      }
    };
  }, []);

  if (!isOpen) return null;

  function handleAcceptAll() {
    saveConsent("all");
    setIsOpen(false);
  }

  function handleRejectAll() {
    saveConsent("none");
    setIsOpen(false);
  }

  function handleSavePreferences() {
    saveConsent(selectedLevel);
    setIsOpen(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
        {/* Top bar: texto + botões rápidos */}
        <div className="flex flex-col gap-4 border-b border-slate-800 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-5">
          <div className="text-xs text-slate-100 sm:text-sm">
            <p>
              Usamos cookies para melhorar sua experiência, medir audiência
              (GA4) e exibir anúncios (AdSense). Você pode aceitar, recusar ou
              definir preferências. Leia nossa{" "}
              <a
                href="/politica-de-privacidade"
                className="font-semibold text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-2 sm:flex-col sm:items-end">
            <button
              type="button"
              onClick={handleRejectAll}
              className="rounded-full border border-slate-500 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-slate-300 hover:bg-slate-800"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-sky-500"
            >
              Aceitar todos
            </button>
          </div>
        </div>

        {/* Body: níveis de consentimento */}
        <div className="space-y-4 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Escolha seu nível
          </p>

          <div className="space-y-3 text-xs text-slate-200">
            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-3 hover:border-sky-500/70">
              <input
                type="radio"
                name="cookie-level"
                value="essential"
                checked={selectedLevel === "essential"}
                onChange={() => setSelectedLevel("essential")}
                className="mt-[2px]"
              />
              <div>
                <div className="font-semibold text-slate-100">
                  Somente essenciais
                </div>
                <div className="text-[11px] text-slate-300">
                  Funcionamento básico do site. Sem GA4/AdSense.
                </div>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-3 hover:border-sky-500/70">
              <input
                type="radio"
                name="cookie-level"
                value="all"
                checked={selectedLevel === "all"}
                onChange={() => setSelectedLevel("all")}
                className="mt-[2px]"
              />
              <div>
                <div className="font-semibold text-slate-100">Todos</div>
                <div className="text-[11px] text-slate-300">
                  Essenciais + métricas (GA4) + anúncios (AdSense).
                </div>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-3 hover:border-sky-500/70">
              <input
                type="radio"
                name="cookie-level"
                value="none"
                checked={selectedLevel === "none"}
                onChange={() => setSelectedLevel("none")}
                className="mt-[2px]"
              />
              <div>
                <div className="font-semibold text-slate-100">Recusar</div>
                <div className="text-[11px] text-slate-300">
                  Desativa métricas e anúncios não essenciais.
                </div>
              </div>
            </label>
          </div>

          {/* Botões de ação inferiores */}
          <div className="mt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-600 px-4 py-1.5 text-xs font-semibold text-slate-200 hover:border-slate-400 hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSavePreferences}
              className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-sky-500"
            >
              Salvar preferências
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
