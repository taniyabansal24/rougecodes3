import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { REASONS } from "../../data/site";

export default function WhyUs() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
            <Reveal>
              <p className="eyebrow">Why RougeCodes</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="why-title" className="t-h2 mt-5">
                A partner that thinks in products, not tickets.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-5 text-ink-500">
                We combine product strategy, design and engineering — across hardware and software —
                so your idea gets built properly the first time.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-8">
              <Button to="/about" variant="secondary" arrow>
                How we think
              </Button>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:col-span-8">
          {REASONS.map((r, i) => (
            <Reveal as="li" key={r.title} delay={(i % 2) * 80} className="group bg-paper p-7 transition-colors duration-300 hover:bg-surface sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] border border-[var(--line)] bg-surface text-green-600 transition-[translate,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-green-500/40">
                <Icon name={r.icon} size={20} />
              </span>
              <h3 className="mt-6 text-[1.125rem] font-semibold tracking-[-0.02em]">{r.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-500">{r.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
