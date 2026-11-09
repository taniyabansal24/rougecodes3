import Reveal from "./Reveal";

/**
 * Consistent section intro: eyebrow label → heading → lead, with optional action.
 */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  align = "left",
  as: H = "h2",
  className = "",
  titleClassName = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-8 ${
        action ? "md:flex-row md:items-end md:justify-between" : ""
      } ${centered ? "items-center text-center" : ""} ${className}`}
    >
      <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && (
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={60}>
          <H className={`t-h2 mt-5 ${titleClassName}`}>{title}</H>
        </Reveal>
        {lead && (
          <Reveal delay={120}>
            <p className={`t-lead mt-5 max-w-2xl text-ink-500 ${centered ? "mx-auto" : ""} on-dark-muted`}>
              {lead}
            </p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={160} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
