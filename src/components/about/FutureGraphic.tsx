'use client';

import { motion } from 'framer-motion';

export function FutureGraphic() {
  const circles = [
    { size: 60, delay: 0, color: 'bg-blue-500/20' },
    { size: 80, delay: 0.2, color: 'bg-purple-500/20' },
    { size: 100, delay: 0.4, color: 'bg-pink-500/20' },
    { size: 120, delay: 0.6, color: 'bg-primary/20' },
  ];

  const dots = Array.from({ length: 20 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Center pulsing core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Expanding circles */}
          {circles.map((circle, i) => (
            <motion.div
              key={i}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${circle.color} border border-border/20`}
              style={{ width: circle.size, height: circle.size }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: circle.delay,
              }}
            />
          ))}

          {/* Center icon */}
          <motion.div
            className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <svg
              className="w-8 h-8 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}

      {/* Orbiting elements */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="absolute w-3 h-3 bg-primary/60 rounded-full"
            style={{
              left: '50%',
              top: `${20 + i * 15}%`,
              transform: 'translateX(-50%)',
            }}
          />
        </motion.div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 50 20 Q 70 30, 80 50 Q 70 70, 50 80 Q 30 70, 20 50 Q 30 30, 50 20"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-border/40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Labels */}
      <motion.div
        className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Evolution
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Future
      </motion.div>
    </div>
  );
}
