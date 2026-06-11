# 🚀 Usama Arshad — Portfolio Requirements & Build Guide

## 🎯 Goal
Build a modern, dark-mode React portfolio deployed on Vercel in 1 day.
Live at: `usamaarshad.vercel.app` (or similar)

---

## 🛠️ Tech Stack
- **Framework:** React.js + Vite (fast build)
- **Styling:** Tailwind CSS + Framer Motion (animations)
- **Icons:** React Icons / Lucide React
- **SEO:** React Helmet Async
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics (free)

---

## 🎨 Design
- **Theme:** Dark mode only (bg: #0a0a0a, cards: #111111)
- **Accent color:** Cyan/Blue gradient (#06b6d4 → #3b82f6)
- **Font:** Inter (headings) + Fira Code (code snippets)
- **Style:** Minimal, clean, developer-focused
- **Animations:** Subtle fade-in on scroll, typing effect on hero

---

## 📄 Sections (in order)

### 1. 🔝 Navbar
- Logo: `<UA />` in code style
- Links: Home, About, Skills, Projects, Experience, Contact
- Sticky on scroll with blur background
- Mobile hamburger menu

### 2. 🦸 Hero Section
- Animated typing text: "Full Stack Developer", ".NET Engineer", "MERN Developer"
- Name: **Usama Arshad**
- Subtitle: "Building scalable backend systems & modern web apps"
- CTA buttons: `Download CV` + `View Projects`
- Social icons: GitHub, LinkedIn
- Subtle particle or gradient background animation

### 3. 👤 About Section
- Short bio paragraph
- Profile photo (add your photo)
- Quick stats cards:
  - 🏢 1.5+ Years Experience
  - ✅ 5+ Projects Completed
  - 🎓 BS CS — NUTECH
  - 📍 Rawalpindi, Pakistan

### 4. 🛠️ Skills Section
- Grouped skill badges with icons:
  **Backend:** ASP.NET Core, Node.js, NestJS, Express.js, C#
  **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS
  **Databases:** SQL Server, MySQL, MongoDB, PostgreSQL
  **DevOps:** Docker, Azure DevOps, Git, GitHub
  **Tools:** Postman, JIRA, Visual Studio, VS Code
- Progress bars or animated skill cards

### 5. 💼 Projects Section
- Card grid (3 columns desktop, 1 mobile)
- Each card has:
  - Project name + emoji
  - Short description
  - Tech stack tags
  - GitHub link button
  - Live demo button (if available)

**Projects to include:**

#### 🏛️ Suthra Punjab (Professional)
- Live government waste management system
- Tech: ASP.NET Core, SQL Server, REST API
- Note: "Professional project — code in private repo"
- No GitHub link (private)

#### 🚗 GPS Vehicle Tracking System (Professional)
- Real-time tracking with automated alerts
- Tech: ASP.NET Core, SQL Server, SignalR
- Note: "Professional project — code in private repo"

#### 📊 Sales Forecasting Tool (Professional)
- ML-integrated forecasting platform
- Tech: Node.js, React.js, Python, MongoDB
- Note: "Professional project"

#### 📱 ScrollSafeApp
- Full MERN Instagram-like social platform
- Tech: MongoDB, Express, React, Node.js, JWT
- GitHub: https://github.com/usama9293/scrollSafeApp

#### ✅ Todo App (Firebase)
- Task manager with real-time updates
- Tech: React, Redux, Firebase
- GitHub: https://github.com/usama9293/todo-list
- Live: (deploy on Vercel)

#### 📝 Blog Platform
- Full-stack blog with CRUD
- Tech: Node.js, MongoDB, EJS
- GitHub: https://github.com/usama9293/blog

#### 🏠 Airbnb Clone
- Property listing platform
- Tech: Node.js, EJS, MongoDB
- GitHub: https://github.com/usama9293/airbnb

#### 🧪 Selenium Automation Suite
- Web automation test scripts
- Tech: Selenium, JavaScript
- GitHub: https://github.com/usama9293/selenium_project

### 6. 💼 Experience Section
- Timeline style (vertical line)

**CodingKey** — Software Engineer (.NET / Node.js)
Nov 2025 – Apr 2026
- Developed API modules using ASP.NET Core and NestJS
- Optimized MySQL schemas improving response times by 40%
- Implemented JWT authentication reducing bugs by 20%

**AskTech Ltd.** — Software Engineer (ASP.NET Core)
Mar 2025 – Nov 2025
- Led backend of Suthra Punjab (live govt system)
- Built GPS vehicle tracking with automated alerting
- Delivered APIs for 3+ enterprise clients

**Pakistan International Airlines** — Web Developer Intern
Aug 2023 – Sep 2023
- Enhanced internal web applications
- Improved UI and accessibility

### 7. 🎓 Education Section
- **BS Computer Science** — NUTECH, Islamabad
  Oct 2020 – Jun 2024
- Certifications:
  - HTML & CSS in Depth — Coursera
  - Node.js Essential Training — LinkedIn Learning
  - Software Testing/QA — LinkedIn Learning
  - Version Control with Git — Coursera

### 8. 📬 Contact Section
- Email: usamaarshad9293@gmail.com
- Phone: +92 342 4029990
- Location: Rawalpindi, Pakistan
- Social: GitHub + LinkedIn
- Simple contact form (use EmailJS — free)
- Big CTA: "Download CV" button

### 9. 🦶 Footer
- Copyright: © 2025 Usama Arshad
- Quick nav links
- Social icons

---

## 🔍 SEO Requirements

Add to every page via React Helmet:
```jsx
<Helmet>
  <title>Usama Arshad — Full Stack Developer | .NET | Node.js | React</title>
  <meta name="description" content="Usama Arshad is a Full Stack Software Engineer from Rawalpindi, Pakistan with 1.5+ years experience in ASP.NET Core, Node.js, React.js and SQL Server." />
  <meta name="keywords" content="Usama Arshad, Software Engineer Pakistan, .NET Developer Rawalpindi, Full Stack Developer Islamabad, React Developer Pakistan, Node.js Developer" />
  <meta property="og:title" content="Usama Arshad — Full Stack Developer" />
  <meta property="og:description" content="Software Engineer with 1.5+ years experience in .NET, Node.js and React.js" />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://usamaarshad.vercel.app" />
  <link rel="canonical" href="https://usamaarshad.vercel.app" />
</Helmet>
```

Also add:
- `sitemap.xml`
- `robots.txt`
- `manifest.json`
- Alt text on all images
- Semantic HTML (header, main, section, article, footer)

---

## ✨ Advanced Features
- [ ] Dark mode only (no toggle needed)
- [ ] Smooth scroll between sections
- [ ] Scroll progress bar at top
- [ ] Back to top button
- [ ] Copy email to clipboard button
- [ ] Typing animation in hero (Typewriter effect)
- [ ] Fade-in animations on scroll (Framer Motion)
- [ ] GitHub stats widget
- [ ] Toast notification on form submit
- [ ] CV download button (PDF)
- [ ] Loading screen with logo animation
- [ ] Mobile fully responsive
- [ ] Vercel Analytics

---

## 📁 Folder Structure
```
portfolio/
├── public/
│   ├── cv.pdf          ← your resume PDF
│   ├── og-image.png    ← social share image
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  ← all content in one file
│   ├── App.jsx
│   └── main.jsx
```

---

## 🤖 AI Prompts to Build Each Section

### Prompt 1 — Project Setup
```
Create a React + Vite portfolio with Tailwind CSS and Framer Motion.
Dark theme only. Background #0a0a0a, cards #111111, accent cyan-500 to blue-500.
Font: Inter. Set up React Router, React Helmet Async, and folder structure.
```

### Prompt 2 — Hero Section
```
Build a Hero section with:
- Name: "Usama Arshad"
- Typewriter animation cycling: "Full Stack Developer", ".NET Engineer", "MERN Stack Developer", "Backend Engineer"
- Subtitle: "Building scalable backend systems & modern web applications"
- Two buttons: Download CV (downloads /public/cv.pdf) and View Projects (scrolls to projects)
- GitHub and LinkedIn icon links
- Animated gradient background or subtle particles
- Fade in animation on load
```

### Prompt 3 — Skills Section
```
Build a Skills section with animated skill cards grouped by category:
Backend, Frontend, Databases, DevOps, Tools.
Each skill shows icon + name. Use devicons or simple-icons CDN for icons.
Animate cards sliding in from bottom on scroll using Framer Motion.
```

### Prompt 4 — Projects Section
```
Build a Projects section with a responsive card grid.
Each card has: title, description, tech stack tags, GitHub button, Live Demo button.
Cards have hover effect with cyan border glow.
Mark professional projects with a "Professional" badge instead of GitHub link.
Include filter buttons: All, .NET, MERN, React, Node.js
```

### Prompt 5 — Experience Timeline
```
Build a vertical timeline Experience section.
Each entry: Company name, role, date range, bullet points.
Alternate left/right on desktop, single column on mobile.
Animate each entry sliding in on scroll.
```

### Prompt 6 — Contact Section
```
Build a Contact section with:
- EmailJS contact form (name, email, message fields)
- Toast notification on success/error
- Copy email to clipboard button
- Download CV button
- GitHub and LinkedIn links with icons
- Location: Rawalpindi, Pakistan
```

### Prompt 7 — SEO + Performance
```
Add React Helmet Async for SEO meta tags.
Add sitemap.xml and robots.txt in public folder.
Add Open Graph and Twitter card meta tags.
Lazy load all images. Add alt text to all images.
Add scroll progress bar at top of page.
```

---

## 🚀 Deployment Steps
1. Push to GitHub repo: `portfolio`
2. Go to vercel.com → New Project → Import repo
3. Build command: `npm run build`
4. Output dir: `dist`
5. Deploy → Get live URL!
6. Add custom domain (optional): `usamaarshad.vercel.app`

---

## ⏱️ 1-Day Build Plan

| Time | Task |
|---|---|
| 9AM – 10AM | Setup Vite + Tailwind + folder structure |
| 10AM – 12PM | Hero + Navbar + About sections |
| 12PM – 2PM | Skills + Projects sections |
| 2PM – 4PM | Experience + Education sections |
| 4PM – 5PM | Contact form + Footer |
| 5PM – 6PM | SEO + animations + polish |
| 6PM – 7PM | Deploy to Vercel + test |

---

*Built by Usama Arshad — usamaarshad9293@gmail.com*