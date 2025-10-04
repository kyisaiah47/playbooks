"use client";

import React, { useState, useMemo, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TemplateImage } from '@/components/ui/template-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Clock, User, Star, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

const FEATURED_COUNT = 3;
const ARTICLES_PER_PAGE = 50;

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
}

interface ArticlesListProps {
  articles: Article[];
  total: number;
  currentPage: number;
}

export function ArticlesList({ articles, total, currentPage }: ArticlesListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(post => post.category))];
    return uniqueCategories.sort();
  }, [articles]);

  // Get featured articles (curated selection)
  const featuredArticles = useMemo(() => {
    // Curated selection of high-quality, iconic articles
    const featuredSlugs = [
      'wedding-timeline-planning-master-schedule-guide',
      'complete-first-time-home-buyer-guide-2025',
      'building-your-baby-budget-financial-planning-guide'
    ];

    const featured = featuredSlugs.map(slug =>
      articles.find(post => post.slug === slug)
    ).filter(Boolean);

    // Fallback to first 3 if curated articles not found
    return featured.length === FEATURED_COUNT ? featured : articles.slice(0, FEATURED_COUNT);
  }, [articles]);

  // Filter articles based on search and filters
  const filteredArticles = useMemo(() => {
    return articles.filter(post => {
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesType = selectedType === 'all' || post.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'all' || post.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
    });
  }, [articles, searchQuery, selectedCategory, selectedType, selectedDifficulty]);

  // Pagination calculations - server-side pagination, client-side filtering disabled for now
  const totalPages = Math.ceil(total / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, total);

  // Use filtered articles if filters are active, otherwise use server-paginated articles
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedType !== 'all' || selectedDifficulty !== 'all';
  const displayArticles = hasActiveFilters ? filteredArticles : articles;

  // Update URL when page changes
  const updatePage = (page: number) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete('page');
      } else {
        params.set('page', page.toString());
      }
      const newUrl = params.toString() ? `/articles?${params.toString()}` : '/articles';
      router.push(newUrl);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Loading overlay */}
      {isPending && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4 shadow-lg">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm font-medium">Loading articles...</span>
          </div>
        </div>
      )}
      {/* Featured Articles Section */}
      {currentPage === 1 && !searchQuery && selectedCategory === 'all' && selectedType === 'all' && selectedDifficulty === 'all' && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article: any) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <TemplateImage
                    templateName={article.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={article.title}
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">{article.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="guide">Guide</SelectItem>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="checklist">Checklist</SelectItem>
                <SelectItem value="tool">Tool</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {startIndex + 1}-{endIndex} of {hasActiveFilters ? filteredArticles.length : total} articles
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map((article: any) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <Badge variant="outline" className="mb-3">{article.category}</Badge>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <Badge variant="secondary" className="text-xs">{article.type}</Badge>
                <Badge variant="outline" className="text-xs">{article.difficulty}</Badge>
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
            onClick={() => updatePage(currentPage - 1)}
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
                    onClick={() => updatePage(page as number)}
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
            onClick={() => updatePage(currentPage + 1)}
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
