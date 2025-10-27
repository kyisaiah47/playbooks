'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FileText, Sparkles, Search, Briefcase, Heart, Activity, Sprout, DollarSign, Calendar } from 'lucide-react';
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

interface NewNoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateNote: (guideId: string | null) => void;
  workspaceId: string;
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

export function NewNoteDialog({ open, onOpenChange, onCreateNote, workspaceId }: NewNoteDialogProps) {
  const [step, setStep] = useState<'choice' | 'category' | 'guide'>('choice');
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setStep('choice');
      setSelectedCategory(null);
      setSearchQuery('');
      setGuides([]);
    }
  }, [open]);

  // Fetch categories when moving to category selection
  useEffect(() => {
    if (step === 'category' && categories.length === 0) {
      fetchCategories();
    }
  }, [step]);

  // Fetch guides when category is selected
  useEffect(() => {
    if (selectedCategory) {
      fetchGuides();
    }
  }, [selectedCategory, searchQuery]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/guides');
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGuides = async () => {
    if (!selectedCategory) return;

    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  const handleBlankNote = () => {
    onCreateNote(null);
    onOpenChange(false);
  };

  const handleGuideNote = () => {
    setStep('category');
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setStep('guide');
  };

  const handleGuideSelect = (guideId: string) => {
    onCreateNote(guideId);
    onOpenChange(false);
  };

  const handleBack = () => {
    if (step === 'guide') {
      setStep('category');
      setSelectedCategory(null);
      setGuides([]);
    } else if (step === 'category') {
      setStep('choice');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Note</DialogTitle>
          <DialogDescription>
            {step === 'choice' && 'Choose how you want to start your note'}
            {step === 'category' && 'Select a category'}
            {step === 'guide' && 'Choose a guide template'}
          </DialogDescription>
        </DialogHeader>

        {step !== 'choice' && (
          <button
            onClick={handleBack}
            className="text-sm text-muted-foreground hover:text-foreground mb-2 flex items-center gap-1"
          >
            ← Back
          </button>
        )}

        {step === 'choice' && (
          <div className="grid gap-3 py-4">
            <motion.button
              onClick={handleBlankNote}
              className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">Blank Note</div>
                <div className="text-sm text-muted-foreground">
                  Start with an empty note and write freely
                </div>
              </div>
            </motion.button>

            <motion.button
              onClick={handleGuideNote}
              className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">Guided Note</div>
                <div className="text-sm text-muted-foreground">
                  Use a guide template with questions and resources
                </div>
              </div>
            </motion.button>
          </div>
        )}

        {step === 'category' && (
          <div className="py-4">
            {loading ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                Loading categories...
              </div>
            ) : (
              <div className="grid gap-2">
                {categories.map((category) => {
                  const Icon = categoryIconComponents[category.id] || Briefcase;
                  const colors = categoryColors[category.id] || categoryColors['career-work'];
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/20 transition-colors text-left"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", colors.bg)}>
                        <Icon className={cn("w-4 h-4", colors.icon)} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{category.name}</div>
                        <div className="text-xs text-muted-foreground">{category.count} guides</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {step === 'guide' && (
          <div className="py-4">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
              <input
                type="text"
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-9 pr-3 bg-transparent border border-border rounded-lg focus:border-foreground/40 outline-none text-sm transition-colors"
              />
            </div>

            {loading ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                Loading guides...
              </div>
            ) : guides.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No guides found
              </div>
            ) : (
              <div className="max-h-[400px] overflow-y-auto space-y-2">
                {guides.map((guide) => {
                  const Icon = categoryIconComponents[guide.category] || Briefcase;
                  return (
                    <motion.button
                      key={guide.id}
                      onClick={() => handleGuideSelect(guide.id)}
                      className="w-full flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/20 transition-colors text-left"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Icon className="w-4 h-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm mb-1">{guide.name}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{guide.description}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
