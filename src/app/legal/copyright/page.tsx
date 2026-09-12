import PolicyShell from "@/components/PolicyShell";

export default function CopyrightPage() {
  return (
    <PolicyShell title="Copyright Policy" updated="September 2026">
      <p>
        MeTubez respects intellectual property rights. This Copyright Policy
        explains how we handle copyright complaints and how creators can protect
        their content.
      </p>
      <h2>DMCA / copyright takedown</h2>
      <p>
        If you believe content on MeTubez infringes your copyright, you may
        submit a takedown request to{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a> with
        the following information:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Your name and contact details</li>
        <li>Description of the copyrighted work claimed to be infringed</li>
        <li>URL of the infringing content on MeTubez</li>
        <li>A statement of good faith belief that the use is not authorised</li>
        <li>Your electronic or physical signature</li>
      </ul>
      <h2>Counter-notice</h2>
      <p>
        If you believe your content was removed incorrectly, you may submit a
        counter-notice with your contact details, identification of the removed
        content, and a statement under penalty of perjury that the removal was
        in error.
      </p>
      <h2>Repeat infringers</h2>
      <p>
        MeTubez will terminate accounts of users who are found to repeatedly
        infringe copyright.
      </p>
      <h2>Creator ownership</h2>
      <p>
        You retain full ownership of original content you upload to MeTubez.
        By uploading, you grant MeTubez a licence to display and distribute
        your content on the platform only.
      </p>
      <p className="text-[13px] text-[#999] italic">
        Full policy content will be updated. This is a placeholder summary.
      </p>
    </PolicyShell>
  );
}
