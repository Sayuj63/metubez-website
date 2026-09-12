"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reasons = [
  {
    icon: "▭",
    title: "Horizontal canvas",
    desc: "Your creative plays in full 16:9 landscape — how it was designed to be seen. No cropping, no letterboxing. No other Indian mobile platform offers this.",
  },
  {
    icon: "📍",
    title: "Bharat targeting",
    desc: "Reach Tier 2, 3, and 4 India by language, city, category, and age. 10+ Indian languages supported, including Hindi, Bhojpuri, Marathi, Tamil, Telugu, Bengali, and Gujarati.",
  },
  {
    icon: "✓",
    title: "Real views only",
    desc: "Strict view-counting standards. 3 seconds minimum for Meshorts, 30 seconds for Videos. Same user max 2 views per day. Every impression is a genuine engaged viewer.",
  },
  {
    icon: "★",
    title: "Managed, not DIY",
    desc: "Our team sets up your campaign, manages inventory, and delivers reporting. No self-serve complexity, no learning curve. Just results.",
  },
];

const targeting = [
  {
    title: "Language",
    desc: "Hindi, English, Bhojpuri, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, Punjabi, Malayalam, and more",
  },
  {
    title: "Geography",
    desc: "State, city, or Tier 2/3/4 clusters. Metro, non-metro, or rural targeting.",
  },
  {
    title: "Category",
    desc: "Music, cooking, dance, comedy, and 8 more content categories",
  },
  {
    title: "Demographics",
    desc: "Age band, gender, interests, device type",
  },
];

const adsSteps = [
  {
    n: 1,
    title: "Contact our team",
    desc: "Book a 30-minute demo. We walk you through formats, targeting, rate card, and inventory availability.",
  },
  {
    n: 2,
    title: "Campaign setup",
    desc: "Our team creates your advertiser account, sets up campaigns, uploads creative, and configures targeting. No self-serve complexity.",
  },
  {
    n: 3,
    title: "Launch within 48 hours",
    desc: "Creative reviewed and approved within 24 hours. Campaign goes live within 48 hours of budget confirmation.",
  },
  {
    n: 4,
    title: "Track live, optimise anytime",
    desc: "Real-time performance dashboard. Adjust targeting, budget, and creativity anytime. Weekly account manager sync.",
  },
];

const adFormats = [
  {
    key: "skippable",
    tab: "Skippable video ad",
    title: "Skippable video ad",
    intro:
      "In-feed for Meshorts, pre-roll/mid-roll for Videos. Landscape 16:9. Up to 3 minutes. Skippable after 5 seconds.",
    charged: "Viewer watches 30 seconds or completes the ad.",
    cpm: "₹50 – ₹80",
    best: "Performance, app installs, e-commerce, brand awareness at scale.",
    badge: "Landscape 16:9 · skip after 5s",
  },
  {
    key: "non-skippable",
    tab: "Non-skippable video ad",
    title: "Non-skippable video ad",
    intro:
      "Pre-roll and mid-roll for Videos. Landscape 16:9. 6-15 seconds. Cannot be skipped.",
    charged: "Every impression from the moment the ad starts.",
    cpm: "₹120 – ₹180",
    best: "High-recall brand awareness campaigns, product launches, category-exclusive placements.",
    badge: "Landscape 16:9 · 6-15s · no skip",
  },
];

const brandFaqs = [
  {
    q: "How does MeTubez count views vs YouTube and Instagram?",
    a: "MeTubez uses strict view-counting standards. For Meshorts (≤30 sec), a viewer must watch at least 3 seconds or 50% of the video. For Videos (>30 sec), 30 seconds or 25%. Same user counts max 2 views per video per 24 hours. Every impression you're charged for is a genuinely engaged viewer.",
  },
  {
    q: "What's your minimum budget?",
    a: "Our minimum monthly commitment is ₹1 lakh for direct advertisers. Agency-negotiated deals start at ₹5 lakh monthly commitment for direct account management. Below ₹1 lakh, we onboard you through our self-serve queue with 5-7 day setup.",
  },
  {
    q: "Do you offer category exclusivity?",
    a: "Yes. Category-exclusive placements are available on our BrandSafe inventory tier. Contact our team for pricing and availability.",
  },
  {
    q: "How do you handle brand safety?",
    a: "Every video on MeTubez is reviewed by our content moderation team before entering ad-eligible inventory. We maintain a whitelist of brand-safe content. You can also request custom category exclusions (e.g., no political content, no religious content) at no extra cost.",
  },
  {
    q: "When and how do I pay?",
    a: "We invoice directly. Payment via bank transfer or online transfer. Terms: 30-day payment window from campaign start date. No online payment integration required — our finance team handles everything.",
  },
  {
    q: "Can I get exportable reports?",
    a: "Real-time dashboards are always available in your advertiser account. PDF and CSV report exports are on our roadmap for Q1 2027. Until then, our account managers send weekly performance summaries by email for all managed advertisers.",
  },
];

const BRAND_EMAIL = "hello@metubez.com";

export default function BrandsPage() {
  const [activeFormat, setActiveFormat] = useState(adFormats[0].key);
  const [submitted, setSubmitted] = useState(false);
  const format = adFormats.find((f) => f.key === activeFormat) ?? adFormats[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      ["Name", "name"],
      ["Company / Agency", "company"],
      ["Work email", "email"],
      ["Phone", "phone"],
      ["Monthly budget", "budget"],
      ["Campaign objective", "objective"],
      ["Heard about us via", "source"],
    ]
      .map(([label, key]) => `${label}: ${data.get(key) ?? ""}`)
      .join("\n");

    window.location.href = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(
      "Book a demo — MeTubez for Brands",
    )}&body=${encodeURIComponent(lines)}`;
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-4">
                MeTubez for Brands
              </p>
              <h1 className="text-[36px] md:text-[52px] leading-[1.05] font-black text-[#111] tracking-tight mb-6">
                Reach Bharat where content is watched — not just scrolled.
              </h1>
              <p className="text-[16px] md:text-[17px] text-[#555] leading-relaxed mb-8 max-w-[520px]">
                The only landscape-first video platform in India. Cinematic ad
                canvas built for real attention and real engagement.
              </p>
              <a
                href="#book-demo"
                className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#31B24B] text-white text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-md transition-colors whitespace-nowrap"
              >
                Talk to sales
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5h12M9 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#111] to-[#2a2a2a] p-6 md:p-10 flex items-center justify-center overflow-hidden">
                <div className="relative w-full aspect-video rounded-lg bg-black border border-[#31B24B]/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#31B24B]/20 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Ad
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                      <div className="h-full w-2/3 bg-[#31B24B]" />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] text-white/70">
                        Brand · Sponsored
                      </span>
                      <span className="text-[10px] text-white/70">0:12 / 0:18</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why brands choose MeTubez — 4 tile placeholder same */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Why brands choose MeTubez · 4 reasons
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Advertising built for Bharat.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="bg-white border border-[#eee] hover:border-[#31B24B] hover:shadow-lg hover:shadow-[#31B24B]/5 rounded-xl p-6 md:p-7 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#e8f5ec] flex items-center justify-center text-[#31B24B] font-black text-[16px] mb-4">
                    {r.icon}
                  </div>
                  <h3 className="text-[16px] md:text-[17px] font-black text-[#111] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#666] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad formats — 2 tabs */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Ad formats
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Two formats. One platform. Full landscape.
              </h2>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap mb-8 justify-center">
              {adFormats.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFormat(tab.key)}
                  className={`text-[13px] md:text-[14px] font-bold px-5 py-2.5 rounded-full transition-colors ${
                    activeFormat === tab.key
                      ? "bg-[#111] text-white"
                      : "bg-white text-[#666] border border-[#eee] hover:border-[#111] hover:text-[#111]"
                  }`}
                >
                  {tab.tab}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="rounded-2xl bg-gradient-to-br from-[#111] to-[#2a2a2a] aspect-video flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#31B24B]" />
                    {format.badge}
                  </div>
                  <div className="text-white text-[16px] md:text-[18px] font-black">
                    {format.title}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[22px] md:text-[26px] font-black text-[#111] mb-3">
                  {format.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed mb-6">
                  {format.intro}
                </p>
                <div className="border-t border-[#eee] pt-5 space-y-4">
                  <SpecRow label="Charged when" value={format.charged} />
                  <SpecRow label="CPM range" value={format.cpm} />
                  <SpecRow
                    label="Best for"
                    value={format.best}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Targeting */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Targeting options
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Reach the exact Bharat you want.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {targeting.map((t) => (
                <div
                  key={t.title}
                  className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6 md:p-7"
                >
                  <h3 className="text-[16px] md:text-[17px] font-black text-[#111] mb-2">
                    {t.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#666] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                How MeTubez Ads works · 4-step process
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Start advertising in a week.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {adsSteps.map((s) => (
                <div key={s.n}>
                  <div className="w-12 h-12 rounded-full border-2 border-[#111] bg-white flex items-center justify-center text-[16px] font-black text-[#111] mb-5">
                    {s.n}
                  </div>
                  <h3 className="text-[17px] md:text-[18px] font-black text-[#111] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#666] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="book-demo" className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-3">
                  Contact / Book demo
                </p>
                <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-4">
                  Talk to our brand team.
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#666] leading-relaxed mb-6">
                  Book a 30-minute demo. We&apos;ll walk you through our ad
                  formats, targeting options, and rate card. First 20
                  advertisers get a launch discount.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated brand strategist",
                    "Custom creative recommendations",
                    "Launch discount for first 20 partners",
                    "Priority campaign approval",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] md:text-[15px] text-[#333]"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#31B24B] text-white flex items-center justify-center text-[11px] font-black shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-[#f8f8f8] border border-[#eee] rounded-2xl p-6 md:p-8 space-y-4"
              >
                <Field
                  label="Your name"
                  name="name"
                  placeholder="Your full name"
                />
                <Field
                  label="Company / Agency name"
                  name="company"
                  placeholder="Your company or agency"
                />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                />
                <Select label="Estimated monthly budget" name="budget">
                  <option>Select range</option>
                  <option>Under ₹1L</option>
                  <option>₹1 – 5L</option>
                  <option>₹5 – 15L</option>
                  <option>₹15L+</option>
                </Select>
                <Select label="Campaign objective" name="objective">
                  <option>Select objective</option>
                  <option>Brand awareness</option>
                  <option>Performance</option>
                  <option>App installs</option>
                  <option>Other</option>
                </Select>
                <Select label="How did you hear about us?" name="source">
                  <option>Select source</option>
                  <option>Google</option>
                  <option>LinkedIn</option>
                  <option>Press</option>
                  <option>Referral</option>
                  <option>Other</option>
                </Select>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#31B24B] hover:bg-[#279940] text-black text-[14px] font-bold px-6 py-3.5 rounded-md transition-colors"
                >
                  Book demo
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5h12M9 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-[12px] text-[#999] text-center">
                  Our team responds within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Brand FAQ */}
        <section className="border-t border-[#eee] bg-[#fafafa]">
          <div className="max-w-[820px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                FAQ · for brands
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Common brand questions.
              </h2>
            </div>
            <div className="divide-y divide-[#eee] border-y border-[#eee] bg-white rounded-2xl px-6 md:px-8">
              {brandFaqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-bold text-[#111] pr-6">
                      {f.q}
                    </span>
                    <span className="faq-plus text-[22px] text-[#666] group-open:text-[#31B24B] shrink-0 w-6 text-center leading-none" />
                  </summary>
                  <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed pt-3">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {submitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-demo-confirm"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 md:p-9 max-w-[420px] w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-full bg-[#31B24B] text-white flex items-center justify-center text-[26px] font-black mx-auto mb-5">
              ✓
            </div>
            <p
              id="book-demo-confirm"
              className="text-[19px] font-black text-[#111] mb-2 leading-snug"
            >
              Thank you for your submission
            </p>
            <p className="text-[14px] text-[#666] leading-relaxed mb-6">
              Our team will get back to you.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full inline-flex items-center justify-center bg-[#31B24B] hover:bg-[#279940] text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#999] mb-1">
        {label}
      </div>
      <div className="text-[14px] md:text-[15px] text-[#111] font-medium">
        {value}
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  name,
  type = "text",
}: {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold text-[#333] mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] placeholder:text-[#aaa] focus:outline-none focus:border-[#31B24B] focus:ring-2 focus:ring-[#31B24B]/20"
      />
    </div>
  );
}

function Select({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold text-[#333] mb-1.5">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] focus:outline-none focus:border-[#31B24B] focus:ring-2 focus:ring-[#31B24B]/20"
      >
        {children}
      </select>
    </div>
  );
}
