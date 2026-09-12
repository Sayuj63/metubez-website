import PolicyShell from "@/components/PolicyShell";

export default function CreatorViewCountingPage() {
  return (
    <PolicyShell title="View Counting Policy" updated="01 September 2026">
      <h2>Overview</h2>
      <p>
        This policy explains how MeTubez counts views on your content and how
        those views translate into earnings. Our goal is simple: every view you
        see in your dashboard should be a real, engaged viewer. No inflated
        numbers. No surprise deductions later.
      </p>
      <p>
        This policy applies to all content on MeTubez, whether uploaded as a
        Meshort (up to 30 seconds) or a Video (over 30 seconds).
      </p>

      <h2>What counts as a valid view</h2>
      <p>
        A &ldquo;valid view&rdquo; is any view that earns you monetization
        credit. Views that don&apos;t meet our criteria are still counted for
        engagement metrics but do not contribute to your earnings.
      </p>

      <h3>For Meshorts (videos up to 30 seconds)</h3>
      <p>
        A view is counted as valid when a viewer watches at least 3 seconds of
        your content OR 50% of the total video length, whichever comes first.
      </p>
      <p>Example:</p>
      <ul>
        <li>
          A 15-second Meshort earns a valid view when someone watches 3 seconds
        </li>
        <li>
          A 6-second Meshort earns a valid view when someone watches 3 seconds
          (which is 50% of the video)
        </li>
        <li>
          A 30-second Meshort earns a valid view when someone watches 3 seconds
        </li>
      </ul>

      <h3>For Videos (videos over 30 seconds)</h3>
      <p>
        A view is counted as valid when a viewer watches at least 30 seconds of
        your content OR 25% of the total video length, whichever comes first.
      </p>
      <p>Example:</p>
      <ul>
        <li>
          A 45-second Video earns a valid view when someone watches 11 seconds
          (which is 25% of the video)
        </li>
        <li>
          A 3-minute Video earns a valid view when someone watches 30 seconds
        </li>
        <li>
          A 20-minute podcast earns a valid view when someone watches 30 seconds
        </li>
      </ul>

      <h2>Same-user view limits</h2>
      <p>
        To ensure fair earnings and prevent view manipulation, we apply these
        limits:
      </p>
      <ul>
        <li>
          Maximum 2 valid views per user per video per 24 hours. If the same
          user watches your video 5 times in a day, only 2 views count toward
          your earnings.
        </li>
        <li>
          Same device fingerprinting. Multiple accounts logged in from the same
          device count as one user. A viewer cannot create multiple accounts on
          one phone to inflate view counts.
        </li>
        <li>
          Views from your own account do not count. Watching your own content
          from your logged-in account, verified devices, or family accounts
          registered to the same phone number contributes zero to your earnings.
        </li>
      </ul>

      <h2>Anti-fraud protections</h2>
      <p>
        We continuously monitor for view manipulation to protect both creators
        and advertisers. The following triggers are flagged:
      </p>
      <ul>
        <li>
          IP velocity check. If more than 50 views come from the same IP address
          within an hour, those views enter pending review status. Legitimate
          viral moments pass this check. Bot farms do not.
        </li>
        <li>
          Autoplay-only detection. Views generated only through autoplay queues,
          without any user interaction, receive 50% credit weight. Views with
          genuine engagement (likes, comments, shares, follows) receive full
          credit.
        </li>
        <li>
          Behavioral pattern analysis. Machine-perfect watch behavior — such as
          100% completion rate, zero pauses, or mechanical timing patterns — is
          flagged for human review. Real viewers behave imperfectly. Bots behave
          predictably.
        </li>
        <li>
          Real-time bot detection. Our system checks watch patterns continuously
          and filters bot activity before it enters your view count. Unlike other
          platforms that remove views weeks after the fact, MeTubez shows you
          only clean, valid views from the start.
        </li>
      </ul>

      <h2>What you see on your dashboard</h2>
      <p>Your creator dashboard shows three view categories:</p>
      <ul>
        <li>
          Valid views — Views that meet all criteria above. These count toward
          your earnings.
        </li>
        <li>
          Pending views — Views currently under review by our fraud systems.
          Usually resolved within 24 hours.
        </li>
        <li>
          Invalid views — Views that did not meet criteria (bot activity,
          self-views, over-limit repeat views). These are excluded from earnings.
        </li>
      </ul>
      <p>Your dashboard updates in real-time. What you see is what you earn.</p>

      <h2>How views translate to earnings</h2>
      <p>
        Your earning rate depends on your tier and content format. Full rates are
        published in our{" "}
        <a href="/creator/earnings">Creator Earnings Policy</a>.
      </p>
      <p>Base rates by tier:</p>
      <table>
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
      <p>
        Views generate earnings the moment they are validated. Withdraw when
        your balance reaches ₹100.
      </p>

      <h2>Repeat views and rewatches</h2>
      <p>
        MeTubez recognizes that some content is designed to be rewatched (music,
        dance, comedy). Same-user views are permitted up to 2 per video per 24
        hours because genuine rewatching is common creator behavior. Beyond 2 per
        day, additional views are counted for engagement metrics but not for
        earnings.
      </p>
      <p>
        If you notice legitimate viewers watching your content more frequently,
        this is factored into your tier progression and content quality signals.
      </p>

      <h2>Advertiser-facing view standards</h2>
      <p>
        The same view standards apply when we report impressions to advertisers.
        When we tell a brand their ad played 100,000 times on MeTubez, we mean
        100,000 actual human viewers who met our valid view criteria. This
        transparency is why brands trust MeTubez inventory and why our
        advertising rates command premium CPMs.
      </p>
      <p>Higher premium CPMs mean higher earnings for you.</p>

      <h2>If you notice a discrepancy</h2>
      <p>
        If you believe a valid view was incorrectly excluded from your count,
        contact us at{" "}
        <a href="mailto:creators@metubez.com">creators@metubez.com</a> with:
      </p>
      <ul>
        <li>Your MeTuber username</li>
        <li>The specific video URL</li>
        <li>The approximate time the missing view occurred</li>
        <li>Any details that support your report</li>
      </ul>
      <p>
        Our team reviews all reports manually within 3-5 working days. If we
        confirm an error, your view count and earnings are updated
        retroactively.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may update this policy from time to time to reflect improvements to
        our fraud detection systems or changes in the creator economy. Any
        changes to view thresholds or earning rates will be notified to all
        MeTubers at least 30 days in advance via email and in-app notification.
      </p>
      <p>
        Your current view counts and earnings are always calculated using the
        policy version in effect at the time the view occurred. Retroactive
        changes do not apply.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy?</p>
      <p>
        Email: <a href="mailto:creators@metubez.com">creators@metubez.com</a>
      </p>
      <p>
        Grievance Officer: Utsav Solanki —{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>
      </p>
      <p>
        Website:{" "}
        <a href="/creator/view-counting">metubez.com/creator/view-counting</a>
      </p>
    </PolicyShell>
  );
}
