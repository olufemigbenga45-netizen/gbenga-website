import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CONTACT, NAV } from "../data";
import { useLockBody, useScrolled, type Theme } from "../hooks";
import { Icon } from "./Icons";
import { BrandMark } from "./Media";
import { Magnetic } from "./ui";

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-2.5" aria-label={`${CONTACT.brand} home`}>
      <BrandMark />
      <span
        className={`display text-[18px] font-bold tracking-tight ${onDark ? "text-white" : "text-ink"}`}
      >
        Gbenga<span className="text-signal">Devs</span>
      </span>
    </a>
  );
}

function ThemeToggle({ theme, toggle, onDark = true }: { theme: Theme; toggle: () => void; onDark?: boolean }) {
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative grid h-9 w-9 flex-none place-items-center overflow-hidden rounded-full border transition-colors ${
        onDark
          ? "border-white/12 bg-white/[0.07] text-white/80 hover:bg-white/15 hover:text-white"
          : "border-line bg-surface text-steel hover:text-signal"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute grid place-items-center"
        >
          <Icon name={theme === "dark" ? "moon" : "sun"} size={16} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Header({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const scrolled = useScrolled(14);
  const [open, setOpen] = useState(false);
  useLockBody(open);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[#070b12]/85 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-[#070b12]/70 to-transparent backdrop-blur-[6px]"
        }`}
      >
        <div
          className={`wrap flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <Logo onDark />

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="group relative rounded-lg px-3.5 py-2 text-[13.5px] font-semibold text-white/65 transition-colors hover:text-white"
              >
                <span className="mono mr-1.5 text-[10px] text-signal/70 opacity-0 transition-opacity group-hover:opacity-100">
                  {n.index}
                </span>
                {n.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle theme={theme} toggle={toggle} />
            <Magnetic strength={0.22} className="hidden md:inline-block">
              <a href="#contact" className="btn btn-signal !px-5 !py-2.5 !text-[13px]">
                Start a project
                <Icon name="arrowUpRight" size={15} />
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-white md:hidden"
            >
              <Icon name={open ? "x" : "menu"} size={17} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-paper/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24">
              <nav className="flex flex-col">
                {NAV.map((n, i) => (
                  <motion.a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between border-b border-line py-4 text-ink"
                  >
                    <span className="display text-[1.9rem] transition-colors group-hover:text-signal">
                      {n.label}
                    </span>
                    <span className="mono text-[11px] text-steeldim">{n.index}</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.5 }}
                className="mt-auto space-y-4 pt-8"
              >
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost flex-1"
                  >
                    <Icon name="whatsapp" size={16} /> WhatsApp
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="btn btn-ghost flex-1">
                    <Icon name="mail" size={16} /> Email
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-signal w-full"
                >
                  Start a project <Icon name="arrowUpRight" size={15} />
                </a>
                <p className="mono pt-1 text-center text-[11px] uppercase tracking-[0.16em] text-steeldim">
                  {CONTACT.location} · {CONTACT.timezone}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
