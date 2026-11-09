import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "../../data/site";

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    const [, key, name] = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/) || [];
    if (key) el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Per-page metadata. Updates the tags shipped in index.html (so crawlers that
 * don't run JS still get sensible defaults) instead of duplicating them.
 */
export default function Seo({ title, description = SITE.description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} — RougeCodes` : "RougeCodes — Product Engineering Studio";
    const url = `${SITE.url}${pathname === "/" ? "/" : pathname}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [title, description, pathname]);

  return null;
}
