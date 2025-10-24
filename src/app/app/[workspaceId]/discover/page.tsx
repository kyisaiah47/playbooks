'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Search, FileText, Plus, Sparkles, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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

// Category icon mapping
const categoryIcons: Record<string, any> = {
  'career-work': '💼',
  'relationships': '❤️',
  'health-wellness': '🏃',
  'personal-growth': '🌱',
  'finance': '💰',
  'life-events': '📅',
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'career-work': { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500/20' },
  'relationships': { bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-500/20' },
  'health-wellness': { bg: 'bg-green-500/10', text: 'text-green-600 dark:text-green-400', border: 'border-green-500/20' },
  'personal-growth': { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/20' },
  'finance': { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20' },
  'life-events': { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-500/20' },
};

export default function DiscoverPage() {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.workspaceId as string;

  const [searchQuery, setSearchQuery] = useState('');
  const [guides, setGuides] = useState<Guide[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [popularGuides, setPopularGuides] = useState<Guide[]>([]);

  // Fetch categories on mount
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

  // Fetch all guides (popular)
  useEffect(() => {
    async function fetchPopularGuides() {
      try {
        setLoading(true);
        const res = await fetch('/api/templates?limit=8');
        const data = await res.json();
        setPopularGuides(data.templates || []);
      } catch (error) {
        console.error('Error fetching popular guides:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPopularGuides();
  }, []);

  // Fetch guides when search or category changes
  useEffect(() => {
    async function fetchGuides() {
      if (!searchQuery.trim() && !selectedCategory) {
        setGuides([]);
        return;
      }

      try {
        setLoading(true);
        const params = new URLSearchParams();

        if (searchQuery.trim()) {
          params.append('search', searchQuery.trim());
        }

        if (selectedCategory) {
          params.append('category', selectedCategory);
        }

        const res = await fetch(`/api/templates?${params}`);
        const data = await res.json();
        setGuides(data.templates || []);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }

    // Debounce search
    const timeoutId = setTimeout(fetchGuides, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedCategory]);

  const handleGuideClick = (guideId: string) => {
    // TODO: Implement adding guide to workspace as a new page
    console.log('Add guide to workspace:', guideId);
    // For now, navigate to the template page
    router.push(`/templates/${guideId}`);
  };

  const handleCreateBlankPage = () => {
    // TODO: Implement creating blank page in workspace
    console.log('Create blank page in workspace:', workspaceId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const filteredGuides = searchQuery.trim() || selectedCategory ? guides : popularGuides;

  return (
    <div className="h-full overflow-y-auto bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Discover Guides</h1>
            <p className="text-muted-foreground text-sm">
              Find the perfect guide template to add to your workspace
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search guides by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start from Template Card */}
            <Card className="hover:border-primary/40 transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">Start from Template</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      Choose from our curated collection of guide templates
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Create Blank Page Card */}
            <Card
              className="hover:border-primary/40 transition-all cursor-pointer group"
              onClick={handleCreateBlankPage}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                        <Plus className="h-5 w-5 text-foreground" />
                      </div>
                      <CardTitle className="text-base">Create Blank Page</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      Start fresh with an empty page
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Popular Guides or Search Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
              {searchQuery.trim() || selectedCategory ? (
                <>
                  <Search className="h-5 w-5" />
                  Search Results
                </>
              ) : (
                <>
                  <TrendingUp className="h-5 w-5" />
                  Popular Guides
                </>
              )}
            </h2>
            {(searchQuery.trim() || selectedCategory) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
              >
                Clear filters
              </Button>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : filteredGuides.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No guides found</h3>
                <p className="text-sm text-muted-foreground">
                  {searchQuery.trim() || selectedCategory
                    ? 'Try adjusting your search or filters'
                    : 'No popular guides available at the moment'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGuides.map((guide) => {
                const colors = categoryColors[guide.category] || categoryColors['career-work'];
                const icon = categoryIcons[guide.category] || '📄';

                return (
                  <Card
                    key={guide.id}
                    className="hover:border-primary/40 transition-all cursor-pointer group"
                    onClick={() => handleGuideClick(guide.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          'h-12 w-12 rounded-lg flex items-center justify-center text-2xl shrink-0',
                          colors.bg,
                          colors.border,
                          'border'
                        )}>
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                              {guide.name}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-sm line-clamp-2">
                            {guide.description}
                          </CardDescription>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className={cn('text-xs', colors.text)}>
                              {guide.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Browse by Category */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category) => {
              const colors = categoryColors[category.id] || categoryColors['career-work'];
              const icon = categoryIcons[category.id] || '📄';
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    'flex items-center gap-3 p-4 rounded-lg border transition-all text-left',
                    isSelected
                      ? `${colors.bg} ${colors.border} border-2`
                      : 'border-border hover:border-border/80 hover:bg-muted/30'
                  )}
                >
                  <div className={cn(
                    'h-10 w-10 rounded-lg flex items-center justify-center text-xl shrink-0',
                    isSelected ? colors.bg : 'bg-muted'
                  )}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm mb-0.5 truncate">
                      {category.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {category.count} {category.count === 1 ? 'guide' : 'guides'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
