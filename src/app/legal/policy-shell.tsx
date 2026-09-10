export default function PolicyShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="prose-policy">
      <h1 className="text-[28px] md:text-[36px] font-black text-[#111] mb-2 leading-tight">
        {title}
      </h1>
      <p className="text-[13px] text-[#999] mb-8">Last updated: {updated}</p>
      <div className="space-y-5 text-[15px] text-[#444] leading-relaxed [&_h2]:text-[17px] [&_h2]:font-black [&_h2]:text-[#111] [&_h2]:mt-8 [&_h2]:mb-3 [&_a]:text-[#31B24B] [&_a:hover]:underline">
        {children}
      </div>
    </article>
  );
}
