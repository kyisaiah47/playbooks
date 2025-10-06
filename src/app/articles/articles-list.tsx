"use client";

import React, { useState, useMemo, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  articles: Article[];
  total: number;
  currentPage: number;
}

export function ArticlesList({ articles, total, currentPage }: ArticlesListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on search (client-side for current page only)
  const filteredArticles = useMemo(() => {
    if (searchQuery === '') return articles;

    return articles.filter(post => {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    });
  }, [articles, searchQuery]);

  // Pagination calculations - server-side pagination
  const totalPages = Math.ceil(total / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, total);

  // Display filtered results if search is active, otherwise show paginated results
  const displayArticles = searchQuery !== '' ? filteredArticles : articles;

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
    <div className="container mx-auto px-4 max-w-6xl relative">
      {/* Loading overlay */}
      {isPending && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4 shadow-lg">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm font-medium">Loading articles...</span>
          </div>
        </div>
      )}

      {/* Browse Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse All Articles</h2>
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base"
          />
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-muted-foreground">
          {searchQuery !== '' ? (
            `${filteredArticles.length} articles found`
          ) : (
            `${total.toLocaleString()} articles across all templates`
          )}
        </div>
      </section>

      {/* Articles List */}
      <section className="mb-12">
        <div className="space-y-0 divide-y divide-border">
          {displayArticles.map((article: any) => (
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
