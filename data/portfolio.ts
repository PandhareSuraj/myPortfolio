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
    slug: "eduflow",
    name: "EduFlow",
    eyebrow: "Education management platform",
    description: "A full-stack education management platform for running student, academic, finance, hostel, transport, and library workflows in one place.",
    image: "/images/projects/eduflow/preview.png",
    gallery: ["/images/projects/eduflow/preview.png"],
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    features: ["Student lifecycle management", "Academic and finance modules", "Role-based administration", "Analytics dashboards"],
    github: "https://github.com/PandhareSuraj/EduFlow",
    demo: "https://edu-flow-alpha-sable.vercel.app",
    updatedAt: "2026-06-29T07:03:26Z",
    impact: "Brings institution-wide operations into one responsive management platform.",
    caseStudy: {
      problem: "Educational institutions often manage student records, academics, payments, facilities, and communication across disconnected systems.",
      solution: "EduFlow unifies the core workflows in a responsive React application backed by Supabase, with focused modules and role-aware administration.",
      outcome: "The project demonstrates the architecture and product thinking needed to turn complex institutional operations into a clear digital experience."
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
