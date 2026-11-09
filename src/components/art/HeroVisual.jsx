import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (cb) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useReducedMotion = () =>
  useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);

const STEPS = [
  { label: "Discover", state: "done" },
  { label: "Strategize", state: "done" },
  { label: "Design", state: "done" },
  { label: "Develop", state: "active" },
  { label: "Launch", state: "todo" },
];

function StepDot({ state }) {
  if (state === "done")
    return (
      <span className="grid h-[1.15em] w-[1.15em] place-items-center rounded-full bg-green-500 text-white">
        <svg viewBox="0 0 12 12" className="h-[0.7em] w-[0.7em]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2.5 6.3 2.2 2.2 4.8-5" />
        </svg>
      </span>
    );
  if (state === "active")
    return (
      <span className="grid h-[1.15em] w-[1.15em] place-items-center rounded-full border-[1.5px] border-green-500">
        <span className="pulse-dot h-[0.4em] w-[0.4em] rounded-full bg-green-500 text-green-500" />
      </span>
    );
  return <span className="h-[1.15em] w-[1.15em] rounded-full border-[1.5px] border-dashed border-ink-300" />;
}

/**
 * Hero composition: an app dashboard fed by an edge device, with the
 * delivery pipeline floating on top. Purely decorative (aria-hidden).
 * Everything is sized in `em` off a container-query font size, so the
 * whole piece scales as one unit from phone to desktop.
 */
export default function HeroVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[640px]" style={{ containerType: "inline-size" }} aria-hidden="true">
      <div className="relative aspect-[1/0.94] text-ink-900" style={{ fontSize: "2.3cqw" }}>
        {/* Ambient light */}
        <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(63,149,38,0.16),transparent)] blur-2xl" />

        {/* ---------- Main app panel ---------- */}
        <div
          className="enter-visual absolute left-[13%] top-[8%] flex h-[68%] w-[87%] flex-col overflow-hidden rounded-[1.1em] border border-[var(--line)] bg-surface shadow-[var(--shadow-lg)]"
          style={{ "--d": "380ms" }}
        >
          <div className="flex h-[2.5em] shrink-0 items-center gap-[0.45em] border-b border-[var(--line)] px-[1em]">
            <span className="h-[0.55em] w-[0.55em] rounded-full bg-ink-300/70" />
            <span className="h-[0.55em] w-[0.55em] rounded-full bg-ink-300/70" />
            <span className="h-[0.55em] w-[0.55em] rounded-full bg-ink-300/70" />
            <span className="mx-auto rounded-full bg-paper px-[0.9em] py-[0.25em] font-mono text-[0.68em] text-ink-500">
              console / overview
            </span>
          </div>

          <div className="flex min-h-0 flex-1">
            {/* Sidebar */}
            <div className="flex w-[24%] flex-col gap-[0.55em] border-r border-[var(--line)] p-[0.9em]">
              {[1, 0.7, 0.85, 0.6, 0.75].map((w, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-[0.5em] rounded-[0.45em] px-[0.45em] py-[0.4em] ${i === 0 ? "bg-green-50" : ""}`}
                >
                  <span className={`h-[0.8em] w-[0.8em] shrink-0 rounded-[0.25em] ${i === 0 ? "bg-green-500" : "bg-ink-300/50"}`} />
                  <span className={`h-[0.4em] rounded-full ${i === 0 ? "bg-green-600/40" : "bg-ink-300/40"}`} style={{ width: `${w * 100}%` }} />
                </div>
              ))}
            </div>

            {/* Main */}
            <div className="flex min-w-0 flex-1 flex-col gap-[0.85em] p-[1.1em]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[0.6em] uppercase tracking-[0.08em] text-ink-400">Overview</p>
                  <p className="mt-[0.2em] text-[1.15em] font-semibold tracking-[-0.02em]">Device fleet</p>
                </div>
                <span className="inline-flex items-center gap-[0.4em] rounded-full border border-green-500/25 bg-green-50 px-[0.6em] py-[0.25em] text-[0.68em] font-medium text-green-700">
                  <span className="pulse-dot h-[0.45em] w-[0.45em] rounded-full bg-green-500 text-green-500" />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-[0.55em]">
                {[
                  ["Online", "128", "+4"],
                  ["Events/min", "2.4k", "+12%"],
                  ["Uptime", "99.9%", "30d"],
                ].map(([k, v, d]) => (
                  <div key={k} className="rounded-[0.6em] border border-[var(--line)] p-[0.6em]">
                    <p className="font-mono text-[0.55em] uppercase tracking-[0.06em] text-ink-400">{k}</p>
                    <p className="mt-[0.25em] text-[1.15em] font-semibold tracking-[-0.03em]">{v}</p>
                    <p className="text-[0.58em] text-green-700">{d}</p>
                  </div>
                ))}
              </div>

              <div className="relative">
                <svg viewBox="0 0 300 110" className="block h-auto w-full">
                  <defs>
                    <linearGradient id="hv-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#3f9526" stopOpacity="0.18" />
                      <stop offset="1" stopColor="#3f9526" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[20, 50, 80].map((y) => (
                    <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(21,25,28,0.07)" strokeDasharray="3 4" />
                  ))}
                  <path
                    d="M0 86 C 22 84 34 70 56 72 S 92 88 116 74 S 150 40 176 46 S 214 70 238 52 S 278 22 300 18 V 110 H 0 Z"
                    fill="url(#hv-area)"
                    className="enter"
                    style={{ "--d": "1100ms" }}
                  />
                  <path
                    d="M0 86 C 22 84 34 70 56 72 S 92 88 116 74 S 150 40 176 46 S 214 70 238 52 S 278 22 300 18"
                    fill="none"
                    stroke="#3f9526"
                    strokeWidth="2"
                    strokeLinecap="round"
                    pathLength="1"
                    className="stroke-draw"
                    style={{ "--len": 1, "--d": "800ms" }}
                  />
                  <circle cx="300" cy="18" r="3.5" fill="#3f9526" className="enter" style={{ "--d": "2200ms" }} />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Telemetry trace (device → app) ---------- */}
        <svg viewBox="0 0 1000 940" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
          <path
            id="hv-trace"
            d="M 540 872 H 700 Q 742 872 742 830 V 716"
            fill="none"
            stroke="rgba(63,149,38,0.45)"
            strokeWidth="2"
            strokeDasharray="5 6"
            className="enter"
            style={{ "--d": "1300ms" }}
          />
          <circle cx="742" cy="716" r="6" fill="#fff" stroke="#3f9526" strokeWidth="2" className="enter" style={{ "--d": "1400ms" }} />
          {!reduced && (
            <circle r="5" fill="#3f9526">
              <animateMotion dur="4.8s" begin="2s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear">
                <mpath href="#hv-trace" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.08;0.5;0.58;1" dur="4.8s" begin="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
        <span
          className="enter absolute left-[58%] top-[87.5%] -translate-y-full font-mono text-[0.62em] uppercase tracking-[0.08em] text-ink-400"
          style={{ "--d": "1500ms" }}
        >
          telemetry
        </span>

        {/* ---------- Release pipeline (glass) ---------- */}
        <div
          className="glass enter-visual absolute left-0 top-[33%] w-[37%] rounded-[1em] p-[1em]"
          style={{ "--d": "620ms" }}
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.6em] uppercase tracking-[0.08em] text-ink-500">Release pipeline</p>
            <span className="rounded-full bg-ink-900 px-[0.55em] py-[0.15em] font-mono text-[0.58em] text-white">v1.0</span>
          </div>
          <ul className="mt-[0.8em] flex flex-col gap-[0.6em]">
            {STEPS.map((s) => (
              <li key={s.label} className="flex items-center gap-[0.6em]">
                <StepDot state={s.state} />
                <span className={`text-[0.8em] ${s.state === "todo" ? "text-ink-400" : "text-ink-800"} ${s.state === "active" ? "font-semibold" : ""}`}>
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-[0.9em] h-[0.3em] overflow-hidden rounded-full bg-ink-900/8">
            <div className="h-full w-[72%] rounded-full bg-green-500" />
          </div>
        </div>

        {/* ---------- Edge device (glass) ---------- */}
        <div
          className="glass enter-visual absolute bottom-[1%] left-[3%] flex w-[51%] items-center gap-[0.8em] rounded-[1em] p-[0.85em]"
          style={{ "--d": "820ms" }}
        >
          <div className="grid h-[3em] w-[3em] shrink-0 place-items-center rounded-[0.7em] bg-ink-900">
            <svg viewBox="0 0 24 24" className="h-[1.7em] w-[1.7em]" fill="none" stroke="#6cbd4a" strokeWidth="1.5" strokeLinecap="round">
              <rect x="6" y="6" width="12" height="12" rx="2" />
              <rect x="9.5" y="9.5" width="5" height="5" rx="0.8" fill="#6cbd4a" fillOpacity="0.25" />
              <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[0.88em] font-semibold tracking-[-0.01em]">Edge device</p>
            <p className="truncate text-[0.7em] text-ink-500">Firmware v2.1 · connected</p>
          </div>
          <div className="flex h-[1.2em] items-end gap-[0.18em] pr-[0.2em]">
            {[0.35, 0.55, 0.8, 1].map((h, i) => (
              <span key={i} className={`w-[0.25em] rounded-full ${i < 3 ? "bg-green-500" : "bg-ink-300"}`} style={{ height: `${h * 100}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
