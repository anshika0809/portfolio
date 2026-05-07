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
      "Led end-to-end UI/UX design for Avyro, a workforce operating system built to streamline how organizations manage people, projects, and processes.",
    year: "2025",
    role: "Product UI Designer",
    duration: "May 2025 — Present",
    tags: ["SaaS", "Workforce OS", "0->1"],
    cover: "/avyro-cover.png",
    gallery: [
      "/avyro-cover.png",
      // "https://images.unsplash.com/photo-1668511238530-ab0d1bc3037c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-blue-500/25 via-sky-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Led end-to-end UI/UX design for Avyro, a workforce operating system built to streamline how organizations manage people, projects, and processes. Responsible for the full design lifecycle - from early user flows and wireframes to polished, production-ready high-fidelity interfaces - while working closely with product, engineering, and business stakeholders.",
    scope: [
      { label: "Role", value: "End-to-end UI/UX design" },
      { label: "Platform", value: "SaaS workforce OS" },
      { label: "Focus", value: "User flows, wireframes, hi-fi UI" },
      { label: "Live Site", value: "avyro.in" },
    ],
    approach: [
      {
        title: "E2E design ownership",
        body: "Owned core product design from early flows and journey maps through polished high-fidelity interfaces for workforce modules.",
      },
      {
        title: "Cross-functional collaboration",
        body: "Worked closely with product, engineering, and business teams to keep designs practical, scalable, and ready for development handoff.",
      },
      {
        title: "0->1 product building",
        body: "Iterated feature designs based on product feedback and usability testing while shaping a design system for long-term scalability.",
      },
    ],
    insights: [
      "User research, flows, and journey maps for core workforce modules.",
      "Low and mid-fidelity wireframes for rapid iteration and stakeholder alignment.",
      "High-fidelity UI with design system components for scalability.",
      "Cross-functional collaboration with engineering for dev-ready handoffs.",
      "Iterative feature design based on product feedback and usability testing.",
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
    title: "RegisterKaro - SAPS India",
    oneLiner:
      "Designed and developed the full marketing and lead-generation website for SAPS India (Skills and Placement Services), a professional staffing and recruitment agency operating under the RegisterKaro brand.",
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
      "Designed and developed the full marketing and lead-generation website for SAPS India (Skills and Placement Services), a professional staffing and recruitment agency operating under the RegisterKaro brand. The platform positions SAPS India as a trusted hiring partner for businesses and job seekers across 12+ industry verticals, driving enquiries for permanent staffing, executive search, CXO hiring, and HR consulting.",
    scope: [
      { label: "Role", value: "UI/UX Design + Web Development" },
      { label: "Platform", value: "Responsive web" },
      { label: "Focus", value: "B2B lead generation, trust building" },
      { label: "Live Site", value: "sapsindia.com" },
    ],
    approach: [
      {
        title: "Trust-first landing experience",
        body: "Designed a conversion-focused hero with an enquiry form and animated trust-metric counters so visitors immediately understood SAPS India's credibility and service range.",
      },
      {
        title: "Complex services, made scannable",
        body: "Structured the site around staffing categories, industry sectors, client logos, and reviews so both employers and job seekers could quickly find relevance without friction.",
      },
      {
        title: "Lead-gen with depth",
        body: "Balanced conversion design with informative content through service cards, sector accordions, blogs, and a structured footer that supports deeper exploration.",
      },
    ],
    insights: [
      "Trust metrics and recognizable client logos helped the brand feel established much faster.",
      "Breaking 12+ verticals into an accordion kept the page informative without overwhelming users.",
      "A strong enquiry path worked best when supported by reviews, blogs, and service clarity rather than a single CTA.",
    ],
    outcomes: [
      { value: "1,000+", label: "Positions filled" },
      { value: "11+", label: "Years of experience" },
      { value: "99%", label: "Client retention" },
    ],
  },
  {
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
  },
  {
    slug: "woods91",
    client: "Woods91",
    title: "Woods91",
    link: "https://drive.google.com/file/d/1fwfd6HrIvc5bgowPw7WA4pCsSBzYKjlO/view?usp=sharing",
    oneLiner:
      "Designed and developed the end-to-end digital presence for Woods91, a real estate platform focused on Dholera Smart City.",
    year: "2024",
    role: "UI/UX Designer & Web Developer",
    duration: "Freelance Project",
    tags: ["Real Estate", "PropTech", "Web UI"],
    cover: "/woods91-cover.png",
    gallery: [
      "/woods91-cover.png",
      // "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-emerald-500/25 via-teal-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Designed and developed the end-to-end digital presence for Woods91, a real estate platform focused on Dholera Smart City - India's first greenfield smart city. The product helps investors and homebuyers discover, compare, and transact properties across emerging high-growth markets in NCR and Gujarat.",
    scope: [
      { label: "Role", value: "UI/UX Design + Web Development" },
      { label: "Platform", value: "Responsive web" },
      { label: "Focus", value: "Real estate, PropTech" },
      { label: "Live Site", value: "woods91.com" },
    ],
    approach: [
      {
        title: "Property discovery flow",
        body: "Designed full website UI for property search, filters, and listings so investors and homebuyers could scan opportunities quickly.",
      },
      {
        title: "Guided buying journey",
        body: "Created a 3-step homebuying funnel with guided consultation flow to reduce decision friction for high-intent users.",
      },
      {
        title: "Trust and content system",
        body: "Built sections for amenities, FAQs, testimonials, news, articles, newsletter subscription, and a multi-location footer system.",
      },
    ],
    insights: [
      "Full website UI - hero, property search, filters, and listings.",
      "3-step homebuying funnel with guided consultation flow.",
      "Amenities showcase, FAQ accordion, and testimonials section.",
      "News and articles layout for Dholera investment content.",
      "Newsletter subscription and multi-location footer system.",
    ],
    outcomes: [
      { value: "8K+", label: "Happy customers" },
      { value: "500+", label: "Properties listed" },
      { value: "680", label: "Awards won" },
    ],
  },
  {
    slug: "rehwasi-society",
    client: "Rehwasi Society",
    title: "Rehwasi Society",
    link: "https://anshika0809.github.io/rehwasisociety",
    oneLiner:
      "Designed the UI/UX for Rehwasi Society, a smart home platform built for modern residential communities.",
    year: "2022",
    role: "UI/UX Designer",
    duration: "Feb 2022 - Jun 2022",
    tags: ["Smart Home", "PropTech", "HealthTech"],
    cover: "/healthcare-cover.png",
    gallery: [
      "/healthcare-cover.png",
      // "https://images.unsplash.com/photo-1596236100223-f3c656de3038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-emerald-500/25 via-teal-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Designed the UI/UX for Rehwasi Society, a smart home platform built for modern residential communities. The product digitizes everyday society management - giving residents app-based access control, real-time usage tracking, seamless amenity booking, and integrated payment flows - all in one unified interface.",
    scope: [
      { label: "Role", value: "UI/UX Design" },
      { label: "Platform", value: "Smart living platform" },
      { label: "Focus", value: "Access control, usage tracking, booking" },
      { label: "Live Site", value: "anshika0809.github.io/rehwasisociety" },
    ],
    approach: [
      {
        title: "App-based access control",
        body: "Designed resident-facing access control flows for gates and common areas with a simple, app-based interaction model.",
      },
      {
        title: "Live usage dashboard",
        body: "Created utility and amenity usage tracking screens that make everyday society activity easier to monitor in real time.",
      },
      {
        title: "Booking and payments",
        body: "Mapped amenity booking and integrated payment flows for maintenance and facility charges in one responsive interface.",
      },
    ],
    insights: [
      "App-based digital access control for gates and common areas.",
      "Real-time utility and amenity usage tracking dashboard.",
      "Amenity booking flow - gym, pool, clubhouse, and community spaces.",
      "Integrated payment interface for maintenance and facility charges.",
      "Resident-facing web interface with responsive layout.",
    ],
    outcomes: [
      { value: "App", label: "Based access control" },
      { value: "Live", label: "Usage tracking" },
      { value: "1-tap", label: "Amenity booking" },
    ],
  },
];
