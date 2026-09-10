import PolicyShell from "../policy-shell";

export default function PrivacyPage() {
  return (
    <PolicyShell title="Privacy Policy" updated="September 2026">
      <p>
        MeTubez (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is operated by Twenties
        Entertainment Pvt Ltd, 602, 6th Floor, Anam 2, Ambli, Ahmedabad,
        Gujarat 380058, India.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, share, and protect
        your personal information when you use the MeTubez app or website. By
        using MeTubez, you agree to this policy.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly (name, email, phone number,
        content you upload), information generated when you use our services
        (view history, device identifiers, IP address), and information from
        third parties (login providers, payment processors).
      </p>
      <h2>How we use your information</h2>
      <p>
        We use your information to provide and improve the MeTubez service,
        calculate creator earnings, personalise your content feed, process
        payouts, send service communications, comply with legal obligations, and
        prevent fraud or abuse.
      </p>
      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal data. We share data with service providers
        who help us operate MeTubez (cloud hosting, payment processing,
        analytics), with brands only when you expressly opt-in to a brand deal,
        and with government authorities when legally required.
      </p>
      <h2>Data retention</h2>
      <p>
        We retain your account data for as long as your account is active. After
        deletion, we may retain certain data for up to 90 days for legal and
        fraud-prevention purposes.
      </p>
      <h2>Your rights</h2>
      <p>
        You may access, correct, or delete your personal data by writing to{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>. Indian
        users may also file grievances under the IT Rules, 2021.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy-related queries, contact our Grievance Officer: Mr. Utsav
        Solanki at <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>.
      </p>
      <p className="text-[13px] text-[#999] italic">
        Full policy content will be updated. This is a placeholder summary.
      </p>
    </PolicyShell>
  );
}
