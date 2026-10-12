import { motion } from "framer-motion";
import { useState } from "react";
import { PLANS } from "../data";
import { Icon } from "./Icons";
import { Reveal, Section, SectionHead, spotlightHandlers } from "./ui";

export default function Pricing() {
  const [mode, setMode] = useState<"once" | "split">("once");

  return (
    <Section id="pricing">
      <div className="flex flex-col items-center">
        <SectionHead
          align="center"
          label="Investment"
          index="04"
          title="Clear numbers, before we start."
          sub="Fixed scope, fixed price, written down. If something changes mid-project we agree the new number together — you'll never open a surprise invoice."
        />

        <Reveal delay={0.16} className="mt-9">
          <div className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/70 p-1 backdrop-blur">
            {(
              [
                { k: "once", label: "Pay once" },
                { k: "split", label: "3-month split" },
              ] as const
            ).map((o) => (
              <button
                key={o.k}
                onClick={() => setMode(o.k)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  mode === o.k ? "text-onsignal" : "text-steel hover:text-ink"
                }`}
              >
                {mode === o.k && (
                  <motion.span
                    layoutId="pricing-pill"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-signal"
                  />
                )}
                <span className="relative">{o.label}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PLANS.map((p) => (
          <motion.div
            key={p.name}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="relative"
          >
            <div
              {...spotlightHandlers()}
              className={`spot-card glass flex h-full flex-col rounded-[22px] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
                p.popular ? "border-signal/45 ring-1 ring-signal/20" : ""
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-signal px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-onsignal shadow-[0_8px_20px_-8px_var(--signal)]">
                  Most chosen
                </span>
              )}

              <span
                className={`grid h-11 w-11 place-items-center rounded-xl border ${
                  p.popular
                    ? "border-signal/25 bg-signal/12 text-signal"
                    : "border-line bg-surface2/70 text-steel"
                }`}
              >
                <Icon name={p.icon} size={19} />
              </span>

              <h3 className="display mt-4 text-[1.18rem] text-ink">{p.name}</h3>
              <p className="mt-1 text-[13px] text-steel">{p.blurb}</p>

              <div className="mt-5 flex items-end gap-1.5">
                <motion.span
                  key={mode + p.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="display text-[1.75rem] text-ink"
                >
                  {mode === "once" ? p.priceOnce : p.priceMonthly}
                </motion.span>
                {mode === "split" && <span className="pb-1 text-[13px] text-steel">/mo × 3</span>}
              </div>
              <div className="mono mt-1.5 flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-steeldim">
                <Icon name="clock" size={11} /> {p.duration}
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-dashed border-line pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.2px] leading-snug text-ink/90">
                    <Icon name="check" size={13} className="mt-[3px] flex-none text-mint" strokeWidth={2.4} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn mt-7 w-full ${p.popular ? "btn-signal" : "btn-ghost"}`}
              >
                {p.popular ? "Let's build it" : "Get started"}
                <Icon name="arrowRight" size={15} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Reveal delay={0.1}>
        <div className="glass mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 rounded-2xl px-6 py-4 text-center">
          {[
            { icon: "shield", t: "You own everything" },
            { icon: "check", t: "No hidden fees" },
            { icon: "chat", t: "Free project chat" },
          ].map((x) => (
            <span key={x.t} className="flex items-center gap-2 text-[13px] text-steel">
              <Icon name={x.icon} size={14} className="text-signal" />
              {x.t}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
