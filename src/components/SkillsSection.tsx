import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Server,
  Code,
  Layout,
  Database,
  Search,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const SkillsSection: React.FC = () => {
  const { playHoverSound, playClickSound } = useSound();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'DevOps & Cloud':
        return <Server className="w-5 h-5 text-accent-blue" />;
      case 'Programming & Automation':
        return <Code className="w-5 h-5 text-accent-purple" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-accent-cyan" />;
      case 'Backend & Databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-accent-blue" />;
    }
  };

  const categoriesList = ['All', ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
    const matchingSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...category,
      isVisible: matchesCategory && matchingSkills.length > 0,
      skills: matchingSkills,
    };
  }).filter((cat) => cat.isVisible);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            Skills & <span className="gradient-text-primary">Technologies</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            A comprehensive overview of tools, cloud platforms, and languages in my technical stack.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md w-full md:w-auto">
            {categoriesList.map((categoryName) => (
              <button
                key={categoryName}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(categoryName);
                }}
                onMouseEnter={playHoverSound}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                  selectedCategory === categoryName
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {categoryName}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search skill (e.g. Docker, AWS, Linux)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-accent-cyan bg-slate-900 px-3 py-1 rounded-full border border-white/5">
                  {category.skills.length} Skills
                </span>
              </div>

              {/* Progress Bars List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading font-semibold text-slate-200 flex items-center gap-2">
                        {skill.isPrimary && (
                          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-accent-cyan font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5 p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.isPrimary
                            ? 'bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                            : 'bg-gradient-to-r from-slate-600 to-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
