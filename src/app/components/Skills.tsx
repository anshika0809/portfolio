import { motion } from "motion/react";
import { Compass, PenTool, Layers3, MonitorSmartphone, Users, LineChart } from "lucide-react";

const capabilities = [
  { icon: PenTool, label: "Product UI Design", hint: "Crafting interfaces that users find intuitive and delightful" },
  { icon: Compass, label: "UX Strategy", hint: "Mapping user needs to business goals through research and structure" },
  { icon: Layers3, label: "Prototyping", hint: "Building interactive flows that bring concepts to life early" },
  { icon: MonitorSmartphone, label: "Responsive Systems", hint: "Designing experiences that adapt seamlessly across devices" },
  { icon: Users, label: "User Research", hint: "Validating assumptions through direct user feedback and testing" },
  { icon: LineChart, label: "Cross-functional Collaboration", hint: "Bridging design, engineering, and business stakeholders" },
];

const tools = [
  { name: "Figma", color: "#0ACF83" },
  { name: "Stitches", color: "#6366F1" },
  { name: "Adobe XD", color: "#FF61F6" },
  { name: "Framer", color: "#0055FF" },
  { name: "ProtoPie", color: "#8B5CF6" },
  { name: "WordPress", color: "#21759B" },
  { name: "Emergent", color: "#10B981" },
  { name: "Midjourney", color: "#F59E0B" },
];

export function Skills() {
  return (
    <section id="skills" className="py-36 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-white/35 mb-4 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
            Capabilities
          </div>
          <h2 className="text-white max-w-2xl" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}>
            What I bring to the table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-24">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <c.icon className="w-[18px] h-[18px] text-white/75" strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="text-white mb-1.5" style={{ fontFamily: "Sora, sans-serif", fontSize: 15, fontWeight: 500 }}>
                    {c.label}
                  </div>
                  <div className="text-white/45 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.6 }}>
                    {c.hint}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white/35 mb-5 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
            Tools
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05] transition-all"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tool.color }}
                />
                <span className="text-white/85" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, fontWeight: 500 }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
