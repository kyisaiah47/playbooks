"use client"

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { manualBlogPosts } from '@/registry/blogs';
import { TemplateImage } from '@/components/ui/template-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Clock, User, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageLayout } from '@/components/layout';

const FEATURED_COUNT = 3;
const ARTICLES_PER_PAGE = 25;

export default function ArticlesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Get current page from URL
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Generate page metadata
  const generateMetadata = () => {
    const hasFilters = searchQuery || selectedCategory !== 'all' || selectedType !== 'all' || selectedDifficulty !== 'all';
    const pageTitle = currentPage > 1 ? `Articles - Page ${currentPage}` : 'Articles';
    const title = hasFilters ? `${pageTitle} - Filtered Results` : pageTitle;
    const description = hasFilters
      ? `Browse filtered articles from our collection of ${manualBlogPosts.length}+ expert guides on life decisions and planning.`
      : `Discover ${manualBlogPosts.length}+ expert articles and guides for life's biggest decisions. From career changes to family planning, find practical insights from industry professionals.`;

    return {
      title: `${title} | Templata`,
      description,
      canonical: `/articles${currentPage > 1 ? `?page=${currentPage}` : ''}`,
      robots: currentPage > 1 ? 'noindex,follow' : 'index,follow'
    };
  };

  const metadata = generateMetadata();

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(manualBlogPosts.map(post => post.category))];
    return uniqueCategories.sort();
  }, []);

  // Get featured articles (static selection)
  const featuredArticles = useMemo(() => {
    // Always use the same 3 featured articles
    return manualBlogPosts.slice(0, FEATURED_COUNT);
  }, []);

  // Filter articles based on search and filters
  const filteredArticles = useMemo(() => {
    return manualBlogPosts.filter(post => {
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesType = selectedType === 'all' || post.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'all' || post.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedDifficulty]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  // Update URL when page changes
  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    router.push(`/articles?${params.toString()}`);
  };

  // Reset to page 1 when filters change
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedDifficulty('all');
    router.push('/articles');
  };

  const getTemplateFromSlug = (slug: string) => {
    // Extract template name from slug pattern
    if (!slug || typeof slug !== 'string') {
      return 'home-buying'; // fallback
    }
    const parts = slug.split('-');
    if (parts.length > 2) {
      return parts.slice(0, -2).join('-');
    }
    return 'home-buying'; // fallback
  };

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.title,
    "description": metadata.description,
    "url": `https://templata.com${metadata.canonical}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": filteredArticles.length,
      "itemListElement": paginatedArticles.map((article, index) => ({
        "@type": "Article",
        "position": startIndex + index + 1,
        "name": article.title,
        "description": article.excerpt,
        "url": `https://templata.com/articles/${article.slug}`,
        "author": {
          "@type": "Organization",
          "name": article.author
        },
        "datePublished": article.publishedAt,
        "articleSection": article.category
      }))
    }
  };

  return (
    <PageLayout>

        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">
              {currentPage > 1 ? `All Articles - Page ${currentPage}` : 'All Articles'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Expert insights and practical guides for life's biggest decisions. Over {manualBlogPosts.length} articles to help you navigate complex situations with confidence.
            </p>
          </div>
        </header>

      {/* Featured Articles */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Link key={`featured-${article.id}-${index}`} href={`/articles/${article.slug}`}>
                <div className="group bg-background rounded-lg border hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <TemplateImage
                      templateName={getTemplateFromSlug(article.slug)}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.type}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category, index) => (
                    <SelectItem key={`category-${index}-${category}`} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="All Types" />
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
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="All Levels" />
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
            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
            {filteredArticles.length !== manualBlogPosts.length && (
              <span className="ml-1">({manualBlogPosts.length} total)</span>
            )}
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={resetFilters}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                {paginatedArticles.map((article, index) => (
                <Link key={`${article.id}-${index}`} href={`/articles/${article.slug}`}>
                  <div className="group hover:bg-muted/50 transition-colors p-4 rounded-md border-l-2 border-transparent hover:border-primary/50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                          <Badge variant="outline" className="text-xs">{article.type}</Badge>
                        </div>
                        <h3 className="font-medium text-lg group-hover:text-primary transition-colors mb-1">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{article.author}</span>
                          <span>{article.readTime}</span>
                          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updatePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {/* First page */}
                    {currentPage > 3 && (
                      <>
                        <Button
                          variant={1 === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => updatePage(1)}
                        >
                          1
                        </Button>
                        {currentPage > 4 && <span className="px-2">...</span>}
                      </>
                    )}

                    {/* Page numbers around current page */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page =>
                        page >= currentPage - 2 &&
                        page <= currentPage + 2
                      )
                      .map(page => (
                        <Button
                          key={page}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => updatePage(page)}
                        >
                          {page}
                        </Button>
                      ))}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && <span className="px-2">...</span>}
                        <Button
                          variant={totalPages === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => updatePage(totalPages)}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updatePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </PageLayout>
  );
}