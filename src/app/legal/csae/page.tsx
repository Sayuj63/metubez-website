import PolicyShell from "../policy-shell";

export default function CsaePage() {
  return (
    <PolicyShell
      title="CSAE Standards"
      updated="September 2026"
    >
      <p>
        MeTubez has a zero-tolerance policy toward Child Sexual Abuse and
        Exploitation (CSAE). We are committed to protecting minors on our
        platform.
      </p>
      <h2>Prohibited content</h2>
      <p>
        Any content that sexually exploits, depicts, or endangers minors is
        strictly forbidden. This includes depictions, simulations, written
        descriptions, or links to such material. Violating accounts will be
        permanently banned and reported to law enforcement.
      </p>
      <h2>Age safety</h2>
      <p>
        Users under 13 are not permitted to create accounts on MeTubez. Content
        that targets minors in a sexualised manner is prohibited regardless of
        the age of the creator.
      </p>
      <h2>Detection and reporting</h2>
      <p>
        MeTubez employs automated detection tools and human review to identify
        CSAE content. We report confirmed CSAE material to the National Centre
        for Missing & Exploited Children (NCMEC) and Indian law enforcement as
        required by law.
      </p>
      <h2>Reporting CSAE content</h2>
      <p>
        If you encounter any content that may involve child exploitation, report
        it immediately using the in-app report function or email{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>. We
        treat all such reports with urgency.
      </p>
      <p className="text-[13px] text-[#999] italic">
        Full standards content will be updated. This is a placeholder summary.
      </p>
    </PolicyShell>
  );
}
