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

export const aboutBio = `Software Engineer with 1.5+ years of experience building backend systems and full-stack web applications using ASP.NET Core, Node.js, NestJS, React.js, and SQL Server. Experienced in developing scalable REST APIs, real-time GPS tracking systems, and enterprise-grade government solutions including Suthra Punjab. Strong expertise in database optimization, authentication systems, and clean architecture.`;

export const stats = [
  { icon: "briefcase", label: "1.5+ Years Experience" },
  { icon: "check", label: "5+ Projects Completed" },
  { icon: "graduation", label: "BS CS — NUTECH" },
  { icon: "map", label: "Rawalpindi, Pakistan" },
];

export const skillCategories = [
  {
    name: "Backend",
    skills: [
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express.js", icon: "express" },
      { name: "C#", icon: "csharp" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL Server", icon: "sqlserver" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Azure DevOps", icon: "azure" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Postman", icon: "postman" },
      { name: "JIRA", icon: "jira" },
      { name: "Visual Studio", icon: "visualstudio" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Suthra Punjab",
    emoji: "🏛️",
    description:
      "Live government waste management system handling high-volume transactional data with automated reporting workflows.",
    tech: ["ASP.NET Core", "SQL Server", "REST API"],
    category: "dotnet",
    professional: true,
    github: null,
    live: null,
  },
  {
    id: 2,
    title: "GPS Vehicle Tracking System",
    emoji: "🚗",
    description:
      "Real-time vehicle tracking with GPS ingestion, POI proximity logic, and automated alerting via SignalR.",
    tech: ["ASP.NET Core", "SQL Server", "SignalR"],
    category: "dotnet",
    professional: true,
    github: null,
    live: null,
  },
  {
    id: 3,
    title: "Sales Forecasting Tool",
    emoji: "📊",
    description:
      "ML-integrated e-commerce forecasting platform with interactive analytics dashboard and Node.js REST API.",
    tech: ["Node.js", "React.js", "Python", "MongoDB"],
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
      "Full MERN social platform with JWT auth, real-time feed, posts, likes, and comments.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    category: "mern",
    professional: false,
    github: "https://github.com/usama9293/scrollSafeApp",
    live: null,
  },
  {
    id: 5,
    title: "Todo App (Firebase)",
    emoji: "✅",
    description:
      "Task manager with real-time updates, Redux state management, and Firebase backend.",
    tech: ["React", "Redux", "Firebase"],
    category: "react",
    professional: false,
    github: "https://github.com/usama9293/todo-list",
    live: null,
  },
  {
    id: 6,
    title: "Blog Platform",
    emoji: "📝",
    description:
      "Full-stack blog platform with CRUD operations, user authentication, and rich content management.",
    tech: ["Node.js", "MongoDB", "EJS"],
    category: "node",
    professional: false,
    github: "https://github.com/usama9293/blog",
    live: null,
  },
  {
    id: 7,
    title: "Airbnb Clone",
    emoji: "🏠",
    description:
      "Property listing platform with search, filters, booking flow, and user reviews.",
    tech: ["Node.js", "EJS", "MongoDB"],
    category: "node",
    professional: false,
    github: "https://github.com/usama9293/airbnb",
    live: null,
  },
  {
    id: 8,
    title: "Selenium Automation Suite",
    emoji: "🧪",
    description:
      "Web automation test scripts for end-to-end testing of web applications.",
    tech: ["Selenium", "JavaScript"],
    category: "node",
    professional: false,
    github: "https://github.com/usama9293/selenium_project",
    live: null,
  },
];

export const projectFilters = ["All", ".NET", "MERN", "React", "Node.js"];

export const experience = [
  {
    company: "CodingKey",
    role: "Software Engineer (.NET / Node.js)",
    period: "Nov 2025 – Apr 2026",
    highlights: [
      "Developed API modules using ASP.NET Core and NestJS for high-volume business-critical workflows",
      "Optimized MySQL schemas and queries, improving response times by up to 40%",
      "Implemented JWT authentication and RBAC, reducing bug reports by ~20%",
      "Collaborated with React.js frontend developers following clean architecture principles",
    ],
  },
  {
    company: "AskTech Ltd.",
    role: "Software Engineer (ASP.NET Core)",
    period: "Mar 2025 – Nov 2025",
    highlights: [
      "Led backend development of Suthra Punjab — a live government Waste Management System",
      "Built real-time GPS vehicle tracking with automated alerting via SignalR",
      "Delivered ASP.NET Core Web APIs and SQL Server databases for 3+ enterprise clients",
      "Engineered schema optimizations reducing query response times across mission-critical workflows",
    ],
  },
  {
    company: "Pakistan International Airlines",
    role: "Web Developer Intern",
    period: "Aug 2023 – Sep 2023",
    highlights: [
      "Enhanced internal web applications using HTML, CSS, and JavaScript",
      "Improved UI structure and accessibility for better usability of internal tools",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "NUTECH, Islamabad",
  period: "Oct 2020 – Jun 2024",
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
