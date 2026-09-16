import PolicyShell from "@/components/PolicyShell";

export default function CreatorHelpPage() {
  return (
    <PolicyShell title="In-App Help Center" updated="September 2026">
      <h2>Welcome, MeTuber</h2>
      <p>Namaste! Kya help chahiye aaj?</p>
      <p>Popular topics:</p>
      <ol>
        <li>Kaise start karu MeTubez pe?</li>
        <li>Meri earnings kaise kaam karti hain?</li>
        <li>Payout kab milega?</li>
        <li>Tier system kya hai?</li>
        <li>Mera view count kyun kam hai?</li>
        <li>Content kaise upload karu?</li>
        <li>Account issue</li>
      </ol>
      <p>Search bar: Apna sawaal type karo</p>
      <p>Bottom: Aur help chahiye? WhatsApp us: +91-XXXXX-XXXXX</p>

      <h2>Article 1: Kaise start karu MeTubez pe?</h2>
      <p>Bahut easy hai. Do minute ka kaam.</p>
      <p>
        Step 1: MeTubez app download karo. Play Store ya App Store se.
      </p>
      <p>
        Step 2: Apna mobile number aur email daalke sign up karo. OTP aayega,
        verify karo.
      </p>
      <p>
        Step 3: Apna username choose karo. Ye tumhara MeTuber name hoga.
      </p>
      <p>
        Step 4: Apni pehli video upload karo. Landscape mein (horizontal), koi
        bhi length. Cooking, dance, comedy, kuch bhi.
      </p>
      <p>
        Step 5: Bas! Tum ab MeTuber ho. Bronze tier se start hote ho. Pehli view
        se hi earning shuru.
      </p>
      <p>
        Ek tip: Pehli video interesting rakho. Uske thumbnail mein clear title
        ho. Users ko samajh aana chahiye kya dikha rahe ho.
      </p>

      <h2>Article 2: Meri earnings kaise kaam karti hain?</h2>
      <p>Simple system, no confusion.</p>
      <p>
        Har valid view = paise. Bas format aur tier decide karta hai kitne
        paise.
      </p>
      <p>Bronze tier pe (jaha se sab start karte hain):</p>
      <ul>
        <li>MeShorts (30 second tak): ₹4 per 1,000 valid views</li>
        <li>Videos (30 second se zyada): ₹12 per 1,000 valid views</li>
      </ul>
      <p>
        Jaise-jaise tum grow karte ho, tier badhta hai aur rates bhi badhte
        hain:
      </p>
      <ul>
        <li>Silver: 1.5x rate</li>
        <li>Gold: 2.25x rate</li>
        <li>Platinum: 3.5x rate</li>
      </ul>
      <p>
        Example: Tumhari cooking video (2 minute) ko 5,000 valid views mile
        Bronze pe. Earning = 5,000 ÷ 1,000 × ₹12 = ₹60. Sirf ek video se.
      </p>
      <p>
        Balance jab ₹100 ho jaye, tum withdraw kar sakte ho. UPI ya bank mein
        3-5 din mein aa jayega.
      </p>

      <h2>Article 3: &ldquo;Valid view&rdquo; kya hoti hai?</h2>
      <p>Ye important hai. Saare views paise nahi banate.</p>
      <p>MeShorts (30 second tak videos) ke liye:</p>
      <p>
        Koi viewer teri video ko 3 second ya 50% dekhe, tab valid view count
        hoti hai.
      </p>
      <p>
        Matlab, 15 second ki Meshort mein viewer ko 3 second dekhna hai. 6
        second ki Meshort mein viewer ko 3 second dekhna hai (jo 50% hai).
      </p>
      <p>Videos (30 second se zyada) ke liye:</p>
      <p>Viewer ko 30 second ya 25% dekhna hoga.</p>
      <p>
        Matlab, 3 minute ki video mein 30 second. 20 minute ki video mein bhi 30
        second kaafi hai.
      </p>
      <p>
        Ek din mein same user ki max 2 views count hoti hain. Same phone/device
        ke multiple accounts se sirf 1 count hoti hai. Aur khud apni video
        dekhne se count zero hoti hai.
      </p>
      <p>
        Bots aur fake views apne aap detect ho jaate hain aur count nahi hote.
        Tumhara dashboard sirf clean, real views dikhata hai.
      </p>
      <p>
        Full policy: <a href="/creator/view-counting">View Counting Policy</a>
      </p>

      <h2>Article 4: Payout kab milega?</h2>
      <p>Jab tumhara balance ₹100 ho jaye.</p>
      <p>Kaise nikalu paise?</p>
      <ol>
        <li>App mein Earnings section pe jao</li>
        <li>&ldquo;Request Payout&rdquo; button dabao</li>
        <li>
          UPI ya bank account choose karo (pehle KYC karna hoga — PAN card
          upload)
        </li>
        <li>Amount confirm karo</li>
        <li>Team 3-5 working din mein process karega</li>
        <li>Paisa tumhare account mein aa jayega</li>
      </ol>
      <p>Zaroori baatein:</p>
      <ul>
        <li>KYC ek baar karna hota hai. PAN + UPI/bank details.</li>
        <li>Kitni bhi baar withdraw kar sakte ho, ₹100 se upar ho toh.</li>
        <li>No fees. Poore paise milte hain.</li>
        <li>SMS/WhatsApp pe confirmation aayegi.</li>
      </ul>
      <p>Agar 5 din se zyada ho gaye, WhatsApp karo: +91 94270 68736</p>

      <h2>Article 5: Tier system kya hai?</h2>
      <p>MeTubers ke 4 levels hain. Higher level = zyada earning.</p>

      <h3>🥉 Bronze — Sab yaha se start karte hain</h3>
      <p>Requirement: Sign up + 1 video upload</p>

      <h3>🥈 Silver — Growing creator</h3>
      <p>Requirement: 10 videos + 5,000 total views</p>
      <p>Rate 1.5x ho jata hai</p>

      <h3>🥇 Gold — Established creator</h3>
      <p>Requirement: 500 subscribers + 50,000 total views</p>
      <p>Rate 2.25x + verified badge + brand deals unlock</p>

      <h3>💎 Platinum — Top MeTubers</h3>
      <p>Requirement: Top 5% performers, invite-only</p>
      <p>Rate 3.5x + dedicated support + exclusive campaigns</p>

      <p>
        Tier upgrade automatic hai. Jab tum criteria hit karte ho, 24 hours ke
        andar naya tier mil jata hai. Notification aayega.
      </p>

      <h2>Article 6: Mera view count kyun kam hai?</h2>
      <p>Ye common concern hai. Let&apos;s clear it up.</p>
      <p>Kai reasons ho sakte hain:</p>
      <ol>
        <li>
          Sirf valid views count hoti hain. Agar koi viewer sirf 1 second dekhe
          aur scroll kar de, woh count nahi hoti (MeShorts mein 3 second, Videos
          mein 30 second minimum).
        </li>
        <li>
          Same user ki 2 se zyada views nahi count hoti. Same viewer ne 5 baar
          dekha? Sirf 2 count.
        </li>
        <li>
          Same device se multiple accounts se dekhne pe 1 count hoti hai.
        </li>
        <li>Khud apne account se dekhne pe 0 count.</li>
        <li>Fake views ya bot activity automatically filter ho jaati hai.</li>
      </ol>
      <p>
        Iska matlab yeh nahi ki tumhari video khali hai. Iska matlab hai ki jo
        bhi views tum dekh rahe ho, woh real, engaged viewers hain. YouTube pe
        jo hota hai — pehle 50,000 views dikhaate hain, phir chupke se 30,000
        kar dete hain — woh humare yaha nahi hota. Jo tum dekh rahe ho, wohi
        actual hai.
      </p>
      <p>
        Agar phir bhi lagta hai koi view galti se miss hui, WhatsApp karo apni
        video ka link bhejke.
      </p>

      <h2>Article 7: Content kaise upload karu?</h2>
      <p>Simple upload process.</p>
      <ol>
        <li>App mein &ldquo;+&rdquo; button dabao (bottom center mein)</li>
        <li>Video select karo phone se, ya seedha shoot karo</li>
        <li>
          Zaroori: Landscape (horizontal) mein shoot karo. 16:9 aspect ratio.
          MeTubez horizontal-scrollable platform hai.
        </li>
        <li>Title likho (Hindi ya English ya koi bhi Indian language)</li>
        <li>Description add karo (optional)</li>
        <li>Category choose karo (Music, Cooking, Comedy, etc.)</li>
        <li>Language select karo</li>
        <li>Upload button dabao</li>
      </ol>
      <p>
        Video review mein 5-10 min lagte hain, phir live ho jaati hai.
      </p>
      <p>
        Vertical (portrait) videos bhi upload ho sakti hain but sides pe black
        bars aayenge. Best experience ke liye landscape recommend karte hain.
      </p>
      <p>Video length:</p>
      <ul>
        <li>30 second tak = Meshort</li>
        <li>30 second se zyada = Video</li>
      </ul>
      <p>Dono format monetize hoti hain. Choose your style.</p>

      <h2>Article 8: Community aur brand deals</h2>
      <p>Silver tier se leaderboard, Gold tier se brand deals.</p>
      <p>
        Jab tum Gold tier reach karte ho (500 subs + 50,000 views), tumhe brand
        deals marketplace ka access mil jata hai.
      </p>
      <p>
        Yaha brands tumhare content ke saath collaborate karne ke liye directly
        reach out karte hain. Sponsored posts, product placements, ambassador
        programs.
      </p>
      <p>
        MeTubez brand deals mein no commission leta hai first year. Poora paisa
        tumhara.
      </p>
      <p>
        Weekly viral bonus pool: ₹5,00,000 har hafte top 100 fastest-growing
        MeTubers ke beech distribute hota hai. Eligibility automatic hai — bas
        grow karo.
      </p>

      <h2>Article 9: Account, password, aur privacy</h2>
      <p>Password bhool gaye?</p>
      <p>
        Login page pe &ldquo;Forgot password&rdquo; pe click karo. Mobile number
        pe OTP aayega.
      </p>
      <p>Account delete karna hai?</p>
      <p>
        Settings &gt; Account &gt; Delete Account. Warning: Delete karne pe
        saara content hat jayega aur pending earnings (₹100 se kam) forfeit ho
        jayenge. ₹100 se upar payout kar diya jayega account close karne se
        pehle.
      </p>
      <p>Privacy settings:</p>
      <ul>
        <li>Public profile / Private profile</li>
        <li>Comments enable/disable</li>
        <li>Direct message on/off</li>
        <li>Show/hide subscriber count</li>
      </ul>
      <p>
        Full privacy policy: <a href="/legal/privacy">Privacy Policy</a>
      </p>

      <h2>Article 10: Contact support</h2>
      <p>Hume message karo. Real humans respond karte hain.</p>
      <p>Fast responses ke liye:</p>
      <p>WhatsApp: +91 94270 68736 (10 AM - 7 PM, Mon-Sat)</p>
      <p>Email support:</p>
      <ul>
        <li>
          General help: <a href="mailto:help@metubez.com">help@metubez.com</a>
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
      <p>In-app: Settings &gt; Help &gt; Contact Us</p>
      <p>
        Response time: 24 hours (email), 2-4 hours (WhatsApp during business
        hours)
      </p>
      <p>Company address:</p>
      <p>Twenties Entertainment Pvt Ltd</p>
      <p>
        602, 6th Floor, Anam 2, Ambli, Ahmedabad, Gujarat 380058, India
      </p>
    </PolicyShell>
  );
}
