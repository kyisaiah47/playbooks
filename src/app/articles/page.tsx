"use client"

import { PageLayout } from '@/components/layout';
import { getArticles } from '@/registry/articles';
import { ArticlesList } from './articles-list';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Brain, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'react';

// Metadata is handled in layout.tsx

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = use(searchParams);
  const page = parseInt(params.page || '1', 10);

  const { articles, total } = use(getArticles(page, 100));
  console.log(`[ArticlesPage] Fetched ${articles.length} articles (page ${page}, total: ${total})`);

  return (
    <PageLayout>
      {/* Hero Section */}
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
              26,000+ Articles
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Deep knowledge for
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                every template
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every template comes with 20+ curated articles—tactical guides, research-backed insights, and step-by-step breakdowns. Our knowledge base grows with our templates, ensuring comprehensive coverage across all life situations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Articles Different */}
      <motion.section
        className="py-16 bg-muted/30 border-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built with Axiom Engine</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every article is systematically generated to provide actionable insights, ensuring consistent quality and comprehensive coverage across our entire knowledge base.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Research-Backed Insights",
                description: "Each article combines expert knowledge, proven methodologies, and practical guidance to help you make informed decisions in any situation."
              },
              {
                icon: Layers,
                title: "20+ Articles Per Template",
                description: "From getting started guides to advanced strategies, every template has a full suite of articles covering all aspects of your journey."
              },
              {
                icon: BookOpen,
                title: "Comprehensive Coverage",
                description: "With articles spanning 1,298 templates, we've systematically covered every major life situation—from weddings to career changes to home buying."
              }
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg h-full">
                    <CardHeader>
                      <Icon className="h-8 w-8 mb-4 text-primary" />
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Article List */}
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <ArticlesList initialArticles={articles} initialTotal={total} />
      </motion.div>
    </PageLayout>
  );
}
