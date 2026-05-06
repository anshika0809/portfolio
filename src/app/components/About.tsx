import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-36 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-white/35 mb-4 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
            About
          </div>
          <h2 className="text-white mb-8" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Hi, I'm Anshika
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-white/60"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.75 }}
        >
          <p>
            I'm a Product UI Designer based in Gwalior, with over a year and a half designing for <span className="text-white" style={{ fontWeight: 500 }}>fintech, healthcare, and SaaS</span> products. I believe good design starts with understanding—not pixels. Before I open Figma, I'm asking questions, mapping flows, testing assumptions.
          </p>
          <p>
            Right now, I'm leading UI/UX for <span className="text-white" style={{ fontWeight: 500 }}>AVYRO</span>, a B2B industrial workforce platform. I work directly with factory supervisors and field crews to design interfaces that work in real, messy conditions—not just in a prototype.
          </p>
          <p>
            Before AVYRO, I shipped work for BNF Digital, Neritic Industries, and Info Space Export—everything from donation flows to school campaign sites to the Poker Paisa launch. I studied Computer Science at VIT Bhopal (8.89 CGPA), which taught me to think in systems, spot edge cases, and speak the same language as developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
