"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/context";


const benefits = [
  {
    icon: "/icons/icon-monetization.png",
    title: "Same rate for everyone",
    desc: "₹30 per 1,000 MeShort views. ₹100 per 1,000 Video views. Every creator, from Day 1.",
  },
  {
    icon: "/icons/icon-creator-badges.png",
    title: "No thresholds",
    desc: "No 1,000 subscribers. No 4,000 watch-hours. No tier system. Earn from your first view.",
  },
  {
    icon: "/icons/icon-brand-deals.png",
    title: "Brand deals",
    desc: "Get discovered by brands looking to work with Indian creators. Zero commission in year one.",
  },
  {
    icon: "/icons/icon-learn-grow.png",
    title: "Learn & grow",
    desc: "Access to creator playbooks, tips, and best practices.",
  },
  {
    icon: "/icons/icon-creator-support.png",
    title: "Creator support",
    desc: "Real humans on WhatsApp during business hours. Dedicated creator team.",
  },
  {
    icon: "/icons/icon-weekly-bonuses.png",
    title: "80% revenue share",
    desc: "MeTubez commits to sharing 80% of gross ad revenue with creators over the long term.",
  },
];

const startSteps = [
  {
    n: 1,
    title: "Download the app",
    desc: "Get MeTubez free on Play Store or App Store.",
  },
  {
    n: 2,
    title: "Create your profile",
    desc: "Choose a username, language, and content categories.",
  },
  {
    n: 3,
    title: "Upload your first video",
    desc: "Landscape format, any Indian language, any topic.",
  },
  {
    n: 4,
    title: "Start earning",
    desc: "Monetisation begins on view 1. Withdraw at ₹100.",
  },
];

const faqs = [
  {
    q: "How much can I earn on MeTubez?",
    a: "MeShorts earn ₹30 per 1,000 valid views. Videos earn ₹100 per 1,000 valid views. Same rate for every creator, from your first video — no tiers, no multipliers, no thresholds. 1 lakh MeShort views = ₹3,000. 1 lakh Video views = ₹10,000. 1 million Video views = ₹1,00,000.",
  },
  {
    q: "When do I get paid?",
    a: "Monetization goes live between Diwali and Christmas 2026. All views accumulated from your signup date count toward your earnings balance. Once monetization is live and your balance reaches ₹100, you can request a payout — processed via UPI or bank transfer in 3-5 working days. No upper limit, no cap on payout frequency, no processing fees.",
  },
  {
    q: "Do I need a minimum subscriber count?",
    a: "No. MeTubez has zero subscriber requirement to start earning. No 1,000 subscribers. No 4,000 watch-hours. No tier system. You earn from view 1 of your very first video at the same per-view rate as any other MeTuber.",
  },
  {
    q: "What languages does MeTubez support?",
    a: "MeTubez supports Hindi, Bhojpuri, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, Punjabi, Malayalam, Odia, Assamese, and English — with more Indian languages coming soon. Upload in the language your audience speaks. Content is discovered by language preference, so regional creators reach the right audiences.",
  },
  {
    q: "Why one flat rate for everyone?",
    a: "Traditional platforms punish new creators with subscriber gates and tier systems. MeTubez rewards content, not follower count. A first-time creator uploading their first MeShort earns the same rate as an established creator uploading their thousandth. Views are the currency. Content is the product. Everyone plays by the same rules.",
  },
  {
    q: "Can I use my existing YouTube content?",
    a: "Yes — you fully own your content and can re-upload anywhere. To get the best MeTubez experience, we recommend uploading in landscape 16:9 format because our platform is the world's first horizontal-scrollable video experience. Vertical videos will play but with letterboxing on the sides. If your YouTube content is already landscape, it's a perfect fit for MeTubez.",
  },
  {
    q: "What counts as a valid view?",
    a: "For MeShorts (up to 60 seconds), a valid view means someone watched at least 10 seconds or 50% of your video — whichever comes first. For Videos (over 60 seconds), a valid view means someone watched at least 30 seconds or 25% of your video. Same user max 2 views per video per 24 hours. Views from your own account don't count. These rules ensure your earnings reflect real, engaged viewers.",
  },
];

export default function MeTubersPage() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const stats = [
    { num: "10K+", label: t("metubers.statActiveMetubers") },
    { num: "₹100", label: t("metubers.statMinPayout") },
    { num: "13+", label: t("metubers.statLanguages") },
    { num: "Day 1", label: t("metubers.statMonetisation") },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !body.ok) {
        setErrorMsg(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrorMsg("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Program Hero */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-4">
            {t("metubers.kicker")}
          </p>
          <h1 className="text-[40px] md:text-[60px] leading-[1.05] font-black text-[#111] tracking-tight mb-5 max-w-[820px] mx-auto">
            {t("metubers.heroTitleLine1")}
            <br />
            {t("metubers.heroTitleLine2")}
          </h1>
          <p className="text-[16px] md:text-[17px] text-[#666] max-w-[560px] mx-auto mb-8 leading-relaxed">
            {t("metubers.heroSub")}
          </p>
          <div className="flex justify-center">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#31B24B] text-white text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-md transition-colors whitespace-nowrap"
            >
              {t("metubers.heroCta")}
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
        </section>

        {/* Stats band — 4 tile placeholder same */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pb-12 md:pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6 md:p-7 text-center"
              >
                <div className="text-[32px] md:text-[40px] font-black text-[#111] mb-1">
                  {s.num}
                </div>
                <div className="text-[12px] md:text-[13px] text-[#666]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits — 6-benefit grid */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                What&apos;s in it for you
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
                Unlock rewards as you grow.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#666]">
                Every MeTuber gets access to these benefits from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white border border-[#eee] hover:border-[#31B24B] hover:shadow-lg hover:shadow-[#31B24B]/5 rounded-xl p-6 md:p-7 transition-all text-center md:text-left"
                >
                  <div className="relative w-14 h-14 mb-4 mx-auto md:mx-0">
                    <Image
                      src={b.icon}
                      alt={b.title}
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[16px] md:text-[17px] font-black text-[#111] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#666] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How you earn — on MeShorts and Videos */}
        <section className="border-t border-[#eee] bg-[#fafafa]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                How you earn
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
                Same rate. Every creator. From your first video.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#666]">
                No 1,000 subscribers. No 4,000 watch-hours. No tier system.
                Every MeTuber earns the same per-view rate — first video or
                thousandth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-8">
              <div className="bg-white border border-[#eee] rounded-2xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-[#e8f5ec] text-[#31B24B] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  MeShorts · up to 60s
                </div>
                <h3 className="text-[22px] md:text-[24px] font-black text-[#111] mb-3">
                  ₹30 per 1,000 valid views
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  Fast, casual content. In-feed ads placed between every 5-7
                  MeShorts. Flat rate, applied from Day 1.
                </p>
              </div>
              <div className="bg-white border border-[#eee] rounded-2xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-[#e8f5ec] text-[#31B24B] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  Videos · over 60s
                </div>
                <h3 className="text-[22px] md:text-[24px] font-black text-[#111] mb-3">
                  ₹100 per 1,000 valid views
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  Long-form with pre-roll ads. Mid-roll ads on content over 3
                  minutes. Same flat rate for every creator.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#eee] rounded-2xl p-6 md:p-8">
              <h4 className="text-[13px] font-black uppercase tracking-wider text-[#111] mb-4">
                What counts as a valid view
              </h4>
              <ul className="grid md:grid-cols-2 gap-3 text-[14px] text-[#333]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#31B24B] text-white flex items-center justify-center text-[9px] font-black shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong className="font-black">MeShorts:</strong> viewer
                    watches at least 10 seconds or 50% of the video.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#31B24B] text-white flex items-center justify-center text-[9px] font-black shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong className="font-black">Videos:</strong> viewer
                    watches at least 30 seconds or 25% of the video.
                  </span>
                </li>
              </ul>
              <p className="text-[13px] text-[#666] italic mt-5 border-t border-[#eee] pt-4">
                Every view counted, every rupee earned — transparent, real-time,
                no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* How to start — 4 steps */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                How to start · 4 steps
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
                Start your MeTuber journey.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#666]">
                Sign up in minutes. First earnings in your first video.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {startSteps.map((s) => (
                <div key={s.n} className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 rounded-full border-2 border-[#111] bg-white flex items-center justify-center text-[16px] font-black text-[#111] mb-5">
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

        {/* Application form */}
        <section id="apply" className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-12">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <h2 className="text-[28px] md:text-[36px] font-black text-[#111] leading-tight mb-4">
                  Ready to become a MeTuber?
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#666] leading-relaxed mb-6">
                  Fill out this quick form and download the app. Our team will
                  guide you through your first video setup and help you get
                  started earning within 48 hours.
                </p>
                <ul className="space-y-3">
                  {[
                    "Zero signup fee",
                    "Approved within 24 hours",
                    "Free onboarding call for first 100 MeTubers",
                    "Payout at just ₹100 balance",
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
                  name="name"
                  label="Full name"
                  placeholder="Your full name"
                  required
                />
                <Field
                  name="phone"
                  label="Mobile number"
                  placeholder="+91 98765 43210"
                  type="tel"
                  required
                />
                <Field name="city" label="City" placeholder="Mumbai, Patna, etc." />
                <Select name="language" label="Primary content language">
                  <option value="">Select language</option>
                  <option>Hindi</option>
                  <option>Bhojpuri</option>
                  <option>Marathi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Bengali</option>
                  <option>English</option>
                </Select>
                <Select name="category" label="Content category">
                  <option value="">Select category</option>
                  {[
                    "Music",
                    "Podcasts",
                    "Cooking",
                    "Dance",
                    "Comedy",
                    "Education",
                    "Vlogs",
                    "Technology",
                    "Religious",
                    "Sports",
                    "Entertainment",
                    "Everyday India",
                  ].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
                {status === "sent" && (
                  <p className="text-[13px] font-semibold text-[#1e7e34] bg-[#e8f6ea] border border-[#bfe3c6] rounded-md px-3.5 py-2.5">
                    Application received. Our team will reach out within 24
                    hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[13px] font-semibold text-[#b3261e] bg-[#fdecea] border border-[#f5c6c2] rounded-md px-3.5 py-2.5">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#31B24B] hover:bg-[#279940] disabled:opacity-60 disabled:cursor-not-allowed text-black text-[14px] font-bold px-6 py-3.5 rounded-md transition-colors"
                >
                  {status === "sending" ? "Submitting…" : "Submit application"}
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
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[820px] mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-16">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                FAQ
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Common questions.
              </h2>
            </div>
            <div className="divide-y divide-[#eee] border-y border-[#eee]">
              {faqs.map((f) => (
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

        {/* Final CTA */}
        <section className="bg-[#f8f8f8] border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
            <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
              {t("metubers.finalTitle")}
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#666] mb-8">
              {t("metubers.finalSub")}
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#31B24B] hover:bg-[#279940] text-black text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-md transition-colors whitespace-nowrap"
            >
              {t("metubers.finalCta")}
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
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold text-[#333] mb-1.5">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] placeholder:text-[#aaa] focus:outline-none focus:border-[#31B24B] focus:ring-2 focus:ring-[#31B24B]/20"
      />
    </div>
  );
}

function Select({
  name,
  label,
  children,
}: {
  name: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold text-[#333] mb-1.5">
        {label}
      </label>
      <select
        name={name}
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] focus:outline-none focus:border-[#31B24B] focus:ring-2 focus:ring-[#31B24B]/20"
        defaultValue=""
      >
        {children}
      </select>
    </div>
  );
}
