import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const Footer: React.FC = () => {
  const { playHoverSound, playClickSound } = useSound();

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030611] pt-16 pb-12 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-12">
          {/* Logo & Tagline */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple p-[1.5px] shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                  MSP
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Mohammed Shibil P
              </span>
            </div>
            <p className="text-xs text-text-muted max-w-sm font-mono">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-slate-400 hover:text-accent-blue hover:border-accent-blue transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-slate-400 hover:text-accent-blue hover:border-accent-blue transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={playHoverSound}
              className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-slate-400 hover:text-accent-blue hover:border-accent-blue transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              onMouseEnter={playHoverSound}
              className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-slate-400 hover:text-accent-blue hover:border-accent-blue transition-all"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="group px-5 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white hover:border-accent-blue hover:text-accent-blue transition-all flex items-center gap-2 text-xs font-heading font-bold"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-accent-cyan" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Mohammed Shibil P. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React 19, Vite, Tailwind & DevOps Pride</span>
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          </p>
        </div>
      </div>
    </footer>
  );
};
