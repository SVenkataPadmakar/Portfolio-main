"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "motion/react";
import { Bot, Code2, Rocket, BrainCircuit, Sparkles, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const HIGHLIGHTS = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Agentic AI Architectures",
    description: "Designing autonomous multi-agent networks with LangGraph, LangChain, and stateful reasoning loops that solve complex real-world workflows.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Full-Stack Engineering",
    description: "Building production-grade web systems with Next.js, React, FastAPI, Node.js, and relational databases with focus on latency and scale.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    title: "Machine Learning & NLP",
    description: "Training and fine-tuning neural models, OCR processing, vector embeddings, and multimodal generative AI implementations.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-amber-400" />,
    title: "Startup & Innovation Mindset",
    description: "Transforming ambitious ideas into validated, market-ready MVPs. Passionate about startup venture building and rapid iteration.",
  },
];

const METRICS = [
  { label: "B.Tech CSE (AI & ML)", value: "8.12 CGPA", sub: "GMRIT • 2024-2027" },
  { label: "Diploma Comp Engg", value: "85.72%", sub: "Govt Polytechnic Anakapalle" },
  { label: "Hackathons & AI", value: "Agentic AI", sub: "Piston & Gen AI Hackathons" },
  { label: "Core Competencies", value: "Full Stack + ML", sub: "Python, React, Java" },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="max-w-7xl mx-auto py-20 px-4 min-h-[90vh] flex flex-col justify-center">
      <SectionHeader
        id="about"
        title="About Me"
        desc="Architecting intelligence, engineering high-impact software."
        className="mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" suppressHydrationWarning>
        {/* Left Narrative Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="p-6 md:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl shadow-xl space-y-5" suppressHydrationWarning>
            <div className="flex items-center gap-2 text-primary font-mono text-sm font-semibold" suppressHydrationWarning>
              <Sparkles className="w-4 h-4" />
              <span>Simhadri Venkata Padmakar</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Andhra Pradesh, India
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-foreground" suppressHydrationWarning>
              Software Engineer, Full-Stack Developer & AI/ML Specialist
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base font-sans" suppressHydrationWarning>
              <p suppressHydrationWarning>
                I am a Computer Science undergraduate specializing in <strong className="text-foreground" suppressHydrationWarning>Artificial Intelligence & Machine Learning (CGPA: 8.12/10.0)</strong> at GMR Institute of Technology (2024–2027), having earned my Diploma in Computer Engineering (85.72%) from Government Polytechnic, Anakapalle.
              </p>
              <p suppressHydrationWarning>
                I have hands-on experience building full-stack, RESTful web applications and applying machine learning to real-world academic and recruitment platforms. Proficient in Python, Java, and modern web technologies including React.js and PHP, with a solid foundation in data structures, algorithms, and database-driven system design.
              </p>
              <p suppressHydrationWarning>
                Known for translating complex requirements into scalable, production-ready features through close collaboration with cross-functional teams. Seeking an entry-level Software Engineer / Full-Stack Developer role at a product-driven company to build impactful, user-centric software.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/40" suppressHydrationWarning>
              {METRICS.map((m, i) => (
                <div key={i} className="flex flex-col" suppressHydrationWarning>
                  <span className="text-lg md:text-xl font-bold font-display text-primary">{m.value}</span>
                  <span className="text-xs font-semibold text-foreground">{m.label}</span>
                  <span className="text-[11px] text-muted-foreground">{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Pillars Column */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4" suppressHydrationWarning>
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full border-border/70 bg-card/30 hover:bg-card/60 backdrop-blur-md hover:border-primary/40 transition-all duration-300 shadow-md hover:-translate-y-1">
                <CardContent className="p-6 space-y-3">
                  <div className="p-2.5 rounded-xl bg-secondary/40 w-fit border border-border/50">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold font-display text-foreground tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
