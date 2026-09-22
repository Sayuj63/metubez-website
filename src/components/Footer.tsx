"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/context";

const PLAY_STORE_URL =
  "https://play.google.com/store/search?q=metubez&c=apps&hl=en_IN";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/metubez-made-for-by-india/id6782786496";
const ANDROID_INTENT =
  "intent://feed#Intent;scheme=metubez;package=com.twenties.metubez;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fsearch%3Fq%3Dmetubez%26c%3Dapps%26hl%3Den_IN;end";
const IOS_SCHEME = "metubez://feed";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=602%2C+6th+Floor%2C+Anam+2%2C+Ambli%2C+Ahmedabad%2C+Gujarat+380058";

function openMeTubez() {
  if (typeof window === "undefined") return;
  const ua = window.navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  if (isAndroid) {
    window.location.href = ANDROID_INTENT;
    return;
  }

  if (isIOS) {
    const start = Date.now();
    const timer = window.setTimeout(() => {
      if (!document.hidden && Date.now() - start < 2000) {
        window.location.href = APP_STORE_URL;
      }
    }, 1200);
    const onVisibilityChange = () => {
      if (document.hidden) {
        window.clearTimeout(timer);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.location.href = IOS_SCHEME;
    return;
  }

  window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
}

export default function Footer() {
  const { t } = useT();

  const platform = [
    { label: t("footer.becomeMetuber"), href: "/metubers" },
    { label: t("footer.forBrands"), href: "/brands" },
    { label: t("footer.downloadApp"), href: "#download" },
  ];

  const company = [
    { label: t("footer.aboutUs"), href: "/company" },
    { label: t("footer.blogs"), href: "/blogs" },
    { label: t("footer.contact"), href: "/company#contact" },
  ];

  const legal = [
    { label: t("footer.privacyPolicy"), href: "/legal/privacy" },
    { label: t("footer.termsOfUse"), href: "/legal/terms" },
    { label: t("footer.csaeStandards"), href: "/legal/csae" },
  ];

  const support = [
    { label: t("footer.grievanceOfficer"), href: "/support/grievance" },
    { label: t("footer.contactSupport"), href: "/support/contact" },
    { label: t("footer.communityGuidelines"), href: "/legal/community" },
  ];

  const creator = [
    { label: t("footer.viewCountingPolicy"), href: "/creator/view-counting" },
    { label: t("footer.creatorEarningsPolicy"), href: "/creator/earnings" },
    { label: t("footer.creatorAgreement"), href: "/creator/agreement" },
    { label: t("footer.inAppHelpCenter"), href: "/creator/help" },
  ];

  return (
    <footer className="bg-white border-t border-[#eee]">
      {/* Download banner */}
      <div id="download" className="bg-[#f8f8f8] border-b border-[#eee]">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 text-center">
          <h2 className="text-[26px] md:text-[32px] font-black text-[#111] mb-2">
            {t("footer.downloadTitle")}
          </h2>
          <p className="text-[14px] text-[#666] mb-6">
            {t("footer.downloadSub")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/badge-playstore.png"
                alt="Get it on Google Play"
                width={666}
                height={198}
                className="h-12 w-auto"
              />
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <Image
                src="/badge-appstore.png"
                alt="Download on the App Store"
                width={813}
                height={241}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/metubez-logo.png"
                alt="MeTubez"
                width={44}
                height={44}
                className="rounded-md"
              />
              <span
                translate="no"
                className="notranslate text-[20px] font-black text-[#31B24B]"
              >
                MeTubez
              </span>
            </div>
            <button
              type="button"
              onClick={openMeTubez}
              className="inline-flex items-center gap-2 bg-[#31B24B] hover:bg-[#279940] text-white text-[13px] font-black px-5 py-2.5 rounded-md transition-colors mb-5"
              aria-label={t("footer.watchMetubez")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t("footer.watchMetubez")}
            </button>
            <p className="text-[12px] text-[#999] mb-1">{t("footer.productOf")}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#999] leading-relaxed hover:text-[#31B24B] transition-colors inline-block"
            >
              602, 6th Floor, Anam 2, Ambli,
              <br />
              Ahmedabad, Gujarat 380058
            </a>
          </div>

          <FooterCol title={t("footer.colPlatform")} items={platform} />
          <FooterCol title={t("footer.colCompany")} items={company} />
          <FooterCol title={t("footer.colLegal")} items={legal} />
          <FooterCol title={t("footer.colSupport")} items={support} />
          <FooterCol title={t("footer.colCreator")} items={creator} />
        </div>

        <div className="border-t border-[#eee] mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[12px] text-[#999]">
            © 2026 Twenties Entertainment Pvt Ltd. {t("footer.rightsReserved")}
          </p>
          <div className="flex gap-3">
            <Social
              label="Instagram"
              href="https://www.instagram.com/metubez_com/"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </Social>
            <Social
              label="LinkedIn"
              href="https://www.linkedin.com/company/metubez/?viewAsMember=true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </Social>
            <Social
              label="Reddit"
              href="https://www.reddit.com/r/Metubez/"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.725.91 5.24 2.44 7.254l-1.398 4.13a.75.75 0 00.938.938l4.13-1.398A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.894 13.68c.017.157.026.316.026.477 0 2.577-3.1 4.667-6.92 4.667s-6.92-2.09-6.92-4.667c0-.161.009-.32.026-.477a1.583 1.583 0 111.748-2.554c1.146-.83 2.693-1.36 4.41-1.42l.82-3.845a.4.4 0 01.482-.313l2.703.575a1.36 1.36 0 11.137.782l-2.323-.494-.72 3.295c1.694.07 3.219.6 4.35 1.423a1.583 1.583 0 111.65 2.554h-.469zM9.06 13.94a1.29 1.29 0 100 2.58 1.29 1.29 0 000-2.58zm5.88 0a1.29 1.29 0 100 2.58 1.29 1.29 0 000-2.58zm-.94 4.34a.36.36 0 00-.51 0c-.51.51-1.31.74-2.44.74-1.12 0-1.93-.23-2.44-.74a.36.36 0 00-.51.51c.65.65 1.62.94 2.95.94 1.33 0 2.3-.29 2.95-.94a.36.36 0 000-.51z" />
            </Social>
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-black uppercase tracking-wider text-[#111] mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[13px] text-[#666] hover:text-[#31B24B] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-md border border-[#ddd] flex items-center justify-center text-[#666] hover:bg-[#31B24B] hover:text-white hover:border-[#31B24B] transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
