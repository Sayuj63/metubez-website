import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const policies = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Community Guidelines", href: "/legal/community" },
  { label: "CSAE Standards", href: "/legal/csae" },
  { label: "Copyright Policy", href: "/legal/copyright" },
];

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
            {/* Sidebar */}
            <aside className="md:w-[220px] shrink-0">
              <p className="text-[11px] font-black uppercase tracking-wider text-[#666] mb-4">
                Legal
              </p>
              <nav className="flex flex-col gap-1">
                {policies.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="text-[14px] text-[#555] hover:text-[#31B24B] py-1.5 border-l-2 border-transparent hover:border-[#31B24B] pl-3 transition-colors"
                  >
                    {p.label}
                  </Link>
                ))}
              </nav>
            </aside>
            {/* Content */}
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
