import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import Icon from "../ui/Icon";
import { Arrow } from "../ui/Button";
import { SERVICE_ART } from "../art/serviceArtMap";
import { CORE_SERVICES, SERVICES } from "../../data/site";

/*
 * Asymmetric bento: 7/5 on the first row, 4/4/4 on the second, with MVP
 * set on a dark surface as the entry point for founders.
 */
const LAYOUT = {
  web: "lg:col-span-7",
  mobile: "lg:col-span-5",
  iot: "lg:col-span-4",
  embedded: "lg:col-span-4",
  mvp: "md:col-span-2 lg:col-span-4",
};

function ServiceCard({ service, delay }) {
  const Art = SERVICE_ART[service.id];
  const dark = service.id === "mvp";
  const wide = service.id === "web";

  return (
    <Reveal delay={delay} className={LAYOUT[service.id]}>
      <Link
        to={`/services#${service.id}`}
        className={`group card card-interactive card-glow flex h-full flex-col overflow-hidden p-6 sm:p-7 ${
          dark ? "on-dark !border-transparent !bg-ink-900 text-white" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <span className={`t-label ${dark ? "text-ink-300" : "text-ink-400"}`}>{service.index}</span>
          <span
            className={`grid h-10 w-10 place-items-center rounded-full border transition-[background-color,border-color,color,rotate] duration-300 group-hover:-rotate-45 ${
              dark
                ? "border-[var(--line-dark-strong)] text-white group-hover:border-green-400 group-hover:bg-green-400 group-hover:text-ink-950"
                : "border-[var(--line-strong)] text-ink-700 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white"
            }`}
            aria-hidden="true"
          >
            <Icon name="arrowRight" size={16} />
          </span>
        </div>

        <div
          className={`mx-auto my-6 w-full sm:my-8 ${wide ? "max-w-[15rem] sm:max-w-[22rem]" : "max-w-[13rem] sm:max-w-[17rem]"} ${
            dark ? "text-white/45" : "text-ink-350"
          }`}
        >
          <Art />
        </div>

        <div className="mt-auto">
          <h3 className="t-h3">{service.title}</h3>
          <p className={`mt-3 text-[0.975rem] leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>
            {service.summary}
          </p>
          <span
            className={`mt-5 inline-flex items-center gap-2 text-[0.925rem] font-medium ${
              dark ? "text-green-400" : "text-ink-900"
            }`}
          >
            Learn more <Arrow />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ServicesBento() {
  const supporting = SERVICES.slice(5);

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title={
            <span id="services-title">
              From circuit board to cloud, <span className="text-ink-400">engineered end to end.</span>
            </span>
          }
          lead="Five core disciplines, one team. We cover every layer of a modern product, so nothing gets lost between hardware, software and design."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {CORE_SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={(i % 3) * 70} />
          ))}
        </div>

        <Reveal className="mt-5 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-dashed border-[var(--line-strong)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.95rem] text-ink-500">
            <span className="font-medium text-ink-900">Also on the team:</span>{" "}
            {supporting.map((s, i) => (
              <span key={s.id}>
                <Link to={`/services#${s.id}`} className="link-u text-ink-700 hover:text-ink-900">
                  {s.short}
                </Link>
                {i < supporting.length - 1 && " and "}
              </span>
            ))}
            .
          </p>
          <Link to="/services" className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-medium">
            All services <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
