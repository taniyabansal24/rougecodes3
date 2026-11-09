/**
 * Single source of truth for RougeCodes content.
 * Only verified company information lives here — edit this file to update
 * copy, services, projects or contact details across the whole site.
 */
import trustyMoneyImg from "../assets/img/work-trusty-money.webp";
import cafeFlowImg from "../assets/img/work-cafeflow.webp";
import bikeshImg from "../assets/img/team-bikesh.webp";
import sarthakImg from "../assets/img/team-sarthak.webp";

export const SITE = {
  name: "RougeCodes",
  url: "https://rouge-codes.vercel.app",
  tagline: "Product engineering studio",
  description:
    "RougeCodes designs and builds web and mobile applications, IoT products, embedded systems and MVPs — turning complex ideas into products that work.",
  email: "contact@rougecodes.com",
  phone: "+91 92173 27326",
  phoneHref: "tel:+919217327326",
  address: {
    lines: ["C-5, Milap Nagar, Uttam Nagar", "New Delhi – 110059"],
    city: "New Delhi",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=C-5%2C+Milap+Nagar%2C+Uttam+Nagar%2C+New+Delhi+110059",
  },
  /**
   * Add verified profile URLs here (e.g. { label: "LinkedIn", href: "https://…" }).
   * Social links render automatically in the footer and contact page once added.
   */
  socials: [],
};

/**
 * Where the contact form posts. Defaults to FormSubmit's AJAX endpoint for the
 * studio inbox; override with VITE_CONTACT_ENDPOINT for another provider.
 */
export const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${SITE.email}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/careers", label: "Careers" },
];

export const SERVICES = [
  {
    id: "web",
    index: "01",
    title: "Web Application Development",
    short: "Web Development",
    summary:
      "Fast, secure web platforms — from customer-facing products and SaaS to internal tools and dashboards.",
    value:
      "We build web applications that stay fast as they grow: clean architecture, considered interfaces and infrastructure you can rely on in production.",
    includes: [
      "Product web apps & SaaS platforms",
      "Dashboards & internal tools",
      "APIs, integrations & back-ends",
      "Marketing websites",
    ],
    stack: ["React / Next.js", "Node.js", "Python", "Cloud architecture"],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile Application Development",
    short: "Mobile Development",
    summary:
      "iOS and Android apps that feel native, perform smoothly and connect cleanly to your back-end.",
    value:
      "One focused codebase, two platforms. We design and ship mobile experiences people return to — with the APIs and admin tools behind them.",
    includes: [
      "Cross-platform iOS & Android apps",
      "Companion apps for connected devices",
      "Back-end & API integration",
      "App store release support",
    ],
    stack: ["React Native", "Node.js", "Cloud architecture"],
  },
  {
    id: "iot",
    index: "03",
    title: "IoT Product Design & Prototyping",
    short: "IoT Design & Prototyping",
    summary:
      "Connected devices from concept to working prototype — hardware, connectivity, cloud and app designed as one system.",
    value:
      "We take connected-product ideas off the whiteboard and into your hands, so you can test with real users and real data before committing to production.",
    includes: [
      "Concept & feasibility",
      "Functional hardware prototypes",
      "Device-to-cloud connectivity",
      "Monitoring dashboards & companion apps",
    ],
  },
  {
    id: "embedded",
    index: "04",
    title: "Embedded Systems Development",
    short: "Embedded Systems",
    summary:
      "Reliable firmware and low-level software for microcontroller-based products, built for real-world constraints.",
    value:
      "Efficient, testable firmware that respects power, memory and timing budgets — and talks cleanly to the rest of your product.",
    includes: [
      "Firmware development",
      "Sensor & peripheral integration",
      "Communication protocols",
      "On-hardware testing & debugging",
    ],
  },
  {
    id: "mvp",
    index: "05",
    title: "MVP Development",
    short: "MVP Development",
    summary:
      "Turn your idea into a focused, market-ready first version — built lean to validate fast and ready to evolve.",
    value:
      "We help you decide what to build first, then ship it quickly with the foundations to scale once the market says yes.",
    includes: [
      "Product strategy & scoping",
      "Rapid prototyping",
      "Agile development",
      "Market validation & iteration",
    ],
  },
  {
    id: "design",
    index: "06",
    title: "UI/UX & Brand Design",
    short: "UI/UX & Brand Design",
    summary:
      "Strategic brand identity and user-centred interfaces that make products clear, credible and memorable.",
    value:
      "Design and engineering in the same room: what we design is what we ship, without anything getting lost in handover.",
    includes: ["Brand strategy", "Visual identity", "User research", "Wireframing & prototyping"],
  },
  {
    id: "ai",
    index: "07",
    title: "AI Tools & Integrations",
    short: "AI Tools & Integrations",
    summary:
      "Custom AI tools and integrations that automate processes, surface insights and add intelligent features.",
    value:
      "Practical AI — applied where it saves time or unlocks something new, integrated into the systems your team already uses.",
    includes: [
      "AI feature integration",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
    ],
  },
];

export const CORE_SERVICES = SERVICES.slice(0, 5);

export const PROJECTS = [
  {
    slug: "trusty-money",
    title: "Trusty Money",
    industry: "Fintech",
    services: ["Branding", "Website"],
    image: trustyMoneyImg,
    imageAlt:
      "Trusty Money website screens: a hero reading “Financial Infrastructure for Cross-Border Business” and a demo request form",
    tone: "dark",
    summary:
      "Brand and website for a financial operating system that simplifies payments, billing, compliance and cash flow for businesses working across borders.",
    delivered: [
      "Brand identity",
      "Marketing website & product pages",
      "Demo request flow",
    ],
  },
  {
    slug: "cafeflow",
    title: "CafeFlow",
    industry: "Restaurant tech",
    services: ["Branding", "Website", "Art Direction"],
    image: cafeFlowImg,
    imageAlt:
      "CafeFlow website screens: a hero reading “Revolutionize Your Cafe with Smart QR Ordering” and a six-step how-it-works section",
    tone: "light",
    summary:
      "Brand, website and art direction for an all-in-one digital ordering and café management platform — from QR ordering to kitchen flow and analytics.",
    delivered: [
      "Brand identity & art direction",
      "Product website",
      "How-it-works and analytics storytelling",
    ],
  },
];

export const PROCESS = [
  {
    index: "01",
    title: "Discover",
    text: "We learn your business, users and goals — gathering requirements and surfacing the real challenges early.",
  },
  {
    index: "02",
    title: "Strategize",
    text: "We turn insight into a clear roadmap: features, user flows and the technical approach.",
  },
  {
    index: "03",
    title: "Design",
    text: "We craft intuitive interfaces — layout, typography and interaction designed to be used, not just admired.",
  },
  {
    index: "04",
    title: "Develop",
    text: "We build with modern, maintainable code — responsive, integrated and engineered for performance.",
  },
  {
    index: "05",
    title: "Launch & Improve",
    text: "We test, optimise and deploy — then keep refining with maintenance and support as you grow.",
  },
];

export const REASONS = [
  {
    icon: "layers",
    title: "Hardware and software, one team",
    text: "Firmware, cloud, web and mobile under one roof — so connected products are designed as a single system.",
  },
  {
    icon: "compass",
    title: "Product thinking first",
    text: "We start with the problem and the people, not the tech stack — and challenge scope when it helps you ship.",
  },
  {
    icon: "pen",
    title: "Design meets engineering",
    text: "Designers and engineers work side by side, so the product you approve is the product that ships.",
  },
  {
    icon: "grid",
    title: "Built to scale",
    text: "Clean architecture and maintainable code that keeps up as your users and features grow.",
  },
  {
    icon: "target",
    title: "Business-oriented",
    text: "Every decision is weighed against your goals — time to market, budget and what your users actually need.",
  },
  {
    icon: "refresh",
    title: "Here after launch",
    text: "Maintenance and support packages for fixes, security updates, monitoring and new features.",
  },
];

export const VALUES = [
  {
    title: "Excellence",
    text: "We sweat the details and hold every release to a high standard of quality.",
  },
  {
    title: "Collaboration",
    text: "Great work comes from close partnership. We treat your vision as our own.",
  },
  {
    title: "Innovation",
    text: "We embrace new technologies and approaches when they genuinely serve the product.",
  },
  {
    title: "Responsibility",
    text: "We build products that are sustainable to run, maintain and grow over time.",
  },
];

export const TEAM = [
  {
    name: "Bikesh Kumar",
    role: "CEO & CTO",
    image: bikeshImg,
    bio: "Leads RougeCodes’ vision and technology — guiding how products are planned, engineered and delivered.",
  },
  {
    name: "Sarthak Arora",
    role: "Technical Director & Co-founder",
    image: sarthakImg,
    imageAlign: "left",
    bio: "Specialises in scalable architectures and emerging technologies, ensuring our solutions are future-ready.",
  },
];

export const FAQS = [
  {
    q: "What services does RougeCodes offer?",
    a: "We design and build web applications, mobile apps, IoT products and embedded systems, and help startups ship MVPs. We also provide UI/UX and brand design, and integrate AI tools where they add real value.",
  },
  {
    q: "Can you handle both the hardware and software side of a product?",
    a: "Yes. Our IoT prototyping and embedded systems work sits alongside our web and mobile development, so firmware, connectivity, cloud and apps can be planned and built together.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope and complexity. A simple website might take 4–6 weeks, while a complex mobile app could take 3–6 months. We agree clear milestones and delivery dates during discovery.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Absolutely. We offer maintenance and support packages covering bug fixes, security updates, performance monitoring and feature enhancements as your product grows.",
  },
  {
    q: "What is your design and development process?",
    a: "Five stages: Discover, Strategize, Design, Develop, and Launch & Improve. We keep communication regular and build feedback loops into every stage.",
  },
];
