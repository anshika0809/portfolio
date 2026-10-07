import { motion } from "motion/react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const TEXT = "#1C1A17";
const MUTED = "#6E6B66";
const DIM = "#B5B2AD";
const ACCENT = "#1B4332";
const BORDER = "rgba(28,26,23,0.09)";

const experiences = [
  {
    role: "Product Designer",
    company: "Karpragati Technologies Pvt. Ltd.",
    period: "Aug 2026 – Present",
    location: "Gurgaon, Haryana",
    isCurrent: true,
    isIntern: false,
    desc: "Handling client projects along with internal HRMS software and EV rider application interfaces. Managing the end-to-end design process, from creative and thinking documents through to final user flows. Working across both web and mobile product experiences.",
  },
  {
    role: "Product UI Designer",
    company: "AVYRO",
    period: "May 2025 – May 2026",
    location: "Gurgaon, Haryana",
    isCurrent: false,
    isIntern: false,
    desc: "Sole designer across a full year of B2B industrial workforce SaaS. Owned the full lifecycle — research, IA, wireframes, UI, specs, SRS documentation. Worked directly with engineering leads.",
  },
  {
    role: "UI/UX Designer",
    company: "BNF Digital",
    period: "Nov 2024 – May 2025",
    location: "Pune",
    isCurrent: false,
    isIntern: false,
    desc: "Healthcare and legal-tech interfaces for client accounts. Delivered user flows, wireframes, and high-fidelity screens across web and mobile.",
  },
  {
    role: "UI/UX Designer",
    company: "Neritic Industries",
    period: "Jun 2024 – Nov 2024",
    location: "Pune",
    isCurrent: false,
    isIntern: false,
    desc: "Fintech and SaaS product design. Designed data-heavy dashboard interfaces and conducted usability testing sessions for financial reporting tools.",
  },
];

const internships = [
  {
    role: "Web Design Intern",
    company: "Info Space Export",
    period: "Sep 2023 — Jan 2024",
    location: "Gurgaon, Haryana",
    desc: "Designed and launched the Poker Paisa website from wireframes to launch. Created UI screens, SRS documentation, and worked with marketing on brand assets.",
  },
];

const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "VIT Bhopal University",
  period: "2021 – 2025",
  cgpa: "8.89",
};

export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "5rem 1.5rem 6rem", background: "#EFEDE8" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ borderTop: `1px solid rgba(28,26,23,0.12)`, paddingTop: "1.25rem", marginBottom: "4rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Experience</span>
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 300 }}>2023 – Present</span>
        </motion.div>

        <div className="exp-grid">
          {/* Left — timeline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", gap: "1.25rem", paddingBottom: i < experiences.length - 1 ? "1.875rem" : 0 }}
              >
                {/* Dot + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 18, flexShrink: 0, paddingTop: "1.35rem" }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    {e.isCurrent && (
                      <motion.div
                        animate={{ scale: [1, 1.9, 1], opacity: [0.25, 0, 0.25] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{ position: "absolute", inset: -5, borderRadius: "50%", background: `${ACCENT}18`, border: `1px solid ${ACCENT}30` }}
                      />
                    )}
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: e.isCurrent ? ACCENT : e.isIntern ? "rgba(28,26,23,0.12)" : "rgba(28,26,23,0.22)",
                      border: e.isCurrent ? "none" : `1px solid rgba(28,26,23,0.2)`,
                    }} />
                  </div>
                  {i < experiences.length - 1 && (
                    <div style={{ flex: 1, width: 1, background: `linear-gradient(to bottom, ${BORDER}, transparent)`, marginTop: "0.5rem" }} />
                  )}
                </div>

                {/* Card */}
                <div style={{ flex: 1, minWidth: 0, background: e.isIntern ? "rgba(255,255,255,0.6)" : "#fff", border: `1px solid ${BORDER}`, borderRadius: "0.75rem", padding: "1.125rem 1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                    <div>
                      <h3 style={{ fontFamily: SANS, fontSize: "0.9375rem", fontWeight: 600, color: TEXT, margin: "0 0 0.1rem" }}>{e.role}</h3>
                      <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, margin: 0, fontWeight: 400 }}>{e.company}</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0 }}>
                      {e.isCurrent && (
                        <span style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}28`, borderRadius: "9999px", padding: "0.15rem 0.65rem", fontSize: "0.6rem", color: ACCENT, fontFamily: SANS, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Now</span>
                      )}
                      {e.isIntern && (
                        <span style={{ background: "rgba(28,26,23,0.05)", border: `1px solid ${BORDER}`, borderRadius: "9999px", padding: "0.15rem 0.65rem", fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>Intern</span>
                      )}
                    </div>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: "0.7rem", color: DIM, margin: "0 0 0.75rem", fontWeight: 400 }}>{e.period} · {e.location}</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.84rem", color: MUTED, lineHeight: 1.76, margin: 0, fontWeight: 300 }}>{e.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Internships sub-section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${BORDER}` }}
            >
              <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem", paddingLeft: "1.75rem" }}>Internships</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {internships.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    style={{ display: "flex", gap: "1.25rem" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 18, flexShrink: 0, paddingTop: "1.1rem" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(28,26,23,0.15)", border: `1px solid rgba(28,26,23,0.2)` }} />
                    </div>
                    <div style={{ flex: 1, background: "rgba(255,255,255,0.55)", border: `1px solid ${BORDER}`, borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.15rem" }}>
                        <h3 style={{ fontFamily: SANS, fontSize: "0.875rem", fontWeight: 600, color: TEXT, margin: 0 }}>{e.role}</h3>
                        <span style={{ background: "rgba(28,26,23,0.05)", border: `1px solid ${BORDER}`, borderRadius: "9999px", padding: "0.12rem 0.6rem", fontSize: "0.58rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>Intern</span>
                      </div>
                      <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: MUTED, margin: "0 0 0.05rem", fontWeight: 400 }}>{e.company}</p>
                      <p style={{ fontFamily: SANS, fontSize: "0.68rem", color: DIM, margin: "0 0 0.625rem", fontWeight: 400 }}>{e.period} · {e.location}</p>
                      <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, lineHeight: 1.72, margin: 0, fontWeight: 300 }}>{e.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — summary + education */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 600, fontStyle: "italic", color: TEXT, lineHeight: 1.18, margin: "0 0 0.875rem", letterSpacing: "-0.01em" }}>
                Wide range, deep craft — consumer scale to B2B ownership.
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.82, margin: 0, fontWeight: 300 }}>
                From design internships at 50M-user consumer platforms to sole-designer roles at B2B SaaS startups — always independent, always shipping end-to-end.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
              style={{ border: `1px solid ${BORDER}`, borderRadius: "0.875rem", padding: "1.5rem", background: "#fff" }}
            >
              <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1rem" }}>Education</p>
              <h3 style={{ fontFamily: SANS, fontSize: "0.9375rem", fontWeight: 600, color: TEXT, margin: "0 0 0.2rem" }}>{education.degree}</h3>
              <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, margin: "0 0 1.25rem", fontWeight: 300 }}>{education.school}</p>
              <div style={{ display: "flex", gap: "2.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.25rem" }}>Period</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, margin: 0, fontWeight: 300 }}>{education.period}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.25rem" }}>CGPA</p>
                  <p style={{ fontFamily: SERIF, fontSize: "1.5rem", fontStyle: "italic", color: TEXT, margin: 0, fontWeight: 500 }}>{education.cgpa}</p>
                </div>
              </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}
              style={{ border: `1px solid ${BORDER}`, borderRadius: "0.875rem", padding: "1.5rem", background: "#fff" }}
            >
              <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Milestones</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { label: "Gigabyte DSA Competition", sub: "Finalist · College of Engineering Roorkee" },
                  { label: "National Hackathon 2.0", sub: "Semi-finalist · National level" },
                  { label: "Community Leadership", sub: "Core team · GDSC, DSC, Igniters, iOS Clubs" },
                  { label: "Replix Design Project", sub: "Independent client delivery with certification" },
                ].map((m, i, arr) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", paddingBottom: i < arr.length - 1 ? "1.125rem" : 0, position: "relative" }}>
                    {i < arr.length - 1 && (
                      <div style={{ position: "absolute", left: "0.35rem", top: "1.1rem", bottom: 0, width: 1, background: `linear-gradient(to bottom, ${BORDER}, transparent)` }} />
                    )}
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: `${ACCENT}30`, border: `1px solid ${ACCENT}40`, flexShrink: 0, marginTop: "0.35rem" }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: SANS, fontSize: "0.84rem", fontWeight: 500, color: TEXT, margin: "0 0 0.15rem", lineHeight: 1.4 }}>{m.label}</p>
                      <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: MUTED, margin: 0, fontWeight: 300, lineHeight: 1.55 }}>{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        .exp-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
        @media (min-width: 640px) { .exp-grid { grid-template-columns: 3fr 2fr; gap: 4rem; } }
      `}</style>
    </section>
  );
}
