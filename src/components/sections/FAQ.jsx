import { useId, useState } from "react";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { FAQS } from "../../data/site";

function Item({ item, open, onToggle }) {
  const id = useId();
  return (
    <li className="border-b border-[var(--line)]">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left text-[1.075rem] font-medium tracking-[-0.015em] text-ink-900 sm:text-[1.15rem]"
        >
          <span className="transition-colors group-hover:text-green-700">{item.q}</span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-[rotate,background-color,border-color,color] duration-300 ${
              open ? "rotate-45 border-ink-900 bg-ink-900 text-white" : "border-[var(--line-strong)] text-ink-600"
            }`}
            aria-hidden="true"
          >
            <Icon name="plus" size={16} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-a`}
        role="region"
        aria-labelledby={`${id}-q`}
        className={`grid transition-[grid-template-rows] duration-400 ease-[var(--ease-smooth)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p className="max-w-2xl pb-6 pr-12 text-[0.985rem] leading-relaxed text-ink-500">{item.a}</p>
        </div>
      </div>
    </li>
  );
}

export default function FAQ({ items = FAQS }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section border-t border-[var(--line)]" aria-labelledby="faq-title">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">FAQ</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 id="faq-title" className="t-h2 mt-5">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="t-lead mt-5 text-ink-500">Still curious about something? We’re happy to talk it through.</p>
          </Reveal>
          <Reveal delay={180} className="mt-8">
            <Button to="/contact" variant="secondary" arrow>
              Ask us anything
            </Button>
          </Reveal>
        </div>
        <Reveal as="ul" delay={100} className="border-t border-[var(--line)] lg:col-span-8">
          {items.map((item, i) => (
            <Item key={item.q} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
