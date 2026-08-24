import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Sparkles, Bot, Cpu, Network, Database, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs, SiFastapi, SiPostgresql, SiMysql, SiPhp, SiDocker, SiAmazonaws, SiOpenai, SiGoogle } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Live Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql size={14} />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql size={16} />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp size={16} />,
  },
  express: brand("Express", "express-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker size={14} />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws size={14} />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi size={14} />,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: <Bot className="w-3.5 h-3.5" />,
  },
  langgraph: {
    title: "LangGraph",
    bg: "black",
    fg: "white",
    icon: <Network className="w-3.5 h-3.5" />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai size={14} />,
  },
  gemini: {
    title: "Gemini",
    bg: "black",
    fg: "white",
    icon: <SiGoogle size={14} />,
  },
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  ml: {
    title: "Machine Learning",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">ML</span>,
  },
  dl: {
    title: "Deep Learning",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">DL</span>,
  },
  llm: {
    title: "LLMs",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">LLM</span>,
  },
  ocr: {
    title: "OCR",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">OCR</span>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">HTML5</span>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">CSS3</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  featured?: boolean;
  capabilities?: string[];
};

const projects: Project[] = [
  {
    id: "ai-startup-copilot",
    category: "Featured AI Project",
    title: "AI Startup Copilot",
    subtitle: "Autonomous Agentic AI Virtual Co-Founder Platform",
    featured: true,
    src: "/assets/projects-screenshots/ai-startup-copilot/landing.svg",
    screenshots: ["landing.svg"],
    capabilities: [
      "Multi-Agent Architecture",
      "Market Research Agent",
      "Competitor Intelligence Agent",
      "Product Strategy Agent",
      "Financial Planning Agent",
      "Business Strategy Agent",
      "Investor Readiness Agent",
      "Startup Validation Engine",
      "Roadmap Generation",
      "Business Analytics",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.langgraph,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.aws,
      ],
    },
    live: "https://simhadripadmakar.dev",
    github: "https://github.com/SVenkataPadmakar/ai-startup-copilot",
    get content() {
      return (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-1">
              <Sparkles className="w-4 h-4" /> Flagship Agentic AI Platform
            </span>
            <TypographyP className="font-mono text-xl font-bold text-foreground mt-1">
              Autonomous Multi-Agent AI system turning raw business ideas into validated, execution-ready startups.
            </TypographyP>
          </div>

          <TypographyP className="font-sans leading-relaxed text-muted-foreground">
            <strong>AI Startup Copilot</strong> is an advanced Agentic AI platform that acts as a virtual co-founder for entrepreneurs, startups, and innovators. It leverages specialized collaborative AI agents to systematically de-risk and execute startup ventures through automated market research, deep competitive analysis, financial forecasting, dynamic product strategy, and investor pitch deck synthesis.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" /> Multi-Agent Cognitive Architecture
          </TypographyH3>
          <p className="font-sans text-muted-foreground leading-relaxed mb-4">
            Built upon LangGraph state machines and LangChain agent runtimes, specialized autonomous agents collaborate in an iterative loop:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { name: "Market Research Agent", desc: "TAM/SAM/SOM estimation, consumer sentiment, and trend analysis." },
              { name: "Competitor Intelligence Agent", desc: "Feature matrix comparison, pricing models, and SWOT extraction." },
              { name: "Product Strategy Agent", desc: "User persona generation, MVP scope definition, and feature prioritisation." },
              { name: "Financial Planning Agent", desc: "Unit economics, runway projections, and CAC/LTV forecasting." },
              { name: "Business Strategy Agent", desc: "Go-to-market channels, value proposition canvas, and monetization models." },
              { name: "Investor Readiness Agent", desc: "Institutional pitch decks, term sheet readiness, and investor Q&A simulator." },
            ].map((agent, i) => (
              <div key={i} className="p-3.5 rounded-lg border border-border/60 bg-muted/20 flex flex-col gap-1">
                <span className="text-xs font-mono font-bold text-primary">{agent.name}</span>
                <span className="text-xs text-muted-foreground">{agent.desc}</span>
              </div>
            ))}
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 shadow-2xl bg-slate-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/projects-screenshots/ai-startup-copilot/landing.svg"
              alt="AI Startup Copilot Dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" /> Full-Stack Production Engineering
          </TypographyH3>
          <p className="font-sans text-muted-foreground leading-relaxed mb-2">
            Powered by high-concurrency FastAPI microservices in Python, Next.js 16 App Router on the client, PostgreSQL with pgvector for semantic knowledge retrieval, and Dockerized orchestration deployed to AWS cloud infrastructure with sub-second streaming inference from GPT-4o and Gemini models.
          </p>
        </div>
      );
    },
  },
  {
    id: "recruit-us",
    category: "Full-Stack Web Platform",
    title: "Recruit Us",
    subtitle: "Full-Stack Job Recruitment Platform",
    src: "/assets/projects-screenshots/ai-startup-copilot/landing.svg",
    screenshots: ["landing.svg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "#",
    github: "https://github.com/SVenkataPadmakar/recruit-us",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center font-semibold">
            Connecting recruiters and candidates with seamless application tracking and role-based management.
          </TypographyP>
          <TypographyP className="font-sans text-muted-foreground leading-relaxed">
            <strong>Recruit Us</strong> is a full-stack recruitment platform enabling recruiters to post jobs and candidates to apply, track, and manage applications end-to-end.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" /> Core Technical Highlights
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-muted-foreground leading-relaxed font-sans">
            <li>Built a full-stack recruitment platform enabling recruiters to post jobs and candidates to apply, track, and manage applications end-to-end.</li>
            <li>Implemented secure user authentication, session management, and role-based authorization using PHP and MySQL.</li>
            <li>Designed a responsive React.js interface for cross-device compatibility and optimized SQL queries to reduce data-fetch latency.</li>
            <li>Built RESTful API endpoints powering real-time job listings, application status updates, and recruiter dashboard functionality.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "student-excellence-platform",
    category: "Centralized Academic System",
    title: "Student Excellence Platform",
    subtitle: "Certificate Verification & Academic Analytics Ecosystem",
    src: "/assets/projects-screenshots/ai-startup-copilot/landing.svg",
    screenshots: ["landing.svg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.ml,
      ],
    },
    live: "#",
    github: "https://github.com/SVenkataPadmakar/student-excellence-platform",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center font-semibold">
            Centralized academic platform featuring instant certificate verification and ML-driven improvement insights.
          </TypographyP>
          <TypographyP className="font-sans text-muted-foreground leading-relaxed">
            <strong>Student Excellence Platform</strong> is a centralized academic management system engineered with certificate authentication and machine learning recommendation models.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Network className="w-5 h-5 text-primary" /> Core Technical Highlights
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-muted-foreground leading-relaxed font-sans">
            <li>Architected a centralized web platform featuring a certificate verification module to validate and authenticate student academic credentials in real time.</li>
            <li>Engineered a modular Node.js/Express.js backend with RESTful APIs and a MongoDB database, supporting concurrent multi-user access with clean service-layer separation.</li>
            <li>Integrated ML-based recommendation models to generate personalized academic improvement insights from historical performance data.</li>
            <li>Developed a performance-optimized React.js frontend with role-based dashboards for students and administrators.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;


