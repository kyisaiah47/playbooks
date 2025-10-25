"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ARTICLES_PER_PAGE = 100;

interface Reading {
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
  relatedGuides?: string[];
}

interface ReadingsListProps {
  initialArticles: Reading[];
  initialTotal: number;
}

export function ReadingsList({ initialArticles, initialTotal }: ReadingsListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State
  const [readings, setReadings] = useState<Reading[]>(initialArticles);
  const [total, setTotal] = useState(initialTotal);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const currentPage = parseInt(searchParams.get('page') || '1');
  const totalPages = Math.ceil(total / ARTICLES_PER_PAGE);

  // Sync state with URL params on mount
  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setSelectedType(searchParams.get('type') || 'all');
    setSelectedDifficulty(searchParams.get('difficulty') || 'all');
  }, []);

  // Fetch readings from API when URL params change
  useEffect(() => {
    const fetchArticles = async () => {
      const params = new URLSearchParams();
      const urlQuery = searchParams.get('q') || '';
      const urlType = searchParams.get('type') || 'all';
      const urlDifficulty = searchParams.get('difficulty') || 'all';

      if (urlQuery) params.set('q', urlQuery);
      if (urlType !== 'all') params.set('type', urlType);
      if (urlDifficulty !== 'all') params.set('difficulty', urlDifficulty);
      params.set('page', currentPage.toString());
      params.set('pageSize', ARTICLES_PER_PAGE.toString());

      try {
        const response = await fetch(`/api/readings?${params.toString()}`);
        const data = await response.json();
        setReadings(data.readings || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error('Failed to fetch readings:', error);
      }
    };

    fetchArticles();
  }, [searchParams, currentPage]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery) params.set('q', searchQuery);
      else params.delete('q');
      params.delete('page'); // Reset to page 1

      const newUrl = params.toString() ? `/readings?${params.toString()}` : '/readings';
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Update URL and reset to page 1 when filters change
  const handleFilterChange = (type?: string, difficulty?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (type !== undefined) {
      if (type !== 'all') params.set('type', type);
      else params.delete('type');
    }
    if (difficulty !== undefined) {
      if (difficulty !== 'all') params.set('difficulty', difficulty);
      else params.delete('difficulty');
    }
    params.delete('page'); // Reset to page 1

    const newUrl = params.toString() ? `/readings?${params.toString()}` : '/readings';
    router.push(newUrl, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) params.delete('page');
    else params.set('page', page.toString());

    const newUrl = params.toString() ? `/readings?${params.toString()}` : '/readings';
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl relative">
      {/* Browse Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse All Articles</h2>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search readings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Select value={selectedType} onValueChange={(value) => {
              setSelectedType(value);
              handleFilterChange(value, undefined);
            }}>
              <SelectTrigger className="w-full sm:w-[180px]">
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
              handleFilterChange(undefined, value);
            }}>
              <SelectTrigger className="w-full sm:w-[180px]">
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
          {readings.map((article: any) => {
            // Get template name from relatedGuides or fallback to category
            const guideName = article.relatedGuides?.[0] || article.category;

            return (
              <Link
                key={article.id}
                href={`/readings/${article.slug}`}
                className="group block py-3 hover:text-primary transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground whitespace-nowrap">
                    {guideName && (
                      <span className="hidden sm:inline">{guideName}</span>
                    )}
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
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
                    onClick={() => handlePageChange(page as number)}
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
            onClick={() => handlePageChange(currentPage + 1)}
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
