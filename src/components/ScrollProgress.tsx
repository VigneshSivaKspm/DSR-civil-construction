import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setShouldRender(!motionQuery.matches);
    };
    update();
    motionQuery.addEventListener('change', update);
    return () => motionQuery.removeEventListener('change', update);
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-dsr-cyan via-dsr-roof to-dsr-gold z-50 origin-left pointer-events-none shadow-[0_1px_4px_rgba(0,183,253,0.3)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
