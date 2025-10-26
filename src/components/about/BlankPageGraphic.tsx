'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BlankPageGraphic() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    "Life decision ahead...",
    "Where do I start?",
    "What should I consider?",
    "Career change roadmap",
    "Key questions to explore",
    "Resources to read"
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative aspect-[4/3] rounded-2xl border border-border/40 bg-background overflow-hidden shadow-lg">
        {/* Blank page state */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: phase === 0 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center space-y-4 p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 0 ? [0, 1, 0] : 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-8 bg-foreground mx-auto"
            />
            <p className="text-sm text-muted-foreground">Where do I even start?</p>
          </div>
        </motion.div>

        {/* Filling state */}
        <motion.div
          className="absolute inset-0 p-8"
          animate={{ opacity: phase === 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: phase === 1 ? 1 : 0,
                  x: phase === 1 ? 0 : -20
                }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                {i < 3 ? (
                  <div className="flex-1 h-2 bg-muted/40 rounded" />
                ) : (
                  <>
                    <div className="w-4 h-4 rounded border-2 border-primary" />
                    <div className="flex-1 h-2 bg-primary/20 rounded" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filled state */}
        <motion.div
          className="absolute inset-0 p-8"
          animate={{ opacity: phase === 2 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full flex flex-col">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex-1 h-3 bg-primary/20 rounded" />
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 ml-6">
                  <div className="w-4 h-4 rounded border-2 border-green-500 mt-1 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-muted/60 rounded w-3/4" />
                    <div className="h-2 bg-muted/40 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-border/40 flex gap-2">
              <div className="flex-1 h-2 bg-blue-500/20 rounded" />
              <div className="flex-1 h-2 bg-purple-500/20 rounded" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Label */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap"
        key={phase}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {phase === 0 && "The blank page problem"}
        {phase === 1 && "Templata provides structure"}
        {phase === 2 && "You fill in your thinking"}
      </motion.div>
    </div>
  );
}
