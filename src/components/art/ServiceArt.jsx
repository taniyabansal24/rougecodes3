/**
 * Minimal line illustrations for the five core services.
 * Strokes use currentColor (neutral) with brand-green accents, so the same
 * art works on light and dark cards. Hover motion is driven from the parent
 * `.group` via the `.art-shift` helpers below.
 */
const base = {
  viewBox: "0 0 240 140",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
  className: "h-auto w-full",
};

const G = "var(--color-green-500)";

export function WebArt() {
  return (
    <svg {...base}>
      <rect x="16" y="12" width="208" height="118" rx="9" />
      <path d="M16 30h208" />
      <circle cx="28" cy="21" r="2.2" />
      <circle cx="36" cy="21" r="2.2" />
      <circle cx="44" cy="21" r="2.2" />
      <rect x="86" y="17" width="68" height="8" rx="4" opacity="0.5" />
      <path d="M30 44h34M30 54h26M30 64h30M30 74h22" opacity="0.5" />
      <path d="M76 30v100" opacity="0.5" />
      <g className="transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:-translate-y-1">
        <rect x="90" y="42" width="120" height="38" rx="5" stroke={G} fill={G} fillOpacity="0.08" />
        <path d="M100 55h52M100 65h34" stroke={G} />
      </g>
      <rect x="90" y="90" width="36" height="28" rx="4" />
      <rect x="132" y="90" width="36" height="28" rx="4" />
      <rect x="174" y="90" width="36" height="28" rx="4" />
    </svg>
  );
}

export function MobileArt() {
  return (
    <svg {...base}>
      <rect x="62" y="10" width="62" height="122" rx="12" opacity="0.45" transform="rotate(-8 93 71)" />
      <g className="transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:-translate-y-1">
        <rect x="104" y="6" width="66" height="128" rx="13" fill="var(--color-surface)" fillOpacity="0.001" />
        <path d="M128 13h18" />
        <rect x="114" y="26" width="46" height="26" rx="5" stroke={G} fill={G} fillOpacity="0.1" />
        <path d="M114 62h46M114 72h32M114 86h46M114 96h28" opacity="0.6" />
        <circle cx="152" cy="118" r="7" stroke={G} fill={G} fillOpacity="0.15" />
      </g>
      <rect x="166" y="40" width="54" height="22" rx="6" />
      <circle cx="176" cy="51" r="3.5" stroke={G} />
      <path d="M184 48h26M184 54h16" opacity="0.6" />
    </svg>
  );
}

export function IoTArt() {
  const nodes = [
    [40, 34],
    [200, 30],
    [36, 108],
    [204, 106],
    [120, 128],
  ];
  return (
    <svg {...base}>
      {nodes.map(([x, y]) => (
        <path key={`l${x}`} d={`M120 70L${x} ${y}`} strokeDasharray="3 4" opacity="0.55" />
      ))}
      {nodes.map(([x, y]) => (
        <g key={`n${x}`}>
          <rect x={x - 9} y={y - 9} width="18" height="18" rx="5" fill="var(--color-surface)" fillOpacity="0.001" />
          <circle cx={x} cy={y} r="2" fill="currentColor" />
        </g>
      ))}
      <circle cx="120" cy="70" r="30" opacity="0.25" className="origin-center transition-transform duration-700 group-hover:scale-110" style={{ transformBox: "fill-box" }} />
      <circle cx="120" cy="70" r="17" stroke={G} fill={G} fillOpacity="0.1" />
      <path d="M113 70a7 7 0 0 1 14 0M109 66a12 12 0 0 1 22 0" stroke={G} />
      <circle cx="120" cy="72" r="2" fill={G} stroke="none" />
    </svg>
  );
}

export function EmbeddedArt() {
  const pins = [52, 64, 76, 88];
  return (
    <svg {...base}>
      <path d="M20 70h60M160 70h60M120 10v30M120 100v30" opacity="0.5" />
      <path d="M20 40h30l18 18M220 100h-30l-18-18" opacity="0.5" />
      <circle cx="20" cy="70" r="2.5" />
      <circle cx="220" cy="70" r="2.5" />
      <circle cx="20" cy="40" r="2.5" />
      <circle cx="220" cy="100" r="2.5" />
      {pins.map((p) => (
        <g key={p} opacity="0.7">
          <path d={`M${p + 38} 34v6M${p + 38} 100v6M84 ${p - 6}h6M150 ${p - 6}h6`} />
        </g>
      ))}
      <rect x="90" y="40" width="60" height="60" rx="7" />
      <rect
        x="106"
        y="56"
        width="28"
        height="28"
        rx="4"
        stroke={G}
        fill={G}
        fillOpacity="0.12"
        className="transition-[fill-opacity] duration-500 group-hover:[fill-opacity:0.3]"
      />
      <circle cx="98" cy="48" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function MvpArt() {
  return (
    <svg {...base}>
      <path d="M18 118h204" opacity="0.4" />
      <path d="M18 118V20" opacity="0.4" />
      <path d="M30 106 C 70 104 80 86 108 82 S 150 70 168 50 S 200 26 214 22" strokeDasharray="4 5" opacity="0.6" />
      <circle cx="44" cy="104" r="5" />
      <circle cx="108" cy="82" r="5" />
      <g className="transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:-translate-y-1">
        <circle cx="206" cy="26" r="13" stroke={G} opacity="0.35" />
        <circle cx="206" cy="26" r="6" fill={G} stroke={G} />
      </g>
      <text x="30" y="132" fill="currentColor" stroke="none" fontSize="8.5" fontFamily="var(--font-mono)" opacity="0.7">IDEA</text>
      <text x="92" y="100" fill="currentColor" stroke="none" fontSize="8.5" fontFamily="var(--font-mono)" opacity="0.7">PROTOTYPE</text>
      <text x="174" y="56" fill={G} stroke="none" fontSize="8.5" fontFamily="var(--font-mono)">MVP</text>
    </svg>
  );
}
