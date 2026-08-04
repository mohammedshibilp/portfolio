import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Terminal, Server, Cloud, Code, Smartphone } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const CertificationsSection: React.FC = () => {
  const { playHoverSound } = useSound();

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-accent-blue" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-accent-purple" />;
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-pink-400" />;
      default:
        return <Award className="w-6 h-6 text-accent-blue" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            Certifications & <span className="gradient-text-primary">Internships</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Certified technical competencies in Linux Administration, AWS Cloud, DevOps, and Full Stack Engineering.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Background Glow Badge */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl group-hover:bg-accent-purple/20 transition-all" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED ({cert.date})
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-purple">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                {/* Topics Covered */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Core Skills Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-accent-cyan">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Credential ID: AK-8042-DEVOPS
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
