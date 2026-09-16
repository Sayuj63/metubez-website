import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";
import { getT } from "@/i18n/server";

export const metadata = {
  title: "MeTubez Blog — India's creator economy, from the inside",
  description:
    "Long-form thinking from the team building MeTubez: creator monetisation, the vernacular internet, and India's next chapter.",
};

function excerpt(html: string, max = 200) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

export default async function BlogsIndex() {
  const { t } = await getT();
  const posts = [...blogPosts].sort((a, b) => a.day - b.day);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="max-w-[820px] mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-6 md:pb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#31B24B] mb-4">
            {t("blogs.kicker")}
          </p>
          <h1 className="text-[36px] md:text-[52px] leading-[1.05] font-black text-[#111] tracking-tight mb-4">
            {t("blogs.heroTitle")}
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#666] leading-relaxed">
            {t("blogs.heroSub")}
          </p>
        </section>

        <section className="border-t border-[#eee]">
          <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-8 md:py-14">
            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group block bg-white border border-[#eee] rounded-2xl p-6 md:p-7 hover:border-[#31B24B] hover:shadow-[0_10px_30px_-15px_rgba(49,178,75,0.35)] transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#31B24B] bg-[#e8f5ec] px-2 py-1 rounded-full">
                      {t("blogs.day")} {post.day}
                    </span>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider text-[#666]"
                      >
                        · {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-[18px] md:text-[20px] font-black text-[#111] leading-tight mb-3 group-hover:text-[#31B24B] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                    {excerpt(post.content)}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#31B24B] mt-5">
                    {t("blogs.readArticle")}
                    <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
                      <path
                        d="M1 5h12M9 1l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
