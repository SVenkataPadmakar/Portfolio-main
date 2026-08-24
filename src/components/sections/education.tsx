"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { GraduationCap, BookOpen } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Tech, CSE (AI & Machine Learning)",
    institution: "GMR Institute of Technology, Rajam",
    location: "Rajam, Andhra Pradesh, India",
    period: "2024 – 2027",
    scoreLabel: "CGPA",
    score: "8.12 / 10.0",
    description: "Specializing in Artificial Intelligence, Machine Learning, Deep Neural Networks, Natural Language Processing, and Distributed Systems.",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
  {
    degree: "Diploma, Computer Engineering",
    institution: "Government Polytechnic, Anakapalle",
    location: "Anakapalle, Andhra Pradesh, India",
    period: "2021 – 2024",
    scoreLabel: "Percentage",
    score: "85.72%",
    description: "Core foundation in Computer Engineering, Data Structures, Operating Systems, Database Management Systems, C, Java, and Web Technologies.",
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
  },
];

const EducationSection = () => {
  return (
    <SectionWrapper id="education" className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="Academic foundation in Artificial Intelligence, Machine Learning & Computer Engineering."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="space-y-6">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className={cn(
                "bg-card/70 backdrop-blur-md text-card-foreground border-border/80",
                "hover:border-primary/40 transition-all duration-300",
                "shadow-lg hover:shadow-primary/5"
              )}>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/60 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                          {item.degree}
                        </CardTitle>
                        <div className="text-base font-medium text-primary/90">
                          {item.institution}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.location}
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit whitespace-nowrap font-mono text-xs font-medium px-3 py-1"
                    >
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm pt-1">
                    <span className="font-semibold text-foreground">{item.scoreLabel}:</span>
                    <Badge variant="outline" className="text-primary border-primary/40 font-mono font-bold text-sm px-2.5 py-0.5">
                      {item.score}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
