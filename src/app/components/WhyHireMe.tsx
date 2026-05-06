import { motion } from "motion/react";

export function WhyHireMe() {
  return (
    <section className="py-36 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-white/35 mb-4 text-xs tracking-wider uppercase" style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em", fontWeight: 500 }}>
            Approach
          </div>
          <h2 className="text-white mb-8" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4.5vw, 44px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}>
            How I work
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-white/60"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15.5, lineHeight: 1.75 }}
        >
          <p>
            I don't start with aesthetics. I start with <span className="text-white" style={{ fontWeight: 500 }}>the problem</span>. What's broken? Who's struggling? What's the gap between what users need and what currently exists? Design is a response to real friction—not decoration.
          </p>
          <p>
            I think from both sides: the user trying to complete a task, and the business trying to grow. A beautiful interface that doesn't convert or retain isn't good design. I aim for solutions that are <span className="text-white" style={{ fontWeight: 500 }}>intuitive for users and valuable for stakeholders</span>.
          </p>
          <p>
            I work fast, stay curious, and don't take feedback personally. I pay attention to the details that matter—interaction states, empty states, error handling—while keeping the big picture in focus. I genuinely care about making products better, and I'll put in the work to get there.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
