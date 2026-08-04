import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Search, Code, Server, User, Folder, Award, Send } from 'lucide-react';
import { useSound } from '../context/SoundContext';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const { playClickSound, playTerminalSound } = useSound();
  const [query, setQuery] = useState('');

  const commands = [
    { id: 'home', label: 'Go to Home / Hero Section', icon: <User className="w-4 h-4 text-accent-blue" />, action: () => onNavigate('#home') },
    { id: 'about', label: 'Go to About & Biography', icon: <Server className="w-4 h-4 text-accent-purple" />, action: () => onNavigate('#about') },
    { id: 'experience', label: 'Go to Work Experience', icon: <Code className="w-4 h-4 text-emerald-400" />, action: () => onNavigate('#experience') },
    { id: 'projects', label: 'Go to Projects Showcase', icon: <Folder className="w-4 h-4 text-amber-400" />, action: () => onNavigate('#projects') },
    { id: 'skills', label: 'Go to Skills & Technologies', icon: <Code className="w-4 h-4 text-accent-cyan" />, action: () => onNavigate('#skills') },
    { id: 'certifications', label: 'Go to Certifications', icon: <Award className="w-4 h-4 text-pink-400" />, action: () => onNavigate('#certifications') },
    { id: 'contact', label: 'Go to Contact Form', icon: <Send className="w-4 h-4 text-accent-blue" />, action: () => onNavigate('#contact') },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playTerminalSound();
          // Trigger open in parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="fixed inset-0 bg-[#050816]/80 backdrop-blur-xl"
        />

        {/* Palette Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl glass-card rounded-2xl border border-white/20 p-4 space-y-3 z-10 shadow-[0_0_50px_rgba(34,211,238,0.3)] bg-[#030611]"
        >
          {/* Input Box */}
          <div className="relative flex items-center border-b border-white/10 pb-3">
            <Terminal className="w-5 h-5 text-accent-cyan mr-3" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or jump to section (e.g. Projects, Skills)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white font-mono placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="space-y-1 max-h-64 overflow-y-auto pt-1">
            {filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => {
                  playClickSound();
                  cmd.action();
                  onClose();
                }}
                className="w-full p-3 rounded-xl hover:bg-slate-900 border border-transparent hover:border-white/10 flex items-center justify-between text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-white/5">
                    {cmd.icon}
                  </div>
                  <span className="font-heading text-xs font-bold text-slate-200 group-hover:text-accent-blue">
                    {cmd.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded">
                  JUMP
                </span>
              </button>
            ))}

            {filteredCommands.length === 0 && (
              <div className="p-4 text-center text-xs font-mono text-slate-500">
                No matching CLI commands found.
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Press ESC to exit</span>
            <span className="text-accent-cyan">DevOps CLI v2.6</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
