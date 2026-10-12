import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "../data";
import { Icon } from "./Icons";
import { ClientLogo } from "./Media";
import { Section, SectionHead } from "./ui";

export default function Testimonials() {
  const [[i, dir], setI] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;

  const go = useCallback(
    (step: number) => setI(([prev]) => [(prev + step + n) % n, step]),
    [n]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = TESTIMONIALS[i];

  return (
    <Section tone="band">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHead
            label="Client words"
            title={
              <>
                Built around each
                <br />
                owner's business.
              </>
            }
            sub="Four different businesses, each with a website shaped around its own audience, services and visual identity."
          />

          <div className="mt-8 flex items-center gap-5">
            <div className="display text-[2.6rem] leading-none text-ink">04</div>
            <div>
              <div className="text-[13px] font-semibold text-ink">Business owners</div>
              <div className="mono mt-1 text-[10.5px] uppercase tracking-[0.14em] text-steel">
                Featured in the portfolio
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-9 flex items-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-signal hover:bg-signal hover:text-onsignal"
            >
              <Icon name="arrowLeft" size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-signal hover:bg-signal hover:text-onsignal"
            >
              <Icon name="arrowRight" size={16} />
            </button>
            <div className="ml-1 flex items-center gap-1.5">
              {TESTIMONIALS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI([k, k > i ? 1 : -1])}
                  aria-label={`Testimonial ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    k === i ? "w-6 bg-signal" : "w-1.5 bg-line hover:bg-steel"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* card */}
        <div
          className="relative min-h-[330px] sm:min-h-[300px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 44 : -44, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: dir >= 0 ? -44 : 44, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              className="glass relative flex h-full cursor-grab flex-col rounded-[24px] p-7 active:cursor-grabbing md:p-9"
            >
              <Icon
                name="quote"
                size={44}
                className="absolute right-6 top-6 text-signal/12"
              />

              <div className="flex items-center gap-3">
                <span className="mono flex items-center gap-2 text-[9.5px] uppercase tracking-[0.14em] text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Owner note
                </span>
                <span className="mono rounded-full border border-line px-2.5 py-1 text-[9.5px] uppercase tracking-[0.12em] text-steel">
                  {t.tag}
                </span>
              </div>

              <blockquote className="mt-5 text-[1.06rem] leading-[1.75] text-ink md:text-[1.14rem]">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3.5 border-t border-dashed border-line pt-5">
                <ClientLogo src={t.logo} initials={t.initials} alt={`${t.role} logo`} />
                <span>
                  <strong className="block text-[14px] font-semibold text-ink">{t.name}</strong>
                  <span className="text-[12.5px] text-steel">{t.role}</span>
                </span>
                <span className="mono ml-auto hidden text-[10.5px] tracking-[0.12em] text-steeldim sm:block">
                  {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
