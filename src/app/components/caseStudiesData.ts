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
    client: "AVYRO",
    title: "A workforce platform built for the factory floor",
    link: "https://www.linkedin.com/in/anshika-agrawal-b473a521b",
    oneLiner:
      "Designing the end-to-end UI/UX for a B2B industrial workforce product — supervisors and on-ground crews, one shared system.",
    year: "2025",
    role: "Product UI Designer",
    duration: "May 2025 — Present",
    tags: ["B2B SaaS", "0→1", "End-to-end UX"],
    cover: "/avyro-cover.png",
    gallery: [
      "/avyro-cover.png",
      // "https://images.unsplash.com/photo-1668511238530-ab0d1bc3037c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-violet-600/30 via-fuchsia-500/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "AVYRO needed a single product that worked equally well for office-based supervisors and on-ground industrial crews. Most workforce tools serve only one of those two — leaving the other audience with spreadsheets and WhatsApp. I'm leading the UI/UX from a blank canvas: discovery, flows, IA, hi-fi screens, and ongoing dev collaboration.",
    scope: [
      { label: "Role", value: "Lead Product UI Designer" },
      { label: "Team", value: "Designer + 3 engineers + PM" },
      { label: "Platforms", value: "Web (supervisor) + mobile (field)" },
      { label: "Status", value: "In active build" },
    ],
    approach: [
      {
        title: "Listening before sketching",
        body: "I spent the first weeks just listening — to supervisors, to field workers, to the people who handle handoffs in between. The pattern was clear: every friction point lived in a handoff, not inside a single role.",
      },
      {
        title: "Two surfaces, one system",
        body: "Instead of designing one app that compromises for both audiences, I split into two surfaces sharing a component library — a dense web workspace for supervisors and a glanceable mobile view for crews.",
      },
      {
        title: "Design + dev, in the same room",
        body: "I work in Figma but live in dev reviews. Most decisions get pressure-tested with engineers before they ship, so the designs hold up in real conditions, not just in mockups.",
      },
    ],
    insights: [
      "Field users don't read — they glance. Information density on mobile had to drop by ~40%.",
      "Supervisors wanted speed, not simplicity. Removing options actually slowed them down.",
      "Shared components saved weeks of rework once both surfaces started maturing in parallel.",
    ],
    outcomes: [
      { value: "End-to-end", label: "UI/UX ownership" },
      { value: "2 personas", label: "One shared system" },
      { value: "Live build", label: "Shipping iteratively" },
    ],
  },
  {
    slug: "registerkaro",
    client: "Register Karo",
    title: "Legal compliance, made navigable",
    oneLiner:
      "Designed the end-to-end web UI for RegisterKaro — an all-in-one legal and compliance platform for startups and businesses in India.",
    year: "2024",
    role: "Freelance Web UI Designer",
    link: "https://drive.google.com/file/d/1zCxmMCFIfeVsDj1bBXoFDcjz1eEW-6Tn/view?usp=sharing",
    duration: "Freelance Project",
    tags: ["B2B", "Legaltech", "Web UI"],
    cover: "/registerkaro-cover.png",
    gallery: [
      "/registerkaro-cover.png",
      // "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-blue-500/25 via-indigo-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "RegisterKaro helps startups and businesses navigate India's complex legal and compliance landscape. The challenge was making dense regulatory processes feel approachable, trustworthy, and actionable for founders who don't speak legal.",
    scope: [
      { label: "Role", value: "Freelance Web UI Designer" },
      { label: "Platform", value: "Responsive web" },
      { label: "Focus", value: "Service clarity, trust UX" },
      { label: "Live Site", value: "registerkaro.in" },
    ],
    approach: [
      {
        title: "Service architecture first",
        body: "I reorganized the service structure into clear categories — registration, compliance, legal advisory — so users could self-navigate without a sales call.",
      },
      {
        title: "Trust through transparency",
        body: "Added clear pricing indicators, timeline estimates, and process breakdowns on every service page. Users needed to know what to expect before they commit.",
      },
      {
        title: "Professional, not sterile",
        body: "Used a clean, confident design language that feels credible without looking like a government form. Soft blues, structured grids, and readable hierarchy.",
      },
    ],
    insights: [
      "Founders wanted pricing upfront — hiding it behind 'contact us' killed conversion.",
      "Breaking down legal processes into visible steps reduced perceived complexity.",
      "A trustworthy brand experience came from clarity, not from excessive credentials.",
    ],
    outcomes: [
      { value: "Clearer", label: "Service navigation" },
      { value: "Trustworthy", label: "Design language" },
      { value: "Live", label: "Production web UI" },
    ],
  },
  {
    slug: "woods91",
    client: "Woods 91",
    title: "A dining experience that starts online",
    link: "https://drive.google.com/file/d/1fwfd6HrIvc5bgowPw7WA4pCsSBzYKjlO/view?usp=sharing",
    oneLiner:
      "Designed the complete web UI for Woods 91 — an upscale restaurant and bar brand, focused on elevated visual identity and seamless user experience.",
    year: "2024",
    role: "Freelance Web UI Designer",
    duration: "Freelance Project",
    tags: ["B2C", "Hospitality", "Web UI"],
    cover: "/woods91-cover.png",
    gallery: [
      "/woods91-cover.png",
      // "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-amber-500/25 via-yellow-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Woods 91 is a premium dining and bar experience. The website needed to reflect the same elevated, warm, and inviting atmosphere that guests experience in person — while making reservations, menus, and events immediately accessible.",
    scope: [
      { label: "Role", value: "Freelance Web UI Designer" },
      { label: "Platform", value: "Responsive web" },
      { label: "Focus", value: "Brand elevation, visual storytelling" },
      { label: "Live Site", value: "woods91.com" },
    ],
    approach: [
      {
        title: "Atmosphere as interface",
        body: "I designed the site to feel like stepping into the space — warm tones, editorial typography, and immersive imagery that sets the mood before the visit.",
      },
      {
        title: "Menu as hero content",
        body: "Instead of burying the menu in a PDF, I made it a navigable, beautifully presented centerpiece. Users could browse dishes the way they would a gallery.",
      },
      {
        title: "Reservations without friction",
        body: "Placed reservation CTAs strategically throughout the experience, without interrupting the storytelling. The path to booking felt natural, not pushy.",
      },
    ],
    insights: [
      "Users browsed the menu before deciding to book — making it visually rich lifted intent.",
      "A premium feel came from restraint: fewer elements, more breathing room.",
      "Event sections drove repeat visits when positioned as 'what's happening now' rather than static pages.",
    ],
    outcomes: [
      { value: "Elevated", label: "Brand presence" },
      { value: "Seamless", label: "Reservation flow" },
      { value: "Live", label: "Production web UI" },
    ],
  },
  {
    slug: "decor-delights",
    client: "Community Homes",
    link: "https://drive.google.com/file/d/17lPgYL8aZ4JfV22YfzsaWgzv9pMnUlC6/view",
    title: "Decor Delights — a 3D space to design your home together",
    oneLiner:
      "A collaborative 3D home-decor interface where families can visualize, swap, and decide on decor in real time.",
    year: "2023 — 2024",
    role: "Product Designer",
    duration: "Sep 2023 — May 2024",
    tags: ["B2C", "3D", "Collaboration"],
    cover: "/decor-delights-cover.png",
    gallery: [
      "/decor-delights-cover.png",
      // "https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-cyan-500/25 via-sky-400/10 to-transparent",
    span: "md:col-span-5",
    overview:
      "Picking decor as a family is messy — long Pinterest threads, screenshots in WhatsApp groups, and decisions that fall apart when nobody can picture the same room. Decor Delights brings everyone into one shared 3D canvas where ideas live, change, and get committed to.",
    scope: [
      { label: "Role", value: "Product Designer" },
      { label: "Tool", value: "Figma" },
      { label: "Audience", value: "Homeowners & decor enthusiasts" },
      { label: "Outcome", value: "Concept design + flows" },
      // { label: "Design Files", value: "View on Drive" },
    ],
    approach: [
      {
        title: "Watching real conversations",
        body: "I started by reading through how real families pick decor — the back-and-forth, the abandoned tabs, the 'is this the same beige?' moments. The product had to remove ambiguity, not add features.",
      },
      {
        title: "A canvas that feels like play",
        body: "I designed a calm, residential canvas with swappable materials and clear edit affordances. Placing a chair should feel closer to dragging a sticker than configuring software.",
      },
      {
        title: "Collab cues, not chat",
        body: "Instead of a chat panel, I used presence cursors, soft highlight states, and version snapshots — so families can decide together without the noise of yet another messaging app.",
      },
    ],
    insights: [
      "Most decor decisions happen async — the design had to feel safe to leave and return to.",
      "Subtle motion (placing, swapping) made the canvas feel trustworthy, not flashy.",
      "Reducing the material palette improved decisions far more than expanding it.",
    ],
    outcomes: [
      { value: "Smoother", label: "Family decision flow" },
      { value: "Real-time", label: "Co-design canvas" },
      { value: "Shipped", label: "Concept in Figma" },
    ],
  },
  {
    slug: "healthcare",
    client: "Healthcare Web Platform",
    title: "A health platform where the tools are the hero",
    link: "https://anshika0809.github.io/Healthcare",
    oneLiner:
      "A responsive health website with a BMI calculator and personalized recommendations — useful, not just informative.",
    year: "2022",
    role: "Web UI Designer",
    duration: "Feb 2022 — Jun 2022",
    tags: ["Healthcare", "Responsive", "Web"],
    cover: "/healthcare-cover.png",
    gallery: [
      "/healthcare-cover.png",
      // "https://images.unsplash.com/photo-1596236100223-f3c656de3038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    gradient: "from-amber-400/20 via-orange-400/10 to-transparent",
    span: "md:col-span-7",
    overview:
      "Most health sites bury useful tools under marketing. This platform inverts that: the BMI calculator and personalized recommendations are the front door, the content sits behind them.",
    scope: [
      { label: "Role", value: "Web UI Designer" },
      { label: "Stack", value: "Responsive web" },
      { label: "Audience", value: "Everyday users" },
      { label: "Duration", value: "~5 months" },
    ],
    approach: [
      {
        title: "Tool-first IA",
        body: "I rewrote the information architecture so the BMI tool sits above the fold on every device. Articles support the tool, not the other way around.",
      },
      {
        title: "A grid that breathes",
        body: "The layout flexes from a focused mobile view to a richer desktop dashboard without changing the user's mental model.",
      },
      {
        title: "Recommendations with a reason",
        body: "Every recommendation comes with a small 'why' — so users learn alongside the result, not separately.",
      },
    ],
    insights: [
      "Putting the tool first cut the path-to-value to a single tap.",
      "Showing the 'why' behind each recommendation increased perceived credibility.",
      "Soft, neutral colors helped a health product feel calm rather than clinical.",
    ],
    outcomes: [
      { value: "Tool-first", label: "Information architecture" },
      { value: "Responsive", label: "Across devices" },
      { value: "Personalized", label: "Recommendations engine UI" },
    ],
  },
];
