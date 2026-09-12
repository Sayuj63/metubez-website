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
      <div className="space-y-5 text-[15px] text-[#444] leading-relaxed [&_h2]:text-[17px] [&_h2]:font-black [&_h2]:text-[#111] [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-[15px] [&_h3]:font-black [&_h3]:text-[#111] [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_a]:text-[#31B24B] [&_a:hover]:underline [&_table]:w-full [&_table]:border-collapse [&_table]:text-[14px] [&_table]:my-2 [&_th]:text-left [&_th]:font-black [&_th]:text-[#111] [&_th]:bg-[#f8f8f8] [&_th]:border [&_th]:border-[#eee] [&_th]:px-3.5 [&_th]:py-2.5 [&_td]:border [&_td]:border-[#eee] [&_td]:px-3.5 [&_td]:py-2.5 [&_td]:align-top">
        {children}
      </div>
    </article>
  );
}
