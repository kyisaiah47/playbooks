'use client';

import { motion } from 'framer-motion';

export function JourneyGraphic() {
  const nodes = [
    { x: 10, y: 50, label: 'College passion', size: 40, color: 'bg-blue-500' },
    { x: 25, y: 30, label: 'Startups', size: 35, color: 'bg-purple-500' },
    { x: 40, y: 70, label: 'The void', size: 30, color: 'bg-gray-500' },
    { x: 55, y: 45, label: 'SS&C', size: 50, color: 'bg-green-500' },
    { x: 70, y: 60, label: 'Hackathons', size: 45, color: 'bg-yellow-500' },
    { x: 85, y: 40, label: 'Templata', size: 60, color: 'bg-primary' },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1]">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {/* Connecting paths */}
        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1];
          return (
            <motion.path
              key={i}
              d={`M ${node.x}% ${node.y}% Q ${(node.x + next.x) / 2}% ${(node.y + next.y) / 2 - 10}% ${next.x}% ${next.y}%`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-border"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <motion.div
            className={`${node.color} rounded-full flex items-center justify-center relative`}
            style={{ width: node.size, height: node.size }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Pulse effect for Templata */}
            {i === nodes.length - 1 && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Label */}
            <div className="absolute top-full mt-2 text-xs font-medium text-center whitespace-nowrap">
              {node.label}
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
