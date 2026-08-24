"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FileText, ArrowRight, Mail, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX, SiLeetcode } from "react-icons/si";
import { config } from "@/data/config";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";

const ROLES = [
  "AI Engineer",
  "Full Stack Developer",
  "Generative AI Developer",
  "Machine Learning Enthusiast",
  "Startup Builder",
];

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-screen")}>
      {/* Single-column layout — right half is transparent, keyboard shows through */}
      <div className="grid md:grid-cols-2 h-full">
        {/* LEFT column — all text content */}
        <div
          className={cn(
            "min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-start",
            "px-6 pt-24 pb-12 md:p-16 lg:p-20 xl:p-24"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col w-full max-w-xl">

              {/* ── Status pill & "Hi, I'm" ── */}
              <BlurIn delay={0.4}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for AI & Full Stack roles
                  </div>
                </div>
              </BlurIn>

              {/* Greeting row */}
              <BlurIn delay={0.6}>
                <div className="flex items-center gap-3 mb-2">
                  <p
                    className={cn(
                      "font-medium text-lg text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-2xl whitespace-nowrap tracking-tight"
                    )}
                  >
                    Hi, I&apos;m
                  </p>
                </div>
              </BlurIn>

              {/* Name heading */}
              <BlurIn delay={0.8}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1
                      className={cn(
                        "-ml-[3px] leading-[1.08] text-slate-900 dark:text-white text-left",
                        "font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                        "cursor-default tracking-tight font-display"
                      )}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60">
                        Simhadri Venkata
                      </span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-blue-400">
                        Padmakar
                      </span>
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="dark:bg-white dark:text-black font-mono text-xs"
                  >
                    Simhadri Venkata Padmakar — AI Engineer & Full Stack Developer
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              {/* Rotating Subtitle */}
              <div className="h-10 sm:h-12 mt-4 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-base sm:text-lg md:text-xl font-mono font-medium text-primary tracking-tight">
                      {ROLES[roleIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Short Bio Tagline */}
              <BlurIn delay={1.1}>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 max-w-lg">
                  Building autonomous Multi-Agent AI platforms, high-throughput full-stack architectures, and scalable startup products.
                </p>
              </BlurIn>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3.5 w-full">
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="#projects" className="flex-1 min-w-[140px]">
                    <Button className="w-full group/btn shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                      View Projects
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link href="/resume" target="_blank" className="flex-1 min-w-[140px]">
                    <Button variant="outline" className="w-full flex items-center gap-2 border-border/80 hover:bg-secondary/60">
                      <FileText size={16} />
                      <span>Resume</span>
                    </Button>
                  </Link>

                  <Link href="#contact" className="min-w-[120px]">
                    <Button variant="ghost" className="w-full flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Mail size={16} />
                      <span>Contact</span>
                    </Button>
                  </Link>
                </div>

                {/* Social icons row */}
                <div className="flex items-center gap-2.5 pt-2">
                  <span className="text-xs font-mono text-muted-foreground mr-1">Connect:</span>
                  <Link
                    href={config.social.leetcode}
                    target="_blank"
                    className="cursor-can-hover"
                    aria-label="LeetCode Profile"
                  >
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-border/70 hover:border-primary/50">
                      <SiLeetcode size={16} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.github}
                    target="_blank"
                    className="cursor-can-hover"
                    aria-label="GitHub Profile"
                  >
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-border/70 hover:border-primary/50">
                      <SiGithub size={16} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                    className="cursor-can-hover"
                    aria-label="LinkedIn Profile"
                  >
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-border/70 hover:border-primary/50">
                      <SiLinkedin size={16} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.twitter}
                    target="_blank"
                    className="cursor-can-hover"
                    aria-label="Twitter/X Profile"
                  >
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-border/70 hover:border-primary/50">
                      <SiX size={15} />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* RIGHT column — intentionally empty so 3D keyboard shows through */}
        <div className="col-span-1 hidden md:block" />
      </div>

      <div className="absolute bottom-8 left-[50%] translate-x-[-50%] pointer-events-none">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

