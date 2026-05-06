import { motion } from "motion/react";
import { Award, Trophy, Users, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Gigabyte DSA Competition",
    org: "Finalist · College of Engineering Roorkee",
  },
  {
    icon: Award,
    title: "National Hackathon 2.0",
    org: "Semi-finalist · National level",
  },
  {
    icon: Users,
    title: "Community Leadership",
    org: "Core team · GDSC, DSC, Igniters, iOS Clubs",
  },
  {
    icon: FileCheck,
    title: "Replix Design Project",
    org: "Independent client delivery with certification",
  },
];

export function Achievements() {
  return (
    <section className="py-36 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-white/40 mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em" }}>
            Recognition
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.025em" }}>
            Milestones
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <a.icon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-1">
                  <div className="text-white mb-2 font-medium" style={{ fontSize: 16.5 }}>
                    {a.title}
                  </div>
                  <div className="text-white/55 leading-relaxed" style={{ fontSize: 14.5 }}>
                    {a.org}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
