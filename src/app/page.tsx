import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import { getT } from "@/i18n/server";

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

export default async function Home() {
  const { t } = await getT();

  const features = [
    { n: "01", title: t("home.feat1Title"), desc: t("home.feat1Desc") },
    { n: "02", title: t("home.feat2Title"), desc: t("home.feat2Desc") },
    { n: "03", title: t("home.feat3Title"), desc: t("home.feat3Desc") },
    { n: "04", title: t("home.feat4Title"), desc: t("home.feat4Desc") },
  ];

  const categories = [
    t("home.catMusic"),
    t("home.catPodcasts"),
    t("home.catCooking"),
    t("home.catDance"),
    t("home.catComedy"),
    t("home.catEducation"),
    t("home.catVlogs"),
    t("home.catTechnology"),
    t("home.catReligious"),
    t("home.catSports"),
    t("home.catEntertainment"),
    t("home.catEveryday"),
  ];

  const steps = [
    {
      n: 1,
      icon: "/icons/step-download.png",
      title: t("home.step1Title"),
      desc: t("home.step1Desc"),
    },
    {
      n: 2,
      icon: "/icons/step-watch.png",
      title: t("home.step2Title"),
      desc: t("home.step2Desc"),
    },
    {
      n: 3,
      icon: "/icons/step-earn.png",
      title: t("home.step3Title"),
      desc: t("home.step3Desc"),
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

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8f5ec] text-[#31B24B] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31B24B]" />
                {t("home.heroBadge")}
              </div>
              <h1 className="text-[42px] md:text-[64px] leading-[1] font-black text-[#111] tracking-tight mb-5">
                {t("home.heroTitle")}
              </h1>
              <p className="text-[17px] md:text-[19px] text-[#555] leading-relaxed max-w-[520px]">
                {t("home.heroSub")}
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
          <div className="relative w-full aspect-[3/2] md:aspect-[1440/420]">
            <Image
              src="/banners/banner-bharat.png"
              alt="India's creator community on MeTubez"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        {/* Why MeTubez — animated feature grid */}
        <section className="relative overflow-hidden border-t border-[#eee] bg-[radial-gradient(120%_120%_at_50%_-20%,#f1faf3_0%,#ffffff_55%)]">
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="text-center max-w-[1200px] mx-auto mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                {t("home.whyBadge")}
              </p>
              <h2 className="relative inline-block text-[26px] md:text-[36px] font-black text-[#111] leading-tight md:whitespace-nowrap">
                {t("home.whyTitle")}
                <span className="absolute -bottom-2 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#31B24B]/70" />
              </h2>
            </div>
            <FeatureGrid features={features} />
          </div>
        </section>

        {/* Landscape video visual */}
        <section className="border-t border-[#eee] bg-[#f8faf8]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-16">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[1200/450]">
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
              {t("home.categoriesBadge")}
            </p>
            <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-8">
              {t("home.categoriesTitle")}
            </h2>
          </div>
          <div className="bg-[#31B24B] overflow-hidden py-4 mb-12 md:mb-16">
            <div className="marquee-track">
              {[...categories, ...categories].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="inline-flex items-center whitespace-nowrap text-white text-[15px] md:text-[16px] font-bold px-4"
                >
                  {c}
                  <span className="ml-4 text-white/40">•</span>
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
                  {t("home.languagesBadge")}
                </p>
                <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight mb-4">
                  {t("home.languagesTitle")}
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#555] leading-relaxed">
                  {t("home.languagesDesc")}
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-8 md:py-16">
            <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                {t("home.stepsBadge")}
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                {t("home.stepsTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 md:gap-10">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-4 md:py-16">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[1200/400]">
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-8 md:py-16">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#f8f8f8] border border-[#eee] rounded-2xl p-7 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                  {t("home.forCreatorsKicker")}
                </p>
                <h3 className="text-[26px] md:text-[30px] font-black text-[#111] mb-3 leading-tight">
                  {t("home.forCreatorsTitle")}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed mb-6">
                  {t("home.forCreatorsDesc")}
                </p>
                <Link
                  href="/metubers"
                  className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#31B24B] text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                >
                  {t("home.forCreatorsCta")}
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
              <div className="bg-[#111] text-white rounded-2xl p-7 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-3">
                  {t("home.forBrandsKicker")}
                </p>
                <h3 className="text-[26px] md:text-[30px] font-black mb-3 leading-tight">
                  {t("home.forBrandsTitle")}
                </h3>
                <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed mb-6">
                  {t("home.forBrandsDesc")}
                </p>
                <Link
                  href="/brands"
                  className="inline-flex items-center gap-2 bg-[#31B24B] hover:bg-[#279940] text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                >
                  {t("home.forBrandsCta")}
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
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-6">
            <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#666] mb-3">
                {t("home.reviewsBadge")}
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                {t("home.reviewsTitle")}
              </h2>
            </div>
          </div>
          <div className="pb-12 md:pb-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
            <div className="reviews-track flex gap-5 w-max">
              {[...testimonials, ...testimonials].map((tm, i) => (
                <div
                  key={`${tm.name}-${i}`}
                  className="w-[320px] md:w-[360px] shrink-0 bg-white border border-[#eee] rounded-xl p-6 md:p-7"
                >
                  <p className="text-[14px] md:text-[15px] text-[#333] leading-relaxed italic mb-6">
                    &ldquo;{tm.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#31B24B] text-white flex items-center justify-center font-black text-[14px]">
                      {tm.initial}
                    </div>
                    <div>
                      <div className="text-[13px] font-black text-[#111]">
                        {tm.name}
                      </div>
                      <div className="text-[12px] text-[#666]">{tm.role}</div>
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
