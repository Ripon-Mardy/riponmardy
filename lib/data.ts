import riponmardy from "../public/ripon mardy.jpg";

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
  name: "Ripon Mardy",
  title: "AI-Driven Full Stack Software Engineer",
  subTitle: "I design, build, and deploy modern web applications.",
  avatar: riponmardy,
  bio: `Full Stack Software Engineer with 2+ years of experience, including 1.5 years of remote work, building scalable, production-ready web applications using the MERN stack and Next.js. Passionate about writing clean, maintainable code and developing high-performance applications. Experienced in delivering end-to-end solutions, from responsive frontend interfaces to secure backend APIs, for real-world clients and business requirements.`,
  cvUrl: "#",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Ripon-Mardy",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/riponmardy/",
    icon: "Linkedin",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+8801320585642",
    icon: "Whatsapp",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/mardyripon10/",
    icon: "Leetcode",
  },
];

export const contactInfo: ContactInfo = {
  email: "mardyripon10@gmail.com",
  phone: "+0880 1320585642",
  birthday: "July 23, 2001",
  location: "Dhaka, Bangladesh",
};

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    description:
      "Designing and developing scalable, production-ready web applications using React, Next.js, TypeScript, Node.js, and MongoDB with a focus on clean architecture and high performance.",
    icon: "Layout",
  },
  {
    id: "API Development",
    title: "API Design & Backend Engines",
    description:
      "Building secure and maintainable RESTful APIs, implementing authentication, authorization, database integration, and efficient server-side business logic.",
    icon: "Cpu",
  },
  {
    id: "Modern UI Engineering",
    title: "High-Fidelity UI/UX Systems",
    description:
      "Crafting responsive, accessible, and user-friendly interfaces with Tailwind CSS, transforming designs into smooth and engaging user experiences..",
    icon: "Figma",
  },
  {
    id: "AI-Driven Development",
    title: "AI Integration & Analytics",
    description:
      "Using modern AI tools to accelerate development, improve code quality, automate repetitive tasks, and build smarter web applications while ensuring reliability through manual validation.",
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
    text: "Ripon is an extraordinary talent. He stepped in to architect our flagship dashboard interface, delivering it two weeks ahead of schedule. The code quality, loading speed, and sheer aesthetic polish exceeded all our stakeholders' expectations.",
    date: "May 2026",
  },
  {
    id: "test-2",
    name: "Devon Carter",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    role: "Founder of SynthFlow",
    text: "Ripon brought a level of technical rigor and design craftsmanship that is rare in full-stack engineers. He didn't just write server APIs; he refined our layout, established our token system, and implemented highly fluid motion sequences.",
    date: "April 2026",
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    role: "Engineering Director at ApexLab",
    text: "Collaborating with Ripon was a breeze. He has an incredible ability to communicate complex architecture issues simply, and his standard for type-safety and automated testing saved us weeks of post-launch debugging.",
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
    title: "Bachelor of Science in Computer Science & Engineering",
    subtitle: "Dhaka International University",
    period: "2024 — Present",
    description:
      "Specialized in Software Systems and Human-Computer Interaction. Researched high-efficiency rendering pipelines and client-side web optimizations.",
  },
  {
    id: "edu-2",
    title: "Diploma in CSE",
    subtitle: "Aptouch Polytechnic Institute",
    period: "2020 — 2024",
    description:
      "Focused on foundational programming, data structures, and web development. Completed a capstone project on real-time collaborative web applications.",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Full Stack Software Developer",
    subtitle: "Freelance & Remote",
    period: "2022 — Present",
    description:
      "Developing modern, scalable web applications using React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Delivered end-to-end solutions for clients, including responsive user interfaces, RESTful APIs, authentication systems, and database integration. Focused on clean architecture, performance optimization, and maintainable code.",
  },
  {
    id: "exp-2",
    title: "Frontend Developer",
    subtitle: "Mathmozo It - Remote",
    period: "2023 — 2025",
    description:
      "Built responsive and user-friendly web applications with React, Next.js, JavaScript, and Tailwind CSS. Collaborated with backend developers to integrate REST APIs, improve application performance, and deliver production-ready features while following modern development practices.",
  },
  {
    id: "exp-3",
    title: "Personal Projects & Continuous Learning",
    subtitle: "Ongoing",
    period: "2021 — Present",
    description:
      "Maintaining a portfolio of open-source projects on GitHub, contributing to Next.js and React ecosystems. Regularly exploring AI-assisted development tools, TypeScript advanced patterns, and performance profiling techniques to stay at the forefront of web engineering.",
  },
];

export const skills: SkillItem[] = [
  // Frontend
  {
    name: "Next.js (App Router)",
    percentage: 90,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "React.js",
    percentage: 92,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "TypeScript",
    percentage: 88,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "JavaScript (ES6+)",
    percentage: 94,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    percentage: 92,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "Redux Toolkit",
    percentage: 85,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "shadcn/ui",
    percentage: 82,
    level: "Intermediate",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    percentage: 85,
    level: "Advanced",
    category: "frontend",
  },
  {
    name: "HTML5 & CSS3",
    percentage: 95,
    level: "Advanced",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    percentage: 88,
    level: "Advanced",
    category: "backend",
  },
  {
    name: "Express.js",
    percentage: 90,
    level: "Advanced",
    category: "backend",
  },
  {
    name: "REST APIs",
    percentage: 90,
    level: "Advanced",
    category: "backend",
  },
  {
    name: "JWT Authentication",
    percentage: 85,
    level: "Advanced",
    category: "backend",
  },
  {
    name: "RBAC",
    percentage: 80,
    level: "Intermediate",
    category: "backend",
  },

  // Database
  {
    name: "MongoDB",
    percentage: 90,
    level: "Advanced",
    category: "database",
  },
  {
    name: "PostgreSQL",
    percentage: 75,
    level: "Intermediate",
    category: "database",
  },
  {
    name: "MySQL",
    percentage: 70,
    level: "Intermediate",
    category: "database",
  },
  {
    name: "CRUD Operations",
    percentage: 95,
    level: "Advanced",
    category: "database",
  },
  {
    name: "Database Design",
    percentage: 80,
    level: "Intermediate",
    category: "database",
  },
  {
    name: "Query Optimization",
    percentage: 75,
    level: "Intermediate",
    category: "database",
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    percentage: 92,
    level: "Advanced",
    category: "tools",
  },
  {
    name: "Docker",
    percentage: 70,
    level: "Intermediate",
    category: "tools",
  },
  {
    name: "CI/CD",
    percentage: 65,
    level: "Intermediate",
    category: "tools",
  },
  {
    name: "Postman",
    percentage: 90,
    level: "Advanced",
    category: "tools",
  },
  {
    name: "Figma",
    percentage: 80,
    level: "Intermediate",
    category: "tools",
  },
  {
    name: "Linux / Ubuntu",
    percentage: 88,
    level: "Advanced",
    category: "tools",
  },
  {
    name: "Nginx",
    percentage: 65,
    level: "Intermediate",
    category: "tools",
  },
  {
    name: "PM2",
    percentage: 70,
    level: "Intermediate",
    category: "tools",
  },
  {
    name: "WordPress",
    percentage: 75,
    level: "Intermediate",
    category: "tools",
  },

  // AI & Developer Tools
  {
    name: "OpenAI API",
    percentage: 85,
    level: "Advanced",
    category: "ai",
  },
  {
    name: "Claude",
    percentage: 90,
    level: "Advanced",
    category: "ai",
  },
  {
    name: "GitHub Copilot",
    percentage: 92,
    level: "Advanced",
    category: "ai",
  },
  {
    name: "Cursor AI",
    percentage: 92,
    level: "Advanced",
    category: "ai",
  },
  {
    name: "Google AI Studio",
    percentage: 85,
    level: "Advanced",
    category: "ai",
  },
  {
    name: "Gemini",
    percentage: 88,
    level: "Advanced",
    category: "ai",
  },

  // Familiar With
  {
    name: "AWS",
    percentage: 60,
    level: "Beginner",
    category: "familiar",
  },
  {
    name: "Vue.js",
    percentage: 55,
    level: "Beginner",
    category: "familiar",
  },
  {
    name: "Angular",
    percentage: 50,
    level: "Beginner",
    category: "familiar",
  },
];

// portfolio
// import portfolio3 from "../public/portfolio/portfolio1.png";
// import portfolio2 from "../public/portfolio/portfolio2.webp";
import portfolio1 from "../public/portfolio/hyori.png";
import porfolio2 from "../public/portfolio/jonosokti.png";
import portfolio3 from "../public/portfolio/buybee.png";
import portfolio4 from "../public/portfolio/nextjsdashboard.png";
import portfolio5 from "../public/portfolio/sensor-shop.png";
import portfolio6 from "../public/portfolio/umbd.png";
import portfolio7 from "../public/portfolio/oxford.webp";
import portfolio8 from "../public/portfolio/telescopebd.png";
import portfolio9 from "../public/portfolio/inteltec.webp";

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Hyori Organic food",
    category: "Web Application",
    thumbnail: portfolio1,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "Hyori Organic Food is a full-stack e-commerce web application for buying fresh and organic products online. It features user authentication, product management, shopping cart, and an admin dashboard. Built with Next.js, Node.js, Express, and MongoDB, following scalable and industry-level practices.",
    live: "https://hyori-organic-food.vercel.app/",
    github: "https://github.com/Ripon-Mardy/Hyori-Organic-food",
  },
  {
    id: "proj-2",
    title: "Jonosokti",
    category: "Web Application",
    thumbnail: porfolio2,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "Jonosokti is a modern web platform developed using Next.js, designed for fast performance, scalability, and a smooth user experience.",
    live: "https://www.jonosokti.com/",
    github: "https://github.com/Ripon-Mardy/jonosokti",
  },
  {
    id: "proj-3",
    title: "BuyBee",
    category: "Web Application",
    thumbnail: portfolio3,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "This project is a frontend e-commerce application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. It includes responsive pages, reusable components, and mock data to simulate real-world e-commerce functionality.",
    live: "https://buybee-rosy.vercel.app/",
    github: "https://github.com/Ripon-Mardy/BuyBee",
  },
  {
    id: "proj-4",
    title: "Nextjs-dashboard",
    category: "Web Application",
    thumbnail: portfolio4,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "A clean and responsive dashboard sidebar built with Next.js, Tailwind CSS, and Lucide icons.",
    live: "https://nextjs-dashboard-beta-olive-28.vercel.app/",
    github: "https://github.com/Ripon-Mardy/nextjs-dashboard",
  },
  {
    id: "proj-5",
    title: "Sensor-Shop ",
    category: "Web Application",
    thumbnail: portfolio5,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "A Next.js-based Sensor-Shop website focused on presenting electronic sensor products. The project includes responsive UI, optimized performance, and structured product listings for easy browsing.",
    live: "https://sensor-shopbd.com/",
    github: "https://github.com/Ripon-Mardy/Sensor-Shop",
  },
  {
    id: "proj-6",
    title: "United Machinery Bangladesh  ",
    category: "Web Application",
    thumbnail: portfolio6,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "A Next.js-based Sensor-Shop website focused on presenting electronic sensor products. The project includes responsive UI, optimized performance, and structured product listings for easy browsing.",
    live: "https://umbd.net/",
    github: "https://github.com/Ripon-Mardy/united",
  },
  {
    id: "proj-7",
    title: "Oxford UI Design",
    category: "Web Application",
    thumbnail: portfolio7,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    description:
      "Oxford UI Design is a professional UI concept emphasizing simplicity, readability, and consistency. The design prioritizes user experience with a clean visual hierarchy and responsive layout.",
    live: "https://oxford-nine.vercel.app/",
    github: "https://github.com/Ripon-Mardy/Oxford",
  },
  {
    id: "proj-8",
    title: "telescopebd",
    category: "Web Application",
    thumbnail: portfolio8,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: ["HTML5", "CSS", "JavaScript", "React.js", "Next.js"],
    description:
      "A state-of-the-art interactive data monitoring terminal for industrial systems. It displays hundreds of real-time server streams simultaneously using GPU-accelerated canvas grids, fully interactive zoomable timelines, and customizable bento-grid layouts. Highly optimized for massive data throughput with virtualized rows and zero-rerender updates.",
    live: "https://telescopebd.vercel.app/",
    github: "https://github.com/Ripon-Mardy/telescopebd",
  },
  {
    id: "proj-9",
    title: "inteltec",
    category: "Web Application",
    thumbnail: portfolio9,
    client: "Quantum Analytics Inc.",
    date: "January 2026",
    technologies: ["HTML5", "CSS", "JavaScript", "React.js", "Next.js"],
    description:
      "A state-of-the-art interactive data monitoring terminal for industrial systems. It displays hundreds of real-time server streams simultaneously using GPU-accelerated canvas grids, fully interactive zoomable timelines, and customizable bento-grid layouts. Highly optimized for massive data throughput with virtualized rows and zero-rerender updates.",
    live: "https://inteltec.vercel.app/",
    github: "https://github.com/Ripon-Mardy/inteltec",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
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
      name: "Ripon Mardy",
      avatar: riponmardy,
    },
  },
  {
    id: 2,
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
      name: "Ripon Mardy",
      avatar: riponmardy,
    },
  },
  {
    id: 3,
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
      name: "Ripon Mardy",
      avatar: riponmardy,
    },
  },
];
