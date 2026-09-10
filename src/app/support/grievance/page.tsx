export default function GrievancePage() {
  return (
    <article>
      <h1 className="text-[28px] md:text-[36px] font-black text-[#111] mb-2 leading-tight">
        Grievance Officer
      </h1>
      <p className="text-[14px] text-[#666] mb-10">
        In compliance with the Information Technology (Intermediary Guidelines
        and Digital Media Ethics Code) Rules, 2021.
      </p>

      <div className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-6 md:p-8 mb-8">
        <p className="text-[11px] font-black uppercase tracking-wider text-[#666] mb-3">
          Resident Grievance Officer
        </p>
        <p className="text-[20px] font-black text-[#111] mb-1">
          Mr. Utsav Solanki
        </p>
        <p className="text-[14px] text-[#555] mb-4">
          Twenties Entertainment Pvt Ltd
        </p>
        <div className="space-y-2">
          <p className="text-[14px] text-[#333]">
            <span className="font-bold">Email: </span>
            <a
              href="mailto:grievance@metubez.com"
              className="text-[#31B24B] hover:underline"
            >
              grievance@metubez.com
            </a>
          </p>
          <p className="text-[14px] text-[#333]">
            <span className="font-bold">Address: </span>
            602, 6th Floor, Anam 2, Ambli, Ahmedabad, Gujarat 380058, India
          </p>
          <p className="text-[14px] text-[#333]">
            <span className="font-bold">Response time: </span>
            Acknowledgement within 24 hours, resolution within 15 days
          </p>
        </div>
      </div>

      <div className="space-y-4 text-[14px] md:text-[15px] text-[#444] leading-relaxed">
        <h2 className="text-[17px] font-black text-[#111]">
          How to file a grievance
        </h2>
        <p>
          You may submit a grievance by emailing the Grievance Officer at{" "}
          <a
            href="mailto:grievance@metubez.com"
            className="text-[#31B24B] hover:underline"
          >
            grievance@metubez.com
          </a>{" "}
          with the following information:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your full name and contact details</li>
          <li>Nature of your grievance (content complaint, account issue, data concern, etc.)</li>
          <li>URL of the content in question (if applicable)</li>
          <li>Any supporting screenshots or evidence</li>
        </ul>
        <p>
          We will acknowledge your grievance within 24 hours and endeavour to
          resolve it within 15 days of receipt, as required under IT Rules 2021.
        </p>

        <h2 className="text-[17px] font-black text-[#111] mt-8">
          Nodal Officer (for government/law enforcement)
        </h2>
        <p>
          Government agencies and law enforcement may contact our Nodal Officer
          at{" "}
          <a
            href="mailto:nodalofficer@metubez.com"
            className="text-[#31B24B] hover:underline"
          >
            nodalofficer@metubez.com
          </a>
          .
        </p>
      </div>
    </article>
  );
}
