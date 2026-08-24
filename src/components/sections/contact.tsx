"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail, MapPin, Send, FileText, ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin, SiX, SiLeetcode } from "react-icons/si";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto py-20 px-4">
      <SectionHeader
        id="contact"
        className="relative mb-14"
        title={
          <>
            LET&apos;S BUILD <br />
            SOMETHING GREAT
          </>
        }
        desc="Have an AI project, startup opportunity, or engineering inquiry? Let's connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 z-[20] relative">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="bg-card/70 dark:bg-card/50 backdrop-blur-xl rounded-2xl border-border/80 p-6 md:p-8 shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display tracking-tight text-foreground">
                Get In Touch
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am always excited to discuss Agentic AI systems, machine learning architectures, full-stack web products, and startup collaborations.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-muted-foreground uppercase">Email</span>
                  <div>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {config.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-muted-foreground uppercase">Phone</span>
                  <div>
                    <a
                      href="tel:+917013542677"
                      className="text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      +91 7013542677
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-muted-foreground uppercase">Location</span>
                  <p className="text-sm md:text-base font-medium text-foreground">
                    {config.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Connect & Documents
              </span>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/resume" target="_blank">
                  <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
                    <FileText className="w-3.5 h-3.5" />
                    Résumé
                  </Button>
                </Link>
                <Link href={config.social.leetcode} target="_blank">
                  <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
                    <SiLeetcode className="w-3.5 h-3.5" />
                    LeetCode
                  </Button>
                </Link>
                <Link href={config.social.github} target="_blank">
                  <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
                    <SiGithub className="w-3.5 h-3.5" />
                    GitHub
                  </Button>
                </Link>
                <Link href={config.social.linkedin} target="_blank">
                  <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
                    <SiLinkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7">
          <Card className="bg-card/70 dark:bg-card/50 backdrop-blur-xl rounded-2xl border-border/80 p-6 md:p-8 shadow-xl">
            <CardHeader className="p-0 pb-6">
              <CardTitle className="text-2xl font-bold font-display text-foreground">
                Send a Direct Message
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Fill in the details below and I&apos;ll get back to you promptly.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
