import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { NAV, SERVICES, SITE } from "../../data/site";

function FooterHeading({ children }) {
  return <h2 className="t-label mb-5 text-ink-400">{children}</h2>;
}

function FooterLink({ to, href, children }) {
  const cls =
    "link-u inline-block py-1 text-[0.95rem] text-ink-300 transition-colors duration-200 hover:text-white";
  return (
    <li>
      {to ? (
        <Link to={to} className={cls}>
          {children}
        </Link>
      ) : (
        <a href={href} className={cls}>
          {children}
        </a>
      )}
    </li>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(108,189,74,0.12),transparent)]"
      />

      <Reveal className="container-x relative pt-20 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.975rem] leading-relaxed text-ink-300">
              Industrial-grade digital engineering. We bridge the gap between abstract ideas and
              production-ready reality.
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--line-dark)] px-3 py-1.5 text-[0.85rem] text-ink-300">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-400 text-green-400" />
              Available for new projects
            </p>
            {SITE.socials.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {SITE.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="sm:col-span-1 lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul>
              {[...NAV, { to: "/contact", label: "Contact" }].map((n) => (
                <FooterLink key={n.to} to={n.to}>
                  {n.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul>
              {SERVICES.map((s) => (
                <FooterLink key={s.id} to={`/services#${s.id}`}>
                  {s.short}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-4 text-[0.95rem]">
              <li>
                <a href={`mailto:${SITE.email}`} className="group flex items-start gap-3 text-ink-300 hover:text-white">
                  <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-green-400" />
                  <span className="link-u">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="group flex items-start gap-3 text-ink-300 hover:text-white">
                  <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-green-400" />
                  <span className="link-u">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-ink-300 hover:text-white"
                >
                  <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-green-400" />
                  <span>
                    {SITE.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-[var(--line-dark)] py-8 text-[0.875rem] text-ink-400 sm:flex-row sm:items-center">
          <p>© {year} RougeCodes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="link-u hover:text-white">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 text-ink-300 hover:text-white"
            >
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line-dark-strong)] transition-[translate,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-white/40">
                <Icon name="arrowUp" size={14} />
              </span>
            </button>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
