"use client"

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export function ReadingsHero() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="px-4 py-2">
            <BookOpen className="mr-2 h-4 w-4" />
            Curated Readings
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Deep insights for
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              life's biggest moments
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every reading is carefully curated to provide actionable guidance, research-backed insights, and practical wisdom for navigating major life decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
