"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Bot, ArrowRight, Layers } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProjectsSection = () => {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const regularProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[140vh] px-4 py-16">
      <SectionHeader
        id="projects"
        title="Featured Projects"
        desc="Production AI platforms, distributed systems & startup products."
        className="mb-12"
      />

      {/* Flagship Featured AI Project Showcase */}
      {featuredProject && (
        <div className="mb-12">
          <FeaturedProjectShowcase project={featuredProject} />
        </div>
      )}

      {/* Core Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regularProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const FeaturedProjectShowcase = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/50 to-primary/5 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/40 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Featured AI Project
            </Badge>
            <Badge variant="outline" className="font-mono text-xs text-muted-foreground border-border/80">
              Autonomous Multi-Agent Architecture
            </Badge>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-base font-mono text-primary/80 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            An advanced Agentic AI platform that acts as a virtual co-founder for entrepreneurs and innovators. Utilizing specialized collaborative AI agents to automate market research, competitor benchmarking, financial modeling, and investor pitch synthesis.
          </p>

          {/* Capabilities Badges */}
          {project.capabilities && (
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-primary" /> Key Agentic Capabilities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.capabilities.slice(0, 6).map((cap, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 border border-border/50 text-foreground/80 font-medium"
                  >
                    {cap}
                  </span>
                ))}
                {project.capabilities.length > 6 && (
                  <span className="text-xs px-2 py-1 rounded-md text-primary font-mono font-semibold">
                    +{project.capabilities.length - 6} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Modal Trigger & External CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <ResponsiveDialog>
              <ResponsiveDialogTrigger asChild>
                <Button className="flex items-center gap-2 group/btn">
                  Explore Architecture & Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </ResponsiveDialogTrigger>
              <ProjectModalContent project={project} />
            </ResponsiveDialog>

            {project.github && project.github !== "#" && (
              <Link href={project.github} target="_blank">
                <Button variant="outline" className="font-mono text-xs">
                  GitHub Repo
                  <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Right Preview Column */}
        <div className="lg:col-span-5 flex justify-center">
          <ResponsiveDialog>
            <ResponsiveDialogTrigger className="bg-transparent w-full max-w-md block group/preview">
              <div
                className="relative w-full rounded-xl overflow-hidden ring-1 ring-primary/30 shadow-2xl group-hover/preview:ring-primary/60 transition-all duration-300"
                style={{ aspectRatio: "16/10" }}
              >
                <ScrollingPreview
                  src={project.src}
                  alt={project.title}
                  bg={`/assets/backgrounds/${project.id}.jpg`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Click to view full demo specs
                  </span>
                </div>
              </div>
            </ResponsiveDialogTrigger>
            <ProjectModalContent project={project} />
          </ResponsiveDialog>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative w-full h-auto rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-primary/40 transition-all duration-300 hover:-translate-y-1 bg-card/40"
            style={{ aspectRatio: "3/2" }}
          >
            <ScrollingPreview
              src={project.src}
              alt={project.title}
              bg={`/assets/backgrounds/${project.id}.jpg`}
            />
            <div className="absolute w-full h-28 bottom-0 left-0 bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-base md:text-lg font-bold text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </div>
                <div className="text-xs bg-primary/90 text-primary-foreground font-mono rounded-md w-fit px-2 py-0.5 mt-1">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>
        <ProjectModalContent project={project} />
      </ResponsiveDialog>
    </div>
  );
};

const ProjectModalContent = ({ project }: { project: Project }) => {
  return (
    <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
      {/* Sticky header */}
      <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
              {project.title}
            </h4>
            <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
              {project.category}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            {project.github && project.github !== "#" && (
              <Link
                href={project.github}
                target="_blank"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
              >
                Source
              </Link>
            )}
            {project.live && project.live !== "#" && (
              <Link href={project.live} target="_blank">
                <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                  Visit
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <ScrollArea className="flex-1" type="always" data-lenis-prevent>
        <div className="px-8 py-8">
          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
          >
            {project.skills.frontend?.length > 0 && (
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Frontend
                </span>
                <FloatingDock items={project.skills.frontend} />
              </div>
            )}
            {project.skills.backend?.length > 0 && (
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Backend & AI
                </span>
                <FloatingDock items={project.skills.backend} />
              </div>
            )}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

          {/* Project content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.content}
          </motion.div>
        </div>
      </ScrollArea>
    </ResponsiveDialogContent>
  );
};

export default ProjectsSection;

