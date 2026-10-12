import { useState } from "react";
import { Icon } from "./Icons";

export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`relative grid flex-none place-items-center overflow-hidden rounded-[11px] bg-gradient-to-br from-signal to-signaldeep shadow-[0_6px_18px_-6px_var(--signal)] ${className}`}
    >
      {!failed ? (
        <img
          src="/images/logo.png"
          alt=""
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="display text-[17px] font-bold leading-none text-onsignal">G</span>
      )}
    </span>
  );
}

export function ProjectPreview({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`grid h-full w-full place-items-center bg-surface2 ${className}`}>
        <div className="px-6 text-center">
          <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl border border-signal/20 bg-signal/10 text-signal">
            <Icon name="briefcase" size={19} />
          </span>
          <p className="display mt-3 text-[1rem] text-ink">{alt}</p>
          <p className="mono mt-1 text-[9.5px] uppercase tracking-[0.14em] text-steel">
            Project preview coming soon
          </p>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}

export function PortraitImage({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`grid h-full w-full place-items-center bg-surface2 ${className}`}>
        <div className="text-center">
          <BrandMark className="mx-auto h-16 w-16 rounded-2xl" />
          <p className="display mt-4 text-[1.1rem] text-white">GbengaDevs</p>
          <p className="mono mt-1 text-[9.5px] uppercase tracking-[0.16em] text-white/50">
            Web &amp; App Developer
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/gbenga.png"
      alt="GbengaDevs — Web and App Developer"
      loading="eager"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function ClientLogo({
  src,
  initials,
  alt,
  className = "h-11 w-11",
}: {
  src: string;
  initials: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`display relative grid flex-none place-items-center overflow-hidden rounded-full bg-gradient-to-br from-signal/25 to-signal/5 text-[12px] font-bold text-signal ring-1 ring-signal/20 ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full bg-white object-contain p-1"
          onError={() => setFailed(true)}
        />
      ) : (
        initials
      )}
    </span>
  );
}