import PolicyShell from "../policy-shell";

export default function CommunityPage() {
  return (
    <PolicyShell title="Community Guidelines" updated="September 2026">
      <p>
        MeTubez is a platform for India&apos;s creators. These guidelines help keep
        our community safe, respectful, and authentic.
      </p>
      <h2>Content standards</h2>
      <p>
        All content must be in landscape (16:9) format. Content must be
        original or appropriately licensed. Do not upload content you did not
        create or do not have rights to share.
      </p>
      <h2>Prohibited content</h2>
      <p>
        The following content is strictly prohibited: sexually explicit material
        or nudity, hate speech or content targeting individuals based on
        religion, caste, gender, or ethnicity, graphic violence or gore,
        misinformation that could cause public harm, content that endangers
        minors, and spam or misleading thumbnails/titles.
      </p>
      <h2>Language and respect</h2>
      <p>
        MeTubez celebrates India&apos;s linguistic diversity. Content in any Indian
        language is welcome. Comments and interactions must remain respectful.
        Harassment, bullying, or threats will result in account suspension.
      </p>
      <h2>Authentic engagement</h2>
      <p>
        Artificially inflating views, likes, or subscribers through bots,
        purchased engagement, or coordinated inauthentic behaviour is
        prohibited and will result in permanent removal.
      </p>
      <h2>Reporting</h2>
      <p>
        Use the in-app report button to flag content that violates these
        guidelines. You may also email{" "}
        <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>.
      </p>
      <p className="text-[13px] text-[#999] italic">
        Full guidelines content will be updated. This is a placeholder summary.
      </p>
    </PolicyShell>
  );
}
