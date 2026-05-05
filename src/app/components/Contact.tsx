import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/30 blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-white/40 mb-4" style={{ fontFamily: "JetBrains Mono, monospace" }}>05 — Contact</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white tracking-tight mx-auto max-w-4xl"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 0.95, fontWeight: 600 }}
        >
          Let's build <span style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic" }}>something</span> users genuinely love.
        </motion.h2>

        <p className="mt-8 text-white/60 max-w-xl mx-auto" style={{ fontSize: 18 }}>
          Open to product design roles, freelance UI projects, and thoughtful collaborations. I usually reply within a day.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:anshikaagrawalwork08@gmail.com" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-white/90 transition">
            <Mail className="w-4 h-4" />
            anshikaagrawalwork08@gmail.com
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href="tel:+919893018095" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition">
            +91 98930 18095
          </a>
          <a href="https://anshika0809.github.io/Anshika-Portfolio/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition">
            Portfolio
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition">
            GitHub
          </a>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-white/40">
          <div style={{ fontFamily: "JetBrains Mono, monospace" }}>© 2026 Anshika Agrawal — Gwalior, India.</div>
          <div style={{ fontFamily: "JetBrains Mono, monospace" }}>Designed & built in Figma Make</div>
        </div>
      </div>
    </section>
  );
}
