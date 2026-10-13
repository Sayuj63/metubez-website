import { Resend } from "resend";

export const runtime = "nodejs";

// Creator applications go to the MeTubez backend (creator-requests API).
// If that API isn't configured or isn't reachable, the application is
// emailed instead so no lead is lost.
const API_BASE = process.env.CREATOR_API_BASE_URL?.replace(/\/+$/, "");
const API_KEY = process.env.CREATOR_API_KEY;
const API_TIMEOUT_MS = 8000;

const TO = process.env.APPLY_TO ?? "hello@metubez.com";
const FROM =
  process.env.RESEND_FROM ?? "MeTubez Website <website@metubez.com>";
const SUBJECT = "Creator application — MeTubez (MeTubers)";

type Key =
  | "name"
  | "email"
  | "contact_number"
  | "social_media_profile"
  | "state"
  | "city";

const FIELDS: [label: string, key: Key][] = [
  ["Full name", "name"],
  ["Email", "email"],
  ["Mobile number", "contact_number"],
  ["Social media profile", "social_media_profile"],
  ["State", "state"],
  ["City", "city"],
];

type Values = Record<Key, string>;
type FieldErrors = Partial<Record<Key, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Accepts "+91 98765 43210", "098765 43210", "9876543210" → "9876543210".
function normalisePhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

// Accepts "instagram.com/name" as well as full links.
function normaliseUrl(raw: string) {
  if (!raw) return raw;
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withScheme);
    return url.hostname.includes(".") ? url.toString() : "";
  } catch {
    return "";
  }
}

function validate(payload: Record<string, unknown>) {
  const values = {} as Values;
  for (const [, key] of FIELDS) {
    const raw = payload[key];
    values[key] = typeof raw === "string" ? raw.trim().slice(0, 500) : "";
  }
  values.contact_number = normalisePhone(values.contact_number);
  const profile = values.social_media_profile;
  values.social_media_profile = normaliseUrl(profile);

  const errors: FieldErrors = {};
  if (!values.name) errors.name = "Enter your full name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid email address.";
  if (!/^[6-9]\d{9}$/.test(values.contact_number))
    errors.contact_number = "Enter a valid 10-digit mobile number.";
  if (!values.social_media_profile)
    errors.social_media_profile = profile
      ? "Enter a link to your profile, e.g. https://instagram.com/yourname."
      : "Enter a link to your social media profile.";
  if (!values.state) errors.state = "Select your state.";
  if (!values.city) errors.city = "Enter your city.";
  return { values, errors };
}

// The API returns `errors` keyed by field; values may be strings or arrays.
function readApiErrors(body: unknown): FieldErrors {
  const raw = (body as { errors?: unknown } | null)?.errors;
  if (!raw || typeof raw !== "object") return {};
  const out: FieldErrors = {};
  for (const [, key] of FIELDS) {
    const v = (raw as Record<string, unknown>)[key];
    const msg = Array.isArray(v) ? v.find((m) => typeof m === "string") : v;
    if (typeof msg === "string" && msg) out[key] = msg;
  }
  return out;
}

type ApiResult =
  | { kind: "created" }
  | { kind: "invalid"; errors: FieldErrors }
  | { kind: "duplicate" }
  | { kind: "unavailable"; reason: string };

async function submitToApi(values: Values): Promise<ApiResult> {
  if (!API_BASE || !API_KEY) return { kind: "unavailable", reason: "not configured" };

  let res: Response;
  try {
    res = await fetch(`${API_BASE}/api/public/creator-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify(values),
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
      cache: "no-store",
    });
  } catch (err) {
    return { kind: "unavailable", reason: `request failed: ${String(err)}` };
  }

  if (res.status === 200 || res.status === 201) return { kind: "created" };
  if (res.status === 409) return { kind: "duplicate" };
  if (res.status === 400 || res.status === 422) {
    const body = await res.json().catch(() => null);
    return { kind: "invalid", errors: readApiErrors(body) };
  }
  // 401 (bad key), 404 (route not deployed), 5xx, etc.
  return { kind: "unavailable", reason: `HTTP ${res.status}` };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendByEmail(values: Values) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const text = FIELDS.map(([label, key]) => `${label}: ${values[key] || "—"}`).join("\n");
  const html = `<h2>New MeTuber application</h2><table cellpadding="6" style="border-collapse:collapse">${FIELDS.map(
    ([label, key]) =>
      `<tr><td style="border:1px solid #eee;font-weight:bold">${escapeHtml(
        label,
      )}</td><td style="border:1px solid #eee">${escapeHtml(
        values[key] || "—",
      )}</td></tr>`,
  ).join("")}</table>`;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: TO,
      replyTo: values.email,
      subject: SUBJECT,
      text,
      html,
    });
    return !error;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { values, errors } = validate(payload);
  if (Object.keys(errors).length) {
    return Response.json(
      { ok: false, error: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const result = await submitToApi(values);
  if (result.kind === "created") return Response.json({ ok: true });
  if (result.kind === "duplicate") {
    return Response.json(
      {
        ok: false,
        error:
          "You've already applied with this email. Our team will be in touch soon.",
      },
      { status: 409 },
    );
  }
  if (result.kind === "invalid") {
    return Response.json(
      { ok: false, error: "Please check the highlighted fields.", errors: result.errors },
      { status: 400 },
    );
  }

  if (API_BASE && API_KEY) {
    console.error(`Creator API unavailable (${result.reason}); falling back to email.`);
  }
  if (await sendByEmail(values)) return Response.json({ ok: true });

  return Response.json(
    { ok: false, error: "Could not send your application. Please try again." },
    { status: 502 },
  );
}
