/**
 * Shared hero for inner pages: eyebrow → H1 → lead, with an optional aside.
 * Uses the same entrance motion as the home hero for continuity.
 */
export default function PageHero({ eyebrow, title, lead, aside, children }) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-[calc(var(--header-h)+56px)] md:pb-20 lg:pt-[calc(var(--header-h)+88px)]">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -right-[20%] -top-[30%] -z-10 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgba(63,149,38,0.08),transparent_70%)]"
      />
      <div className="container-x">
        <div className={`grid gap-10 ${aside ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={aside ? "lg:col-span-8" : "max-w-4xl"}>
            <p className="eyebrow enter">{eyebrow}</p>
            <h1 className="t-h1 mt-6">
              <span className="line-mask">
                <span style={{ "--d": "90ms" }}>{title}</span>
              </span>
            </h1>
            {lead && (
              <p className="t-lead enter mt-6 max-w-2xl text-ink-500" style={{ "--d": "260ms" }}>
                {lead}
              </p>
            )}
          </div>
          {aside && (
            <div className="enter lg:col-span-4" style={{ "--d": "380ms" }}>
              {aside}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
