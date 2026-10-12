import { CursorGlow, PageBackdrop, ScrollProgress } from "./components/Atmosphere";
import About from "./components/About";
import Contact from "./components/Contact";
import { Dock, WhatsAppFab } from "./components/Dock";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Marquee from "./components/Marquee";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import { useTheme } from "./hooks";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Intro />
      <ScrollProgress />
      <PageBackdrop />
      <CursorGlow />

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-onsignal"
      >
        Skip to content
      </a>

      <Header theme={theme} toggle={toggle} />

      <main className="relative">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <Dock />
      <WhatsAppFab />
    </div>
  );
}
