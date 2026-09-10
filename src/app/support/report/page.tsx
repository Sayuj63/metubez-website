const categories = [
  { label: "Sexual or adult content", desc: "Nudity, explicit material, or content involving minors" },
  { label: "Hate speech or harassment", desc: "Content targeting individuals or groups based on religion, caste, gender, ethnicity" },
  { label: "Violence or graphic content", desc: "Graphic violence, gore, or content promoting self-harm" },
  { label: "Misinformation", desc: "False information that could cause public harm" },
  { label: "Spam or misleading content", desc: "Clickbait, fake thumbnails, or repetitive spam" },
  { label: "Copyright infringement", desc: "Content using your copyrighted work without permission" },
  { label: "Impersonation", desc: "Accounts or content falsely representing another person or brand" },
];

export default function ReportPage() {
  return (
    <article>
      <h1 className="text-[28px] md:text-[36px] font-black text-[#111] mb-2 leading-tight">
        Report Content
      </h1>
      <p className="text-[14px] text-[#666] mb-8">
        Help us keep MeTubez safe. Report content that violates our Community
        Guidelines.
      </p>

      <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6 mb-8">
        <p className="text-[14px] font-black text-[#111] mb-2">
          Fastest way to report
        </p>
        <p className="text-[14px] text-[#555] leading-relaxed">
          Use the <strong>three-dot menu (⋮)</strong> on any video or the{" "}
          <strong>flag icon</strong> on any profile in the MeTubez app to report
          directly. Our team reviews in-app reports within 24 hours.
        </p>
      </div>

      <h2 className="text-[17px] font-black text-[#111] mb-4">
        What can be reported
      </h2>
      <div className="divide-y divide-[#eee] border-y border-[#eee] mb-8">
        {categories.map((c) => (
          <div key={c.label} className="py-4">
            <p className="text-[14px] font-bold text-[#111] mb-0.5">{c.label}</p>
            <p className="text-[13px] text-[#666]">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6">
        <p className="text-[14px] font-black text-[#111] mb-1">
          Report by email
        </p>
        <p className="text-[13px] text-[#666]">
          For urgent or serious content violations, email{" "}
          <a
            href="mailto:grievance@metubez.com"
            className="text-[#31B24B] hover:underline"
          >
            grievance@metubez.com
          </a>{" "}
          with the video URL and a description of the violation. We respond
          within 24 hours.
        </p>
      </div>
    </article>
  );
}
