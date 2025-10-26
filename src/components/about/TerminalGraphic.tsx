'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TerminalGraphic() {
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    { text: '$ templata build --mode ai-assisted', color: 'text-green-400', delay: 0 },
    { text: '→ Generating guide structure...', color: 'text-blue-400', delay: 0.5 },
    { text: '→ AI drafting questions...', color: 'text-blue-400', delay: 1 },
    { text: '→ Human review & refinement...', color: 'text-yellow-400', delay: 1.5 },
    { text: '→ Curating readings...', color: 'text-purple-400', delay: 2 },
    { text: '✓ Guide ready for users', color: 'text-green-400', delay: 2.5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (lines.length + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentLine(0);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative rounded-xl border border-border/40 bg-black/90 overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="h-8 bg-muted/10 border-b border-border/20 flex items-center px-3 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-2 text-xs text-muted-foreground font-mono">templata</div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm space-y-2 min-h-[200px]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: currentLine > i ? 1 : 0,
                x: currentLine > i ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className={`${line.color} flex items-center gap-2`}
            >
              {line.text}
              {currentLine === i + 1 && line.text.includes('...') && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  _
                </motion.span>
              )}
            </motion.div>
          ))}

          {/* Cursor on new line */}
          {currentLine === lines.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 flex items-center"
            >
              $
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                _
              </motion.span>
            </motion.div>
          )}
        </div>

        {/* Subtle scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
