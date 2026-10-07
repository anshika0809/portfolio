import { motion } from "motion/react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const BG = "#F7F5F2";
const TEXT = "#1C1A17";
const MUTED = "#6E6B66";
const DIM = "#B5B2AD";
const ACCENT = "#1B4332";
const BORDER = "rgba(28,26,23,0.09)";

const stats = [
  { v: "2+", l: "Years Experience" },
  { v: "6+", l: "Products Shipped" },
  { v: "9+", l: "Domains" },
  { v: "8.89", l: "CGPA" },
];

const skillGroups = [
  {
    label: "Product Design",
    items: ["User Research", "Information Architecture", "User Flows", "Wireframing", "Usability Testing"],
  },
  {
    label: "UI & Interaction",
    items: ["Interaction Design", "Prototyping", "Design Systems", "Responsive Design", "Micro-interactions"],
  },
  {
    label: "Tools",
    items: ["Figma", "Adobe Illustrator", "WordPress", "Power BI"],
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AboutSection() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem 6rem", background: BG }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem", marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>About</span>
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 300 }}>Gurgaon, Haryana</span>
        </motion.div>

        <div className="about-grid">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease }}
          >
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 600, fontStyle: "italic", color: TEXT, lineHeight: 1.15, letterSpacing: "-0.01em", margin: "0 0 1.75rem" }}>
              Where engineering meets design — built from both sides of the table.
            </h2>
            <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.88, margin: "0 0 1.25rem", fontFamily: SANS, fontWeight: 300 }}>
              I'm Anshika — currently designing at{" "}
              <span style={{ color: TEXT, fontWeight: 400 }}>Karpragati Technologies</span> in Gurgaon, where I own two product tracks: an internal HRMS platform and a consumer EV rider app. Before that, I was the sole designer at{" "}
              <span style={{ color: TEXT, fontWeight: 400 }}>AVYRO</span> for a full year, building a B2B industrial workforce SaaS from scratch.
            </p>
            <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.88, margin: "0 0 2.25rem", fontFamily: SANS, fontWeight: 300 }}>
              My Computer Science degree (VIT Bhopal, 8.89 CGPA) means I think in systems, write specs developers actually ship from, and don't need a translator in engineering rooms. I've designed across fintech, healthcare, SaaS, EV tech, legal-tech, and e-commerce.
            </p>

            {/* Quote block */}
            <div style={{ borderLeft: `3px solid ${ACCENT}30`, paddingLeft: "1.25rem" }}>
              <p style={{ fontFamily: SERIF, fontSize: "1.1rem", fontStyle: "italic", color: TEXT, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                "I believe the best interfaces are the ones where the product thinking is invisible and the user just feels like it works."
              </p>
            </div>
          </motion.div>

          {/* Right — stats + skills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: `1px solid ${BORDER}`, borderRadius: "0.875rem", overflow: "hidden", background: "#fff" }}
            >
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: "1.5rem",
                  borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : "none",
                  borderBottom: i < 2 ? `1px solid ${BORDER}` : "none",
                }}>
                  <div style={{ fontFamily: SERIF, fontSize: "2.25rem", fontWeight: 500, fontStyle: "italic", color: TEXT, lineHeight: 1, marginBottom: "0.375rem" }}>{s.v}</div>
                  <div style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>

            {/* Skills by group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.625rem" }}>{group.label}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {group.items.map((s, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.04 }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = TEXT; (e.currentTarget as HTMLElement).style.background = "#EFEDE8"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(28,26,23,0.15)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = MUTED; (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
                        style={{ border: `1px solid ${BORDER}`, borderRadius: "9999px", padding: "0.26rem 0.8rem", fontSize: "0.72rem", color: MUTED, fontFamily: SANS, fontWeight: 400, transition: "color 0.2s, background 0.2s, border-color 0.2s", cursor: "default" }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
        @media (min-width: 640px) { .about-grid { grid-template-columns: 1fr 1fr; gap: 4.5rem; } }
      `}</style>
    </section>
  );
}
