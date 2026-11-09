import Button from "../ui/Button";
import HeroVisual from "../art/HeroVisual";

const HEADLINE = [
  { text: "Turning" },
  { text: "complex" },
  { text: "ideas" },
  { text: "into" },
  { text: "products", accent: true },
  { text: "that", accent: true },
  { text: "work.", accent: true },
];

const CAPABILITIES = ["Web apps", "Mobile apps", "IoT products", "Embedded systems", "MVPs"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-6 pt-[calc(var(--header-h)+48px)] md:pb-10 lg:pb-12 lg:pt-[calc(var(--header-h)+72px)]">
      {/* Background: faint grid + very slow ambient light */}
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -right-[15%] -top-[20%] -z-10 h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(63,149,38,0.10),transparent_70%)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-16">
        <div>
          <p className="eyebrow enter" style={{ "--d": "0ms" }}>
            Product engineering studio · New Delhi
          </p>

          <h1 className="mt-6 text-[clamp(2.65rem,1.2rem+4.7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            {HEADLINE.map((w, i) => (
              <span key={i}>
                <span className="word-mask">
                  <span
                    style={{ "--d": `${120 + i * 55}ms` }}
                    className={w.accent ? "text-green-600" : undefined}
                  >
                    {w.text}
                  </span>
                </span>
                {i < HEADLINE.length - 1 && " "}
              </span>
            ))}
          </h1>

          <p className="t-lead enter mt-7 max-w-[36rem] text-ink-500" style={{ "--d": "520ms" }}>
            RougeCodes designs and builds web and mobile applications, connected IoT devices and
            embedded systems — taking you from first prototype to a product people rely on.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="enter" style={{ "--d": "640ms" }}>
              <Button to="/services" arrow className="w-full sm:w-auto">
                Explore our services
              </Button>
            </span>
            <span className="enter" style={{ "--d": "720ms" }}>
              <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
                Let’s build something
              </Button>
            </span>
          </div>

          <div className="enter mt-12 border-t border-[var(--line)] pt-6" style={{ "--d": "860ms" }}>
            <p className="t-label text-ink-400">What we build</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Capabilities">
              {CAPABILITIES.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:-mr-6 xl:-mr-12">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
