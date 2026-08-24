"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { Award, Code2, Globe, ShieldCheck } from "lucide-react";
import { Badge } from "../ui/badge";

const CERTIFICATIONS = [
  {
    title: "Python Basics (Programming Fundamentals)",
    issuer: "Cisco",
    category: "Programming & Algorithms",
    description: "Core proficiency in Python programming syntax, control flow, functions, data structures, and algorithmic logic.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Full Stack Web Development",
    issuer: "L&T EduTech",
    category: "Web & Software Engineering",
    description: "Comprehensive industry training in end-to-end full stack web engineering, RESTful architecture, responsive front-ends, and database integrations.",
    icon: <Globe className="h-6 w-6 text-emerald-400" />,
  },
];

const CertificationsSection = () => {
  return (
    <SectionWrapper id="certifications" className="flex flex-col items-center justify-center min-h-[50vh] py-20 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="certifications"
          title="Certifications"
          desc="Industry-recognized technical credentials in Python & Full Stack Development."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
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
                "shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              )}>
                <CardHeader className="p-6 pb-3 flex flex-row items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/50 border border-border/60 shrink-0">
                      {cert.icon}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg font-bold tracking-tight text-foreground">
                        {cert.title}
                      </CardTitle>
                      <div className="text-sm font-semibold text-primary">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-1 space-y-3">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <Badge variant="outline" className="font-mono text-[11px] border-border/60">
                    {cert.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
