import type { SVGProps } from "react";

const P: Record<string, React.ReactNode> = {
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  arrowLeft: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
  arrowDown: <><path d="M12 5v14" /><path d="m18 13-6 6-6-6" /></>,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  menu: <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>,
  x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 7 9 6 9-6" /></>,
  send: <><path d="M21.5 2.5 11 13" /><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z" /></>,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2.5" /><path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H5.5A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  compass: <><circle cx="12" cy="12" r="9.5" /><path d="m15.8 8.2-2 5.6-5.6 2 2-5.6Z" /></>,
  code: <><path d="m8.5 8-5 4 5 4" /><path d="m15.5 8 5 4-5 4" /><path d="m13.8 4.5-3.6 15" /></>,
  gauge: <><path d="M20.5 16a9 9 0 1 0-17 0" /><path d="m14.5 10.5-3 4" /><circle cx="12" cy="16" r="1.6" /></>,
  chat: <><path d="M21 11.5a8 8 0 0 1-11.6 7.1L3 20.5l1.9-6.4A8 8 0 1 1 21 11.5Z" /></>,
  layers: <><path d="m12 2.8 9 5.2-9 5.2-9-5.2Z" /><path d="m3 13 9 5.2L21 13" /><path d="m3 17.4 9 5.2 9-5.2" /></>,
  rocket: <><path d="M5 15c-1.5 1.5-2 6-2 6s4.5-.5 6-2c.9-.9.9-2.4 0-3.3a2.3 2.3 0 0 0-4 0Z" /><path d="M14.5 12.5 18 9a6.4 6.4 0 0 0 1.9-5.9A6.4 6.4 0 0 0 14 5l-3.5 3.5" /><path d="M9 12 5.5 8.5l3-1 3 1" /><path d="m12 15 3.5 3.5 1-3-1-3" /></>,
  bolt: <path d="M13.5 2 4 13.5h6.5L10 22l9.5-11.5H13Z" />,
  sparkle: <><path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9Z" /><path d="M19 3v3M20.5 4.5h-3" /></>,
  infinity: <path d="M7.5 15.5a3.5 3.5 0 1 1 0-7c3.5 0 5.5 7 9 7a3.5 3.5 0 1 0 0-7c-3.5 0-5.5 7-9 7Z" />,
  star: <path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.6l6.5-.9Z" />,
  home: <><path d="m3 10 9-7 9 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20Z" /><path d="M9.5 21.5v-8h5v8" /></>,
  briefcase: <><rect x="2.5" y="7.5" width="19" height="13" rx="2.5" /><path d="M8.5 7.5v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
  tag: <><path d="M3 12.5V4.5A1.5 1.5 0 0 1 4.5 3h8l8.5 8.5-9.5 9.5Z" /><circle cx="8" cy="8" r="1.4" /></>,
  clock: <><circle cx="12" cy="12" r="9.5" /><path d="M12 6.5V12l3.5 2.5" /></>,
  mapPin: <><path d="M20 10.5c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10.5" r="2.8" /></>,
  shield: <><path d="M12 2.5 20 6v6c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5V6Z" /><path d="m9 12 2 2 4-4" /></>,
  github: <path d="M9 19.5c-4.5 1.4-4.5-2.3-6.4-2.8m12.8 5.3v-3.6c0-1 .1-1.5-.5-2.1 2.8-.3 5.6-1.4 5.6-6.1a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1.1-.3-3.6 1.4a12.2 12.2 0 0 0-6.4 0C6.6 3.2 5.5 3.5 5.5 3.5a4.4 4.4 0 0 0-.1 3.3A4.7 4.7 0 0 0 4 10.2c0 4.6 2.8 5.7 5.6 6.1-.4.4-.5.9-.5 1.5v4.2" />,
  linkedin: <><rect x="2.5" y="2.5" width="19" height="19" rx="3" /><path d="M7 10.5v7M7 7.2v.1M11.5 17.5v-7M11.5 13.2c0-1.5 1-2.7 2.6-2.7s2.4 1.2 2.4 2.7v4.3" /></>,
  twitter: <path d="M3 3h4.5l5 6.8L18.5 3H21l-7.2 8.3L21.5 21H17l-5.3-7.2L5.2 21H3l7.7-8.9Z" />,
  whatsapp: <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 20l-5 1Zm6-11.3c0 3.2 3.1 6.3 6.3 6.3.6 0 1.6-.6 1.7-1.3.1-.5-1.7-1.4-2-1.3-.4.1-.7 1-1 1-.8 0-3.1-2.3-3.1-3.1 0-.3.9-.6 1-1 .1-.3-.8-2.1-1.3-2-.7.1-1.6 1-1.6 1.7Z" />,
  external: <><path d="M14 4h6v6" /><path d="M20 4 11 13" /><path d="M18 14.5v4A2.5 2.5 0 0 1 15.5 21h-10A2.5 2.5 0 0 1 3 18.5v-10A2.5 2.5 0 0 1 5.5 6h4" /></>,
  quote: <path d="M9.5 5.5C6.5 7 5 9.5 5 13v5.5h6V13H8c0-2.3.8-4 2.8-5Zm9 0C15.5 7 14 9.5 14 13v5.5h6V13h-3c0-2.3.8-4 2.8-5Z" />,
};

export type IconName = keyof typeof P;

export function Icon({
  name,
  size = 20,
  ...rest
}: { name: IconName | string; size?: number } & SVGProps<SVGSVGElement>) {
  const filled = name === "star" || name === "whatsapp" || name === "quote" || name === "bolt";
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {P[name] ?? null}
    </svg>
  );
}
