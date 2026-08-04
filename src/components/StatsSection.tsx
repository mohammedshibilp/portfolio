import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Briefcase, Cpu, Infinity as InfinityIcon } from 'lucide-react';
import { STATS_DATA } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const StatsSection: React.FC = () => {
  const { playHoverSound } = useSound();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-accent-blue" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-accent-purple" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-accent-cyan" />;
      case 'Infinity':
        return <InfinityIcon className="w-6 h-6 text-emerald-400" />;
      default:
        return <Cpu className="w-6 h-6 text-accent-blue" />;
    }
  };

  return (
    <section className="relative py-12 border-y border-white/10 bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden group"
            >
              {/* Background Glow Pill */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl group-hover:bg-accent-blue/30 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-slate-900 px-2 py-1 rounded border border-white/5">
                  METRIC #{index + 1}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight group-hover:text-accent-blue transition-colors">
                  {stat.value}
                </h3>
                <p className="font-heading font-bold text-sm text-text-primary">
                  {stat.label}
                </p>
                <p className="text-xs text-text-muted font-body">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
