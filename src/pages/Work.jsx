import Seo from "../components/layout/Seo";
import PageHero from "../components/sections/PageHero";
import { ProjectFeature } from "../components/sections/Work";
import FinalCTA from "../components/sections/FinalCTA";
import { PROJECTS } from "../data/site";

export default function Work() {
  return (
    <>
      <Seo
        title="Our Work"
        description="Selected RougeCodes projects, including brand and website work for Trusty Money and CafeFlow."
      />
      <PageHero
        eyebrow="Our work"
        title="Selected projects."
        lead="A look at some of the products and brands we’ve helped build — from fintech infrastructure to restaurant technology."
      />
      <section className="section border-t border-[var(--line)] bg-surface" aria-label="Projects">
        <div className="container-x flex flex-col gap-24 lg:gap-32">
          {PROJECTS.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <FinalCTA gap title="Your product could be next." />
    </>
  );
}
