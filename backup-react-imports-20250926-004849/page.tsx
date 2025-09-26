"use client"

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { templateRegistry, getAllCategories, getFeaturedTemplates, searchTemplates } from '@/registry/templates';
import { TemplateImage } from '@/components/ui/template-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, ChevronLeft, ChevronRight, FileText, Users, Clock } from 'lucide-react';
import { PageLayout } from '@/components/layout';

const TEMPLATES_PER_PAGE = 25;


export default function TemplatesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Get current page from URL
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Get categories for filtering
  const categories = useMemo(() => {
    return getAllCategories();
  }, []);

  // Get featured templates
  const featuredTemplates = useMemo(() => {
    const featured = getFeaturedTemplates();
    // Fallback to first 3 if no featured templates
    return featured.length > 0 ? featured.slice(0, 3) : templateRegistry.slice(0, 3);
  }, []);

  // Filter templates based on search and filters
  const filteredTemplates = useMemo(() => {
    let filtered = templateRegistry;

    // Apply search
    if (searchQuery.trim()) {
      filtered = searchTemplates(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(template => template.category === selectedCategory);
    }

    // Apply type filter (featured/popular)
    if (selectedType === 'featured') {
      filtered = filtered.filter(template => template.featured);
    } else if (selectedType === 'popular') {
      filtered = filtered.filter(template => template.popular);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedType]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE);
  const startIndex = (currentPage - 1) * TEMPLATES_PER_PAGE;
  const endIndex = startIndex + TEMPLATES_PER_PAGE;
  const paginatedTemplates = filteredTemplates.slice(startIndex, endIndex);

  // Update URL when page changes
  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    router.push(`/templates?${params.toString()}`);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
    router.push('/templates');
  };

  return (
    <PageLayout>
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">
            {currentPage > 1 ? `All Templates - Page ${currentPage}` : 'All Templates'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Expert-crafted templates for life's biggest decisions. Over {templateRegistry.length} templates to help you organize and navigate complex situations with confidence.
          </p>
        </div>
      </header>

      {/* Featured Templates */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Featured Templates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTemplates.map((template, index) => (
              <Link key={`featured-${template.id}`} href={`/${template.id}/template`}>
                <div className="group bg-background rounded-lg border hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <TemplateImage
                      templateName={template.id}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{template.category}</Badge>
                      {template.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                      {template.popular && (
                        <Badge variant="outline" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {template.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        {template.template.sections?.length || 0} sections
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Expert-crafted
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
                placeholder="Search templates..."
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
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredTemplates.length)} of {filteredTemplates.length} templates
            {filteredTemplates.length !== templateRegistry.length && (
              <span className="ml-1">({templateRegistry.length} total)</span>
            )}
          </div>
        </div>
      </section>

      {/* Templates List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
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
                {paginatedTemplates.map((template, index) => (
                <Link key={`${template.id}-${index}`} href={`/${template.id}/template`}>
                  <div className="group hover:bg-muted/50 transition-colors p-4 rounded-md border-l-2 border-transparent hover:border-primary/50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">{template.category}</Badge>
                          {template.featured && (
                            <Badge variant="outline" className="text-xs">Featured</Badge>
                          )}
                          {template.popular && (
                            <Badge variant="outline" className="text-xs">Popular</Badge>
                          )}
                        </div>
                        <h3 className="font-medium text-lg group-hover:text-primary transition-colors mb-1">
                          {template.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {template.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{template.template.sections?.length || 0} sections</span>
                          <span>Expert-crafted</span>
                          <span>Updated {new Date(template.template.lastUpdated).toLocaleDateString()}</span>
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
    </PageLayout>
  );
}