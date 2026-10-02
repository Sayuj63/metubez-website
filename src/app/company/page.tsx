import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getT } from "@/i18n/server";

export default async function CompanyPage() {
  const { t } = await getT();
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="max-w-[820px] mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-4 md:pb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-4">
            {t("company.kicker")}
          </p>
          <h1 className="text-[40px] md:text-[54px] leading-[1.05] font-black text-[#111] tracking-tight mb-6">
            {t("company.heroTitle")}
          </h1>
          <p className="text-[16px] md:text-[17px] text-[#666] leading-relaxed">
            {t("company.heroSub")}
          </p>
        </section>

        {/* App intro — vertical (9:16) video */}
        <section className="border-t border-[#eee]">
          <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-8 md:py-16">
            <div className="text-center max-w-[720px] mx-auto mb-8 md:mb-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-3">
                App intro
              </p>
              <h2 className="text-[28px] md:text-[38px] font-black text-[#111] leading-tight">
                See MeTubez in action.
              </h2>
            </div>
            <div className="w-full max-w-[360px] mx-auto aspect-[9/16] rounded-2xl bg-[#f8f8f8] border border-[#eee] overflow-hidden">
              <video
                src="/app-intro.mp4"
                poster="/app-intro-poster.jpg"
                autoPlay
                muted
                loop
                controls
                playsInline
                aria-label="MeTubez app intro video"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
