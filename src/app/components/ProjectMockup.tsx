import { motion } from "motion/react";

type Props = { slug: string; compact?: boolean };

export function ProjectMockup({ slug, compact }: Props) {
  if (slug === "avyro") return <AvyroMockup compact={compact} />;
  if (slug === "decor-delights") return <DecorMockup compact={compact} />;
  if (slug === "empower-donation") return <EmpowerMockup compact={compact} />;
  if (slug === "healthcare") return <HealthcareMockup compact={compact} />;
  return null;
}

function Frame({ children, tone }: { children: React.ReactNode; tone: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-10">
      <div className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 ${tone} shadow-2xl shadow-black/40`}>
        <div className="absolute top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-sm border-b border-white/10 flex items-center gap-1.5 px-3">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="absolute inset-0 pt-7">{children}</div>
      </div>
    </div>
  );
}

function AvyroMockup({ compact }: { compact?: boolean }) {
  return (
    <Frame tone="bg-gradient-to-br from-[#13131a] via-[#0e0e14] to-[#0a0a0c]">
      <div className="h-full grid grid-cols-12 gap-3 p-4">
        <div className="col-span-3 rounded-lg bg-white/[0.03] border border-white/5 p-3 space-y-2">
          <div className="h-2 w-2/3 rounded bg-white/20" />
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className={`h-6 rounded-md ${i === 1 ? "bg-violet-400/30" : "bg-white/[0.04]"} flex items-center px-2 gap-2`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-1/2 rounded bg-white/30" />
            </motion.div>
          ))}
        </div>
        <div className="col-span-9 grid grid-rows-6 gap-3">
          <div className="row-span-1 grid grid-cols-3 gap-3">
            {["Active crews", "Compliance", "Throughput"].map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5"
              >
                <div className="text-white/40" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>{l}</div>
                <div className="text-white mt-1" style={{ fontWeight: 600, fontSize: compact ? 14 : 18 }}>
                  {i === 0 ? "128" : i === 1 ? "98%" : "1.4k"}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="row-span-3 rounded-lg bg-white/[0.03] border border-white/5 p-3 relative overflow-hidden">
            <div className="text-white/40 mb-2" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Shift heatmap · last 24h</div>
            <div className="grid grid-cols-12 gap-1 h-[70%]">
              {Array.from({ length: 84 }).map((_, i) => {
                const v = Math.abs(Math.sin(i * 1.7) * 0.7 + 0.3);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: v }}
                    transition={{ delay: 0.4 + i * 0.005 }}
                    className="rounded-[3px]"
                    style={{ background: `rgba(167,139,250,${v * 0.9})` }}
                  />
                );
              })}
            </div>
          </div>
          <div className="row-span-2 grid grid-cols-2 gap-3">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="rounded-lg bg-white/[0.03] border border-white/5 p-3 space-y-2"
              >
                <div className="h-1.5 rounded bg-white/20 w-1/3" />
                <div className="h-1.5 rounded bg-white/10 w-2/3" />
                <div className="h-1.5 rounded bg-white/10 w-1/2" />
                <div className="h-8 rounded-md bg-gradient-to-r from-violet-400/40 to-cyan-300/30 mt-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DecorMockup({ compact }: { compact?: boolean }) {
  return (
    <Frame tone="bg-gradient-to-br from-[#1a1411] via-[#13110f] to-[#0a0a0c]">
      <div className="absolute inset-0 grid grid-cols-12 p-4 gap-3">
        <div className="col-span-9 relative rounded-lg overflow-hidden border border-white/5 bg-gradient-to-br from-amber-200/10 via-orange-200/5 to-transparent">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-100/15 to-transparent" />
            <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="floorD" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,200,150,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,200,150,0.02)" />
                </linearGradient>
              </defs>
              <polygon points="40,200 360,200 320,140 80,140" fill="url(#floorD)" stroke="rgba(255,255,255,0.1)" />
              <rect x="120" y="110" width="100" height="40" fill="rgba(167,139,250,0.25)" stroke="rgba(255,255,255,0.15)" rx="4" />
              <rect x="240" y="120" width="60" height="30" fill="rgba(34,211,238,0.2)" stroke="rgba(255,255,255,0.15)" rx="3" />
              <circle cx="90" cy="160" r="12" fill="rgba(244,114,182,0.3)" stroke="rgba(255,255,255,0.15)" />
              <line x1="80" y1="80" x2="80" y2="200" stroke="rgba(255,255,255,0.08)" />
              <line x1="320" y1="80" x2="320" y2="200" stroke="rgba(255,255,255,0.08)" />
            </svg>
          </motion.div>
          <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/40 backdrop-blur border border-white/10 text-white/70" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>
            living room · 3D
          </div>
          {[
            { x: "35%", y: "55%", c: "rgba(167,139,250,1)" },
            { x: "65%", y: "70%", c: "rgba(34,211,238,1)" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="absolute w-3 h-3 rounded-full ring-2 ring-white/40"
              style={{ left: p.x, top: p.y, background: p.c, boxShadow: `0 0 12px ${p.c}` }}
            />
          ))}
        </div>
        <div className="col-span-3 space-y-2">
          <div className="text-white/40" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Materials</div>
          {["Oak", "Linen", "Brass", "Velvet", "Stone"].map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="rounded-md bg-white/[0.04] border border-white/5 p-2 flex items-center gap-2"
            >
              <span className={`w-4 h-4 rounded-sm`} style={{ background: ["#c89b7b", "#d8cdb8", "#caa472", "#7c3aed66", "#9ca3af"][i] }} />
              <span className="text-white/70" style={{ fontSize: compact ? 10 : 11 }}>{m}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function EmpowerMockup({ compact }: { compact?: boolean }) {
  return (
    <Frame tone="bg-gradient-to-br from-[#0d1614] via-[#0b1311] to-[#0a0a0c]">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[260px] h-[88%] rounded-[28px] border border-white/10 bg-[#0e1614] p-4 relative overflow-hidden"
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/15" />
          <div className="mt-4">
            <div className="text-white/50" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Donate to</div>
            <div className="text-white mt-1" style={{ fontWeight: 600, fontSize: compact ? 14 : 16 }}>Shelter for All ✦</div>
            <div className="text-white/40 mt-1" style={{ fontSize: 10 }}>Verified · Tax deductible</div>
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="text-white/50" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Allocation</div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden flex">
              <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 0.9, delay: 0.3 }} className="bg-emerald-400/80" />
              <motion.div initial={{ width: 0 }} animate={{ width: "20%" }} transition={{ duration: 0.9, delay: 0.5 }} className="bg-cyan-400/70" />
              <motion.div initial={{ width: 0 }} animate={{ width: "10%" }} transition={{ duration: 0.9, delay: 0.7 }} className="bg-amber-300/60" />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1 text-white/60" style={{ fontSize: 9 }}>
              <div>70% Programs</div>
              <div>20% Logistics</div>
              <div>10% Admin</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["₹250", "₹500", "₹1k"].map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                className={`rounded-lg border ${i === 1 ? "border-emerald-300/60 bg-emerald-300/10" : "border-white/10 bg-white/[0.03]"} py-2 text-center text-white/85`}
                style={{ fontSize: 11, fontWeight: 600 }}
              >
                {a}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-4 left-4 right-4 rounded-xl bg-gradient-to-r from-emerald-300 to-cyan-300 text-black text-center py-2.5"
            style={{ fontWeight: 600, fontSize: 12 }}
          >
            Donate now ✓
          </motion.div>
        </motion.div>
      </div>
    </Frame>
  );
}

function HealthcareMockup({ compact }: { compact?: boolean }) {
  return (
    <Frame tone="bg-gradient-to-br from-[#0f1318] via-[#0c1014] to-[#0a0a0c]">
      <div className="absolute inset-0 grid grid-cols-12 p-4 gap-3">
        <div className="col-span-7 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white/[0.03] border border-white/5 p-4"
          >
            <div className="text-white/40" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Your BMI</div>
            <div className="flex items-baseline gap-2 mt-1">
              <div className="text-white" style={{ fontWeight: 600, fontSize: compact ? 24 : 30, fontFamily: "Instrument Serif, serif" }}>22.4</div>
              <div className="text-emerald-300" style={{ fontSize: 11 }}>Healthy</div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/60 via-emerald-400/60 via-amber-300/60 to-rose-400/60 opacity-50" />
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: "42%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#0a0a0c]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl bg-white/[0.03] border border-white/5 p-3"
          >
            <div className="text-white/40 mb-2" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Weekly activity</div>
            <div className="flex items-end gap-1.5 h-14">
              {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-300/70 to-violet-300/70"
                />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="col-span-5 space-y-2">
          <div className="text-white/40" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>Recommendations</div>
          {[
            "Add 20 min walk · daily",
            "Hydrate · 2.5L target",
            "Sleep · 7–8 hrs",
            "Veggies · 3 servings",
          ].map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="rounded-md bg-white/[0.04] border border-white/5 p-2 text-white/75"
              style={{ fontSize: 10 }}
            >
              ✓ {r}
            </motion.div>
          ))}
        </div>
      </div>
    </Frame>
  );
}
