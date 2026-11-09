import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo";
import PageHero from "../components/sections/PageHero";
import Process from "../components/sections/Process";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import Button, { Arrow } from "../components/ui/Button";
import { SERVICE_ART } from "../components/art/serviceArtMap";
import { SERVICES } from "../data/site";

function ServiceRow({ service }) {
  const Art = SERVICE_ART[service.id];
  return (
    <article
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className="grid gap-8 border-t border-[var(--line-strong)] py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
    >
      <Reveal className="lg:col-span-4">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] border border-[var(--line)] bg-surface text-green-600">
            <Icon name={service.id} size={22} />
          </span>
          <span className="t-label text-ink-400">{service.index} / 07</span>
        </div>
        <h2 id={`${service.id}-title`} className="mt-6 text-[clamp(1.6rem,1.3rem+1vw,2.1rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
          {service.title}
        </h2>
        {Art && (
          <div className="mt-8 hidden max-w-[15rem] text-ink-300 lg:block" aria-hidden="true">
            <Art />
          </div>
        )}
      </Reveal>

      <Reveal delay={80} className="lg:col-span-5">
        <p className="t-lead text-ink-800">{service.summary}</p>
        <p className="mt-4 leading-relaxed text-ink-500">{service.value}</p>
        <h3 className="t-label mt-8 text-ink-400">What’s included</h3>
        <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 text-[0.975rem] text-ink-700">
              <Icon name="check" size={18} className="mt-0.5 shrink-0 text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={140} className="flex flex-col gap-6 lg:col-span-3 lg:items-end lg:text-right">
        {service.stack && (
          <div>
            <h3 className="t-label text-ink-400">Technologies</h3>
            <ul className="mt-4 flex flex-wrap gap-2 lg:justify-end">
              {service.stack.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Button to={`/contact?service=${service.id}`} variant="secondary" arrow className="lg:mt-auto">
          Discuss this service
        </Button>
      </Reveal>
    </article>
  );
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Web and mobile application development, IoT product design and prototyping, embedded systems, MVP development, UI/UX and brand design, and AI integrations."
      />
      <PageHero
        eyebrow="Services"
        title="Everything it takes to build a modern product."
        lead="End-to-end engineering across software and hardware — with the strategy and design that make it worth using."
        aside={
          <nav aria-label="Services on this page" className="card p-5">
            <p className="t-label mb-3 text-ink-400">Jump to</p>
            <ul className="divide-y divide-[var(--line)]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`#${s.id}`} className="group flex items-center justify-between gap-4 py-2.5 text-[0.95rem] text-ink-700 hover:text-ink-900">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[0.72rem] text-ink-400">{s.index}</span>
                      {s.short}
                    </span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      <section className="pb-[var(--section-y)]" aria-label="Service details">
        <div className="container-x">
          {SERVICES.map((s) => (
            <ServiceRow key={s.id} service={s} />
          ))}
        </div>
      </section>

      <Process />
      <FAQ />
      <FinalCTA
        title="Not sure which service you need?"
        lead="Tell us what you’re trying to achieve. We’ll help you scope the right approach — whether that’s a quick prototype or a full product build."
      />
    </>
  );
}
