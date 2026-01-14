import { NextRequest, NextResponse } from "next/server";

/**
 * Rate limit simples (Edge) por IP.
 * Objetivo: segurar picos e bots óbvios nas rotas de conteúdo (onde há ads).
 */

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 60; // 60 requests por IP por minuto

const PROTECTED_PATHS = ["/trilhas", "/blog", "/artigos", "/posts"];

// Bots bons (não bloquear)
const ALLOWED_BOTS = [
  "googlebot",
  "bingbot",
  "duckduckbot",
  "slurp",
  "facebookexternalhit",
];

// Agentes suspeitos (bloquear)
const BLOCKED_UA = [
  "headless",
  "phantom",
  "puppeteer",
  "playwright",
  "selenium",
  "crawler",
  "spider",
  "curl",
  "wget",
  "python",
];

// Memória por instância (suficiente para reduzir picos)
const ipHits = new Map<string, { count: number; ts: number }>();

function getClientIp(req: NextRequest): string {
  // Vercel/Proxy padrão
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }

  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  // fallback (não ideal, mas evita crash)
  return "unknown";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Só protege paths relevantes
  if (!PROTECTED_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  // Libera bots bons
  if (ALLOWED_BOTS.some((bot) => ua.includes(bot))) {
    return NextResponse.next();
  }

  // Bloqueia agentes suspeitos
  if (BLOCKED_UA.some((b) => ua.includes(b))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const record = ipHits.get(ip);

  if (!record) {
    ipHits.set(ip, { count: 1, ts: now });
    return NextResponse.next();
  }

  // Reset da janela
  if (now - record.ts > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, ts: now });
    return NextResponse.next();
  }

  record.count += 1;

  if (record.count > RATE_LIMIT_MAX) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/trilhas/:path*",
    "/blog/:path*",
    "/artigos/:path*",
    "/posts/:path*",
  ],
};
