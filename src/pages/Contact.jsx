import Seo from "../components/layout/Seo";
import ContactForm from "../components/sections/ContactForm";
import Icon from "../components/ui/Icon";
import { SITE } from "../data/site";

const NEXT = [
  "We review your message and the problem you’re solving.",
  "We set up a call to understand your goals, users and constraints.",
  "We recommend an approach and next steps for your project.",
];

function ContactItem({ icon, label, href, external, children }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-start gap-4 rounded-[var(--radius-md)] py-1"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-md)] border border-[var(--line)] bg-surface text-green-600 transition-[border-color,translate] duration-300 group-hover:-translate-y-0.5 group-hover:border-green-500/40">
          <Icon name={icon} size={19} />
        </span>
        <span>
          <span className="t-label block text-ink-400">{label}</span>
          <span className="link-u mt-1.5 inline-block text-[1.02rem] text-ink-900">{children}</span>
          {external && <span className="sr-only"> (opens in a new tab)</span>}
        </span>
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Tell RougeCodes about your project. Email contact@rougecodes.com, call +91 92173 27326, or send us your project details."
      />
      <section className="relative isolate overflow-hidden pb-[var(--section-y)] pt-[calc(var(--header-h)+56px)] lg:pt-[calc(var(--header-h)+88px)]">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -left-[20%] -top-[30%] -z-10 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgba(63,149,38,0.08),transparent_70%)]"
        />
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow enter">Contact</p>
            <h1 className="t-h1 mt-6">
              <span className="line-mask">
                <span style={{ "--d": "90ms" }}>Have an idea? Let’s build it.</span>
              </span>
            </h1>
            <p className="t-lead enter mt-6 max-w-lg text-ink-500" style={{ "--d": "260ms" }}>
              Whether you’re starting with an idea or ready to scale an existing product, tell us what
              you’re working on and let’s discuss what we can create together.
            </p>

            <ul className="enter mt-10 space-y-5" style={{ "--d": "360ms" }}>
              <ContactItem icon="mail" label="Email" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </ContactItem>
              <ContactItem icon="phone" label="Phone" href={SITE.phoneHref}>
                {SITE.phone}
              </ContactItem>
              <ContactItem icon="pin" label="Office" href={SITE.address.mapsHref} external>
                {SITE.address.lines.join(", ")}
              </ContactItem>
            </ul>

            <div className="enter mt-12 border-t border-[var(--line)] pt-8" style={{ "--d": "460ms" }}>
              <h2 className="t-label text-ink-400">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {NEXT.map((n, i) => (
                  <li key={n} className="flex gap-4 text-[0.975rem] text-ink-600">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] font-mono text-[0.72rem] text-ink-500">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{n}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="enter-visual lg:col-span-7" style={{ "--d": "300ms" }}>
            <h2 className="sr-only">Project enquiry form</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
