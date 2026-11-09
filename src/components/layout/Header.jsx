import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { NAV, SITE } from "../../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  // Glass state after a small scroll threshold (rAF-throttled, passive)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the drawer whenever the route changes (state adjusted during render)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Drawer: lock background scroll, Esc to close, keep focus inside
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = [
          toggleRef.current,
          ...drawerRef.current.querySelectorAll("a, button"),
        ].filter(Boolean);
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the drawer if the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#main"
        className="btn btn-primary btn-sm fixed left-4 top-3 z-[60] -translate-y-[200%] opacity-0 focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div
          className={`container-x transition-[padding] duration-500 ease-[var(--ease-smooth)] ${
            solid ? "pt-2.5 lg:pt-3" : "pt-3 lg:pt-4"
          }`}
        >
          <div
            className={`pointer-events-auto flex h-[60px] items-center justify-between rounded-[14px] border transition-[background-color,border-color,box-shadow,padding] duration-500 ease-[var(--ease-smooth)] ${
              open
                ? "border-[var(--line)] bg-paper px-3 shadow-[var(--shadow-sm)] sm:px-4"
                : scrolled
                  ? "glass px-3 sm:px-4"
                  : "border-transparent bg-transparent px-0"
            }`}
          >
            <Logo onClick={() => setOpen(false)} />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `relative flex h-9 items-center rounded-full px-3.5 text-[0.95rem] tracking-[-0.01em] transition-colors duration-200 ${
                          isActive
                            ? "text-ink-900"
                            : "text-ink-500 hover:bg-ink-900/[0.04] hover:text-ink-900"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          <span
                            aria-hidden="true"
                            className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-green-500 transition-[opacity,scale] duration-300 ${
                              isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Button to="/contact" size="sm" arrow className="hidden sm:inline-flex">
                Let’s talk
              </Button>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative grid h-11 w-11 place-items-center rounded-full text-ink-900 transition-colors hover:bg-ink-900/5 lg:hidden"
              >
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <span
                    className={`absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ease-[var(--ease-smooth)] ${
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[var(--ease-smooth)] ${
                      open ? "top-1/2 w-5 -translate-y-1/2 -rotate-45" : "bottom-0 w-3.5"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        data-open={open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-paper transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <nav
          aria-label="Mobile"
          className="container-x relative flex flex-1 flex-col overflow-y-auto pb-8 pt-[calc(var(--header-h)+40px)]"
        >
          <ul className="flex flex-col">
            {[...NAV, { to: "/contact", label: "Contact" }].map((item, i) => (
              <li key={item.to} className="drawer-item border-b border-[var(--line)]" style={{ "--i": i }}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between py-4 text-[clamp(1.75rem,6vw,2.5rem)] font-semibold tracking-[-0.035em] ${
                      isActive ? "text-ink-900" : "text-ink-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-baseline gap-4">
                        <span className="t-label text-ink-400">0{i + 1}</span>
                        {item.label}
                      </span>
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
                          isActive
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-[var(--line-strong)] text-ink-500"
                        }`}
                      >
                        <Icon name="arrowRight" size={16} />
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="drawer-item mt-auto pt-10" style={{ "--i": NAV.length + 1 }}>
            <Button to="/contact" arrow className="w-full" onClick={() => setOpen(false)}>
              Start a project
            </Button>
            <div className="mt-6 flex flex-col gap-2 text-[0.95rem] text-ink-500 sm:flex-row sm:justify-between">
              <a href={`mailto:${SITE.email}`} className="link-u w-fit hover:text-ink-900">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="link-u w-fit hover:text-ink-900">
                {SITE.phone}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
