import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT } from "../data";
import { useActiveSection } from "../hooks";
import { Icon } from "./Icons";

const ITEMS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "work", label: "Work", icon: "briefcase" },
  { id: "about", label: "About", icon: "user" },
  { id: "pricing", label: "Pricing", icon: "tag" },
  { id: "contact", label: "Contact", icon: "chat" },
];

export function Dock() {
  const active = useActiveSection(ITEMS.map((i) => i.id));
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 26 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-1/2 z-[500] -translate-x-1/2 md:bottom-6"
          aria-label="Section navigation"
        >
          <div className="flex items-center gap-0.5 rounded-full border border-white/[0.09] bg-[#070b12]/88 p-1.5 shadow-[0_18px_46px_-16px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            {ITEMS.map((it) => {
              const on = active === it.id;
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[11.5px] font-semibold transition-colors sm:px-3.5 ${
                    on ? "text-onsignal" : "text-white/55 hover:text-white"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="dock-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-signal"
                    />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    <Icon name={it.icon} size={14} />
                    <span className="hidden sm:inline">{it.label}</span>
                  </span>
                </a>
              );
            })}
            <span className="mx-1 h-5 w-px bg-white/10" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-8 w-8 place-items-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name="arrowDown" size={14} className="rotate-180" />
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.07, rotate: 4 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
          className="group fixed bottom-[84px] right-4 z-[510] grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] md:bottom-6 md:right-6"
        >
          <Icon name="whatsapp" size={25} />
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-mint" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-[12px] font-semibold text-paper opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
            Chat with me
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
