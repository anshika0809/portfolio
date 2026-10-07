import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";
const BG = "#F7F5F2";
const TEXT = "#1C1A17";
const ACCENT = "#1B4332";

const links = [
  { label: "Case Studies", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

function go(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 48));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? `rgba(247,245,242,0.94)` : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(28,26,23,0.08)` : "none",
        transition: "background 0.35s, border-color 0.35s",
      }}
    >
      <div style={{ width: "100%", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none", fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 500, color: TEXT, letterSpacing: "0.01em", fontStyle: "italic" }}
        >
          Anshika.
        </a>

        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "2.25rem" }}>
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = TEXT; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#9A9790"; }}
              style={{ background: "none", border: "none", color: "#9A9790", fontSize: "0.8125rem", fontWeight: 400, cursor: "pointer", fontFamily: SANS, letterSpacing: "0.02em", transition: "color 0.2s" }}
            >
              {l.label}
            </button>
          ))}
          <motion.a
            href="mailto:anshikaagrawalwork08@gmail.com"
            whileHover={{ scale: 1.03, background: "#143528" }}
            whileTap={{ scale: 0.97 }}
            style={{ background: ACCENT, color: "#fff", padding: "0.45rem 1.2rem", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: 500, textDecoration: "none", fontFamily: SANS, letterSpacing: "0.02em", transition: "background 0.2s" }}
          >
            Contact
          </motion.a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: TEXT, cursor: "pointer", padding: "0.5rem" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ background: "rgba(247,245,242,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(28,26,23,0.08)", overflow: "hidden" }}
          >
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {links.map((l) => (
                <button key={l.label} onClick={() => { go(l.href); setOpen(false); }}
                  style={{ background: "none", border: "none", color: "#6E6B66", fontSize: "1rem", fontWeight: 400, cursor: "pointer", textAlign: "left", fontFamily: SANS }}>
                  {l.label}
                </button>
              ))}
              <a
                href="mailto:anshikaagrawalwork08@gmail.com"
                style={{ background: ACCENT, color: "#fff", padding: "0.75rem", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", fontFamily: SANS, textAlign: "center" }}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
