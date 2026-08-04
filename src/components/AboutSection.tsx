import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Server,
  Cloud,
  CheckCircle2,
  Code,
  Shield,
  Cpu,
  Smartphone,
  Play,
  RotateCcw,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const AboutSection: React.FC = () => {
  const { playHoverSound, playTerminalSound } = useSound();
  const [activeTab, setActiveTab] = useState<'bio' | 'terminal' | 'highlights'>('bio');
  const [cliCommand, setCliCommand] = useState('systemctl status devops-internship');
  const [cliOutput, setCliOutput] = useState([
    '● devops-internship.service - Akumen Technologies Infrastructure Pipeline',
    '   Loaded: loaded (/etc/systemd/system/devops-internship.service; enabled)',
    '   Active: active (running) since Wed 2026-08-05 01:15:00 IST',
    '   Main PID: 8042 (shibil-devops-engine)',
    '   Tasks: 48 (limit: 4915)',
    '   Memory: 1.2G',
    '   CGroup: /system.slice/devops-internship.service',
    '           ├─ 8042 Linux Kernel Administration & Shell Automation',
    '           ├─ 8043 Docker & Containerized Microservices Engine',
    '           └─ 8044 AWS EC2 / S3 / IAM Infrastructure Blueprints',
    '   Status: "Building resilient deployment pipelines with 99.99% uptime."',
  ]);

  const handleRunCommand = (cmd: string) => {
    playTerminalSound();
    setCliCommand(cmd);
    if (cmd === 'whoami') {
      setCliOutput([
        'User: Mohammed Shibil P',
        'Role: DevOps Engineer Intern @ Akumen Technologies',
        'Location: Kerala, India',
        'Status: Passionate about Linux, Cloud, Docker, and CI/CD Automation',
      ]);
    } else if (cmd === 'cat skills.txt') {
      setCliOutput([
        'Linux Administration | Shell Scripting | Docker | AWS | Git',
        'Terraform | Ansible | Jenkins | Python | React | Flutter',
      ]);
    } else if (cmd === 'uptime') {
      setCliOutput([
        ' 01:20:00 up 365 days, 24/7 continuous learning mode active.',
        ' load average: 0.08, 0.05, 0.01 (High Efficiency)',
      ]);
    } else {
      setCliOutput([
        '● devops-internship.service - Akumen Technologies Infrastructure Pipeline',
        '   Loaded: loaded (/etc/systemd/system/devops-internship.service; enabled)',
        '   Active: active (running) since Wed 2026-08-05 01:15:00 IST',
        '   Main PID: 8042 (shibil-devops-engine)',
        '   Status: "Building resilient deployment pipelines with 99.99% uptime."',
      ]);
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-mono">
            <Server className="w-3.5 h-3.5" />
            <span>DEV-OPS ARCHITECTURE & BACKGROUND</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            About <span className="gradient-text-primary">Mohammed Shibil P</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Engineering scalable cloud infrastructure, mastering Linux administration, and automating delivery pipelines.
          </p>
        </div>

        {/* Tab Selector Pill */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('bio')}
              onMouseEnter={playHoverSound}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                activeTab === 'bio'
                  ? 'bg-accent-blue text-bg-primary shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              Professional Biography
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              onMouseEnter={playHoverSound}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all flex items-center gap-2 ${
                activeTab === 'terminal'
                  ? 'bg-accent-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4 text-accent-cyan" />
              <span>Interactive CLI</span>
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              onMouseEnter={playHoverSound}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                activeTab === 'highlights'
                  ? 'bg-accent-cyan text-bg-primary shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              Core Philosophy
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Container */}
          <div className="lg:col-span-8 space-y-6">
            {activeTab === 'bio' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">
                      DevOps Engineer Intern @ Akumen Technologies
                    </h3>
                    <p className="text-xs font-mono text-accent-cyan">
                      Location: Kerala, India | CS Graduate
                    </p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-text-muted text-base leading-relaxed space-y-4">
                  <p>{PERSONAL_INFO.fullBio}</p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <Cpu className="w-5 h-5 text-accent-blue" />
                    <h4 className="font-heading font-bold text-sm text-white">Linux Mastery</h4>
                    <p className="text-xs text-text-muted">
                      Configuring Ubuntu/CentOS, Bash scripting, systemd, SSH hardening.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <Cloud className="w-5 h-5 text-accent-purple" />
                    <h4 className="font-heading font-bold text-sm text-white">AWS & Containers</h4>
                    <p className="text-xs text-text-muted">
                      Dockerizing apps, AWS EC2/S3/VPC, Terraform IaC, Ansible playbooks.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <Smartphone className="w-5 h-5 text-accent-cyan" />
                    <h4 className="font-heading font-bold text-sm text-white">Flutter & Full Stack</h4>
                    <p className="text-xs text-text-muted">
                      React, Flutter, Node.js, REST APIs, Provider state management.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'terminal' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 rounded-3xl border border-white/10 bg-[#030712] font-mono text-sm space-y-4 shadow-2xl"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-slate-400 ml-2">shibil@akumen-devops:~</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Bash 5.2</span>
                  </div>
                </div>

                {/* Quick Run Shortcut Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400">Quick Commands:</span>
                  <button
                    onClick={() => handleRunCommand('systemctl status devops-internship')}
                    className="px-2.5 py-1 rounded bg-slate-800 text-xs text-accent-cyan border border-slate-700 hover:border-accent-cyan"
                  >
                    systemctl status
                  </button>
                  <button
                    onClick={() => handleRunCommand('whoami')}
                    className="px-2.5 py-1 rounded bg-slate-800 text-xs text-accent-purple border border-slate-700 hover:border-accent-purple"
                  >
                    whoami
                  </button>
                  <button
                    onClick={() => handleRunCommand('cat skills.txt')}
                    className="px-2.5 py-1 rounded bg-slate-800 text-xs text-emerald-400 border border-slate-700 hover:border-emerald-400"
                  >
                    cat skills.txt
                  </button>
                  <button
                    onClick={() => handleRunCommand('uptime')}
                    className="px-2.5 py-1 rounded bg-slate-800 text-xs text-amber-400 border border-slate-700 hover:border-amber-400"
                  >
                    uptime
                  </button>
                </div>

                {/* Prompt Line */}
                <div className="flex items-center gap-2 text-accent-blue pt-2">
                  <span>shibil@akumen-devops:~$</span>
                  <span className="text-white font-bold">{cliCommand}</span>
                </div>

                {/* Output Console */}
                <div className="bg-[#010409] p-4 rounded-xl border border-white/5 text-xs text-slate-300 space-y-1 overflow-x-auto min-h-[160px]">
                  {cliOutput.map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'highlights' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 rounded-3xl border border-white/10 space-y-6"
              >
                <h3 className="font-heading font-bold text-2xl text-white">
                  Engineering Principles & Philosophy
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                      <Shield className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-white text-base">Infrastructure as Code</h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Every server setup, security group, and deployment environment must be reproducibly written using Terraform blueprints and Ansible playbooks.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                      <Code className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-white text-base">Automated Delivery</h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Eliminate manual error by automating linting, testing, Docker builds, and zero-downtime rolling updates on every Git push.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Highlights Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                <span>Quick Snapshot</span>
              </h3>

              <div className="space-y-4 text-xs font-body">
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-text-muted">Education</span>
                  <span className="text-white font-semibold">B.Tech Computer Science</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-text-muted">Current Position</span>
                  <span className="text-accent-blue font-semibold">DevOps Engineer Intern</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-text-muted">Company</span>
                  <span className="text-accent-purple font-semibold">Akumen Technologies</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-text-muted">Previous Role</span>
                  <span className="text-white font-semibold">Flutter Developer Intern</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-text-muted">Location</span>
                  <span className="text-white font-semibold">Kerala, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Focus Areas</span>
                  <span className="text-accent-cyan font-semibold">Linux | AWS | Docker | CI/CD</span>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-accent-blue/15 via-slate-900 to-accent-purple/20 border border-accent-blue/30 relative overflow-hidden">
              <p className="text-sm italic text-slate-200 leading-relaxed font-body">
                "{PERSONAL_INFO.tagline}"
              </p>
              <p className="text-xs font-mono text-accent-cyan mt-3">
                — Mohammed Shibil P
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
