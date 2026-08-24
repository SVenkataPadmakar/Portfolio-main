"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { Trophy, Bot, Sparkles, Code2, Award } from "lucide-react";
import { Badge } from "../ui/badge";

const ACHIEVEMENTS = [
  {
    title: "Piston Hackathon — Coding & Product Sprint",
    desc: "Earned a Participation Certificate at the Piston Hackathon for an intensive multi-team coding, system design, and product-building challenge.",
    category: "Hackathon",
    icon: <Trophy className="h-6 w-6 text-amber-400" />,
    badgeVariant: "default",
  },
  {
    title: "Agentic AI Workshop — Autonomous Architectures",
    desc: "Completed a comprehensive hands-on Agentic AI Workshop covering autonomous AI agent architectures, tool-calling pipelines, and real-world production deployment.",
    category: "AI & Innovation",
    icon: <Bot className="h-6 w-6 text-primary" />,
    badgeVariant: "secondary",
  },
  {
    title: "Gen AI Launchpad Hackathon at GMRIT",
    desc: "Participated in the Generative AI Launchpad Hackathon organized at GMRIT, building rapid AI-powered prototypes and intelligent applications.",
    category: "Gen AI Sprint",
    icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    badgeVariant: "outline",
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" className="flex flex-col items-center justify-center min-h-[50vh] py-20 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements & Honors"
          desc="Hackathons, Agentic AI certifications & engineering milestones."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className={cn(
                "bg-card/70 backdrop-blur-md text-card-foreground border-border/80 h-full",
                "hover:border-primary/40 transition-all duration-300",
                "shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col justify-between"
              )}>
                <div>
                  <CardHeader className="pb-3 flex flex-col items-start gap-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="p-3 rounded-xl bg-secondary/50 border border-border/60 shrink-0">
                        {ach.icon}
                      </div>
                      <Badge variant="outline" className="font-mono text-[11px] px-2.5 py-0.5 border-border/60">
                        {ach.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base md:text-lg font-bold tracking-tight text-foreground pt-1">
                      {ach.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-5">
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {ach.desc}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
