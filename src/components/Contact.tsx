import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { CONTACT } from "../data";
import { Icon } from "./Icons";
import { Magnetic, Reveal, Section, spotlightHandlers } from "./ui";

const BUDGETS = ["< ₦500k", "₦500k – ₦1m", "₦1m – ₦3m", "₦3m +"];
const NEEDS = ["Landing page", "Full website", "Web app", "Mobile app", "Redesign", "Something else"];

export default function Contact() {
  const [need, setNeed] = useState(NEEDS[1]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [copied, setCopied] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [sent, setSent] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function copySecondaryNumber() {
    navigator.clipboard?.writeText(CONTACT.whatsappSecondaryDisplay);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 1800);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("name")}`,
      `Email: ${fd.get("email")}`,
      `Project type: ${need}`,
      `Budget: ${budget}`,
      "",
      `${fd.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `New project enquiry — ${need}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <Section id="contact" tone="band">
      {/* ---- big CTA slab ---- */}
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] border border-signal/20 bg-[#080d16] px-7 py-12 text-center md:px-14 md:py-16">
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-signal/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-blue/20 blur-[90px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
              backgroundSize: "54px 54px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%,#000,transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%,#000,transparent)",
            }}
          />

          <div className="relative">
            <span className="mono inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.16em] text-white/70">
              <span className="pulse-dot" /> Available for new website projects
            </span>
            <h2 className="display mx-auto mt-6 max-w-3xl text-[clamp(1.9rem,5vw,3.3rem)] text-white">
              Got something worth
              <br />
              <span className="text-gradient-dark">building properly?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/60">
              Tell me what you are trying to make through WhatsApp, email or the form below. Every
              project conversation stays clear and easy to follow in writing.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={0.25}>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn btn-signal">
                  <Icon name="whatsapp" size={16} /> Message on WhatsApp
                </a>
              </Magnetic>
              <button onClick={copyEmail} className="btn btn-ghost !border-white/15 !bg-white/[0.06] !text-white">
                <Icon name={copied ? "check" : "copy"} size={15} />
                {copied ? "Email copied" : CONTACT.email}
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ---- form + channels ---- */}
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            {...spotlightHandlers()}
            className="spot-card glass h-full rounded-[24px] p-6 md:p-8"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-steel">
                Project brief
              </span>
            </div>
            <h3 className="display mt-3 text-[1.4rem] text-ink">Start with the short version</h3>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className="mono mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-steel">
                  Your name
                </span>
                <input required name="name" className="field" placeholder="Ada Okoye" />
              </label>
              <label className="block">
                <span className="mono mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-steel">
                  Email
                </span>
                <input required type="email" name="email" className="field" placeholder="ada@company.com" />
              </label>
            </div>

            <fieldset className="mt-5">
              <legend className="mono mb-2.5 text-[10px] uppercase tracking-[0.14em] text-steel">
                What do you need?
              </legend>
              <div className="flex flex-wrap gap-2">
                {NEEDS.map((o) => (
                  <button
                    type="button"
                    key={o}
                    onClick={() => setNeed(o)}
                    className={`rounded-lg border px-3 py-1.5 text-[12.5px] font-medium transition-all ${
                      need === o
                        ? "border-signal bg-signal/12 text-signal"
                        : "border-line bg-surface2/60 text-steel hover:border-signal/40 hover:text-ink"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="mono mb-2.5 text-[10px] uppercase tracking-[0.14em] text-steel">
                Ballpark budget
              </legend>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((o) => (
                  <button
                    type="button"
                    key={o}
                    onClick={() => setBudget(o)}
                    className={`mono rounded-lg border px-3 py-1.5 text-[12px] transition-all ${
                      budget === o
                        ? "border-mint bg-mint/12 text-mint"
                        : "border-line bg-surface2/60 text-steel hover:border-mint/40 hover:text-ink"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="mt-5 block">
              <span className="mono mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-steel">
                The problem, in your own words
              </span>
              <textarea
                required
                name="message"
                rows={4}
                className="field resize-none"
                placeholder="We run a logistics company and our customers still book by phone…"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="mono max-w-[15rem] text-[10.5px] leading-relaxed text-steeldim">
                No spam, no mailing list. One human reading it.
              </p>
              <Magnetic strength={0.2}>
                <button type="submit" className="btn btn-signal">
                  {sent ? (
                    <>
                      <Icon name="check" size={16} /> Opening your mail app
                    </>
                  ) : (
                    <>
                      Send the brief <Icon name="send" size={15} />
                    </>
                  )}
                </button>
              </Magnetic>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex h-full flex-col gap-3.5">
            <motion.a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              {...spotlightHandlers()}
              className="spot-card glass group flex flex-1 items-center gap-4 rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-line bg-surface2/70 text-[#25D366]">
                <Icon name="whatsapp" size={17} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold text-ink">WhatsApp · Most active</span>
                <span className="mono block text-[11px] text-steel">{CONTACT.whatsappDisplay}</span>
              </span>
              <Icon name="arrowUpRight" size={15} className="flex-none text-steeldim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
            </motion.a>

            <motion.button
              type="button"
              onClick={copySecondaryNumber}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06, duration: 0.5 }}
              {...spotlightHandlers()}
              className="spot-card glass group flex flex-1 items-center gap-4 rounded-2xl px-5 py-4 text-left transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-line bg-surface2/70 text-[#25D366]">
                <Icon name="whatsapp" size={17} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold text-ink">Secondary WhatsApp</span>
                <span className="mono block text-[11px] text-steel">{CONTACT.whatsappSecondaryDisplay}</span>
              </span>
              <Icon name={copiedNumber ? "check" : "copy"} size={15} className={copiedNumber ? "text-mint" : "text-steeldim"} />
            </motion.button>

            <motion.a
              href={`mailto:${CONTACT.email}`}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
              {...spotlightHandlers()}
              className="spot-card glass group flex flex-1 items-center gap-4 rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-line bg-surface2/70 text-signal">
                <Icon name="mail" size={17} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold text-ink">Email</span>
                <span className="mono block break-all text-[11px] text-steel">{CONTACT.email}</span>
              </span>
              <Icon name="arrowUpRight" size={15} className="flex-none text-steeldim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
            </motion.a>

            <div className="rounded-2xl border border-line bg-surface/45 px-5 py-4">
              <p className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-steel">
                <Icon name="chat" size={15} className="mt-0.5 flex-none text-blue" />
                WhatsApp and email are the available contact methods. I reply to every project message myself.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
