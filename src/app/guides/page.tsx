"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string | null;
  display_order: number;
  count: number;
}

interface Guide {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string | null;
  tags: string[];
}

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingGuides, setLoadingGuides] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoadingCategories(true);
        const res = await fetch('/api/guides');
        const data = await res.json();
        setCategories(data.categories || []);

        // Auto-select first category
        if (data.categories && data.categories.length > 0) {
          setSelectedCategory(data.categories[0].id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    }

    fetchCategories();
  }, []);

  // Fetch guides when category changes or search query changes
  useEffect(() => {
    async function fetchGuides() {
      if (!selectedCategory) return;

      try {
        setLoadingGuides(true);
        const params = new URLSearchParams({ category: selectedCategory });
        if (searchQuery.trim()) {
          params.append('search', searchQuery.trim());
        }

        const res = await fetch(`/api/guides?${params}`);
        const data = await res.json();
        setGuides(data.guides || []);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoadingGuides(false);
      }
    }

    fetchGuides();
  }, [selectedCategory, searchQuery]);

  const totalGuides = categories.reduce((sum, cat) => sum + cat.count, 0);
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <PageLayout>
      {/* Two-Column Layout */}
      <div className="pt-8">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Browse Guides</h1>
            <p className="text-muted-foreground">
              {loadingCategories ? 'Loading guides...' : `${totalGuides} guides across ${categories.length} categories`}
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>
            {searchQuery.trim() && (
              <p className="mt-3 text-sm text-muted-foreground">
                {guides.length} result{guides.length !== 1 ? 's' : ''} found
              </p>
            )}
          </div>

          <div className="flex gap-8">
            {/* Left Sidebar - Categories */}
            <aside className="w-64 flex-shrink-0">
              <div className="sticky top-20">
                <h3 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4">
                  Categories
                </h3>
                <nav className="space-y-1">
                  {categories.map((category) => {
                    const isSelected = selectedCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                          isSelected
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground hover:bg-muted/50"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-xs text-muted-foreground">{category.count}</span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Content - Guide List */}
            <main className="flex-1 min-w-0">
              {selectedCategoryData && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{selectedCategoryData.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {selectedCategoryData.description}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {loadingGuides ? 'Loading...' : `${guides.length} guide${guides.length !== 1 ? 's' : ''}`}
                    </p>
                  </div>

                  {loadingGuides ? (
                    <div className="text-center py-12 text-muted-foreground">
                      Loading guides...
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {guides.map((guide) => (
                        <Link
                          key={guide.id}
                          href={`/templates/${guide.id}`}
                          className="group block p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card"
                        >
                          <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                            {guide.name}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!selectedCategory && !loadingCategories && (
                <div className="text-center py-12 text-muted-foreground">
                  Select a category to view guides
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
