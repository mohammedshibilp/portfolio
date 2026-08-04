import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  CheckCircle2,
  Clock,
  GitCommit,
  TestTube,
  ShieldCheck,
  PackageCheck,
  CloudUpload,
  Server,
  Activity,
  RotateCcw,
} from 'lucide-react';
import { useSound } from '../context/SoundContext';

interface PipelineStep {
  id: string;
  name: string;
  command: string;
  duration: string;
  icon: React.ReactNode;
}

export const CicdPipelineVisualizer: React.FC = () => {
  const { playClickSound, playSuccessSound } = useSound();
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([
    'Pipeline Status: Idle. Click "Run Pipeline Simulation" to execute automated workflow.',
  ]);

  const steps: PipelineStep[] = [
    {
      id: 'step-1',
      name: 'Git Push Event',
      command: 'git push origin main (commit SHA: 9f8a32b)',
      duration: '0.4s',
      icon: <GitCommit className="w-5 h-5 text-accent-blue" />,
    },
    {
      id: 'step-2',
      name: 'Automated Tests',
      command: 'npm run test && pytest --cov=app',
      duration: '1.2s',
      icon: <TestTube className="w-5 h-5 text-accent-purple" />,
    },
    {
      id: 'step-3',
      name: 'Security Vulnerability Scan',
      command: 'trivy image --severity HIGH,CRITICAL',
      duration: '0.8s',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'step-4',
      name: 'Docker Multi-Stage Build',
      command: 'docker build -t app:v2.6.0 --target release .',
      duration: '2.1s',
      icon: <PackageCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      id: 'step-5',
      name: 'Push Amazon ECR Registry',
      command: 'aws ecr get-login-password | docker push ecr/app',
      duration: '1.5s',
      icon: <CloudUpload className="w-5 h-5 text-accent-cyan" />,
    },
    {
      id: 'step-6',
      name: 'K8s Cluster Deployment',
      command: 'kubectl apply -f k8s/deployment.yaml',
      duration: '1.0s',
      icon: <Server className="w-5 h-5 text-blue-400" />,
    },
  ];

  const runPipeline = () => {
    if (isRunning) return;
    playClickSound();
    setIsRunning(true);
    setActiveStep(0);
    setPipelineLogs(['[00:01] Triggering GitHub Actions Workflow: build-and-deploy.yml']);

    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setActiveStep(stepIndex);
        setPipelineLogs((prev) => [
          ...prev,
          `[00:0${stepIndex + 1}] Executing: ${steps[stepIndex].command} ... [SUCCESS]`,
        ]);
      } else {
        clearInterval(interval);
        setActiveStep(steps.length);
        setIsRunning(false);
        playSuccessSound();
        setPipelineLogs((prev) => [
          ...prev,
          '[00:08] Deployment Successful! Kubernetes Pod Status: Running (99.99% Uptime).',
        ]);
      }
    }, 1200);
  };

  const resetPipeline = () => {
    playClickSound();
    setIsRunning(false);
    setActiveStep(-1);
    setPipelineLogs([
      'Pipeline Status: Reset. Ready for next automated CI/CD deployment execution.',
    ]);
  };

  return (
    <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-8 my-12 relative overflow-hidden shadow-2xl">
      {/* Visualizer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>LIVE CI/CD AUTOMATION ENGINE</span>
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">
            Akumen DevOps Deployment Pipeline
          </h3>
          <p className="text-xs text-text-muted">
            Simulated end-to-end automated workflow from source code commit to AWS Kubernetes cluster.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetPipeline}
            disabled={isRunning}
            className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white disabled:opacity-40 transition-colors"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={runPipeline}
            disabled={isRunning}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs flex items-center gap-2 transition-all ${
              isRunning
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]'
            }`}
          >
            <Play className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Pipeline Executing...' : 'Simulate Pipeline Run'}</span>
          </button>
        </div>
      </div>

      {/* Step Flow Nodes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {steps.map((step, index) => {
          const isDone = activeStep > index || activeStep === steps.length;
          const isCurrent = activeStep === index;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`p-4 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between h-36 ${
                isDone
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  : isCurrent
                  ? 'bg-accent-blue/10 border-accent-blue shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse'
                  : 'bg-slate-950/50 border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-slate-900 border border-white/10">
                  {step.icon}
                </div>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : isCurrent ? (
                  <Clock className="w-4 h-4 text-accent-blue animate-spin" />
                ) : (
                  <span className="text-[10px] font-mono text-slate-600">STAGE 0{index + 1}</span>
                )}
              </div>

              <div>
                <h4 className="font-heading font-bold text-xs text-white line-clamp-1">
                  {step.name}
                </h4>
                <p className="text-[10px] font-mono text-text-muted truncate mt-1">
                  {step.command}
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/5 pt-2 text-slate-400">
                <span>Time:</span>
                <span className={isDone ? 'text-emerald-400' : 'text-slate-400'}>
                  {step.duration}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Pipeline Terminal Output Logs */}
      <div className="bg-[#030611] rounded-2xl p-4 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-accent-cyan flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
            GitHub Actions Runner Log Output
          </span>
          <span className="text-[10px] text-slate-500">workflow #348</span>
        </div>
        <div className="space-y-1.5 max-h-32 overflow-y-auto">
          {pipelineLogs.map((log, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-300">
              <span className="text-accent-purple font-bold">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
