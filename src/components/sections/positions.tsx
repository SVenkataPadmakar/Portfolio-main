"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { UserCheck, Bot, Users, Code2 } from "lucide-react";

const POSITIONS = [
  {
    title: "AI & Innovation Lead",
    desc: "Spearheading student AI research groups, organizing agentic AI workshops, and hackathon project incubations.",
    icon: <Bot className="h-5 w-5 text-primary" />,
  },
  {
    title: "Technical Lead & Mentor",
    desc: "Mentoring 100+ students in Machine Learning, Full-Stack Development, and Algorithmic Problem Solving in Python and C++.",
    icon: <Users className="h-5 w-5 text-blue-400" />,
  },
  {
    title: "Developer Community Core",
    desc: "Coordinating technical hackathons, open-source coding sprints, and campus developer bootcamps.",
    icon: <Code2 className="h-5 w-5 text-emerald-400" />,
  },
];

const PositionsSection = () => {
  return (
    <SectionWrapper id="positions" className="flex flex-col items-center justify-center min-h-[50vh] py-20 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="positions"
          title="Leadership & Community"
          desc="Roles where I contributed and led within developer communities."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSITIONS.map((pos, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className={cn(
                "bg-card/70 backdrop-blur-md text-card-foreground border-border/80 h-full",
                "hover:border-primary/40 transition-all duration-300",
                "shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              )}>
                <CardHeader className="pb-3 flex flex-col items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/60">
                    {pos.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg font-bold tracking-tight text-foreground">
                    {pos.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {pos.desc}
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

export default PositionsSection;
