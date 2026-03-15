import { motion } from 'motion/react';
import { ReactNode } from 'react';

/**
 * Page Transition Wrapper Component
 * Adds smooth fade and slide animations when pages change
 * 
 * Usage: Wrap each page component with <PageTransition>
 * Example: <PageTransition><Home /></PageTransition>
 */

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Alternative: Sharp Wipe Transition
 * Creates a geometric wipe effect from left to right
 * 
 * To use: Replace PageTransition with SharpWipeTransition in App.tsx
 */
export function SharpWipeTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Alternative: Scale Fade Transition
 * Creates a zoom effect with fade
 * 
 * To use: Replace PageTransition with ScaleFadeTransition in App.tsx
 */
export function ScaleFadeTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
}
