import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowUpRight, FileText } from "lucide-react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const BG = "#F7F5F2";
const TEXT = "#1C1A17";
const MUTED = "#6E6B66";
const DIM = "#B5B2AD";
const ACCENT = "#1B4332";
const BORDER = "rgba(28,26,23,0.09)";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "Connect with me",
    href: "https://www.linkedin.com/in/anshika-agrawal-work/",
  },
  {
    icon: Github,
    label: "GitHub",
    sub: "See my code",
    href: "https://github.com/anshika0809",
  },
  {
    icon: FileText,
    label: "Resume",
    sub: "Download PDF",
    href: "https://drive.google.com/file/d/1kRXe4zfhYLTGknFv78ky4cGR-dPMgloz/view?usp=sharing",
    download: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" style={{ padding: "5rem 1.5rem 6rem", background: BG }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem", marginBottom: "4rem" }}
        >
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Contact</span>
        </motion.div>

        <div className="contact-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem, 6vw, 4.25rem)", fontWeight: 500, fontStyle: "italic", color: TEXT, lineHeight: 1.05, letterSpacing: "-0.01em", margin: "0 0 1.5rem" }}>
              {"Let's make something worth using."}
            </h2>
            <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.82, margin: "0 0 2.25rem", fontFamily: SANS, fontWeight: 300 }}>
              Open to full-time product design roles, freelance work, and interesting product conversations.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "2rem" }}>
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, flexShrink: 0 }}
              />
              <span style={{ fontSize: "0.73rem", color: MUTED, fontFamily: SANS, fontWeight: 400 }}>
                Available for new opportunities · Gurgaon, Haryana
              </span>
            </div>

            <motion.a
              href="mailto:anshikaagrawalwork08@gmail.com"
              whileHover={{ scale: 1.025, background: "#143528" }}
              whileTap={{ scale: 0.975 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: ACCENT, color: "#fff", padding: "0.85rem 1.875rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", fontFamily: SANS, letterSpacing: "0.02em", transition: "background 0.2s" }}
            >
              <Mail size={15} />
              anshikaagrawalwork08@gmail.com
            </motion.a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {socials.map(({ icon: Icon, label, sub, href, download }) => (
              <motion.a
                key={label}
                href={href}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                download={download || undefined}
                whileHover={{ x: 3 }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(28,26,23,0.16)";
                  el.style.boxShadow = "0 2px 12px rgba(28,26,23,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = BORDER;
                  el.style.boxShadow = "none";
                }}
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", border: `1px solid ${BORDER}`, borderRadius: "0.875rem", textDecoration: "none", background: "#fff", transition: "border-color 0.25s, box-shadow 0.25s" }}
              >
                <div style={{ width: 40, height: 40, borderRadius: "0.625rem", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "#EFEDE8" }}>
                  <Icon size={16} style={{ color: MUTED }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", fontWeight: 500, color: TEXT, margin: 0 }}>{label}</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.75rem", color: DIM, margin: 0, fontWeight: 300 }}>{sub}</p>
                </div>
                <ArrowUpRight size={14} style={{ color: DIM, flexShrink: 0 }} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ borderTop: `1px solid ${BORDER}`, marginTop: "5rem", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}
        >
          <span style={{ fontFamily: SERIF, fontSize: "0.95rem", color: DIM, fontStyle: "italic", fontWeight: 500 }}>Anshika Agrawal</span>
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" }}>Product Designer · Gurgaon · 2026</span>
        </motion.div>
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
        @media (min-width: 640px) { .contact-grid { grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; } }
      `}</style>
    </section>
  );
}
