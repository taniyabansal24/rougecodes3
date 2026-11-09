import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { SITE } from "../../data/site";

export default function FinalCTA({
  title = "Have an idea? Let’s build something meaningful.",
  lead = "Whether you’re starting with an idea or ready to scale an existing product, let’s discuss what we can create together.",
  gap = false,
}) {
  return (
    <section className={`pb-[var(--section-y)] ${gap ? "pt-[calc(var(--section-y)*0.6)]" : "pt-2"}`} aria-labelledby="cta-title">
      <div className="container-x">
        <Reveal className="on-dark relative isolate overflow-hidden rounded-[var(--radius-xl)] bg-ink-950 px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_90%_at_85%_0%,#000,transparent)]" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="animate-drift pointer-events-none absolute -right-24 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(108,189,74,0.22),transparent)]"
          />

          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Start a project</p>
              <h2 id="cta-title" className="t-h2 mt-5 max-w-3xl">
                {title}
              </h2>
              <p className="t-lead mt-5 max-w-2xl text-ink-300">{lead}</p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
              <Button to="/contact" variant="accent" arrow className="w-full sm:w-auto">
                Start a project
              </Button>
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2.5 text-[0.95rem] text-ink-300 hover:text-white"
              >
                <Icon name="mail" size={18} className="text-green-400" />
                <span className="link-u">{SITE.email}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
