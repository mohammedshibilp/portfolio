import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Users, Activity, ExternalLink } from 'lucide-react';
import { GITHUB_METRICS } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const GithubSection: React.FC = () => {
  const { playHoverSound } = useSound();
  const [hoveredSquare, setHoveredSquare] = useState<string | null>(null);

  // Generate 52 weeks x 7 days heatmap grid for full GitHub calendar effect
  const generateHeatmapGrid = () => {
    const grid = [];
    const intensityLevels = [
      'bg-slate-900 border-white/5',
      'bg-emerald-950/80 border-emerald-800/40',
      'bg-emerald-700/80 border-emerald-600/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]',
      'bg-emerald-500 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]',
      'bg-accent-cyan border-white shadow-[0_0_15px_rgba(34,211,238,0.8)]',
    ];

    for (let week = 0; week < 42; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        // Pseudo-random commit density calculation based on index
        const rand = (week * 7 + day) % 13;
        const levelIdx = rand === 0 ? 0 : rand < 5 ? 1 : rand < 9 ? 2 : rand < 12 ? 3 : 4;
        const commitCount = levelIdx === 0 ? 0 : levelIdx * 3 + Math.floor(rand / 2);
        
        weekDays.push({
          key: `${week}-${day}`,
          levelClass: intensityLevels[levelIdx],
          commits: commitCount,
        });
      }
      grid.push(weekDays);
    }
    return grid;
  };

  const heatmapGrid = generateHeatmapGrid();

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono">
            <Github className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            GitHub <span className="gradient-text-primary">Contributions</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Consistent commit activity, infrastructure automation scripts, and continuous integration workflows.
          </p>
        </div>

        {/* Top GitHub Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-1">
            <Activity className="w-5 h-5 text-accent-blue mx-auto mb-2" />
            <h4 className="font-heading font-black text-3xl text-white">{GITHUB_METRICS.totalContributions}</h4>
            <p className="text-xs text-text-muted font-mono">Contributions in 2026</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-1">
            <BookOpen className="w-5 h-5 text-accent-purple mx-auto mb-2" />
            <h4 className="font-heading font-black text-3xl text-white">{GITHUB_METRICS.repositoriesCount}</h4>
            <p className="text-xs text-text-muted font-mono">Public Repositories</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-1">
            <Users className="w-5 h-5 text-accent-cyan mx-auto mb-2" />
            <h4 className="font-heading font-black text-3xl text-white">{GITHUB_METRICS.followers}</h4>
            <p className="text-xs text-text-muted font-mono">GitHub Followers</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-1">
            <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <h4 className="font-heading font-black text-3xl text-white">{GITHUB_METRICS.stars}</h4>
            <p className="text-xs text-text-muted font-mono">Total Stars Earned</p>
          </div>
        </div>

        {/* GitHub Calendar Heatmap */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                <Github className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  @{GITHUB_METRICS.username} Activity Heatmap
                </h3>
                <p className="text-xs font-mono text-accent-cyan">
                  642 contributions in the last year
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${GITHUB_METRICS.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-heading font-bold text-white border border-white/10 hover:border-accent-blue transition-all flex items-center gap-2 w-fit"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid Squares Container */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[700px] justify-between">
              {heatmapGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((day) => (
                    <div
                      key={day.key}
                      onMouseEnter={() => {
                        playHoverSound();
                        setHoveredSquare(`${day.commits} commits on day ${day.key}`);
                      }}
                      className={`w-3.5 h-3.5 rounded-[3px] border transition-transform hover:scale-125 cursor-pointer ${day.levelClass}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2">
            <span>{hoveredSquare || 'Hover over calendar squares to inspect commit counts'}</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-3 h-3 rounded bg-slate-900 border border-white/10" />
              <span className="w-3 h-3 rounded bg-emerald-950 border border-emerald-800" />
              <span className="w-3 h-3 rounded bg-emerald-700" />
              <span className="w-3 h-3 rounded bg-emerald-500" />
              <span className="w-3 h-3 rounded bg-accent-cyan" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Languages & Top Repos Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Languages Breakdown */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="font-heading font-bold text-xl text-white">
              Most Used Languages
            </h3>

            {/* Stacked Progress Bar */}
            <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden flex border border-white/10">
              {GITHUB_METRICS.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Legend List */}
            <div className="space-y-3 pt-2">
              {GITHUB_METRICS.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-slate-200">{lang.name}</span>
                  </div>
                  <span className="text-slate-400 font-bold">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Repositories */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="font-heading font-bold text-xl text-white">
              Featured Repositories
            </h3>

            <div className="space-y-4">
              {GITHUB_METRICS.popularRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3 hover:border-accent-blue/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={`https://github.com/${GITHUB_METRICS.username}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-bold text-base text-accent-blue hover:underline flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{repo.name}</span>
                    </a>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-accent-cyan" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-text-muted font-body leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-accent-purple" />
                    <span>{repo.language}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
