import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import { Icon } from "./Icons";
import { ProjectPreview } from "./Media";
import { Reveal, Section, SectionHead, Tilt, spotlightHandlers } from "./ui";

function Card({ p, featured }: { p: (typeof PROJECTS)[number]; featured?: boolean }) {
  return (
    <Tilt max={featured ? 3.5 : 5} className="h-full">
      <article
        {...spotlightHandlers()}
        className={`spot-card glass group flex h-full flex-col overflow-hidden rounded-[22px] transition-shadow duration-500 hover:shadow-lift ${
          featured ? "md:flex-row" : ""
        }`}
      >
        {/* thumb */}
        <div
          className={`relative overflow-hidden bg-surface2 ${
            featured ? "md:w-[56%]" : ""
          }`}
        >
          <div className={`relative ${featured ? "aspect-[16/10] md:h-full md:aspect-auto" : "aspect-[16/10]"}`}>
            <ProjectPreview
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover object-top transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12]/70 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-signal/25 to-transparent" />

            <span className="mono absolute left-3.5 top-3.5 rounded-full border border-white/12 bg-black/55 px-2.5 py-1 text-[9.5px] uppercase tracking-[0.14em] text-white/85 backdrop-blur-md">
              {p.tag}
            </span>
          </div>
        </div>

        {/* body */}
        <div className={`flex flex-1 flex-col p-6 ${featured ? "md:justify-center md:p-8" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <h3 className={`display text-ink ${featured ? "text-[1.75rem]" : "text-[1.3rem]"}`}>{p.title}</h3>
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-line text-steel">
              <Icon name="external" size={14} />
            </span>
          </div>

          <p className={`mt-3 leading-relaxed text-steel ${featured ? "text-[0.98rem] max-w-md" : "text-[0.9rem]"}`}>
            {p.desc}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-dashed border-line pt-5">
            <span className="mono flex items-center gap-2 text-[10.5px] uppercase tracking-[0.12em] text-steel">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Live website link coming soon
            </span>
          </div>
        </div>
      </article>
    </Tilt>
  );
}

export default function Work() {
  const [hero, ...rest] = PROJECTS;
  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          label="Selected work"
          index="01"
          title={
            <>
              Websites built for
              <br />
              real businesses.
            </>
          }
          sub="Four business websites across fashion, hairdressing, barbing and food. Live links and full project details will be added to each slot next."
        />
        <Reveal delay={0.14}>
          <a href="#contact" className="btn btn-ghost">
            Have something in mind? <Icon name="arrowRight" size={15} />
          </a>
        </Reveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-70px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-12 grid gap-5 md:mt-16"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <Card p={hero} featured />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((p) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Card p={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
