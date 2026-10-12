import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CONTACT, FAQS } from "../data";
import { Icon } from "./Icons";
import { Reveal, Section, SectionHead } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHead
            label="Questions"
            index="05"
            title={
              <>
                The things people
                <br />
                always ask.
              </>
            }
            sub="And a few they should. If yours isn't here, just ask — I answer every message myself."
          />
          <Reveal delay={0.18} className="mt-8">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2.5">
                <span className="pulse-dot" />
                <span className="mono text-[10.5px] uppercase tracking-[0.14em] text-steel">
                  Usually replies in under 12 hrs
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-steel">
                Still unsure whether this is worth your budget? Send one honest paragraph about the
                problem and I'll tell you straight.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-4 w-full"
              >
                <Icon name="whatsapp" size={16} /> Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`border-b border-line transition-colors ${isOpen ? "border-signal/30" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-4 py-5 text-left"
                >
                  <span
                    className={`mono pt-1 text-[11px] tracking-[0.1em] transition-colors ${
                      isOpen ? "text-signal" : "text-steeldim"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`display flex-1 text-[1.02rem] transition-colors md:text-[1.08rem] ${
                      isOpen ? "text-signal" : "text-ink group-hover:text-signal"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 flex-none place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-[135deg] border-signal bg-signal text-onsignal"
                        : "border-line text-steel group-hover:border-signal group-hover:text-signal"
                    }`}
                  >
                    <Icon name="plus" size={13} strokeWidth={2.2} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 pl-[30px] pr-10 text-[0.94rem] leading-[1.75] text-steel">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
