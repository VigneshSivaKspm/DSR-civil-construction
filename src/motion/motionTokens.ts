import { Variants, Transition } from 'framer-motion';

/**
 * DSR Civil Constructions Motion Design Tokens
 * Architectural, disciplined, fluid, purposeful.
 */

// Custom cubic bezier easing curves
export const EASE_ARCHITECTURAL = [0.16, 1, 0.3, 1] as const; // Decelerating architectural curve
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

// Standard durations in seconds
export const DURATION_FAST = 0.16;
export const DURATION_NORMAL = 0.32;
export const DURATION_ENTRANCE = 0.55;
export const DURATION_HERO = 0.75;
export const DURATION_ROOFLINE = 0.65;

// Spring configurations
export const SPRING_MAGNETIC: Transition = {
  type: 'spring',
  stiffness: 280,
  damping: 20,
  mass: 0.5,
};

export const SPRING_TACTILE: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
};

// Reusable Framer Motion Variants

// 1. Subtle upward fade for section headings, text blocks, and single items
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_ENTRANCE,
      ease: EASE_ARCHITECTURAL,
    },
  },
};

// 2. Pure fade for backgrounds and subtle structural lines
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH,
    },
  },
};

// 3. Staggered parent for card grids, process stages, and lists
export const staggerContainer = (staggerChildren: number = 0.08, delayChildren: number = 0.05): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// 4. Staggered child item
export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_ARCHITECTURAL,
    },
  },
};

// 5. Image & Card scale-in reveal
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_ARCHITECTURAL,
    },
  },
};

// 6. Page route transitions
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: EASE_ARCHITECTURAL,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.18,
      ease: EASE_SMOOTH,
    },
  },
};
