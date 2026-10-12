import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark } from "./Media";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Intro() {
  const [done, setDone] = useState(() => {
    if (typeof window === "undefined") return true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    try {
      return sessionStorage.getItem("intro-seen") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (done) return;
    document.body.classList.add("noscroll");
    const t = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem("intro-seen", "1");
      } catch {
        /* ignore */
      }
    }, 1450);
    return () => {
      clearTimeout(t);
      document.body.classList.remove("noscroll");
    };
  }, [done]);

  useEffect(() => {
    if (done) document.body.classList.remove("noscroll");
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[3000] flex items-center justify-center bg-[#070b12]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/20 blur-[110px]" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -14 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid place-items-center"
            >
              <BrandMark className="h-14 w-14 rounded-2xl" />
            </motion.div>

            <div className="mt-5 overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="display text-[1.4rem] tracking-tight text-white"
              >
                Gbenga<span className="text-signal">Devs</span>
              </motion.p>
            </div>

            <div className="mt-4 h-px w-40 overflow-hidden bg-white/12">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="h-full origin-left bg-gradient-to-r from-signal to-amber"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mono mt-4 text-[10px] uppercase tracking-[0.26em] text-white/35"
            >
              Web &amp; App Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
