"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Briefcase, Heart, Activity, Sprout, DollarSign, Calendar, Search } from 'lucide-react';
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

const categoryIconComponents: Record<string, any> = {
  'career-work': Briefcase,
  'relationships': Heart,
  'health-wellness': Activity,
  'personal-growth': Sprout,
  'finance': DollarSign,
  'life-events': Calendar,
};

const categoryColors: Record<string, { bg: string; text: string; icon: string }> = {
  'career-work': { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", icon: "text-blue-600 dark:text-blue-400" },
  'relationships': { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", icon: "text-pink-600 dark:text-pink-400" },
  'health-wellness': { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", icon: "text-green-600 dark:text-green-400" },
  'personal-growth': { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", icon: "text-purple-600 dark:text-purple-400" },
  'finance': { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", icon: "text-emerald-600 dark:text-emerald-400" },
  'life-events': { bg: "bg-primary/10", text: "text-primary", icon: "text-primary" },
};

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
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border overflow-y-auto bg-background">
        <div className="py-6 px-4">
          <nav className="space-y-0.5">
            {categories.map((category) => {
              const Icon = categoryIconComponents[category.id] || Briefcase;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                    isSelected
                      ? 'text-foreground bg-muted/50'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="flex-1">{category.name}</span>
                  <span className="text-xs opacity-60">{category.count}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
          <div className="px-6 lg:px-12 py-8">
            {selectedCategoryData ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {(() => {
                      const Icon = categoryIconComponents[selectedCategoryData.id] || Briefcase;
                      const colors = categoryColors[selectedCategoryData.id] || categoryColors['career-work'];
                      return <Icon className={cn("h-4 w-4", colors.icon)} />;
                    })()}
                    <h2 className="text-xl font-semibold tracking-tight">{selectedCategoryData.name}</h2>
                  </div>
                  <p className="text-[12px] text-muted-foreground mb-4">
                    {selectedCategoryData.description}
                  </p>

                  {/* Search */}
                  <div className="relative max-w-xs">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                    <input
                      type="text"
                      placeholder="Search guides..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
                    />
                  </div>
                </div>

                {/* Guides List */}
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      {loadingGuides ? 'Loading...' : `${guides.length} guides`}
                    </span>
                  </div>

                  {loadingGuides ? (
                    <div className="text-center py-12 text-muted-foreground text-sm">
                      Loading guides...
                    </div>
                  ) : (
                    <div className="space-y-0">
                      {guides.map((guide) => {
                        const Icon = categoryIconComponents[selectedCategoryData.id] || Briefcase;
                        return (
                          <Link
                            key={guide.id}
                            href={`/guides/${guide.id}`}
                            className="flex items-center gap-3 py-2.5 border-b border-border/40 hover:bg-muted/20 -mx-3 px-3 transition-colors group"
                          >
                            <Icon className="h-3.5 w-3.5 text-muted-foreground/60" />
                            <span className="text-[13px] font-medium group-hover:text-primary transition-colors">
                              {guide.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                {loadingCategories ? 'Loading categories...' : 'Select a category to view guides'}
              </div>
            )}
          </div>
        </main>
    </div>
  );
}
