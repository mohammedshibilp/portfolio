import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { useSound } from '../context/SoundContext';

export const ProjectsSection: React.FC = () => {
  const { playHoverSound, playClickSound } = useSound();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = ['All', 'Enterprise Web', 'EdTech SaaS', 'Corporate', 'AI & Security', 'Mobile'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Enterprise Web') return project.category.includes('Enterprise');
    if (selectedFilter === 'EdTech SaaS') return project.category.includes('EdTech');
    if (selectedFilter === 'Corporate') return project.category.includes('Corporate');
    if (selectedFilter === 'AI & Security') return project.category.includes('AI') || project.category.includes('Cybersecurity');
    if (selectedFilter === 'Mobile') return project.category.includes('Mobile');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED ENGINEERING PROJECTS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            Portfolio <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Production-ready web applications, DevOps infrastructure pipelines, AI security tools, and mobile apps.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  playClickSound();
                  setSelectedFilter(tab);
                }}
                onMouseEnter={playHoverSound}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                  selectedFilter === tab
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group relative"
            >
              {/* Project Image Header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1226] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-accent-cyan border border-white/10 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Highlights Pills */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                  {project.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[9px] font-mono bg-accent-purple/20 text-accent-purple border border-accent-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-cyan">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-3 font-body">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-mono bg-slate-900 text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      playClickSound();
                      setActiveModalProject(project);
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-heading font-bold text-white border border-white/10 hover:border-accent-blue transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-accent-blue transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-accent-blue/15 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue hover:text-bg-primary transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
