import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-36 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-white/35 mb-5 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
          Let's Work Together
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white mx-auto"
          style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em", maxWidth: "600px" }}
        >
          Let's build something worth using
        </motion.h2>

        <p className="mt-6 text-white/50 max-w-lg mx-auto" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.7 }}>
          Open to product design roles, freelance projects, and meaningful collaborations.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <a href="https://www.linkedin.com/in/anshika-agrawal-b473a521b/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 500 }}>
            Message me on LinkedIn
            <ArrowUpRight className="w-[15px] h-[15px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href="mailto:anshikaagrawalwork08@gmail.com" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/75 hover:bg-white/[0.04] hover:text-white hover:border-white/25 transition" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 500 }}>
            <Mail className="w-[15px] h-[15px]" />
            Email
          </a>
          <a href="https://github.com/anshika0809" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/75 hover:bg-white/[0.04] hover:text-white hover:border-white/25 transition" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 500 }}>
            GitHub
          </a>
        </div>

        <div className="mt-24 pt-6 border-t border-white/8 flex flex-wrap items-center justify-between gap-4 text-white/30 text-xs">
          <div style={{ fontFamily: "DM Sans, sans-serif" }}>Anshika Agrawal — Gwalior, India</div>
          <div style={{ fontFamily: "DM Sans, sans-serif" }}>Designed & built in Figma Make</div>
        </div>
      </div>
    </section>
  );
}
