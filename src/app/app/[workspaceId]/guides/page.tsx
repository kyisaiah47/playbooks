'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Briefcase, Heart, Activity, Sprout, DollarSign, Calendar, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;

  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loadingGuides, setLoadingGuides] = useState(false);

  // Get selected category from URL
  const selectedCategory = searchParams.get('category');

  // Fetch categories to display category info
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/guides');
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
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

  const handleGuideClick = async (guideId: string) => {
    // Open guide in the notes view
    router.push(`/app/${workspaceId}/notes?id=${guideId}`);
  };

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <AnimatePresence mode="wait">
          {selectedCategoryData ? (
            <motion.div
              key={selectedCategoryData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
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
              </motion.div>

            {/* Guides List */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                  {loadingGuides ? 'Loading...' : `${guides.length} guides`}
                </span>
              </div>

              {loadingGuides ? (
                <motion.div
                  className="text-center py-12 text-muted-foreground text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Loading guides...
                </motion.div>
              ) : (
                <motion.div
                  className="space-y-0"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.03 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {guides.map((guide) => {
                    const Icon = categoryIconComponents[selectedCategoryData.id] || Briefcase;
                    return (
                      <motion.button
                        key={guide.id}
                        onClick={() => handleGuideClick(guide.id)}
                        className="flex items-center gap-3 py-2.5 border-b border-border/40 hover:bg-muted/20 -mx-3 px-3 transition-colors group w-full text-left"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 4, backgroundColor: 'rgba(0,0,0,0.02)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="h-3.5 w-3.5 text-muted-foreground/60" />
                        <span className="text-[13px] font-medium group-hover:text-primary transition-colors">
                          {guide.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12 text-muted-foreground"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Select a category to view guides
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
