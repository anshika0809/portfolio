import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.92]);

  return (
    <section id="top" className="relative h-screen flex items-center overflow-hidden pt-24 pb-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-violet-500/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-400/8 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-5 mt-4"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/65" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12.5, fontWeight: 500 }}>
            Available for new opportunities
          </span>
        </motion.div>

        <h1 className="text-white max-w-4xl" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.03em" }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">
            Designing interfaces
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent"
          >
            people enjoy using.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 max-w-lg text-white/55 leading-relaxed"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.7 }}
        >
          Product UI Designer with 1.5+ years of experience designing B2B and B2C products across fintech, healthcare, and SaaS. I focus on user journeys, information architecture, and clean, intuitive interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 flex flex-wrap items-center gap-3.5"
        >
          <a href="#work" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14.5, fontWeight: 500 }}>
            View selected work
            <ArrowDown className="w-[15px] h-[15px] transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="https://drive.google.com/file/d/1FDalx68OAXVxKKRHOrBG5VAGMag4lqPO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/75 hover:bg-white/[0.04] hover:text-white hover:border-white/25 transition" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14.5, fontWeight: 500 }}>
            <Download className="w-[15px] h-[15px]" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 grid grid-cols-3 gap-8 max-w-xl border-t border-white/8 pt-6"
        >
          {[
            { k: "1.5+", v: "Years of experience" },
            { k: "3+", v: "Domains" },
            { k: "6+", v: "Projects completed" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-white" style={{ fontFamily: "Sora, sans-serif", fontSize: 24, fontWeight: 600, letterSpacing: "-0.015em" }}>{s.k}</div>
              <div className="text-white/40 mt-1" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12 }}>{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
