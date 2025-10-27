'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Heart, Activity, Sprout, DollarSign, Calendar, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

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

interface Question {
  id: string;
  question: string;
  category: string;
  question_number: number;
}

interface Reading {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
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

export default function DiscoverPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loadingGuides, setLoadingGuides] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loadingContent, setLoadingContent] = useState(false);

  // Get selected category from context in demo mode, or from URL in normal mode
  const { selectedCategory: demoCategory, setSelectedCategory: setDemoCategory } = useDemo();
  const selectedCategory = demoMode ? demoCategory : searchParams.get('category');

  // Fetch categories and select first one by default if none selected
  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoadingCategories(true);
        const res = await fetch('/api/guides');
        const data = await res.json();
        const cats = data.categories || [];
        setCategories(cats);

        // If no category is selected and we have categories, select the first one
        if (!selectedCategory && cats.length > 0) {
          if (demoMode && setDemoCategory) {
            setDemoCategory(cats[0].id);
          } else {
            // Update URL with first category
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.set('category', cats[0].id);
            router.replace(`?${newParams.toString()}`, { scroll: false });
          }
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    }

    fetchCategories();
  }, []);

  // Reset selected guide and search when category changes
  useEffect(() => {
    setSelectedGuide(null);
    setSearchQuery('');
  }, [selectedCategory]);

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

  // Fetch questions and readings when a guide is selected
  useEffect(() => {
    async function fetchGuideContent() {
      if (!selectedGuide) {
        setQuestions([]);
        setReadings([]);
        return;
      }

      try {
        setLoadingContent(true);
        const [questionsRes, readingsRes] = await Promise.all([
          fetch(`/api/guides/${selectedGuide.id}/questions`),
          fetch(`/api/guides/${selectedGuide.id}/readings`)
        ]);

        const questionsData = await questionsRes.json();
        const readingsData = await readingsRes.json();

        setQuestions(questionsData.questions || []);
        setReadings(readingsData.readings || []);
      } catch (error) {
        console.error('Error fetching guide content:', error);
      } finally {
        setLoadingContent(false);
      }
    }

    fetchGuideContent();
  }, [selectedGuide]);

  const handleGuideClick = (guide: Guide) => {
    // Show guide detail view instead of redirecting to notes
    setSelectedGuide(guide);
  };

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  // Show loader while categories are loading
  if (loadingCategories) {
    return (
      <motion.div
        className="h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-muted-foreground text-sm">Loading...</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        {selectedCategoryData ? (
          <>
            {/* Header */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
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
              <motion.div
                className="relative max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                <motion.input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-[13px] transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>

            {/* Guides List or Detail View */}
            {selectedGuide ? (
              <div>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="text-sm text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1"
                >
                  ← Back to guides
                </button>
                <h1 className="text-3xl font-semibold mb-3">{selectedGuide.name}</h1>
                <p className="text-base text-muted-foreground mb-6">{selectedGuide.description}</p>
                {selectedGuide.tags && selectedGuide.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedGuide.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-muted rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {loadingContent ? (
                  <div className="text-center py-12 text-muted-foreground text-sm">
                    Loading content...
                  </div>
                ) : (
                  <>
                    {/* Questions Section */}
                    {questions.length > 0 && (
                      <div className="mb-12">
                        <h2 className="text-xl font-semibold mb-4">Guided Questions</h2>
                        <p className="text-sm text-muted-foreground mb-6">
                          Work through these questions to gain clarity and develop your action plan.
                        </p>
                        <div className="space-y-4">
                          {questions.map((q, idx) => (
                            <div key={q.id} className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors">
                              <div className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                                  {idx + 1}
                                </span>
                                <div className="flex-1">
                                  <p className="text-sm">{q.question}</p>
                                  {q.category && (
                                    <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-muted rounded">
                                      {q.category}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Readings Section */}
                    {readings.length > 0 && (
                      <div className="mb-12">
                        <h2 className="text-xl font-semibold mb-4">Recommended Readings</h2>
                        <p className="text-sm text-muted-foreground mb-6">
                          Expert perspectives and research to inform your approach.
                        </p>
                        <div className="space-y-4">
                          {readings.map((reading) => (
                            <div key={reading.id} className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors">
                              <h3 className="text-sm font-medium mb-2">{reading.title}</h3>
                              <p className="text-xs text-muted-foreground mb-3">{reading.excerpt}</p>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                {reading.author && <span>{reading.author}</span>}
                                {reading.readTime && <span>• {reading.readTime}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div key={selectedCategory}>
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
                  >
                    Loading guides...
                  </motion.div>
                ) : (
                  <motion.div
                    key={`guides-${selectedCategory}`}
                    className="space-y-0"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.03
                        }
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
                          onClick={() => handleGuideClick(guide)}
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
              </div>
            )}
          </>
        ) : null}
      </div>
    </motion.div>
  );
}
