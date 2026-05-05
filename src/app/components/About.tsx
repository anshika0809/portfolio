import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-white/40 mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>02 — About</div>
            <h2 className="text-white tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1, fontWeight: 600 }}>
              Hi, I'm <span style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic" }}>Anshika.</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 space-y-6 text-white/70 leading-relaxed"
            style={{ fontSize: 19 }}
          >
            <p>
              I'm a Product UI Designer based in Gwalior, India, with <span className="text-white">1.5+ years of experience</span> across fintech, healthcare, and SaaS. I care about understanding the user before reaching for pixels — wireframes, IA, and usability tests usually come before the pretty stuff.
            </p>
            <p>
              I'm currently leading end-to-end UI/UX for a B2B industrial workforce product at <span className="text-white">AVYRO</span>, working closely with developers and stakeholders to make the interface adoptable for real on-ground users.
            </p>
            <p>
              Before AVYRO, I designed for BNF Digital, Neritic Industries, and Info Space Export — shipping responsive websites, donation flows, school campaigns, and the Poker Paisa launch. I graduated from <span className="text-white">VIT Bhopal</span> with a B.Tech in CSE and an 8.89 CGPA, and I still bring that engineering lens into every design conversation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
