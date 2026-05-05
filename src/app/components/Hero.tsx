import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.92]);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        

        <h1 className="text-white max-w-5xl tracking-tight" style={{ fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 0.95, fontWeight: 600 }}>
          <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="block">
            Designing interfaces
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block"
            style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}
          >
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">people enjoy using.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-xl text-white/60 leading-relaxed"
          style={{ fontSize: 18 }}
        >
          I'm a Product UI Designer with 1.5+ years of experience designing B2B and B2C products across fintech, healthcare, and SaaS. I focus on user journeys, information architecture, and clean, intuitive interfaces — currently leading UI/UX at AVYRO.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-white/90 transition">
            View selected work
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition">
            <Sparkles className="w-4 h-4" />
            How I think
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/10 pt-8"
        >
          {[
            { k: "1.5+", v: "Years designing" },
            { k: "3", v: "Domains shipped" },
            { k: "4+", v: "Live products" },
            { k: "8.89", v: "B.Tech CGPA" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-white tracking-tight" style={{ fontSize: 32, fontWeight: 500, fontFamily: "Instrument Serif, serif" }}>{s.k}</div>
              <div className="text-white/50 mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
