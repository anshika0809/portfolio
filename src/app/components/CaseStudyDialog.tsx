import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { CaseStudy } from "./caseStudiesData";
import { useEffect } from "react";

export function CaseStudyDialog({ cs, onClose }: { cs: CaseStudy | null; onClose: () => void }) {
  useEffect(() => {
    if (!cs) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cs, onClose]);

  return (
    <AnimatePresence>
      {cs && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.article
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[calc(100%-2rem)] max-w-5xl mx-auto my-10 rounded-3xl border border-white/10 bg-[#0a0a0c] overflow-hidden shadow-2xl shadow-black/50"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-transparent transition"
              aria-label="Close case study"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Hero cover */}
            <div className="relative aspect-[21/9] overflow-hidden bg-[#0a0a0c]">
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/30 to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute bottom-8 left-6 right-6 lg:bottom-12 lg:left-10 lg:right-10"
              >
                <div className="flex items-center gap-2 text-white/70 mb-4" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14 }}>
                  <span>{cs.year}</span>
                  <span className="text-white/30">·</span>
                  <span>{cs.client}</span>
                  <span className="text-white/30">·</span>
                  <span>{cs.role}</span>
                </div>
                <h2 className="text-white tracking-tight max-w-3xl" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {cs.title}
                </h2>
              </motion.div>
            </div>

            {/* Body */}
            <div className="px-6 py-10 lg:px-10 lg:py-14 space-y-14">
              <Reveal>
                <p className="text-white/75 max-w-3xl leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.75 }}>
                  {cs.oneLiner}
                </p>
              </Reveal>

              {/* Scope strip */}
              <Reveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                  {cs.scope.map((s) => (
                    <div key={s.label} className="px-4 py-4 rounded-xl">
                      <div className="text-white/40" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12 }}>{s.label}</div>
                      <div className="text-white mt-1.5" style={{ fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: 16 }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Section label="01" title="Business Problem">
                <p className="text-white/70 max-w-3xl leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.75 }}>{cs.overview}</p>
              </Section>

              <Section label="02" title="What We Solved">
                <div className="grid md:grid-cols-3 gap-5">
                  {cs.approach.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition"
                    >
                      <div className="text-white/30 mb-3" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12 }}>0{i + 1}</div>
                      <div className="text-white mb-2" style={{ fontFamily: "Sora, sans-serif", fontWeight: 500, fontSize: 16 }}>{p.title}</div>
                      <p className="text-white/60 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.7 }}>{p.body}</p>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section label="03" title="Visual snapshots">
                <div className="space-y-4">
                  {cs.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] relative bg-[#0a0a0c]"
                    >
                      <img
                        src={img}
                        alt={`${cs.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${cs.gradient} pointer-events-none opacity-20`} />
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section label="04" title="Key insights">
                <ul className="space-y-3 max-w-3xl">
                  {cs.insights.map((it, i) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3 text-white/70 leading-relaxed"
                      style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.75 }}
                    >
                      <Sparkles className="w-4 h-4 mt-1 text-violet-300/80 shrink-0" />
                      <span>{it}</span>
                    </motion.li>
                  ))}
                </ul>
              </Section>

              <Section label="05" title="Outcomes">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {cs.outcomes.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7"
                    >
                      <div className="text-white" style={{ fontFamily: "Sora, sans-serif", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
                        {m.value}
                      </div>
                      <div className="text-white/60 mt-2" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14.5, lineHeight: 1.6 }}>{m.label}</div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <a href={cs.slug === "avyro" ? "https://www.linkedin.com/in/anshika-agrawal-b473a521b" : cs.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition pt-2" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, fontWeight: 500 }}>
                {cs.slug === "avyro" ? "Message me on LinkedIn" : "View detailed work"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline gap-4 mb-6"
      >
        <span className="text-white/30" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12 }}>{label}</span>
        <h3 className="text-white tracking-tight" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}>{title}</h3>
      </motion.div>
      {children}
    </section>
  );
}
