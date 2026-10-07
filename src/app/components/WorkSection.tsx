import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Monitor } from "lucide-react";
import avyroCover from "../../imports/avyro-cover.png";
import magicPinCover from "../../imports/MagicGrab.png";
import mmtCover from "../../imports/MMT-Redesign.png";
import workzaCover from "../../imports/Workza_HRMS_-_LOgin.jpeg";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const BG = "#F7F5F2";
const TEXT = "#1C1A17";
const MUTED = "#6E6B66";
const DIM = "#B5B2AD";
const ACCENT = "#1B4332";
const BORDER = "rgba(28,26,23,0.09)";

const RESUME = "https://drive.google.com/file/d/1dCEW10b_KXVrbaGeuQcgkhLOIKRCo8yX/view?usp=sharing";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Workza",
    company: "Karpragati Technologies",
    platform: "Web App",
    tags: ["B2B SaaS", "HR Tech", "Web"],
    year: "2026",
    accent: "#1B4332",
    accentBg: "#EDF5F0",
    image: workzaCover,
    driveLink: null as string | null,
    brief: "Internal HRMS platform — attendance, payroll, onboarding, and team operations. Designed end-to-end from zero to shipped.",
    role: "Product Designer",
    duration: "Aug 2026 – Present",
    overview: "Workza is a comprehensive HRMS platform for Karpragati Technologies' internal operations — attendance tracking, payroll flows, employee onboarding, and day-to-day HR workflows.",
    problem: "The team managed HR operations across disconnected spreadsheets and WhatsApp messages — no single source of truth, payroll errors, delays in onboarding.",
    context: "B2B · Internal Product · Web · HR Technology",
    myRole: "Led the full design lifecycle — stakeholder discovery through annotated Figma handoff. Sole designer on the product track.",
    contributions: [
      "2-week discovery sprint with internal stakeholders before any wireframes",
      "Mapped all HR workflows: attendance, payroll, leave, onboarding, offboarding",
      "Designed 40+ connected screens with edge cases and empty states",
      "Reduced onboarding form complexity through progressive disclosure",
      "Delivered annotated specs with interaction notes into the dev pipeline",
    ],
    processNote: "Discovery → Information architecture → User flows → Lo-fi wireframes → Hi-fi UI → Handoff specs",
    learnings: "Internal tools are harder to design than consumer products because the edge cases are real, users are captive, and bad decisions have nowhere to hide.",
    screenRatio: "16/9",
  },
  {
    id: 2,
    num: "02",
    title: "MagicPin",
    company: "MagicPin",
    platform: "Mobile App",
    tags: ["Hyperlocal", "Consumer App", "Mobile"],
    year: "2023",
    accent: "#A33D00",
    accentBg: "#FBF0EA",
    image: magicPinCover,
    driveLink: "https://drive.google.com/file/d/1pH4aEzR_bM5hYNmInxFiq-Z27K7oUaHj/view?usp=sharing" as string | null,
    brief: "Hyperlocal discovery and offers app for food, lifestyle, and local services. Worked on discovery flows, merchant listing UX, and offers presentation.",
    role: "UI/UX Design Intern",
    duration: "2023",
    overview: "MagicPin is a hyperlocal discovery platform connecting users with local businesses — restaurants, salons, gyms, and retail. Worked on improving key discovery and offers UX flows.",
    problem: "Users dropped off mid-discovery due to cluttered merchant listing pages and unclear offer redemption flows. The challenge was simplifying without losing the information density merchants needed.",
    context: "B2C · Hyperlocal Discovery · Mobile · Consumer App",
    myRole: "UI/UX Design Intern — focused on discovery flows, merchant listing pages, and offers UX.",
    contributions: [
      "Redesigned merchant listing cards for better scanability and offer visibility",
      "Simplified offer redemption flow — reduced steps and improved clarity of terms",
      "Worked on category and neighbourhood discovery browsing patterns",
      "Delivered annotated mobile UI screens with component-level specs",
    ],
    processNote: "User research → Flow mapping → Wireframes → Hi-fi mobile UI → Handoff",
    learnings: "Consumer apps at scale demand ruthlessness about information hierarchy. Every element on a listing card competes for attention — removing is almost always the right move.",
    screenRatio: "9/16",
  },
  {
    id: 3,
    num: "03",
    title: "Industrial Workforce SaaS",
    company: "AVYRO",
    platform: "Web App",
    tags: ["B2B", "Industrial SaaS", "Web"],
    year: "2025–26",
    accent: "#5A5550",
    accentBg: "#F2F0EC",
    image: avyroCover,
    driveLink: null as string | null,
    brief: "B2B SaaS for industrial companies to digitise field workforce management — task assignment, shift scheduling, compliance workflows. Sole designer for a full year.",
    role: "Sole Designer",
    duration: "May 2025 – May 2026",
    overview: "A B2B platform helping industrial companies digitise and manage their field workforce — task assignment, shift scheduling, compliance documentation, and reporting across complex org structures.",
    problem: "Industrial companies were managing field teams through paper logs, phone calls, and fragmented Excel sheets — zero real-time visibility into task status, shift coverage, or compliance gaps.",
    context: "B2B · Industrial Workforce · Web · SaaS",
    myRole: "Sole designer for 12 months across the full product lifecycle — from initial research through to shipped features.",
    contributions: [
      "Owned the full design lifecycle — research, IA, wireframes, UI, specs, SRS documentation",
      "Worked directly with engineering leads and product managers across multiple sprints",
      "Designed complex data-heavy workflows for non-technical field managers",
      "Created a scalable design system from scratch to support rapid feature development",
      "Delivered SRS documentation and annotated handoffs into the engineering pipeline",
    ],
    processNote: "Stakeholder research → Systems mapping → Information architecture → Wireframes → Hi-fi UI → SRS + handoff",
    learnings: "B2B industrial products demand ruthless simplicity for complex workflows. Non-technical users don't read UI — they pattern-match. Every screen must communicate its purpose in under two seconds.",
    screenRatio: "16/9",
  },
  {
    id: 4,
    num: "04",
    title: "MakeMyTrip",
    company: "MakeMyTrip",
    platform: "Web + Mobile",
    tags: ["Travel", "E-commerce", "Web & Mobile"],
    year: "2023",
    accent: "#1A3A5C",
    accentBg: "#EEF3F8",
    image: mmtCover,
    driveLink: "https://drive.google.com/file/d/1r2cOd5fHwznpxZpE8Qu8F-fUBdtiT_q0/view?usp=sharing" as string | null,
    brief: "Travel booking platform for flights, hotels, and holiday packages. Worked on booking flow UX, trip planning features, and cross-platform responsive design.",
    role: "UI/UX Design Intern",
    duration: "2023",
    overview: "MakeMyTrip is India's leading travel booking platform. Worked on booking flow improvements and trip planning UX across web and mobile during an internship engagement.",
    problem: "Booking flows had high drop-off at the traveller details and add-ons stage — too many decisions at once, unclear pricing, and inconsistent behaviour between web and mobile.",
    context: "B2C · Travel · E-commerce · Web & Mobile",
    myRole: "UI/UX Design Intern — focused on booking flow UX, cross-platform consistency, and trip planning features.",
    contributions: [
      "Mapped the end-to-end booking flow and identified key drop-off points",
      "Redesigned traveller details form for clarity and reduced cognitive load",
      "Worked on cross-platform consistency between web and mobile booking experiences",
      "Designed trip planning feature wireframes and initial UI explorations",
    ],
    processNote: "Flow audit → Problem framing → Wireframes → UI explorations → Cross-platform specs",
    learnings: "High-stakes booking flows require trust-building at every step. Uncertainty about pricing or policy is what kills conversions — clarity always wins.",
    screenRatio: "16/9",
  },
];

function ImgPlaceholder({ label, note, ratio = "16/9" }: { label: string; note?: string; ratio?: string }) {
  return (
    <div style={{
      aspectRatio: ratio, background: BG, border: `1.5px dashed ${BORDER}`,
      borderRadius: "0.75rem", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1.5rem", textAlign: "center",
    }}>
      <Monitor size={20} style={{ color: DIM, opacity: 0.6 }} />
      <p style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 500, color: MUTED, margin: 0 }}>{label}</p>
      {note && <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: DIM, margin: 0, fontWeight: 300 }}>{note}</p>}
    </div>
  );
}

function CaseStudy({ p, onClose }: { p: typeof projects[0]; onClose: () => void }) {
  const hasDriveLink = !!p.driveLink;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", justifyContent: "flex-end" }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(28,26,23,0.52)", backdropFilter: "blur(5px)" }}
      />

      {/* Slide panel */}
      <motion.div
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", width: "min(700px, 95vw)", height: "100%", background: BG, overflowY: "auto", scrollbarWidth: "thin", zIndex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <div style={{
          position: "sticky", top: 0, zIndex: 10,
          background: "rgba(247,245,242,0.96)", backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${BORDER}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 1.75rem", height: 56, flexShrink: 0,
        }}>
          <span style={{ fontFamily: SERIF, fontSize: "0.9rem", fontStyle: "italic", color: MUTED }}>{p.title}</span>
          <button onClick={onClose} style={{ background: "none", border: `1px solid ${BORDER}`, borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: MUTED }}>
            <X size={14} />
          </button>
        </div>

        <div style={{ padding: "2.5rem 1.75rem 5rem", flex: 1 }}>

          {/* Hero image */}
          <div style={{ borderRadius: "0.875rem", overflow: "hidden", marginBottom: "2.5rem", position: "relative", aspectRatio: "16/9", width: "100%" }}>
            <img src={p.image} alt={p.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(247,245,242,0.15))" }} />
          </div>

          {/* Title block */}
          <div style={{ marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "2.5rem" }}>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.875rem" }}>
              {p.tags.map((t) => (
                <span key={t} style={{ background: p.accentBg, border: `1px solid ${BORDER}`, borderRadius: "9999px", padding: "0.22rem 0.7rem", fontSize: "0.67rem", color: MUTED, fontFamily: SANS, fontWeight: 400 }}>{t}</span>
              ))}
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, fontStyle: "italic", color: TEXT, margin: "0 0 0.4rem", lineHeight: 1.1 }}>{p.title}</h2>
            <p style={{ color: p.accent, fontSize: "0.8rem", fontFamily: SANS, fontWeight: 500, margin: "0 0 1.25rem", letterSpacing: "0.02em" }}>{p.company} · {p.role} · {p.duration}</p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.82, margin: 0, fontFamily: SANS, fontWeight: 300 }}>{p.overview}</p>
          </div>

          {/* Context + Problem */}
          {p.problem && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }} className="cs-two-col">
              <div>
                <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.625rem" }}>Context</p>
                <p style={{ fontFamily: SANS, fontSize: "0.84rem", color: MUTED, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{p.context}</p>
              </div>
              <div>
                <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.625rem" }}>The Problem</p>
                <p style={{ fontFamily: SANS, fontSize: "0.84rem", color: MUTED, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{p.problem}</p>
              </div>
            </div>
          )}

          {/* My Role + Contributions */}
          <div style={{ marginBottom: "2.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
            <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.625rem" }}>My Role</p>
            <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: MUTED, lineHeight: 1.8, margin: "0 0 1.5rem", fontWeight: 300 }}>{p.myRole}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {p.contributions.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: SERIF, fontSize: "1.1rem", fontStyle: "italic", color: `${p.accent}50`, lineHeight: 1.2, flexShrink: 0, width: 26, textAlign: "right" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.75, margin: 0, fontFamily: SANS, fontWeight: 300 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA block or Drive link */}
          {!hasDriveLink ? (
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
              <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Work Samples</p>
              <div style={{ background: "#EFEDE8", border: `1px solid ${BORDER}`, borderRadius: "0.875rem", padding: "2.5rem", textAlign: "center" }}>
                <p style={{ fontFamily: SERIF, fontSize: "1.4rem", fontStyle: "italic", color: TEXT, margin: "0 0 0.625rem", fontWeight: 500 }}>Full screens available on request.</p>
                <p style={{ fontFamily: SANS, fontSize: "0.84rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 300, lineHeight: 1.72 }}>
                  I'm happy to walk you through the complete product — flows, components, and the decisions behind them — in a conversation.
                </p>
                <a
                  href="mailto:anshikaagrawalwork08@gmail.com?subject=Viewing case study — please share"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: ACCENT, color: "#fff", padding: "0.75rem 1.625rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 500, textDecoration: "none", fontFamily: SANS, letterSpacing: "0.02em" }}
                >
                  Get in touch →
                </a>
              </div>
            </div>
          ) : (
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Case Study File</p>
              <div style={{ background: "#EFEDE8", border: `1px solid ${BORDER}`, borderRadius: "0.875rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: SERIF, fontSize: "1.2rem", fontStyle: "italic", color: TEXT, margin: "0 0 0.375rem", fontWeight: 500 }}>View the full case study</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, margin: 0, fontWeight: 300 }}>Screens, flows, and design decisions — PDF on Google Drive</p>
                </div>
                <a
                  href={p.driveLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: ACCENT, color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 500, textDecoration: "none", fontFamily: SANS, letterSpacing: "0.02em", whiteSpace: "nowrap", flexShrink: 0 }}
                >
                  Open Case Study ↗
                </a>
              </div>
            </div>
          )}
          {hasDriveLink && (
            <>
              {/* Design Process */}
              <div style={{ marginBottom: "2.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
                <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.375rem" }}>Design Process</p>
                {p.processNote && (
                  <p style={{ fontFamily: SANS, fontSize: "0.75rem", color: DIM, margin: "0 0 1.5rem", fontWeight: 300 }}>{p.processNote}</p>
                )}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }} className="cs-two-col">
                  <ImgPlaceholder label="User Flows & IA" note="Replace with actual flows" ratio="4/3" />
                  <ImgPlaceholder label="Wireframes" note="Replace with actual wireframes" ratio="4/3" />
                </div>
              </div>

              {/* Final Screens */}
              <div style={{ marginBottom: "2.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
                <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Final Screens</p>
                <ImgPlaceholder label={`${p.platform} — Final UI`} note="Replace with actual screenshots" ratio={p.screenRatio} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginTop: "0.875rem" }} className="cs-two-col">
                  <ImgPlaceholder label="Key Detail" ratio="4/3" />
                  <ImgPlaceholder label="Edge Cases" ratio="4/3" />
                </div>
              </div>

              {/* Learnings */}
              {p.learnings && (
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
                  <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1rem" }}>Learnings</p>
                  <blockquote style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem, 2vw, 1.45rem)", fontStyle: "italic", color: TEXT, lineHeight: 1.55, margin: 0, borderLeft: `3px solid ${p.accent}40`, paddingLeft: "1.125rem", fontWeight: 500 }}>
                    {p.learnings}
                  </blockquote>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>

      <style>{`@media (max-width: 600px) { .cs-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </motion.div>
  );
}

function ProjectCard({ p, onClick, index }: { p: typeof projects[0]; onClick: () => void; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: "0.875rem", overflow: "hidden", cursor: "pointer",
        height: "100%",
        border: `1px solid rgba(28,26,23,0.12)`,
        background: "#1A1916",
        transition: "box-shadow 0.35s, transform 0.35s",
        boxShadow: hovered ? "0 12px 40px rgba(28,26,23,0.18)" : "0 2px 8px rgba(28,26,23,0.08)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <img
        src={p.image} alt={p.title}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.85s ease, opacity 0.4s", transform: hovered ? "scale(1.05)" : "scale(1)", opacity: hovered ? 0.95 : 0.82 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,18,15,0.88) 0%, rgba(20,18,15,0.35) 38%, rgba(20,18,15,0.08) 65%, transparent 100%)" }} />

      {/* Platform badge */}
      <div style={{ position: "absolute", top: "1.125rem", left: "1.125rem" }}>
        <span style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.22rem 0.7rem", fontSize: "0.6rem", color: "#F7F5F2", fontFamily: SANS, fontWeight: 600, letterSpacing: "0.08em" }}>{p.platform}</span>
      </div>
      <div style={{ position: "absolute", top: "1.125rem", right: "1.125rem", fontSize: "0.63rem", color: "rgba(247,245,242,0.5)", fontFamily: SANS }}>{p.num}</div>

      {/* Bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "0.75rem" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: "rgba(247,245,242,0.6)", fontSize: "0.68rem", fontFamily: SANS, fontWeight: 400, margin: "0 0 0.3rem" }}>{p.company} · {p.year}</p>
            <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 600, fontStyle: "italic", color: "#F7F5F2", margin: 0, lineHeight: 1.15, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.title}</h3>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: hovered ? p.accent : "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.3s" }}>
            <ArrowUpRight size={14} style={{ color: "#F7F5F2" }} />
          </div>
        </div>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.55, y: hovered ? 0 : 4 }} transition={{ duration: 0.25 }}
          style={{ color: "rgba(247,245,242,0.75)", fontSize: "0.775rem", lineHeight: 1.65, margin: "0.7rem 0 0", fontFamily: SANS, fontWeight: 300, maxWidth: 420, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}
        >
          {p.brief}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const [active, setActive] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" style={{ padding: "5rem 1.5rem 6rem", background: "#EFEDE8" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ borderTop: `1px solid rgba(28,26,23,0.12)`, paddingTop: "1.25rem", marginBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Case Studies</span>
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, letterSpacing: "0.12em", textTransform: "uppercase" }}>4 projects · Mobile &amp; Web</span>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {/* Row 1: Workza + MagicPin */}
          <div className="grid-r1" style={{ height: "clamp(320px, 40vw, 480px)" }}>
            <ProjectCard p={projects[0]} onClick={() => setActive(projects[0])} index={0} />
            <ProjectCard p={projects[1]} onClick={() => setActive(projects[1])} index={1} />
          </div>
          {/* Row 2: AVYRO + MakeMyTrip */}
          <div className="grid-r2" style={{ height: "clamp(320px, 40vw, 480px)" }}>
            <ProjectCard p={projects[2]} onClick={() => setActive(projects[2])} index={2} />
            <ProjectCard p={projects[3]} onClick={() => setActive(projects[3])} index={3} />
          </div>
        </div>
      </div>

      <AnimatePresence>{active && <CaseStudy p={active} onClose={() => setActive(null)} />}</AnimatePresence>

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
