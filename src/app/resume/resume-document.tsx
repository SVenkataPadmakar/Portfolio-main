"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ResumeDocument() {
  return (
    <div className="resume-sheet w-full bg-white text-slate-900 font-sans p-6 sm:p-10 md:p-12 shadow-2xl rounded-2xl print:p-0 print:shadow-none print:rounded-none max-w-4xl mx-auto leading-normal print:leading-tight">
      {/* Resume Top Header — uses div so global navbar rules never hide it in print */}
      <div className="resume-header border-b-2 border-slate-900 pb-3 text-center print:pb-1.5 print:border-b-[1.5px]">
        <h1 className="resume-name text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-slate-950 font-display print:text-[17pt] print:leading-none print:font-bold">
          SIMHADRI VENKATA PADMAKAR
        </h1>
        <p className="resume-title text-xs sm:text-sm font-bold tracking-widest text-slate-700 uppercase mt-1 print:text-[8pt] print:mt-0.5 print:tracking-wider">
          SOFTWARE ENGINEER · FULL-STACK DEVELOPER · AI/ML
        </p>
        <div className="resume-contact flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs text-slate-600 mt-1.5 font-medium print:text-[7.5pt] print:mt-0.5">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 print:hidden" /> Andhra Pradesh, India
          </span>
          <span>•</span>
          <a href="tel:+917013542677" className="hover:text-blue-600 transition-colors text-slate-800 font-semibold print:text-black">
            +91 7013542677
          </a>
          <span>•</span>
          <a href="mailto:svenkatapadmakar@gmail.com" className="hover:text-blue-600 transition-colors text-slate-800 font-semibold print:text-black">
            svenkatapadmakar@gmail.com
          </a>
        </div>
        <div className="resume-links flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs text-blue-700 mt-1 font-semibold print:text-[7.5pt] print:mt-0.5 print:text-blue-800">
          <a href="https://github.com/SVenkataPadmakar" target="_blank" rel="noreferrer" className="hover:underline">
            github.com/SVenkataPadmakar
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/simhadri-venkata-padmakar" target="_blank" rel="noreferrer" className="hover:underline">
            linkedin.com/in/simhadri-venkata-padmakar
          </a>
          <span>•</span>
          <a href="https://leetcode.com/u/VenkyVox" target="_blank" rel="noreferrer" className="hover:underline">
            leetcode.com/u/VenkyVox
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="resume-body text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify print:text-[7.5pt] print:leading-[1.25] print:text-slate-900">
          Computer Science undergraduate specializing in Artificial Intelligence &amp; Machine Learning (CGPA: 8.12/10), with hands-on experience building full-stack, RESTful web applications and applying machine learning to real-world academic and recruitment platforms. Proficient in Python, Java, and modern web technologies including React.js and PHP, with a solid foundation in data structures, algorithms, and database-driven system design. Known for translating complex requirements into scalable, production-ready features through close collaboration with cross-functional teams. Seeking an entry-level Software Engineer / Full-Stack Developer role at a product-driven company to build impactful, user-centric software.
        </p>
      </section>

      {/* Education */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          EDUCATION
        </h2>
        <div className="space-y-2.5 print:space-y-0.5">
          <div className="resume-item">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 print:text-[8pt]">
                GMR Institute of Technology, Rajam — <span className="font-semibold text-slate-700 print:text-slate-800">B.Tech, CSE (AI &amp; Machine Learning)</span>
              </h3>
              <span className="text-xs font-semibold text-slate-600 font-mono print:text-[7.5pt]">2024 – 2027</span>
            </div>
            <p className="text-xs text-slate-700 font-medium print:text-[7.5pt] print:text-slate-800">CGPA: 8.12 / 10.0</p>
          </div>

          <div className="resume-item">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 print:text-[8pt]">
                Government Polytechnic, Anakapalle — <span className="font-semibold text-slate-700 print:text-slate-800">Diploma, Computer Engineering</span>
              </h3>
              <span className="text-xs font-semibold text-slate-600 font-mono print:text-[7.5pt]">2021 – 2024</span>
            </div>
            <p className="text-xs text-slate-700 font-medium print:text-[7.5pt] print:text-slate-800">Percentage: 85.72%</p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          TECHNICAL SKILLS
        </h2>
        <ul className="text-xs sm:text-[13px] space-y-1 text-slate-800 print:text-[7.5pt] print:space-y-0.5 print:leading-[1.25]">
          <li><strong>Programming Languages:</strong> Python, Java</li>
          <li><strong>Web Technologies:</strong> React.js, PHP, HTML5, CSS3, JavaScript, REST APIs</li>
          <li><strong>Database:</strong> MySQL, Database Management Systems (DBMS)</li>
          <li><strong>AI/ML:</strong> Machine Learning Fundamentals</li>
          <li><strong>Core Concepts:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, Computer Networks, Software Engineering</li>
          <li><strong>Tools &amp; Platforms:</strong> GitHub, Visual Studio Code</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          PROJECTS
        </h2>
        <div className="space-y-3 print:space-y-1">
          <div className="resume-item">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 print:text-[8pt]">
                Recruit Us — <span className="font-semibold text-slate-700 print:text-slate-800">Full-Stack Job Recruitment Platform</span>
              </h3>
              <span className="text-[11px] font-medium text-slate-600 italic print:text-[7pt]">React.js, PHP, MySQL, JS, HTML5, CSS3</span>
            </div>
            <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed print:text-[7.5pt] print:space-y-0 print:leading-[1.2] print:text-slate-900">
              <li>Built full-stack recruitment platform enabling recruiters to post jobs and candidates to apply, track, and manage applications.</li>
              <li>Implemented secure user authentication, session management, and role-based authorization using PHP and MySQL.</li>
              <li>Designed responsive React.js interface and optimized SQL queries to minimize database latency.</li>
              <li>Built RESTful API endpoints powering real-time job listings, application status updates, and recruiter dashboard.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 print:text-[8pt]">
                Student Excellence Platform — <span className="font-semibold text-slate-700 print:text-slate-800">Centralized Academic System</span>
              </h3>
              <span className="text-[11px] font-medium text-slate-600 italic print:text-[7pt]">React.js, Node.js, Express.js, MongoDB, ML</span>
            </div>
            <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed print:text-[7.5pt] print:space-y-0 print:leading-[1.2] print:text-slate-900">
              <li>Architected centralized web platform featuring certificate verification module to validate student credentials in real time.</li>
              <li>Engineered modular Node.js/Express.js backend with REST APIs and MongoDB, supporting concurrent multi-user access.</li>
              <li>Integrated ML recommendation models generating academic improvement insights from performance data.</li>
              <li>Developed performance-optimized React.js frontend with role-based dashboards for students and administrators.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          WORK EXPERIENCE
        </h2>
        <div className="resume-item">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
            <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 print:text-[8pt]">
              Vinukoti Business Solutions — <span className="font-semibold text-slate-700 print:text-slate-800">Web Development Intern</span>
            </h3>
            <span className="text-xs font-semibold text-slate-600 font-mono print:text-[7.5pt]">Dec 2023 – May 2024</span>
          </div>
          <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed print:text-[7.5pt] print:space-y-0 print:leading-[1.2] print:text-slate-900">
            <li>Developed and maintained full-stack web modules, integrating responsive front-end interfaces with PHP and MySQL backend services.</li>
            <li>Collaborated with cross-functional teams to deliver scalable database-driven features; improved query performance through schema restructuring.</li>
            <li>Conducted code reviews, bug triage, and deployment workflows, gaining hands-on exposure to real-world SDLC practices.</li>
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          ACHIEVEMENTS
        </h2>
        <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed print:text-[7.5pt] print:space-y-0 print:leading-[1.2] print:text-slate-900">
          <li>Earned a Participation Certificate at the <strong>Piston Hackathon</strong> for a multi-team coding and product-building challenge.</li>
          <li>Completed a hands-on <strong>Agentic AI Workshop</strong> covering autonomous AI agent architectures and real-world AI deployment.</li>
          <li>Participated in the <strong>Gen AI Launchpad Hackathon</strong> at GMRIT.</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="resume-sec mt-4 print:mt-1.5">
        <h2 className="resume-sec-title text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-display print:text-[8.5pt] print:mb-0.5 print:pb-0.5 print:border-b-[1px]">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed print:text-[7.5pt] print:space-y-0 print:leading-[1.2] print:text-slate-900">
          <li><strong>Python Basics (Programming Fundamentals)</strong> — Cisco</li>
          <li><strong>Full Stack Web Development</strong> — L&T EduTech</li>
        </ul>
      </section>
    </div>
  );
}
