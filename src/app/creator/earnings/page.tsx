import PolicyShell from "@/components/PolicyShell";

export default function CreatorEarningsPage() {
  return (
    <PolicyShell title="Creator Earnings Policy" updated="01 September 2026">
      <h2>Overview</h2>
      <p>
        This policy explains how you earn money on MeTubez as a MeTuber. It
        covers how earnings are calculated, when payments are made, tier
        progression, and everything you need to know to plan your creator career
        on our platform.
      </p>
      <p>
        Read this alongside our{" "}
        <a href="/creator/view-counting">View Counting Policy</a> and{" "}
        <a href="/creator/agreement">Creator Agreement</a>.
      </p>

      <h2>The core promise</h2>
      <p>
        On MeTubez, you start earning from your very first video. There is no
        subscriber threshold, no watch-time minimum, and no approval process
        before monetization begins.
      </p>
      <p>
        Every valid view on your content generates earnings at your current tier
        rate. You can withdraw your earnings once your balance reaches ₹100.
      </p>

      <h2>How you earn</h2>
      <p>
        Your earnings are calculated on a per-view basis. Different rates apply
        to different content formats and to your creator tier.
      </p>

      <h3>Content formats</h3>
      <p>
        Meshorts are videos up to 30 seconds long. They appear in the
        horizontal-scroll feed with native in-feed ads placed between every 5 to
        7 Meshorts.
      </p>
      <p>
        Videos are longer than 30 seconds. They carry pre-roll ads before
        playback and mid-roll ads for videos over three minutes.
      </p>
      <p>
        Both formats generate earnings for creators. Videos earn at a higher
        per-view rate because ad attention is deeper.
      </p>

      <h3>Per-view rates by tier</h3>
      <div className="overflow-x-auto">
        <table className="min-w-[440px]">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Meshorts (per 1,000 valid views)</th>
              <th>Videos (per 1,000 valid views)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bronze</td>
              <td>₹4</td>
              <td>₹12</td>
            </tr>
            <tr>
              <td>Silver</td>
              <td>₹6</td>
              <td>₹18</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>₹9</td>
              <td>₹28</td>
            </tr>
            <tr>
              <td>Platinum</td>
              <td>₹14</td>
              <td>₹45</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Rates are subject to periodic review based on platform-wide ad revenue
        and market conditions. Any rate changes are notified at least 30 days in
        advance via email and in-app notification. Content already uploaded
        continues to earn at the rate in effect at time of upload for the first
        30 days after a change.
      </p>

      <h2>The MeTuber tier system</h2>
      <p>
        Every creator starts as a Bronze MeTuber. Progression is automatic and
        based on measurable criteria. There is no application, approval, or
        waiting list for Bronze, Silver, or Gold tiers.
      </p>

      <h3>Bronze</h3>
      <p>Requirement: Sign up and upload one video</p>
      <p>What you get:</p>
      <ul>
        <li>Earn from your first video at Bronze rates</li>
        <li>Real-time earnings dashboard</li>
        <li>Instant access, no approval wait</li>
        <li>Payout at ₹100 balance</li>
      </ul>
      <p>
        Bronze is where every MeTuber starts. You remain at Bronze until you
        meet the criteria for Silver.
      </p>

      <h3>Silver</h3>
      <p>
        Requirement: 10 videos published AND 5,000 total valid views across your
        content
      </p>
      <p>What you unlock:</p>
      <ul>
        <li>1.5x higher per-view rate than Bronze</li>
        <li>Priority creator support</li>
        <li>Weekly leaderboard visibility</li>
        <li>Access to featured content spots</li>
      </ul>

      <h3>Gold</h3>
      <p>
        Requirement: 500 subscribers AND 50,000 total valid views across your
        content
      </p>
      <p>What you unlock:</p>
      <ul>
        <li>2.25x higher per-view rate than Bronze</li>
        <li>Verified MeTuber badge on your profile</li>
        <li>Brand deal marketplace access</li>
        <li>Priority moderation review</li>
        <li>Monthly creator success calls</li>
      </ul>

      <h3>Platinum</h3>
      <p>
        Requirement: Top 5 percent of MeTubers by consistent performance.
        Invite-only.
      </p>
      <p>What you unlock:</p>
      <ul>
        <li>3.5x higher per-view rate than Bronze</li>
        <li>Dedicated creator manager</li>
        <li>Exclusive brand campaign eligibility</li>
        <li>First access to new features and monetization tools</li>
        <li>Higher payout limits</li>
      </ul>

      <p>
        Tier progression happens automatically within 24 hours of meeting
        criteria. There is no application process for Bronze, Silver, or Gold.
        Platinum is by invitation only, based on quarterly review by our Creator
        Success team.
      </p>

      <h2>What counts as a valid view</h2>
      <p>
        Only valid views generate earnings. Full details are covered in our{" "}
        <a href="/creator/view-counting">View Counting Policy</a>. In summary:
      </p>
      <ul>
        <li>
          Meshorts: viewer watches at least 3 seconds OR 50% of the video,
          whichever is shorter
        </li>
        <li>
          Videos: viewer watches at least 30 seconds OR 25% of the video,
          whichever is shorter
        </li>
        <li>Maximum 2 valid views per user per video per 24 hours</li>
        <li>Views from your own account do not count</li>
        <li>Same device fingerprint counts as one user</li>
        <li>Bot activity and manipulation attempts are automatically filtered</li>
      </ul>

      <h2>When and how you get paid</h2>

      <h3>Minimum payout</h3>
      <p>
        You can request a payout the moment your earnings balance reaches ₹100.
        There is no maximum withdrawal limit and no cap on how often you can
        request payouts.
      </p>

      <h3>Payment methods</h3>
      <ul>
        <li>UPI transfer — direct to your registered UPI ID</li>
        <li>Bank transfer — direct to your registered bank account</li>
      </ul>
      <p>
        Both methods are free of charge. MeTubez does not deduct any processing
        fees from your earnings.
      </p>

      <h3>Processing time</h3>
      <p>
        Payment requests are processed manually by our finance team within 3 to
        5 working days from the date of your withdrawal request. You will
        receive:
      </p>
      <ul>
        <li>An in-app notification when your request is received</li>
        <li>An email confirmation when payment is processed</li>
        <li>SMS or WhatsApp notification when the transfer is complete</li>
      </ul>

      <h3>Failed payments</h3>
      <p>
        If a payment fails due to incorrect UPI ID or bank details, the amount
        is credited back to your MeTubez balance and you are notified to update
        your payment details. Failed payments do not affect your tier or account
        status.
      </p>

      <h2>Taxes and KYC</h2>

      <h3>KYC requirements</h3>
      <p>
        Before your first payout, you must complete a one-time KYC verification.
        This requires:
      </p>
      <ul>
        <li>Valid PAN card</li>
        <li>UPI ID or bank account details</li>
        <li>Verified mobile number</li>
      </ul>
      <p>
        KYC verification is required by Indian tax law and is completed within
        the MeTubez app.
      </p>

      <h3>Tax responsibility</h3>
      <p>
        You are responsible for reporting and paying taxes on your MeTuber
        earnings as per applicable Indian tax laws. MeTubez may deduct Tax
        Deducted at Source (TDS) as required by law for creators exceeding
        annual earning thresholds specified by the Income Tax Department.
      </p>
      <p>
        For earnings exceeding ₹20,000 per financial year, TDS may be applicable
        per Section 194R of the Income Tax Act. We provide you with TDS
        certificates and annual earning summaries for your tax filing.
      </p>

      <h2>Anti-fraud provisions</h2>
      <p>
        The following activities result in earnings forfeit, tier demotion, or
        account termination:
      </p>
      <ul>
        <li>
          Purchasing views, followers, or engagement from third-party services
        </li>
        <li>Using bots, scripts, or automated tools to inflate metrics</li>
        <li>
          Creating multiple accounts to manipulate views on your own content
        </li>
        <li>
          Coordinating view exchanges or &ldquo;view for view&rdquo; schemes
        </li>
        <li>Uploading content you do not own or have rights to</li>
        <li>Any activity that violates our Community Guidelines</li>
      </ul>
      <p>
        We use automated and manual review to detect these violations. Detected
        fraudulent earnings are reversed. Repeat violations lead to permanent
        account termination and forfeit of pending earnings.
      </p>

      <h2>Content ownership and rights</h2>
      <p>
        You retain full ownership of the content you upload to MeTubez. By
        uploading, you grant MeTubez a non-exclusive, worldwide license to
        display, distribute, promote, and monetize your content on the MeTubez
        platform and in MeTubez marketing.
      </p>
      <p>
        You can delete your content anytime. Deleted content no longer generates
        earnings from the date of deletion. Earnings generated before deletion
        remain in your account.
      </p>

      <h2>Weekly viral bonus pool</h2>
      <p>
        MeTubez runs a weekly viral bonus pool of ₹5,00,000, distributed among
        the top 100 fastest-growing MeTubers each week. Eligibility is
        automatic. Selection is based on week-over-week view growth, engagement
        rate, and content quality.
      </p>
      <p>
        Bonus payouts are credited to your MeTubez balance every Monday and
        follow standard withdrawal rules.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may update this policy from time to time. Material changes to earning
        rates, tier requirements, or payment terms are notified at least 30 days
        in advance via email and in-app notification.
      </p>
      <p>
        Your existing content and pending earnings are always calculated using
        the policy version in effect at the time of upload, for a grace period
        of 30 days after any change.
      </p>

      <h2>Contact</h2>
      <p>Questions about your earnings?</p>
      <p>
        Email: <a href="mailto:creators@metubez.com">creators@metubez.com</a>
      </p>
      <p>In-app: Settings &gt; Help &gt; Contact Creator Support</p>
      <p>
        Grievance Officer:{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>
      </p>
    </PolicyShell>
  );
}
