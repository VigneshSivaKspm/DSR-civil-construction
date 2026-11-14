import React, { ReactNode, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { EASE_ARCHITECTURAL } from '../motion/motionTokens';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'fade-up' | 'fade' | 'scale' | 'stagger';
  staggerChildren?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  variant = 'fade-up',
  staggerChildren = 0.08,
}) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const handler = () => setReducedMotion(query.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variantsMap: Record<string, Variants> = {
    'fade-up': {
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: EASE_ARCHITECTURAL,
        },
      },
    },
    'fade': {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.98, y: 16 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: EASE_ARCHITECTURAL,
        },
      },
    },
    'stagger': {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren,
        },
      },
    },
  };

  return (
    <motion.div
      variants={variantsMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
