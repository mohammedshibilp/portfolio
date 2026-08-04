import React, { createContext, useContext, useState } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playHoverSound: () => void;
  playClickSound: () => void;
  playSuccessSound: () => void;
  playTerminalSound: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playHoverSound: () => {},
  playClickSound: () => {},
  playSuccessSound: () => {},
  playTerminalSound: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const playTone = (freq: number, type: OscillatorType = 'sine', duration: number = 0.08, gainVal: number = 0.03) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context silenced or blocked
    }
  };

  const playHoverSound = () => playTone(580, 'sine', 0.04, 0.015);
  const playClickSound = () => playTone(880, 'triangle', 0.06, 0.03);
  const playTerminalSound = () => playTone(420, 'square', 0.03, 0.01);
  
  const playSuccessSound = () => {
    if (!soundEnabled) return;
    setTimeout(() => playTone(523.25, 'sine', 0.1, 0.03), 0);
    setTimeout(() => playTone(659.25, 'sine', 0.1, 0.03), 80);
    setTimeout(() => playTone(783.99, 'sine', 0.18, 0.04), 160);
  };

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playHoverSound,
        playClickSound,
        playSuccessSound,
        playTerminalSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
