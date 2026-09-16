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

        {/* Contact & Grievance */}
        <section id="contact" className="border-t border-[#eee]">
          <div className="max-w-[820px] mx-auto px-5 md:px-8 py-8 md:py-16">
            <h2 className="text-[24px] md:text-[30px] font-black text-[#111] mb-8">
              Contact &amp; Grievance
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6">
                <p className="text-[11px] font-black uppercase tracking-wider text-[#666] mb-2">
                  Resident Grievance Officer
                </p>
                <p className="text-[17px] font-black text-[#111] mb-1">
                  Mr. Utsav Solanki
                </p>
                <a
                  href="mailto:grievance@metubez.com"
                  className="text-[14px] text-[#31B24B] hover:underline"
                >
                  grievance@metubez.com
                </a>
                <p className="text-[13px] text-[#666] mt-2 leading-relaxed">
                  Kindly send all user related grievances to the above mentioned
                  email ID, in order for us to process and resolve the same in an
                  expeditious manner.
                </p>
              </div>
              <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6">
                <p className="text-[11px] font-black uppercase tracking-wider text-[#666] mb-2">
                  Nodal Contact Person
                </p>
                <p className="text-[17px] font-black text-[#111] mb-1">
                  Mr. Utsav Solanki
                </p>
                <a
                  href="mailto:nodalofficer@metubez.com"
                  className="text-[14px] text-[#31B24B] hover:underline"
                >
                  nodalofficer@metubez.com
                </a>
                <p className="text-[13px] text-[#666] mt-2 leading-relaxed">
                  This email is solely for use by police and investigating
                  agencies. This is not the correct email ID for user related
                  issues. For all user related grievances, kindly contact us at{" "}
                  <a
                    href="mailto:grievance@metubez.com"
                    className="text-[#31B24B] hover:underline"
                  >
                    grievance@metubez.com
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6">
              <p className="text-[11px] font-black uppercase tracking-wider text-[#666] mb-3">
                Registered Address
              </p>
              <p className="text-[15px] font-black text-[#111] mb-1">
                Twenties Entertainment Pvt Ltd
              </p>
              <p className="text-[14px] text-[#555] leading-relaxed">
                602, 6th Floor, Anam 2, Ambli,
                <br />
                Ahmedabad, Gujarat 380058, India
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
