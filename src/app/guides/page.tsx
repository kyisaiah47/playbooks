"use client"

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Layout, FileText, Lightbulb, Target } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { motion } from 'framer-motion';

interface Guide {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string | null;
  tags: string[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string | null;
  display_order: number;
  count: number;
}

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allGuides, setAllGuides] = useState<Guide[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all guides from all categories
  useEffect(() => {
    async function fetchGuides() {
      try {
        setLoading(true);
        // First get categories
        const categoriesRes = await fetch('/api/guides');
        const categoriesData = await categoriesRes.json();
        const cats = categoriesData.categories || [];
        setCategories(cats);

        // Then fetch guides for each category
        const allGuidesPromises = cats.map(async (cat: Category) => {
          const guidesRes = await fetch(`/api/guides?category=${cat.id}`);
          const guidesData = await guidesRes.json();
          return guidesData.guides || [];
        });

        const guidesArrays = await Promise.all(allGuidesPromises);
        const guides = guidesArrays.flat();
        setAllGuides(guides);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, []);

  // Group guides by category and sort alphabetically
  const groupedGuides = useMemo(() => {
    const filtered = searchQuery.trim()
      ? allGuides.filter(g =>
          g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allGuides;

    const grouped: Record<string, Guide[]> = {};

    filtered.forEach(guide => {
      // Find category name
      const category = categories.find(c => c.id === guide.category);
      const categoryName = category ? category.name : guide.category;

      if (!grouped[categoryName]) {
        grouped[categoryName] = [];
      }
      grouped[categoryName].push(guide);
    });

    // Sort guides within each category alphabetically
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }, [allGuides, categories, searchQuery]);

  const categoryNames = Object.keys(groupedGuides).sort();
  const displayedCount = Object.values(groupedGuides).flat().length;

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
              <Layout className="mr-2 h-4 w-4" />
              Comprehensive Guides
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Life guidance for
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                every situation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From wedding planning to career transitions, home buying to business launches—we've systematically created guides with questions, readings, and structured guidance for life's biggest decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Guides Different */}
      <motion.section
        className="py-16 bg-muted/30 border-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for abundance, not curation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instead of handpicking 20 "best" guides, we give you access to everything—systematically organized, searchable, and ready when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Systematically Generated",
                description: "Every guide is built with Axiom Engine, ensuring consistent quality and comprehensive coverage across all life situations."
              },
              {
                icon: FileText,
                title: "Comprehensive Questions",
                description: "Each guide comes with tactical questions and curated readings, giving you both structure and deep insights."
              },
              {
                icon: Lightbulb,
                title: "Wikipedia Philosophy",
                description: "Abundance over curation. Browse by category, search what you need, and trust that if it exists, we've covered it."
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

      {/* Guides List */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Search */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Browse All Guides</h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {loading ? 'Loading...' : searchQuery.trim()
              ? `${displayedCount} results across ${categoryNames.length} categories`
              : `${displayedCount} guides across ${categoryNames.length} categories`
            }
          </p>
        </div>

        {/* Guides List - Grouped by Category */}
        <div className="space-y-12">
          {categoryNames.map((categoryName) => (
            <section
              key={categoryName}
              className="border-t pt-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  {categoryName}
                </h2>
                <Link
                  href={`/guides/categories/${categoryName.toLowerCase().replace(/\s+&?\s*/g, '-')}`}
                  className="text-xs text-primary hover:underline"
                >
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                {groupedGuides[categoryName].map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.id}`}
                    className="group block py-2 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="text-base">
                      {guide.name}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
