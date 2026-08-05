import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  Mail,
  Github,
  Linkedin,
  Phone,
  Sparkles,
  Server,
  Cpu,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { TextStagger } from './ui/TextStagger';
import { MagneticButton } from './ui/MagneticButton';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { playHoverSound, playClickSound } = useSound();

  // Typing animation state
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = PERSONAL_INFO.typingItems[typingIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTypingIndex((prev) => (prev + 1) % PERSONAL_INFO.typingItems.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Server Rack Lighting Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent-blue/10 via-accent-purple/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - 55% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </span>
              <span>Available for Senior DevOps & Full-Stack Engineering Roles</span>
            </div>

            {/* Staggered Text Title */}
            <div className="space-y-1">
              <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white">
                <TextStagger text="Mohammed" delay={0.1} />
              </h1>
              <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none gradient-text-primary">
                <TextStagger text="Shibil P" delay={0.3} />
              </h1>
            </div>

            {/* Subtitle & Company */}
            <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-heading font-semibold">
              <span className="text-text-primary">DevOps & Full-Stack Engineer</span>
              <span className="text-accent-blue">@</span>
              <span className="text-accent-purple font-bold underline decoration-accent-purple/40 underline-offset-4">
                Akumen Technologies
              </span>
            </div>

            {/* Animated Typing Loop */}
            <div className="h-10 flex items-center font-mono text-lg sm:text-xl text-accent-cyan bg-slate-950/60 px-4 py-2 rounded-xl border border-white/10 w-fit backdrop-blur-md">
              <Terminal className="w-5 h-5 mr-3 text-accent-purple shrink-0" />
              <span>&gt; {displayText}</span>
              <span className="w-2.5 h-5 bg-accent-blue ml-1 animate-blink inline-block" />
            </div>

            {/* Short Paragraph */}
            <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-body">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Call To Action Buttons with Magnetic Pull */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                onClick={() => {
                  playClickSound();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={playHoverSound}
              >
                <div className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-bg-primary font-heading font-bold text-sm shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all flex items-center gap-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </MagneticButton>

              <MagneticButton
                onClick={() => {
                  playClickSound();
                  onOpenResumeModal();
                }}
                onMouseEnter={playHoverSound}
              >
                <div className="px-6 py-3.5 rounded-xl glass-card text-white hover:border-accent-blue/50 font-heading font-bold text-sm transition-all flex items-center gap-2 border border-white/15">
                  <FileText className="w-4 h-4 text-accent-cyan" />
                  <span>Download Resume</span>
                </div>
              </MagneticButton>

              <MagneticButton
                onClick={() => {
                  playClickSound();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={playHoverSound}
              >
                <div className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-accent-purple/20 text-accent-purple border border-accent-purple/40 font-heading font-bold text-sm transition-all flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </div>
              </MagneticButton>
            </div>

            {/* Social Icons Grid */}
            <div className="pt-4 flex items-center gap-4 text-text-muted">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHoverSound}
                  title="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHoverSound}
                  title="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={playHoverSound}
                  title="Email Direct"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  onMouseEnter={playHoverSound}
                  title="Phone Contact"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 45% - Passport Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Cyber Server Grid Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/20 via-accent-purple/20 to-transparent rounded-3xl blur-3xl -z-10" />

            {/* Glowing Hexagon / Server Topology Ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-accent-blue/30 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-accent-purple/20 border-dashed pointer-events-none" />

            {/* Passport Photo Frame Container */}
            <div className="relative z-10 w-full max-w-sm">
              {/* Blue & Purple Dual Rim Light Filter Aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple rounded-3xl opacity-80 blur-md" />

              <div className="relative rounded-3xl overflow-hidden bg-[#0A1226]/95 border border-white/20 p-3 shadow-[0_0_50px_rgba(34,211,238,0.3)] space-y-4">
                {/* Simulated Passport Photo Header Bar */}
                <div className="flex items-center justify-between px-2 pt-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-ping" />
                    <span className="text-[11px] text-slate-300 font-semibold">OFFICIAL ID BADGE</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                {/* Passport Size Portrait Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/5] bg-slate-950">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/shibil-passport.jpg`}
                    alt="Mohammed Shibil P - Passport Photo"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  />
                  
                  {/* Subtle Gradient Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A1226] via-[#0A1226]/60 to-transparent" />
                </div>

                {/* Live Badge Overlay */}
                <div className="glass-card p-3 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-between z-30">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-accent-blue/20 text-accent-blue">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-heading font-bold text-white">Mohammed Shibil P</p>
                      <p className="text-[10px] font-mono text-accent-cyan">DevOps Engineer Intern @ Akumen</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Floating DevOps Tech Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-6 z-20 glass-card px-3.5 py-2 rounded-xl border border-accent-blue/40 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-accent-blue" />
              <span className="text-xs font-mono font-bold text-white">Linux Admin</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 -right-8 z-20 glass-card px-3.5 py-2 rounded-xl border border-accent-purple/40 shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-accent-purple" />
              <span className="text-xs font-mono font-bold text-white">AWS & Docker</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-12 -left-8 z-20 glass-card px-3.5 py-2 rounded-xl border border-accent-cyan/40 shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-xs font-mono font-bold text-white">CI/CD Automation</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
