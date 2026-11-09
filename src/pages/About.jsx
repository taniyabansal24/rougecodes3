import Seo from "../components/layout/Seo";
import PageHero from "../components/sections/PageHero";
import Process from "../components/sections/Process";
import Team from "../components/sections/Team";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { VALUES } from "../data/site";

const PILLARS = [
  {
    icon: "compass",
    title: "Understand",
    text: "Every engagement starts with the problem, the people and the business behind it.",
  },
  {
    icon: "pen",
    title: "Shape",
    text: "We design the product and its architecture together, so ambition and feasibility stay aligned.",
  },
  {
    icon: "layers",
    title: "Engineer",
    text: "We build across firmware, cloud, web and mobile — production-ready, not just demo-ready.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="RougeCodes is a product engineering studio that bridges the gap between abstract ideas and production-ready reality — across software, hardware and design."
      />
      <PageHero
        eyebrow="About RougeCodes"
        title="We turn ideas into products that work in the real world."
        lead="We’re a collective of designers, developers and strategists dedicated to creating meaningful digital experiences — and the engineering that makes them dependable."
      />

      {/* Story — editorial split */}
      <section className="section border-t border-[var(--line)] bg-surface" aria-labelledby="story-title">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Our story</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="story-title" className="t-h2 mt-5">
                Industrial-grade engineering, with a product mindset.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 text-[1.075rem] leading-[1.7] text-ink-600 lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <p>
                RougeCodes exists to bridge the gap between abstract ideas and production-ready reality.
                Too many good ideas stall between a pitch deck and a working product — lost in handovers
                between designers, software engineers and hardware specialists.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                We bring those disciplines together. Web and mobile applications, IoT products and
                embedded systems are planned and built by one team, so the experience on the screen and
                the engineering underneath are designed as a single system.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="font-medium text-ink-900">
                Your success is our priority: we’re dedicated to helping you reach your goals with a
                simple, collaborative experience from first conversation to launch — and beyond.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="container-x mt-16 lg:mt-24">
          <ul className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="bg-surface p-8">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
                    <Icon name={p.icon} />
                  </span>
                  <span className="t-label text-ink-400">0{i + 1}</span>
                </div>
                <h3 className="t-h3 mt-8">{p.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-500">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values-title">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Our values</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="values-title" className="t-h2 mt-5">
                What drives us forward.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-5 text-ink-500">
                Our values shape our culture, guide our decisions and define how we work with you.
              </p>
            </Reveal>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 80} className="border-t border-[var(--line-strong)] py-7">
                <dt className="flex items-baseline gap-4">
                  <span className="t-label text-green-700">0{i + 1}</span>
                  <span className="text-[1.35rem] font-semibold tracking-[-0.025em]">{v.title}</span>
                </dt>
                <dd className="mt-3 pl-9 text-[0.975rem] leading-relaxed text-ink-500">{v.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <Process eyebrow="Our process" />
      <Team />
      <FAQ />
      <FinalCTA />
    </>
  );
}
