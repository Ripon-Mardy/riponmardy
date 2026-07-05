import {
  BlogPost,
  ClientItem,
  ContactInfo,
  ProjectItem,
  ServiceItem,
  SkillItem,
  SocialLink,
  TestimonialItem,
  TimelineItem,
} from "./types";

export const personalInfo = {
  name: "Marcus Vance",
  title: "Lead Full-Stack Architect",
  subTitle: "Crafting High-Performance Web Solutions & AI Integrations",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  bio: "I am a Lead Full-Stack Architect based in San Francisco, specializing in building high-performance, accessible, and elegant digital products. With over 8 years of industry experience, I merge state-of-the-art technologies with meticulous design standards. I am dedicated to solving complex system puzzles and delivering flawless user experiences.",
  cvUrl: "#", // Handled as an interactive download action in the app
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "Dribbble" },
];

export const contactInfo: ContactInfo = {
  email: "marcus.vance@dev.studio",
  phone: "+1 (415) 890-4321",
  birthday: "October 14, 1994",
  location: "San Francisco, CA, USA",
};

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Application Architecture",
    description:
      "Architecting lightning-fast, production-ready React applications with pristine clean code and optimal performance metrics.",
    icon: "Layout",
  },
  {
    id: "api-design",
    title: "API Design & Backend Engines",
    description:
      "Designing robust, scale-to-zero server-side REST/GraphQL APIs and microservices utilizing Node.js, Express, and cloud native architectures.",
    icon: "Cpu",
  },
  {
    id: "ui-ux",
    title: "High-Fidelity UI/UX Systems",
    description:
      "Translating sophisticated product ideas into meticulous, dynamic, and fluid responsive design systems with precise tailwind grids.",
    icon: "Figma",
  },
  {
    id: "ai-integration",
    title: "AI Integration & Analytics",
    description:
      "Integrating intelligent LLM features, custom search vector configurations, and smart metrics tracking to elevate digital products.",
    icon: "Sparkles",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    role: "VP of Product at CloudScale",
    text: "Marcus is an extraordinary talent. He stepped in to architect our flagship dashboard interface, delivering it two weeks ahead of schedule. The code quality, loading speed, and sheer aesthetic polish exceeded all our stakeholders' expectations.",
    date: "May 2026",
  },
  {
    id: "test-2",
    name: "Devon Carter",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    role: "Founder of SynthFlow",
    text: "Marcus brought a level of technical rigor and design craftsmanship that is rare in full-stack engineers. He didn't just write server APIs; he refined our layout, established our token system, and implemented highly fluid motion sequences.",
    date: "April 2026",
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    role: "Engineering Director at ApexLab",
    text: "Collaborating with Marcus was a breeze. He has an incredible ability to communicate complex architecture issues simply, and his standard for type-safety and automated testing saved us weeks of post-launch debugging.",
    date: "January 2026",
  },
];

export const clients: ClientItem[] = [
  {
    id: "client-1",
    name: "Stripe",
    logo: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "client-2",
    name: "Figma",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "client-3",
    name: "Slack",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "client-4",
    name: "Vercel",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop",
  },
];

export const educationTimeline: TimelineItem[] = [
  {
    id: "edu-1",
    title: "Master of Science in Computer Science",
    subtitle: "Stanford University",
    period: "2016 — 2018",
    description:
      "Specialized in Software Systems and Human-Computer Interaction. Researched high-efficiency rendering pipelines and client-side web optimizations.",
  },
  {
    id: "edu-2",
    title: "Bachelor of Science in Software Engineering",
    subtitle: "University of California, Berkeley",
    period: "2012 — 2016",
    description:
      "Graduated with honors. Active lead in the Web Design & Development Coalition. Built multiple interactive utilities for local community networks.",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Lead Full-Stack Architect",
    subtitle: "HexaTech Systems",
    period: "2022 — Present",
    description:
      "Driving engineering strategies for multi-tenant cloud architectures. Directed a team of 6 developers in rewriting our core web engine, improving Lighthouse performance scores from 45 to 98. Designed a custom reactive state scheduler that saved 35% in CPU utilization.",
  },
  {
    id: "exp-2",
    title: "Senior Front-End Engineer",
    subtitle: "Aetherial Solutions",
    period: "2019 — 2022",
    description:
      "Engineered high-concurrency real-time charts and financial dashboards using React, D3, and WebSockets. Led the design token integration with Tailwind CSS across three cross-functional departments, shortening design-to-dev cycles by 40%.",
  },
  {
    id: "exp-3",
    title: "Full-Stack Web Developer",
    subtitle: "ByteCraft Studio",
    period: "2018 — 2019",
    description:
      "Developed and maintained highly scalable e-commerce sites and client management systems. Crafted custom RESTful APIs using Node.js/Express, implemented automated CI/CD pipelines, and improved database indexing strategies.",
  },
];

export const skills: SkillItem[] = [
  {
    name: "TypeScript / ESNext",
    percentage: 98,
    level: "Expert",
    category: "frontend",
  },
  {
    name: "React (v19) / Next.js",
    percentage: 95,
    level: "Expert",
    category: "frontend",
  },
  {
    name: "Tailwind CSS / V4",
    percentage: 96,
    level: "Expert",
    category: "frontend",
  },
  {
    name: "Framer Motion",
    percentage: 90,
    level: "Advanced",
    category: "frontend",
  },

  {
    name: "Node.js / Express",
    percentage: 92,
    level: "Expert",
    category: "backend",
  },
  {
    name: "PostgreSQL / Prisma",
    percentage: 88,
    level: "Advanced",
    category: "backend",
  },
  {
    name: "GraphQL / REST APIs",
    percentage: 90,
    level: "Advanced",
    category: "backend",
  },
  {
    name: "Redis / Serverless Caching",
    percentage: 82,
    level: "Advanced",
    category: "backend",
  },

  {
    name: "Figma UI System Design",
    percentage: 85,
    level: "Advanced",
    category: "design",
  },
  {
    name: "Responsive Layouts",
    percentage: 98,
    level: "Expert",
    category: "design",
  },
  {
    name: "Design Tokens & Themes",
    percentage: 90,
    level: "Advanced",
    category: "design",
  },
  {
    name: "Motion Architecture",
    percentage: 88,
    level: "Advanced",
    category: "design",
  },

  {
    name: "Git / Semantic Releases",
    percentage: 95,
    level: "Expert",
    category: "other",
  },
  {
    name: "Docker Containerization",
    percentage: 80,
    level: "Intermediate",
    category: "other",
  },
  {
    name: "Vite Bundle Optimization",
    percentage: 92,
    level: "Expert",
    category: "other",
  },
  {
    name: "Accessibility (WCAG 2.1)",
    percentage: 88,
    level: "Advanced",
    category: "other",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Quantum Dashboard",
    category: "Web Application",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    ],
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React 19",
      "D3.js",
      "Tailwind CSS v4",
      "TypeScript",
      "Node.js",
    ],
    description:
      "A state-of-the-art interactive data monitoring terminal for industrial systems. It displays hundreds of real-time server streams simultaneously using GPU-accelerated canvas grids, fully interactive zoomable timelines, and customizable bento-grid layouts. Highly optimized for massive data throughput with virtualized rows and zero-rerender updates.",
    liveUrl: "https://quantum.dev.studio",
    githubUrl: "https://github.com/marcusvance/quantum-dashboard",
  },
  {
    id: "proj-2",
    title: "Nova CRM Mobile App",
    category: "Mobile Design",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
    ],
    client: "Nova Corp",
    date: "November 2025",
    technologies: ["React Native", "Expo", "Framer Motion", "Tailwind CSS"],
    description:
      "A complete mobile CRM platform featuring real-time client feed synchronization, smart customer segmentation, speech-to-text automated meeting summarization, and direct integrations with Google Workspace APIs. The application supports offline synchronization using a localized SQLite cache and background sync queues.",
    liveUrl: "https://nova-crm.dev.studio",
    githubUrl: "https://github.com/marcusvance/nova-crm",
  },
  {
    id: "proj-3",
    title: "SynthFlow AI Orchestrator",
    category: "AI Integration",
    thumbnail:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    ],
    client: "SynthFlow Labs",
    date: "March 2026",
    technologies: [
      "Next.js",
      "Gemini SDK",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
    description:
      "An AI-powered service orchestration hub that automatically analyzes team tasks, designs custom workflow maps, writes and tests boilerplate middleware functions, and connects API services. Employs semantic model alignment, custom vector index searches, and structured system feedback chains.",
    liveUrl: "https://synthflow.dev.studio",
    githubUrl: "https://github.com/marcusvance/synthflow-orchestrator",
  },
  {
    id: "proj-4",
    title: "Helios E-Commerce Portal",
    category: "Web Design",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    ],
    client: "Helios Retail Group",
    date: "September 2025",
    technologies: ["React", "Shopify API", "Tailwind CSS", "Vite", "Zustand"],
    description:
      "An elegant, highly accessible premium storefront for high-end boutique brands. Features full keyboard accessibility (WCAG AA certified), extremely responsive fast cart updates, clean product sliders, fluid search autocompletion, and personalized recommendation widgets.",
    liveUrl: "https://helios-shop.dev.studio",
    githubUrl: "https://github.com/marcusvance/helios-shop",
  },
  {
    id: "proj-5",
    title: "Apex Landing Page",
    category: "Web Design",
    thumbnail:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    ],
    client: "Apex SaaS Group",
    date: "July 2025",
    technologies: ["HTML5", "CSS Grid", "Tailwind CSS", "GSAP"],
    description:
      "A breathtaking high-converting SaaS landing page highlighting futuristic glassmorphism elements, custom svg scroll illustrations, interactive product sliders, and dynamic price configuration grids. Achieve a full 100% Core Web Vitals score on all viewports.",
    liveUrl: "https://apex-landing.dev.studio",
    githubUrl: "https://github.com/marcusvance/apex-landing",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Mastering Clean Architecture & Type Safety in Modern React",
    excerpt:
      "Learn how to structure enterprise React folders, enforce absolute type-safety with TypeScript, and decouple business operations from UI layers.",
    content: `Building large-scale React applications is easy in the beginning, but quickly becomes a maintenance burden as components grow. Over years of engineering web platforms, I've consolidated key architectural principles that ensure a robust codebase.

### 1. The Single Source of Truth for Types
Always declare your interface contracts early. Create a standalone \`/src/types.ts\` where all domain objects are strictly defined. This isolates types and prevents dependency loops when multiple components reference the same types.

### 2. Separation of Business Concerns
Keep UI components strictly visual. Logic for API requests, complex transforms, or data validation should live in clean hook modules or pure helper files. For example, never load and parse an API payload directly inside your card component. Instead, map the server payload to your clean local types inside an API service or custom react-query hook.

### 3. Enforcing Strict Props
Avoid using \`any\` at all costs. Set up your TypeScript compiler with \`"noImplicitAny": true\` and \`"strict": true\`. Ensure that your component properties always represent the exact minimum required to render the component. Use utility types like \`Omit\` or \`Pick\` to compose props cleanly.

### 4. Code Splitting & Modularity
Do not consolidate all layout, styling, and state logic into a massive 1500-line single file (like \`App.tsx\`). Large files are hard to review, introduce merge conflicts, and exceed code generator limits. Move components into a logical sub-directory, split major pages into distinct views, and extract static configuration to specialized constant files.

By adhering to these patterns, your team will benefit from clean file trees, faster code reviews, and pristine test coverages.`,
    category: "Technical",
    date: "June 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Marcus Vance",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    tags: ["React", "TypeScript", "Clean Architecture", "Best Practices"],
  },
  {
    id: "post-2",
    title: "Designing for the Onyx Theme: Aesthetic Rules of Premium Dark UI",
    excerpt:
      "Discover the hidden rules behind high-contrast dark interfaces. Learn about relative luminance, gradient borders, and visual hierarchy.",
    content: `Many developers think implementing a dark theme is as simple as flipping the background to black (#000000) and the text to white (#FFFFFF). In reality, this pure binary approach causes intense eye fatigue, low visual hierarchy, and a cheap overall aesthetic. Premium interfaces utilize delicate, relative luminance values to create beautiful, comfortable dark systems.

### 1. Ditch the Absolute Black Background
Pure black causes a harsh "halo" effect on high-resolution displays. Premium "Onyx" or "Slate" interfaces use deep, tinted off-blacks, such as \`#0e1013\` or \`#121212\`. This slight tint dampens high contrast and offers a highly professional canvas.

### 2. Leverage Elevation Through Luminance
In a light theme, we use drop shadows to indicate elevation. In dark themes, drop shadows are often invisible. Instead, we convey elevation by making higher components **lighter** in background value:
- **Base Canvas**: \`#121212\`
- **First Elevated Card (Sidebar, Core Box)**: \`#1e1e1f\`
- **Sub-elements (Inputs, Badges)**: \`#282829\` or \`#323234\`

This layering guides the user's eye naturally from the background up to the active interactive elements.

### 3. Deliberate Gradient Borders
To make dark cards pop off a dark background without relying on heavy box-shadows, implement extremely thin, semi-transparent borders. A subtle linear gradient border that blends from a warm silver-amber (\`#ffffff15\` to \`#ffdb7015\`) creates an incredible glassmorphism gloss.

### 4. Warm Accent Colors
Pair your charcoal shades with soft, warm accents. A glowing amber or gold (\`#ffdb70\`) is the perfect pairing. It adds a touch of prestige and high craft, drawing attention directly to primary badges, status dots, and active navigation links.

Apply these rules in your next tailwind build to immediately lift your interface from basic to elite.`,
    category: "Design",
    date: "May 12, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Marcus Vance",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    tags: ["UI Design", "Tailwind CSS", "Dark Mode", "Aesthetics"],
  },
  {
    id: "post-3",
    title: "The Shift to ESM: Streamlining Bundles with Vite",
    excerpt:
      "An in-depth look at native ES Modules, removing HMR noise, and optimizing modern asset pipelines for high-performance builds.",
    content: `The modern web has finally embraced ES Modules (ESM) natively, letting us build and package code with incredible speed. For years, complex bundlers forced us to wait through long re-compilation loops. Tools like Vite have completely revolutionized this developer workflow.

### 1. How Vite Bypasses Traditional Bundling
Traditional bundlers (like Webpack or Rollup) compile and bundle your entire codebase before starting a development server. For massive applications, this process can take minutes. Vite bypasses this entirely by serving source files over native ESM. The browser requests individual files directly, and Vite compiles them on-demand.

### 2. Optimizing the Bundle for Production
While ESM-based development is rapid, production code still benefits from a unified bundle to avoid waterfalls of HTTP requests. Vite handles this beautifully by using Rollup for production builds. To optimize your production bundles:
- **Analyze dependency chunks**: Ensure large packages (like D3 or heavy chart libraries) are split into dedicated chunks.
- **Enable tree-shaking**: Import named exports explicitly rather than importing entire library packages.
- **Optimize asset paths**: Ensure responsive images use explicit height/width attributes and modern formats to minimize layout shifts.

### 3. Graceful Asset Serving in Hybrid Servers
When serving your React frontend alongside an Express backend, run Vite in middleware mode during development. This routes all asset requests through Vite's high-speed compiler, while production mode compiles static assets directly into a consolidated \`dist/\` folder. This gives you the best of both worlds: instant development updates and robust, lightning-fast container startup in production.

Embracing modern ESM patterns not only makes your applications faster, but keeps your dependencies modular, readable, and highly maintainable.`,
    category: "Web Ops",
    date: "March 05, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Marcus Vance",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    tags: ["Vite", "ESM", "Web Performance", "Build Tools"],
  },
];
