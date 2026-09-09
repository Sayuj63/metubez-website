import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { num: "10K+", label: "Active MeTubers" },
  { num: "₹100", label: "Minimum payout" },
  { num: "13+", label: "Languages supported" },
  { num: "Day 1", label: "Monetisation starts" },
];

const benefits = [
  {
    icon: "₹",
    title: "Monetisation",
    desc: "Earn from your first video. Fair per-view rate + quality multiplier.",
  },
  {
    icon: "★",
    title: "Creator badges",
    desc: "Progress from Bronze to Platinum. Higher tiers, higher rewards.",
  },
  {
    icon: "🏆",
    title: "Weekly bonuses",
    desc: "Top-performing MeTubers win extra rewards every week.",
  },
  {
    icon: "🎯",
    title: "Brand deals",
    desc: "Get discovered by brands looking to work with Indian creators.",
  },
  {
    icon: "📚",
    title: "Learn & grow",
    desc: "Access to creator playbooks, tips, and best practices.",
  },
  {
    icon: "👥",
    title: "Creator support",
    desc: "Dedicated creator support team for verified MeTubers.",
  },
];

const tiers = [
  {
    name: "Bronze",
    tagline: "All new MeTubers",
    coin: "/coin-bronze.jpg",
    req: "Sign up + upload 1 video",
    perks: [
      "Earn from Day 1",
      "Base per-view rate",
      "Payout at ₹100",
      "Instant onboarding (no waiting)",
    ],
  },
  {
    name: "Silver",
    tagline: "Growing creator",
    coin: "/coin-silver.jpg",
    req: "10 videos published + 5,000 total views",
    perks: [
      "1.3× base earning rate",
      "Priority creator support",
      "Weekly leaderboard visibility",
    ],
  },
  {
    name: "Gold",
    tagline: "Established creator",
    coin: "/coin-gold.jpg",
    req: "500 subscribers + 50,000 total views",
    perks: [
      "1.7× base earning rate",
      "Verified MeTuber badge",
      "Brand deal eligibility",
    ],
    highlight: true,
  },
  {
    name: "Platinum",
    tagline: "Elite MeTuber",
    coin: "/coin-platinum.jpg",
    req: "Top 5% of creators (invite only)",
    perks: [
      "2.5× base earning rate",
      "Dedicated creator manager",
      "Exclusive brand campaigns",
    ],
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
    a: "Your earnings depend on how many valid views your content gets, your tier, and content format (Meshorts vs Videos). Bronze creators start at the base per-view rate. Rates multiply as you progress: Silver (1.3×), Gold (1.7×), Platinum (2.5×). Videos over 30 seconds earn 2-3× more per view than Meshorts because ad attention is deeper. Consistent uploaders can reach ₹100 payout in their first 2-4 weeks.",
  },
  {
    q: "When do I get paid?",
    a: "You can request a payout the moment your balance hits ₹100. Our team processes payments via UPI or bank transfer within 3-5 working days of your request. There's no upper limit on how much you can withdraw at once, and no cap on how often you can request payouts.",
  },
  {
    q: "Do I need a minimum subscriber count?",
    a: "No. Unlike other platforms, MeTubez has zero subscriber requirement to start earning. You earn from view 1 of your very first video. Subscriber counts only matter for tier progression (500 subs unlocks Gold tier, for example), but not for basic monetisation.",
  },
  {
    q: "What languages does MeTubez support?",
    a: "MeTubez supports Hindi, Bhojpuri, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, Punjabi, Malayalam, Odia, Assamese, and English — with more Indian languages coming soon. Upload in the language your audience speaks. Content is discovered by language preference, so regional creators reach the right audiences.",
  },
  {
    q: "How is the tier system calculated?",
    a: "Tier progression is automatic. Bronze is where every MeTuber starts. Silver unlocks after 10 videos published + 5,000 total views. Gold unlocks at 500 subscribers + 50,000 total views. Platinum is invite-only for our top 5% of performers based on consistent uploads, quality metrics, and audience engagement. No manual application needed for Bronze, Silver, or Gold — you progress automatically as you meet each tier's criteria.",
  },
  {
    q: "Can I use my existing YouTube content?",
    a: "Yes — you fully own your content and can re-upload anywhere. To get the best MeTubez experience, we recommend uploading in landscape 16:9 format because our platform is the world's first horizontal-scrollable video experience. Vertical videos will play but with letterboxing on the sides. If your YouTube content is already landscape, it's a perfect fit for MeTubez.",
  },
  {
    q: "What counts as a valid view?",
    a: "For Meshorts (up to 30 seconds), a valid view means someone watched at least 3 seconds or 50% of your video — whichever is shorter. For Videos (over 30 seconds), a valid view means someone watched at least 30 seconds or 25% of your video — whichever is shorter. Same user max 2 views per video per 24 hours. Views from your own account don't count. These rules ensure your earnings reflect real, engaged viewers.",
  },
];

export default function MeTubersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Program Hero */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-16 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#57a554] mb-4">
            MeTubers · Creator program
          </p>
          <h1 className="text-[40px] md:text-[60px] leading-[1.05] font-black text-[#111] tracking-tight mb-5 max-w-[820px] mx-auto">
            Become a MeTuber.
            <br />
            Earn from your first video.
          </h1>
          <p className="text-[16px] md:text-[17px] text-[#666] max-w-[560px] mx-auto mb-8 leading-relaxed">
            Join the fastest-growing creator community in India. Fair
            monetisation, transparent tiers, real rewards.
          </p>
          <div className="flex justify-center">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#57a554] text-white text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-md transition-colors whitespace-nowrap"
            >
              Start your journey
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
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pb-16 md:pb-20">
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
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
                  className="bg-white border border-[#eee] hover:border-[#57a554] hover:shadow-lg hover:shadow-[#57a554]/5 rounded-xl p-6 md:p-7 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#eaf4e8] flex items-center justify-center text-[18px] mb-4">
                    <span className="text-[#57a554] font-black">{b.icon}</span>
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

        {/* Tier progression */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Tier progression · 4 tiers
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
                Your MeTuber journey.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#666]">
                Progress through 4 tiers. Every tier unlocks higher earnings.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`rounded-2xl p-6 md:p-7 border transition-all ${
                    t.highlight
                      ? "bg-[#111] text-white border-[#111] shadow-xl shadow-black/10"
                      : "bg-white text-[#111] border-[#eee] hover:border-[#57a554] hover:shadow-lg hover:shadow-[#57a554]/5"
                  }`}
                >
                  <div className="flex justify-center mb-5">
                    <div
                      className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ${
                        t.highlight
                          ? "ring-2 ring-[#57a554]"
                          : "ring-1 ring-[#eee]"
                      }`}
                    >
                      <Image
                        src={t.coin}
                        alt={`${t.name} coin`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-[20px] md:text-[22px] font-black mb-1 ${
                        t.highlight ? "text-[#57a554]" : "text-[#111]"
                      }`}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-[13px] mb-2 font-bold ${
                        t.highlight ? "text-white/90" : "text-[#333]"
                      }`}
                    >
                      {t.tagline}
                    </div>
                    <div
                      className={`text-[11.5px] leading-relaxed mb-5 ${
                        t.highlight ? "text-white/60" : "text-[#777]"
                      }`}
                    >
                      {t.req}
                    </div>
                  </div>
                  <ul
                    className={`text-left text-[13px] leading-relaxed border-t pt-4 space-y-2 ${
                      t.highlight ? "border-white/20" : "border-[#eee]"
                    }`}
                  >
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#57a554]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How you earn — on Meshorts and Videos */}
        <section className="border-t border-[#eee] bg-[#fafafa]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                How you earn
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
                Meshorts and Videos. Same feed, different rates.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#666]">
                Both content formats live in the same feed. Different lengths,
                different earnings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-8">
              <div className="bg-white border border-[#eee] rounded-2xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-[#eaf4e8] text-[#57a554] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  Meshorts · up to 30s
                </div>
                <h3 className="text-[22px] md:text-[24px] font-black text-[#111] mb-3">
                  ₹4 – ₹14 per 1,000 views
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  Fast, casual content. Ads run natively between Meshorts. Rate
                  based on your tier.
                </p>
              </div>
              <div className="bg-white border border-[#eee] rounded-2xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-[#eaf4e8] text-[#57a554] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  Videos · over 30s
                </div>
                <h3 className="text-[22px] md:text-[24px] font-black text-[#111] mb-3">
                  ₹12 – ₹45 per 1,000 views
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  Long-form with pre-roll and mid-roll ads. Higher earning rates
                  because attention is deeper.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#eee] rounded-2xl p-6 md:p-8">
              <h4 className="text-[13px] font-black uppercase tracking-wider text-[#111] mb-4">
                What counts as a valid view
              </h4>
              <ul className="grid md:grid-cols-2 gap-3 text-[14px] text-[#333]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#57a554] text-white flex items-center justify-center text-[9px] font-black shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong className="font-black">Meshorts:</strong> viewer
                    watches at least 3 seconds or 50% of the video.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#57a554] text-white flex items-center justify-center text-[9px] font-black shrink-0">
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
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
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#57a554] text-white flex items-center justify-center text-[11px] font-black shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <form className="bg-[#f8f8f8] border border-[#eee] rounded-2xl p-6 md:p-8 space-y-4">
                <Field label="Full name" placeholder="Your full name" />
                <Field
                  label="Mobile number"
                  placeholder="+91 98765 43210"
                  type="tel"
                />
                <Field label="City" placeholder="Mumbai, Patna, etc." />
                <Select label="Primary content language">
                  <option>Select language</option>
                  <option>Hindi</option>
                  <option>Bhojpuri</option>
                  <option>Marathi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Bengali</option>
                  <option>English</option>
                </Select>
                <Select label="Content category">
                  <option>Select category</option>
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
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#57a554] hover:bg-[#4a9346] text-black text-[14px] font-bold px-6 py-3.5 rounded-md transition-colors"
                >
                  Submit application
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
          <div className="max-w-[820px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center mb-12">
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
                    <span className="faq-plus text-[22px] text-[#666] group-open:text-[#57a554] shrink-0 w-6 text-center leading-none" />
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
              India ka apna platform. Aapka apna future.
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#666] mb-8">
              Apply now and become part of India&apos;s creator revolution.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#57a554] hover:bg-[#4a9346] text-black text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-md transition-colors whitespace-nowrap"
            >
              Become a MeTuber
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
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] placeholder:text-[#aaa] focus:outline-none focus:border-[#57a554] focus:ring-2 focus:ring-[#57a554]/20"
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
        className="w-full bg-white border border-[#ddd] rounded-md px-3.5 py-2.5 text-[14px] text-[#111] focus:outline-none focus:border-[#57a554] focus:ring-2 focus:ring-[#57a554]/20"
        defaultValue=""
      >
        {children}
      </select>
    </div>
  );
}
