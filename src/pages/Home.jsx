import Seo from "../components/layout/Seo";
import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import { WorkShowcase } from "../components/sections/Work";
import Process from "../components/sections/Process";
import WhyUs from "../components/sections/WhyUs";
import Team from "../components/sections/Team";
import FinalCTA from "../components/sections/FinalCTA";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <ServicesBento />
      <WorkShowcase />
      <Process />
      <WhyUs />
      <div className="border-t border-[var(--line)] bg-surface">
        <Team
          action={
            <Button to="/about" variant="secondary" arrow>
              More about us
            </Button>
          }
        />
      </div>
      <FinalCTA gap />
    </>
  );
}
