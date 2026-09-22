"use client";

import { useEffect, useState } from "react";
import { LOCALES, LOCALE_META, type Locale } from "@/i18n/types";

const GOOGLE_COOKIE = "googtrans";
const SCRIPT_ID = "google-translate-script";

// Translation is confined to these sections. The cookie is written once per
// path so it is simply not visible to Google anywhere else on the site.
const POLICY_PATHS = ["/legal", "/creator", "/support"];
const POLICY_PATH_RE = /^\/(legal|creator|support)(\/|$)/;

type TranslateElementOptions = {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: TranslateElementOptions,
          containerId: string,
        ) => unknown;
      };
    };
  }
}

function parentDomain(host: string): string | null {
  const parts = host.split(".");
  if (parts.length < 2) return null;
  if (/^\d+$/.test(parts[parts.length - 1])) return null;
  return `.${parts.slice(-2).join(".")}`;
}

function readLocale(): Locale {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
  if (!match) return "en";
  const code = decodeURIComponent(match[1]).split("/")[2];
  return (LOCALES as readonly string[]).includes(code) ? (code as Locale) : "en";
}

function clearCookie() {
  const past = "Thu, 01 Jan 1970 00:00:00 GMT";
  const host = window.location.hostname;
  const parent = parentDomain(host);
  // "/" is included to retire the site-wide cookie written by earlier builds.
  for (const path of ["/", ...POLICY_PATHS]) {
    document.cookie = `${GOOGLE_COOKIE}=; path=${path}; expires=${past}`;
    document.cookie = `${GOOGLE_COOKIE}=; path=${path}; domain=${host}; expires=${past}`;
    if (parent) {
      document.cookie = `${GOOGLE_COOKIE}=; path=${path}; domain=${parent}; expires=${past}`;
    }
  }
}

function writeLocale(locale: Locale) {
  clearCookie();
  if (locale === "en") return;
  const value = `/en/${locale}`;
  const expires = new Date(Date.now() + 31536000000).toUTCString();
  const parent = parentDomain(window.location.hostname);
  for (const path of POLICY_PATHS) {
    document.cookie = `${GOOGLE_COOKIE}=${value}; path=${path}; expires=${expires}`;
    // Shared across metubez.com and www.metubez.com so the choice survives either host.
    if (parent) {
      document.cookie = `${GOOGLE_COOKIE}=${value}; path=${path}; domain=${parent}; expires=${expires}`;
    }
  }
}

function reveal() {
  document.documentElement.classList.remove("gt-pending");
}

export default function PolicyTranslate() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const active = readLocale();
    setLocale(active);

    if (active === "en") {
      reveal();
      return;
    }

    // Re-write in the path-scoped form, retiring any site-wide cookie.
    writeLocale(active);

    // Google flags the document once the first pass has landed; until then the
    // page is held hidden so untranslated English never paints.
    const observer = new MutationObserver(() => {
      if (/translated-(ltr|rtl)/.test(document.documentElement.className)) {
        reveal();
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const leavingPolicySection = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || POLICY_PATH_RE.test(href)) return;
      // Full load, so Google's in-memory engine cannot follow us out of the
      // policy section and translate the rest of the site.
      event.preventDefault();
      event.stopPropagation();
      window.location.href = href;
    };
    document.addEventListener("click", leavingPolicySection, true);

    if (!document.getElementById(SCRIPT_ID)) {
      window.googleTranslateElementInit = () => {
        const factory = window.google?.translate?.TranslateElement;
        if (!factory) return reveal();
        new factory(
          {
            pageLanguage: "en",
            includedLanguages: LOCALES.filter((l) => l !== "en").join(","),
            autoDisplay: false,
          },
          "google_translate_element",
        );
      };

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = reveal;
      document.body.appendChild(script);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener("click", leavingPolicySection, true);
    };
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    writeLocale(event.target.value as Locale);
    window.location.reload();
  };

  return (
    <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-2">
      <label
        htmlFor="policy-lang"
        className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-black text-[#111]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.5 4-6 4-9s-1.5-6.5-4-9m0 18c-2.5-2.5-4-6-4-9s1.5-6.5 4-9M3.5 9h17M3.5 15h17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Language
      </label>
      <div className="relative px-1 pb-1">
        <select
          id="policy-lang"
          value={locale}
          onChange={onChange}
          translate="no"
          className="notranslate appearance-none w-full text-[13.5px] font-medium text-[#111] bg-white border border-[#eee] rounded-lg pl-3 pr-9 py-2 hover:border-[#31B24B] focus:border-[#31B24B] focus:outline-none cursor-pointer"
        >
          {LOCALES.map((code) => (
            <option key={code} value={code}>
              {LOCALE_META[code].native}
              {code !== "en" ? ` · ${LOCALE_META[code].label}` : ""}
            </option>
          ))}
        </select>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="#666"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div id="google_translate_element" />
    </div>
  );
}
