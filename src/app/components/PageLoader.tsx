import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#0a0a0c] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-cyan-300 shadow-[0_0_30px_rgba(167,139,250,0.5)]"
            />
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white tracking-tight"
                style={{ fontSize: 22, fontWeight: 600 }}
              >
                Anshika Agrawal
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "180px" }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-1/3 h-[2px] bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
