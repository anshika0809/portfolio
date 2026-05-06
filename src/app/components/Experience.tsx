import { motion } from "motion/react";

const roles = [
  {
    co: "AVYRO",
    role: "Product UI Designer",
    period: "May 2025 — Present",
    location: "Gurgaon, Haryana",
    responsibilities: [
      "Leading end-to-end UI/UX for a B2B industrial workforce platform serving factory supervisors and field crews",
      "Designing user flows, wireframes, and production-ready interfaces that work in real industrial environments",
      "Collaborating daily with engineering and stakeholders to ship iterative improvements",
    ],
  },
  {
    co: "BNF Digital",
    role: "Freelance UI & Web Designer",
    period: "Dec 2024 — Mar 2025",
    location: "Pune, Maharashtra",
    responsibilities: [
      "Designed websites and UI systems for schools and campaign projects",
      "Delivered brand-aligned designs that balanced client vision with user needs",
    ],
  },
  {
    co: "Neritic Industries",
    role: "Web UI Designer & Developer",
    period: "Jul 2024 — Dec 2024",
    location: "Pune, Maharashtra",
    responsibilities: [
      "Designed and built 3 responsive websites across different verticals",
      "Improved site navigation and overall user experience through IA restructuring",
      "Managed visual asset systems and coordinated with cross-functional teams",
    ],
  },
  {
    co: "Info Space Export",
    role: "Web Design Intern",
    period: "Sep 2023 — Jan 2024",
    location: "Gurgaon, Haryana",
    responsibilities: [
      "Designed and launched the Poker Paisa website from wireframes to launch",
      "Created UI screens, SRS documentation, and worked with marketing on brand assets",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-48 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-24">
          <div className="text-white/40 mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em" }}>
            Experience
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.025em" }}>
            Where I've shipped work
          </h2>
        </div>

        <div className="space-y-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.co + role.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <div className="text-white font-medium mb-1.5" style={{ fontSize: 17 }}>
                    {role.co}
                  </div>
                  <div className="text-white/65 mb-3" style={{ fontSize: 15.5 }}>
                    {role.role}
                  </div>
                  <div className="text-white/40 text-sm mb-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {role.period}
                  </div>
                  <div className="text-white/40 text-sm">
                    {role.location}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-3">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-white/65 leading-relaxed flex items-start gap-3.5" style={{ fontSize: 15.5, lineHeight: 1.7 }}>
                        <span className="text-white/25 mt-2 text-xs">●</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
