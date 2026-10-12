import { CONTACT, NAV } from "../data";
import { Icon } from "./Icons";
import { BrandMark } from "./Media";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-[3] overflow-hidden border-t border-line bg-papersoft/70 pb-28 pt-16 backdrop-blur-sm md:pb-14">
      {/* oversized wordmark */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 select-none overflow-hidden md:-bottom-10">
        <div className="display whitespace-nowrap text-center text-[clamp(4rem,17vw,13rem)] leading-none text-ink/[0.035]">
          GBENGADEVS
        </div>
      </div>

      <div className="wrap relative">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <BrandMark />
              <span className="display text-[18px] font-bold text-ink">
                Gbenga<span className="text-signal">Devs</span>
              </span>
            </a>
            <p className="mt-4 max-w-[17rem] text-[13.5px] leading-relaxed text-steel">
              Planning, directing and shipping premium websites and powerful apps — from {CONTACT.location} to
              wherever you are.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: "whatsapp", href: CONTACT.whatsapp, label: "WhatsApp" },
                { icon: "mail", href: `mailto:${CONTACT.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/70 text-steel transition-all hover:-translate-y-0.5 hover:border-signal hover:text-signal"
                >
                  <Icon name={s.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mono mb-3.5 text-[10px] uppercase tracking-[0.16em] text-steeldim">Navigate</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="group flex items-center gap-2 py-1.5 text-[13.5px] text-ink transition-colors hover:text-signal"
                  >
                    <Icon
                      name="arrowRight"
                      size={13}
                      className="-ml-1 text-steeldim opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                    />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mono mb-3.5 text-[10px] uppercase tracking-[0.16em] text-steeldim">Services</h4>
            <ul className="space-y-1.5 text-[13.5px] text-steel">
              {["Landing pages", "Marketing sites", "Web applications", "Mobile apps", "Rescue & refactor"].map(
                (s) => (
                  <li key={s}>{s}</li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mono mb-3.5 text-[10px] uppercase tracking-[0.16em] text-steeldim">Get in touch</h4>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 py-1.5 text-[13.5px] text-ink transition-colors hover:text-signal"
            >
              <Icon name="mail" size={14} className="text-steeldim" /> {CONTACT.email}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 py-1.5 text-[13.5px] text-ink transition-colors hover:text-signal"
            >
              <Icon name="whatsapp" size={14} className="text-[#25D366]" /> {CONTACT.whatsappDisplay}
            </a>
            <span className="flex items-center gap-2 py-1.5 text-[13.5px] text-steel">
              <Icon name="whatsapp" size={14} className="text-[#25D366]" /> {CONTACT.whatsappSecondaryDisplay}
            </span>
            <span className="flex items-center gap-2 py-1.5 text-[13.5px] text-steel">
              <Icon name="mapPin" size={14} className="text-steeldim" /> {CONTACT.location}
            </span>
            <span className="flex items-center gap-2 py-1.5 text-[13.5px] text-steel">
              <Icon name="clock" size={14} className="text-steeldim" /> {CONTACT.timezone}
            </span>
            <a href="#contact" className="btn btn-signal mt-4 !px-4 !py-2.5 !text-[12.5px]">
              Start a project <Icon name="arrowUpRight" size={14} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-dashed border-line pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="mono flex items-center gap-2 text-[11px] text-steel">
              <span className="pulse-dot" /> Available for new work
            </span>
            <span className="mono text-[10.5px] text-steeldim">
              © {year} {CONTACT.brand} · Built from scratch, by hand
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
