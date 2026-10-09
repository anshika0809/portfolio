import { useEffect, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Monitor } from "lucide-react";
import avyroCover from "../../imports/avyro-cover.png";
import magicPinCover from "../../imports/MagicGrab.png";
import magicGrabUserFlow from "../../imports/MagicGrab_User Flow.png";
import magicGrabNotification from "../../imports/MagicGrab_Notification.png";
import magicGrabInviteFriends from "../../imports/MagicGrab_Invite Friends.png";
import magicGrabCreateGroup from "../../imports/MagicGrab_Create Group - Duo.png";
import tutedudeCover from "../../imports/Tutedude.png";
import tutedudeUserFlow from "../../imports/Tutedude_User Flow_diagram.jpeg";
import tutedudeCourseView from "../../imports/Tutedude_Course_View.jpeg";
import tutedudeCourseContent from "../../imports/Tutedude_Lecture - Course Content.png";
import tutedudeProgress from "../../imports/Tutedude_course_progress.jpeg";
import workzaCover from "../../imports/Workza_HRMS_-_LOgin.jpeg";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const BG = "#F7F5F2";
const TEXT = "#1C1A17";
const MUTED = "#6E6B66";
const DIM = "#B5B2AD";
const ACCENT = "#1B4332";
const BORDER = "rgba(28,26,23,0.09)";
const screenshotGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
  gap: "0.875rem",
  alignItems: "start",
};
const screenshotCardStyle: CSSProperties = {
  margin: 0,
  padding: "0.75rem",
  background: "#fff",
  border: `1px solid ${BORDER}`,
  borderRadius: "0.75rem",
};
const screenshotImageStyle: CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: "0.4rem",
};
const screenshotCaptionStyle: CSSProperties = {
  fontFamily: SANS,
  fontSize: "0.7rem",
  color: MUTED,
  marginTop: "0.65rem",
};

const RESUME =
  "https://drive.google.com/file/d/1wUBBRWKKRXbSQO4lxn_-IAh9YUpZ58Zy/view?usp=sharing";

function CaseStudyImage({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style: CSSProperties;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View ${alt} full screen`}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          border: 0,
          background: "transparent",
          cursor: "zoom-in",
        }}
      >
        <img src={src} alt={alt} style={style} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} full-screen view`}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              background: "rgba(15,15,15,0.92)",
              cursor: "zoom-out",
            }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close full-screen image"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.35)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
            <img
              src={src}
              alt={alt}
              onClick={(event) => event.stopPropagation()}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                cursor: "default",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const projects = [
  {
    id: 1,
    num: "01",
    title: "Kar Pragati",
    company: "Karpragati Technologies",
    platform: "Web/Mobile App",
    tags: ["Product Design", "Client & In-House", "Web & Mobile"],
    year: "2026",
    accent: "#1B4332",
    accentBg: "#EDF5F0",
    image: workzaCover,
    driveLink: null as string | null,
    resources: [] as { label: string; href: string }[],
    brief:
      "Designing client products and in-house platforms across HRMS, EV fleet management, and social creatives.",
    role: "Product Designer",
    duration: "Aug 2026 – Present",
    overview:
      "Karpragati Technologies is an IT solutions and services company that designs and builds applications around client needs, while also developing its own products. I work across client projects and internal product revamps, including Workza, an HRMS for blue-collar and white-collar staff, and Aameego, an EV and fleet management application for riders and service teams.",
    problem:
      "Client projects each bring different users, needs, and goals. The in-house products serve equally varied audiences: Workza must be approachable for employees while offering HR and managers the depth they need, and Aameego has to surface clear, timely information for people on the move.",
    // context: "Client and in-house products · Web and mobile",
    myRole:
      "Own the design process end to end, from research and thinking documents through user flows and final interfaces. I design client projects before development, hand work over to developers and stay involved through the build, lead revamps of Workza and Aameego, and create social creatives for the company.",
    contributions: [
      "Research client and product needs, then document the goals and design direction before screens.",
      "Map user flows, create wireframes, and develop high-fidelity UI for web and mobile experiences.",
      "Design distinct experiences for different roles, including employees, HR teams, managers, riders, and service teams.",
      "Hand designs over to developers and stay involved to help the delivered product match the design.",
      "Lead revamps of in-house products Workza and Aameego, and create creatives for company social channels.",
    ],
    processNote:
      "Research and thinking documents → User flows → Wireframes → High-fidelity UI → Developer handoff and build support",
    learnings:
      "One product can serve very different users, so each role needs its own experience. Working across client projects and in-house products means switching between tailored design and a shared system. Good handoff decisions matter as much as good screens.",
  },
  {
    id: 2,
    num: "02",
    title: "Magic Grab",
    company: "magicpin",
    platform: "Mobile App",
    tags: ["Consumer App", "Mobile", "Growth / Retention"],
    year: "2026",
    accent: "#A33D00",
    accentBg: "#FBF0EA",
    image: magicPinCover,
    driveLink:
      "https://drive.google.com/file/d/1q0xUnp72Gc1_CVEky20c88xyaULM4yPL/view?usp=sharing" as
        | string
        | null,
    resources: [
      {
        label: "UI screens (PDF)",
        href: "https://drive.google.com/file/d/16Tv4CNBB3Jv0L2Y-UNOrW-z2GzuFOlJM/view?usp=sharing",
      },
      {
        label: "Prototype (Figma)",
        href: "https://www.figma.com/proto/NqyBQFbmcBnYkqvMyjmG4z/Magic-Grab--Group-Order-?node-id=23-713&t=mffWHEQVJNpnIHcL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=23%3A713&show-proto-sidebar=1",
      },
    ],
    brief:
      "A group ordering experience where the countdown is the product, and the cashback is the reason you do it again tomorrow.",
    role: "Self-initiated project",
    duration: "2026",
    overview:
      "Magic Grab is a group ordering concept for magicpin: each member orders independently within a shared time window. There is no shared cart or group payment—just a shared goal, a countdown, and cashback that gives people a reason to return.",
    problem:
      "magicpin already offers cashbacks and vouchers, but they can feel transactional: a user claims and redeems alone, with little reason to return the next day. The goal is to grow DAU through a repeatable social mechanic, not a one-time discount event.",
    // context: "B2C · Hyperlocal Discovery · Mobile · Consumer App",
    myRole:
      "Product Designer working solo end to end: feature concept, rules and economics, user flows, mobile UI, and edge cases.",
    contributions: [
      "Designed Magic Grab: members order independently within a time window. There is no shared cart or group payment, only a shared goal.",
      "Defined four group tiers—Duo, Squad, Crew, and Party—with fixed cashback caps.",
      "Designed creator and joiner flows, from WhatsApp invite through in-app join, plus active ordering and edge cases.",
      "Built retention loops with a leaderboard, streaks, and ‘Order again with…’ re-entry.",
    ],
    processNote:
      "Problem framing → Feature concept → Rules & economics → Flow mapping → Mobile UI → Edge cases",
    learnings:
      "Retention comes from a repeatable social mechanic, not a bigger discount. Guardrails such as one group per day and fixed caps are design decisions: they protect the budget and keep the mechanic honest. Knowing what not to build matters as much as what to ship.",
    screenRatio: "9/16",
  },
  {
    id: 3,
    num: "03",
    title: "AVYRO",
    company: "AVYRO",
    platform: "Web App",
    tags: ["B2B SaaS", "AEC", "Web"],
    year: "2025–26",
    accent: "#5A5550",
    accentBg: "#F2F0EC",
    image: avyroCover,
    driveLink: null as string | null,
    resources: [],
    brief:
      "An AI-native operating system connecting CRM, proposals, resourcing, timesheets, billing, and analytics for AEC firms.",
    role: "Product UI Designer",
    duration: "May 2025 – May 2026",
    overview:
      "Avyro is an AI-native operating system for architecture, engineering, and construction firms. It brings CRM, proposals, resourcing, timesheets, billing, and analytics into one connected platform, designed from scratch.",
    problem:
      "Team members, supervisors, managers, and leadership all use the product, often in messy day-to-day conditions. Routine work took too much manual effort, managers lacked a clear view of project assignments and time spent, and inconsistent screens risked making a large platform hard to learn and adopt.",
    // context: "B2B · Industrial Workforce · Web · SaaS",
    myRole:
      "Led end-to-end UI/UX design from user flows and wireframes to high-fidelity UI. Owned the design system and worked closely with developers and stakeholders, designing in Figma for both team members and managers.",
    contributions: [
      "Built a shared design system from scratch, defining reusable components, states, spacing, and typography.",
      "Mapped connected workflows before wireframing, then translated them into clear, consistent high-fidelity screens.",
      "Designed for team members logging work, managers running teams, and leadership tracking progress and time.",
      "Made routine work easier to review and correct, while keeping automated actions visible and user-controlled.",
      "Reviewed designs with developers early and made practical, buildable decisions throughout handoff.",
    ],
    processNote:
      "Stakeholder discovery → User flows → Wireframes → High-fidelity UI → Developer review and handoff",
    learnings:
      "In B2B products, speed, clarity, and trust often matter more than adding features. Automation works when people understand and control it, and a design system pays off most when users work in messy, real conditions.",
  },
  {
    id: 4,
    num: "04",
    title: "TuteDude Lecture Page",
    company: "TuteDude",
    platform: "Mobile Web",
    tags: ["EdTech", "Mobile Web", "Learning Platform"],
    year: "2026",
    accent: "#57288C",
    accentBg: "#F2ECF8",
    image: tutedudeCover,
    driveLink:
      "https://drive.google.com/file/d/1Q4YeOkVn6-b-shet8GXiyL1Ti12G6i0p/view?usp=sharing" as
        | string
        | null,
    resources: [
      {
        label: "UI screens (PDF)",
        href: "https://drive.google.com/file/d/1-7KN2QrPtUP2liMoyrNAT4YpfsV2elMq/view?usp=sharing",
      },
      {
        label: "Prototype (Figma)",
        href: "https://www.figma.com/proto/4uerQn7CtVM3and3wx7q6c/Mobile-Web-UI---Tutedude?node-id=2-3&t=Vj9H2GWqZkAAbHLj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3",
      },
    ],
    brief:
      "A cluttered lecture page rebuilt so learners can find what matters, using better placement and clearer wording within TuteDude's existing design system.",
    role: "Self-initiated project",
    duration: "Mobile Web · 360px screen",
    overview:
      "A self-initiated redesign concept task. I reviewed 14 usability problems, prioritised the 9 with the greatest impact on learner trust and business outcomes, and designed fixes for a 360px mobile web screen. All design work is mine: prioritisation, placement and wording decisions, mobile UI, and prototype.",
    problem:
      "Learners primarily use budget Android phones and are not highly experienced with digital products. The lecture page felt cluttered, and important elements were hard to locate. I identified 14 problems in total.",
    // context: "B2C · EdTech · Mobile Web · Budget Android Users",
    myRole:
      "Solo designer on this concept project: problem prioritisation, placement and wording, mobile UI, and interactive prototype.",
    contributions: [
      "Resolved 9 of the 14 problems through better placement and clearer wording.",
      "Gave Certificate & Refund, Notes & Resources, and Support clear, always-reachable places on the lecture page.",
      "Made progress understandable with a three-bar sheet and an ‘Xh Ym left’ watch-time view.",
      "Added in-lecture controls: a language toggle and a chapters list with seekbar tick marks.",
      "Used TuteDude's existing colours and components throughout.",
    ],
    processNote:
      "Problem prioritisation → Placement and wording fixes → Hi-fi mobile UI → Interactive prototype",
    learnings:
      "Most usability problems on a cluttered screen are fixed by moving things and renaming them, not by adding new elements. For first-time digital users, familiar patterns and plain words beat clever icons. Choosing what not to solve matters as much as what to solve.",
    screenRatio: "9/16",
  },
];

function ImgPlaceholder({
  label,
  note,
  ratio = "16/9",
}: {
  label: string;
  note?: string;
  ratio?: string;
}) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: BG,
        border: `1.5px dashed ${BORDER}`,
        borderRadius: "0.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1.5rem",
        textAlign: "center",
      }}
    >
      <Monitor size={20} style={{ color: DIM, opacity: 0.6 }} />
      <p
        style={{
          fontFamily: SANS,
          fontSize: "0.75rem",
          fontWeight: 500,
          color: MUTED,
          margin: 0,
        }}
      >
        {label}
      </p>
      {note && (
        <p
          style={{
            fontFamily: SANS,
            fontSize: "0.65rem",
            color: DIM,
            margin: 0,
            fontWeight: 300,
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function MagicGrabDetails() {
  const sectionStyle = {
    marginBottom: "2.5rem",
    borderTop: `1px solid ${BORDER}`,
    paddingTop: "2rem",
  };
  const headingStyle = {
    fontSize: "0.6rem",
    color: DIM,
    fontFamily: SANS,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    margin: "0 0 1rem",
  };
  const bodyStyle = {
    fontFamily: SANS,
    fontSize: "0.84rem",
    color: MUTED,
    lineHeight: 1.8,
    margin: 0,
    fontWeight: 300,
  };
  const screenshots = [
    { label: "Notification", image: magicGrabNotification },
    { label: "Invite friends", image: magicGrabInviteFriends },
    { label: "Create a Duo group", image: magicGrabCreateGroup },
  ];

  return (
    <>
      <section style={sectionStyle}>
        <p style={headingStyle}>How It Works</p>
        <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
          A user creates a group, chooses a size, and invites friends by shared
          link or code. The countdown starts when everyone joins. Each person
          orders from any restaurant at their location and pays separately.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: SANS,
              fontSize: "0.8rem",
              color: MUTED,
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                {["Group", "Members", "Cashback per member"].map((item) => (
                  <th
                    key={item}
                    style={{
                      padding: "0.7rem",
                      borderBottom: `1px solid ${BORDER}`,
                      color: TEXT,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Duo", "2", "25%, up to ₹25"],
                ["Squad", "4", "10%, up to ₹50"],
                ["Crew", "8", "15%, up to ₹75"],
                ["Party", "10", "20%, up to ₹100"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((item) => (
                    <td
                      key={item}
                      style={{
                        padding: "0.7rem",
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...bodyStyle, marginTop: "1rem" }}>
          Every group size has a 1.5-hour invite and join window, followed by a
          24-hour order window. Cashback requires a minimum cart value of ₹100.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>User Flows &amp; IA</p>
        <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
          Entry points: push notification, homepage banner (with or without an
          active group), and My Groups re-entry. Creator flow: size selection →
          lobby → invite. Joiner flow: WhatsApp preview → web preview → in-app
          join → confirmation.
        </p>
        <CaseStudyImage
          src={magicGrabUserFlow}
          alt="Magic Grab user flow diagram"
          style={{
            display: "block",
            width: "100%",
            maxHeight: 480,
            objectFit: "contain",
            background: "#fff",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        />
      </section>

      {/* <section style={sectionStyle}>
        <p style={headingStyle}>Wireframes</p>
        <ImgPlaceholder
          label="Low-fidelity wireframes"
          note="Group size selection, lobby, and completion"
          ratio="4/3"
        />
      </section> */}

      <section style={sectionStyle}>
        <p style={headingStyle}>Final Screens</p>
        <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
          Creator: group size selection, forming and active lobbies, and full,
          partial, or expired completion. Joiner: WhatsApp message preview,
          non-app web preview with eligibility check, in-app join, and
          confirmation. Active ordering: persistent countdown, restaurant menu
          with group context, checkout with “cashback pending,” and a 10-minute
          warning. My Groups supports ordering again within the same group,
          which resets each day.
        </p>
        <div style={screenshotGridStyle}>
          {screenshots.map((screen) => (
            <figure key={screen.label} style={screenshotCardStyle}>
              <CaseStudyImage
                src={screen.image}
                alt={`Magic Grab ${screen.label}`}
                style={screenshotImageStyle}
              />
              <figcaption style={screenshotCaptionStyle}>
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Key Detail: Rules &amp; Why They Exist</p>
        <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
          One group per day is the key guardrail: without it, a user could
          create multiple groups, stack cashback, and burn budget without adding
          DAU. The limit resets at midnight IST.
        </p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>
            Weekly cashback cap per user (configurable, e.g. five events) limits
            multi-account gaming.
          </li>
          <li>
            ₹100 minimum cart value discourages tiny orders designed to game the
            offer.
          </li>
          <li>Fixed tier caps keep the budget predictable.</li>
          <li>
            Merchant split: restaurants fund 60–70% of cashback; the platform
            funds 30–40%.
          </li>
        </ul>
        <p style={{ ...bodyStyle, marginTop: "1rem" }}>
          Figma prototype includes the detailed callouts and interaction states.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Retention: Leaderboard</p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>Group total tracks cumulative cashback earned together.</li>
          <li>Weekly city ranking resets every Monday.</li>
          <li>Individual streak badge reinforces repeat participation.</li>
          <li>
            Completion shows rank movement, e.g. “Your squad moved from #6 to #4
            this week.”
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Edge Cases</p>
        <p style={bodyStyle}>
          Out-of-delivery-area block, full group, expired join window, partial
          completion, expired groups, and four push notification variants.
          <br /><br />
          Magic Grab turns a one-time cashback into a repeatable group habit. The
        countdown creates urgency, the leaderboard gives users a reason to come
        back tomorrow, and fixed guardrails keep the budget predictable.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Learnings</p>
        <blockquote
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            fontStyle: "italic",
            color: TEXT,
            lineHeight: 1.55,
            margin: 0,
            borderLeft: `3px solid ${ACCENT}40`,
            paddingLeft: "1.125rem",
            fontWeight: 500,
          }}
        >
          Retention comes from a repeatable social mechanic, not a bigger
          discount. Guardrails such as one group per day and fixed caps are
          design decisions: they protect the budget and keep the mechanic
          honest. Knowing what not to build matters as much as what to ship.
        </blockquote>
      </section>
    </>
  );
}

function TuteDudeDetails() {
  const sectionStyle = {
    marginBottom: "2.5rem",
    borderTop: `1px solid ${BORDER}`,
    paddingTop: "2rem",
  };
  const headingStyle = {
    fontSize: "0.6rem",
    color: DIM,
    fontFamily: SANS,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    margin: "0 0 1rem",
  };
  const bodyStyle = {
    fontFamily: SANS,
    fontSize: "0.84rem",
    color: MUTED,
    lineHeight: 1.8,
    margin: 0,
    fontWeight: 300,
  };
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontFamily: SANS,
    fontSize: "0.78rem",
    color: MUTED,
    textAlign: "left" as const,
  };
  const cellStyle = {
    padding: "0.7rem",
    borderBottom: `1px solid ${BORDER}`,
    verticalAlign: "top" as const,
    lineHeight: 1.65,
  };
  const problems = [
    [
      "P1 · Promo banner hid the course",
      "Moved the offer below the course card. “Continue Learning” stays first; the offer remains visible without blocking it.",
    ],
    [
      "P2 · Challenge banner competed for attention",
      "Changed it to a small strip between modules—still visible, less distracting.",
    ],
    [
      "P3 · Certificate & Refund was hard to find",
      "Added a dedicated tab to every lecture page. Refund progress also appears in the top progress badge.",
    ],
    [
      "P4 · Notes & Resources had no clear place",
      "Added a Notes & Resources tab within each lecture video, next to course content, so learners need not leave the page.",
    ],
    [
      "P7 · No way to switch language mid-lecture",
      "Added a language toggle inside video settings and an active-language strip below the player.",
    ],
    [
      "P9 · Support wasn't reachable from a lecture",
      "Added a yellow WhatsApp support banner to every lecture page. Full support and FAQs are under the home screen info icon.",
    ],
    [
      "P11 · Progress percentage was unclear",
      "Tapping the top-bar percentage opens a sheet with separate completion, watch-time, and refund-progress bars.",
    ],
    [
      "P12 · Watch time had no context",
      "Changed the label to “Xh Ym left.” Tapping opens a detail view showing time remaining to unlock the refund.",
    ],
    [
      "P13 · No way to jump to a topic",
      "Added chapter tick marks to the seekbar and a Chapters list with tappable timestamps to jump to a topic.",
    ],
  ];
  const unaddressed = [
    [
      "P14 · Drag-to-preview on seek bar",
      "Not needed separately: P13's chapter list enables tapping to jump without a risky drag gesture.",
    ],
    ["P5 · Portfolio Builder", "Low-visibility need; skipped for now."],
    ["P8 · Switch course versions", "Affects very few courses; deprioritised."],
    [
      "P6 · Mentorship clarity",
      "Solved with a clearer button label only; no structural change needed.",
    ],
    [
      "P10 · Feedback form placement",
      "Kept the form, but moved it into the Support tab.",
    ],
  ];
  const screenshots = [
    { label: "Redesigned lecture page", image: tutedudeCourseView },
    { label: "Progress and watch-time screen", image: tutedudeProgress },
    { label: "Lecture — Course Content", image: tutedudeCourseContent },
  ];

  return (
    <>
      <section style={sectionStyle}>
        <p style={headingStyle}>Design Process</p>
        <p style={bodyStyle}>
          Problem prioritisation → Placement and wording fixes → Hi-fi mobile UI
          → Interactive prototype
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Guiding Principles</p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>Plain language over icons.</li>
          <li>Visible controls over hidden gestures.</li>
          <li>
            Standard Android patterns—bottom tabs, pull-up sheets, and
            expandable lists—that learners already know.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>User Flow</p>
        <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
          The home screen leads learners into Continue Learning and then to the
          lecture page, where support, progress, video controls, course tabs,
          Notes &amp; Resources, Certificate &amp; Refund, and feedback are
          easier to reach.
        </p>
        <CaseStudyImage
          src={tutedudeUserFlow}
          alt="TuteDude lecture page redesign user flow diagram"
          style={{
            display: "block",
            width: "100%",
            maxHeight: 480,
            objectFit: "contain",
            background: "#fff",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        />
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>The 9 Problems I Worked On</p>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  Problem
                </th>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  How it was resolved
                </th>
              </tr>
            </thead>
            <tbody>
              {problems.map(([problem, resolution]) => (
                <tr key={problem}>
                  <td style={{ ...cellStyle, minWidth: 150, color: TEXT }}>
                    {problem}
                  </td>
                  <td style={{ ...cellStyle, minWidth: 230 }}>{resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Final Screens · Mobile Web</p>
        <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
          Designed for a 360px screen, using TuteDude's existing colours and
          components.
        </p>
        <div style={screenshotGridStyle}>
          {screenshots.map((screen) => (
            <figure key={screen.label} style={screenshotCardStyle}>
              <CaseStudyImage
                src={screen.image}
                alt={screen.label}
                style={screenshotImageStyle}
              />
              <figcaption style={screenshotCaptionStyle}>
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Key Detail: The Promo Card Trade-off</p>
        <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>
          The tension: hiding the promo card protects the learning experience
          but costs revenue; keeping it at the top buries course content.
        </p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>
            Kept the promo card, moved it below the course card, and made it
            smaller.
          </li>
          <li>
            Learners see their course first; the offer remains visible a short
            scroll away.
          </li>
          <li>Nothing removed—only reordered.</li>
        </ul>
        <p style={{ ...bodyStyle, marginTop: "1rem" }}>
          The before-and-after screens and interaction details are in the case
          study and Figma prototype.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>What I Did Not Address, and Why</p>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  Problem
                </th>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  Why it was left out
                </th>
              </tr>
            </thead>
            <tbody>
              {unaddressed.map(([problem, reason]) => (
                <tr key={problem}>
                  <td style={{ ...cellStyle, minWidth: 150, color: TEXT }}>
                    {problem}
                  </td>
                  <td style={{ ...cellStyle, minWidth: 230 }}>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Next Iteration: Discoverability</p>
        <p style={bodyStyle}>
          Notes, Resources, and Certificate details are not currently
          highlighted on the home page; for now, they are reachable through the
          learner's profile page. A future iteration could add Notes/Resources
          as a third sub-tab within the main Courses tab, removing the need to
          go through the profile.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Learnings</p>
        <blockquote
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            fontStyle: "italic",
            color: TEXT,
            lineHeight: 1.55,
            margin: 0,
            borderLeft: `3px solid ${"#57288C"}40`,
            paddingLeft: "1.125rem",
            fontWeight: 500,
          }}
        >
          Most usability problems on a cluttered screen are fixed by moving
          things and renaming them, not by adding new elements. For first-time
          digital users, familiar patterns and plain words beat clever icons.
          Choosing what not to solve matters as much as what to solve.
        </blockquote>
      </section>

    </>
  );
}

function WorkzaDetails() {
  const sectionStyle = {
    marginBottom: "2.5rem",
    borderTop: `1px solid ${BORDER}`,
    paddingTop: "2rem",
  };
  const headingStyle = {
    fontSize: "0.6rem",
    color: DIM,
    fontFamily: SANS,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    margin: "0 0 1rem",
  };
  const bodyStyle = {
    fontFamily: SANS,
    fontSize: "0.84rem",
    color: MUTED,
    lineHeight: 1.8,
    margin: 0,
    fontWeight: 300,
  };
  const productAreas = [
    [
      "Client projects",
      "Each client brings different users, needs, and goals.",
      "Start from the brief and tailor the research, flows, and interface to the client's needs.",
    ],
    [
      "Workza",
      "HR teams need broad operational coverage, while employees need everyday tasks to stay simple.",
      "Design role-appropriate experiences across attendance, leave, HR data, onboarding and offboarding, payroll, reports and analytics, and document management.",
    ],
    [
      "Aameego",
      "Riders and fleet or service teams need clear information while on the move.",
      "Revamp the EV and fleet management application around the needs of its riders and service teams.",
    ],
    [
      "Social creatives",
      "Product and company communications need a consistent brand presence.",
      "Create creatives for the company's social handles, keeping them aligned with the brand.",
    ],
  ];

  return (
    <>
      <section style={sectionStyle}>
        <p style={headingStyle}>About Karpragati Technologies</p>
        <p style={bodyStyle}>
          Karpragati Technologies is an IT solutions and services company that
          designs and builds applications around its clients' needs. Alongside
          client work, it develops in-house products including Workza and
          Aameego.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Products &amp; Design Challenges</p>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: SANS,
              fontSize: "0.78rem",
              color: MUTED,
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                {["Area", "Challenge", "Design focus"].map((label) => (
                  <th
                    key={label}
                    style={{
                      padding: "0.7rem",
                      borderBottom: `1px solid ${BORDER}`,
                      color: TEXT,
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productAreas.map(([area, challenge, focus]) => (
                <tr key={area}>
                  {[area, challenge, focus].map((text, index) => (
                    <td
                      key={index}
                      style={{
                        padding: "0.7rem",
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                        lineHeight: 1.65,
                        minWidth: index === 0 ? 120 : 190,
                        color: index === 0 ? TEXT : MUTED,
                      }}
                    >
                      {text}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Design Process</p>
        <p style={bodyStyle}>
          Research and thinking documents → User flows → Wireframes →
          High-fidelity UI → Developer handoff and build support
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Guiding Principles</p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>Keep experiences simple and clear for every role.</li>
          <li>Reduce the steps needed for everyday tasks.</li>
          <li>Use consistent patterns across features.</li>
          <li>Design around each client's real needs, not a fixed template.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Key Trade-off</p>
        <p style={bodyStyle}>
          Workza serves users with very different needs. I favour simplicity
          for employees, while providing the depth HR teams and managers need
          to handle broader workflows.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Learnings</p>
        <blockquote
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            fontStyle: "italic",
            color: TEXT,
            lineHeight: 1.55,
            margin: 0,
            borderLeft: `3px solid ${"#1B4332"}40`,
            paddingLeft: "1.125rem",
            fontWeight: 500,
          }}
        >
          One product can serve very different users, so each role needs its own
          experience. Working across client projects and in-house products
          means switching between tailored design and a shared system. Good
          handoff decisions matter as much as good screens.
        </blockquote>
      </section>
    </>
  );
}

function AvyroDetails() {
  const sectionStyle = {
    marginBottom: "2.5rem",
    borderTop: `1px solid ${BORDER}`,
    paddingTop: "2rem",
  };
  const headingStyle = {
    fontSize: "0.6rem",
    color: DIM,
    fontFamily: SANS,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    margin: "0 0 1rem",
  };
  const bodyStyle = {
    fontFamily: SANS,
    fontSize: "0.84rem",
    color: MUTED,
    lineHeight: 1.8,
    margin: 0,
    fontWeight: 300,
  };
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontFamily: SANS,
    fontSize: "0.78rem",
    color: MUTED,
    textAlign: "left" as const,
  };
  const cellStyle = {
    padding: "0.7rem",
    borderBottom: `1px solid ${BORDER}`,
    verticalAlign: "top" as const,
    lineHeight: 1.65,
  };
  const areas = [
    [
      "Design system",
      "No shared foundation; risk of inconsistent screens.",
      "Built a shared foundation from scratch, with reusable components, states, spacing, and typography across modules.",
    ],
    [
      "Flows & UI",
      "Complex, connected workflows and dense B2B screens.",
      "Mapped connected workflows first, then designed clean, consistent screens with clear states for dense B2B tasks.",
    ],
    [
      "Reducing manual effort",
      "Routine entry was slow and easy to get wrong.",
      "Pre-filled routine work so users can review and correct instead of entering everything themselves.",
    ],
    [
      "Trust in automation",
      "Automatic tracking can feel unclear or intrusive.",
      "Made system actions visible and kept users in control of what automation does.",
    ],
    [
      "Team management",
      "Hard to see who is working on which project.",
      "Brought team members and their project assignments together so managers can see who is working where.",
    ],
    [
      "Managerial dashboards",
      "No clear view of time invested across projects and people.",
      "Summarised time and effort by project and team to make allocation and progress easier to understand.",
    ],
    [
      "Developer handoff",
      "Gap between design and what gets built.",
      "Reviewed designs with engineering early and made buildable decisions to narrow the gap between design and delivery.",
    ],
  ];

  return (
    <>
      <section style={sectionStyle}>
        <p style={headingStyle}>Design Process</p>
        <p style={bodyStyle}>
          Stakeholder discovery → User flows → Wireframes → High-fidelity UI →
          Developer review and handoff
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Guiding Principles</p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>Clarity over cleverness: simple, consistent screens for every role.</li>
          <li>
            Reduce manual effort: let the product handle routine work, then let
            users review and correct it.
          </li>
          <li>
            Make automation feel safe: show clearly what the system does and
            keep users in control.
          </li>
          <li>Design only what can actually be built.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>What I Worked On</p>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  Area
                </th>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  Problem
                </th>
                <th style={{ ...cellStyle, color: TEXT, fontWeight: 500 }}>
                  How it was resolved
                </th>
              </tr>
            </thead>
            <tbody>
              {areas.map(([area, problem, resolution]) => (
                <tr key={area}>
                  <td style={{ ...cellStyle, minWidth: 130, color: TEXT }}>
                    {area}
                  </td>
                  <td style={{ ...cellStyle, minWidth: 180 }}>
                    {problem}
                  </td>
                  <td style={{ ...cellStyle, minWidth: 230 }}>{resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Key Trade-off</p>
        <p style={bodyStyle}>
          The balance was between a feature-rich platform and an interface
          people can use quickly. I favoured clarity and consistency, keeping
          each screen focused on the task at hand.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Outcome</p>
        <ul style={{ ...bodyStyle, paddingLeft: "1.25rem", margin: 0 }}>
          <li>A consistent, reusable design system the team could build on.</li>
          <li>Faster, more accurate everyday tasks for users.</li>
          <li>
            A clearer view of team allocation and time spent for managers.
          </li>
          <li>A more trusted experience from end to end.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <p style={headingStyle}>Learnings</p>
        <blockquote
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            fontStyle: "italic",
            color: TEXT,
            lineHeight: 1.55,
            margin: 0,
            borderLeft: `3px solid ${"#5A5550"}40`,
            paddingLeft: "1.125rem",
            fontWeight: 500,
          }}
        >
          In B2B products, speed, clarity, and trust often matter more than
          adding features. Automation only works when users understand and
          control what it does, and a design system pays off most when people
          work in messy, real conditions.
        </blockquote>
      </section>
    </>
  );
}

function CaseStudy({
  p,
  onClose,
}: {
  p: (typeof projects)[0];
  onClose: () => void;
}) {
  const hasDriveLink = !!p.driveLink;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(28,26,23,0.52)",
          backdropFilter: "blur(5px)",
        }}
      />

      {/* Slide panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "relative",
          width: "min(700px, 95vw)",
          height: "100%",
          background: BG,
          overflowY: "auto",
          scrollbarWidth: "thin",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "rgba(247,245,242,0.96)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${BORDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.75rem",
            height: 56,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: SERIF,
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: MUTED,
            }}
          >
            {p.title}
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: `1px solid ${BORDER}`,
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: MUTED,
            }}
          >
            <X size={14} />
          </button>
        </div>

        <div style={{ padding: "2.5rem 1.75rem 5rem", flex: 1 }}>
          {p.image && (
            <div
              style={{
                borderRadius: "0.875rem",
                marginBottom: "2.5rem",
                width: "100%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CaseStudyImage
                src={p.image}
                alt={p.title}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: p.id === 3 ? "none" : "70vh",
                  width: p.id === 3 ? "100%" : "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "0.875rem",
                }}
              />
            </div>
          )}

          {/* Title block */}
          <div
            style={{
              marginBottom: "2.5rem",
              borderBottom: `1px solid ${BORDER}`,
              paddingBottom: "2.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.4rem",
                flexWrap: "wrap",
                marginBottom: "0.875rem",
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    background: p.accentBg,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "9999px",
                    padding: "0.22rem 0.7rem",
                    fontSize: "0.67rem",
                    color: MUTED,
                    fontFamily: SANS,
                    fontWeight: 400,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: TEXT,
                margin: "0 0 0.4rem",
                lineHeight: 1.1,
              }}
            >
              {p.id === 1
                ? "End-to-End Product Design"
                : p.id === 3
                  ? "Avyro: B2B SaaS Platform"
                  : p.title}
            </h2>
            <p
              style={{
                color: p.accent,
                fontSize: "0.8rem",
                fontFamily: SANS,
                fontWeight: 500,
                margin: "0 0 1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              {p.id === 2 ? (
                "Magicpin Design Challenge · Self-initiated · 2026"
              ) : p.id === 4 ? (
                <>
                  Self-initiated project · Mobile Web · 360px screen
                  {/* <br />
                  <span style={{ fontStyle: "italic", fontWeight: 400 }}>
                    Concept project, not affiliated with TuteDude.
                  </span> */}
                </>
              ) : (
                `${p.company} · ${p.role} · ${p.duration}`
              )}
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.9rem",
                lineHeight: 1.82,
                margin: 0,
                fontFamily: SANS,
                fontWeight: 300,
              }}
            >
              {p.overview}
            </p>
          </div>

          {/* Context + Problem */}
          {p.problem && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
              className="cs-two-col"
            >
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    color: DIM,
                    fontFamily: SANS,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    margin: "0 0 0.625rem",
                  }}
                >
                  {/* Context
                </p>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.84rem",
                    color: MUTED,
                    lineHeight: 1.8,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {p.context}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    color: DIM,
                    fontFamily: SANS,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    margin: "0 0 0.625rem",
                  }}
                > */}
                  The Problem
                </p>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.84rem",
                    color: MUTED,
                    lineHeight: 1.8,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {p.problem}
                </p>
              </div>
            </div>
          )}

          {/* My Role + Contributions */}
          <div
            style={{
              marginBottom: "2.5rem",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                color: DIM,
                fontFamily: SANS,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: "0 0 0.625rem",
              }}
            >
              My Role
            </p>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "0.9rem",
                color: MUTED,
                lineHeight: 1.8,
                margin: "0 0 1.5rem",
                fontWeight: 300,
              }}
            >
              {p.myRole}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {p.contributions.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: `${p.accent}50`,
                      lineHeight: 1.2,
                      flexShrink: 0,
                      width: 26,
                      textAlign: "right",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.84rem",
                      lineHeight: 1.75,
                      margin: 0,
                      fontFamily: SANS,
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA block or case study links */}
          {!hasDriveLink ? (
            <div
              style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}
            >
              <p
                style={{
                  fontSize: "0.6rem",
                  color: DIM,
                  fontFamily: SANS,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "0 0 1.25rem",
                }}
              >
                {p.id === 1 || p.id === 3 ? "Get in touch" : "Work Samples"}
              </p>
              <div
                style={{
                  background: "#EFEDE8",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.875rem",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                    color: TEXT,
                    margin: "0 0 0.625rem",
                    fontWeight: 500,
                  }}
                >
                  {p.id === 1 || p.id === 3
                    ? "Want to explore the work in more detail?"
                    : "Full screens available on request."}
                </p>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.84rem",
                    color: MUTED,
                    margin: "0 0 1.75rem",
                    fontWeight: 300,
                    lineHeight: 1.72,
                  }}
                >
                  {p.id === 1
                    ? "Get in touch and I’d be happy to share more about the client projects, in-house products, and design decisions."
                    : p.id === 3
                      ? "Get in touch and I’d be happy to share more about the workflows, design system, and decisions behind Avyro."
                      : "I'm happy to walk you through the complete product — flows, components, and the decisions behind them — in a conversation."}
                </p>
                <a
                  href={
                    p.id === 1
                      ? "mailto:anshikaagrawalwork08@gmail.com?subject=Karpragati%20case%20study"
                      : p.id === 3
                        ? "mailto:anshikaagrawalwork08@gmail.com?subject=Avyro%20case%20study"
                        : "mailto:anshikaagrawalwork08@gmail.com?subject=Viewing%20case%20study%20—%20please%20share"
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: ACCENT,
                    color: "#fff",
                    padding: "0.75rem 1.625rem",
                    borderRadius: "9999px",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontFamily: SANS,
                    letterSpacing: "0.02em",
                  }}
                >
                  Get in touch →
                </a>
              </div>
            </div>
          ) : (
            <div
              style={{
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "2.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.6rem",
                  color: DIM,
                  fontFamily: SANS,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "0 0 1.25rem",
                }}
              >
                Case Study &amp; Resources
              </p>
              <div
                style={{
                  background: "#EFEDE8",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.875rem",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: TEXT,
                    margin: "0 0 0.375rem",
                    fontWeight: 500,
                  }}
                >
                  Explore the project
                </p>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.8rem",
                    color: MUTED,
                    margin: "0 0 1.25rem",
                    fontWeight: 300,
                  }}
                >
                  View the full case study, screens, and prototype.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={p.driveLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: ACCENT,
                      color: "#fff",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "9999px",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      fontFamily: SANS,
                      letterSpacing: "0.02em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    View Case Study ↗
                  </a>
                  {p.resources.map((resource) => (
                    <a
                      key={resource.label}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "rgba(255,255,255,0.65)",
                        border: `1px solid ${BORDER}`,
                        color: MUTED,
                        padding: "0.75rem 1.25rem",
                        borderRadius: "9999px",
                        fontSize: "0.8125rem",
                        fontWeight: 400,
                        textDecoration: "none",
                        fontFamily: SANS,
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {resource.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          {p.id === 1 ? (
            <WorkzaDetails />
          ) : p.id === 3 ? (
            <AvyroDetails />
          ) : (
            hasDriveLink &&
            (p.id === 2 ? (
              <MagicGrabDetails />
            ) : p.id === 4 ? (
              <TuteDudeDetails />
            ) : (
              <>
                {/* Design Process */}
                <div
                  style={{
                    marginBottom: "2.5rem",
                    borderTop: `1px solid ${BORDER}`,
                    paddingTop: "2.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: DIM,
                      fontFamily: SANS,
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Design Process
                  </p>
                  {p.processNote && (
                    <p
                      style={{
                        fontFamily: SANS,
                        fontSize: "0.75rem",
                        color: DIM,
                        margin: "0 0 1.5rem",
                        fontWeight: 300,
                      }}
                    >
                      {p.processNote}
                    </p>
                  )}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "0.875rem",
                    }}
                    className="cs-two-col"
                  >
                    <ImgPlaceholder
                      label="User Flows & IA"
                      note="Replace with actual flows"
                      ratio="4/3"
                    />
                    {/*
                    <ImgPlaceholder
                      label="Wireframes"
                      note="Replace with actual wireframes"
                      ratio="4/3"
                    />
                    */}
                  </div>
                </div>

                {/* Final Screens */}
                <div
                  style={{
                    marginBottom: "2.5rem",
                    borderTop: `1px solid ${BORDER}`,
                    paddingTop: "2.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: DIM,
                      fontFamily: SANS,
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      margin: "0 0 1.25rem",
                    }}
                  >
                    Final Screens
                  </p>
                  <ImgPlaceholder
                    label={`${p.platform} — Final UI`}
                    note="Replace with actual screenshots"
                    ratio={p.screenRatio}
                  />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "0.875rem",
                      marginTop: "0.875rem",
                    }}
                    className="cs-two-col"
                  >
                    <ImgPlaceholder label="Key Detail" ratio="4/3" />
                    <ImgPlaceholder label="Edge Cases" ratio="4/3" />
                  </div>
                </div>

                {/* Learnings */}
                {p.learnings && (
                  <div
                    style={{
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: "2.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.6rem",
                        color: DIM,
                        fontFamily: SANS,
                        fontWeight: 500,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        margin: "0 0 1rem",
                      }}
                    >
                      Learnings
                    </p>
                    <blockquote
                      style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                        fontStyle: "italic",
                        color: TEXT,
                        lineHeight: 1.55,
                        margin: 0,
                        borderLeft: `3px solid ${p.accent}40`,
                        paddingLeft: "1.125rem",
                        fontWeight: 500,
                      }}
                    >
                      {p.learnings}
                    </blockquote>
                  </div>
                )}
              </>
            ))
          )}
        </div>
      </motion.div>

      <style>{`@media (max-width: 600px) { .cs-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </motion.div>
  );
}

function ProjectCard({
  p,
  onClick,
  index,
}: {
  p: (typeof projects)[0];
  onClick: () => void;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "0.875rem",
        overflow: "hidden",
        cursor: "pointer",
        height: "100%",
        border: `1px solid rgba(28,26,23,0.12)`,
        background: p.image ? "#1A1916" : p.accent,
        transition: "box-shadow 0.35s, transform 0.35s",
        boxShadow: hovered
          ? "0 12px 40px rgba(28,26,23,0.18)"
          : "0 2px 8px rgba(28,26,23,0.08)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {p.image && (
        <>
          <img
            src={p.image}
            alt={p.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.85s ease, opacity 0.4s",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              opacity: hovered ? 0.95 : 0.82,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,18,15,0.88) 0%, rgba(20,18,15,0.35) 38%, rgba(20,18,15,0.08) 65%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* Platform badge */}
      <div style={{ position: "absolute", top: "1.125rem", left: "1.125rem" }}>
        <span
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "9999px",
            padding: "0.22rem 0.7rem",
            fontSize: "0.6rem",
            color: "#F7F5F2",
            fontFamily: SANS,
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          {p.platform}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.125rem",
          right: "1.125rem",
          fontSize: "0.63rem",
          color: "rgba(247,245,242,0.5)",
          fontFamily: SANS,
        }}
      >
        {p.num}
      </div>

      {/* Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                color: "rgba(247,245,242,0.6)",
                fontSize: "0.68rem",
                fontFamily: SANS,
                fontWeight: 400,
                margin: "0 0 0.3rem",
              }}
            >
              {p.company} · {p.year}
            </p>
            <h3
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#F7F5F2",
                margin: 0,
                lineHeight: 1.15,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {p.title}
            </h3>
          </div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: hovered ? p.accent : "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.3s",
            }}
          >
            <ArrowUpRight size={14} style={{ color: "#F7F5F2" }} />
          </div>
        </div>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.55, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.25 }}
          style={{
            color: "rgba(247,245,242,0.75)",
            fontSize: "0.775rem",
            lineHeight: 1.65,
            margin: "0.7rem 0 0",
            fontFamily: SANS,
            fontWeight: 300,
            maxWidth: 420,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
          }}
        >
          {p.brief}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const [active, setActive] = useState<(typeof projects)[0] | null>(null);

  return (
    <section
      id="work"
      style={{ padding: "5rem 1.5rem 6rem", background: "#EFEDE8" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            borderTop: `1px solid rgba(28,26,23,0.12)`,
            paddingTop: "1.25rem",
            marginBottom: "2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              color: DIM,
              fontFamily: SANS,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Case Studies
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              color: DIM,
              fontFamily: SANS,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            4 projects · Mobile &amp; Web
          </span>
        </motion.div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        >
          {/* Row 1: Workza + MagicPin */}
          <div
            className="grid-r1"
            style={{ height: "clamp(320px, 40vw, 480px)" }}
          >
            <ProjectCard
              p={projects[0]}
              onClick={() => setActive(projects[0])}
              index={0}
            />
            <ProjectCard
              p={projects[1]}
              onClick={() => setActive(projects[1])}
              index={1}
            />
          </div>
          {/* Row 2: AVYRO + TuteDude */}
          <div
            className="grid-r2"
            style={{ height: "clamp(320px, 40vw, 480px)" }}
          >
            <ProjectCard
              p={projects[2]}
              onClick={() => setActive(projects[2])}
              index={2}
            />
            <ProjectCard
              p={projects[3]}
              onClick={() => setActive(projects[3])}
              index={3}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudy p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <style>{`
        .grid-r1, .grid-r2 { display: grid; grid-template-columns: 1fr; gap: 0.875rem; }
        @media (min-width: 640px) {
          .grid-r1, .grid-r2 { grid-template-columns: 1fr 1fr; }
        }
        .grid-r1 > *, .grid-r2 > * { height: 100%; }
      `}</style>
    </section>
  );
}
