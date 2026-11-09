import { Link } from "react-router-dom";
import markDark from "../../assets/brand/logo-mark.webp";
import markLight from "../../assets/brand/logo-mark-light.webp";

/**
 * RougeCodes logo: the RC mark + wordmark.
 * tone="light" swaps to the white-charcoal mark for dark surfaces.
 */
export default function Logo({ tone = "dark", className = "", onClick }) {
  const light = tone === "light";
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="RougeCodes — home"
      className={`group inline-flex items-center gap-2.5 rounded-md ${className}`}
    >
      <img
        src={light ? markLight : markDark}
        alt=""
        width="224"
        height="124"
        className="h-[22px] w-auto transition-transform duration-300 ease-[var(--ease-smooth)] group-hover:-rotate-3"
      />
      <span
        className={`text-[1.1rem] font-semibold tracking-[-0.03em] ${light ? "text-white" : "text-ink-900"}`}
      >
        Rouge<span className={light ? "text-green-400" : "text-green-600"}>Codes</span>
      </span>
    </Link>
  );
}
