import PolicyShell from "@/components/PolicyShell";

export default function CreatorViewCountingPage() {
  return (
    <PolicyShell title="View Counting Policy" updated="23 September 2026">
      <h2>Overview</h2>
      <p>
        This policy explains how MeTubez counts views on your content and how
        those views translate into earnings. Every view you see in your
        dashboard is a real, engaged viewer. No inflated numbers. No surprise
        deductions later.
      </p>
      <p>
        This policy applies to all content on MeTubez — MeShorts and Videos.
      </p>

      <h2>What counts as a valid view</h2>
      <p>
        A &ldquo;valid view&rdquo; is any view that earns you monetization
        credit. Views that don&apos;t meet our criteria are still counted for
        engagement metrics but do not contribute to your earnings.
      </p>

      <h3>MeShorts (videos up to 30 seconds)</h3>
      <p>
        A view is counted as valid when a viewer watches at least 10 seconds of
        your content OR 50% of the video length, whichever comes first.
      </p>
      <p>Examples:</p>
      <ul>
        <li>30-sec MeShort → valid view at 10 seconds (33% of the video)</li>
        <li>20-sec MeShort → valid view at 10 seconds (50% of the video)</li>
        <li>15-sec MeShort → valid view at 7.5 seconds (50% first)</li>
      </ul>

      <h3>Videos (videos over 30 seconds)</h3>
      <p>
        A view is counted as valid when a viewer watches at least 30 seconds of
        your content OR 25% of the video length, whichever comes first.
      </p>
      <p>Examples:</p>
      <ul>
        <li>60-sec Video → valid view at 15 seconds (25% first)</li>
        <li>3-min Video → valid view at 30 seconds</li>
        <li>20-min Video → valid view at 30 seconds</li>
      </ul>

      <h2>Same-user view limits</h2>
      <ul>
        <li>Maximum 2 valid views per user per video per 24 hours</li>
        <li>Same device fingerprint counts as one user</li>
        <li>Views from your own account do not count</li>
        <li>Multiple accounts on the same device count as one user</li>
      </ul>

      <h2>Anti-fraud protections</h2>
      <ul>
        <li>
          IP velocity check: more than 50 views from the same IP within an hour
          triggers review
        </li>
        <li>
          Autoplay-only detection: views without interaction are credited at 50%
          weight
        </li>
        <li>
          Behavioral pattern analysis: machine-perfect completion is flagged
        </li>
        <li>
          Real-time bot detection: filters before views enter your view count
        </li>
        <li>
          Virality review: any video crossing 1 million views in 24 hours is
          flagged for manual verification
        </li>
        <li>
          Content moderation: videos must pass moderation before becoming
          monetization-eligible
        </li>
      </ul>

      <h2>What you see on your dashboard</h2>
      <p>Three view categories:</p>
      <ul>
        <li>Valid views — meet all criteria, count toward earnings</li>
        <li>Pending views — under review, usually resolved in 24 hours</li>
        <li>Invalid views — excluded from earnings</li>
      </ul>
      <p>Your dashboard updates in real-time. What you see is what you earn.</p>

      <h2>How views translate to earnings</h2>
      <p>Same rate for every creator. No tiers. No favouritism.</p>
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
              <td>MeShorts</td>
              <td>₹30</td>
              <td>₹30,000</td>
            </tr>
            <tr>
              <td>Videos</td>
              <td>₹100</td>
              <td>₹1,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Views generate earnings the moment they are validated. Withdraw when
        your balance reaches ₹100 via UPI. Full rates are published in our{" "}
        <a href="/creator/earnings">Creator Earnings Policy</a>.
      </p>

      <h2>Repeat views and rewatches</h2>
      <p>
        MeTubez permits up to 2 same-user views per video per 24 hours because
        genuine rewatching is common creator behaviour. Beyond 2 per day,
        additional views count for engagement metrics but not earnings.
      </p>

      <h2>Advertiser-facing view standards</h2>
      <p>
        The same view standards apply to advertiser impression reporting. When
        we tell a brand their ad played 1,00,000 times on MeTubez, we mean
        1,00,000 actual human viewers who met valid view criteria. This
        transparency drives premium advertising rates — which fund your
        earnings.
      </p>

      <h2>If you notice a discrepancy</h2>
      <p>
        Contact us at{" "}
        <a href="mailto:creators@metubez.com">creators@metubez.com</a> with:
      </p>
      <ul>
        <li>Your MeTuber username</li>
        <li>The specific video URL</li>
        <li>The approximate time of the missing view</li>
        <li>Any supporting details</li>
      </ul>
      <p>
        Our team reviews reports manually within 3-5 working days. If we confirm
        an error, your view count and earnings are updated retroactively.
      </p>

      <h2>Policy updates</h2>
      <p>
        Any changes to view thresholds or earning rates will be notified to all
        MeTubers at least 30 days in advance via email and in-app notification.
      </p>
      <p>
        Your existing content earnings are always calculated using the policy
        version in effect at the time of upload for 30 days after any change.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:creators@metubez.com">creators@metubez.com</a>
      </p>
      <p>
        Grievance Officer:{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>
      </p>
      <p>
        Website:{" "}
        <a href="/creator/view-counting">metubez.com/creator/view-counting</a>
      </p>
    </PolicyShell>
  );
}
