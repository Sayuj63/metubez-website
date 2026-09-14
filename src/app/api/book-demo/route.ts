import { Resend } from "resend";

export const runtime = "nodejs";

const TO = process.env.BOOK_DEMO_TO ?? "hello@metubez.com";
const FROM =
  process.env.RESEND_FROM ?? "MeTubez Website <website@metubez.com>";
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const text = FIELDS.map(([label, key]) => `${label}: ${values[key] || "—"}`).join("\n");
  const html = `<h2>New demo request — MeTubez for Brands</h2><table cellpadding="6" style="border-collapse:collapse">${FIELDS.map(
    ([label, key]) =>
      `<tr><td style="border:1px solid #eee;font-weight:bold">${escapeHtml(
        label,
      )}</td><td style="border:1px solid #eee">${escapeHtml(
        values[key] || "—",
      )}</td></tr>`,
  ).join("")}</table>`;

  const resend = new Resend(apiKey);

  let failed = false;
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: values.email,
      subject: SUBJECT,
      text,
      html,
    });
    failed = Boolean(error);
  } catch {
    failed = true;
  }

  if (failed) {
    return Response.json(
      { ok: false, error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
