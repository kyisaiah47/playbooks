"use client"

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { templateRegistry, getAllCategories } from '@/registry/templates';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Layout, FileText, Lightbulb, Target } from 'lucide-react';
import { PageLayout } from '@/components/layout';


export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Group templates by category and sort alphabetically
  const groupedTemplates = useMemo(() => {
    const filtered = searchQuery.trim()
      ? templateRegistry.filter(t =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : templateRegistry;

    const grouped: Record<string, typeof templateRegistry> = {};

    filtered.forEach(template => {
      if (!grouped[template.category]) {
        grouped[template.category] = [];
      }
      grouped[template.category].push(template);
    });

    // Sort templates within each category alphabetically
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }, [searchQuery]);

  const categories = Object.keys(groupedTemplates).sort();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="px-4 py-2">
              <Layout className="mr-2 h-4 w-4" />
              1,298 Templates
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Life guidance for
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                every situation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From wedding planning to career transitions, home buying to business launches—we've systematically created templates with prompts, articles, and structured guidance for life's biggest decisions.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Our Templates Different */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for abundance, not curation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instead of handpicking 20 "best" templates, we give you access to everything—systematically organized, searchable, and ready when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Systematically Generated</CardTitle>
                <CardDescription>
                  Every template is built with Axiom Engine, ensuring consistent quality and comprehensive coverage across all life situations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>15,000+ Prompts Included</CardTitle>
                <CardDescription>
                  Each template comes with tactical prompts and 20+ curated articles, giving you both structure and deep insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Lightbulb className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Wikipedia Philosophy</CardTitle>
                <CardDescription>
                  Abundance over curation. Browse by category, search what you need, and trust that if it exists, we've covered it.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Template List */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Search */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Browse All Templates</h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {templateRegistry.length} templates across {categories.length} categories
          </p>
        </div>

        {/* Templates List - Grouped by Category */}
        <div className="space-y-12">
          {categories.map(category => (
            <section key={category} className="border-t pt-8">
              <h2 className="text-xs font-semibold text-muted-foreground mb-6 tracking-wider uppercase">
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                {groupedTemplates[category].map((template) => (
                  <Link
                    key={template.id}
                    href={`/${template.id}/template`}
                    className="group block py-2 hover:text-primary transition-colors"
                  >
                    <div className="text-base">
                      {template.name}
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