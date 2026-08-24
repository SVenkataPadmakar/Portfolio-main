"use client";

import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILL_CATEGORIES, SKILLS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, Layers } from "lucide-react";
import { Badge } from "../ui/badge";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.name)];

  const displayedCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === activeCategory);

  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen md:min-h-[170dvh] py-20 px-4 flex flex-col justify-start"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header & Interactive Hint */}
        <div className="flex flex-col items-center text-center mb-8 pointer-events-auto">
          <SectionHeader
            id="skills"
            title="Technical Arsenal"
            desc="Interactive 3D Keyboard & Categorized Skill Matrix"
            className="static mb-3"
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary backdrop-blur-md shadow-sm mt-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D: Click keycaps to hear sounds & explore details</span>
          </div>
        </div>

        {/* 3D Keyboard Spacer area (allows 3D keyboard in background to be fully visible and interacted with) */}
        <div className="w-full h-[42vh] md:h-[55vh] pointer-events-none" />

        {/* Categorized Skills Section */}
        <div className="pointer-events-auto mt-6 space-y-8 relative z-20">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs md:text-sm font-mono font-medium transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                      : "bg-secondary/40 hover:bg-secondary/70 text-muted-foreground hover:text-foreground border border-border/50"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Categories Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayedCategories.map((cat, idx) => (
                <motion.div
                  key={cat.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl p-5 md:p-6 shadow-xl hover:border-primary/40 hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Category Title */}
                    <div className="flex items-center justify-between border-b border-border/40 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{cat.icon}</span>
                        <h4 className="font-display font-bold text-base md:text-lg text-foreground tracking-tight">
                          {cat.name}
                        </h4>
                      </div>
                      <Badge variant="outline" className="font-mono text-[10px] uppercase text-muted-foreground border-border/60">
                        {cat.skills.length} skills
                      </Badge>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill items chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/skill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/30 hover:bg-secondary/70 border border-border/50 transition-all duration-200"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-4 h-4 object-contain group-hover/skill:scale-110 transition-transform"
                            loading="lazy"
                          />
                          <span className="text-xs font-medium text-foreground/90 font-mono">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
