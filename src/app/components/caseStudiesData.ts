export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  oneLiner: string;
  year: string;
  role: string;
  duration: string;
  tags: string[];
  cover: string;
  coverPosition?: string;
  coverScale?: number;
  gallery: string[];
  gradient: string;
  span: string;
  overview: string;
  link?: string;
  scope: { label: string; value: string }[];
  approach: { title: string; body: string }[];
  insights: string[];
  outcomes: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "avyro",
    client: "Avyro",
    title: "Avyro",
    link: "https://www.linkedin.com/in/anshika-agrawal-b473a521b",
    oneLiner:
      "Designed the unified product experience for Avyro, an AEC-focused operations platform built to bring clients, projects, work, finances, HRMS, billing, and timesheets into one system.",
    year: "2025",
    role: "Product UI Designer",
    duration: "May 2025 — Present",
    tags: ["SaaS", "Workforce OS", "0->1"],
    cover: "/avyro-cover.png",
    coverPosition: "center 35%",
    coverScale: 1.18,
    gallery: [
      "/avyro-cover.png",
      // "https://images.unsplash.com/photo-1668511238530-ab0d1bc3037c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-blue-500/25 via-sky-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "AEC companies often manage clients, projects, work tracking, finances, HRMS, billing, and timesheets across disconnected tools, making daily operations fragmented and difficult to oversee. Leadership also lacks a single place to monitor performance, progress, and reporting across the business. Avyro is being built to solve that gap through one unified platform that helps teams work more efficiently while giving management a centralized dashboard to track operations, data, and decisions in one place.",
    scope: [
      { label: "Role", value: "End-to-end UI/UX design" },
      { label: "Platform", value: "SaaS workforce OS" },
      { label: "Focus", value: "User flows, wireframes, hi-fi UI" },
      { label: "Live Site", value: "avyro.io" },
    ],
    approach: [
      {
        title: "Core operations in one system",
        body: "Designed unified product flows for clients, projects, work tracking, billing, finances, HRMS, and timesheets so teams no longer have to switch between disconnected tools.",
      },
      {
        title: "Dashboard for management visibility",
        body: "Created dashboard and reporting experiences that help management view business performance, project progress, and operational data from one central place.",
      },
      {
        title: "AEC-specific workflow foundation",
        body: "Shaped a scalable 0 to 1 product foundation with interfaces tailored to how AEC teams coordinate work, manage operations, and make decisions across departments.",
      },
    ],
    insights: [
      "Mapped fragmented AEC workflows into one connected product experience across operations, finance, and people management.",
      "Designed unified flows for clients, projects, work management, billing, HRMS, and timesheets.",
      "Created dashboards that help management view business data and reporting in one place.",
      "Built low to high-fidelity product UI in collaboration with product and engineering teams.",
      "Shaped the platform with scalability in mind so new modules can fit into the same system over time.",
    ],
    outcomes: [
      { value: "E2E", label: "Design ownership" },
      { value: "XFN", label: "Team collaboration" },
      { value: "0->1", label: "Product building" },
    ],
  },
  {
    slug: "registerkaro",
    client: "SAPS India",
    title: "RegisterKaro — SAPS India",
    oneLiner:
      "Designed and developed the full marketing and lead-generation website for SAPS India, a professional staffing and recruitment agency operating under the RegisterKaro brand.",
    year: "2024",
    role: "UI/UX Designer & Web Developer",
    link: "https://drive.google.com/file/d/1zCxmMCFIfeVsDj1bBXoFDcjz1eEW-6Tn/view?usp=sharing",
    duration: "Freelance Project",
    tags: ["HR Tech", "Staffing", "B2B"],
    cover: "/registerkaro-cover.png",
    gallery: [
      "/registerkaro-cover.png",
      // "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-violet-500/25 via-indigo-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "SAPS India needed a stronger digital presence that could quickly build trust, explain multiple staffing services clearly, and convert visitors into qualified enquiries. The offering spanned employers, job seekers, and 12+ industry verticals — which could easily feel scattered on a single page. The website had to make the brand feel credible, structured, and conversion-ready from the first scroll.",
    scope: [
      { label: "Role", value: "UI/UX Design" },
      { label: "Platform", value: "Responsive web" },
      { label: "Focus", value: "B2B lead generation, trust building" },
      { label: "Live Site", value: "www.registerkaro.in/" },
    ],
    approach: [
      {
        title: "Hero section with trust and enquiry",
        body: "Designed a landing hero with a clear value proposition, enquiry form, and trust metrics so users immediately understand the brand and know what action to take.",
      },
      {
        title: "Service and sector sections made scannable",
        body: "Organised staffing categories, industry verticals, and core offerings into clear sections so employers and job seekers can quickly find the services relevant to them.",
      },
      {
        title: "Proof, content, and conversion layers",
        body: "Added client logos, reviews, blogs, and structured footer content to strengthen credibility while supporting deeper exploration beyond the main CTA.",
      },
    ],
    insights: [
      "Trust metrics and recognisable client logos helped the brand feel established much faster.",
      "Breaking 12+ verticals into an accordion kept the page informative without overwhelming users.",
      "A strong enquiry path worked best when supported by reviews, blogs, and service clarity rather than a single CTA.",
      "Designing for two audiences — employers and job seekers — required clear visual separation without splitting the page into two different experiences.",
    ],
    outcomes: [
      { value: "Wireframes", label: "Lo-fi to hi-fi flows" },
      { value: "UI Screens", label: "Final visual design" },
      { value: "Responsive", label: "Mobile + Desktop" },
    ],
  },
  /* {
    slug: "decor-delights",
    client: "Decor Delights",
    link: "https://drive.google.com/file/d/17lPgYL8aZ4JfV22YfzsaWgzv9pMnUlC6/view",
    title: "Decor Delights",
    oneLiner:
      "Designed the end-to-end UI/UX for Decor Delights, a consumer-facing 3D interior design platform that simplifies home customization.",
    year: "2023 - 2024",
    role: "UI/UX Designer",
    duration: "Sep 2023 — May 2024",
    tags: ["Interior Design", "3D", "Consumer"],
    cover: "/decor-delights-cover.png",
    gallery: [
      "/decor-delights-cover.png",
      // "https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-amber-500/25 via-orange-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "Designed the end-to-end UI/UX for Decor Delights, a consumer-facing 3D interior design platform that simplifies the traditionally complex process of home customization. The product connects homeowners with expert designers through a guided, quiz-driven onboarding flow - making high-end interior design accessible, personal, and affordable.",
    scope: [
      { label: "Role", value: "UI/UX Design" },
      { label: "Platform", value: "3D interior design web platform" },
      { label: "Focus", value: "Onboarding, user flows, hi-fi screens" },
      { label: "Live Site", value: "decordelights.com" },
      // { label: "Design Files", value: "View on Drive" },
    ],
    approach: [
      {
        title: "Quiz-based onboarding",
        body: "Designed a guided onboarding flow to capture room preferences, design style, and project needs before connecting users with designers.",
      },
      {
        title: "Clear 4-step journey",
        body: "Structured the product journey from quiz to design request, confirmation, and final delivery so users always knew what came next.",
      },
      {
        title: "High-fidelity product screens",
        body: "Created screens for account creation, project tracking, gallery browsing, value proposition content, reviews, contact, and footer integrations.",
      },
    ],
    insights: [
      "Quiz-based onboarding flow to capture room preferences and design style.",
      "4-step user journey: quiz -> design request -> confirmation -> final delivery.",
      "High-fidelity screens for account creation and project tracking dashboard.",
      "Gallery and Why Choose Us section with value proposition layout.",
      "Client reviews, contact, and social media integration in footer.",
    ],
    outcomes: [
      { value: "4-step", label: "Guided user flow" },
      { value: "3D", label: "Design delivery" },
      { value: "24x7", label: "Post-project support" },
    ],
  }, */
  {
    slug: "woods91",
    client: "Woods91",
    title: "Woods91",
    link: "https://drive.google.com/file/d/1fwfd6HrIvc5bgowPw7WA4pCsSBzYKjlO/view?usp=sharing",
    oneLiner:
      "Designed and developed the digital experience for Woods91, a real estate platform that helps buyers and investors discover, evaluate, and enquire about property opportunities with more clarity and trust.",
    year: "2024",
    role: "UI/UX Designer & Web Developer",
    duration: "Freelance Project",
    tags: ["Real Estate", "PropTech", "Web UI"],
    cover: "/woods91-cover.png",
    coverPosition: "center center",
    coverScale: 1.08,
    gallery: [
      "/woods91-cover.png",
      // "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-emerald-500/25 via-teal-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "Real estate buyers and investors often face scattered information, low trust, and a high-friction decision-making process when exploring emerging markets. Woods91 needed a digital experience that could present opportunities clearly, build confidence quickly, and guide users from discovery to enquiry. The challenge was to make a complex property-buying journey feel credible, structured, and easy to navigate across high-growth markets like Dholera, NCR, and Gujarat.",
    scope: [
      { label: "Role", value: "UI/UX Design" },
      { label: "Platform", value: "Responsive web" },
      { label: "Focus", value: "Real estate, PropTech" },
      { label: "Live Site", value: "woods91.com" },
    ],
    approach: [
      {
        title: "Hero and property discovery section",
        body: "Structured the landing experience around a clear hero, property search, and listing previews so buyers and investors can start exploring opportunities with clarity.",
      },
      {
        title: "Consultation and buying journey",
        body: "Built a more guided path from browsing to consultation so high-intent users can move from interest to enquiry with less friction and more confidence.",
      },
      {
        title: "Trust-building landing page sections",
        body: "Used amenities, testimonials, FAQs, articles, and location-specific content sections to make the website feel more informative, trustworthy, and decision-friendly.",
      },
    ],
    insights: [
      "Structured complex real estate information into a more guided discovery experience.",
      "Used listings, filters, and consultation touchpoints to reduce friction in decision-making.",
      "Added trust-building content like testimonials, FAQs, and amenities to strengthen credibility.",
      "Created editorial and informational sections to support market education around Dholera and other growth locations.",
      "Balanced lead generation with content depth so users could explore before enquiring.",
    ],
    outcomes: [
      { value: "Guided", label: "Discovery experience" },
      { value: "Trusted", label: "Property exploration" },
      { value: "Conversion", label: "Enquiry-ready design" },
    ],
  },
  {
    slug: "healthcare-website",
    client: "Healthcare",
    title: "Healthcare Web Platform",
    link: "anshika0809.github.io/Healthcare",
    oneLiner:
      "Built a responsive wellness platform that helps users turn basic health inputs into personalized guidance through BMI tracking, diet planning, and yoga recommendations.",
    year: "2022",
    role: "Frontend Developer & UI/UX Designer",
    duration: "Jan 2022 - Feb 2022",
    tags: ["Healthcare", "Web", "Frontend"],
    cover: "/healthcare-cover.png",
    gallery: ["/healthcare-cover.png"],
    gradient: "from-rose-500/20 via-sky-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Health and wellness guidance can often feel generic, confusing, or difficult to act on for everyday users. This platform needed a simple digital experience that could turn basic health inputs into clear, personalized next steps. The challenge was to make BMI tracking, diet planning, and yoga guidance feel interactive, approachable, and useful in one guided journey.",
    scope: [
      { label: "Role", value: "Frontend Development + UI/UX Design" },
      { label: "Platform", value: "Responsive multi-page website" },
      { label: "Focus", value: "Wellness and nutrition tools" },
      {
        label: "Live Site",
        value: "Healthcare: https://anshika0809.github.io/Healthcare",
      },
    ],
    approach: [
      {
        title: "Hero to BMI entry flow",
        body: "Structured the experience so users are first introduced to the platform clearly, then guided into BMI calculation as the main starting point for personalized wellness support.",
      },
      {
        title: "Diet and yoga guidance sections",
        body: "Connected BMI results to diet planning and yoga recommendation sections so users can move from information to practical next steps in one continuous journey.",
      },
      {
        title: "Supporting sections and responsive flow",
        body: "Used clear supporting sections, simple navigation, and responsive layouts to keep the platform approachable and easy to follow across different devices.",
      },
    ],
    insights: [
      "Turned generic wellness browsing into a more guided and actionable user journey.",
      "Used BMI as a simple entry point to personalize diet and yoga recommendations.",
      "Combined multiple wellness tools into one connected experience instead of isolated pages.",
      "Kept the interface lightweight and easy to understand for everyday users with different health-awareness levels.",
      "Designed the platform responsively so the journey remains clear across screen sizes.",
      "Supported usability with clean navigation, supporting sections, and clear content grouping.",
    ],
    outcomes: [
      { value: "BMI", label: "Interactive calculator" },
      { value: "4", label: "Diet plan categories" },
      { value: "Yoga", label: "Body-type guidance" },
    ],
  },
  /* {
    slug: "rehwasi-society",
    client: "Rehwasi Society",
    title: "Rehwasi Society",
    link: "https://anshika0809.github.io/rehwasisociety",
    oneLiner:
      "Designed the UI/UX for Rehwasi Society, a digital society platform built to make residential communities safer, smarter, and easier to manage.",
    year: "2022",
    role: "UI/UX Designer",
    duration: "Feb 2022 - Jun 2022",
    tags: ["Smart Society", "PropTech", "Residential"],
    cover: "/rehwasi.png",
    gallery: ["/rehwasi.png"],
    gradient: "from-emerald-500/25 via-teal-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "Designed the UI/UX for Rehwasi Society, a digital platform for modern residential communities. The product brings together society communication, access, services, and everyday management into a single interface so residents can navigate community life more safely and conveniently while the brand presents itself as a complete digital solution.",
    scope: [
      { label: "Role", value: "UI/UX Design" },
      { label: "Platform", value: "Society management website" },
      { label: "Focus", value: "Trust, navigation, residential services" },
      { label: "Live Site", value: "anshika0809.github.io/rehwasisociety" },
    ],
    approach: [
      {
        title: "Trust-led landing experience",
        body: "Built the homepage around a strong hero, dark overlay, and simple top navigation so visitors quickly understand RehWasi as a secure digital society solution.",
      },
      {
        title: "Clear information architecture",
        body: "Structured the experience around familiar website sections like home, about, products, features, blog, and contact to support both discovery and credibility.",
      },
      {
        title: "Residential brand storytelling",
        body: "Used warm city imagery, high-contrast typography, and supportive messaging to position the platform as both modern and community-friendly.",
      },
    ],
    insights: [
      "A cinematic hero section helped the platform feel more premium and secure.",
      "Straightforward navigation labels made the society offering easier to scan for first-time visitors.",
      "Overlay treatment preserved readability while still letting the background image carry brand mood.",
      "The design balances promotional storytelling with practical society-product positioning.",
    ],
    outcomes: [
      { value: "Secure", label: "Brand positioning" },
      { value: "6", label: "Primary nav sections" },
      { value: "Hero", label: "Led storytelling" },
    ],
  }, */
];
