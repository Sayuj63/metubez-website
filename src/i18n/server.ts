import { cookies } from "next/headers";
import { en, type Dictionary } from "./dictionaries/en";
import { dictionaries } from "./dictionaries";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALES,
  type Locale,
} from "./types";

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

type NestedKeyOf<O> = O extends object
  ? {
      [K in keyof O & string]: O[K] extends object
        ? `${K}.${NestedKeyOf<O[K]>}`
        : `${K}`;
    }[keyof O & string]
  : never;

export type TranslationKey = NestedKeyOf<Dictionary>;

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  return (LOCALES as readonly string[]).includes(raw ?? "")
    ? (raw as Locale)
    : DEFAULT_LOCALE;
}

export async function getT() {
  const locale = await getLocale();
  const dict = dictionaries[locale] ?? en;
  return {
    locale,
    t: (path: TranslationKey) => get(dict, path) || get(en, path),
  };
}
