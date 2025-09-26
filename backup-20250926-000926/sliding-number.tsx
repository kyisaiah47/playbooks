'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SlidingNumberProps {
  number: number;
  className?: string;
}

export function SlidingNumber({ number, className }: SlidingNumberProps) {
  return (
    <div className={cn('relative inline-block overflow-hidden', className)}>
      <motion.span
        key={number}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="block"
      >
        {number}
      </motion.span>
    </div>
  );
}