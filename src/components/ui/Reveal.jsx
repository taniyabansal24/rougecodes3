import { useEffect, useRef } from "react";

/**
 * Scroll-reveal primitive.
 * One shared IntersectionObserver for the whole app keeps this cheap:
 * elements get `.is-visible` once and are then unobserved.
 */
let observer;
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
  }
  return observer;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return ref;
}

/**
 * @param {"fade"|"scope"} variant  fade = opacity + translate; scope = only
 *        toggles `.is-visible` so children (e.g. `.draw-x` lines) can animate.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "fade",
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`${variant === "fade" ? "reveal" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
