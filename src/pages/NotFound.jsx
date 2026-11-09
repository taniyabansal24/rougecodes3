import Seo from "../components/layout/Seo";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden pt-[var(--header-h)]">
      <Seo title="Page not found" description="The page you’re looking for doesn’t exist." />
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div className="container-x py-24">
        <p className="eyebrow enter">Error 404</p>
        <h1 className="t-h1 enter mt-6 max-w-2xl" style={{ "--d": "80ms" }}>
          This page doesn’t exist.
        </h1>
        <p className="t-lead enter mt-5 max-w-lg text-ink-500" style={{ "--d": "160ms" }}>
          The link may be broken or the page may have moved. Let’s get you back on track.
        </p>
        <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "240ms" }}>
          <Button to="/" arrow>
            Back to home
          </Button>
          <Button to="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
