'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ViewTransitionProps {
  children: ReactNode;
  className?: string;
}

export function ViewTransition({ children, className = '' }: ViewTransitionProps) {
  return (
    <motion.div
      className={className || 'h-full w-full'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = '' }: ViewTransitionProps & { delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, delay = 0, direction = 'up', className = '' }: ViewTransitionProps & { delay?: number; direction?: 'up' | 'down' | 'left' | 'right' }) {
  const variants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.05 }: ViewTransitionProps & { staggerDelay?: number }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: ViewTransitionProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}
