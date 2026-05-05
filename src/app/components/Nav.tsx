import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 16]);
  const bg = useTransform(scrollY, [0, 100], ["rgba(10,10,12,0)", "rgba(10,10,12,0.6)"]);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <motion.nav
      style={{ backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined, backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-cyan-300 shadow-[0_0_20px_rgba(167,139,250,0.5)]" />
          <span className="tracking-tight text-white/90">Anshika Agrawal</span>
          <span className="text-white/40 ml-1">— Product UI Designer</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/60 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition"
        >
          Contact
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.nav>
  );
}
