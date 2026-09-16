import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";
import { getT } from "@/i18n/server";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog · MeTubez" };
  const description = post.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return {
    title: `${post.title} · MeTubez Blog`,
    description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { t } = await getT();

  const next = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => a.day - b.day)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <article className="max-w-[760px] mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-14">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#31B24B] hover:underline mb-6"
          >
            <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
              <path
                d="M13 5H1M5 1L1 5l4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t("blogs.allBlogs")}
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#31B24B] bg-[#e8f5ec] px-2 py-1 rounded-full">
              {t("blogs.day")} {post.day}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wider text-[#999]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[30px] md:text-[44px] leading-[1.1] font-black text-[#111] tracking-tight mb-8">
            {post.title}
          </h1>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {next.length > 0 && (
          <section className="border-t border-[#eee] bg-[#fafafa]">
            <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-10 md:py-14">
              <h2 className="text-[20px] md:text-[24px] font-black text-[#111] mb-6">
                {t("blogs.more")}
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {next.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blogs/${p.slug}`}
                    className="block bg-white border border-[#eee] rounded-xl p-5 hover:border-[#31B24B] transition-colors"
                  >
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#31B24B]">
                      {t("blogs.day")} {p.day}
                    </span>
                    <p className="text-[14px] font-black text-[#111] leading-snug mt-2">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
