"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALE_META, type Locale } from "./types";
import { en, type Dictionary } from "./dictionaries/en";
import { dictionaries } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: TranslationKey) => string;
};

type TranslationKey = NestedKeyOf<Dictionary>;

type NestedKeyOf<O> = O extends object
  ? {
      [K in keyof O & string]: O[K] extends object
        ? `${K}.${NestedKeyOf<O[K]>}`
        : `${K}`;
    }[keyof O & string]
  : never;

const I18nContext = createContext<Ctx | null>(null);

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${oneYear}; SameSite=Lax`;
}

function get(dict: Dictionary, path: string): string {
  const parts = path.split(".");
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return "";
    }
  }
  return typeof cur === "string" ? cur : "";
}

export function I18nProvider({
  children,
  initial,
}: {
  children: React.ReactNode;
  initial?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initial ?? DEFAULT_LOCALE);

  useEffect(() => {
    const fromCookie = readCookie(LOCALE_COOKIE);
    const fromStorage =
      typeof window !== "undefined"
        ? window.localStorage.getItem(LOCALE_COOKIE)
        : null;
    const candidate = (fromCookie ?? fromStorage) as Locale | null;
    if (candidate && candidate in LOCALE_META && candidate !== locale) {
      setLocaleState(candidate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = LOCALE_META[locale].rtl ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeCookie(LOCALE_COOKIE, next);
    try {
      window.localStorage.setItem(LOCALE_COOKIE, next);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (path: TranslationKey): string => {
      const dict = dictionaries[locale] ?? en;
      const value = get(dict as Dictionary, path);
      if (value) return value;
      // Fallback to English if a key is missing in the selected locale
      return get(en, path);
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Safe fallback so server-rendered pages don't crash before hydration
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (path: TranslationKey) => get(en, path),
    } as Ctx;
  }
  return ctx;
}
