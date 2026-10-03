export const personalInfo = {
  name: "Usama Arshad",
  title: "Full Stack Developer",
  subtitle: "Building scalable backend systems & modern web applications",
  email: "usamaarshad9293@gmail.com",
  phone: "+92 342 4029990",
  location: "Rawalpindi, Pakistan",
  github: "https://github.com/usama9293",
  linkedin: "https://linkedin.com/in/usamaarshaddev",
  cvPath: "/cv.pdf",
  profileImage: "/profile.jpg",
  siteUrl: "https://usamaarshad.vercel.app",
};

export const typewriterRoles = [
  "Full Stack Developer",
  ".NET Engineer",
  "MERN Stack Developer",
  "Backend Engineer",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutBio = `Software Engineer with professional experience building backend systems and full-stack web applications using ASP.NET Core, C#, Node.js, NestJS, React.js, and SQL databases. Experienced in developing REST APIs, authentication and authorization systems, database-driven applications, and real-time tracking solutions.

I've worked on enterprise and government projects as well as independent applications, with a focus on clean architecture, maintainable code, and practical software engineering. I'm also currently expanding my knowledge in Linux, networking, and cybersecurity.`;

export const stats = [
  { icon: "briefcase", label: "1.5+ Years Experience" },
  { icon: "graduation", label: "BS CS — NUTECH" },
  { icon: "map", label: "Rawalpindi, Pakistan" },
];

export const skillCategories = [
  {
    name: "Backend",
    skills: [
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "REST APIs", icon: "rest" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "Microsoft SQL Server", icon: "sqlserver" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Entity Framework Core", icon: "entity-framework" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Azure DevOps", icon: "azure" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
      { name: "Clean Architecture", icon: "clean-architecture" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MedLine Rural — Medical Supply & Delivery Management System",
    emoji: "🏥",
    description:
      "Built a web-based medical supply and delivery management system for rural and remote clinics, covering inventory, supply requests, shipments, vehicles, and drivers. Implemented role-based access control, clinic-level data isolation, shipment tracking, simulated GPS/temperature telemetry, alerts, and operational dashboards.",
    tech: ["PHP", "MySQL", "JavaScript"],
    category: "php",
    professional: false,
    github: null,
    live: null,
  },
  {
    id: 2,
    title: "Complaint Management System",
    emoji: "📋",
    description:
      "Developed a backend-centric complaint management system using ASP.NET Core and SQL Server, with REST APIs for managing complaint workflows and application data.",
    tech: ["ASP.NET Core", "SQL Server", "REST APIs"],
    category: "dotnet",
    professional: false,
    github: null,
    live: null,
  },
  {
    id: 3,
    title: "Sales Forecasting Tool for E-commerce",
    emoji: "📊",
    description:
      "Built an e-commerce sales forecasting tool integrating machine-learning-based forecasting with a Node.js REST API and React dashboard for visualizing forecasting results.",
    tech: ["Node.js", "React.js", "Python"],
    category: "node",
    professional: true,
    github: null,
    live: null,
  },
  {
    id: 4,
    title: "ScrollSafeApp",
    emoji: "📱",
    description:
      "Built a social media web application with user profiles, posts, likes, comments, and content exploration.",
    tech: ["React.js", "Node.js", "MongoDB"],
    category: "react",
    professional: false,
    github: "https://github.com/usama9293/scrollSafeApp",
    live: null,
  },
  {
    id: 5,
    title: "Suthra Punjab Waste Management System",
    emoji: "♻️",
    description:
      "Worked on a government waste management system supporting backend services, application workflows, and data-driven operations for waste management activities.",
    tech: ["ASP.NET Core", "SQL Server", "REST APIs"],
    category: "dotnet",
    professional: true,
    github: null,
    live: null,
  },
  {
    id: 6,
    title: "Real-Time GPS Vehicle Tracking System",
    emoji: "🚗",
    description:
      "Developed a real-time vehicle tracking system with GPS data handling, point-of-interest proximity logic, and automated alerts using SignalR.",
    tech: ["ASP.NET Core", "SQL Server", "SignalR"],
    category: "dotnet",
    professional: true,
    github: null,
    live: null,
  },
];

export const projectFilters = ["All", ".NET", "PHP", "Node.js", "React"];

export const experience = [
  {
    company: "CodingKey",
    role: "Software Engineer",
    location: "Islamabad, Pakistan",
    period: "Nov 2025 – Apr 2026",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Node.js",
      "NestJS",
      "TypeScript",
      "MySQL",
      "REST APIs",
      "JWT",
      "Clean Architecture",
    ],
    highlights: [
      "Developed RESTful APIs and backend services using ASP.NET Core, C#, Node.js, and NestJS.",
      "Designed and optimized MySQL database schemas and queries for application features.",
      "Implemented JWT-based authentication and role-based authorization.",
      "Applied Clean Architecture principles and collaborated with frontend and QA teams to develop, test, and troubleshoot application features.",
    ],
  },
  {
    company: "AskTech (Pvt) Ltd.",
    role: "Software Engineer",
    location: "Rawalpindi, Pakistan",
    period: "Mar 2025 – Nov 2025",
    technologies: [
      "C#",
      "ASP.NET Core",
      ".NET",
      "SQL Server",
      "Web API",
      "REST APIs",
      "Entity Framework Core",
      "Git",
      "Azure DevOps",
    ],
    highlights: [
      "Developed ASP.NET Core Web APIs and SQL Server solutions for enterprise applications.",
      "Worked on the Suthra Punjab Waste Management System, a government waste management platform, supporting reporting and operational workflows.",
      "Built a real-time GPS vehicle tracking system with POI detection and automated alerts.",
      "Optimized SQL queries and integrated third-party APIs to improve application reliability and performance.",
    ],
  },
  {
    company: "Islamabad Solar House",
    role: "Technical Sales Engineer",
    location: "Islamabad, Pakistan",
    period: "Sep 2024 – Jan 2025",
    technologies: ["Technical Consulting", "Client Communication", "Solution Analysis"],
    highlights: [
      "Consulted with clients to understand their energy requirements and recommended suitable solar energy solutions.",
      "Collaborated with the technical team to support the implementation of solar energy systems.",
    ],
  },
  {
    company: "Pakistan International Airlines",
    role: "Web Developer Intern",
    location: "Islamabad, Pakistan",
    period: "Aug 2023 – Sep 2023",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Enhanced internal web applications using HTML, CSS, and JavaScript, focusing on usability and frontend improvements.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "National University of Technology (NUTECH), Islamabad, Pakistan",
  period: "2020 – 2024",
};

export const certifications = [
  "HTML & CSS in Depth — Coursera",
  "Node.js Essential Training — LinkedIn Learning",
  "Software Testing/QA — LinkedIn Learning",
  "Version Control with Git — Coursera",
];

export const volunteering = [
  {
    role: "Treasurer",
    org: "NUTECH Literary & Debating Club",
    period: "2022–2023",
    description: "Managed finances and coordinated events.",
  },
  {
    role: "Event Lead",
    org: "Microsoft Learn Student Ambassador",
    period: "2023–2024",
    description: "Organized tech events and workshops.",
  },
];
