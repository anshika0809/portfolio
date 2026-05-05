import { motion } from "motion/react";

const items = [
  "AVYRO",
  "BNF Digital",
  "Neritic Industries",
  "Info Space Export",
  "Replix",
  "Poker Paisa",
];

export function Marquee() {
  return (
    <section className="border-y border-white/5 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6">
        <div className="text-white/40" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          // companies & products I've designed for
        </div>
      </div>
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...items, ...items].map((it, i) => (
            <span key={i} className="text-white/40 hover:text-white transition-colors tracking-tight" style={{ fontSize: 32, fontWeight: 500 }}>
              {it}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
