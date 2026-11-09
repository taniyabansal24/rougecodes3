# RougeCodes — website

Marketing site for **RougeCodes**, a product engineering studio building web and mobile
applications, IoT products, embedded systems and MVPs.

Built with **React 19**, **Vite 7**, **React Router 7** and **Tailwind CSS 4**. No animation
libraries — motion is CSS plus a single shared `IntersectionObserver`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
npm run lint
```

## Project structure

```
src/
  data/site.js            ← all content: contact info, services, projects, team, FAQs
  index.css               ← design system (tokens, type scale, components, motion)
  components/
    layout/               Header (glass on scroll + mobile drawer), Footer, ScrollManager, Seo
    ui/                   Button, Reveal, SectionHeader, Icon, Logo
    sections/             Hero, ServicesBento, Work, Process, WhyUs, Team, FAQ, FinalCTA, ContactForm, PageHero
    art/                  HeroVisual + service illustrations (inline SVG)
  pages/                  Home, About, Services, Work, Careers, Contact, Privacy, NotFound
```

## Editing content

Almost everything lives in **`src/data/site.js`**:

- **Contact details** — `SITE.email`, `SITE.phone`, `SITE.address`
- **Social links** — add verified profiles to `SITE.socials` (`{ label, href }`); they appear in
  the footer automatically. The list is intentionally empty until real URLs are added.
- **Services, projects, process, values, team, FAQs** — edit the exported arrays.

## Design system

Tokens are declared once in `src/index.css` under `@theme`, so Tailwind utilities map to them
(`bg-ink-950`, `text-green-700`, `font-mono`, …).

| Token | Use |
| --- | --- |
| `ink-950 / 900` | dark surfaces, headings, primary buttons |
| `ink-500 / 400` | secondary text / muted labels (AA contrast on light) |
| `paper`, `paper-2`, `surface` | page background, tinted sections, cards |
| `green-500` | brand green from the RC logo — accents and UI |
| `green-700` | green text on light backgrounds (AA) |
| `green-400` | accent on dark surfaces |
| `sage-*` | secondary tone from the previous identity |

Type: **Inter Tight** (display + body) and **Geist Mono** (labels). Shared classes: `t-display`,
`t-h1`, `t-h2`, `t-h3`, `t-lead`, `t-label`, `eyebrow`, `btn-*`, `card`, `chip`, `field`, `glass`.

Motion: `<Reveal>` adds `.is-visible` on scroll; hero/page entrances use CSS keyframes. Every
animation is disabled under `prefers-reduced-motion`.

## Contact form

The form posts JSON to [FormSubmit](https://formsubmit.co) for `contact@rougecodes.com`
(`CONTACT_ENDPOINT` in `src/data/site.js`).

- **First-time setup:** the first submission triggers a one-time activation email to
  `contact@rougecodes.com`. Click **Activate Form** in that email; until then submissions show
  the error state, which offers a pre-filled email fallback so no enquiry is lost.
- To use another provider, set `VITE_CONTACT_ENDPOINT` (any endpoint accepting a JSON POST).

## Deployment (Vercel)

`vercel.json` rewrites all routes to `index.html` so deep links such as `/about` work on refresh,
and sets long-term caching for hashed assets. `public/` contains `robots.txt`, `sitemap.xml`,
the Open Graph image and favicons. If the production domain changes, update `SITE.url`,
`index.html` (canonical / OG tags / JSON-LD) and `public/sitemap.xml`.
