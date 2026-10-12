export const CONTACT = {
  name: "GbengaDevs",
  brand: "GbengaDevs",
  role: "Web & App Developer",
  location: "Nigeria",
  timezone: "WAT (GMT+1)",
  email: "connectgbengadevs@gmail.com",
  whatsapp: "https://wa.me/2347041663145",
  whatsappDisplay: "0704 166 3145",
  whatsappSecondaryDisplay: "0903770233",
};

export const NAV = [
  { id: "work", label: "Work", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "process", label: "Process", index: "03" },
  { id: "pricing", label: "Pricing", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export const ROTATING_WORDS = ["that convert.", "that scale.", "that load fast.", "that ship."];

export const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "Stripe",
  "Paystack",
];

export const SERVICES = [
  {
    title: "Design direction",
    body: "Interface systems, typography and motion decided on purpose — not by accident. Every screen earns its place.",
    icon: "compass" as const,
    accent: "signal" as const,
  },
  {
    title: "Engineering",
    body: "Typed, tested, component-driven front-ends wired to APIs that hold up under real traffic and real users.",
    icon: "code" as const,
    accent: "mint" as const,
  },
  {
    title: "Performance",
    body: "Sub-second loads, clean Core Web Vitals and SEO fundamentals baked in from the very first commit.",
    icon: "gauge" as const,
    accent: "blue" as const,
  },
];

export const TOOLKIT = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Stripe",
  "Paystack",
  "Vercel",
  "Figma",
  "Git",
];

export const PROCESS = [
  {
    num: "01",
    title: "Project conversation",
    body: "Send the idea through WhatsApp or email. We map the goal, audience and important requirements through messages, with all planning and feedback kept clearly in writing.",
    meta: "Day 0",
    icon: "chat" as const,
  },
  {
    num: "02",
    title: "Blueprint & direction",
    body: "Sitemap, user flows and a visual direction you sign off on before a single line of production code exists. No surprises later.",
    meta: "Days 1–4",
    icon: "layers" as const,
  },
  {
    num: "03",
    title: "Build in the open",
    body: "A live staging link from day one. You watch it come together, leave comments in context and steer it while it's still cheap to steer.",
    meta: "Weeks 1–3",
    icon: "code" as const,
  },
  {
    num: "04",
    title: "Launch & handover",
    body: "Performance pass, SEO, analytics, a recorded walkthrough and 30 days of post-launch support. You leave knowing how to drive it.",
    meta: "Launch week",
    icon: "rocket" as const,
  },
];

export const PROJECTS = [
  {
    title: "Dypamic Branding & Fashion",
    tag: "Tailor Website",
    desc: "A dedicated online presence for a fashion and tailoring brand.",
    image: "/images/dypamic.png",
    imagePosition: "center",
    href: "",
    featured: true,
  },
  {
    title: "Anuoluwa Hairline",
    tag: "Hairdressing Website",
    desc: "A polished website for a professional hairdressing business.",
    image: "/images/anuoluwa.png",
    imagePosition: "center",
    href: "",
    featured: false,
  },
  {
    title: "G-Expert Barbing",
    tag: "Barbing Website",
    desc: "A modern website made for a professional barber and grooming brand.",
    image: "/images/g-barbing.png",
    imagePosition: "center",
    href: "",
    featured: false,
  },
  {
    title: "G-Bites",
    tag: "Restaurant Website",
    desc: "A welcoming digital home for a food and restaurant business.",
    image: "/images/g-bites.png",
    imagePosition: "center",
    href: "",
    featured: false,
  },
];

export const PLANS = [
  {
    name: "Landing Page",
    icon: "bolt" as const,
    priceOnce: "₦350k",
    priceMonthly: "₦95k",
    blurb: "One page, engineered to sell.",
    duration: "1–2 weeks",
    features: [
      "Custom design direction",
      "Up to 6 sections, fully responsive",
      "Copy structure & CTA strategy",
      "Basic SEO + analytics setup",
      "2 rounds of revisions",
    ],
    popular: false,
  },
  {
    name: "Full Website",
    icon: "sparkle" as const,
    priceOnce: "₦850k",
    priceMonthly: "₦210k",
    blurb: "The complete brand presence.",
    duration: "3–5 weeks",
    features: [
      "Everything in Landing Page",
      "Up to 10 pages + CMS",
      "Blog / case-study system",
      "Advanced motion & interactions",
      "Performance & Core Web Vitals pass",
      "30 days post-launch support",
    ],
    popular: true,
  },
  {
    name: "Web App",
    icon: "layers" as const,
    priceOnce: "From ₦1.8m",
    priceMonthly: "From ₦420k",
    blurb: "Auth, data, dashboards, payments.",
    duration: "6–12 weeks",
    features: [
      "Product & architecture planning",
      "Auth, roles & permissions",
      "Database design + API layer",
      "Payments & third-party integrations",
      "Admin dashboard",
      "Deployment & CI pipeline",
    ],
    popular: false,
  },
  {
    name: "Retainer",
    icon: "infinity" as const,
    priceOnce: "₦450k / mo",
    priceMonthly: "₦450k",
    blurb: "Ongoing development when you need it.",
    duration: "Rolling monthly",
    features: [
      "40 hours of build time monthly",
      "Priority Slack / WhatsApp channel",
      "Ongoing features & iterations",
      "Uptime, updates & monitoring",
      "Monthly performance report",
      "Pause or cancel anytime",
    ],
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "GbengaDevs created our fashion website with a clear, modern look that presents our brand and tailoring services professionally.",
    name: "Dypamic",
    role: "Dypamic Branding & Fashion",
    initials: "DY",
    logo: "/images/dyp.png",
    tag: "Fashion",
  },
  {
    quote:
      "Our website gives Anuoluwa Hairline a polished online presence and makes it easier for people to understand the hair services we offer.",
    name: "Anuoluwa",
    role: "Anuoluwa Hairline",
    initials: "AN",
    logo: "/images/anu.png",
    tag: "Hairdressing",
  },
  {
    quote:
      "GbengaDevs gave G-Expert Barbing a clean website that fits the style of our grooming business and showcases our work clearly.",
    name: "G Barber",
    role: "G-Expert Barbing",
    initials: "GB",
    logo: "/images/barber.png",
    tag: "Barbing",
  },
  {
    quote:
      "The G-Bites website feels warm, simple and true to our food brand. Customers can quickly see what we offer and connect with us.",
    name: "G-Bites",
    role: "G-Bites Restaurant",
    initials: "GB",
    logo: "/images/bites.png",
    tag: "Restaurant",
  },
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "A landing page usually takes 1–2 weeks, while a larger business website may take 3–5 weeks. The final timeline depends on the pages, features and content required, and I confirm it before work starts.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. The project can be handled remotely through WhatsApp and email, with regular written updates and preview links so you can follow the progress from anywhere.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your goal, your audience, and whatever brand assets already exist — logo, colours, copy, references you like. If none of that exists yet, that's fine: the blueprint phase is designed to create it with you.",
  },
  {
    q: "Who owns the code and design?",
    a: "You do, completely, from the moment the final invoice clears. You get the repository, the design files, the deployment, and the credentials. No lock-in, no hostage situations, no monthly fee just to keep your own site online.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of support for bugs and small tweaks, plus a recorded walkthrough of how to update content yourself. After that you can leave it be, come back per-project, or move onto a monthly retainer.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes, and I do it often. I'll start with a paid audit — performance, security, architecture and technical debt — then give you an honest recommendation on whether to refactor or rebuild. Sometimes the honest answer is 'leave it alone'.",
  },
];
