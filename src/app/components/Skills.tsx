import { motion } from "motion/react";
import {
  Compass,
  PenTool,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Trophy,
  Users,
  LineChart,
} from "lucide-react";

const capabilities = [
  { icon: Compass, label: "UX Strategy", level: 90, hint: "Discovery, IA, journey mapping" },
  { icon: PenTool, label: "Product UI Design", level: 95, hint: "Figma, design systems, hi-fi" },
  { icon: Layers3, label: "Wireframing & Prototyping", level: 92, hint: "Low → high fidelity" },
  { icon: MonitorSmartphone, label: "Responsive Web", level: 88, hint: "Mobile-first, adaptive grids" },
  { icon: Users, label: "Usability Testing", level: 80, hint: "Interviews, task analysis" },
  { icon: LineChart, label: "Stakeholder Communication", level: 90, hint: "Client + dev collaboration" },
];

const tools = [
  { name: "Figma", note: "Primary design tool", Icon: FigmaIcon },
  { name: "Adobe CS", note: "Photoshop · Illustrator · XD", Icon: AdobeIcon },
  { name: "WordPress", note: "Theme & UX builds", Icon: WordPressIcon },
  { name: "Wix Studio", note: "Rapid sites", Icon: WixIcon },
  { name: "Power BI", note: "Dashboards", Icon: PowerBIIcon },
  { name: "MS Office", note: "Docs & decks", Icon: OfficeIcon },
];

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" className="w-6 h-6" aria-hidden>
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  );
}

function AdobeIcon() {
  return (
    <svg viewBox="0 0 240 234" className="w-6 h-6" aria-hidden>
      <rect width="240" height="234" rx="42" fill="#FA0F00" />
      <path fill="#fff" d="M97 60 60 174h26l9-30h36l9 30h26L131 60H97Zm5 60 11-37 11 37H102Z" />
    </svg>
  );
}

function WordPressIcon() {
  return (
    <svg viewBox="0 0 122 122" className="w-6 h-6" aria-hidden>
      <circle cx="61" cy="61" r="58" fill="#21759B" />
      <path fill="#fff" d="M14 61c0 18.6 10.8 34.7 26.5 42.3L18.1 41.5C15.5 47.5 14 54.1 14 61Zm78.7-2.4c0-5.8-2.1-9.8-3.9-12.9-2.4-3.9-4.7-7.2-4.7-11 0-4.3 3.3-8.4 7.9-8.4l.6.1A47 47 0 0 0 14 61h3.4l24.7-3.6L17.3 92l29.5 8 17.7-51.5L82 92l29.4-7.4a47.2 47.2 0 0 0 6.6-23.6c0-9.6-2.6-16.5-5.3-22.6.3 1.2.4 2.5.4 3.9 0 5.7-2.2 12.3-5.4 21.2L96.5 84.5 80.7 39.7l5.5-.5c2.5-.3 2.2-3.9-.3-3.8L70 36.7l-2.7.2c-2.5.1-2.2 3.9.3 3.8l5 .4 7.3 19.9-10.3 30.7L52.6 41 58 40.5c2.5-.3 2.2-3.9-.3-3.8l-15.8 1.2-2.7.2c-2.4.1-2.2 3.7.2 3.8l5 .4 6.9 19.1-9.7 29.2L25.4 41l5.6-.4c2.5-.3 2.3-3.9-.2-3.8l-7.5.4A47 47 0 0 0 108 61c0-13.4-6.5-25.3-15.3-32.8 1.5 3.5 2 5.7 2 9.4 0 8.1-3.1 12.3-6.4 16.4-2.5 3.4-4.5 6.6-4.5 11Z"/>
    </svg>
  );
}

function WixIcon() {
  return (
    <svg viewBox="0 0 120 60" className="w-7 h-6" aria-hidden>
      <text x="0" y="44" fill="#fff" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 44, fontWeight: 800 }}>WIX</text>
    </svg>
  );
}

function PowerBIIcon() {
  return (
    <svg viewBox="0 0 60 60" className="w-6 h-6" aria-hidden>
      <defs>
        <linearGradient id="pbi" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F2C811" />
          <stop offset="100%" stopColor="#E8A30C" />
        </linearGradient>
      </defs>
      <rect x="36" y="6" width="18" height="48" rx="3" fill="url(#pbi)" />
      <rect x="21" y="20" width="18" height="34" rx="3" fill="url(#pbi)" opacity="0.85" />
      <rect x="6" y="34" width="18" height="20" rx="3" fill="url(#pbi)" opacity="0.7" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg viewBox="0 0 60 60" className="w-6 h-6" aria-hidden>
      <defs>
        <linearGradient id="ms" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EB3C00" />
          <stop offset="100%" stopColor="#C03200" />
        </linearGradient>
      </defs>
      <path fill="url(#ms)" d="M8 12 36 4v52L8 48V12Z" />
      <path fill="#fff" opacity=".95" d="M36 4v52l16-4V8L36 4Z" />
      <text x="14" y="38" fill="#fff" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800 }}>O</text>
    </svg>
  );
}

const achievements = [
  { icon: Trophy, label: "Finalist", sub: "Gigabyte DSA Competition · COE Roorkee" },
  { icon: Sparkles, label: "Semi-finalist", sub: "National Hackathon 2.0" },
  { icon: Users, label: "Core Team Member", sub: "GDSC · DSC · Igniters · iOS Clubs" },
  { icon: LineChart, label: "Solo freelance ship", sub: "Replix design project — independent ownership" },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="text-white/40 mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              03 — Skills & toolkit
            </div>
            <h2 className="text-white tracking-tight max-w-2xl" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, fontWeight: 600 }}>
              Built for product work — <span style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>end to end.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-sm leading-relaxed">
            A snapshot of the muscles I lean on across discovery, design, and handoff — and the tools I use to get there.
          </p>
        </div>

        {/* Capability cards with progress meters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 hover:border-white/20 transition overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-white/85" />
                </div>
                <div className="text-white/50" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {c.level}<span className="text-white/30">%</span>
                </div>
              </div>

              <div className="text-white mb-1.5" style={{ fontWeight: 600, fontSize: 18 }}>
                {c.label}
              </div>
              <div className="text-white/50 mb-5">{c.hint}</div>

              <div className="h-[3px] w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.level}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools rail */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8 mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-white/40" style={{ fontFamily: "JetBrains Mono, monospace" }}>// tools I use</div>
            <div className="text-white/40">{tools.length} tools</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-white/10 bg-[#0c0c10] hover:border-white/25 hover:bg-white/[0.03] transition px-4 py-4 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  <t.Icon />
                </div>
                <div className="min-w-0">
                  <div className="text-white truncate" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="text-white/45 mt-0.5 truncate">{t.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements rail */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.06] via-white/[0.02] to-transparent p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white/40" style={{ fontFamily: "JetBrains Mono, monospace" }}>// recognition & community</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-[#0c0c10] p-5 hover:border-white/20 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <a.icon className="w-4 h-4 text-white/85" />
                </div>
                <div className="text-white" style={{ fontWeight: 600 }}>{a.label}</div>
                <div className="text-white/50 mt-1 leading-snug">{a.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
