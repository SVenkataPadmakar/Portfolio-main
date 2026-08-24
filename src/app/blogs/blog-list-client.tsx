"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowUpRight, Clock, Compass, Zap, Code, Award } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
  };
  wordCount: number;
};

function readTime(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = React.useState<"posts" | "path" | "student" | "theory">("posts");

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen font-sans">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(20,100%,70%)]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(20,100%,70%)]/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-[hsl(20,100%,70%)]" />
            <span className="text-[hsl(20,100%,70%)] text-sm font-medium tracking-[0.2em] uppercase font-sans">
              Hub
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            Knowledge &<br />
            <span className="text-[hsl(20,100%,70%)]">Philosophy</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-lg leading-relaxed font-sans">
            Notes on building things, coding methodologies, and my professional growth path.
          </p>
        </motion.div>


        {/* Tab Navigation */}
        <div className="flex border-b border-border/50 mb-12 gap-6 pb-2 overflow-x-auto scrollbar-none">

          <button
            onClick={() => setActiveTab("posts")}
            className={cn(
              "text-base md:text-lg font-medium pb-2 border-b-2 transition-all font-sans cursor-can-hover whitespace-nowrap",
              activeTab === "posts"
                ? "border-[hsl(20,100%,70%)] text-[hsl(20,100%,70%)]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            📝 Articles & Updates
          </button>
          <button
            onClick={() => setActiveTab("path")}
            className={cn(
              "text-base md:text-lg font-medium pb-2 border-b-2 transition-all font-sans cursor-can-hover whitespace-nowrap",
              activeTab === "path"
                ? "border-[hsl(20,100%,70%)] text-[hsl(20,100%,70%)]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            🗺️ My Journey Path
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={cn(
              "text-base md:text-lg font-medium pb-2 border-b-2 transition-all font-sans cursor-can-hover whitespace-nowrap",
              activeTab === "student"
                ? "border-[hsl(20,100%,70%)] text-[hsl(20,100%,70%)]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            🎓 B.Tech Journey
          </button>
          <button
            onClick={() => setActiveTab("theory")}
            className={cn(
              "text-base md:text-lg font-medium pb-2 border-b-2 transition-all font-sans cursor-can-hover whitespace-nowrap",
              activeTab === "theory"
                ? "border-[hsl(20,100%,70%)] text-[hsl(20,100%,70%)]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            💡 My Philosophy & Theory
          </button>
        </div>

        {/* ARTICLES TAB */}
        {activeTab === "posts" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured post */}
            {featured && (
              <div className="mb-16">
                <Link href={`/blogs/${featured.slug}`} className="group block">
                  <div className="relative border border-border/50 rounded-2xl p-8 md:p-12 overflow-hidden transition-colors hover:border-[hsl(20,100%,70%)]/30 bg-card/30 backdrop-blur-sm">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(20,100%,70%)]/10 to-transparent rounded-bl-full" />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-sans">
                        <span className="text-[hsl(20,100%,70%)] font-medium tracking-[0.15em] uppercase text-xs">
                          Featured
                        </span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {formatDate(featured.metadata.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {readTime(featured.wordCount)} min read
                        </span>
                      </div>

                      <h2 className="font-display text-2xl md:text-3xl leading-[1.15] mb-4 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                        {featured.metadata.title}
                      </h2>

                      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8 font-sans">
                        {featured.metadata.summary}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                          {featured.metadata.tags?.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-[hsl(20,100%,70%)]/20 text-[hsl(20,100%,70%)] bg-[hsl(20,100%,70%)]/5 rounded-full px-3"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[hsl(20,100%,70%)] transition-colors font-sans">
                          Read article
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Divider */}
            {rest.length > 0 && (
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />
            )}

            {/* Post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post, index) => (
                <div key={post.slug}>
                  <Link href={`/blogs/${post.slug}`} className="group block h-full">
                    <div className="h-full border border-border/50 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 bg-card/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-sans">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="w-3 h-3" />
                          {formatDate(post.metadata.publishedAt)}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {readTime(post.wordCount)} min
                        </span>
                      </div>

                      <h3 className="font-display text-lg md:text-xl leading-tight mb-3 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                        {post.metadata.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 font-sans">
                        {post.metadata.summary}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-1.5 flex-wrap">
                          {post.metadata.tags?.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-border/50 text-muted-foreground text-[10px] rounded-full px-2 py-0"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(20,100%,70%)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {posts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-muted-foreground text-lg font-sans">No posts yet. Check back soon.</p>
              </div>
            )}
          </motion.div>
        )}

        {/* JOURNEY PATH TAB */}
        {activeTab === "path" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* ServiceNow Flow Diagram Layout */}
            <div className="relative border-l-2 border-dashed border-border/50 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 py-4">
              
              {/* Flow Node 1 */}
              <div className="relative group">
                {/* Connective Flow Bullet */}
                <div className="absolute -left-[37px] md:-left-[53px] top-4 w-5 h-5 rounded-full bg-background border-2 border-emerald-500 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(16,185,129,0.4)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                
                <div className="border border-border/60 bg-card/25 backdrop-blur-sm rounded-xl overflow-hidden hover:border-[hsl(20,100%,70%)]/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between bg-muted/20 border-b border-border/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span>TRIGGER: FLOW_START</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] border-emerald-500/30 text-emerald-500 bg-emerald-500/5 rounded-sm h-5 px-1.5">
                      COMPLETED
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[hsl(20,100%,70%)] font-semibold uppercase tracking-wider block">AUG 2023 - PRESENT</span>
                    <h3 className="text-xl font-bold mt-1 mb-2 font-display">Aditya Institute of Technology and Management (B.Tech CSE)</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Began academic adventure in Computer Science. Building a strong foundation in core computer science subjects, algorithms, and web technologies.
                    </p>
                    
                    {/* Inputs & Outputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/40 mt-4 pt-3 font-mono text-[11px]">
                      <div className="space-y-1">
                        <span className="text-zinc-500">Inputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>degree: "B.Tech CSE"</div>
                          <div>location: "Srikakulam, AP"</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-500">Outputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>gpa: <span className="text-emerald-400 font-bold">8.01</span></div>
                          <div>status: "Successfully Initialized"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Node 2 */}
              <div className="relative group">
                {/* Connective Flow Bullet */}
                <div className="absolute -left-[37px] md:-left-[53px] top-4 w-5 h-5 rounded-full bg-background border-2 border-orange-500 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(249,115,22,0.4)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                </div>
                
                <div className="border border-border/60 bg-card/25 backdrop-blur-sm rounded-xl overflow-hidden hover:border-[hsl(20,100%,70%)]/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between bg-muted/20 border-b border-border/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span>ACTION 1: RUN_PROTOTYPE_SPRINT</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] border-orange-500/30 text-orange-500 bg-orange-500/5 rounded-sm h-5 px-1.5">
                      ERROR_HANDLED
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[hsl(20,100%,70%)] font-semibold uppercase tracking-wider block">APR 2024</span>
                    <h3 className="text-xl font-bold mt-1 mb-2 font-display">The First Hackathon & Hard Lessons</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Participated in my first hackathon. Rushing the schemas led to a runtime crash. Handled the exception by establishing a strict "Design-First" architecture blueprint for all future sprints.
                    </p>
                    
                    {/* Inputs & Outputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/40 mt-4 pt-3 font-mono text-[11px]">
                      <div className="space-y-1">
                        <span className="text-zinc-500">Inputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>rushCode: true</div>
                          <div>dbPlanning: false</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-500">Outputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>prototypeStatus: "Failed"</div>
                          <div>exceptionCatch: "Database schema must precede script coding"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Node 3 */}
              <div className="relative group">
                {/* Connective Flow Bullet */}
                <div className="absolute -left-[37px] md:-left-[53px] top-4 w-5 h-5 rounded-full bg-background border-2 border-emerald-500 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(16,185,129,0.4)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                
                <div className="border border-border/60 bg-card/25 backdrop-blur-sm rounded-xl overflow-hidden hover:border-[hsl(20,100%,70%)]/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between bg-muted/20 border-b border-border/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span>ACTION 2: INITIALIZE_COMMUNITY</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] border-emerald-500/30 text-emerald-500 bg-emerald-500/5 rounded-sm h-5 px-1.5">
                      COMPLETED
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[hsl(20,100%,70%)] font-semibold uppercase tracking-wider block">NOV 2024</span>
                    <h3 className="text-xl font-bold mt-1 mb-2 font-display">Founded the College Design Club</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Recognized a gap in creative opportunities for CS students. Built and structured the Design Club curriculum from the ground up, mentoring 30+ juniors in Figma, typography, and frontend aesthetics.
                    </p>
                    
                    {/* Inputs & Outputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/40 mt-4 pt-3 font-mono text-[11px]">
                      <div className="space-y-1">
                        <span className="text-zinc-500">Inputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>FigmaLabs: true</div>
                          <div>curriculum: "UI/UX & Frontend Grid"</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-500">Outputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>mentoredCount: 50</div>
                          <div>activeCollaborations: "Weekly Sprints"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Node 4 */}
              <div className="relative group">
                {/* Connective Flow Bullet */}
                <div className="absolute -left-[37px] md:-left-[53px] top-4 w-5 h-5 rounded-full bg-background border-2 border-blue-500 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(59,130,246,0.4)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                </div>
                
                <div className="border border-border/60 bg-card/25 backdrop-blur-sm rounded-xl overflow-hidden hover:border-[hsl(20,100%,70%)]/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between bg-muted/20 border-b border-border/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span>ACTION 3: REGISTER_CERTIFICATIONS</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] border-blue-500/30 text-blue-500 bg-blue-500/5 rounded-sm h-5 px-1.5">
                      SUCCESS
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[hsl(20,100%,70%)] font-semibold uppercase tracking-wider block">MAR 2025</span>
                    <h3 className="text-xl font-bold mt-1 mb-2 font-display">ServiceNow CAD & CSA Certifications</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Self-studied on the ServiceNow Developer Portal. Successfully certified as both a System Administrator (CSA) and Application Developer (CAD), mastering flow automations, scripting, and client policies.
                    </p>
                    
                    {/* Inputs & Outputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/40 mt-4 pt-3 font-mono text-[11px]">
                      <div className="space-y-1">
                        <span className="text-zinc-500">Inputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>portal: "developer.servicenow.com"</div>
                          <div>timeAllocated: "3 Months"</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-500">Outputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>credentials: ["CSA", "CAD"]</div>
                          <div>skillsApplied: "Business Rules, Flows, Client Scripts"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Node 5 */}
              <div className="relative group">
                {/* Connective Flow Bullet */}
                <div className="absolute -left-[37px] md:-left-[53px] top-4 w-5 h-5 rounded-full bg-background border-2 border-emerald-500 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(16,185,129,0.4)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                
                <div className="border border-border/60 bg-card/25 backdrop-blur-sm rounded-xl overflow-hidden hover:border-[hsl(20,100%,70%)]/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between bg-muted/20 border-b border-border/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span>ACTION 4: RUN_NATIONAL_COMPETITION</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] border-emerald-500/30 text-emerald-500 bg-emerald-500/5 rounded-sm h-5 px-1.5">
                      SUCCESS
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[hsl(20,100%,70%)] font-semibold uppercase tracking-wider block">AUG 2025</span>
                    <h3 className="text-xl font-bold mt-1 mb-2 font-display">Podium Finish at IIT Kanpur National Hackathon</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Represented my college on a national stage. Built an AI decision-support MVP and placed 4th nationally, validating our team's engineering standards.
                    </p>
                    
                    {/* Inputs & Outputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/40 mt-4 pt-3 font-mono text-[11px]">
                      <div className="space-y-1">
                        <span className="text-zinc-500">Inputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>venue: "IIT Kanpur"</div>
                          <div>domain: "AI Decision Support"</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-500">Outputs:</span>
                        <div className="pl-2 border-l border-border text-zinc-400">
                          <div>rank: <span className="text-emerald-400 font-bold">4th Place Nationally</span></div>
                          <div>validation: "High Engineering Quality"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* STUDENT JOURNEY TAB */}
        {activeTab === "student" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header callout */}
            <div className="mb-10 border border-[hsl(20,100%,70%)]/30 bg-[hsl(20,100%,70%)]/5 rounded-2xl p-6 md:p-8">
              <p className="text-[hsl(20,100%,70%)] text-xs font-mono uppercase tracking-widest mb-2 font-semibold">For Every Student Who Doubts Themselves</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">From Zero to Full-Stack — My Real B.Tech Path</h2>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                I didn't start with a roadmap. I started with curiosity and made a lot of mistakes. This is the honest, unfiltered story of how I grew from a confused 1st-year student into a MERN developer, UI/UX designer, and ServiceNow developer — one year at a time.
              </p>
            </div>

            {/* Year Timeline */}
            <div className="relative border-l-2 border-dashed border-border/50 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10 py-4">

              {/* Year 1 */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-5 w-5 h-5 rounded-full bg-background border-2 border-orange-400 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(251,146,60,0.5)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                </div>
                <div className="border border-border/60 bg-card/20 backdrop-blur-sm rounded-xl overflow-hidden hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between bg-orange-500/5 border-b border-border/40 px-5 py-2.5">
                    <span className="font-mono text-[11px] text-orange-400 font-semibold tracking-wider">🔥 1ST YEAR — AUG 2023</span>
                    <span className="text-[10px] font-mono text-muted-foreground">PHASE: IGNITION</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-xl font-bold">The Spark: Hackathons & UI/UX Discovery</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Walked into college with zero clue what a hackathon was. Attended one out of curiosity — and lost badly. But in those 24 hours, I saw teammates sketching user flows and talking about <span className="text-[hsl(20,100%,70%)] font-semibold">user experience</span>. That word stuck with me.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      I picked up Figma the next week. Watched 3-hour YouTube tutorials on typography, color theory, and layout grids. Within two months, I had designed my first app screen. It was average — but it was <em>mine</em>. That was the beginning of everything.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-400/20 rounded-full px-3 py-1 font-mono">Figma</span>
                      <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-400/20 rounded-full px-3 py-1 font-mono">UI/UX Fundamentals</span>
                      <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-400/20 rounded-full px-3 py-1 font-mono">1st Hackathon</span>
                      <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-400/20 rounded-full px-3 py-1 font-mono">Design Thinking</span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 border-t border-border/40 pt-3 mt-2">
                      💡 Lesson: <span className="text-zinc-300">"Losing teaches you more than winning. Start before you're ready."</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 2 */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-5 w-5 h-5 rounded-full bg-background border-2 border-blue-400 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(96,165,250,0.5)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <div className="border border-border/60 bg-card/20 backdrop-blur-sm rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between bg-blue-500/5 border-b border-border/40 px-5 py-2.5">
                    <span className="font-mono text-[11px] text-blue-400 font-semibold tracking-wider">🧱 2ND YEAR — AUG 2024</span>
                    <span className="text-[10px] font-mono text-muted-foreground">PHASE: BUILDING</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-xl font-bold">Frontend Dev: Turning Figma Into Real Code</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      I could design — but couldn't build. So I learned <span className="text-blue-400 font-semibold">HTML, CSS, and JavaScript</span> from scratch. Then React. I remember the exact moment `useState` clicked — it felt like a superpower.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      I started bridging my UI/UX designs with actual working interfaces. I built the Chat Application UI project, participated in more hackathons with real prototypes, and founded the <span className="text-[hsl(20,100%,70%)] font-semibold">College Design Club</span> to share what I was learning.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-blue-500/5 border border-blue-400/20 rounded-lg p-3">
                        <p className="text-[10px] font-mono text-blue-400 mb-1">SKILL UNLOCKED</p>
                        <p className="text-sm font-bold">React.js & Component Architecture</p>
                        <p className="text-xs text-muted-foreground font-sans">Props, state, hooks, re-renders — mastered the mental model.</p>
                      </div>
                      <div className="bg-blue-500/5 border border-blue-400/20 rounded-lg p-3">
                        <p className="text-[10px] font-mono text-blue-400 mb-1">MILESTONE</p>
                        <p className="text-sm font-bold">Founded College Design Club</p>
                        <p className="text-xs text-muted-foreground font-sans">Mentored 30+ peers in Figma, typography, and frontend basics.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded-full px-3 py-1 font-mono">React.js</span>
                      <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded-full px-3 py-1 font-mono">Tailwind CSS</span>
                      <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded-full px-3 py-1 font-mono">JavaScript ES6+</span>
                      <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded-full px-3 py-1 font-mono">Responsive Design</span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 border-t border-border/40 pt-3 mt-2">
                      💡 Lesson: <span className="text-zinc-300">"Teach what you learn. It forces you to truly understand it."</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 3 */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-5 w-5 h-5 rounded-full bg-background border-2 border-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(52,211,153,0.5)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="border border-border/60 bg-card/20 backdrop-blur-sm rounded-xl overflow-hidden hover:border-emerald-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between bg-emerald-500/5 border-b border-border/40 px-5 py-2.5">
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold tracking-wider">⚡ 3RD YEAR — AUG 2025</span>
                    <span className="text-[10px] font-mono text-muted-foreground">PHASE: SCALING</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-xl font-bold">Backend, DSA & ServiceNow — Going Full-Stack</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Frontend wasn't enough anymore. I needed to understand <span className="text-emerald-400 font-semibold">why</span> things worked, not just how to display them. I dove into <span className="text-emerald-400 font-semibold">Node.js, Express, and MongoDB</span> — building REST APIs and learning about auth flows, middleware, and database design.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Simultaneously, I tackled <span className="text-[hsl(20,100%,70%)] font-semibold">Data Structures & Algorithms</span> seriously — Trees, Graphs, Dynamic Programming. And then came the unexpected turn: <span className="text-emerald-400 font-semibold">ServiceNow</span>. I earned my CSA and CAD certifications and started building enterprise-level workflow automations. Three worlds — backend, DSA, and enterprise ITSM — merged into one skillset.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="bg-emerald-500/5 border border-emerald-400/20 rounded-lg p-3">
                        <p className="text-[10px] font-mono text-emerald-400 mb-1">BACKEND</p>
                        <p className="text-sm font-bold">Node + Express + MongoDB</p>
                        <p className="text-xs text-muted-foreground font-sans">Full REST API design with JWT auth.</p>
                      </div>
                      <div className="bg-emerald-500/5 border border-emerald-400/20 rounded-lg p-3">
                        <p className="text-[10px] font-mono text-emerald-400 mb-1">ALGORITHMS</p>
                        <p className="text-sm font-bold">DSA & Problem Solving</p>
                        <p className="text-xs text-muted-foreground font-sans">Trees, DP, Graphs — competitive readiness.</p>
                      </div>
                      <div className="bg-emerald-500/5 border border-emerald-400/20 rounded-lg p-3">
                        <p className="text-[10px] font-mono text-emerald-400 mb-1">ENTERPRISE</p>
                        <p className="text-sm font-bold">ServiceNow CSA + CAD</p>
                        <p className="text-xs text-muted-foreground font-sans">Certified. Flows, scripts, client policies.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 rounded-full px-3 py-1 font-mono">Node.js</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 rounded-full px-3 py-1 font-mono">Express.js</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 rounded-full px-3 py-1 font-mono">MongoDB</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 rounded-full px-3 py-1 font-mono">DSA</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 rounded-full px-3 py-1 font-mono">ServiceNow</span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 border-t border-border/40 pt-3 mt-2">
                      💡 Lesson: <span className="text-zinc-300">"The best engineers connect the dots across layers — UI to DB to enterprise workflow."</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-5 w-5 h-5 rounded-full bg-background border-2 border-[hsl(20,100%,70%)] group-hover:scale-125 transition-all shadow-[0_0_10px_hsl(20,100%,70%,0.5)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[hsl(20,100%,70%)] animate-pulse" />
                </div>
                <div className="border border-[hsl(20,100%,70%)]/40 bg-[hsl(20,100%,70%)]/5 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between bg-[hsl(20,100%,70%)]/10 border-b border-[hsl(20,100%,70%)]/30 px-5 py-2.5">
                    <span className="font-mono text-[11px] text-[hsl(20,100%,70%)] font-semibold tracking-wider">🚀 WHAT'S NEXT — 4TH YEAR</span>
                    <span className="text-[10px] font-mono text-[hsl(20,100%,70%)]">[IN PROGRESS...]</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2">Open to Work & Internships</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      Actively seeking internship and full-time opportunities in <span className="text-[hsl(20,100%,70%)] font-semibold">Frontend Development, Full-Stack MERN, UI/UX Design, and ServiceNow Development</span>. My 3-year journey is proof that consistent curiosity beats natural talent every time.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans mt-2">
                      If you're a student reading this — you don't need to figure it all out in Year 1. Just start <em>something</em>. A design. A script. A hackathon. The momentum will carry you the rest of the way.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* THEORY TAB */}
        {activeTab === "theory" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              <div className="bg-card/20 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(20,100%,70%)]/10 text-[hsl(20,100%,70%)] flex items-center justify-center flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2">The Design-Engineering Bridge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Great designs fail if the code doesn't match, and clean code feels dull without good user experience. I build software that connects both worlds, ensuring pixel-perfect layout and smooth micro-animations.
                  </p>
                </div>
              </div>

              <div className="bg-card/20 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(20,100%,70%)]/10 text-[hsl(20,100%,70%)] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2">Simplicity Beats Overcomplication</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Having failed my first hackathon due to scope creep and unstable schemas, I believe a simple, fully-functional, polished MVP is infinitely better than an incomplete, massive, buggy codebase.
                  </p>
                </div>
              </div>

              <div className="bg-card/20 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(20,100%,70%)]/10 text-[hsl(20,100%,70%)] flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2">Clean, Modular Systems</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Whether designing full-stack MERN apps or scripting business logic on ServiceNow, I structure codebases with strict separations of concerns and clean directories so they remain scalable and easily maintainable.
                  </p>
                </div>
              </div>

              <div className="bg-card/20 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(20,100%,70%)]/10 text-[hsl(20,100%,70%)] flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2">Analyzing Failures for Growth</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Winning 3 out of 5 hackathons wasn't a coincidence — it was the result of systematically identifying what went wrong in our losses and correcting them. I treat every blocker as a blueprint for refinement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
