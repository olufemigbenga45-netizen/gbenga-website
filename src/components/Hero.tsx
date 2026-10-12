import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CONTACT, ROTATING_WORDS, TESTIMONIALS } from "../data";
import { Icon } from "./Icons";
import { ClientLogo, PortraitImage } from "./Media";
import { Magnetic } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function OrbitBadge() {
  return (
    <div className="pointer-events-none absolute -right-4 -top-6 z-20 h-[96px] w-[96px] sm:-right-7 sm:-top-8 sm:h-[116px] sm:w-[116px]">
      <motion.svg
        viewBox="0 0 120 120"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="badgeArc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="mono" fontSize="10.5" letterSpacing="3.6" fill="var(--ink)" fontWeight="600">
          <textPath href="#badgeArc">AVAILABLE FOR WORK · LET'S BUILD · </textPath>
        </text>
      </motion.svg>
      <span className="absolute inset-0 m-auto grid h-11 w-11 place-items-center rounded-full bg-signal text-onsignal shadow-[0_8px_24px_-6px_var(--signal)]">
        <Icon name="arrowDown" size={17} />
      </span>
    </div>
  );
}

function FloatCard({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
        className="glass rounded-2xl px-3.5 py-2.5"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [wi, setWi] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setWi((i) => (i + 1) % ROTATING_WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" ref={ref} className="relative z-[3] overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="wrap">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* ---------- copy ---------- */}
          <motion.div style={{ y: copyY, opacity: fade }} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-mint/25 bg-mint/[0.08] py-1.5 pl-3 pr-4 text-[12.5px] font-semibold text-mint"
            >
              <span className="pulse-dot" />
              Available for new website projects
            </motion.div>

            <h1 className="display mt-6 text-[clamp(2.3rem,6.2vw,4.15rem)] text-ink">
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
                className="block"
              >
                I design & build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease }}
                className="block"
              >
                <span className="text-gradient">digital products</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24, ease }}
                className="relative block h-[1.15em] overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wi}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.55, ease }}
                    className="absolute inset-0 text-steel"
                  >
                    {ROTATING_WORDS[wi]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease }}
              className="mt-6 max-w-[30rem] text-[1.05rem] leading-relaxed text-steel"
            >
              I'm {CONTACT.name} — a product-minded developer in {CONTACT.location}. I take ambitious
              ideas from a blank page to a fast, polished thing people actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.25}>
                <a href="#contact" className="btn btn-signal">
                  Start a project <Icon name="arrowUpRight" size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#work" className="btn btn-ghost">
                  <Icon name="briefcase" size={16} /> See the work
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {TESTIMONIALS.map((client) => (
                  <ClientLogo
                    key={client.role}
                    src={client.logo}
                    initials={client.initials}
                    alt={`${client.role} logo`}
                    className="h-8 w-8 border-2 border-paper"
                  />
                ))}
              </div>
              <div className="text-[13px] leading-tight">
                <div className="flex gap-0.5 text-amber">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={12} />
                  ))}
                </div>
                <span className="text-steel">
                  <strong className="font-semibold text-ink">4 business websites</strong> in the portfolio
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------- portrait ---------- */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            <OrbitBadge />

            {/* frame glow */}
            <div className="absolute -inset-5 -z-10 rounded-[38px] bg-gradient-to-tr from-signal/25 via-transparent to-blue/20 blur-3xl" />

            <div className="glass relative overflow-hidden rounded-[26px] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[19px] bg-surface2">
                <PortraitImage
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/15 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-signal/12 via-transparent to-blue/12 mix-blend-soft-light" />
                <div className="pointer-events-none absolute inset-0 rounded-[19px] ring-1 ring-inset ring-white/10" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    {CONTACT.location} · {CONTACT.timezone}
                  </div>
                  <div className="display mt-1.5 text-[1.4rem] text-white">{CONTACT.brand}</div>
                  <div className="text-[13px] text-white/65">{CONTACT.role}</div>
                </div>
              </div>
            </div>

            <FloatCard className="-left-4 top-[26%] sm:-left-9" delay={0.75}>
              <div className="mono text-[9.5px] uppercase tracking-[0.14em] text-steel">Built for</div>
              <div className="display mt-0.5 text-[1rem] text-ink">Every screen</div>
            </FloatCard>

            <FloatCard className="-right-3 bottom-[16%] sm:-right-8" delay={0.95}>
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint/12 text-mint">
                  <Icon name="check" size={15} />
                </span>
                <div>
                  <div className="text-[12.5px] font-semibold leading-tight text-ink">Clear communication</div>
                  <div className="mono text-[9.5px] uppercase tracking-[0.12em] text-steel">WhatsApp & email</div>
                </div>
              </div>
            </FloatCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
