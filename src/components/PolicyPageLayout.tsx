import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicyNav from "@/components/PolicyNav";
import PolicyTranslate from "@/components/PolicyTranslate";

// Runs before first paint: if a translation is pending, hide the page so
// untranslated English never flashes. The timeout guarantees the page is
// revealed even if Google never responds or JS later fails.
const HOLD_PAINT = `(function(){try{var m=document.cookie.match(/(?:^|; )googtrans=([^;]*)/);var c=m?decodeURIComponent(m[1]).split('/')[2]:'';if(c&&c!=='en'){var d=document.documentElement;d.classList.add('gt-pending');setTimeout(function(){d.classList.remove('gt-pending')},2500);}}catch(e){}})();`;

export default function PolicyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: HOLD_PAINT }} />
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <aside className="md:w-[260px] shrink-0">
              <PolicyNav />
              <div className="mt-3">
                <PolicyTranslate />
              </div>
            </aside>
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
