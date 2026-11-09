import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { PROCESS } from "../../data/site";

/**
 * Five-stage process. Horizontal timeline on desktop, vertical on mobile.
 * Connecting lines draw in as the section enters the viewport.
 */
export default function Process({ tone = "dark", eyebrow = "How we work" }) {
  const dark = tone === "dark";

  return (
    <section
      className={`section relative overflow-hidden ${dark ? "on-dark bg-ink-950 text-white" : ""}`}
      aria-labelledby="process-title"
    >
      {dark && (
        <>
          <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(108,189,74,0.10),transparent)]"
          />
        </>
      )}

      <div className="container-x relative">
        <SectionHeader
          eyebrow={eyebrow}
          title={<span id="process-title">A clear path from idea to launch.</span>}
          lead="A structured, collaborative process that keeps you close to the work — with clear milestones and regular check-ins at every stage."
        />

        <Reveal as="ol" variant="scope" className="relative mt-16 grid gap-0 lg:mt-20 lg:grid-cols-5 lg:gap-6">
          {/* Desktop connector */}
          <span
            aria-hidden="true"
            className={`draw-x absolute left-0 right-0 top-[19px] hidden h-px lg:block ${
              dark ? "bg-gradient-to-r from-green-400/70 via-white/15 to-white/5" : "bg-gradient-to-r from-green-500/70 via-ink-900/15 to-ink-900/5"
            }`}
          />
          {PROCESS.map((step, i) => (
            <li key={step.index} className="relative pb-10 pl-14 last:pb-0 lg:pb-0 lg:pl-0">
              {/* Mobile connector */}
              {i < PROCESS.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`draw-y absolute bottom-0 left-[19px] top-10 w-px lg:hidden ${dark ? "bg-white/15" : "bg-ink-900/15"}`}
                />
              )}
              <Reveal
                as="span"
                delay={i * 90}
                  className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border font-mono text-[0.78rem] lg:relative ${
                    i === 0
                      ? dark
                        ? "border-green-400 bg-green-400 text-ink-950"
                        : "border-green-500 bg-green-500 text-white"
                      : dark
                        ? "border-[var(--line-dark-strong)] bg-ink-950 text-ink-300"
                        : "border-[var(--line-strong)] bg-paper text-ink-600"
                  }`}
                >
                  {step.index}
              </Reveal>
              <Reveal delay={i * 90 + 40}>
                <h3 className="t-h3 pt-1.5 lg:mt-7 lg:pt-0">{step.title}</h3>
                <p className={`mt-3 text-[0.95rem] leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
