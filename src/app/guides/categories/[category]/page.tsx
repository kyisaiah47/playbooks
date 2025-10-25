"use client"

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import type { GuideRegistryEntry } from '@/registry/guides';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Layout, ChevronDown, ChevronUp } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { motion } from 'framer-motion';
import { use } from 'react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Map URL slugs to display names
const categoryDisplayNames: Record<string, string> = {
  'life-planning': 'Life Planning',
  'career-finance': 'Career & Finance',
  'health-wellness': 'Health & Wellness',
  'relationships-family': 'Relationships & Family',
  'creative-hobbies': 'Creative & Hobbies',
  'business-entrepreneurship': 'Business & Entrepreneurship',
  'education-learning': 'Education & Learning',
  'technology-digital': 'Technology & Digital',
  'personal-development': 'Personal Development',
  'home-living': 'Home & Living',
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params);
  const [searchQuery, setSearchQuery] = useState('');
  const [templates, setTemplates] = useState<GuideRegistryEntry[]>([]);
  const [guideData, setGuideData] = useState<Record<string, { questions: any[], readings: any[] }>>({});
  const [expandedGuides, setExpandedTemplates] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const toggleGuide = (guideId: string) => {
    const newExpanded = new Set(expandedGuides);
    if (newExpanded.has(guideId)) {
      newExpanded.delete(guideId);
    } else {
      newExpanded.add(guideId);
    }
    setExpandedTemplates(newExpanded);
  };

  // Convert URL slug to proper title case
  const categoryName = categoryDisplayNames[category] ||
    category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  useEffect(() => {
    async function fetchTemplates() {
      try {
        setLoading(true);
        const res = await fetch('/api/guides');
        const data = await res.json();
        const allTemplates = data.guides || [];

        // Filter by category - normalize both for comparison
        const filtered = allTemplates.filter((t:GuideRegistryEntry) => {
          // Normalize by removing spaces and ampersands, then compare
          const normalizedDbCategory = t.category.toLowerCase().replace(/[\s&]+/g, '');
          const normalizedUrlCategory = category.toLowerCase().replace(/[-]/g, '');
          return normalizedDbCategory === normalizedUrlCategory;
        });

        setTemplates(filtered);

        // Fetch questions and readings for each guide
        const dataPromises = filtered.map(async (guide)) => {
          const [questionsRes, readingsRes] = await Promise.all([
            fetch(`/api/questions?guideId=${guide.id}`),
            fetch(`/api/readings?guide=${guide.id}&pageSize=1000`)
          ]);

          const questionsData = await questionsRes.json();
          const readingsData = await readingsRes.json();

          return {
            id: guide.id,
            questions: questionsData.questions || [],
            readings: readingsData.readings || []
          };
        });

        const allData = await Promise.all(dataPromises);
        const dataMap: Record<string, { questions: any[], readings: any[] }> = {};
        allData.forEach(item => {
          dataMap[item.id] = { questions: item.questions, readings: item.readings };
        });

        setGuideData(dataMap);
      } catch (error) {
        console.error('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, [category]);

  // Filter templates by search query
  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) return templates;

    return guides.filter(t =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [templates, searchQuery]);

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
              {filteredGuides.length} {filteredGuides.length === 1 ? 'Template' : 'Templates'}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {categoryName}
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Templates
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertly crafted guides for {categoryName.toLowerCase()}. Each guide includes questions, readings, and structured guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-t border-b bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>
      </section>

      {/* Templates List */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading templates...</p>
            </div>
          ) : filteredGuides.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery ? 'No guides found matching your search.' : 'No templates available in this category.'}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredGuides.map((guide) => {
                const data = guideData[guide.id] || { questions: [], readings: [] };
                const isExpanded = expandedGuides.has(guide.id);

                return (
                  <div key={guide.id} className="border-t pt-8">
                    {/* Template Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Link href={`/guides/${guide.id}`}>
                            <h2 className="text-2xl font-bold hover:text-primary transition-colors">
                              {guide.name}
                            </h2>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-2">
                            {guide.description}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleGuide(guide.id)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Prompts & Articles - 2 Column Layout */}
                    {isExpanded && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Prompts Section */}
                      {data.questions.length > 0 && (
                        <div>
                          <h3 className="text-xs font-semibold text-muted-foreground mb-4 tracking-wider uppercase">
                            Prompts
                          </h3>
                          <ol className="space-y-2 pl-6 list-decimal marker:text-sm">
                            {data.questions.slice(0, 5).map((question: any) => (
                              <li key={question.id} className="py-1 text-sm">
                                {question.question}
                              </li>
                            ))}
                          </ol>
                          {data.questions.length > 5 && (
                            <div className="mt-3">
                              <Link href={`/guides/${guide.id}`} className="text-sm text-muted-foreground hover:text-primary italic">
                                +{data.questions.length - 5} more questions →
                              </Link>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Articles Section */}
                      {data.readings.length > 0 && (
                        <div>
                          <h3 className="text-xs font-semibold text-muted-foreground mb-4 tracking-wider uppercase">
                            Articles
                          </h3>
                          <ol className="space-y-2 pl-6 list-decimal marker:text-sm">
                            {data.readings.slice(0, 5).map((reading: any) => (
                              <li key={reading.id} className="py-1">
                                <Link
                                  href={`/readings/${reading.slug}`}
                                  className="text-sm hover:text-primary transition-colors"
                                >
                                  {reading.title}
                                </Link>
                              </li>
                            ))}
                          </ol>
                          {data.readings.length > 5 && (
                            <div className="mt-3">
                              <Link href={`/guides/${guide.id}`} className="text-sm text-muted-foreground hover:text-primary italic">
                                +{data.readings.length - 5} more readings →
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
