const contacts = [
  {
    role: "General Support",
    email: "support@metubez.com",
    desc: "App issues, account help, payout queries",
    sla: "Response within 24 hours",
  },
  {
    role: "Creator Support",
    email: "creators@metubez.com",
    desc: "MeTubers program, tier progression, content questions",
    sla: "Response within 24 hours",
  },
  {
    role: "Brand & Advertising",
    email: "brands@metubez.com",
    desc: "Ad campaigns, brand partnerships, media buying",
    sla: "Response within 24 hours",
  },
  {
    role: "Grievance Officer",
    email: "grievance@metubez.com",
    desc: "Formal grievances under IT Rules 2021, legal notices",
    sla: "Acknowledgement within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <article>
      <h1 className="text-[28px] md:text-[36px] font-black text-[#111] mb-2 leading-tight">
        Contact Support
      </h1>
      <p className="text-[14px] text-[#666] mb-10">
        Choose the right channel for the fastest response.
      </p>

      <div className="grid gap-4 mb-10">
        {contacts.map((c) => (
          <div
            key={c.role}
            className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6"
          >
            <p className="text-[11px] font-black uppercase tracking-wider text-[#666] mb-1">
              {c.role}
            </p>
            <a
              href={`mailto:${c.email}`}
              className="text-[17px] font-black text-[#31B24B] hover:underline"
            >
              {c.email}
            </a>
            <p className="text-[13px] text-[#555] mt-1">{c.desc}</p>
            <p className="text-[12px] text-[#999] mt-1">{c.sla}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#eee] rounded-xl p-6">
        <p className="text-[14px] font-black text-[#111] mb-1">Registered Office</p>
        <p className="text-[14px] text-[#555] leading-relaxed">
          Twenties Entertainment Pvt Ltd
          <br />
          602, 6th Floor, Anam 2, Ambli,
          <br />
          Ahmedabad, Gujarat 380058, India
        </p>
      </div>
    </article>
  );
}
