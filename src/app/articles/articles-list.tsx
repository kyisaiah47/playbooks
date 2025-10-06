"use client";

import React, { useState, useEffect, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

const ARTICLES_PER_PAGE = 100;

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  featured: boolean;
  tags: string[];
  slug: string;
  type: string;
  difficulty: string;
  relatedTemplates?: string[];
}

interface ArticlesListProps {
  initialArticles: Article[];
  initialTotal: number;
}

export function ArticlesList({ initialArticles, initialTotal }: ArticlesListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // State
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [total, setTotal] = useState(initialTotal);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const currentPage = parseInt(searchParams.get('page') || '1');
  const totalPages = Math.ceil(total / ARTICLES_PER_PAGE);

  // Sync state with URL params on mount
  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setSelectedType(searchParams.get('type') || 'all');
    setSelectedDifficulty(searchParams.get('difficulty') || 'all');
  }, []);

  // Fetch articles from API when filters change
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      const params = new URLSearchParams();

      if (searchQuery) params.set('q', searchQuery);
      if (selectedType !== 'all') params.set('type', selectedType);
      if (selectedDifficulty !== 'all') params.set('difficulty', selectedDifficulty);
      params.set('page', currentPage.toString());
      params.set('pageSize', ARTICLES_PER_PAGE.toString());

      try {
        const response = await fetch(`/api/articles?${params.toString()}`);
        const data = await response.json();
        setArticles(data.articles || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [searchQuery, selectedType, selectedDifficulty, currentPage]);

  // Update URL when filters change
  const updateFilters = (updates: { q?: string; type?: string; difficulty?: string; page?: number }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (updates.q !== undefined) {
      if (updates.q) params.set('q', updates.q);
      else params.delete('q');
    }
    if (updates.type !== undefined) {
      if (updates.type !== 'all') params.set('type', updates.type);
      else params.delete('type');
    }
    if (updates.difficulty !== undefined) {
      if (updates.difficulty !== 'all') params.set('difficulty', updates.difficulty);
      else params.delete('difficulty');
    }
    if (updates.page !== undefined) {
      if (updates.page === 1) params.delete('page');
      else params.set('page', updates.page.toString());
    }

    const newUrl = params.toString() ? `/articles?${params.toString()}` : '/articles';
    router.push(newUrl);
  };

  // Debounced search - only update URL if search query is different from URL param
  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    if (searchQuery === urlQuery) return;

    const timer = setTimeout(() => {
      updateFilters({ q: searchQuery, page: 1 });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 max-w-6xl relative">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4 shadow-lg">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm font-medium">Searching articles...</span>
          </div>
        </div>
      )}

      {/* Browse Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse All Articles</h2>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>

          <div className="flex gap-2">
            <Select value={selectedType} onValueChange={(value) => {
              setSelectedType(value);
              updateFilters({ type: value, page: 1 });
            }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="guide">Guide</SelectItem>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="checklist">Checklist</SelectItem>
                <SelectItem value="tutorial">Tutorial</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={(value) => {
              setSelectedDifficulty(value);
              updateFilters({ difficulty: value, page: 1 });
            }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          {total.toLocaleString()} article{total !== 1 ? 's' : ''} {searchQuery || selectedType !== 'all' || selectedDifficulty !== 'all' ? 'found' : 'total'}
        </div>
      </section>

      {/* Articles List */}
      <section className="mb-12">
        <div className="space-y-0 divide-y divide-border">
          {articles.map((article: any) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group block py-4 hover:text-primary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-medium mb-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{article.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{article.type}</Badge>
                    <Badge variant="outline" className="text-xs">{article.difficulty}</Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => updateFilters({ page: currentPage - 1 })}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-1">
            {(() => {
              const delta = 2;
              const range = [];
              const rangeWithDots = [];
              let l;

              // Always show first page
              range.push(1);

              // Calculate range around current page
              for (let i = currentPage - delta; i <= currentPage + delta; i++) {
                if (i > 1 && i < totalPages) {
                  range.push(i);
                }
              }

              // Always show last page
              if (totalPages > 1) {
                range.push(totalPages);
              }

              // Add ellipsis where needed
              range.forEach((i) => {
                if (l) {
                  if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                  } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                  }
                }
                rangeWithDots.push(i);
                l = i;
              });

              return rangeWithDots.map((page, index) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${index}`} className="w-10 flex items-center justify-center text-muted-foreground">
                      ...
                    </span>
                  );
                }
                return (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'default' : 'outline'}
                    onClick={() => updateFilters({ page: page as number })}
                    className="w-10"
                  >
                    {page}
                  </Button>
                );
              });
            })()}
          </div>

          <Button
            variant="outline"
            onClick={() => updateFilters({ page: currentPage + 1 })}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      )}
    </div>
  );
}
