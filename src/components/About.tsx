import { motion } from "framer-motion";
import { CONTACT, SERVICES, TOOLKIT } from "../data";
import { Icon } from "./Icons";
import { Reveal, Section, SectionHead, Stagger, StaggerItem, spotlightHandlers } from "./ui";

const ACCENT: Record<string, string> = {
  signal: "text-signal bg-signal/10 border-signal/20",
  mint: "text-mint bg-mint/10 border-mint/20",
  blue: "text-blue bg-blue/10 border-blue/20",
};

export default function About() {
  return (
    <Section id="about" tone="band">
      <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        {/* ---- image column ---- */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="glass relative overflow-hidden rounded-[22px] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] sm:aspect-square lg:aspect-[4/5]">
                <img
                  src="/images/workspace.jpg"
                  alt="Gbenga's workspace"
                  loading="lazy"
                  className="h-full w-full scale-105 object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12]/85 via-transparent to-transparent" />
              </div>
            </div>

            <div className="glass absolute -bottom-6 -right-3 max-w-[195px] rounded-2xl p-4 sm:-right-6">
              <div className="mono text-[9.5px] uppercase tracking-[0.16em] text-steel">Currently</div>
              <p className="mt-1.5 text-[13px] leading-snug text-ink">
                Available to discuss new website projects through WhatsApp or email.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3">
            {[
              { icon: "mapPin", label: "Based in", value: CONTACT.location },
              { icon: "clock", label: "Working in", value: CONTACT.timezone },
              { icon: "shield", label: "You own", value: "All the code" },
              { icon: "send", label: "Replies in", value: "Under 12 hrs" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-line bg-surface/60 p-3.5">
                <Icon name={m.icon} size={15} className="text-signal" />
                <div className="mono mt-2.5 text-[9.5px] uppercase tracking-[0.14em] text-steel">{m.label}</div>
                <div className="text-[13px] font-semibold text-ink">{m.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---- copy column ---- */}
        <div className="order-1 lg:order-2">
          <SectionHead
            label="About"
            index="02"
            title={
              <>
                Thoughtful websites,
                <br />
                built around the business.
              </>
            }
          />

          <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.8] text-steel">
            <Reveal delay={0.1}>
              <p>
                I am GbengaDevs, a web and app developer based in Nigeria. I create responsive business
                websites that are clear, modern and easy for visitors to use on every screen.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Every project starts by understanding the brand, its customers and the job the website
                needs to do. That gives each design its own direction instead of forcing every business
                into the same template.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p>
                Communication stays simple through WhatsApp and email. You can follow the work through
                shared previews, send feedback in writing and always know what is being built next.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-10 grid gap-3.5 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <div
                  {...spotlightHandlers()}
                  className="spot-card glass h-full rounded-2xl p-5 transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className={`grid h-10 w-10 place-items-center rounded-xl border ${ACCENT[s.accent]}`}>
                    <Icon name={s.icon} size={18} />
                  </span>
                  <h3 className="display mt-4 text-[1.02rem] text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-steel">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10">
            <div className="mono flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.18em] text-steel">
              <span className="h-px w-6 bg-line" /> Toolkit
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {TOOLKIT.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.025, duration: 0.4 }}
                  className="mono cursor-default rounded-lg border border-line bg-surface/70 px-2.5 py-1.5 text-[11.5px] text-steel transition-colors hover:border-signal/40 hover:text-signal"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
