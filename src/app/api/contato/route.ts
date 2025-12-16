// src/app/api/contato/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
  company?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const nome = (body.nome ?? "").trim();
    const email = (body.email ?? "").trim();
    const assunto = (body.assunto ?? "").trim();
    const mensagem = (body.mensagem ?? "").trim();

    if (nome.length < 2) {
      return NextResponse.json({ ok: false, error: "Informe seu nome." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Informe um e-mail válido." }, { status: 400 });
    }
    if (mensagem.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Sua mensagem precisa ter pelo menos 10 caracteres." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO;
    const CONTACT_FROM = process.env.CONTACT_FROM;

    if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      return NextResponse.json(
        { ok: false, error: "Configuração ausente. Verifique RESEND_API_KEY, CONTACT_TO e CONTACT_FROM." },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // 1) Admin
    const adminSubject = assunto ? `[Alta Cloud] Contato: ${assunto}` : "[Alta Cloud] Novo contato";
    const adminText = `Nova mensagem recebida pelo site (Alta Cloud)

Nome: ${nome}
Email: ${email}
Assunto: ${assunto || "(sem assunto)"}

Mensagem:
${mensagem}
`;

    const adminSend = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      subject: adminSubject,
      text: adminText,
      replyTo: email,
    });

    if (adminSend.error) {
      return NextResponse.json({ ok: false, error: "Falha ao enviar. Tente novamente." }, { status: 500 });
    }

    // 2) Agradecimento ao usuário (não derruba o fluxo se falhar)
    await resend.emails.send({
      from: CONTACT_FROM,
      to: [email],
      subject: "Recebemos sua mensagem — Alta Cloud",
      text: `Olá, ${nome}!

Recebemos sua mensagem e obrigado por entrar em contato.
Se for necessário, responderei por aqui assim que possível.

Alta Cloud
https://www.altacloud.com.br`,
      replyTo: CONTACT_TO,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Falha ao enviar. Tente novamente." }, { status: 500 });
  }
}
