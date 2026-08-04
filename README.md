# Mohammed Shibil P — World-Class DevOps Engineer Portfolio

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-8B5CF6.svg)](https://www.framer.com/motion/)

An ultra-premium, futuristic personal portfolio website for **Mohammed Shibil P**, DevOps Engineer Intern at Akumen Technologies. Designed with dark mode glassmorphism, cyberpunk aesthetics, interactive Three.js 3D server node background, real-time CI/CD pipeline visualizer, interactive DevOps CLI terminal (`Ctrl + K`), and verified certification badges.

---

## 🚀 Features

- 💎 **Ultra-Premium Cyberpunk Aesthetics**: Deep dark background (`#050816`), neon cyan (`#22D3EE`) & purple (`#8B5CF6`) gradients, glassmorphism card surfaces.
- 👤 **Preserved Photo Integration**: High-resolution subject photo with custom cyan/purple rim lighting, server rack glow backdrop, and soft ground shadow.
- ⚡ **Interactive 3D Background Canvas**: Built with Three.js featuring responsive network topology particle nodes and mouse parallax effect.
- 🔄 **Live CI/CD Pipeline Simulator**: Interactive workflow demonstrating Git push, automated tests, security scans, Docker builds, and AWS Kubernetes deployment.
- 💻 **Embedded DevOps Terminal**: Interactive bash shell simulator (`systemctl status`, `whoami`, `cat skills.txt`, `uptime`) + quick `Ctrl + K` Command Palette.
- 📊 **GitHub Activity Heatmap**: Interactive calendar contribution heat map, top language breakdown, and starred repository metrics.
- 📁 **Filterable Projects Showcase**: 6 featured projects with full-screen Case Study modals.
- 📄 **Interactive Resume Modal**: Real-time CV preview with instant `.txt` / PDF export options.
- 🎵 **Web Audio Sound Effects**: Subtle, high-tech UI audio feedback powered by native Web Audio API (toggleable).

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 6 + TypeScript 5
- **Styling**: Tailwind CSS + Vanilla CSS Tokens
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js
- **Form & Mail**: React Hook Form + EmailJS + React Hot Toast + Canvas Confetti
- **Icons**: Lucide Icons + React Icons

---

## 💻 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/MohammedShibilP/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Production Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with `base: '/portfolio/'`.
2. Run `npm run build`.
3. Deploy the contents of the `dist/` folder.
