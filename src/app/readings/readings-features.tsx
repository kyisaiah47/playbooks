"use client"

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target, Sparkles, BookMarked } from 'lucide-react';

export function ReadingsFeatures() {
  const features = [
    {
      icon: Target,
      title: "Template-Matched",
      description: "Each reading is connected to specific guides, giving you relevant insights exactly when you need them."
    },
    {
      icon: Sparkles,
      title: "AI-Enhanced",
      description: "Automatically generated summaries and key takeaways help you quickly extract the most valuable insights."
    },
    {
      icon: BookMarked,
      title: "Research-Backed",
      description: "Built on authoritative sources and expert knowledge, ensuring you get reliable guidance for important decisions."
    }
  ];

  return (
    <motion.section
      className="py-16 bg-muted/30 border-y"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Knowledge when you need it</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Articles that don't just inform—they guide you through the specific challenges you're facing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-4 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
