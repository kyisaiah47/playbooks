import Link from "next/link";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Heart, Home, Briefcase, Target, Lightbulb } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Highlighter } from "@/components/ui/highlighter";
import { PageLayout } from "@/components/layout";
import { getArticleBySlug, getRelatedArticles, getArticlesByCategory } from "@/registry/articles";
import React from "react";
import { templateRegistry } from "@/registry/templates";
import { ArticleContent } from "./article-content";
import { TableOfContents } from "./table-of-contents";

// Category icon mapping
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Wedding Planning":
      return Heart;
    case "Home Buying":
      return Home;
    case "Career":
      return Briefcase;
    default:
      return Target;
  }
};

// Extract template name from slug
function getTemplateFromSlug(slug?: string): string {
  if (!slug) return 'home buying';

  // Map specific article slugs to proper template names
  const slugTemplateMap: Record<string, string> = {
    'complete-first-time-home-buyer-guide-2025': 'home buying',
    'first-time-home-buyer-timeline-checklist-complete-planning-guide': 'home buying',
    'alternative-home-financing-options-guide-2025': 'home buying',
    'wedding-timeline-planning-master-schedule-guide': 'wedding planning',
    'building-your-baby-budget-financial-planning-guide': 'baby planning',
    'choosing-first-3d-printer-complete-guide': '3d printing',
    'advanced-3d-printing-materials-guide': '3d printing',
    '3d-print-troubleshooting-failures-guide': '3d printing'
  };

  // Check if we have a specific mapping
  if (slugTemplateMap[slug]) {
    return slugTemplateMap[slug];
  }

  // Try to extract template name from slug structure
  if (slug.includes('home-buyer') || slug.includes('home-buying')) return 'home buying';
  if (slug.includes('wedding')) return 'wedding planning';
  if (slug.includes('baby') || slug.includes('pregnancy')) return 'baby planning';
  if (slug.includes('3d-print')) return '3d printing';
  if (slug.includes('travel')) return 'travel planning';
  if (slug.includes('fitness') || slug.includes('workout')) return 'fitness journey';
  if (slug.includes('business')) return 'small business';
  if (slug.includes('investment') || slug.includes('financial')) return 'investment portfolio';

  // Default fallback
  return 'planning';
}

// Metadata is handled in layout.tsx

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = await getArticleBySlug(slug);

  // Get related posts with multiple fallback strategies
  let relatedPosts = [];
  if (blogPost) {
    // First try: official related posts
    const officialRelated = await getRelatedArticles(blogPost.id, 6);
    if (officialRelated.length > 0) {
      relatedPosts = officialRelated;
    } else {
      // Second try: same category posts
      const categoryPosts = await getArticlesByCategory(blogPost.category);
      relatedPosts = categoryPosts.filter(post => post.id !== blogPost.id).slice(0, 6);
    }
  }

  // Generate table of contents from content
  const tableOfContents = blogPost ? (() => {
    const headings: Array<{id: string, title: string, level: number}> = [];
    const lines = blogPost.content.split('\n\n');

    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '').trim();
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        headings.push({ id, title, level: 2 });
      } else if (line.startsWith('### ')) {
        const title = line.replace('### ', '').trim();
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        headings.push({ id, title, level: 3 });
      }
    });

    return headings;
  })() : [];

  if (!blogPost) {
    return (
      <PageLayout>
        <div className="py-24 md:py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground">The article you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Scroll Progress Bar */}
      <ScrollProgress className="fixed top-0 z-50" />

      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="container mx-auto max-w-7xl px-4 pt-8 pb-8">

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              {blogPost.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                {blogPost.category} Guide
              </Button>
            </div>
          </header>
        </div>

        {/* Content with Sidebars */}
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Sidebar - Sticky */}
            <aside className="lg:col-span-2 self-start">
              <div className="sticky top-8 space-y-8 max-h-screen overflow-y-auto">
                {/* Topics Section */}
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-4">Topics</h3>
                  <div className="space-y-2">
                    <Link href="/articles" className="block text-sm text-muted-foreground hover:text-foreground">
                      All Articles
                    </Link>
                    <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                      Wedding Planning
                    </Link>
                    <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                      Home Buying
                    </Link>
                    <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                      Career Development
                    </Link>
                  </div>
                </div>

                {/* Last Updated */}
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-2">Last Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-7">
              <ArticleContent content={blogPost.content} />

              {/* CTA Section */}
              <div className="bg-muted/30 rounded-2xl p-8 mt-16 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get our comprehensive {blogPost.category.toLowerCase()} template with expert guidance,
                    checklists, and step-by-step instructions.
                  </p>
                  <Button size="lg" className="mr-4" asChild>
                    <Link href={`/${blogPost.category.toLowerCase().replace(' ', '-')}/app`}>
                      Get {blogPost.category} Template
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/articles">
                      Browse More Articles
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Related articles with Marquee */}
              {relatedPosts.length > 0 && (
                <section className="mt-16 mb-16">
                  <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
                  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:15s]">
                      {relatedPosts.slice(0, Math.ceil(relatedPosts.length / 2)).map((post) => (
                        <article
                          key={post.id}
                          className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                        >
                          <div className="flex flex-row items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              {React.createElement(getCategoryIcon(post.category), { className: "w-4 h-4 text-primary" })}
                            </div>
                            <div className="flex flex-col">
                              <figcaption className="text-sm font-medium dark:text-white">
                                {post.category}
                              </figcaption>
                              <p className="text-xs font-medium text-muted-foreground">{post.readTime}</p>
                            </div>
                          </div>
                          <Link href={`/articles/${post.slug}`} className="block">
                            <h4 className="mt-2 text-sm font-semibold hover:text-primary line-clamp-2">
                              {post.title}
                            </h4>
                          </Link>
                        </article>
                      ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:15s]">
                      {relatedPosts.slice(Math.ceil(relatedPosts.length / 2)).map((post) => (
                        <article
                          key={post.id}
                          className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                        >
                          <div className="flex flex-row items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              {React.createElement(getCategoryIcon(post.category), { className: "w-4 h-4 text-primary" })}
                            </div>
                            <div className="flex flex-col">
                              <figcaption className="text-sm font-medium dark:text-white">
                                {post.category}
                              </figcaption>
                              <p className="text-xs font-medium text-muted-foreground">{post.readTime}</p>
                            </div>
                          </div>
                          <Link href={`/articles/${post.slug}`} className="block">
                            <h4 className="mt-2 text-sm font-semibold hover:text-primary line-clamp-2">
                              {post.title}
                            </h4>
                          </Link>
                        </article>
                      ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                  </div>
                </section>
              )}

            </main>

            {/* Right Sidebar - Table of Contents - Sticky */}
            <aside className="lg:col-span-3 self-start">
              <TableOfContents headings={tableOfContents} />
            </aside>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}