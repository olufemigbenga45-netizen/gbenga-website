import { MARQUEE } from "../data";

export default function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee-host relative z-[4] -my-4 select-none overflow-hidden py-4">
      <div className="-rotate-[1.6deg] scale-[1.04] border-y border-signal/25 bg-[#080d16] py-4 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.9)]">
        <div className="mask-x">
          <div className="marquee-track">
            {row.map((item, i) => (
              <span
                key={i}
                className="display flex flex-none items-center gap-6 pr-6 text-[0.95rem] uppercase tracking-[0.04em] text-white/85 md:text-[1.05rem]"
              >
                {item}
                <span className="h-1.5 w-1.5 rotate-45 bg-signal" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
