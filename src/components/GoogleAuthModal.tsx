import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle2, User, ArrowRight, Lock, Key, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { playClickSound, playSuccessSound } = useSound();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStep, setAuthStep] = useState<'chooser' | 'permission' | 'success'>('chooser');

  if (!isOpen) return null;

  const handleSelectAccount = (email: string) => {
    playClickSound();
    setSelectedAccount(email);
    setAuthStep('permission');
  };

  const handleConfirmAuth = () => {
    playClickSound();
    setIsAuthenticating(true);

    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthStep('success');
      playSuccessSound();

      setTimeout(() => {
        if (selectedAccount) {
          onSuccess(selectedAccount);
        }
        onClose();
        setAuthStep('chooser');
        setSelectedAccount(null);
      }, 1500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md"
        />

        {/* Modal Window designed like Google Account Chooser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#0b0f19] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 z-10 shadow-[0_0_50px_rgba(34,211,238,0.25)] text-slate-100 font-body"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Google Logo Header */}
          <div className="text-center space-y-3 pt-2">
            {/* Authentic Google G SVG Icon */}
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center shadow-lg">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <h3 className="font-heading font-bold text-xl text-white">
              {authStep === 'chooser'
                ? 'Choose a Google Account'
                : authStep === 'permission'
                ? 'Confirm Sign-In'
                : 'Authentication Successful'}
            </h3>
            <p className="text-xs text-slate-400">
              to continue to <span className="text-accent-blue font-semibold">Mohammed Shibil P DevOps Portal</span>
            </p>
          </div>

          {/* Step 1: Account Chooser List */}
          {authStep === 'chooser' && (
            <div className="space-y-3">
              {/* Primary User Account */}
              <button
                onClick={() => handleSelectAccount(PERSONAL_INFO.email)}
                className="w-full p-4 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-accent-blue hover:bg-slate-800/80 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple p-[1px]">
                    <img
                      src="/assets/shibil-passport.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full rounded-full object-cover bg-slate-950"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-accent-blue transition-colors">
                      {PERSONAL_INFO.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/30">
                  ADMIN
                </span>
              </button>

              {/* Guest Account */}
              <button
                onClick={() => handleSelectAccount('guest.user@gmail.com')}
                className="w-full p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-accent-purple hover:bg-slate-800/60 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-200 group-hover:text-accent-purple transition-colors">
                      Guest / Recruiter Account
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      guest.user@gmail.com
                    </p>
                  </div>
                </div>
              </button>

              {/* Use Another Account */}
              <button
                onClick={() => handleSelectAccount('devops.visitor@gmail.com')}
                className="w-full p-3.5 rounded-2xl bg-transparent border border-dashed border-white/15 hover:border-white/40 text-xs font-heading text-slate-400 hover:text-white transition-all text-center"
              >
                + Use another account
              </button>
            </div>
          )}

          {/* Step 2: Permission Consent */}
          {authStep === 'permission' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
                  <Shield className="w-4 h-4" />
                  <span>Requested Scope & Permissions</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View email address and basic profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Access DevOps Infrastructure Case Studies</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAuthStep('chooser')}
                  className="flex-1 py-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-heading font-bold text-slate-300 hover:text-white"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirmAuth}
                  disabled={isAuthenticating}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-bg-primary font-heading font-bold text-xs shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
                >
                  {isAuthenticating ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Success Screen */}
          {authStep === 'success' && (
            <div className="py-6 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-lg text-white">
                OAuth Authentication Complete
              </h4>
              <p className="text-xs font-mono text-accent-cyan">
                Signed in as {selectedAccount}
              </p>
            </div>
          )}

          {/* Footer Security Notice */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              OAuth 2.0 SSL Secure
            </span>
            <span>Google Account v3</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
