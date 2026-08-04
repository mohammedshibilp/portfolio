import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Terminal,
  FileDown,
  Menu,
  X,
  Code2,
  Sparkles,
} from 'lucide-react';
import { useSound } from '../context/SoundContext';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
  onOpenGoogleAuthModal: () => void;
  userEmail?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenResumeModal,
  onOpenGoogleAuthModal,
  userEmail,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { soundEnabled, toggleSound, playHoverSound, playClickSound } = useSound();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll Spy logic
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playClickSound();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar py-3 shadow-2xl shadow-black/50' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                MSP
              </div>
            </div>
            <div className="hidden sm:block text-left">
              <span className="block font-heading font-bold text-white tracking-wider text-base group-hover:text-accent-blue transition-colors">
                Mohammed Shibil P
              </span>
              <span className="block text-[10px] font-mono text-accent-cyan tracking-widest uppercase">
                DevOps Engineer Intern
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 rounded-full border border-accent-blue/50 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Terminal CLI Command Palette Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenCommandPalette();
              }}
              onMouseEnter={playHoverSound}
              title="Open DevOps Terminal (Ctrl + K)"
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-text-muted hover:text-accent-blue hover:border-accent-blue/40 transition-all flex items-center gap-1.5 text-xs font-mono group"
            >
              <Terminal className="w-4 h-4 text-accent-cyan group-hover:animate-pulse" />
              <span className="hidden xl:inline text-[11px]">CLI</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 rounded border border-slate-700 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                toggleSound();
                playClickSound();
              }}
              onMouseEnter={playHoverSound}
              title={soundEnabled ? 'Mute Cyber Audio Effects' : 'Enable Cyber Audio Effects'}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled
                  ? 'bg-accent-blue/15 border-accent-blue text-accent-blue shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                  : 'bg-slate-900/80 border-white/10 text-text-muted hover:text-white'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>



            {/* Download CV / Resume Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenResumeModal();
              }}
              onMouseEnter={playHoverSound}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-bg-primary font-heading font-bold text-xs shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              <span>Resume</span>
              <Sparkles className="w-3.5 h-3.5 text-bg-primary opacity-70 group-hover:opacity-100 animate-spin-slow" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-text-muted hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent-blue" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-navbar border-t border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? 'bg-accent-blue/15 text-accent-blue border border-accent-blue/30 font-semibold'
                      : 'text-text-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <Code2 className="w-4 h-4 opacity-40" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-text-muted hover:text-accent-blue flex items-center justify-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-accent-cyan" />
                  <span>Terminal CLI</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-heading font-bold text-xs flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
