import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicyNav from "@/components/PolicyNav";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <aside className="md:w-[260px] shrink-0">
              <PolicyNav />
            </aside>
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
