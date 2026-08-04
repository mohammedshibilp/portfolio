import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blob 1 - Top Left Cyan */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-accent-blue/15 rounded-full blur-[130px]"
      />

      {/* Blob 2 - Center Right Violet */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-accent-purple/20 rounded-full blur-[150px]"
      />

      {/* Blob 3 - Bottom Left Emerald */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 70, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[140px]"
      />
    </div>
  );
};
