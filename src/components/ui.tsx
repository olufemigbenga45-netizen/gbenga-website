import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

/* ---------------------------------------------------------------
   Reveal — scroll-triggered entrance
   --------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Stagger container + item
   --------------------------------------------------------------- */
export function Stagger({
  children,
  className = "",
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Section heading with ruler label + index
   --------------------------------------------------------------- */
export function SectionHead({
  label,
  index,
  title,
  sub,
  align = "left",
}: {
  label: string;
  index?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`relative ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Reveal>
        <div className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="h-px w-7 bg-line" />
          <span className="mono text-[11px] uppercase tracking-[0.2em] text-steel">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="display mt-4 text-[clamp(1.85rem,4.2vw,3rem)] text-ink">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p className={`mt-4 text-[1.03rem] leading-relaxed text-steel ${centered ? "mx-auto" : ""}`}>{sub}</p>
        </Reveal>
      )}
      {index && (
        <span className="mono absolute -top-1 right-0 hidden text-[11px] tracking-[0.22em] text-steeldim md:block">
          {index}
        </span>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   Section wrapper
   --------------------------------------------------------------- */
export function Section({
  id,
  children,
  className = "",
  tone = "plain",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "plain" | "band";
}) {
  return (
    <section
      id={id}
      className={`relative z-[3] scroll-mt-24 py-20 md:py-28 ${
        tone === "band" ? "border-y border-line bg-papersoft/60 backdrop-blur-[2px]" : ""
      } ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Magnetic hover wrapper
   --------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Spotlight card — tracks the cursor into CSS vars
   --------------------------------------------------------------- */
export function spotlightHandlers() {
  return {
    onMouseMove: (e: MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
  };
}

/* ---------------------------------------------------------------
   Tilt card — subtle 3D on pointer
   --------------------------------------------------------------- */
export function Tilt({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const srx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 180, damping: 20 });
  const sry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 180, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Counter — counts up when scrolled into view
   --------------------------------------------------------------- */
export function Counter({ to, suffix = "", duration = 1500 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
