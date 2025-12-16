// src/app/api/contato/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
  company?: string; // honeypot
};

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1h
const RATE_LIMIT_MAX = 5;

// In-memory (em serverless pode resetar; já ajuda a reduzir spam)
const rateStore: Map<string, { count: number; resetAt: number }> =
  (globalThis as any).__ac_rateStore ?? new Map();
(globalThis as any).__ac_rateStore = rateStore;

function getClientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);

    // Rate limit simples
    const now = Date.now();
    const current = rateStore.get(ip);
    if (!current || now > current.resetAt) {
      rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    } else {
      current.count += 1;
      if (current.count > RATE_LIMIT_MAX) {
        return NextResponse.json(
          { ok: false, error: "Muitas tentativas. Tente novamente mais tarde." },
          { status: 429 }
        );
      }
      rateStore.set(ip, current);
    }

    const body = (await req.json()) as Payload;

    // Honeypot anti-bot
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const nome = (body.nome ?? "").trim();
    const email = (body.email ?? "").trim();
    const assunto = (body.assunto ?? "").trim();
    const mensagem = (body.mensagem ?? "").trim();

    if (nome.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Informe seu nome." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Informe um e-mail válido." },
        { status: 400 }
      );
    }
    if (mensagem.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "Sua mensagem precisa ter pelo menos 10 caracteres.",
        },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO;
    const CONTACT_FROM = process.env.CONTACT_FROM;

    if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Configuração ausente. Verifique RESEND_API_KEY, CONTACT_TO e CONTACT_FROM.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // 1) E-mail para você (admin)
    const adminSubject = assunto
      ? `[Alta Cloud] Contato: ${assunto}`
      : "[Alta Cloud] Novo contato";

    const adminText = `Nova mensagem recebida pelo site (Alta Cloud)

Nome: ${nome}
Email: ${email}
Assunto: ${assunto || "(sem assunto)"}

Mensagem:
${mensagem}

IP: ${ip}
`;

    const adminSend = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      subject: adminSubject,
      text: adminText,
      replyTo: email, // ✅ correto (camelCase)
    });

    if (adminSend.error) {
      return NextResponse.json(
        { ok: false, error: "Falha ao enviar. Tente novamente." },
        { status: 500 }
      );
    }

    // 2) Agradecimento para quem enviou (auto-reply)
    // Observação: o "from" precisa ser um remetente/domínio válido no Resend.
    const userSubject = "Recebemos sua mensagem — Alta Cloud";
    const userText = `Olá, ${nome}!

Recebemos sua mensagem e obrigado por entrar em contato.
Se for necessário, responderei por aqui assim que possível.

Resumo do que você enviou:
Assunto: ${assunto || "(sem assunto)"}
Mensagem: ${mensagem}

Alta Cloud
https://www.altacloud.com.br
`;

    const userHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif; line-height:1.5; color:#0f172a;">
        <h2 style="margin:0 0 12px;">Olá, ${escapeHtml(nome)}!</h2>
        <p style="margin:0 0 12px;">
          Recebemos sua mensagem e obrigado por entrar em contato.
          Se for necessário, responderei por aqui assim que possível.
        </p>
        <div style="margin:16px 0; padding:12px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc;">
          <p style="margin:0 0 6px;"><strong>Assunto:</strong> ${escapeHtml(
            assunto || "(sem assunto)"
          )}</p>
          <p style="margin:0;"><strong>Mensagem:</strong> ${escapeHtml(
            mensagem
          )}</p>
        </div>
        <p style="margin:16px 0 0;">
          <strong>Alta Cloud</strong><br/>
          <a href="https://www.altacloud.com.br" style="color:#0284c7; text-decoration:none;">
            altacloud.com.br
          </a>
        </p>
      </div>
    `;

    // Se este envio falhar, não vale “derrubar” a experiência (você já recebeu o contato).
    await resend.emails.send({
      from: CONTACT_FROM,
      to: [email],
      subject: userSubject,
      text: userText,
      html: userHtml,
      replyTo: CONTACT_TO, // opcional: se o usuário responder, cai pra você
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Falha ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
