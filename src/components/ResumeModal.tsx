import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { playClickSound, playSuccessSound } = useSound();

  if (!isOpen) return null;

  const handleDownload = () => {
    playSuccessSound();
    // Generate text/PDF printable resume payload
    const content = `
================================================================
MOHAMMED SHIBIL P - DEVOPS ENGINEER INTERN
================================================================
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.shortBio}

WORK EXPERIENCE:
1. DevOps Engineer Intern @ Akumen Technologies (Present)
   - Configured Linux production servers, user permissions, systemd services, SSH hardening.
   - Built automated CI/CD deployment pipelines using Docker, GitHub Actions, and AWS.
   - Provisioned cloud infrastructure using Terraform & Ansible automation scripts.

2. Flutter Developer Intern @ Matexa Technologies (Previous)
   - Built cross-platform Dart mobile apps integrated with REST APIs & Provider state management.

CORE SKILLS:
- DevOps & Cloud: Linux, Docker, AWS, Git, Terraform, Ansible, Jenkins, CI/CD, Networking.
- Languages: Python, Bash Shell Scripting, JavaScript, TypeScript, Dart, C.
- Frontend & Mobile: React, Flutter, Tailwind CSS, HTML/CSS.
- Backend & DB: Node.js, Express, REST APIs, MongoDB, Firebase.
================================================================
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohammed_Shibil_P_DevOps_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="fixed inset-0 bg-[#050816]/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto z-10 shadow-[0_0_60px_rgba(139,92,246,0.3)] bg-[#070c1e]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Curriculum Vitae Preview
                </h3>
                <p className="text-xs font-mono text-accent-cyan">
                  Mohammed Shibil P | DevOps Engineer Intern
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-heading font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="bg-[#030611] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 text-slate-200 font-body text-xs sm:text-sm">
            {/* Subject Info */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h1 className="font-heading font-black text-2xl text-white">
                  MOHAMMED SHIBIL P
                </h1>
                <p className="font-heading font-semibold text-accent-blue text-sm">
                  DevOps Engineer Intern @ Akumen Technologies
                </p>
                <p className="text-xs text-text-muted mt-1">{PERSONAL_INFO.location}</p>
              </div>
              <div className="space-y-1 font-mono text-xs text-slate-300">
                <p>Email: {PERSONAL_INFO.email}</p>
                <p>Phone: {PERSONAL_INFO.phone}</p>
                <p>GitHub: github.com/MohammedShibilP</p>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-accent-cyan uppercase tracking-wider">
                Professional Profile
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-sm text-accent-purple uppercase tracking-wider">
                Work Experience
              </h3>

              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1 border-l-2 border-accent-blue/30 pl-3">
                  <div className="flex justify-between font-heading font-bold text-white text-xs sm:text-sm">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="font-mono text-accent-cyan">{exp.period}</span>
                  </div>
                  <p className="text-xs text-text-muted">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-emerald-400 uppercase tracking-wider">
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2 rounded bg-slate-900 border border-white/5">
                  <span className="text-accent-blue font-bold block">Linux & Cloud</span>
                  AWS, Docker, K8s
                </div>
                <div className="p-2 rounded bg-slate-900 border border-white/5">
                  <span className="text-accent-purple font-bold block">IaC & CI/CD</span>
                  Terraform, Ansible
                </div>
                <div className="p-2 rounded bg-slate-900 border border-white/5">
                  <span className="text-emerald-400 font-bold block">Languages</span>
                  Python, Bash, JS, Dart
                </div>
                <div className="p-2 rounded bg-slate-900 border border-white/5">
                  <span className="text-pink-400 font-bold block">Web & Mobile</span>
                  React, Flutter, Node
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
