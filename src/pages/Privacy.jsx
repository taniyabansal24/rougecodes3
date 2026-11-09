import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo";
import PageHero from "../components/sections/PageHero";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    h: "What we collect",
    p: [
      "When you use our contact form we collect the details you choose to share: your name, email address, company name (optional), the service you’re interested in and your project details.",
      "If you email or call us directly, we receive the information included in that communication.",
    ],
  },
  {
    h: "How we use it",
    p: [
      "We use your details only to respond to your enquiry and, if we work together, to communicate about your project. We do not sell your personal information or use it for unrelated marketing.",
    ],
  },
  {
    h: "How form submissions are delivered",
    p: [
      "Contact form submissions are delivered to our inbox through a third-party form-delivery service (FormSubmit). The service processes the submission solely to forward it to us.",
    ],
  },
  {
    h: "Cookies and analytics",
    p: ["This website does not use advertising cookies or analytics trackers."],
  },
  {
    h: "Your choices",
    p: [
      `You can ask us to access, correct or delete the personal information you’ve shared with us at any time by emailing ${SITE.email}.`,
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="How RougeCodes handles the information you share with us through this website." />
      <PageHero eyebrow="Legal" title="Privacy policy." lead="How we handle the information you share with us through this website." />
      <section className="section border-t border-[var(--line)] bg-surface">
        <div className="container-x">
          <div className="mx-auto max-w-2xl space-y-12">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="t-h3">{s.h}</h2>
                {s.p.map((t) => (
                  <p key={t} className="mt-4 leading-[1.75] text-ink-600">
                    {t}
                  </p>
                ))}
              </div>
            ))}
            <div className="border-t border-[var(--line)] pt-8 text-ink-600">
              <p>
                Questions about this policy? Email{" "}
                <a href={`mailto:${SITE.email}`} className="link-u text-ink-900">
                  {SITE.email}
                </a>{" "}
                or <Link to="/contact" className="link-u text-ink-900">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
