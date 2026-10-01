import PolicyShell from "@/components/PolicyShell";

export default function CreatorEarningsPage() {
  return (
    <PolicyShell title="Creator Earnings Policy" updated="October 2026">
      <h2>Overview</h2>
      <p>
        This policy explains how you earn money on MeTubez. Read alongside our{" "}
        <a href="/creator/view-counting">View Counting Policy</a> and{" "}
        <a href="/creator/agreement">Creator Agreement</a>.
      </p>

      <h2>The Core Promise</h2>
      <p>
        <strong>Same rate. Every creator. From your first video.</strong>
      </p>
      <p>
        No 1,000 subscribers. No 4,000 watch-hours. No tier system. Every
        MeTuber earns the same per-view rate — first-time creator and
        established creator alike.
      </p>

      <h2>How You Earn</h2>

      <h3>Content formats</h3>
      <p>
        <strong>MeShorts</strong> — videos up to 60 seconds. Appear in the
        landscape scroll feed with 1 skippable ad placed every 8 MeShorts.
      </p>
      <p>
        <strong>Videos</strong> — videos longer than 60 seconds. Carry pre-roll
        ads before playback and mid-roll ads for content over 3 minutes.
      </p>

      <h3>The Rates (single, flat, non-negotiable)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-[440px]">
          <thead>
            <tr>
              <th>Format</th>
              <th>Per 1,000 valid views</th>
              <th>Per 1 million views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MeShorts (≤60 sec)</td>
              <td>₹6</td>
              <td>₹6,000</td>
            </tr>
            <tr>
              <td>Videos (&gt;60 sec)</td>
              <td>₹100</td>
              <td>₹1,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Same rate for every creator. Applied from your very first video. No
        progression system. No tiers.
      </p>

      <h2>Why One Flat Rate</h2>
      <p>
        Traditional platforms punish new creators. MeTubez rewards content, not
        follower count. A first-time creator uploading their first MeShort earns
        the same rate as an established creator uploading their thousandth.
        Views are the currency. Content is the product. Everyone plays by the
        same rules.
      </p>

      <h2>What Counts As A Valid View</h2>
      <p>
        Only valid views generate earnings. Full details in the{" "}
        <a href="/creator/view-counting">View Counting Policy</a>.
      </p>
      <ul>
        <li>
          <strong>MeShorts:</strong> viewer watches at least 10 seconds OR 50%
          of the video
        </li>
        <li>
          <strong>Videos:</strong> viewer watches at least 30 seconds OR 25% of
          the video
        </li>
        <li>Maximum 2 valid views per user per video per 24 hours</li>
        <li>Self-views excluded</li>
        <li>Same device fingerprint counts as one user</li>
        <li>Bot activity automatically filtered</li>
      </ul>

      <h2>Your View Credit Bank</h2>
      <p>
        Every valid view from <strong>Day 1 of your signup</strong> is added to
        your View Credit Bank. You can watch your balance grow live on your
        dashboard.
      </p>
      <p>
        <strong>Withdrawal opens soon.</strong> When monetization launches,
        request payout via UPI — direct to your bank, 3-5 working days, ₹100
        minimum balance required. You will be notified the moment it opens.
      </p>

      <h2>Minimum Payout</h2>
      <p>
        ₹100 balance triggers withdrawal eligibility. No maximum limit. No cap
        on payout frequency.
      </p>

      <h2>Payment Methods</h2>
      <ul>
        <li>UPI transfer (recommended)</li>
        <li>Bank transfer</li>
      </ul>
      <p>Both free of charge. MeTubez deducts no processing fees.</p>

      <h2>KYC And Tax</h2>
      <p>
        <strong>KYC (one-time):</strong> Before your first payout, submit PAN
        card + UPI/bank details + verified mobile number. Completed within the
        MeTubez app.
      </p>
      <p>
        <strong>Tax responsibility:</strong> You are responsible for reporting
        and paying taxes on MeTuber earnings per Indian tax law. TDS may apply
        per Section 194R for earnings exceeding ₹20,000/year. TDS certificates
        and annual earning summaries provided for tax filing.
      </p>

      <h2>Music Library — Hoopr.ai</h2>
      <p>
        Free access to thousands of licensed songs from Bollywood, regional
        Indian cinema, and trending audio — included with your MeTuber account.
        Use in your videos without copyright strikes. Music library usage does
        not affect your earning calculations. Your views and earnings are the
        same whether you use music or original audio.
      </p>

      <h2>Anti-Fraud Provisions</h2>
      <p>
        Activities that result in earnings forfeit and potential termination:
      </p>
      <ul>
        <li>Purchasing views, followers, or engagement</li>
        <li>Using bots, scripts, or automation</li>
        <li>Multiple accounts to inflate views on your own content</li>
        <li>View exchange schemes</li>
        <li>Copyright-infringing uploads</li>
        <li>Community Guidelines violations</li>
      </ul>
      <p>
        Detected fraudulent earnings are reversed. Repeat violations = permanent
        termination.
      </p>

      <h2>Content Ownership</h2>
      <p>
        You retain full ownership of your content. You grant MeTubez a
        non-exclusive, worldwide license to display, distribute, promote, and
        monetize your content on MeTubez. Delete content anytime. Deleted
        content stops generating earnings from date of deletion. Earnings
        generated before deletion remain in your View Credit Bank.
      </p>

      <h2>Policy Updates</h2>
      <p>
        Material changes notified at least 30 days in advance. Existing content
        earns at rates in effect at time of upload for 30 days after any change.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>
          Email: <a href="mailto:creators@metubez.com">creators@metubez.com</a>
        </li>
        <li>
          Grievance:{" "}
          <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>
        </li>
      </ul>
      <p>
        <strong>MeTubez. Create. Share. Monetise.</strong> · Bharat ka apna
        platform.
      </p>
    </PolicyShell>
  );
}
