import { motion } from "motion/react";
import { Brain, Pencil, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: <Brain size={17} />,
    title: "Product UX",
    color: "#7C3AED",
    desc: "The core craft — how I understand problems and design solutions",
    skills: ["Wireframing", "Prototyping", "Information Architecture", "Usability Testing", "Interaction Design", "User Flows", "Responsive Web Design", "SRS Documentation"],
  },
  {
    icon: <Wrench size={17} />,
    title: "Software & Tools",
    color: "#14B8A6",
    desc: "Tools I use to research, design, and deliver — including AI",
    skills: ["Figma", "Adobe Illustrator", "WordPress", "Power BI", "Microsoft Office", "Claude AI", "Canva", "Wix Studio"],
  },
  {
    icon: <Pencil size={17} />,
    title: "Strengths",
    color: "#F59E0B",
    desc: "Where I bring the most value to a product team",
    skills: ["Product UI Design", "UX Strategy", "Client Communication", "Dev Collaboration", "B2B Design", "B2C Design", "Brand-Aligned Design", "End-to-End Ownership"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.17)", borderRadius: "9999px", padding: "0.3rem 0.875rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#FCD34D", fontFamily: "'Inter', sans-serif", letterSpacing: "0.09em", textTransform: "uppercase" }}>Skills</span>
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, color: "#F1F5F9", margin: 0, letterSpacing: "-0.04em", lineHeight: 1.12 }}>
            Not just tools —<br /><span style={{ color: "#1E293B" }}>a craft + a mindset.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.125rem" }}>
          {skillCategories.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.58, delay: ci * 0.11, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)", borderRadius: "1.25rem", padding: "1.75rem", position: "relative", overflow: "hidden" }}>

              <div style={{ position: "absolute", top: "-18px", right: "-18px", width: "90px", height: "90px", borderRadius: "50%", background: `radial-gradient(circle, ${cat.color}18, transparent 70%)`, pointerEvents: "none" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.6rem" }}>
                <div style={{ color: cat.color, background: `${cat.color}14`, borderRadius: "0.625rem", padding: "0.6rem", border: `1px solid ${cat.color}25`, flexShrink: 0 }}>{cat.icon}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#E2E8F0", letterSpacing: "-0.01em" }}>{cat.title}</div>
              </div>

              <p style={{ color: "#334155", fontSize: "0.77rem", lineHeight: 1.62, margin: "0 0 1.25rem", fontFamily: "'Inter', sans-serif" }}>{cat.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {cat.skills.map((skill, si) => (
                  <motion.span key={si} initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.03 }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = cat.color; el.style.borderColor = `${cat.color}50`; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#475569"; el.style.borderColor = `${cat.color}20`; }}
                    style={{ background: `${cat.color}09`, border: `1px solid ${cat.color}20`, color: "#475569", padding: "0.27rem 0.7rem", borderRadius: "9999px", fontSize: "0.72rem", fontWeight: 500, fontFamily: "'Inter', sans-serif", cursor: "default", transition: "color 0.2s, border-color 0.2s" }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
