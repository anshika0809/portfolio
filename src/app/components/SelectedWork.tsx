import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, CaseStudy } from "./caseStudiesData";

export function SelectedWork({ onOpen }: { onOpen: (cs: CaseStudy) => void }) {
  return (
    <section id="work" className="py-36 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="text-white/35 mb-4 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
            Selected Work
          </div>
          <h2 className="text-white" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Case studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.button
              key={cs.slug}
              onClick={() => onOpen(cs)}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative text-left rounded-3xl overflow-hidden border border-white/10 ${cs.span} cursor-pointer bg-[#0c0c10]`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c10]">
                <motion.div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={cs.cover}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: cs.coverPosition ?? "center top",
                      transform: `scale(${cs.coverScale ?? 1})`,
                      transformOrigin: cs.coverPosition ?? "center top",
                    }}
                  />
                </motion.div>
                <div className={`absolute inset-0 bg-gradient-to-tr ${cs.gradient} pointer-events-none opacity-30`} />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/10 text-white/80" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    <span>{cs.year}</span>
                    <span className="text-white/40">·</span>
                    <span>{cs.client}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-7 lg:px-8 lg:py-8">
                <h3 className="text-white tracking-tight mb-3" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.12, fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {cs.title}
                </h3>
                <p className="text-white/55 mb-6 max-w-xl leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.75 }}>
                  {cs.oneLiner}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {cs.outcomes.map((m) => (
                    <div key={m.label}>
                      <div className="text-white" style={{ fontFamily: "Sora, sans-serif", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>
                        {m.value}
                      </div>
                      <div className="text-white/50 mt-1" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-white/70 group-hover:text-white transition" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, fontWeight: 500 }}>
                  Read case study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
