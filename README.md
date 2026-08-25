# 🚀 Simhadri Venkata Padmakar — 3D Developer Portfolio

An interactive, modern, and futuristic 3D developer portfolio showcasing projects, technical skills, experience, and achievements through immersive animations and a futuristic UI. Built with **Next.js 16**, **React 19**, **TypeScript**, **GSAP**, and **Spline 3D**.

> ⭐ If you find this project inspiring, consider giving the repository a star!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SVenkataPadmakar/Portfolio-main)

![Portfolio Preview](public/assets/projects-screenshots/portfolio/landing.png)

---

# ✨ Highlights & Key Features

- 🎹 **Interactive 3D Mechanical Keyboard**: Real-time 3D skill visualizer powered by Spline with custom audio, animations, and camera trajectories.
- 📄 **Digital & ATS-Optimized Résumé**: Integrated online interactive résumé with a 1-page A4 print stylesheet and instant PDF export.
- 🤖 **Agentic AI & ML Showcases**: Highlights multi-agent systems, LangGraph/LangChain workflows, and production LLM integrations.
- 🚀 **Smooth GSAP & Framer Motion**: Scroll-driven scene choreography, elastic cursor physics, and micro-interactions.
- 🌌 **Cyberpunk Dark & Light Modes**: Seamless theme switching with persistent preferences and zero FOUC.
- 📱 **Fully Responsive Layout**: Adaptive 3D camera angles and layouts optimized across mobile, tablet, and ultra-wide screens.
- 📧 **Interactive Contact Flow**: Validated contact form with direct email delivery and mailto fallbacks.

---

# 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| Framework | Next.js, React, TypeScript |
| AI & ML | LangGraph, LangChain, Python, FastAPI, OpenAI, Gemini |
| Styling | Tailwind CSS, Shadcn UI, Aceternity UI, Sass |
| Animation | GSAP, Framer Motion, Lenis |
| 3D | Spline |
| Databases | PostgreSQL (with pgvector), MongoDB, MySQL |
| Deployment | Vercel, Docker, AWS |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/SVenkataPadmakar/Portfolio-main.git
cd Portfolio-main
```

## Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

## Environment Variables

Create a `.env.local` file at the root directory:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_WS_URL=
UMAMI_DOMAIN=
UMAMI_SITE_ID=
```

## Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

# 🎨 Personalization

Update your personal information in:

```
src/data/config.ts
```

Example configuration structure:

```ts
const config = {
  title: "Simhadri Venkata Padmakar | AI Engineer & Full Stack Developer",

  description: {
    long: "Portfolio of Simhadri Venkata Padmakar — AI Engineer, Machine Learning Developer, and Full Stack Engineer. Specializing in Multi-Agent AI systems, Generative AI, Next.js, React, Python, and scalable startup engineering.",
    short: "Portfolio of Simhadri Venkata Padmakar — AI Engineer & Full Stack Developer.",
  },

  keywords: [
    "Simhadri Venkata Padmakar",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "TypeScript",
    "Agentic AI",
    "3D Portfolio",
  ],

  author: "Simhadri Venkata Padmakar",
  displayName: "Simhadri Venkata Padmakar",
  location: "Andhra Pradesh, India",

  email: "svenkatapadmakar@gmail.com",
  site: "https://simhadripadmakar.dev",
  githubUsername: "SVenkataPadmakar",
  githubRepo: "Portfolio-main",

  social: {
    twitter: "https://x.com/simhadripadmakar",
    linkedin: "https://www.linkedin.com/in/simhadri-venkata-padmakar",
    github: "https://github.com/SVenkataPadmakar",
    leetcode: "https://leetcode.com/u/VenkyVox",
    instagram: "https://www.instagram.com/simhadripadmakar",
  },
};
```

---

# 📂 Customize Portfolio

| File / Folder | Description |
|------|-------------|
| `src/data/config.ts` | Personal Information |
| `src/data/projects.tsx` | Featured and Web Projects |
| `src/data/constants.ts` | Technical Skills & Work Experience |
| `public/assets/` | Images, Screenshots, Spline Assets, and Audio |

---

# ⌨️ Updating the 3D Keyboard

The interactive skills keyboard is built in **Spline**.

To customize:
1. Open `public/assets/skills-keyboard.spline` in Spline
2. Edit keycaps, icons, or lighting
3. Ensure keycap names match their corresponding entries in `src/data/constants.ts`
4. Export as a Spline binary file and replace the existing one in `public/assets/`

---

# 👨‍💻 About Me

Hi, I'm **Simhadri Venkata Padmakar**.

I'm an AI Engineer and Full-Stack Developer specializing in:
- **Agentic AI & Generative AI**: Architecting multi-agent workflows using LangGraph and LangChain.
- **Full-Stack Development**: Building modern web platforms using Next.js, React, Node.js, and FastAPI.
- **Machine Learning & Deep Learning**: Implementing custom predictive models, OCR, and computer vision systems.
- **Database Engineering**: Designing optimized relational schemas in PostgreSQL and MySQL.

---

# 🔗 Repository

https://github.com/SVenkataPadmakar/Portfolio-main

---

# 📄 License

This project is licensed under the MIT License.



