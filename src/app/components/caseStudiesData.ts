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
    slug: "magicgrab",
    client: "magicpin",
    title: "Magic Grab — magicpin",
    oneLiner:
      "A self-project concept for magicpin that explores group ordering as a growth mechanic to increase repeat engagement and shared purchasing behavior.",
    year: "2026",
    role: "Product Designer",
    duration: "Design Challenge",
    tags: ["Growth", "Social", "Mobile"],
    // image filename: MagicGrab
    cover: "/MagicGrab.png",
    coverPosition: "center 40%",
    coverScale: 1.15,
    gallery: ["/MagicGrab.png"],
    gradient: "from-purple-700/20 via-rose-600/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Magic Grab is a group-ordering feature built into magicpin to turn single-use discounts into repeat social ordering behavior. Users start a group, invite friends, and once the group is full a short countdown encourages everyone to order together — creating a shared goal and increasing return frequency.",
    scope: [
      { label: "Role", value: "Product Design" },
      { label: "Platform", value: "Mobile (in-app)" },
      { label: "Focus", value: "DAU growth, social mechanics" },
    ],
    approach: [
      {
        title: "Creator + Joiner flows",
        body: "Designed group creation, size selection, lobby, and completion screens plus a joiner flow for invite previews and in-app join UX.",
      },
      {
        title: "Live ordering experience",
        body: "Built persistent countdown banners, group context in the menu, and checkout flows that surface shared cashback and group goals.",
      },
      {
        title: "Anti-abuse and edge cases",
        body: "Added guardrails for expired invites, full groups, out-of-delivery-area handling, and a one-group-per-day restriction to reduce abuse.",
      },
    ],
    insights: [
      "Group ordering turned one-off discounts into social hooks that encouraged repeat visits.",
      "Shared cashback and visible group goals increased urgency and return rates within 48 hours.",
      "Invite previews (WhatsApp) and clear lobby UX improved join conversion for invited users.",
    ],
    outcomes: [
      { value: "~3,200", label: "Est. daily reactivated DAU" },
      { value: "20%", label: "Max cashback (party tier)" },
      { value: "55–65%", label: "Est. 48hr return rate" },
    ],
  },
  {
    slug: "bsc",
    client: "Bombay Shaving Company",
    title: "Bombay Shaving Company",
    oneLiner:
      "A self-project redesign for Bombay Shaving Company focused on bringing stronger brand storytelling and clearer conversion paths to the homepage.",
    year: "2026",
    role: "UI/UX Designer",
    duration: "Homepage Redesign",
    tags: ["E‑commerce", "Brand", "Conversion"],
    // image filename: BSC - Landing Page
    cover: "/BSC-LandingPage.png",
    coverPosition: "center left",
    coverScale: 1.05,
    gallery: ["/BSC-LandingPage.png"],
    gradient: "from-amber-700/20 via-amber-500/8 to-transparent",
    span: "md:col-span-5",
    overview:
      "Redesigned the homepage to preserve strong selling power while making the brand voice visible — moving from a generic product list to a brand-led, conversion-focused landing experience.",
    scope: [
      { label: "Role", value: "UI/UX Design" },
      { label: "Platform", value: "Responsive Web" },
      { label: "Focus", value: "Homepage conversion" },
    ],
    approach: [
      {
        title: "Hero & CTA consolidation",
        body: "Created a brand-led hero with a single above-the-fold CTA and trust stats to push immediate conversions.",
      },
      {
        title: "Product cards & gifting",
        body: "Designed grooming essentials cards, gifting space with Gift Sets, and clear product specs with brand voice per card.",
      },
      {
        title: "Proof & credibility",
        body: "Added real ratings, savings, brand storytelling, and dermatologist-reviewed content to improve trust and reduce bounce.",
      },
    ],
    insights: [
      "A single focused CTA above the fold increased clarity for ready-to-buy users.",
      "Brand-driven content helped the product feel like a curated collection rather than a generic list.",
    ],
    outcomes: [
      { value: "+10–15%", label: "Add-to-cart rate" },
      { value: "-12–18%", label: "Bounce rate" },
      { value: "+20–25%", label: "Scroll depth" },
    ],
  },
  {
    slug: "avyro",
    client: "Avyro",
    title: "Avyro",
    oneLiner:
      "Unified operations platform for AEC — clients, projects, work, finances, HRMS, billing, and timesheets.",
    // Avyro spans 2025-2026
    year: "2025–2026",
    role: "Product UI Designer",
    duration: "May 2025 — Present",
    tags: ["SaaS", "Workforce OS", "0->1"],
    cover: "/avyro-cover.png",
    coverPosition: "center 35%",
    coverScale: 1.18,
    gallery: ["/avyro-cover.png"],
    gradient: "from-blue-500/25 via-sky-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "Avyro brings disconnected AEC tools into one unified platform for teams and management — combining project work, billing, finances, HRMS, and timesheets with dashboards for visibility and reporting.",
    scope: [
      { label: "Role", value: "End-to-end UI/UX design" },
      { label: "Platform", value: "SaaS workforce OS" },
      { label: "Focus", value: "User flows, wireframes, hi-fi UI" },
      // { label: "Research", value: "User interviews, stakeholder workshops" },
      // { label: "Delivery", value: "Design system + handoff" },
    ],
    approach: [
      {
        title: "Core operations in one system",
        body: "Designed unified flows for clients, projects, work tracking, billing, finances, HRMS, and timesheets so teams avoid context switching.",
      },
      {
        title: "Dashboard for visibility",
        body: "Created reporting and dashboard experiences to surface performance and project progress to management.",
      },
      {
        title: "Design system & accessibility",
        body: "Established component patterns, tokens, and accessibility guidelines to ensure scalable, consistent UI across modules.",
      },
      {
        title: "Cross-functional delivery",
        body: "Worked closely with product managers and engineering to align scope, prioritize MVP modules, and deliver iterative releases.",
      },
    ],
    insights: [
      "Mapped fragmented AEC workflows into a connected product experience.",
      "User interviews uncovered key admin pain points around reporting and time capture.",
      "Design system decisions reduced UI inconsistencies and sped up handoffs.",
      "Iterative releases enabled feedback-driven improvements to billing and timesheet flows.",
    ],
    outcomes: [
      { value: "E2E", label: "Design ownership" },
      { value: "XFN", label: "Team Collaboration" },
      { value: "0->1", label: "Product building" },
    ],
  },
  {
    slug: "makemytrip",
    client: "MakeMyTrip",
    title: "MakeMyTrip",
    oneLiner:
      "A self-project redesign for MakeMyTrip that simplifies key mobile flows to reduce friction and make everyday travel actions faster.",
    year: "2026",
    role: "UX Designer",
    duration: "3‑screen redesign",
    tags: ["Travel", "Mobile App", "UX Audit"],
    // image filename: MMT Redesign
    cover: "/MMT-Redesign.png",
    coverPosition: "center 20%",
    coverScale: 1.12,
    gallery: ["/MMT-Redesign.png"],
    gradient: "from-sky-900/20 via-sky-600/8 to-transparent",
    span: "md:col-span-7",
    overview:
      "Redesigned core home and profile experiences to reduce decision fatigue and make common actions faster — simplifying the dashboard from 16 actions to 8 and compressing the Myra AI flow.",
    scope: [
      { label: "Role", value: "UX Audit & Redesign" },
      { label: "Platform", value: "Mobile App" },
      { label: "Focus", value: "Friction reduction" },
    ],
    approach: [
      {
        title: "Simplify primary actions",
        body: "Cut home actions from 16 to 8, surface pricing and ratings on airline cards, and add a 'More Services' entry for secondary actions.",
      },
      {
        title: "Profile drawer consolidation",
        body: "Merged scattered rewards and surfaced myCash balance and upcoming trips in a single view for quicker access.",
      },
      {
        title: "Compress Myra AI",
        body: "Collapsed a multi-step assistant flow into one screen with always-visible input and suggestions.",
      },
    ],
    insights: [
      "Reducing choices on the home screen lowered cognitive load and sped task completion.",
      "Bringing high-use items forward improved discoverability and reduced hidden actions.",
    ],
    outcomes: [
      { value: "16→8", label: "Home actions simplified" },
      { value: "3", label: "Screens redesigned" },
      { value: "1", label: "Step Myra AI flow" },
    ],
  },
];
