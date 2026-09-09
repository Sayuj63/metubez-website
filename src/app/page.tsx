import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    n: "1",
    title: "Landscape-first",
    desc: "Cinema-style horizontal viewing, no cramped vertical scroll.",
  },
  {
    n: "2",
    title: "Earn from Day 1",
    desc: "Monetise from your first video. No 1,000 subscriber wait.",
  },
  {
    n: "3",
    title: "6+ languages",
    desc: "Hindi, Bhojpuri, Marathi, Tamil, Telugu, Bengali and more.",
  },
  {
    n: "4",
    title: "Made in India",
    desc: "Built in Bharat, for Bharat. Data stays home.",
  },
];

const categories = [
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
];

const steps = [
  {
    n: 1,
    title: "Download the app",
    desc: "Free on Play Store and App Store. Sign up in seconds.",
  },
  {
    n: 2,
    title: "Watch or create",
    desc: "Discover Indian creators or upload your first video.",
  },
  {
    n: 3,
    title: "Earn as you grow",
    desc: "Monetisation starts from your first video. No wait.",
  },
];

const testimonials = [
  {
    quote:
      "Pehli hi video pe earning shuru ho gayi. MeTubez pe wait nahi karna padta.",
    name: "Priya Sharma",
    role: "Food creator, Ahmedabad",
    initial: "P",
  },
  {
    quote: "Landscape mein content dekhna feels like watching cinema on phone.",
    name: "Rahul Verma",
    role: "Viewer, Patna",
    initial: "R",
  },
  {
    quote: "Bharat ke creators ke liye finally kuch India ne banaya.",
    name: "Aakash Mehta",
    role: "Comedy creator, Indore",
    initial: "A",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f0fbf1] text-[#2ecc40] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc40]" />
                India&apos;s creator platform
              </div>
              <h1 className="text-[38px] md:text-[54px] leading-[1.05] font-black text-[#111] tracking-tight mb-6">
                The way the new India is meant to watch and create.
              </h1>
              <p className="text-[16px] md:text-[17px] text-[#555] leading-relaxed max-w-[520px]">
                India&apos;s landscape-first video platform. Watch, create and
                earn — all in one place, built for Bharat.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[5/4] rounded-2xl bg-gradient-to-br from-[#f0fbf1] via-white to-[#e6f9e8] border border-[#e5f2e6] p-6 md:p-10 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,204,64,0.12),transparent_65%)]" />
                  <div className="relative w-[220px] md:w-[260px] aspect-[9/19] rounded-[32px] bg-[#111] p-2 shadow-2xl shadow-[#2ecc40]/20">
                    <div className="w-full h-full rounded-[26px] bg-white overflow-hidden flex flex-col">
                      <div className="h-6 bg-[#111]" />
                      <div className="flex-1 bg-gradient-to-br from-[#2ecc40] to-[#26b336] flex items-center justify-center p-4">
                        <Image
                          src="/metubez-logo.png"
                          alt="MeTubez app"
                          width={130}
                          height={130}
                          className="rounded-2xl"
                        />
                      </div>
                      <div className="p-3 space-y-2 bg-white">
                        <div className="h-2 rounded-full bg-[#eee] w-4/5" />
                        <div className="h-2 rounded-full bg-[#eee] w-3/5" />
                        <div className="flex gap-1.5 pt-1">
                          <div className="h-6 flex-1 rounded bg-[#2ecc40]" />
                          <div className="h-6 flex-1 rounded bg-[#eee]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why MeTubez — 4-column features (kept same) */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-3">
                Content ka experience, ab landscape mein.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#666]">
                The way India is meant to watch and create.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((f) => (
                <div
                  key={f.n}
                  className="bg-white border border-[#eee] hover:border-[#2ecc40] hover:shadow-lg hover:shadow-[#2ecc40]/5 rounded-xl p-6 md:p-7 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f0fbf1] flex items-center justify-center text-[#2ecc40] font-black text-[15px] mb-4">
                    {f.n}
                  </div>
                  <h3 className="text-[16px] md:text-[17px] font-black text-[#111] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#666] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories — marquee, green bg, black text */}
        <section className="border-t border-[#eee] bg-white">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
              Content categories
            </p>
            <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
              Explore India, one video at a time.
            </h2>
          </div>
          <div className="pb-16 md:pb-20 overflow-hidden">
            <div className="marquee-track py-2">
              {[...categories, ...categories].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="inline-flex items-center whitespace-nowrap bg-[#2ecc40] text-black text-[14px] md:text-[15px] font-bold px-6 py-3 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How MeTubez works — 3 steps */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                How MeTubez works
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Get started in three simple steps.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {steps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-[#111] bg-white flex items-center justify-center text-[16px] font-black text-[#111] mb-5">
                    {s.n}
                  </div>
                  <h3 className="text-[19px] md:text-[20px] font-black text-[#111] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Split CTA — For creators + For brands */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#f8f8f8] border border-[#eee] rounded-2xl p-8 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                  For creators
                </p>
                <h3 className="text-[26px] md:text-[30px] font-black text-[#111] mb-3 leading-tight">
                  Become a MeTuber.
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed mb-6">
                  Join India&apos;s fastest-growing creator platform. Earn from
                  your first video with a fair, transparent structure.
                </p>
                <Link
                  href="/metubers"
                  className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#2ecc40] text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                >
                  Explore MeTubers program
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5h12M9 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="bg-[#111] text-white rounded-2xl p-8 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2ecc40] mb-3">
                  For brands
                </p>
                <h3 className="text-[26px] md:text-[30px] font-black mb-3 leading-tight">
                  Reach Bharat with MeTubez Ads.
                </h3>
                <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed mb-6">
                  The only landscape-first video platform in India. Cinematic ad
                  canvas built for real engagement.
                </p>
                <Link
                  href="/brands"
                  className="inline-flex items-center gap-2 bg-[#2ecc40] hover:bg-[#26b336] text-black text-[14px] font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                >
                  Advertise with us
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5h12M9 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Creator testimonials
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Loved by Bharat&apos;s creators.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white border border-[#eee] rounded-xl p-6 md:p-7"
                >
                  <p className="text-[14px] md:text-[15px] text-[#333] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2ecc40] text-white flex items-center justify-center font-black text-[14px]">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-[13px] font-black text-[#111]">
                        {t.name}
                      </div>
                      <div className="text-[12px] text-[#666]">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
