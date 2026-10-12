import { motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[1200] h-[2px] origin-left bg-gradient-to-r from-signal via-amber to-mint"
    />
  );
}

export function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 110, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 110, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div aria-hidden className="cursor-glow" style={{ x: sx, y: sy }} />;
}

type Blob = {
  size: number;
  pos: React.CSSProperties;
  color: string;
  shift: number;
  dur: number;
  peak: number;
  base: number;
};

const BLOBS: Blob[] = [
  { size: 620, pos: { top: "-14%", left: "-10%" }, color: "var(--signal)", shift: -200, dur: 14, base: 0.42, peak: 0.62 },
  { size: 560, pos: { top: "2%", right: "-12%" }, color: "var(--blue)", shift: 150, dur: 17, base: 0.34, peak: 0.55 },
  { size: 520, pos: { top: "46%", left: "32%" }, color: "var(--mint)", shift: -280, dur: 20, base: 0.2, peak: 0.38 },
  { size: 460, pos: { bottom: "-10%", right: "6%" }, color: "var(--violet)", shift: 230, dur: 23, base: 0.18, peak: 0.34 },
];

export function PageBackdrop() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 40, damping: 26 });

  return (
    <>
      <div className="page-bg" aria-hidden>
        {BLOBS.map((b, i) => (
          <AuroraBlob key={i} blob={b} progress={p} />
        ))}
      </div>
      <div className="grain" aria-hidden />
    </>
  );
}

function AuroraBlob({ blob, progress }: { blob: Blob; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, blob.shift]);
  return (
    <motion.div
      className="aurora"
      style={{ width: blob.size, height: blob.size, background: blob.color, y, ...blob.pos }}
      animate={{ scale: [1, 1.16, 1], opacity: [blob.base, blob.peak, blob.base] }}
      transition={{ duration: blob.dur, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
