import { Link } from "react-router-dom";

export function Arrow({ up = false }) {
  const d = up ? "M4.5 11.5 11.5 4.5M5.5 4.5h6v6" : "M2.5 8h11M9 3.5 13.5 8 9 12.5";
  return (
    <span className="btn-arrow" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </span>
  );
}

const VARIANTS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghostDark: "btn-ghost-dark",
};

/**
 * Polymorphic button: `to` → router Link, `href` → anchor, otherwise <button>.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size,
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const cls = `btn ${VARIANTS[variant]} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Arrow up={arrow === "up"} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
