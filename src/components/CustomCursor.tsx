import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null; // Disable custom cursor on touch/mobile viewports for native feel
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Central Neon Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent-blue rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_#22d3ee]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
      />

      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent-purple/60 rounded-full pointer-events-none z-[9998] bg-accent-purple/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#22d3ee' : '#8b5cf6',
          boxShadow: isHovered
            ? '0 0 25px rgba(34, 211, 238, 0.5)'
            : '0 0 15px rgba(139, 92, 246, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.2 }}
      />
    </>
  );
};
