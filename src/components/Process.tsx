import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROCESS } from "../data";
import { Icon } from "./Icons";
import { Section, SectionHead, spotlightHandlers } from "./ui";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="process" tone="band">
      <SectionHead
        label="How it works"
        index="03"
        title={
          <>
            A process built to remove
            <br />
            surprises, not add them.
          </>
        }
        sub="You always know what's happening, what's next, and what it costs. Four stages, no mystery middle."
      />

      <div ref={ref} className="relative mt-14 md:mt-20">
        {/* spine */}
        <div className="absolute left-[19px] top-2 hidden h-full w-px bg-line sm:block md:left-[27px]">
          <motion.div style={{ height }} className="w-px bg-gradient-to-b from-signal via-amber to-mint" />
        </div>

        <div className="space-y-4">
          {PROCESS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative sm:pl-[60px] md:pl-[76px]"
            >
              {/* node */}
              <span className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-full border border-line bg-paper text-signal sm:grid md:h-14 md:w-14">
                <Icon name={s.icon} size={17} />
              </span>

              <div
                {...spotlightHandlers()}
                className="spot-card glass group rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1 md:p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="mono text-[11px] tracking-[0.16em] text-signal">{s.num}</span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="mono rounded-full border border-line bg-surface2/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-steel">
                    {s.meta}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-4">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-signal/20 bg-signal/10 text-signal sm:hidden">
                    <Icon name={s.icon} size={17} />
                  </span>
                  <div>
                    <h3 className="display text-[1.22rem] text-ink md:text-[1.35rem]">{s.title}</h3>
                    <p className="mt-2.5 max-w-xl text-[0.94rem] leading-relaxed text-steel">{s.body}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
