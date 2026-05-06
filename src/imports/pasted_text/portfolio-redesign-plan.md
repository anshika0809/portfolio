I want to completely redesign my existing portfolio — not just restyle it, but rebuild the entire layout, structure, interactions, and feel from the ground up. The end result should stand alongside the world's best product design portfolios (Stripe, Linear, Rauno Fäderholm, Paco Coursey, Lusion, Bruno Simon level of craft). This is for a SENIOR PRODUCT UI DESIGNER. Every decision should communicate authority, taste, and systems-level thinking.

━━━━━━━━━━━━━━━━━━━━━━━━
STEP 0 — DEEP RESEARCH FIRST (mandatory before any design decisions)
━━━━━━━━━━━━━━━━━━━━━━━━
Before writing a single line of code or making any layout decisions, conduct deep research on:

1. The world's best current product designer portfolios (2024–2025) — analyse structure, typography, animation style, project presentation, hero sections, case study format
2. Best-in-class UI fonts currently used on top portfolios and design-forward sites — evaluate legibility, character, pairing options, and licensing (prioritise: Geist, Inter, Söhne, Satoshi, General Sans, Cabinet Grotesk, Plus Jakarta Sans, Neue Montreal)
3. Animation and interaction patterns that feel premium but purposeful — not decorative noise. Research: scroll-triggered reveals, magnetic hover effects, smooth page transitions, cursor customisation, staggered card entrances
4. Mobile UX patterns for portfolio sites — how world-class portfolios handle navigation, project cards, and case studies on small screens
5. Contact/CTA patterns that convert — specifically LinkedIn DM integration approaches

Summarise your research findings before proceeding. I want to see what you found and approve the direction.

━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — GATHER MY ASSETS (ask me explicitly for each)
━━━━━━━━━━━━━━━━━━━━━━━━
Before designing, ask me for:

• My existing portfolio code / live URL (so you can analyse and modify — not rebuild from zero unnecessarily)
• Real screenshots of each project/site I've worked on — specify exact dimensions, format (PNG/WebP), and how many you need per project
• My name, title, one-line bio, and the tagline I want in the hero
• List of projects with: title, my role, 2–3 sentence description, key outcome/metric, and URL if live
• My LinkedIn profile URL (for contact DM integration)
• Any existing brand colours or typography preferences — or confirm you'll recommend based on research
• My photo (for about section, if desired)

Do not use placeholder images, stock UI screenshots, or Lorem Ipsum. If an asset is missing, leave a clearly labelled slot with the exact spec: filename, dimensions, format.

━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — STRUCTURAL PLAN (get approval before building)
━━━━━━━━━━━━━━━━━━━━━━━━
Present a written structural plan covering:
- Chosen font pairing with rationale
- Colour palette (3–4 tokens max: background, text, accent, subtle)
- Section order and what each section contains
- Animation/interaction approach — what triggers what
- Mobile strategy overview
- How the LinkedIn contact integration will work

I will approve or revise before you write any code.

━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — BUILD (only after approval)
━━━━━━━━━━━━━━━━━━━━━━━━

TYPOGRAPHY
• Use the best UI font for portfolio sites — based on your research. Prioritise variable fonts for performance. Load via Google Fonts or self-host if better.
• Type hierarchy must do heavy lifting: the visitor should understand who I am and what I do before reading a single word — purely through scale, weight, and rhythm
• Body text: high legibility, comfortable line-height (1.65–1.8), generous measure
• No system fonts unless genuinely intentional

LAYOUT & STRUCTURE
• Hero: full-impact above-the-fold. Name + title + one punchy line. Animated entrance. Scroll cue.
• Work/Projects section: editorial — magazine-spread energy, not a grid dump. Mix layout rhythms across cards (one full-width, two halves, etc.)
• Each project card: real screenshot as the visual anchor. Project title, my role, one-line outcome. Hover reveals a subtle overlay with a "View case study" CTA.
• About section: brief, human, confident. No buzzword soup.
• Contact section: LinkedIn DM as the primary CTA (see spec below). Secondary: email copy.
• Footer: date, name, one quiet line. Nothing more.

CONTACT — LINKEDIN DM INTEGRATION
• The primary contact button must open a LinkedIn DM directly to my profile
• Use this URL pattern: https://www.linkedin.com/messaging/compose/?recipient=[MY_LINKEDIN_ID]
• Button label: "Send me a message" or similar — not generic "Contact me"
• The button should feel like a designed object — not a default anchor tag. Custom hover state, smooth transition, maybe a subtle arrow or send icon animation on hover
• No contact form. No mailto. LinkedIn DM only as primary (with email as quiet secondary option beneath)

ANIMATIONS & INTERACTIONS
• Scroll-triggered section reveals: elements fade + translate up as they enter viewport (IntersectionObserver, no heavy libraries unless needed)
• Hero text: staggered character or word entrance on load — subtle, not theatrical
• Project cards: smooth lift + shadow on hover. Image scale 1.03. Transition: 350ms ease
• Cursor: consider a custom cursor on desktop (subtle dot or ring that follows mouse — only if it adds to the senior designer feel, not if it feels gimmicky)
• Page load: clean fade-in, no flash of unstyled content
• All animations must respect prefers-reduced-motion

MOBILE (FULLY RESPONSIVE — FIRST-CLASS, NOT AFTERTHOUGHT)
• Mobile nav: hamburger or slide-in drawer — smooth, accessible
• Project cards stack to single column with full-width images
• Hero text scales gracefully — no overflow, no awkward breaks
• Touch targets minimum 44×44px
• Font sizes: scale down proportionally using clamp() — never drop below readable
• Contact button must be thumb-friendly — full-width on mobile
• Test at 375px, 390px (iPhone), 430px (Pro Max), 768px (iPad)
• Sticky mobile header with blur backdrop

TECHNICAL STANDARDS
• Semantic HTML5 — proper landmark regions (header, main, section, footer)
• CSS custom properties for all design tokens
• No heavy UI frameworks unless genuinely needed — preference for lean, clean vanilla or minimal dependencies
• Images: lazy loading, correct aspect ratios, WebP with fallback
• Performance: no render-blocking resources, font-display: swap
• Accessibility: WCAG AA minimum — focus states, aria-labels, alt text on all images
• Smooth scroll behaviour
• Open Graph meta tags (so sharing the portfolio link looks good)

WORLD-CLASS REFERENCE BAR
The finished portfolio should be able to sit next to:
- Rauno Fäderholm (rauno.me)
- Paco Coursey (paco.me)
- Stripe's design team pages
- Linear's marketing site craft level
Not as copies — but at that level of considered, unhurried quality.

━━━━━━━━━━━━━━━━━━━━━━━━
RULES
━━━━━━━━━━━━━━━━━━━━━━━━
• Do not start building until: research is shared, assets are collected, and structural plan is approved
• Do not use placeholder or stock images — ever
• Do not use cookie-cutter layouts (hero image left, text right, cards grid below)
• Do not add sections that don't earn their place
• If you're unsure about any asset or decision — ask, don't assume