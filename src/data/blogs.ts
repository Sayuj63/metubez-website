export type BlogPost = {
  slug: string;
  day: number;
  title: string;
  tags: string[];
  content: string;
  cover?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gorakhpur-creator-platform-problem",
    day: 2,
    title:
      "A Creator in Gorakhpur Has 40,000 Views a Month and Earns Rs 400. Here Is Why That Is a Platform Problem, Not a Creator Problem.",
    tags: ["MeTubez", "Creator Economy", "India", "Vernacular"],
    cover: "/blog-covers/gorakhpur-creator-platform-problem.png",
    content: `
<h2>Let us start with the numbers that nobody is talking about</h2>
<p>India has over 50 million content creators. The United States has a similar number. The US creator economy is valued at approximately $250 billion. India's creator economy is valued at approximately $0.4 billion.</p>
<p>Same creators. Different infrastructure. Completely different economic outcomes.</p>
<p>That gap is not because Indian creators are less talented. If you have spent any time watching Hindi, Bhojpuri, Tamil, Marathi, or Odia content online, you know the quality and the engagement are real. The gap is because the monetisation infrastructure was not designed for them.</p>

<h2>How the CPM gap actually works</h2>
<p>YouTube's primary revenue mechanism is advertising. Advertisers pay to reach audiences. The amount they pay per thousand views (CPM) varies based on how much advertisers want that particular audience.</p>
<p>English-language content on YouTube in India: CPM of roughly Rs 150 to Rs 400 per thousand views.<br>
Hindi and regional language content on YouTube in India: CPM of roughly Rs 20 to Rs 60 per thousand views.</p>
<p>The same platform. The same effort. A 6 to 12 times difference in earnings, purely based on the language the creator speaks.</p>
<p>This is not YouTube being malicious. It is YouTube reflecting what international and premium advertisers are willing to pay to reach different audiences. The system was built for a market where English-speaking audiences have more disposable income and where advertisers value that audience more.</p>
<p>The problem is that the system is now being applied to 50 million creators who do not fit the model it was built for.</p>

<h2>The creator in Gorakhpur</h2>
<p>She makes cooking content in Bhojpuri. Her audience is deeply engaged. Her comments section has conversations, debates, recipe requests. She posts three times a week and has done so consistently for two years.</p>
<p>Her monthly YouTube earnings: Rs 380 to Rs 420.</p>
<p>This is not exceptional. This is typical for vernacular creators in Tier 2 and Tier 3 India. The creator ecosystem in India is enormous, engaged, and almost completely unpaid.</p>

<h2>What the existing platforms offer</h2>
<p>YouTube: Ad revenue model with the CPM gap described above. YouTube Shorts fund exists but is modest and inconsistently distributed. YouTube Premium revenue share requires Premium subscribers, and Premium penetration in India is under 2%.</p>
<p>Instagram Reels: Does not meaningfully pay creators. Uses creator content to keep users on Instagram and then monetises those users itself. The creator's value is captured by the platform.</p>
<p>Moj, Josh, Chingari: Rose during the TikTok ban in India and attracted significant creator volume. But the funding environment shifted, the competitive pressure from Instagram intensified, and the monetisation architecture for creators was never the primary design principle.</p>
<p>What is missing is a platform where creator monetisation is the starting point of the design, not an afterthought.</p>

<h2>What MeTubez is building</h2>
<p>MeTubez is a video platform under Twenties Entertainment Pvt. Ltd., building since 2019, with a WIPO PCT international patent on the core technology and a Government of India grant.</p>
<p>The core design principle is simple: a creator should earn from their first video. Not their thousandth. Not after hitting a subscriber threshold. From video one.</p>
<p>This requires a different monetisation architecture than advertising CPM. It requires thinking about how value flows from audience to creator in a market where the audience may not be the premium target of global advertisers but is deeply real, deeply engaged, and deeply underserved by existing infrastructure.</p>
<p>That is the architecture we are building. Not an app with a slightly better UI. A different underlying model.</p>

<h2>Why this matters beyond the creator</h2>
<p>The creator economy in India is not just a media story. It is an economic opportunity for a category of people who have skills, audiences, and work ethic but are currently outside the income infrastructure of the digital economy.</p>
<p>A vernacular creator who can earn a dignified income from their content is a small business. They employ editors, invest in equipment, develop local advertising partnerships, and become economically independent. Multiply that by the tens of millions of creators who could be in that position and the GDP impact is not trivial.</p>
<p>The next significant chapter of India's digital economy is not going to be written in English. It is going to be written in the languages of the 600 million Indians who consume and create content in their mother tongue every day.</p>
<p>The infrastructure for that chapter does not fully exist yet. That is what MeTubez is here to build.</p>
`,
  },
  {
    slug: "250-billion-creator-economy-gap",
    day: 7,
    title:
      "The $250 Billion Creator Economy Gap: Why India Has 50 Million Creators and Almost No Creator Economy",
    tags: ["Creator Economy", "MeTubez", "India", "Investment"],
    cover: "/blog-covers/250-billion-creator-economy-gap.png",
    content: `
<h2>The number that explains the opportunity</h2>
<p>United States creator economy: approximately \$250 billion.</p>
<p>India creator economy: approximately \$0.4 billion.</p>
<p>Number of content creators in the US: roughly 50 million.</p>
<p>Number of content creators in India: over 50 million.</p>
<p>Pause on those last two lines. The creator populations are comparable. The economic output is 625 times different.</p>
<p>This is not a talent gap. This is not a content quality gap. This is an infrastructure gap. The plumbing that converts creator content into creator income does not exist in India in any meaningful form.</p>

<h2>Why the gap exists: the infrastructure stack</h2>
<p>The US creator economy did not emerge from talent alone. It emerged from a stack of interconnected infrastructure that was built over about fifteen years: monetisation platforms with meaningful revenue share, brand partnership marketplaces that connected creators to advertisers efficiently, creator fund mechanisms, merchandise infrastructure, payment systems that worked seamlessly, subscription tools, live commerce capability, and a regulatory environment that treated creator income as legitimate self-employment income.</p>
<p>India has pieces of this stack. It does not have the stack.</p>
<p>YouTube operates in India but with the CPM gap that makes vernacular content economically marginal. Instagram operates in India but does not pay creators; it uses them as free content generators. The indigenous platforms that rose during the TikTok ban in 2020 attracted volume but did not build the monetisation infrastructure that would have made creators economically dependent on them in a positive way.</p>
<p>The brand partnership marketplace is concentrated. The top few thousand creators in India's largest cities capture the overwhelming majority of brand deal value. The other 49 million creators are effectively invisible to the brand partnership economy.</p>

<h2>What the 600 million represent</h2>
<p>India has approximately 600 million people who primarily consume content in languages other than Hindi or English. Marathi, Tamil, Telugu, Kannada, Bengali, Odia, Punjabi, Bhojpuri, Rajasthani, and dozens more.</p>
<p>This is not a niche. This is the majority of India's internet users as they actually exist, not as the startup ecosystem imagines them.</p>
<p>The creator community serving this audience is enormous. It is also almost entirely outside the monetised creator economy. The infrastructure was not built with them in mind.</p>

<h2>The inflection point comparison</h2>
<p>The Indian ecommerce market in 2015 was at an interesting moment. The fundamentals were strong: a large population, growing smartphone penetration, improving payment infrastructure. But the ecommerce economy was a fraction of what it would become. The infrastructure was beginning to connect.</p>
<p>The Indian creator economy in 2025 is at a comparable moment. The fundamentals are stronger than they were in ecommerce in 2015: the content creation behaviour is already established, the audience engagement is already real, the device penetration is already there. What is missing is the monetisation infrastructure.</p>
<p>When ecommerce infrastructure clicked in India, it produced companies like Flipkart, Meesho, Mamaearth, and the D2C ecosystem that followed. The creator economy infrastructure, when it clicks, will produce an equivalent wave of economic activity.</p>

<h2>What MeTubez is building into this gap</h2>
<p>MeTubez is a video platform built under Twenties Entertainment Pvt. Ltd. since 2019. We hold a WIPO PCT international patent on the core technology and a Government of India grant.</p>
<p>The design principle is not to build a better YouTube. It is to build a different kind of monetisation architecture: one where a creator earns from their first video, regardless of subscriber count, content language, or whether a global advertiser considers their audience premium.</p>
<p>The market is not the top 2,000 creators in Mumbai and Delhi. The market is the 50 million creators who are currently outside the monetised economy.</p>
<p>That market has never had infrastructure built specifically for it. That is exactly why it is an infrastructure opportunity rather than a competitive one.</p>
<p>If you are an investor or fund paying attention to the Indian digital economy and have not yet thought carefully about creator economy infrastructure, the numbers in this article are the reason to start.</p>
`,
  },
  {
    slug: "oh-like-youtube-conversation",
    day: 11,
    title: "The Conversation I Have Had 15 Times: Oh, Like YouTube?",
    tags: ["MeTubez", "Creator Economy", "India Startup", "Funny"],
    cover: "/blog-covers/oh-like-youtube-conversation.png",
    content: `
<h2>A transcript of a very common conversation</h2>
<p>Me: "We are building a video platform for Indian vernacular creators that pays from the first video."</p>
<p>Person: "Oh, like YouTube?"</p>
<p>Me: "Not quite like YouTube. YouTube pays you almost nothing if your audience speaks a language other than English. Hindi content CPM is Rs 20 to 60. English content on the same platform is Rs 150 to 400."</p>
<p>Person: "Oh. So like TikTok then?"</p>
<p>Me: "TikTok is banned in India. Also, TikTok does not really pay Indian creators either. Also TikTok is banned."</p>
<p>Person: "Right. Okay. So like Instagram Reels?"</p>
<p>Me: "Instagram does not pay creators. It uses creator content to keep users on Instagram and then monetises those users through advertising. The creator is the raw material, not the beneficiary."</p>
<p>Person: "What about Moj? Josh? Chingari?"</p>
<p>Me: "They attracted volume after the TikTok ban. The monetisation architecture for creators was never the primary design principle. They have been fighting for survival against Instagram Reels more than solving the creator income problem."</p>
<p>Person: "So what is it actually like?"</p>
<p>Me: "It is what you would get if you designed a video platform where creator monetisation was the starting constraint, not an afterthought. Where the revenue model was built for a market where ad CPM alone cannot support creator income. Where the subscriber threshold before you earn anything is zero."</p>
<p>Person: "Oh. That is a big gap."</p>
<p>Yes. That is exactly why we are building it.</p>

<h2>Why the comparisons keep coming</h2>
<p>The "like YouTube" question is not lazy. It is the natural cognitive shortcut for a space that does not have an obvious incumbent. When you are describing a new product, people reach for the most familiar reference point. The reference point for "video platform" is YouTube. For short video, it is TikTok or Reels. For "Indian video," it is Moj or Josh.</p>
<p>The problem is that MeTubez is not trying to compete in any of those existing categories on those existing terms. It is trying to solve a different problem: the structural monetisation failure of vernacular content creators in India.</p>
<p>When you are solving a problem that existing products have not solved, the comparison questions are actually a useful signal. They tell you that the market does not yet have a mental category for what you are building. That is either a problem or an opportunity, depending on how you think about it.</p>

<h2>Why the problem does not have an obvious incumbent</h2>
<p>The reason no dominant platform has solved creator monetisation for vernacular Indian content is not that nobody noticed the gap. It is that solving the gap requires a different monetisation architecture, not just a different interface.</p>
<p>YouTube's architecture is built around advertising CPM. The CPM gap between English and vernacular content is not a YouTube preference; it is a reflection of what international premium advertisers will pay to reach specific audiences. YouTube cannot fix the CPM gap without restructuring its relationship with global advertisers. That is not a problem they are going to solve for the Indian vernacular market.</p>
<p>Instagram's architecture is built around the platform capturing the value that creators generate. Paying creators directly would mean sharing revenue that currently flows entirely to Meta. That structural incentive does not change.</p>
<p>The indigenous platforms lack the monetisation infrastructure and, increasingly, the scale to build it from scratch.</p>
<p>The gap is real. The incumbents have structural reasons not to fill it. And the gap is big enough, 50 million creators, 600 million vernacular content consumers, to justify building something specifically for it.</p>

<h2>What MeTubez actually is</h2>
<p>MeTubez is a video platform built under Twenties Entertainment Pvt. Ltd. since 2019. We hold a WIPO PCT international patent on the core technology. We have a Government of India grant.</p>
<p>The core design principle: monetisation starts from video one, regardless of subscriber count, language, or whether a global advertiser considers your audience premium.</p>
<p>We are building the infrastructure for the 50 million creators who are creating content that India watches every day and earning almost nothing from it.</p>
<p>Not like YouTube. Not like TikTok. Not like Instagram. Built specifically for the problem that none of them are solving.</p>
<p>If you are an investor who has been thinking about this space and wondering whether anyone is actually building the infrastructure layer, the answer is yes. And the conversation is worth having.</p>
`,
  },
  {
    slug: "metubez-build-in-public-update",
    day: 14,
    title:
      "MeTubez: What We Have Built, What We Are Building, and What We Need to Scale",
    tags: ["MeTubez", "Build in Public", "India Startup", "Founder"],
    content: `
<h2>Building in public: the honest version</h2>
<p>LinkedIn is full of founder updates that read like press releases. Milestone achieved. Team excited. Onwards and upwards. What is missing is the honest texture of what building actually looks like, which is messier and more interesting than the highlight version.</p>
<p>This is the actual MeTubez update. What exists, what we are building, what we need, and what we have learned.</p>

<h2>What exists</h2>
<p>Twenties Entertainment Pvt. Ltd. has been operating since 2019. MeTubez is the video platform product within our MeTime app ecosystem.</p>
<p>We hold a WIPO PCT international patent (PCT/IB2022/058509) on the core technology: a real-time three-screen live competition broadcasting mechanism that is one of the distinctive elements of the platform architecture. This is not a provisional or a pending application. It is an issued international patent.</p>
<p>We have a Government of India grant for this technology. This is not a startup grant. It is a technology grant for a specific innovation, which means the underlying technical approach has passed independent technical scrutiny.</p>
<p>The monetisation architecture has been designed from first principles. The key design constraint was this: a creator must be able to earn from their first uploaded video, regardless of their subscriber count, their content language, or whether a premium international advertiser considers their audience worth targeting.</p>
<p>This constraint, taken seriously, forces a different revenue model than advertising CPM. We have built that different model.</p>

<h2>What we are building now</h2>
<p>Platform development is in active progress. The creator onboarding flow, the content management system, the monetisation distribution architecture, and the audience engagement mechanics are all in development.</p>
<p>We are building the creator community before we go wide on platform availability. The first 1,000 creators on MeTubez will not be randomly acquired. They will be intentionally selected from the vernacular creator ecosystem: people who have demonstrated consistent content creation in regional languages, who have real audiences, and who are currently earning almost nothing from the platforms they use.</p>
<p>These creators will help shape what the platform actually is. Not through a focus group. Through use. Through their responses to what works and what does not. The best platform design for a vernacular creator from Gorakhpur is going to come from listening to creators from Gorakhpur, not from our team in Ahmedabad designing based on assumptions.</p>

<h2>What we are looking for</h2>
<p>Investment. We are at the stage where the right capital and the right partnership accelerates everything that needs to happen next: technology development velocity, creator community growth, and the market presence that allows us to recruit the creators and team members who will be the foundation of what MeTubez becomes at scale.</p>
<p>We are specifically interested in investors who understand the Indian vernacular internet deeply. Who have thought about creator economy infrastructure, not just creator content. Who understand that the market we are building for is not a niche but is in fact the majority of India's internet users, and who have the patience for the infrastructure build that realising that opportunity requires.</p>
<p>We are also looking for creator economy advisors. People who have built creator communities, worked in platform monetisation, or have deep connections in the regional language content ecosystem in India or internationally in comparable markets.</p>

<h2>What we have learned</h2>
<p>Building from Ahmedabad rather than from Mumbai or Bengaluru has been an intentional decision that has shaped how we think about the market we are building for. The vernacular creator problem is not a metro problem. Building from outside the metro startup bubble keeps us oriented toward the actual market.</p>
<p>The "like YouTube" comparison comes up in every investor conversation (see my earlier article on this). We have learned that the best response is not to argue against the comparison but to explain the structural reason why YouTube has not and will not solve this problem. That explanation is the investment thesis.</p>
<p>The technology asset, the WIPO patent, is worth more than we initially thought in investor conversations. Not because it creates a legal moat in isolation, but because it signals that we have done the hard, boring, institutional work that most early-stage platforms have not done. It signals we are serious about the technical foundation of what we are building.</p>
<p>The timeline is longer than we initially planned. Building platform infrastructure that works for creators who may have low-end devices, variable connectivity, and no prior creator economy experience requires solving harder UX and infrastructure problems than building for a metro English-speaking creator with a high-end phone and consistent WiFi. We knew this. The reality of it has taken longer than the plan anticipated. This is normal. It is still the right problem to be solving.</p>
<p>If you are an investor, creator economy builder, or ecosystem partner who sees what we see in this market, let us talk.</p>
`,
  },
  {
    slug: "creator-earning-nothing-not-your-fault",
    day: 17,
    title:
      "Dear Creator Making Videos Every Week and Earning Almost Nothing: This Is Not Your Fault",
    tags: ["MeTubez", "Creators India", "Earn Online", "Creator Economy"],
    cover: "/blog-covers/creator-earning-nothing-not-your-fault.png",
    content: `
<h2>First, the numbers so you know you are not imagining it</h2>
<p>If your content gets 100,000 views per month on YouTube and your audience is primarily Hindi or another regional Indian language, your monthly earnings are roughly Rs 1,500 to Rs 5,000.</p>
<p>A creator with the same 100,000 views in English, same platform, same effort, earns roughly Rs 12,000 to Rs 35,000 per month.</p>
<p>If you are making Bhojpuri, Marathi, Tamil, or Odia content and earning less than you expected for the work and audience you have built, you are not underperforming. You are experiencing the CPM gap. You have been given a platform built for a different creator and asked to perform on terms that were never designed for you.</p>
<p>This is not your fault. It is a structural problem with how the platforms are built.</p>

<h2>What the platforms actually do with your work</h2>
<p>YouTube monetises your content primarily through advertising. Advertisers pay based on their confidence that your audience will buy their product. International premium advertisers pay more to reach English-speaking, higher-income audiences. They pay significantly less to reach regional language audiences, not because those audiences are less valuable as human beings, but because those audiences are less likely to buy the specific products those advertisers sell.</p>
<p>The result: your effort, your creativity, your relationship with your audience, produces ad revenue based on what premium advertisers think of your audience rather than what your audience actually thinks of you.</p>
<p>Instagram does not pay you at all for your content. It uses your content to keep people on Instagram and then sells advertising against those people. Your content is the raw material. The revenue from it goes entirely to Meta.</p>
<p>The indigenous platforms, Moj, Josh, Chingari, attracted creators after the TikTok ban with promises of monetisation. Many of those promises were not kept at the scale creators needed, because those platforms were fighting for survival against Instagram rather than solving the creator income problem.</p>

<h2>What a different system looks like</h2>
<p>What if you earned from your first uploaded video?</p>
<p>Not after 1,000 subscribers. Not after 4,000 hours of watch time. From your first video, on the day it goes up.</p>
<p>Not based on what a global advertiser thinks of your audience's income level, but based on the actual engagement, the actual watch time, the actual value your content creates for the people watching it.</p>
<p>Not in a system where your language is a disadvantage, but in a system designed from the ground up for how Indian vernacular creators actually work.</p>
<p>This is the design principle behind MeTubez. A video platform where monetisation starts at video one, regardless of subscriber count, content language, or whether an English-speaking advertiser considers your audience premium.</p>

<h2>What we are building and why it is different</h2>
<p>MeTubez is a video platform built under Twenties Entertainment Pvt. Ltd. since 2019. We hold a WIPO PCT international patent on the core technology and a Government of India grant.</p>
<p>The monetisation architecture is designed around a simple conviction: a creator's earnings should be a function of the value their content creates for their audience, not a function of what global advertisers think of that audience.</p>
<p>We are currently building the creator community that will shape what the platform becomes. Before we go wide, we want to work with creators who have real audiences, consistent content, and a genuine connection with viewers. Creators who are currently outside the monetised creator economy not because they are not good enough but because the existing platforms were not built for them.</p>

<h2>What we are asking</h2>
<p>If you are a creator making content consistently in a regional Indian language, if you have an audience that values what you make, and if you are tired of a system that undervalues what you contribute, we want to talk to you.</p>
<p>Not to make promises we have not built yet. To understand your specific experience, your specific challenges, and what the platform you actually need would look like.</p>
<p>The best product for vernacular creators will come from listening to vernacular creators. That is what we are doing right now.</p>
<p>DM me or find MeTubez contact details in my profile. The conversation is open.</p>
`,
  },
  {
    slug: "next-100-million-creators-not-english",
    day: 21,
    title:
      "The Next 100 Million YouTube Creators Will Not Speak English. And That Is the Biggest Opportunity in the Global Creator Economy Right Now.",
    tags: ["MeTubez", "Creator Economy Global", "India Tech", "International"],
    cover: "/blog-covers/next-100-million-creators-not-english.png",
    content: `
<h2>The geography of the next creator economy wave</h2>
<p>The global creator economy conversation takes place almost entirely in English, about creators who primarily create in English, for audiences whose purchasing power is of interest to global advertisers.</p>
<p>This conversation represents approximately 1.5 billion of the world's 8 billion people.</p>
<p>The other 6.5 billion are creating content. Consuming content. Building communities. Using the internet. Speaking their own languages. And almost entirely outside the monetised creator economy.</p>
<p>The next significant wave of creator economy growth is not going to come from the markets that already have infrastructure. It is going to come from the markets that need infrastructure built specifically for them.</p>
<p>India is the largest and most immediate example of this. But it is not the only one.</p>

<h2>What the numbers look like at scale</h2>
<p>India: 50 million plus content creators, 600 million consumers of non-English content, creator economy valued at approximately \$0.4 billion against a US creator economy of \$250 billion.</p>
<p>Indonesia: 270 million people, 77 languages, a rapidly growing creator community, almost entirely outside the monetised creator economy. YouTube Indonesia has enormous viewership. Creator earnings are a fraction of US or UK equivalents.</p>
<p>Brazil: 215 million people, a massive Portuguese-language creator community that has demonstrated the ability to build extraordinarily engaged audiences. Creator monetisation infrastructure is significantly underdeveloped relative to the size and quality of the creator community.</p>
<p>Nigeria and the broader West African anglophone market: a young, digital-native population with extraordinary creative output in music, comedy, fashion, and lifestyle content. Infrastructure to monetise this output is nascent.</p>
<p>The pattern is consistent across all of these markets: creator population and audience engagement are real. Monetisation infrastructure is not.</p>

<h2>Why the infrastructure does not exist yet</h2>
<p>The existing global platforms, YouTube, Instagram, TikTok, were built by and for Western markets and then expanded internationally. Their monetisation architectures reflect the advertising market structures of their origin contexts: premium CPM rates for premium anglophone audiences, with everything else as a secondary consideration.</p>
<p>Solving this structurally requires not adapting existing platform monetisation for new markets but building monetisation architectures from the ground up for how those markets actually work.</p>
<p>This is harder than expanding an existing platform. It requires understanding how value flows in creator economies where advertising CPM alone cannot support creator income. It requires building payment infrastructure that works in markets where international payment rails are not seamlessly accessible. It requires understanding content discovery mechanics that work for audiences who are searching in their own language.</p>
<p>These are infrastructure problems. They are hard. They are also the problems that create the most durable competitive advantages when solved.</p>

<h2>Why MeTubez starts with India</h2>
<p>India is the most addressable version of this problem for several reasons.</p>
<p>Scale: 1.4 billion people, 50 million creators, 600 million vernacular content consumers. The addressable market is not marginal.</p>
<p>Infrastructure maturity: UPI has made payment infrastructure sophisticated enough to support novel monetisation models. Jio has made internet access democratised enough that the connectivity barrier is significantly reduced. Smartphone penetration is at a level that makes a mobile-first creator platform viable.</p>
<p>Regulatory environment: the Government of India has been actively supporting indigenous digital platforms and creator economy development. Our Government of India grant is evidence of this support.</p>
<p>No clear incumbent: the reasons why YouTube and Instagram have not solved this problem are structural, not competitive. They are not going to solve it. The space is genuinely open.</p>

<h2>What this means for investors thinking globally</h2>
<p>The creator economy infrastructure that India needs is the same infrastructure that Indonesia, Brazil, Nigeria, and eventually many other markets need. A platform that correctly solves the monetisation architecture problem for vernacular Indian creators has a template that is applicable to every comparable market globally.</p>
<p>The investment thesis is not: India's creator economy will grow modestly and MeTubez will capture some of it. The thesis is: the global creator economy's next phase is about emerging market creator infrastructure, India is the most immediate and largest version of this opportunity, and a platform that succeeds in India has a legitimate claim to being the category leader globally.</p>
<p>We are building MeTubez with this in mind. Not as a domestic Indian app. As the first serious attempt to build the infrastructure that makes the global vernacular creator economy real.</p>
<p>If you are an investor who thinks about global creator economy infrastructure and have not spent time on the India opportunity specifically, this is the time. The window of building without a dominant incumbent is not permanent.</p>
`,
  },
  {
    slug: "metubez-monetisation-architecture",
    day: 24,
    title:
      "The MeTubez Monetisation Architecture: How We Are Designing Creator Income from Video One",
    tags: ["MeTubez", "Creator Economy", "Build in Public", "India Startup"],
    cover: "/blog-covers/metubez-monetisation-architecture.png",
    content: `
<h2>The problem with most creator platform monetisation</h2>
<p>The standard creator platform monetisation model works like this: platform attracts creators with the promise of audience. Creators build audience. Platform monetises audience attention through advertising. Platform shares a portion of advertising revenue with creators. Creators who have built large English-language premium audiences earn well. Everyone else earns poorly or not at all.</p>
<p>This model has two structural problems for the market we are building for.</p>
<p>First: advertising CPM is determined by what advertisers will pay to reach specific audiences. Vernacular Indian audiences are valued at significantly less by premium advertisers than English-speaking audiences. No matter how engaged the audience, no matter how much content the creator produces, the CPM ceiling for vernacular content is set by advertiser demand, not by creator effort or audience quality.</p>
<p>Second: the model requires scale before any earnings begin. YouTube's Partner Program requires 1,000 subscribers and 4,000 hours of watch time. For a creator in a smaller regional language community, this threshold may represent years of consistent creation before any income begins. The economic logic of creator monetisation does not work for people who are rationally evaluating their time.</p>
<p>MeTubez's architecture is designed to fix both problems from first principles.</p>

<h2>Layer 1: Base earnings from video one</h2>
<p>Every creator on MeTubez earns from their first uploaded video. Not from their thousandth view. From their first video.</p>
<p>The base earning rate is a function of valid views: views from real people who watched a meaningful portion of the content. The minimum payout threshold is set at a level achievable by a new creator in their first month. The earning does not depend on subscriber count.</p>
<p>The logic: a creator's decision to invest time and creativity in building on MeTubez should produce economic feedback immediately, not after a threshold that may take years to reach. This is how you build a creator community that is genuinely committed to the platform rather than using it as a secondary channel while building on platforms that pay.</p>

<h2>Layer 2: Performance multiplier</h2>
<p>Base earnings are adjusted by a multiplier that reflects content quality signals: watch time percentage, engagement rate, share behaviour, and content consistency. A creator who produces content that people watch fully and share earns more per view than a creator whose content is watched briefly and abandoned.</p>
<p>This creates the right incentives. Creators are rewarded for quality and consistency, not just for upload volume. The platform benefits because content that gets watched fully and shared performs better in every dimension.</p>

<h2>Layer 3: Creator tier system</h2>
<p>As creators build audience and demonstrate consistent quality, they progress through tiers: Bronze, Silver, Gold, Platinum. Each tier carries a higher base CPM and access to additional monetisation mechanisms. The tier system creates a visible progression that gives creators a tangible goal structure and rewards sustained commitment to the platform.</p>

<h2>Layer 4: Bonus pool for growth</h2>
<p>A weekly bonus pool rewards the creators with the highest growth rates, not the highest absolute numbers. This is an important distinction. A creator with 5,000 subscribers who grew by 40% this week is growing faster than a creator with 100,000 subscribers who grew by 2%. The bonus pool rewards growth velocity, which means smaller creators who are building well have a genuine opportunity to earn significantly above their base rate.</p>
<p>This mechanic is specifically designed to keep the economic opportunity real for creators who are not yet at scale. The platform's success depends on creators at every size being economically engaged.</p>

<h2>Layer 5: Brand marketplace</h2>
<p>The fifth layer is a brand marketplace that connects local and regional brands with creators who have relevant audiences. The key design principle here is that the brand marketplace is not restricted to the largest creators. A brand selling a regional food product has more reason to work with a creator who reaches 20,000 highly engaged local consumers than with a creator who reaches 500,000 loosely engaged national consumers.</p>
<p>The platform takes a 15 to 20% fee on brand marketplace transactions. The creator takes the rest directly, without negotiation, without the friction of individual brand deal management.</p>

<h2>Why this architecture matters beyond the feature list</h2>
<p>The architecture described above is not a feature list. It is a design philosophy: creator income should be a function of creator contribution to the platform ecosystem, not a function of what global advertisers value about their specific audience.</p>
<p>This is the architectural difference between MeTubez and the incumbent platforms. We are not adding creator monetisation features onto an advertising business. We are building creator monetisation as the primary design constraint and building the platform architecture around that constraint.</p>
<p>The WIPO PCT patent we hold covers elements of the core technology that enables this architecture. The Government of India grant validates the technical approach.</p>
<p>We are sharing this architecture publicly because the right investors and partners for this round are the ones who understand why the architecture matters, not just what it does. If you are thinking about creator economy infrastructure investment and want to understand how this fits into the broader landscape, the conversation is open.</p>
`,
  },
  {
    slug: "building-metubez-from-ahmedabad",
    day: 27,
    title:
      "Why We Are Building MeTubez from Ahmedabad and Not From Mumbai: The Intentional Geography of a Vernacular Creator Platform",
    tags: ["MeTubez", "Ahmedabad", "Build in Public", "India Startup"],
    cover: "/blog-covers/building-metubez-from-ahmedabad.png",
    content: `
<h2>The question we get asked most often</h2>
<p>When investors and ecosystem people learn that MeTubez is being built from Ahmedabad, the question that follows is usually some version of: why not Mumbai or Bengaluru? Is it a funding issue? A personal preference? Do you plan to relocate as the company scales?</p>
<p>The answer is that the location is intentional, and the intention is directly related to the problem we are solving.</p>

<h2>The problem we are solving is not a Mumbai problem</h2>
<p>MeTubez is a platform for vernacular Indian creators. The creator we are building for is in Gorakhpur, not Goregaon. In Coimbatore, not Colaba. In Patna, not Powai.</p>
<p>The platform that correctly serves this creator needs to be designed by a team that has genuine proximity to the market it is serving. Not proximity in the sense of data or ethnographic research, but proximity in the sense of living in a city whose commercial culture, customer behaviour, and business dynamics are more representative of the India that MeTubez's users come from than anything you experience in Bandra West or Koramangala.</p>
<p>Building from Ahmedabad is a daily forcing function. The conversations we have, the businesses we see, the consumer behaviour we observe, the language in which commerce happens around us: all of this is closer to the reality of our market than the startup bubble of a major metro would be.</p>

<h2>What Ahmedabad's business culture adds to how we build</h2>
<p>Ahmedabad is a serious commercial centre with a business culture that places enormous emphasis on fundamentals: margins, working capital, long-term relationship building, and the practical reality of how value flows between businesses and communities.</p>
<p>This culture is a useful counterweight to the build-fast-break-things culture that sometimes characterises metro startup thinking. The creator economy problem we are solving is a real one affecting real people's economic lives. Building it with a culture that asks "does this actually work for real people" rather than "does this produce impressive metrics" is an asset.</p>
<p>The Gujarati business tradition of building sustainable, profitable businesses rather than maximising burn rate in pursuit of growth metrics also informs how we think about MeTubez's business model. We are not building a venture-scale loss leader. We are building a platform whose monetisation architecture is designed to be real and sustainable, for creators and for us.</p>

<h2>What the metro ecosystem misses about our market</h2>
<p>The Indian startup ecosystem's mental model of the "Indian internet user" is typically: young, urban, English-comfortable, on a recent-generation smartphone, living in a city with reliable 4G or 5G coverage.</p>
<p>This describes a real user. It does not describe the majority of India's 900 million internet users. The majority of India's internet users are primary consumers of vernacular content, comfortable on mid-range devices, in cities and towns that the startup ecosystem has historically not designed for.</p>
<p>Designing a platform for this majority requires a different starting point than designing for the metro default. Ahmedabad gives us that starting point structurally, not as an effort of imagination but as a function of our daily environment.</p>

<h2>The practical implications for the product</h2>
<p>Content creator UX: we are designing for creators who may not have stable WiFi, who upload on 4G, and who use devices with limited processing power. Our team's everyday environment is more likely to expose them to these realities than a Bengaluru tech campus would be.</p>
<p>Language: our team includes people who are fluent in Gujarati, Hindi, and some in regional languages, and who code-switch naturally in daily life between English and vernacular. The vernacular creator's experience of the platform is more likely to be designed correctly by a team that lives that experience.</p>
<p>Business model: the local brand and local advertiser marketplace that forms Layer 5 of MeTubez's monetisation architecture is a model we understand intuitively from Ahmedabad's ecosystem of small and medium businesses that are deeply embedded in local community relationships.</p>

<h2>Will this change as we scale?</h2>
<p>As MeTubez grows, it will need presence in more cities. Creator acquisition, investor relations, and partnership development all eventually require physical presence in multiple locations. We do not plan to remain exclusively in Ahmedabad forever.</p>
<p>But the founding culture, the product instincts, and the market orientation that Ahmedabad has given us will inform how we build even as we grow. The platform will continue to be built for the India that exists outside the startup map, not the India that the startup map imagines.</p>
<p>That is an intentional choice. It is also our largest competitive advantage in a space where most potential competitors would default to building for the metro default user and then trying to adapt for everyone else.</p>
<p>We are building for everyone else from day one. That is why Ahmedabad is not an accident.</p>
`,
  },
];
