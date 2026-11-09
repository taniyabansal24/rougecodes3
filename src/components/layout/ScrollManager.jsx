import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route-aware scrolling:
 * - new page → jump to top (no smooth scroll, so navigation feels instant)
 * - URL with a hash → scroll to that section once it has rendered
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev;
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries++ < 20) {
        timer = setTimeout(attempt, 50); // wait for lazily loaded pages
      }
    };
    attempt();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
