import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorMode, setCursorMode, cursorLabel } = useCursor();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring (no React re-renders on move!)
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 260, mass: 0.25 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 260, mass: 0.25 });

  // Tight spring for center dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 700, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 700, mass: 0.1 });

  useEffect(() => {
    // Only enable on desktop devices with hover & fine pointer, and no reduced motion
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkEnabled = () => {
      setIsEnabled(hoverQuery.matches && !motionQuery.matches);
    };

    checkEnabled();
    hoverQuery.addEventListener('change', checkEnabled);
    motionQuery.addEventListener('change', checkEnabled);

    return () => {
      hoverQuery.removeEventListener('change', checkEnabled);
      motionQuery.removeEventListener('change', checkEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Automatic target detection: if hovering text inputs, hide custom cursor for native I-beam
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isTextInput = target.matches('input, textarea, select, [contenteditable="true"]');
      if (isTextInput) {
        setIsVisible(false);
        return;
      } else {
        setIsVisible(true);
      }

      // Check if cursorMode is already overridden manually (like 'drag' or 'view')
      if (cursorMode === 'drag' || cursorMode === 'view') {
        return;
      }

      // Automatic link/button detection via event delegation
      const isClickable = target.closest('a, button, [role="button"], input[type="submit"], input[type="range"]');
      if (isClickable && cursorMode !== 'pointer') {
        setCursorMode('pointer');
      } else if (!isClickable && cursorMode === 'pointer') {
        setCursorMode('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleBlur = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isEnabled, isVisible, cursorMode, mouseX, mouseY, setCursorMode]);

  if (!isEnabled) return null;

  // Determine outer ring dimensions and styles based on cursorMode
  const getRingDimensions = () => {
    switch (cursorMode) {
      case 'pointer':
        return { size: 44, scale: 1.2, bg: 'rgba(0, 183, 253, 0.12)', border: 'rgba(0, 183, 253, 0.6)' };
      case 'drag':
        return { size: 68, scale: 1, bg: 'rgba(0, 24, 88, 0.85)', border: 'rgba(0, 183, 253, 0.9)' };
      case 'view':
        return { size: 68, scale: 1, bg: 'rgba(0, 95, 221, 0.85)', border: 'rgba(255, 187, 2, 0.9)' };
      case 'hidden':
        return { size: 0, scale: 0, bg: 'transparent', border: 'transparent' };
      default:
        return { size: 30, scale: 1, bg: 'rgba(0, 183, 253, 0.05)', border: 'rgba(0, 183, 253, 0.45)' };
    }
  };

  const ringStyles = getRingDimensions();
  const labelText = cursorLabel || (cursorMode === 'drag' ? 'DRAG' : cursorMode === 'view' ? 'VIEW' : null);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      
      {/* Outer Following Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full flex items-center justify-center border backdrop-blur-2xs transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
          width: ringStyles.size,
          height: ringStyles.size,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: ringStyles.border,
          backgroundColor: ringStyles.bg,
        }}
        animate={{
          opacity: isVisible && cursorMode !== 'hidden' ? 1 : 0,
          scale: isVisible ? ringStyles.scale : 0.5,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 350, damping: 25 },
          opacity: { duration: 0.18 },
        }}
      >
        {/* Contextual Action Label (DRAG, VIEW) */}
        {labelText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-white select-none">
            {labelText}
          </span>
        )}
      </motion.div>

      {/* Precision Inner Dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-dsr-cyan shadow-[0_0_8px_rgba(0,183,253,0.9)]"
        style={{
          x: dotX,
          y: dotY,
          width: cursorMode === 'drag' || cursorMode === 'view' ? 0 : 6,
          height: cursorMode === 'drag' || cursorMode === 'view' ? 0 : 6,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible && cursorMode !== 'hidden' && cursorMode !== 'drag' && cursorMode !== 'view' ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />
    </div>
  );
};
