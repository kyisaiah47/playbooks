"use client"

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/templates';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Layout } from 'lucide-react';
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
  const [templates, setTemplates] = useState<TemplateRegistryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Convert URL slug to proper title case
  const categoryName = categoryDisplayNames[category] ||
    category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  useEffect(() => {
    async function fetchTemplates() {
      try {
        setLoading(true);
        const res = await fetch('/api/templates');
        const data = await res.json();
        const allTemplates = data.templates || [];

        // Filter by category - normalize both for comparison
        const filtered = allTemplates.filter((t: TemplateRegistryEntry) => {
          // Normalize by removing spaces and ampersands, then compare
          const normalizedDbCategory = t.category.toLowerCase().replace(/[\s&]+/g, '');
          const normalizedUrlCategory = category.toLowerCase().replace(/[-]/g, '');
          return normalizedDbCategory === normalizedUrlCategory;
        });

        setTemplates(filtered);
      } catch (error) {
        console.error('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, [category]);

  // Filter templates by search query
  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) return templates;

    return templates.filter(t =>
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
              {filteredTemplates.length} {filteredTemplates.length === 1 ? 'Template' : 'Templates'}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {categoryName}
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Templates
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertly crafted templates for {categoryName.toLowerCase()}. Each template includes prompts, articles, and structured guidance.
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
          ) : filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery ? 'No templates found matching your search.' : 'No templates available in this category.'}
              </p>
            </div>
          ) : (
            <div className="border-t pt-8">
              <h2 className="text-xs font-semibold text-muted-foreground mb-6 tracking-wider uppercase">
                {categoryName}
              </h2>
              <ol className="space-y-2 pl-6 list-decimal marker:text-sm">
                {filteredTemplates.map((template) => (
                  <li key={template.id} className="py-2">
                    <Link
                      href={`/templates/${template.id}`}
                      className="group block text-foreground hover:text-primary transition-colors"
                    >
                      <div className="text-base">
                        {template.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
