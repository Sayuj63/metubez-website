import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    n: "01",
    title: "Scroll horizontally",
    desc: "Wide-screen video. Same easy scroll.",
  },
  {
    n: "02",
    title: "Earn from ₹100",
    desc: "Your first video can be your first step toward earning.",
  },
  {
    n: "03",
    title: "India speaks. We listen.",
    desc: "26+ languages. Regional creators. One platform.",
  },
  {
    n: "04",
    title: "Made here. Built everywhere.",
    desc: "Made in India, designed for the world.",
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
    icon: "/icons/step-download.png",
    title: "Download the app",
    desc: "Free on Play Store and App Store. Sign up in seconds.",
  },
  {
    n: 2,
    icon: "/icons/step-watch.png",
    title: "Watch or create",
    desc: "Discover Indian creators or upload your first video.",
  },
  {
    n: 3,
    icon: "/icons/step-earn.png",
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
  {
    quote:
      "Ek hafte mein Silver tier unlock ho gaya. Payout bhi seedha UPI pe.",
    name: "Neha Kulkarni",
    role: "Dance creator, Pune",
    initial: "N",
  },
  {
    quote:
      "Bhojpuri content ke liye MeTubez sabse best platform hai — sahi audience milti hai.",
    name: "Vikas Prasad",
    role: "Music creator, Varanasi",
    initial: "V",
  },
  {
    quote:
      "Landscape videos kaise banate hain, seedha tutorial dekhne ko mila. Very helpful.",
    name: "Anjali Thakur",
    role: "Vlogger, Dehradun",
    initial: "A",
  },
  {
    quote:
      "First-time creator hoon, aur pehle mahine mein hi ₹1,200 kama liye. Amazing feeling.",
    name: "Ravi Kumar",
    role: "Comedy creator, Lucknow",
    initial: "R",
  },
  {
    quote:
      "Ads bhi seamlessly integrate hote hain, viewer experience never breaks.",
    name: "Sneha Iyer",
    role: "Viewer, Chennai",
    initial: "S",
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
              <div className="inline-flex items-center gap-2 bg-[#e8f5ec] text-[#31B24B] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31B24B]" />
                India&apos;s creator platform
              </div>
              <h1 className="text-[46px] md:text-[68px] leading-[1] font-black text-[#111] tracking-tight mb-6">
                Create. Share. Monetize.
              </h1>
              <p className="text-[17px] md:text-[19px] text-[#555] leading-relaxed max-w-[520px]">
                World&apos;s first horizontal scrollable video platform.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden bg-[#e8f5ec]">
                <Image
                  src="/banners/banner-horizontal.png"
                  alt="MeTubez horizontal scrolling experience"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full-width creator showcase */}
        <section className="border-t border-[#eee] overflow-hidden bg-[#f8faf8]">
          <div className="relative w-full" style={{ aspectRatio: "1440/420" }}>
            <Image
              src="/banners/banner-bharat.png"
              alt="India's creator community on MeTubez"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        {/* Why MeTubez — 4-column features */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-[1200px] mx-auto mb-12">
              <h2 className="text-[24px] md:text-[36px] font-black text-[#111] leading-tight md:whitespace-nowrap">
                Content ka experience, ab landscape mein.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((f) => (
                <div
                  key={f.n}
                  className="bg-white border border-[#eee] hover:border-[#31B24B] hover:shadow-lg hover:shadow-[#31B24B]/5 rounded-xl p-6 md:p-7 transition-all"
                >
                  <div className="inline-flex items-center h-8 px-2.5 rounded-md bg-[#e8f5ec] text-[#31B24B] font-black text-[13px] tracking-wider mb-4">
                    {f.n}
                  </div>
                  <h3 className="text-[16px] md:text-[17px] font-black text-[#111] mb-2 leading-tight">
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

        {/* Landscape video visual */}
        <section className="border-t border-[#eee] bg-[#f8faf8]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1200/450" }}>
              <Image
                src="/banners/banner-landscape.png"
                alt="Landscape video experience on MeTubez"
                fill
                sizes="(max-width: 1240px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Categories — solid green strip with white scrolling text */}
        <section className="border-t border-b border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
              Content categories
            </p>
            <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-10">
              Explore India, one video at a time.
            </h2>
          </div>
          <div className="bg-[#31B24B] overflow-hidden py-4 mb-16 md:mb-20">
            <div className="marquee-track">
              {[...categories, ...categories].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="inline-flex items-center whitespace-nowrap text-white text-[15px] md:text-[16px] font-bold px-6"
                >
                  {c}
                  <span className="ml-6 text-white/40">•</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* India map visual */}
        <section className="border-t border-[#eee] bg-[#f8faf8]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                  From every corner of India
                </p>
                <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-4">
                  One platform, every language.
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#555] leading-relaxed">
                  MeTubez supports 26+ Indian languages. Whether you speak
                  Hindi, Tamil, Bhojpuri, or Marathi — your audience is here.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="/banners/banner-map.png"
                  alt="MeTubez across India"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How MeTubez works — 3 steps with icons */}
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
                <div key={s.n} className="relative flex flex-col items-start">
                  <div className="relative w-20 h-20 mb-5">
                    <Image
                      src={s.icon}
                      alt={s.title}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
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

        {/* Create-earn visual */}
        <section className="border-t border-[#eee] bg-[#f8faf8]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1200/400" }}>
              <Image
                src="/banners/banner-create-earn.png"
                alt="Create, upload, earn on MeTubez"
                fill
                sizes="(max-width: 1240px) 100vw, 1200px"
                className="object-cover object-center"
              />
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
                  className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#31B24B] text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
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
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-3">
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
                  className="inline-flex items-center gap-2 bg-[#31B24B] hover:bg-[#279940] text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
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

        {/* Testimonials — auto-scroll marquee */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-6">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                Creator testimonials
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                Loved by Bharat&apos;s creators.
              </h2>
            </div>
          </div>
          <div className="pb-16 md:pb-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
            <div className="reviews-track flex gap-5 w-max">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="w-[320px] md:w-[360px] shrink-0 bg-white border border-[#eee] rounded-xl p-6 md:p-7"
                >
                  <p className="text-[14px] md:text-[15px] text-[#333] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#31B24B] text-white flex items-center justify-center font-black text-[14px]">
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
