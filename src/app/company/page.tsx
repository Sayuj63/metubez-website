import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="max-w-[820px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2ecc40] mb-4">
            Company
          </p>
          <h1 className="text-[40px] md:text-[54px] leading-[1.05] font-black text-[#111] tracking-tight mb-6">
            Built in Bharat, for Bharat.
          </h1>
          <p className="text-[16px] md:text-[17px] text-[#666] leading-relaxed">
            MeTubez is a product of Twenties Entertainment Pvt Ltd — an
            India-first video platform where creators earn from day one, brands
            reach real audiences, and content is finally watched the way it
            deserves: in landscape.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
