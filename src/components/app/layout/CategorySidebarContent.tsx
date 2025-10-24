'use client';

import { useState, useEffect } from 'react';
import { Briefcase, Heart, Activity, Sprout, DollarSign, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string | null;
  display_order: number;
  count: number;
}

interface CategorySidebarContentProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
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
  'life-events': { bg: "bg-[#6366f1]/10", text: "text-[#6366f1]", icon: "text-[#6366f1]" },
};

export function CategorySidebarContent({ selectedCategory, onCategorySelect }: CategorySidebarContentProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasAutoSelected, setHasAutoSelected] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
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
    }

    fetchCategories();
  }, []);

  // Auto-select first category if none selected
  useEffect(() => {
    if (!hasAutoSelected && !selectedCategory && categories.length > 0) {
      onCategorySelect(categories[0].id);
      setHasAutoSelected(true);
    }
  }, [categories, selectedCategory, hasAutoSelected, onCategorySelect]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-xs text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-3">
        <div className="px-2 py-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
          Categories
        </div>
        <nav className="space-y-0.5">
          {categories.map((category) => {
            const colors = categoryColors[category.id] || categoryColors['career-work'];
            const Icon = categoryIconComponents[category.id] || Briefcase;
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={cn(
                  "w-full px-2 py-1.5 rounded text-[13px] transition-colors text-left",
                  isSelected
                    ? `${colors.bg} font-medium ${colors.text}`
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={cn("h-3.5 w-3.5", isSelected && colors.icon)} />
                    <span>{category.name}</span>
                  </div>
                  <span className="text-[11px] opacity-60">{category.count}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
