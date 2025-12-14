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
  subject: "Seu cadastro foi recebido pela equipe da Alta Cloud",
  html: `
    <div style="margin:0; padding:0; background:#f8fafc;">
      <div style="max-width:640px; margin:0 auto; padding:24px 16px;">
        
        <!-- Header / Branding -->
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 4px;">
        <div style="display:flex; align-items:center; gap:10px;">
            <img
            src="https://www.altacloud.com.br/logo-altacloud.png"
            width="42"
            height="42"
            alt="Alta Cloud"
            style="display:block; border-radius:10px;"
            />
            <div style="font-family:Arial, sans-serif;">
            <div style="font-size:18px; font-weight:700; color:#0f172a;">
                Alta Cloud
            </div>
            <div style="font-size:12px; color:#475569;">
                Portal de Cloud • Trilhas • Profissionais
            </div>
            </div>
        </div>

        <a href="https://www.altacloud.com.br" target="_blank" rel="noopener noreferrer"
            style="font-family:Arial, sans-serif; font-size:12px; color:#0284c7; text-decoration:none;">
            altacloud.com.br
        </a>
        </div>

        <!-- Card -->
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
          
          <!-- Top bar -->
          <div style="background:#0b1220; padding:16px 18px;">
            <div style="font-family:Arial, sans-serif; font-size:16px; font-weight:700; color:#e2e8f0;">
              Inscrição recebida com sucesso
            </div>
            <div style="font-family:Arial, sans-serif; font-size:12px; color:#94a3b8; margin-top:4px;">
              Diretório de Profissionais • Alta Cloud
            </div>
          </div>

          <!-- Body -->
          <div style="padding:18px;">
            <p style="margin:0 0 12px 0; font-family:Arial, sans-serif; font-size:14px; color:#0f172a;">
              Olá <strong>${esc(nome)}</strong>,
            </p>

            <p style="margin:0 0 12px 0; font-family:Arial, sans-serif; font-size:14px; color:#0f172a;">
              Seu cadastro foi recebido pela equipe da <strong>Alta Cloud</strong>.
              Vamos analisar suas informações e, se estiver tudo certo, seu perfil será publicado no diretório.
            </p>

            <div style="margin:14px 0; padding:12px 12px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:12px;">
              <div style="font-family:Arial, sans-serif; font-size:12px; font-weight:700; color:#0f172a; margin-bottom:6px;">
                Resumo enviado
              </div>
              <div style="font-family:Arial, sans-serif; font-size:13px; color:#0f172a;">
                ${esc(resumo || "-").replace(/\n/g, "<br/>")}
              </div>
            </div>

            <!-- CTA Button -->
            <div style="margin-top:16px;">
              <a href="https://www.altacloud.com.br/profissionais" target="_blank" rel="noopener noreferrer"
                 style="display:inline-block; font-family:Arial, sans-serif; font-size:14px; font-weight:700;
                        background:#06b6d4; color:#0b1220; text-decoration:none; padding:10px 14px; border-radius:999px;">
                Ver Diretório de Profissionais
              </a>
            </div>

            <hr style="margin:18px 0; border:none; border-top:1px solid #e2e8f0;" />

            <ul style="margin:0; padding-left:18px; font-family:Arial, sans-serif; font-size:13px; color:#334155;">
              <li style="margin:6px 0;">Esse processo é gratuito.</li>
              <li style="margin:6px 0;">Você será avisado caso seu perfil seja publicado.</li>
              <li style="margin:6px 0;">Dúvidas? Responda este e-mail.</li>
            </ul>

            <p style="margin:16px 0 0 0; font-family:Arial, sans-serif; font-size:13px; color:#475569;">
              Atenciosamente,<br/>
              <strong>Equipe Alta Cloud</strong><br/>
              <a href="https://www.altacloud.com.br" target="_blank" rel="noopener noreferrer"
                 style="color:#0284c7; text-decoration:none;">
                www.altacloud.com.br
              </a>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:14px 6px 0; font-family:Arial, sans-serif; font-size:11px; color:#64748b;">
          Você recebeu este e-mail porque enviou seu cadastro no diretório de profissionais da Alta Cloud.
        </div>
      </div>
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
