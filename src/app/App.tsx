import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

export const BG = "#F7F5F2";
export const TEXT = "#1C1A17";
export const MUTED = "#6E6B66";
export const DIM = "#B5B2AD";
export const ACCENT = "#1B4332";
export const ACCENT_LIGHT = "#EDF5F0";
export const BORDER = "rgba(28,26,23,0.09)";
export const SERIF = "'Cormorant Garamond', Georgia, serif";
export const SANS = "'DM Sans', system-ui, sans-serif";

function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: BG,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "2rem",
      }}
    >
      {/* Monogram */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span style={{
          fontFamily: SERIF, fontSize: "5rem", fontWeight: 600,
          fontStyle: "italic", color: TEXT, lineHeight: 1,
          letterSpacing: "-0.02em",
        }}>
          A.
        </span>
      </motion.div>

      {/* Loading bar */}
      <div style={{ width: 120, height: 1, background: "rgba(28,26,23,0.1)", borderRadius: 1, overflow: "hidden" }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "100%", background: ACCENT, transformOrigin: "left", borderRadius: 1 }}
        />
      </div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ fontFamily: SANS, fontSize: "0.6rem", color: DIM, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 400 }}
      >
        Anshika Agrawal
      </motion.span>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <div style={{ background: BG, color: TEXT, fontFamily: SANS, minHeight: "100vh", overflowX: "hidden" }}>
        <motion.div style={{ scaleX, transformOrigin: "0%", position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: ACCENT, zIndex: 100 }} />
        <Navigation />
        <main>
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
