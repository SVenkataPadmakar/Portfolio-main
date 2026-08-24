// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  C = "c",
  CPP = "cpp",
  PYTHON = "python",
  FIGMA = "figma",
  CANVA = "canva",
  SQL = "sql",
  VSCODE = "vscode",
  DSA = "dsa",
  OOP = "oop",
  DBMS = "dbms",
  OS = "os",
  CN = "cn",
  SDLC = "sdlc",
  AGILE = "agile",
  PROBLEMSOLVING = "problemsolving",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Modern ES6+ syntax, asynchronous programming, event loop, and DOM APIs.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe engineering with strict type checking, generics, and interfaces.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic HTML5 markup, accessibility (a11y) standards, and SEO architecture.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Responsive design, Flexbox, CSS Grid, custom properties, and fluid animations.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    shortDescription: "Declarative component architecture, custom hooks, context, and state machines.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue.js",
    shortDescription: "Reactivity system, single-file components, and composables for modern web UIs.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "App Router, SSR, SSG, Server Actions, Turbopack, and edge runtime optimizations.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS, custom design tokens, dark mode theming, and responsive layouts.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Event-driven asynchronous backend runtime, streams, worker threads, and microservices.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "Robust RESTful API design, middleware pipelines, routing, and token authentication.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "ACID-compliant relational database, complex queries, indexing, and vector extensions.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document storage, schema aggregation pipelines, and high-throughput databases.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control, branch management, cherry-picking, and collaborative workflows.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "CI/CD automated pipelines via GitHub Actions, code reviews, and open-source collaboration.",
    color: "#f0f6fc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Automated opinionated code formatting ensuring clean and consistent style across repos.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Package dependency management, semantic versioning, and modular library publishing.",
    color: "#cc3534",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Realtime database, Cloud Firestore, Firebase Authentication, and Cloud Functions.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Custom theme creation, headless CMS implementations, and plugin architectures.",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Unix shell scripting, process monitoring, file permissions, and cloud server administration.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization, multi-stage builds, compose orchestration, and isolated runtime environments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Nginx",
    shortDescription: "Reverse proxying, SSL termination, load balancing, and high-performance asset serving.",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud architecture deploying EC2, S3 storage, Lambda serverless, and RDS databases.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud Run, Vertex AI models, BigQuery analytics, and compute engine instances.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Modal text editing, custom keybindings, and high-speed terminal productivity.",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Edge network deployments, preview environments, serverless compute, and performance monitoring.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.C]: {
    id: 26,
    name: "c",
    label: "C",
    shortDescription: "Low-level systems programming, memory management, pointers, and data structures.",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.CPP]: {
    id: 27,
    name: "cpp",
    label: "C++",
    shortDescription: "Object-oriented programming, STL algorithms, templates, and high-performance computation.",
    color: "#f34b7d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 28,
    name: "python",
    label: "Python",
    shortDescription: "Core language for AI/ML, PyTorch, TensorFlow, LangChain, FastAPI, and data engineering.",
    color: "#3572A5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.FIGMA]: {
    id: 29,
    name: "figma",
    label: "Figma",
    shortDescription: "High-fidelity interactive UI/UX prototyping, design systems, tokens, and auto-layouts.",
    color: "#f24e1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  [SkillNames.CANVA]: {
    id: 30,
    name: "canva",
    label: "Canva",
    shortDescription: "Visual branding, asset production, marketing pitch decks, and digital graphic design.",
    color: "#00c4cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  [SkillNames.SQL]: {
    id: 31,
    name: "sql",
    label: "MySQL / SQL",
    shortDescription: "Relational database schema modeling, indexing, joins, transactions, and performance tuning.",
    color: "#e29313",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 32,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Advanced IDE setup with TypeScript tooling, Docker extensions, and AI pair-programming tools.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.DSA]: {
    id: 33,
    name: "dsa",
    label: "Data Structures & Algorithms",
    shortDescription: "Algorithmic problem solving, dynamic programming, trees, graphs, and Big-O optimization.",
    color: "#61dafb",
    icon: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-data-structure-digital-marketing-flat-flatarticons.png",
  },
  [SkillNames.OOP]: {
    id: 34,
    name: "oop",
    label: "Object-Oriented Programming",
    shortDescription: "SOLID principles, design patterns, encapsulation, polymorphism, and modular architectures.",
    color: "#f0db4f",
    icon: "https://img.icons8.com/ios-filled/50/object-oriented-programming.png",
  },
  [SkillNames.DBMS]: {
    id: 35,
    name: "dbms",
    label: "DBMS",
    shortDescription: "Normalization, ACID properties, query execution plans, and concurrency control.",
    color: "#336791",
    icon: "https://img.icons8.com/color/48/database.png",
  },
  [SkillNames.OS]: {
    id: 36,
    name: "os",
    label: "Operating Systems",
    shortDescription: "Process scheduling, thread synchronization, memory paging, deadlocks, and system calls.",
    color: "#6cc24a",
    icon: "https://img.icons8.com/color/48/operating-system.png",
  },
  [SkillNames.CN]: {
    id: 37,
    name: "cn",
    label: "Computer Networks",
    shortDescription: "TCP/IP stack, HTTP/3, WebSockets, DNS resolution, routing protocols, and network security.",
    color: "#007acc",
    icon: "https://img.icons8.com/color/48/network.png",
  },
  [SkillNames.SDLC]: {
    id: 38,
    name: "sdlc",
    label: "SDLC & System Design",
    shortDescription: "End-to-end software development lifecycle, microservice design, and high-availability architecture.",
    color: "#f7b93a",
    icon: "https://img.icons8.com/color/48/lifecycle.png",
  },
  [SkillNames.AGILE]: {
    id: 39,
    name: "agile",
    label: "Agile & Scrum",
    shortDescription: "Sprint planning, rapid prototyping, CI/CD integration, and iterative product delivery.",
    color: "#41b883",
    icon: "https://img.icons8.com/color/48/agile.png",
  },
  [SkillNames.PROBLEMSOLVING]: {
    id: 40,
    name: "problemsolving",
    label: "Problem Solving",
    shortDescription: "Analytical reasoning, root-cause debugging, and optimal mathematical formulation.",
    color: "#ffca28",
    icon: "https://img.icons8.com/color/48/brainstorming.png",
  },
};

export type SkillCategory = {
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    icon: string;
    color?: string;
  }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    description: "Core languages for systems, algorithms, and computational modeling",
    icon: "💻",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3572A5" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ea2d2e" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#a8b9cc" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#f34b7d" },
    ],
  },
  {
    name: "Frontend",
    description: "Modern web user interfaces with responsive, interactive motion design",
    icon: "🎨",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#e34c26" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#563d7c" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f0db4f" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#38bdf8" },
    ],
  },
  {
    name: "Backend",
    description: "Scalable server architectures, APIs, and business logic execution",
    icon: "⚡",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#6cc24a" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#ffffff" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777bb4" },
    ],
  },
  {
    name: "AI & Machine Learning",
    description: "Neural architectures, LLM orchestration, agentic workflows, and predictive modeling",
    icon: "🤖",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#ff6f00" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", color: "#d00000" },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", color: "#f7931e" },
      { name: "NLP", icon: "https://img.icons8.com/fluency/48/natural-user-interface-2.png", color: "#60a5fa" },
      { name: "Deep Learning", icon: "https://img.icons8.com/fluency/48/artificial-intelligence.png", color: "#818cf8" },
      { name: "Computer Vision", icon: "https://img.icons8.com/fluency/48/facial-recognition-scan.png", color: "#34d399" },
      { name: "Generative AI", icon: "https://img.icons8.com/fluency/48/sparkling.png", color: "#fbbf24" },
    ],
  },
  {
    name: "Database",
    description: "Structured relational models, transaction handling, and schema optimization",
    icon: "🗄️",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479a1" },
    ],
  },
  {
    name: "Tools",
    description: "Developer toolchains, version control, and production workflow utilities",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#f1502f" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#f0f6fc" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007acc" },
    ],
  },
];

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
  metrics: {
    engineering: string;
    impact: string;
    workflow: string;
  };
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Dec 2023",
    endDate: "May 2024",
    title: "Web Development Intern",
    company: "Vinukoti Business Solutions",
    description: [
      "Developed and maintained full-stack web modules, integrating responsive front-end interfaces with PHP and MySQL backend services for client-facing applications.",
      "Collaborated with cross-functional teams to deliver scalable, database-driven features; improved query performance through schema restructuring and indexing.",
      "Conducted code reviews, bug triage, and deployment workflows, gaining hands-on exposure to real-world SDLC practices.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.SQL,
      SkillNames.GIT,
      SkillNames.SDLC,
    ],
    metrics: {
      engineering: "Full-Stack Web Modules & Responsive UIs",
      impact: "Optimized Query Performance & Schema Indexing",
      workflow: "SDLC Workflows, Bug Triage & Deployments",
    },
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "Present",
    title: "AI & Full-Stack Developer",
    company: "Academic & Open-Source Projects",
    description: [
      "Building full-stack platforms and applying machine learning to real-world recruitment and academic performance systems.",
      "Developed Recruit Us — a full-stack job recruitment platform featuring role-based authorization, RESTful APIs, and responsive React.js interface.",
      "Architected Student Excellence Platform with certificate verification and ML-driven personalized academic improvement insights.",
      "Participating in Agentic AI workshops and hackathons, mastering autonomous AI agent architectures and deployment.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.SQL,
      SkillNames.DSA,
      SkillNames.PROBLEMSOLVING,
    ],
    metrics: {
      engineering: "React.js, Node.js, Python & ML Models",
      impact: "Recruitment & Academic Intelligence Systems",
      workflow: "RESTful APIs + Agentic AI Workflows",
    },
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits pure radiance for daylight focus!",
    "Caution: Maximum illumination activated. Sunglasses recommended!",
    "Crisp, vibrant clarity mode enabled.",
    "Brace yourself! High-contrast daylight aesthetic initialized.",
  ],
  dark: [
    "Dark mode activated! Cyberpunk matrix aesthetics initialized.",
    "Welcome to deep space mode. Sleek, focused, and battery-friendly.",
    "Dark mode on! Peak engineer aesthetic with ambient neon accents.",
    "Terminal stealth mode engaged.",
  ],
};
