import Seo from "../components/layout/Seo";
import PageHero from "../components/sections/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import { SITE, VALUES } from "../data/site";

const AREAS = [
  { icon: "web", title: "Web engineering", text: "Front-end and back-end development for web products and platforms." },
  { icon: "mobile", title: "Mobile engineering", text: "Cross-platform apps for iOS and Android, and the APIs behind them." },
  { icon: "embedded", title: "Embedded & IoT", text: "Firmware, sensors, connectivity and hardware prototyping." },
  { icon: "design", title: "Product & brand design", text: "UI/UX, research, prototyping and visual identity." },
];

const applyHref = `mailto:${SITE.email}?subject=${encodeURIComponent("Careers — Introduction")}&body=${encodeURIComponent(
  "Hi RougeCodes team,\n\nI'd like to introduce myself.\n\nArea of interest:\nPortfolio / GitHub / LinkedIn:\nA little about me:\n",
)}`;

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Build products that matter with RougeCodes. We’re always glad to hear from engineers and designers who care about craft."
      />
      <PageHero
        eyebrow="Careers"
        title="Build what’s next with us."
        lead="We’re always glad to hear from engineers and designers who care about craft, ownership and building products that genuinely work."
      />

      <section className="section border-t border-[var(--line)] bg-surface" aria-labelledby="roles-title">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Open applications</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="roles-title" className="t-h2 mt-5">
                No listed openings? Introduce yourself anyway.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-5 text-ink-500">
                We don’t have specific roles advertised here right now, but we’re always open to meeting
                talented people. Send us your portfolio, GitHub or CV and tell us what you’d love to work on.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={applyHref} arrow>
                Send an introduction
              </Button>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-[0.9rem] text-ink-500">
                Or email us directly at{" "}
                <a href={`mailto:${SITE.email}`} className="link-u text-ink-900">
                  {SITE.email}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-label text-ink-400">Areas we work in</p>
            </Reveal>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {AREAS.map((a, i) => (
                <Reveal as="li" key={a.title} delay={(i % 2) * 80} className="card card-glow p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
                    <Icon name={a.icon} />
                  </span>
                  <h3 className="mt-6 text-[1.125rem] font-semibold tracking-[-0.02em]">{a.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">{a.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="culture-title">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">How we work</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="culture-title" className="t-h2 mt-5">
                The values we hire for.
              </h2>
            </Reveal>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 70} className="bg-paper p-7">
                <span className="t-label text-green-700">0{i + 1}</span>
                <h3 className="mt-5 text-[1.2rem] font-semibold tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-500">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
