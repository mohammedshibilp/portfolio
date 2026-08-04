import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const ExperienceTimeline: React.FC = () => {
  const { playHoverSound } = useSound();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & INTERNSHIP TIMELINE</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            Work <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Hands-on industry experience building scalable cloud infrastructure and mobile applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-32 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={playHoverSound}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Glowing Timeline Connector Node */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-accent-blue text-bg-primary border-accent-cyan shadow-[0_0_20px_rgba(34,211,238,0.8)]'
                    : 'bg-slate-900 text-slate-400 border-white/20 group-hover:border-accent-purple group-hover:text-accent-purple'
                }`}
              >
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Glass Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
                {/* Background Accent Pill */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl group-hover:bg-accent-blue/15 transition-all" />

                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-heading font-bold text-2xl text-white group-hover:text-accent-blue transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-bold bg-accent-blue/20 text-accent-blue border border-accent-blue/40 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
                          PRESENT
                        </span>
                      )}
                    </div>
                    <p className="font-heading font-semibold text-lg text-accent-purple">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted">
                    <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-accent-purple" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Overview Description */}
                <p className="text-text-muted text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities Bullet List */}
                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-blue" />
                    <span>Key Key Deliverables & Achievements</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-900/90 text-accent-blue border border-accent-blue/20 hover:border-accent-blue/50 transition-colors"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
