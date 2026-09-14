import { Resend } from "resend";

export const runtime = "nodejs";

const TO = process.env.APPLY_TO ?? "hello@metubez.com";
const FROM =
  process.env.RESEND_FROM ?? "MeTubez Website <website@metubez.com>";
const SUBJECT = "Creator application — MeTubez (MeTubers)";

const FIELDS: [label: string, key: string][] = [
  ["Full name", "name"],
  ["Mobile number", "phone"],
  ["City", "city"],
  ["Primary content language", "language"],
  ["Content category", "category"],
];

const PLACEHOLDERS = new Set(
  FIELDS.map(([label]) => label.toLowerCase()).concat([
    "select language",
    "select category",
  ]),
);

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
    if (PLACEHOLDERS.has(values[key].toLowerCase())) values[key] = "";
  }

  if (!values.name) {
    return Response.json({ ok: false, error: "Full name is required." }, { status: 400 });
  }
  if (values.phone.replace(/\D/g, "").length < 10) {
    return Response.json(
      { ok: false, error: "Enter a valid mobile number." },
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
  const html = `<h2>New MeTuber application</h2><table cellpadding="6" style="border-collapse:collapse">${FIELDS.map(
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
      { ok: false, error: "Could not send your application. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
