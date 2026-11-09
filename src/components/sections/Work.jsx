import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import Button, { Arrow } from "../ui/Button";
import { PROJECTS } from "../../data/site";

function ProjectImage({ project, sizes, eager = false }) {
  return (
    <div
      className={`relative aspect-[512/445] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] ${
        project.tone === "dark" ? "bg-[#222]" : "bg-[#efebe6]"
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        width="512"
        height="445"
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-smooth)] group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="glass absolute bottom-4 left-4 inline-flex translate-y-2 items-center gap-2 rounded-full px-3.5 py-2 text-[0.85rem] font-medium text-ink-900 opacity-0 transition-[opacity,translate] duration-400 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        View project <Arrow />
      </span>
    </div>
  );
}

/** Compact card used on the home page. */
export function ProjectCard({ project, className = "", delay = 0 }) {
  return (
    <Reveal delay={delay} className={className}>
      <Link to={`/work#${project.slug}`} className="group block rounded-[var(--radius-lg)]">
        <ProjectImage project={project} sizes="(min-width: 1024px) 600px, 100vw" />
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="t-label text-ink-400">
              {project.industry} · {project.services.join(", ")}
            </p>
            <h3 className="t-h3 mt-3 transition-colors duration-300 group-hover:text-green-700">
              {project.title}
            </h3>
            <p className="mt-2 max-w-md text-[0.975rem] leading-relaxed text-ink-500">{project.summary}</p>
          </div>
          <span
            aria-hidden="true"
            className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] transition-[background-color,color,border-color] duration-300 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white"
          >
            <Arrow up />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/** Home page showcase — asymmetric two-up with the second card offset. */
export function WorkShowcase() {
  return (
    <section className="section border-t border-[var(--line)] bg-surface" aria-labelledby="work-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected work"
          title={<span id="work-title">Products and brands we’ve helped build.</span>}
          action={
            <Button to="/work" variant="secondary" arrow>
              View all work
            </Button>
          }
        />
        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-8 lg:gap-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 90} className={i % 2 === 1 ? "md:mt-24" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Full editorial feature used on the Work page. */
export function ProjectFeature({ project, index }) {
  const flip = index % 2 === 1;
  return (
    <article id={project.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14" aria-labelledby={`${project.slug}-title`}>
      <Reveal className={`group lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <ProjectImage project={project} sizes="(min-width: 1024px) 720px, 100vw" eager={index === 0} />
      </Reveal>
      <Reveal delay={100} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="t-label text-ink-400">
          {String(index + 1).padStart(2, "0")} — {project.industry}
        </p>
        <h2 id={`${project.slug}-title`} className="t-h2 mt-4">
          {project.title}
        </h2>
        <p className="t-lead mt-5 text-ink-500">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-[var(--line)] pt-6 sm:grid-cols-2">
          <div>
            <dt className="t-label text-ink-400">Services</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="t-label text-ink-400">What we delivered</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 text-[0.95rem] text-ink-700">
                {project.delivered.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-green-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-9">
          <Button to={`/contact?service=design`} variant="secondary" arrow>
            Start a similar project
          </Button>
        </div>
      </Reveal>
    </article>
  );
}
