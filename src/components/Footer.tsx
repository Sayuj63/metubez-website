import Image from "next/image";
import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/search?q=metubez&c=apps&hl=en_IN";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/metubez-made-for-by-india/id6782786496";

const platform = [
  { label: "MeTubers program", href: "/metubers" },
  { label: "For brands", href: "/brands" },
  { label: "Download app", href: "#download" },
];

const company = [
  { label: "About us", href: "/company" },
  { label: "Press", href: "/company#press" },
  { label: "Careers", href: "/company#careers" },
  { label: "Contact", href: "/company#contact" },
];

const legal = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Terms of use", href: "/legal/terms" },
  { label: "Community guidelines", href: "/legal/community" },
  { label: "CSAE standards", href: "/legal/csae" },
  { label: "Copyright Policy", href: "/legal/copyright" },
];

const support = [
  { label: "Help Center", href: "/support/help" },
  { label: "Grievance Officer", href: "/support/grievance" },
  { label: "Report Content", href: "/support/report" },
  { label: "Contact Support", href: "/support/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eee]">
      {/* Download banner */}
      <div id="download" className="bg-[#f8f8f8] border-b border-[#eee]">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 text-center">
          <h2 className="text-[26px] md:text-[32px] font-black text-[#111] mb-2">
            Download MeTubez today.
          </h2>
          <p className="text-[14px] text-[#666] mb-6">
            Free · Made in India · Available on Android and iOS
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/badge-playstore.svg"
                alt="Get it on Google Play"
                width={160}
                height={48}
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
                src="/badge-appstore.svg"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/metubez-logo.png"
                alt="MeTubez"
                width={44}
                height={44}
                className="rounded-md"
              />
              <span className="text-[20px] font-black text-[#31B24B]">
                MeTubez
              </span>
            </div>
            <p className="text-[13px] text-[#555] leading-relaxed mb-3 max-w-[380px]">
              MeTubez is a Made-in-India video platform with a unique horizontal
              video scrolling experience. MeTubez brings short and long-form
              content together across categories and languages.
            </p>
            <p className="text-[12px] text-[#999] mb-1">
              A product of Twenties Entertainment Pvt Ltd
            </p>
            <p className="text-[12px] text-[#999] leading-relaxed">
              602, 6th Floor, Anam 2, Ambli,
              <br />
              Ahmedabad, Gujarat 380058
            </p>
          </div>

          <FooterCol title="Platform" items={platform} />
          <FooterCol title="Company" items={company} />
          <FooterCol title="Legal" items={legal} />
          <FooterCol title="Support" items={support} />
        </div>

        <div className="border-t border-[#eee] mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[12px] text-[#999]">
            © 2026 Twenties Entertainment Pvt Ltd. All rights reserved.
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
