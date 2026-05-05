import { motion } from "motion/react";

const roles = [
  {
    co: "AVYRO",
    role: "Product UI Designer",
    period: "May 2025 — Now",
    location: "Gurgaon, Haryana",
    note: "Leading end-to-end UI/UX for a B2B industrial workforce product. Flows, wireframes, hi-fi screens, and dev collaboration.",
  },
  {
    co: "BNF Digital",
    role: "Freelance UI & Web Designer",
    period: "Dec 2024 — Mar 2025",
    location: "Pune, Maharashtra",
    note: "Designed websites and UI layouts for schools and campaign projects, aligned tightly with each brand's voice.",
  },
  {
    co: "Neritic Industries",
    role: "Web UI Designer & Developer",
    period: "Jul 2024 — Dec 2024",
    location: "Pune, Maharashtra",
    note: "Designed and developed 3 responsive websites across different domains. Owned navigation, layout, and visual asset systems.",
  },
  {
    co: "Info Space Export",
    role: "Web Design Intern",
    period: "Sep 2023 — Jan 2024",
    location: "Gurgaon, Haryana",
    note: "Designed and launched the Poker Paisa website — wireframes, UI screens, and SRS documentation. Supported brand visuals.",
  },
  {
    co: "VIT Bhopal University",
    role: "B.Tech, Computer Science & Engineering — CGPA 8.89",
    period: "Sep 2021 — Aug 2025",
    location: "Bhopal, MP",
    note: "Core member of GDSC, DSC, Igniters and iOS Clubs. Hackathon finalist. Engineering lens for design problems.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-white/40 mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>04 — Experience</div>
        <h2 className="text-white tracking-tight mb-16" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1, fontWeight: 600 }}>
          Where I've been <span style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic" }}>shipping.</span>
        </h2>

        <div className="border-t border-white/10">
          {roles.map((r, i) => (
            <motion.div
              key={r.co + r.period}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-4 py-6 border-b border-white/10 group hover:bg-white/[0.02] transition cursor-default px-2 -mx-2 rounded-lg"
            >
              <div className="col-span-12 md:col-span-3 text-white/50" style={{ fontFamily: "JetBrains Mono, monospace" }}>{r.period}</div>
              <div className="col-span-12 md:col-span-3">
                <div className="text-white" style={{ fontWeight: 600 }}>{r.co}</div>
                <div className="text-white/40">{r.location}</div>
              </div>
              <div className="col-span-12 md:col-span-3 text-white/70">{r.role}</div>
              <div className="col-span-12 md:col-span-3 text-white/50">{r.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
