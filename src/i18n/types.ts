export const LOCALES = [
  "en",
  "hi",
  "mr",
  "gu",
  "ta",
  "te",
  "kn",
  "ml",
  "bn",
  "pa",
  "or",
  "as",
  "ur",
  "bho",
] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { label: string; native: string; rtl?: boolean }
> = {
  en: { label: "English", native: "English" },
  hi: { label: "Hindi", native: "हिन्दी" },
  mr: { label: "Marathi", native: "मराठी" },
  gu: { label: "Gujarati", native: "ગુજરાતી" },
  ta: { label: "Tamil", native: "தமிழ்" },
  te: { label: "Telugu", native: "తెలుగు" },
  kn: { label: "Kannada", native: "ಕನ್ನಡ" },
  ml: { label: "Malayalam", native: "മലയാളം" },
  bn: { label: "Bengali", native: "বাংলা" },
  pa: { label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  or: { label: "Odia", native: "ଓଡ଼ିଆ" },
  as: { label: "Assamese", native: "অসমীয়া" },
  ur: { label: "Urdu", native: "اردو", rtl: true },
  bho: { label: "Bhojpuri", native: "भोजपुरी" },
};

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "metubez_lang";
