import { motion } from "motion/react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const BG = "#F7F5F2";
const TEXT = "#1C1A17";
const MUTED = "#6E6B66";
const DIM = "#B5B2AD";
const ACCENT = "#1B4332";
const BORDER = "rgba(28,26,23,0.09)";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
        background: BG,
      }}
    >
      {/* Dot grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle, rgba(28,26,23,0.06) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 25%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 25%, transparent 100%)",
      }} />

      {/* Green radial glow */}
      <div style={{
        position: "absolute", top: "-8%", left: "50%", transform: "translateX(-50%)",
        width: "60%", height: "50%", pointerEvents: "none",
        background: "radial-gradient(ellipse at center, rgba(27,67,50,0.06) 0%, transparent 70%)",
      }} />

      {/* Masthead */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
        style={{ position: "absolute", top: "4.5rem", left: "1.5rem", right: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Portfolio · 2026</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <motion.div
            animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }}
          />
          <span style={{ fontSize: "0.6rem", color: DIM, fontFamily: SANS, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase" }}>Open to Work</span>
        </div>
      </motion.div>

      {/* Hero content */}
      <div style={{ maxWidth: 940, width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>

        {/* Greeting — BEFORE the big name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", margin: "0 0 1.5rem" }}
        >
          <div style={{ width: 24, height: 1, background: ACCENT, opacity: 0.5 }} />
          <span style={{ fontFamily: SANS, fontSize: "clamp(0.8rem, 1.3vw, 0.9rem)", color: MUTED, fontWeight: 400, letterSpacing: "0.04em" }}>
            Hi there, I am
          </span>
          <div style={{ width: 24, height: 1, background: ACCENT, opacity: 0.5 }} />
        </motion.div>

        {/* Big name */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.42, ease }}
          style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 12vw, 7rem)", fontWeight: 600, fontStyle: "italic", lineHeight: 0.88, letterSpacing: "-0.015em", color: TEXT, margin: 0 }}
        >
          Anshika
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.52, ease }}
          style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 12vw, 7rem)", fontWeight: 600, fontStyle: "italic", lineHeight: 0.88, letterSpacing: "-0.015em", color: "rgba(28,26,23,0.12)", margin: "0 0 1.75rem" }}
        >
          Agrawal
        </motion.h1>

        {/* Thin rule + role */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.64 }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.875rem", flexWrap: "nowrap", overflow: "hidden" }}
        >
          <div style={{ flex: 1, height: 1, background: BORDER, minWidth: 40 }} />
          <span style={{ fontFamily: SANS, fontSize: "0.8125rem", fontWeight: 600, color: ACCENT, letterSpacing: "0.04em" }}>
            Product Designer
          </span>
          <span style={{ color: DIM, fontSize: "0.75rem" }}>·</span>
          <span style={{ fontFamily: SANS, fontSize: "0.8125rem", fontWeight: 400, color: MUTED }}>Web &amp; Mobile</span>
          <div style={{ flex: 1, height: 1, background: BORDER, minWidth: 40 }} />
        </motion.div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.76, ease }}
          style={{ fontFamily: SANS, fontSize: "clamp(0.875rem, 1.4vw, 0.9875rem)", color: MUTED, lineHeight: 1.72, margin: "0 auto 1.5rem", fontWeight: 300, whiteSpace: "nowrap" }}
        >
          Turning complex product briefs into interfaces people actually want to use.
        </motion.p>

        {/* Domain chips — no heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.84, ease }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "center", marginBottom: "2.5rem" }}
        >
          {["HR Tech", "EV & Mobility", "Industrial SaaS", "Fintech", "Healthcare", "Legal Tech", "Travel", "Hyperlocal", "E-commerce"].map((d, i) => (
            <motion.span
              key={d}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.88 + i * 0.035 }}
              style={{ border: `1px solid ${BORDER}`, borderRadius: "9999px", padding: "0.28rem 0.8rem", fontSize: "0.68rem", color: DIM, fontFamily: SANS, fontWeight: 400, background: "rgba(255,255,255,0.55)" }}
            >
              {d}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.88, ease }}
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.button
            whileHover={{ scale: 1.03, background: "#143528" }} whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: ACCENT, color: "#fff", padding: "0.75rem 1.875rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 500, border: "none", cursor: "pointer", fontFamily: SANS, letterSpacing: "0.02em", transition: "background 0.2s" }}
          >
            View Work
          </motion.button>
          <motion.a
            href="https://drive.google.com/file/d/1wUBBRWKKRXbSQO4lxn_-IAh9YUpZ58Zy/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{ border: `1px solid rgba(28,26,23,0.18)`, color: MUTED, padding: "0.75rem 1.875rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 400, textDecoration: "none", fontFamily: SANS, letterSpacing: "0.02em" }}
          >
            Resume ↗
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 34, background: `linear-gradient(to bottom, transparent, ${ACCENT}55)` }}
        />
        <span style={{ fontSize: "0.54rem", color: DIM, letterSpacing: "0.2em", fontFamily: SANS, textTransform: "uppercase" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
