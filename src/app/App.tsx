import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { CaseStudyDialog } from "./components/CaseStudyDialog";
import { CaseStudy } from "./components/caseStudiesData";
import { PageLoader } from "./components/PageLoader";

export default function App() {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div
      className="min-h-screen bg-[#0a0a0c] text-white antialiased selection:bg-violet-400/40 selection:text-white"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
    >
      <PageLoader />
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 z-[60]"
      />
      <Nav />
      <main>
        <Hero />
        <SelectedWork onOpen={setActive} />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <CaseStudyDialog cs={active} onClose={() => setActive(null)} />
    </div>
  );
}
