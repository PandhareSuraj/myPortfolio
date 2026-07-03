export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  updatedAt: string;
  impact: string;
  caseStudy: {
    problem: string;
    solution: string;
    outcome: string;
  };
};

export const profile = {
  name: "Suraj Pandhare",
  role: "Full Stack Developer & Android Developer",
  location: "Sangamner, Maharashtra",
  email: "surajpandharex@gmail.com",
  github: "https://github.com/PandhareSuraj",
  linkedin: "https://www.linkedin.com/in/suraj-pandhare/",
  whatsapp: "https://wa.me/?text=Hello%20Suraj%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
  resume: "/Suraj-Pandhare-Resume.pdf"
};

export const skills = {
  Programming: ["Java", "Kotlin", "Python", "PHP", "JavaScript", "C", "C++"],
  Frontend: ["HTML", "CSS", "Bootstrap", "React"],
  Backend: ["PHP", "CodeIgniter", "REST APIs"],
  Mobile: ["Android Studio", "Kotlin", "Jetpack Compose"],
  Database: ["PostgreSQL", "Supabase", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Android Studio"]
};

export const projects: Project[] = [
  {
    slug: "dairyflow",
    name: "DairyFlow",
    eyebrow: "Android business operations",
    description: "A Kotlin-powered mobile workflow for dairy product businesses to manage products, daily activity, and operational visibility.",
    image: "/images/projects/dairyflow/dashboard.png",
    gallery: [
      "/images/projects/dairyflow/dashboard.png",
      "/images/projects/dairyflow/customer-calendar.png",
      "/images/projects/dairyflow/performance.png",
      "/images/projects/dairyflow/deliveries.png"
    ],
    technologies: ["Kotlin", "Android Studio", "Jetpack Compose", "REST APIs"],
    features: ["Product workflow modules", "Mobile-first operational dashboard", "Clean Android architecture", "Business-ready UX"],
    github: "https://github.com/PandhareSuraj/DairyFlow",
    demo: "https://github.com/PandhareSuraj/DairyFlow",
    updatedAt: "2026-06-04T16:20:50Z",
    impact: "Designed for faster daily dairy business management.",
    caseStudy: {
      problem: "Small dairy teams need simple mobile tools that reduce manual tracking and keep operations visible.",
      solution: "DairyFlow focuses on a lightweight Android experience with structured product and activity flows.",
      outcome: "The project demonstrates Suraj's ability to build practical, domain-specific mobile applications."
    }
  },
  {
    slug: "enjoy-free-deals",
    name: "EnjoyFreeDeals",
    eyebrow: "Deals discovery app",
    description: "A Kotlin Android app concept for surfacing free deals and offers through a clean, fast mobile experience.",
    image: "/images/portfolio.png",
    gallery: ["/images/portfolio.png", "/images/app.svg", "/images/web.svg"],
    technologies: ["Kotlin", "Android", "Material UI", "GitHub"],
    features: ["Offer-focused interface", "Responsive mobile screens", "Reusable UI patterns", "Fast browsing flow"],
    github: "https://github.com/PandhareSuraj/EnjoyFreeDeals",
    demo: "https://github.com/PandhareSuraj/EnjoyFreeDeals",
    updatedAt: "2026-05-18T05:34:07Z",
    impact: "Turns offer discovery into a simple mobile-first journey.",
    caseStudy: {
      problem: "Users need a low-friction way to browse useful deals without visual clutter.",
      solution: "The app organizes deal content into clear Android screens and reusable components.",
      outcome: "It strengthens the mobile portfolio with a consumer-facing product pattern."
    }
  },
  {
    slug: "college-campus-store-management",
    name: "College Campus Store Management",
    eyebrow: "Web management system",
    description: "A supply-management system for schools and colleges, built around inventory clarity, order handling, and administrative workflows.",
    image: "/images/web.svg",
    gallery: ["/images/web.svg", "/images/Resume.png", "/images/portfolio.png"],
    technologies: ["PHP", "Blade", "MySQL", "Bootstrap"],
    features: ["Inventory management", "Admin workflow screens", "Supply tracking", "Role-aware modules"],
    github: "https://github.com/PandhareSuraj/CollegeCampusStoreManagement",
    demo: "https://github.com/PandhareSuraj/CollegeCampusStoreManagement",
    updatedAt: "2026-05-10T06:41:14Z",
    impact: "Helps education teams digitize store and supply operations.",
    caseStudy: {
      problem: "Campus stores often rely on fragmented manual records for stock and supplies.",
      solution: "The system centralizes inventory, supply activity, and admin tasks into a web interface.",
      outcome: "It shows full-stack thinking across database-backed administrative software."
    }
  },
  {
    slug: "agrihydrox",
    name: "AgriHydrox",
    eyebrow: "Agritech web platform",
    description: "An agriculture-focused web project with a clean informational interface and practical digital presence for agritech ideas.",
    image: "/images/Agrihydrox.png",
    gallery: ["/images/Agrihydrox.png", "/images/web.svg", "/images/seo.svg"],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: ["Agritech landing experience", "Responsive sections", "Clear service messaging", "SEO-ready structure"],
    github: "https://github.com/PandhareSuraj/AgriHydrox",
    demo: "https://github.com/PandhareSuraj/AgriHydrox",
    updatedAt: "2025-11-10T18:18:13Z",
    impact: "Presents agriculture solutions with a polished digital interface.",
    caseStudy: {
      problem: "Agriculture-focused initiatives need trustworthy, easy-to-understand web presentation.",
      solution: "AgriHydrox uses clear sections, project visuals, and responsive layout choices.",
      outcome: "The project adds web design depth alongside Suraj's application-development work."
    }
  },
  {
    slug: "sericulture-management-system",
    name: "Sericulture Management System",
    eyebrow: "Domain management platform",
    description: "A sericulture-oriented management project designed to organize domain-specific records and workflows.",
    image: "/images/sericulture.png",
    gallery: ["/images/sericulture.png", "/images/web.svg", "/images/dm.svg"],
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    features: ["Domain-specific modules", "Record management", "Simple admin flows", "Scalable project structure"],
    github: "https://github.com/PandhareSuraj/SericultureManagementSystem",
    demo: "https://github.com/PandhareSuraj/SericultureManagementSystem",
    updatedAt: "2025-11-11T13:38:57Z",
    impact: "Digitizes specialized sericulture workflows.",
    caseStudy: {
      problem: "Specialized agriculture domains need software tailored to their real workflows.",
      solution: "The project models sericulture records and management actions in a simple system.",
      outcome: "It highlights Suraj's ability to learn domains and translate them into software."
    }
  }
];

export const services = [
  "Full-stack web application development",
  "Android application development",
  "API integration and backend dashboards",
  "Portfolio, business, and startup landing pages",
  "Database design with MySQL, PostgreSQL, and Supabase",
  "Code cleanup, UI modernization, and deployment support"
];

export const testimonials = [
  {
    quote: "Suraj brings a calm, product-focused mindset to development and turns requirements into clean working screens.",
    name: "Project Mentor",
    role: "Academic Guide"
  },
  {
    quote: "His ability to work across Android, backend, and frontend makes collaboration faster and more practical.",
    name: "Team Collaborator",
    role: "Developer Peer"
  },
  {
    quote: "The work feels thoughtful, responsive, and reliable for internship and freelance opportunities.",
    name: "Client Review",
    role: "Startup Founder"
  }
];

export const certifications = [
  "Full Stack Development Coursework",
  "Android Development with Kotlin",
  "Database Management Systems",
  "Web Development and Responsive UI"
];

export const timeline = [
  {
    year: "2026",
    title: "MCS Student",
    body: "Building advanced software development depth through computer science coursework and project work."
  },
  {
    year: "2025",
    title: "Full Stack & Android Projects",
    body: "Created web, mobile, and database-backed systems across agriculture, campus stores, and business workflows."
  },
  {
    year: "2024",
    title: "Programming Foundation",
    body: "Strengthened Java, C, C++, Python, PHP, JavaScript, SQL, and modern development tools."
  }
];
