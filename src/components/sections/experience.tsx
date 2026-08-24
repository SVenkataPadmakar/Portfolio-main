"use client";
import React from "react";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Cpu, TrendingUp, Sparkles } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 px-4"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="experience"
          title="Professional Journey"
          desc="Engineering scalable AI products & leading technical initiatives."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="flex flex-col gap-8 relative">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative">
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="bg-card/70 backdrop-blur-md text-card-foreground border-border/80 hover:border-primary/40 transition-all duration-300 shadow-xl overflow-hidden">
        <CardHeader className="pb-4 border-b border-border/40 bg-muted/20">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                  {experience.title}
                </CardTitle>
              </div>
              <div className="text-base font-semibold text-primary">
                {experience.company}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal px-3 py-1">
              {experience.startDate} – {experience.endDate}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2.5 text-sm md:text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="border border-border/60 bg-secondary/30 rounded-xl p-4 flex flex-col gap-1.5">
              <span className="text-[11px] uppercase font-mono tracking-wider text-purple-400 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Engineering Core
              </span>
              <span className="text-sm font-bold text-foreground">
                {experience.metrics.engineering}
              </span>
            </div>

            <div className="border border-border/60 bg-secondary/30 rounded-xl p-4 flex flex-col gap-1.5">
              <span className="text-[11px] uppercase font-mono tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> Measurable Impact
              </span>
              <span className="text-sm font-bold text-emerald-500">
                {experience.metrics.impact}
              </span>
            </div>

            <div className="border border-border/60 bg-secondary/30 rounded-xl p-4 flex flex-col gap-1.5">
              <span className="text-[11px] uppercase font-mono tracking-wider text-primary font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Stack & Workflow
              </span>
              <span className="text-sm font-bold text-foreground">
                {experience.metrics.workflow}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/40 hover:bg-secondary/70 transition-colors border-border/50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
