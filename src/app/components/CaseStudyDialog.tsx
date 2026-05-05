import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { CaseStudy } from "./caseStudiesData";
import { useEffect } from "react";
import { ProjectMockup } from "./ProjectMockup";

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
            className="relative max-w-5xl mx-auto my-10 rounded-3xl border border-white/10 bg-[#0a0a0c] overflow-hidden shadow-2xl shadow-black/50"
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
                <ProjectMockup slug={cs.slug} />
              </motion.div>
              <div className={`absolute inset-0 bg-gradient-to-tr ${cs.gradient} pointer-events-none opacity-50`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/30 to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12"
              >
                <div className="flex items-center gap-2 text-white/70 mb-4" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <span>{cs.year}</span>
                  <span className="text-white/30">·</span>
                  <span>{cs.client}</span>
                  <span className="text-white/30">·</span>
                  <span>{cs.role}</span>
                </div>
                <h2 className="text-white tracking-tight max-w-3xl" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 600 }}>
                  {cs.title}
                </h2>
              </motion.div>
            </div>

            {/* Body */}
            <div className="p-8 lg:p-14 space-y-16">
              <Reveal>
                <p className="text-white/75 max-w-3xl leading-relaxed" style={{ fontSize: 20 }}>
                  {cs.oneLiner}
                </p>
              </Reveal>

              {/* Scope strip */}
              <Reveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-2">
                  {cs.scope.map((s) => (
                    <div key={s.label} className="px-4 py-4 rounded-xl">
                      <div className="text-white/40" style={{ fontFamily: "JetBrains Mono, monospace" }}>{s.label}</div>
                      <div className="text-white mt-1.5" style={{ fontWeight: 600 }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Section label="01" title="Overview">
                <p className="text-white/70 max-w-3xl leading-relaxed" style={{ fontSize: 18 }}>{cs.overview}</p>
              </Section>

              <Section label="02" title="Approach">
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
                      <div className="text-white/30 mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>0{i + 1}</div>
                      <div className="text-white mb-2" style={{ fontWeight: 500, fontSize: 18 }}>{p.title}</div>
                      <p className="text-white/60 leading-relaxed">{p.body}</p>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section label="03" title="Visual snapshots">
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] relative bg-[#0a0a0c]">
                  <ProjectMockup slug={cs.slug} />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${cs.gradient} pointer-events-none opacity-30`} />
                </div>
                <p className="text-white/45 mt-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  // illustrative mockup — drop your actual screens to replace
                </p>
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
                      style={{ fontSize: 17 }}
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
                      <div className="text-white tracking-tight" style={{ fontSize: 38, fontWeight: 500, fontFamily: "Instrument Serif, serif", lineHeight: 1 }}>
                        {m.value}
                      </div>
                      <div className="text-white/60 mt-2">{m.label}</div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <button onClick={onClose} className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition pt-4">
                Back to all work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
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
        className="flex items-baseline gap-4 mb-7"
      >
        <span className="text-white/30" style={{ fontFamily: "JetBrains Mono, monospace" }}>{label}</span>
        <h3 className="text-white tracking-tight" style={{ fontSize: 28, fontWeight: 600 }}>{title}</h3>
      </motion.div>
      {children}
    </section>
  );
}
