import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Server,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import { Project } from '../types';
import { useSound } from '../context/SoundContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playClickSound } = useSound();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto z-10 shadow-[0_0_60px_rgba(34,211,238,0.2)]"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-accent-blue transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-blue/20 text-accent-blue border border-accent-blue/40 mb-2 inline-block">
                  {project.category}
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-accent-cyan mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/90 border border-white/15 text-white hover:border-accent-blue hover:text-accent-blue transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-heading font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Full Description & Case Study */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent-blue" />
              <span>Project Case Study & Overview</span>
            </h3>
            <p className="text-text-muted text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Features & Functional Specifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <ShieldCheck className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-slate-900 text-accent-blue border border-accent-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
