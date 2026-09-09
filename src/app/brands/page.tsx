import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reasons = [
  {
    icon: "▭",
    title: "Landscape canvas",
    desc: "Cinematic 16:9 ad format. No other Indian mobile platform offers this.",
  },
  {
    icon: "📍",
    title: "Bharat targeting",
    desc: "Reach Tier 2, 3, and 4 India by language, city, category and age.",
  },
  {
    icon: "📊",
    title: "Real-time analytics",
    desc: "Live campaign dashboard. Impressions, views, VTR, spend in one place.",
  },
  {
    icon: "✓",
    title: "Brand safety",
    desc: "Category exclusions, moderated inventory, IAB-compliant metrics.",
  },
];

const targeting = [
  {
    title: "Language",
    desc: "Hindi, Bhojpuri, Marathi, Tamil, Telugu, Bengali, English",
  },
  { title: "Geography", desc: "State, city, or Tier 2/3/4 clusters" },
  { title: "Category", desc: "Music, cooking, dance, comedy, and 8 more" },
  { title: "Demographics", desc: "Age band, gender, interests" },
];

const adsSteps = [
  {
    n: 1,
    title: "Sign up",
    desc: "Create your advertiser account and add funds.",
  },
  {
    n: 2,
    title: "Set up campaign",
    desc: "Upload creative, choose format, set targeting and budget.",
  },
  {
    n: 3,
    title: "Launch",
    desc: "Our team reviews and approves within 24 hours.",
  },
  {
    n: 4,
    title: "Optimise",
    desc: "Track performance live and adjust anytime.",
  },
];

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2ecc40] mb-4">
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
                className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#2ecc40] text-white text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-md transition-colors whitespace-nowrap"
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
                <div className="relative w-full aspect-video rounded-lg bg-black border border-[#2ecc40]/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc40]/20 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Ad
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                      <div className="h-full w-2/3 bg-[#2ecc40]" />
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
                  className="bg-white border border-[#eee] hover:border-[#2ecc40] hover:shadow-lg hover:shadow-[#2ecc40]/5 rounded-xl p-6 md:p-7 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f0fbf1] flex items-center justify-center text-[#2ecc40] font-black text-[16px] mb-4">
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

        {/* Ad formats */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Ad formats
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Formats built for landscape.
              </h2>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap mb-8 justify-center">
              {[
                "Skippable",
                "Non-skippable",
                "In-feed native",
                "Masthead",
                "BrandSafe",
              ].map((tab, i) => (
                <button
                  key={tab}
                  className={`text-[13px] md:text-[14px] font-bold px-5 py-2.5 rounded-full transition-colors ${
                    i === 0
                      ? "bg-[#111] text-white"
                      : "bg-white text-[#666] border border-[#eee] hover:border-[#111] hover:text-[#111]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="rounded-2xl bg-gradient-to-br from-[#111] to-[#2a2a2a] aspect-video flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc40]" />
                    Landscape 16:9
                  </div>
                  <div className="text-white text-[16px] md:text-[18px] font-black">
                    Skippable ad mockup
                  </div>
                  <div className="text-white/60 text-[12px] md:text-[13px] mt-1">
                    Skip after 5s
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[22px] md:text-[26px] font-black text-[#111] mb-3">
                  Skippable video ad
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed mb-6">
                  Runs before or during a video. Viewer can skip after 5 seconds.
                  You&apos;re charged only when viewers watch to 30 seconds or
                  complete the ad.
                </p>
                <div className="border-t border-[#eee] pt-5 space-y-4">
                  <SpecRow label="Format" value="Landscape 16:9 · up to 3 minutes" />
                  <SpecRow label="CPM range" value="₹40 – 80" />
                  <SpecRow
                    label="Best for"
                    value="Performance, app installs, e-commerce"
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
                Reach the audience that matters.
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
                From sign-up to live in 24 hours.
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
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2ecc40] mb-3">
                  Talk to our brand team
                </p>
                <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-4">
                  Let&apos;s launch your first campaign.
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#666] leading-relaxed mb-6">
                  Book a 30-minute call. We&apos;ll walk you through our ad
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
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2ecc40] text-white flex items-center justify-center text-[11px] font-black shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <form className="bg-[#f8f8f8] border border-[#eee] rounded-2xl p-6 md:p-8 space-y-4">
                <Field label="Your name" placeholder="Your full name" />
                <Field
                  label="Company / Agency"
                  placeholder="Your company or agency"
                />
                <Field
                  label="Work email"
                  type="email"
                  placeholder="you@company.com"
                />
                <Select label="Estimated monthly budget">
                  <option>Select range</option>
                  <option>Under ₹1 Lakh</option>
                  <option>₹1 – 5 Lakhs</option>
                  <option>₹5 – 25 Lakhs</option>
                  <option>₹25 Lakhs – 1 Cr</option>
                  <option>₹1 Cr+</option>
                </Select>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2ecc40] hover:bg-[#26b336] text-black text-[14px] font-bold px-6 py-3.5 rounded-md transition-colors"
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
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
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
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold text-[#333] mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] placeholder:text-[#aaa] focus:outline-none focus:border-[#2ecc40] focus:ring-2 focus:ring-[#2ecc40]/20"
      />
    </div>
  );
}

function Select({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold text-[#333] mb-1.5">
        {label}
      </label>
      <select
        defaultValue=""
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] focus:outline-none focus:border-[#2ecc40] focus:ring-2 focus:ring-[#2ecc40]/20"
      >
        {children}
      </select>
    </div>
  );
}
