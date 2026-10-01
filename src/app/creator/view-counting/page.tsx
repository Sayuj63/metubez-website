import PolicyShell from "@/components/PolicyShell";

export default function CreatorViewCountingPage() {
  return (
    <PolicyShell title="View Counting Policy" updated="October 2026">
      <h2>Overview</h2>
      <p>
        This policy explains how MeTubez counts views on your content and how
        those views translate into earnings. Every view in your dashboard is a
        real, engaged viewer. No inflated numbers. No surprise deductions
        later. This policy applies to all content on MeTubez &mdash; MeShorts
        and Videos.
      </p>

      <h2>What Counts As A Valid View</h2>
      <p>
        A &ldquo;valid view&rdquo; is any view that earns you monetization
        credit. Views that don&apos;t meet our criteria are still counted for
        engagement metrics but do not contribute to your View Credit Bank
        balance.
      </p>

      <h3>MeShorts (videos up to 60 seconds)</h3>
      <p>
        A view is counted as valid when a viewer watches at least 10 seconds of
        your content OR 50% of the video length, whichever comes first.
      </p>
      <ul>
        <li>60-sec MeShort → valid view at 10 seconds</li>
        <li>30-sec MeShort → valid view at 10 seconds (33% of video)</li>
        <li>15-sec MeShort → valid view at 7.5 seconds (50% first)</li>
      </ul>

      <h3>Videos (over 60 seconds)</h3>
      <p>
        A view is counted as valid when a viewer watches at least 30 seconds of
        your content OR 25% of the video length, whichever comes first.
      </p>
      <ul>
        <li>3-min Video → valid view at 30 seconds</li>
        <li>90-sec Video → valid view at 22.5 seconds (25% first)</li>
        <li>20-min Video → valid view at 30 seconds</li>
      </ul>

      <h2>Same-User View Limits</h2>
      <ul>
        <li>Maximum 2 valid views per user per video per 24 hours</li>
        <li>Same device fingerprint counts as one user</li>
        <li>Views from your own account do not count</li>
        <li>Multiple accounts on same device count as one user</li>
      </ul>

      <h2>Anti-Fraud Protections</h2>
      <ul>
        <li>
          <strong>IP velocity check:</strong> more than 50 views from same IP
          in an hour triggers review
        </li>
        <li>
          <strong>Autoplay-only detection:</strong> views without interaction
          credited at 50% weight
        </li>
        <li>
          <strong>Behavioral pattern analysis:</strong> machine-perfect
          completion flagged
        </li>
        <li>
          <strong>Real-time bot detection:</strong> filters before entering
          your view count
        </li>
        <li>
          <strong>Virality review:</strong> any video crossing 1 million views
          in 24 hours flagged for manual verification
        </li>
        <li>
          <strong>Content moderation:</strong> videos must pass moderation
          before becoming monetization-eligible
        </li>
      </ul>

      <h2>What You See On Your Dashboard</h2>
      <p>Three view categories:</p>
      <ul>
        <li>
          <strong>Valid views</strong> &mdash; meet all criteria, count toward
          your View Credit Bank
        </li>
        <li>
          <strong>Pending views</strong> &mdash; under review, usually resolved
          in 24 hours
        </li>
        <li>
          <strong>Invalid views</strong> &mdash; excluded from earnings
        </li>
      </ul>
      <p>Your dashboard updates in real-time. What you see is what you earn.</p>

      <h2>How Views Translate To Earnings</h2>
      <p>
        <strong>Same rate for every creator. No tiers. No favouritism.</strong>
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-[440px]">
          <thead>
            <tr>
              <th>Format</th>
              <th>Rate per 1,000 valid views</th>
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
        Views generate earnings the moment they are validated. Earnings
        accumulate in your View Credit Bank. Withdrawal opens soon.
      </p>

      <h2>Repeat Views And Rewatches</h2>
      <p>
        MeTubez permits up to 2 same-user views per video per 24 hours because
        genuine rewatching is common creator behaviour. Beyond 2 per day,
        additional views count for engagement metrics but not earnings.
      </p>

      <h2>Advertiser-Facing View Standards</h2>
      <p>
        The same view standards apply to advertiser impression reporting. When
        we tell a brand their ad played 1,00,000 times on MeTubez, we mean
        1,00,000 actual human viewers who met valid view criteria. This
        transparency drives premium advertising rates &mdash; which fund your
        earnings.
      </p>

      <h2>If You Notice A Discrepancy</h2>
      <p>
        Contact <a href="mailto:creators@metubez.com">creators@metubez.com</a>{" "}
        with:
      </p>
      <ul>
        <li>Your MeTuber username</li>
        <li>Specific video URL</li>
        <li>Approximate time of the missing view</li>
        <li>Any supporting details</li>
      </ul>
      <p>
        Our team reviews reports manually within 3-5 working days. If we confirm
        an error, your view count and View Credit Bank balance are updated
        retroactively.
      </p>

      <h2>Policy Updates</h2>
      <p>
        Any changes to view thresholds or earning rates will be notified to all
        MeTubers at least 30 days in advance via email and in-app notification.
        Your existing content earnings are always calculated using the policy
        version in effect at time of upload for 30 days after any change.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>
          Email: <a href="mailto:creators@metubez.com">creators@metubez.com</a>
        </li>
        <li>
          Grievance Officer:{" "}
          <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>
        </li>
        <li>
          Website:{" "}
          <a href="/creator/view-counting">metubez.com/creator/view-counting</a>
        </li>
      </ul>

      <p>
        <strong>MeTubez. Create. Share. Monetise.</strong> · World&apos;s first
        horizontal-scrollable video platform. Made in India.
      </p>
    </PolicyShell>
  );
}
