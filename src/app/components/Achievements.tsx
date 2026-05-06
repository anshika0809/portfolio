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
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-white/35 mb-4 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
            Recognition
          </div>
          <h2 className="text-white" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Milestones
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <a.icon className="w-[18px] h-[18px] text-white/75" strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="text-white mb-1.5" style={{ fontFamily: "Sora, sans-serif", fontSize: 16, fontWeight: 500 }}>
                    {a.title}
                  </div>
                  <div className="text-white/45 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5 }}>
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
