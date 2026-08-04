import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Server, CheckCircle2 } from 'lucide-react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const bootLogs = [
    'Initializing Linux Kernel v6.8.0-devops...',
    'Spinning up Docker Container Runtime...',
    'Establishing AWS Cloud Infrastructure Pipeline...',
    'Injecting Kubernetes Cluster Topology...',
    'Securing SSH Keys & Environment Variables...',
    'System Ready: Welcome to Mohammed Shibil P Portfolio',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const clamped = Math.min(next, 100);

        // Update step based on progress
        const stepIdx = Math.min(
          Math.floor((clamped / 100) * bootLogs.length),
          bootLogs.length - 1
        );
        setCurrentStep(stepIdx);

        return clamped;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#050816] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient Lighting */}
          <div className="absolute top-1/3 w-96 h-96 bg-accent-blue/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/3 w-96 h-96 bg-accent-purple/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="w-full max-w-lg glass-card p-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.15)] relative z-10">
            {/* Logo Badge */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-purple p-[1px]">
                  <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center font-heading font-bold text-accent-blue text-sm">
                    MSP
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base tracking-wider">
                    SYSTEM BOOTLOADER
                  </h3>
                  <p className="text-xs text-text-muted font-mono">
                    DevOps Engine v2.6.0
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
                ONLINE
              </span>
            </div>

            {/* Diagnostic Logs Output */}
            <div className="bg-[#030611] rounded-xl p-4 mb-6 border border-white/5 font-mono text-xs text-slate-300 h-28 flex flex-col justify-end space-y-2 overflow-hidden shadow-inner">
              <div className="flex items-center text-text-muted gap-2 border-b border-white/5 pb-2">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Console Diagnostics Output</span>
              </div>
              {bootLogs.slice(0, currentStep + 1).map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center gap-2 truncate">
                    <span className="text-accent-cyan">&gt;</span>
                    <span className={index === currentStep ? 'text-accent-blue font-semibold' : 'text-slate-400'}>
                      {log}
                    </span>
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />
                </motion.div>
              ))}
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5 text-accent-cyan">
                  <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
                  Compiling Infrastructure Assets...
                </span>
                <span className="text-accent-blue font-bold">{progress}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* System Status Indicators */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-text-muted">
              <div className="flex items-center gap-1.5">
                <Server className="w-3 h-3 text-accent-blue" />
                <span>Docker: READY</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>AWS: CONNECTED</span>
              </div>
              <div className="flex items-center gap-1.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>STATUS: OK</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
