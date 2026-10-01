import PolicyShell from "@/components/PolicyShell";

export default function CreatorHelpPage() {
  return (
    <PolicyShell title="In-App Help Center" updated="October 2026">
      <p>
        Namaste MeTuber! Yahaan aapke saare common sawaalon ke jawab hai. Kuch
        bhi additional help chahiye toh WhatsApp karo.
      </p>

      <h2>Article 1 — Kaise start karu MeTubez pe?</h2>
      <p>
        <strong>2 minute ka kaam hai.</strong>
      </p>
      <ul>
        <li>Step 1: MeTubez app download karo. Play Store ya App Store se.</li>
        <li>Step 2: Mobile number + email daalke sign up karo. OTP verify.</li>
        <li>Step 3: Username choose karo. Ye tumhara MeTuber name hoga.</li>
        <li>
          Step 4: Pehli video upload karo. Landscape (horizontal). Koi bhi
          length.
        </li>
        <li>
          Step 5: Bas. Tum ab MeTuber ho. Pehli view se hi View Credit Bank
          mein earning add hogi.
        </li>
      </ul>

      <h2>Article 2 — Meri earnings kaise kaam karti hain?</h2>
      <p>
        <strong>Sabse simple system. No confusion.</strong>
      </p>
      <p>Har valid view = paise. Same rate, sabke liye. Tier system nahi hai.</p>
      <div className="overflow-x-auto">
        <table className="min-w-[440px]">
          <thead>
            <tr>
              <th>Format</th>
              <th>Rate per 1,000 views</th>
              <th>Per million</th>
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
        <strong>Example:</strong> 1 lakh MeShort views = ₹600. 1 lakh Video
        views = ₹10,000. 10 lakh Video views = ₹1,00,000.
      </p>
      <p>
        Balance ₹100 ho jaye toh withdraw. UPI ya bank mein 3-5 din mein aa
        jayega.
      </p>
      <p>
        <strong>Important:</strong> Monetization abhi live hone wali hai. Tab
        tak jo bhi views aayenge, sab View Credit Bank mein count honge — apka
        paisa ready ho jayega withdrawal ke liye.
      </p>

      <h2>Article 3 — Payout kab milega?</h2>
      <p>
        <strong>Withdrawal opens soon.</strong> Jaise hi monetization live
        hogi, aapko app pe notification aa jayegi.
      </p>
      <p>
        <strong>Kaise nikalu paise jab withdrawal open ho?</strong>
      </p>
      <ul>
        <li>App mein Earnings section pe jao</li>
        <li>&ldquo;Request Payout&rdquo; button dabao</li>
        <li>UPI ya bank account choose karo (KYC pehle karna hoga)</li>
        <li>Amount confirm karo</li>
        <li>3-5 working din mein transfer</li>
      </ul>
      <p>
        <strong>Zaroori:</strong>
      </p>
      <ul>
        <li>KYC ek baar karna hota hai. PAN + UPI/bank details.</li>
        <li>No fees. Poore paise milte hain.</li>
        <li>SMS + WhatsApp pe confirmation.</li>
      </ul>

      <h2>Article 4 — Mera view count kyun kam hai?</h2>
      <p>Sirf VALID views count hoti hai:</p>
      <ul>
        <li>
          <strong>MeShorts (≤60 sec):</strong> Viewer ko 10 second ya 50%
          dekhna hai (jo pehle ho)
        </li>
        <li>
          <strong>Videos (&gt;60 sec):</strong> Viewer ko 30 second ya 25%
          dekhna hai (jo pehle ho)
        </li>
      </ul>
      <p>Aur bhi rules:</p>
      <ul>
        <li>Same user ki max 2 views count hoti hai per din</li>
        <li>Same device se multiple accounts = 1 user</li>
        <li>Khud apni video dekhne se 0 count</li>
        <li>Fake views aur bot activity apne aap filter ho jaati hai</li>
      </ul>
      <p>
        Agar lagta hai koi view galti se miss hui — WhatsApp karo video ka link
        bhejke.
      </p>

      <h2>Article 5 — Content kaise upload karu?</h2>
      <ul>
        <li>App mein &ldquo;+&rdquo; button (bottom center)</li>
        <li>Video select karo phone se, ya shoot karo</li>
        <li>
          <strong>Zaroori:</strong> Landscape (horizontal) mein shoot karo.
          16:9.
        </li>
        <li>Title likho (koi bhi Indian language)</li>
        <li>Description (optional)</li>
        <li>Category choose karo</li>
        <li>Language select karo</li>
        <li>Optional: Hoopr.ai music library se song add karo</li>
        <li>Upload</li>
      </ul>
      <p>
        <strong>Tip:</strong> Videos zyada earn karti hai (₹100 per 1,000
        views) vs MeShorts (₹6 per 1,000 views). Long-form content banao jab
        bhi possible ho.
      </p>

      <h2>Article 6 — Hoopr.ai music library kya hai?</h2>
      <p>
        <strong>Free music. Copyright strike ka tension nahi.</strong>
      </p>
      <p>
        MeTubez ne Hoopr.ai ke saath partnership ki hai. Thousands of licensed
        songs — Bollywood, regional, trending audio — sab creators ke liye free
        available hai.
      </p>
      <p>
        <strong>Kaise use karu?</strong>
      </p>
      <ul>
        <li>Video upload karte time &ldquo;Add Music&rdquo; button dabao</li>
        <li>Hoopr.ai library open ho jayegi</li>
        <li>Song search karo ya browse karo</li>
        <li>Select karo — video mein add ho jayega</li>
      </ul>
      <p>
        <strong>Zaroori:</strong> Music free hai. Copyright strike nahi milega.
        Earnings pe koi effect nahi — rate same rahega.
      </p>

      <h2>Article 7 — Fake views se kaise protect karte ho?</h2>
      <p>Multi-layer fraud protection:</p>
      <ul>
        <li>Max 2 valid views per user per video per din</li>
        <li>Same device fingerprint = 1 user</li>
        <li>Khud apni video dekhne se 0 credit</li>
        <li>
          IP velocity monitoring — 1 ghante mein 50+ views ek IP se toh review
        </li>
        <li>Autoplay-only views — 50% credit weight</li>
        <li>Bot pattern detection</li>
        <li>24 ghante mein 1 million views cross ho toh manual review</li>
      </ul>
      <p>
        Agar koi &ldquo;views khareedne&rdquo; ka offer kare — mat lena.
        Account ban ho jayega, saari earnings zero.
      </p>

      <h2>Article 8 — Account, password, aur privacy</h2>
      <p>
        <strong>Password bhool gaye?</strong> Login page pe &ldquo;Forgot
        password&rdquo; → Mobile pe OTP.
      </p>
      <p>
        <strong>Account delete karna hai?</strong> Settings &gt; Account &gt;
        Delete Account.
      </p>
      <p>
        Warning: Delete karne pe saara content hat jayega. Pending View Credit
        Bank balance ₹100 se kam = forfeit.
      </p>
      <p>
        <strong>Privacy settings:</strong>
      </p>
      <ul>
        <li>Public / Private profile</li>
        <li>Comments on/off</li>
        <li>Direct message on/off</li>
      </ul>
      <p>
        Full privacy policy:{" "}
        <a href="/legal/privacy">metubez.com/legal/privacy</a>
      </p>

      <h2>Article 9 — Community aur brand deals</h2>
      <p>Jab tumhari MeTubez pe presence establish hoti hai:</p>
      <ul>
        <li>Featured spots milte hai top feed pe</li>
        <li>Brand deals marketplace access</li>
        <li>Sponsored content opportunities</li>
        <li>MeTubez editorial team se direct connect</li>
      </ul>
      <p>
        <strong>Brand deals:</strong> MeTubez brand deals mein first year no
        commission leta hai. Poora paisa tumhara.
      </p>
      <p>
        Interested? WhatsApp karo:{" "}
        <a href="mailto:brands@metubez.com">brands@metubez.com</a>
      </p>

      <h2>Article 10 — Contact support</h2>
      <p>
        <strong>Fast responses:</strong> WhatsApp: +91 8866820472 (10 AM - 7
        PM, Mon-Sat)
      </p>
      <p>
        <strong>Email:</strong>
      </p>
      <ul>
        <li>
          General: <a href="mailto:help@metubez.com">help@metubez.com</a>
        </li>
        <li>
          Creator issues:{" "}
          <a href="mailto:creators@metubez.com">creators@metubez.com</a>
        </li>
        <li>
          Payment issues:{" "}
          <a href="mailto:payments@metubez.com">payments@metubez.com</a>
        </li>
        <li>
          Report content:{" "}
          <a href="mailto:report@metubez.com">report@metubez.com</a>
        </li>
        <li>
          Legal/grievance:{" "}
          <a href="mailto:grievance@metubez.com">grievance@metubez.com</a>
        </li>
      </ul>
      <p>
        <strong>In-app:</strong> Settings &gt; Help &gt; Contact Us
      </p>
      <p>
        <strong>Response time:</strong> 24 hours (email), 2-4 hours (WhatsApp
        business hours)
      </p>
      <p>
        <strong>Company:</strong> Twenties Entertainment Pvt Ltd, 602, 6th
        Floor, Anam 2, Ambli, Ahmedabad, Gujarat 380058
      </p>
      <p>
        <strong>MeTubez. Create. Share. Monetise.</strong> · Bharat ka apna
        platform.
      </p>
    </PolicyShell>
  );
}
