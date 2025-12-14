import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  nome: string;
  email: string;
  localizacao: string;
  nuvem: string;
  certificacoes: string;
  resumo: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;

  // anti-spam (honeypot)
  company?: string;
};

function clean(v?: unknown) {
  return String(v ?? "").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.INSCRICOES_TO_EMAIL || "contato@altacloud.com.br";
    const FROM =
      process.env.INSCRICOES_FROM_EMAIL || "Alta Cloud <no-reply@altacloud.com.br>";

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Partial<Payload>;

    // Honeypot: se veio preenchido, é spam
    if (clean(body.company)) {
      return NextResponse.json({ ok: true });
    }

    const nome = clean(body.nome);
    const email = clean(body.email);
    const localizacao = clean(body.localizacao);
    const nuvem = clean(body.nuvem);
    const certificacoes = clean(body.certificacoes);
    const resumo = clean(body.resumo);
    const linkedin = clean(body.linkedin);
    const github = clean(body.github);
    const portfolio = clean(body.portfolio);

    if (nome.length < 3) {
      return NextResponse.json({ ok: false, error: "Informe seu nome completo." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Informe um e-mail válido." }, { status: 400 });
    }
    if (!localizacao) {
      return NextResponse.json({ ok: false, error: "Informe sua localização." }, { status: 400 });
    }
    if (!nuvem) {
      return NextResponse.json({ ok: false, error: "Selecione sua nuvem principal." }, { status: 400 });
    }
    if (!certificacoes) {
      return NextResponse.json({ ok: false, error: "Informe suas certificações." }, { status: 400 });
    }
    if (!resumo) {
      return NextResponse.json({ ok: false, error: "Informe seu resumo profissional." }, { status: 400 });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `Nova inscrição — Diretório Alta Cloud: ${nome}`;

    const text = [
      "Nova inscrição no Diretório Alta Cloud",
      "",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Localização: ${localizacao}`,
      `Nuvem: ${nuvem}`,
      `Certificações: ${certificacoes}`,
      `Resumo: ${resumo}`,
      "",
      `LinkedIn: ${linkedin || "-"}`,
      `GitHub: ${github || "-"}`,
      `Portfólio: ${portfolio || "-"}`,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5">
        <h2>Nova inscrição — Diretório Alta Cloud</h2>
        <p><b>Nome:</b> ${esc(nome)}</p>
        <p><b>E-mail:</b> ${esc(email)}</p>
        <p><b>Localização:</b> ${esc(localizacao)}</p>
        <p><b>Nuvem:</b> ${esc(nuvem)}</p>
        <p><b>Certificações:</b> ${esc(certificacoes)}</p>
        <p><b>Resumo:</b><br/>${esc(resumo).replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p><b>LinkedIn:</b> ${linkedin ? `<a href="${esc(linkedin)}">${esc(linkedin)}</a>` : "-"}</p>
        <p><b>GitHub:</b> ${github ? `<a href="${esc(github)}">${esc(github)}</a>` : "-"}</p>
        <p><b>Portfólio:</b> ${portfolio ? `<a href="${esc(portfolio)}">${esc(portfolio)}</a>` : "-"}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject,
      text,
      html,
    });
    
// E-mail de confirmação para o profissional
await resend.emails.send({
  from: FROM,
  to: [email],
  subject: "Recebemos sua inscrição no Diretório Alta Cloud",
  html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#0f172a">
      <h2 style="color:#0284c7">Inscrição recebida com sucesso</h2>

      <p>Olá <strong>${esc(nome)}</strong>,</p>

      <p>
        Recebemos sua inscrição para o
        <strong>Diretório de Profissionais da Alta Cloud</strong>.
      </p>

      <p>
        Nossa equipe irá analisar suas informações e, se estiver tudo certo,
        seu perfil será publicado no diretório.
      </p>

      <p style="margin-top:16px">
        <strong>Resumo enviado:</strong><br/>
        ${esc(resumo).replace(/\n/g, "<br/>")}
      </p>

      <hr style="margin:24px 0"/>

      <p style="font-size:14px; color:#475569">
        🔹 Esse processo é gratuito<br/>
        🔹 Você será avisado caso seu perfil seja publicado<br/>
        🔹 Dúvidas? Responda este e-mail
      </p>

      <p style="margin-top:24px">
        Atenciosamente,<br/>
        <strong>Equipe Alta Cloud</strong><br/>
        <a href="https://www.altacloud.com.br" target="_blank">
          www.altacloud.com.br
        </a>
      </p>
    </div>
  `,
});

    if (error) {
      return NextResponse.json({ ok: false, error: "Falha ao enviar e-mail (Resend)." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Erro inesperado ao enviar inscrição." }, { status: 500 });
  }
}
