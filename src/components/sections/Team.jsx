import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { TEAM } from "../../data/site";

export function TeamCard({ member, delay = 0 }) {
  return (
    <Reveal as="li" delay={delay} className="group">
      <figure>
        <div className="relative aspect-[4/4.4] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-sage-100">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_top,transparent,#000)]" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute inset-x-[10%] bottom-0 h-3/4 rounded-t-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.75),transparent)]"
          />
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            width="800"
            height="900"
            loading="lazy"
            decoding="async"
            className={`absolute bottom-0 w-auto max-w-none object-contain object-bottom ${
              member.imageAlign === "left" ? "left-0 h-[96%]" : "left-1/2 h-[92%] -translate-x-1/2"
            } transition-transform duration-700 ease-[var(--ease-smooth)] group-hover:scale-[1.025]`}
            style={{ transformOrigin: "50% 100%" }}
          />
        </div>
        <figcaption className="mt-5">
          <p className="text-[1.2rem] font-semibold tracking-[-0.02em]">{member.name}</p>
          <p className="t-label mt-2 text-green-700">{member.role}</p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-500">{member.bio}</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function Team({ eyebrow = "The team", title = "The people behind the work.", lead, action }) {
  return (
    <section className="section" aria-labelledby="team-title">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow={eyebrow}
            title={<span id="team-title">{title}</span>}
            lead={
              lead ??
              "RougeCodes is led by its founders, who stay close to the engineering and the people we build for."
            }
          />
          {action && <Reveal className="mt-8">{action}</Reveal>}
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
          {TEAM.map((m, i) => (
            <TeamCard key={m.name} member={m} delay={i * 100} />
          ))}
        </ul>
      </div>
    </section>
  );
}
