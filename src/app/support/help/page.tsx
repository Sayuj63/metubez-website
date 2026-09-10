const topics = [
  {
    q: "How do I download the MeTubez app?",
    a: "MeTubez is available free on Google Play Store (Android) and Apple App Store (iOS). Search for 'MeTubez' or use the download links on our homepage.",
  },
  {
    q: "How do I start earning as a creator?",
    a: "Sign up, upload your first landscape video, and monetisation begins automatically from your first valid view. No waiting, no minimum subscriber count.",
  },
  {
    q: "How do I request a payout?",
    a: "When your balance reaches ₹100, go to your Creator Dashboard → Earnings → Request Payout. Payments are processed to UPI or bank account within 3-5 working days.",
  },
  {
    q: "What video format does MeTubez support?",
    a: "MeTubez is a landscape-first platform. Upload videos in 16:9 horizontal format for the best experience. Maximum file size is 2 GB. Supported formats: MP4, MOV, AVI.",
  },
  {
    q: "How do I report a technical issue?",
    a: "Email support@metubez.com with your registered phone number, a description of the issue, and a screenshot if possible. We respond within 24 hours.",
  },
  {
    q: "How do I delete my account?",
    a: "Go to Profile → Settings → Account → Delete Account. Account deletion is permanent and removes all your content and earnings history. Pending payouts will be processed before deletion.",
  },
];

export default function HelpPage() {
  return (
    <article>
      <h1 className="text-[28px] md:text-[36px] font-black text-[#111] mb-2 leading-tight">
        Help Center
      </h1>
      <p className="text-[14px] text-[#666] mb-10">
        Answers to the most common questions about MeTubez.
      </p>
      <div className="divide-y divide-[#eee] border-y border-[#eee]">
        {topics.map((t) => (
          <details key={t.q} className="group py-5">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-[15px] font-bold text-[#111] pr-6">
                {t.q}
              </span>
              <span className="faq-plus text-[22px] text-[#666] group-open:text-[#31B24B] shrink-0 w-6 text-center leading-none" />
            </summary>
            <p className="text-[14px] text-[#666] leading-relaxed pt-3">
              {t.a}
            </p>
          </details>
        ))}
      </div>
      <div className="mt-10 bg-[#f8f8f8] border border-[#eee] rounded-xl p-6">
        <p className="text-[14px] font-black text-[#111] mb-1">
          Still need help?
        </p>
        <p className="text-[13px] text-[#666]">
          Email us at{" "}
          <a
            href="mailto:support@metubez.com"
            className="text-[#31B24B] hover:underline"
          >
            support@metubez.com
          </a>{" "}
          — we respond within 24 hours.
        </p>
      </div>
    </article>
  );
}
