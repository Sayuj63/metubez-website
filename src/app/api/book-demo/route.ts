import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = "hello@metubez.com";
const SUBJECT = "Book a demo — MeTubez for Brands";

const FIELDS: [label: string, key: string][] = [
  ["Name", "name"],
  ["Company / Agency", "company"],
  ["Work email", "email"],
  ["Phone", "phone"],
  ["Monthly budget", "budget"],
  ["Campaign objective", "objective"],
  ["Heard about us via", "source"],
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const [, key] of FIELDS) {
    const raw = payload[key];
    values[key] = typeof raw === "string" ? raw.trim().slice(0, 500) : "";
  }

  if (!values.name) {
    return Response.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(values.email)) {
    return Response.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);

  if (!host || !user || !pass) {
    return Response.json(
      { ok: false, error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const text = FIELDS.map(([label, key]) => `${label}: ${values[key] || "—"}`).join("\n");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"MeTubez Website" <${user}>`,
      to: TO,
      replyTo: values.email,
      subject: SUBJECT,
      text,
    });
  } catch {
    return Response.json(
      { ok: false, error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
