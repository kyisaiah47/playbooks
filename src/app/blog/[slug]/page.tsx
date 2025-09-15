"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Heart, Home, Briefcase, Target, Lightbulb, ChevronRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Highlighter } from "@/components/ui/highlighter";
import { PageLayout } from "@/components/layout";
import { getBlogPostBySlug, getRelatedBlogPosts, getBlogPostsByCategory, blogRegistry } from "@/registry/blogs";
import { use } from "react";
import React, { useState, useEffect, useCallback, useMemo } from "react";

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

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const blogPost = getBlogPostBySlug(slug);
  // Get related posts with multiple fallback strategies
  const relatedPosts = useMemo(() => {
    if (!blogPost) return [];

    // First try: official related posts
    const officialRelated = getRelatedBlogPosts(blogPost.id, 6);
    if (officialRelated.length > 0) return officialRelated;

    // Second try: same category posts
    const categoryPosts = getBlogPostsByCategory(blogPost.category).filter(post => post.id !== blogPost.id);
    if (categoryPosts.length > 0) return categoryPosts.slice(0, 6);

    // Third try: any other posts
    return blogRegistry.filter(post => post.id !== blogPost.id).slice(0, 6);
  }, [blogPost]);
  const [activeSection, setActiveSection] = useState('');

  // Generate table of contents from content
  const tableOfContents = useMemo(() => {
    if (!blogPost) return [];

    const headings: Array<{id: string, title: string, level: number}> = [];
    const lines = blogPost.content.split('\n\n');

    lines.forEach((line, index) => {
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
  }, [blogPost]);

  // Track active section for table of contents
  const handleScroll = useCallback(() => {
    const headingElements = tableOfContents.map(heading =>
      document.getElementById(heading.id)
    ).filter(Boolean);

    for (let i = headingElements.length - 1; i >= 0; i--) {
      const element = headingElements[i];
      if (element && element.getBoundingClientRect().top <= 100) {
        setActiveSection(tableOfContents[i].id);
        break;
      }
    }
  }, [tableOfContents]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!blogPost) {
    return (
      <PageLayout>
        <div className="py-24 md:py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Scroll Progress Bar */}
      <ScrollProgress className="fixed top-0 z-50" />

      <div className="min-h-screen bg-background">
        {/* Header Section - Above Everything */}
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{blogPost.category}</span>
          </nav>

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
                    <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
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

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {blogPost.content.split('\n\n').map((paragraph, index) => {

                  // Main headings with IDs for navigation
                  if (paragraph.startsWith('## ')) {
                    const headingText = paragraph.replace('## ', '');
                    const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    return (
                      <h2 key={index} id={id} className="text-3xl font-bold mt-16 mb-6 text-foreground scroll-mt-24">
                        {headingText}
                      </h2>
                    );
                  }

                  // Sub headings with IDs
                  if (paragraph.startsWith('### ')) {
                    const headingText = paragraph.replace('### ', '');
                    const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    return (
                      <h3 key={index} id={id} className="text-2xl font-semibold mt-12 mb-4 text-foreground scroll-mt-24">
                        {headingText}
                      </h3>
                    );
                  }

                  if (paragraph.trim()) {
                    // Enhanced markdown parsing with links, percentages, and dollar amounts
                    const renderText = (text: string) => {
                      const parts: (string | React.JSX.Element)[] = [];
                      let currentIndex = 0;

                      // Combined regex for bold text, links, highlights, underlines, percentages, and dollar amounts
                      const combinedRegex = /(\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\)|==(.*?)==|__(.*?)__|\$[\d,]+(?:\.\d{2})?(?:-\$[\d,]+(?:\.\d{2})?)?|\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?%)/g;
                      let match;

                      while ((match = combinedRegex.exec(text)) !== null) {
                        if (match.index > currentIndex) {
                          parts.push(text.slice(currentIndex, match.index));
                        }

                        if (match[0].startsWith('**')) {
                          // Bold text - extract text between **
                          const boldText = match[0].slice(2, -2);
                          parts.push(<strong key={match.index} className="font-semibold">{boldText}</strong>);
                        } else if (match[0].startsWith('[')) {
                          // Link - extract from full match
                          const linkMatch = match[0].match(/\[([^\]]+)\]\(([^)]+)\)/);
                          if (linkMatch) {
                            parts.push(
                              <Link
                                key={match.index}
                                href={linkMatch[2]}
                                className="text-primary hover:text-primary/80 underline underline-offset-2"
                              >
                                {linkMatch[1]}
                              </Link>
                            );
                          }
                        } else if (match[0].startsWith('==') && match[0].endsWith('==')) {
                          // Highlighted text - blue highlight
                          const highlightedText = match[0].slice(2, -2);
                          parts.push(
                            <Highlighter
                              key={match.index}
                              action="highlight"
                              color="#3b82f6"
                              isView={true}
                              animationDuration={800}
                            >
                              {highlightedText}
                            </Highlighter>
                          );
                        } else if (match[0].startsWith('__') && match[0].endsWith('__')) {
                          // Underlined text - purple underline
                          const underlinedText = match[0].slice(2, -2);
                          parts.push(
                            <Highlighter
                              key={match.index}
                              action="underline"
                              color="#a855f7"
                              isView={true}
                              animationDuration={600}
                              strokeWidth={2}
                            >
                              {underlinedText}
                            </Highlighter>
                          );
                        } else if (match[0].startsWith('$')) {
                          // Dollar amounts - emerald for single, purple for ranges
                          const isDollarRange = match[0].includes('-');
                          parts.push(
                            <span
                              key={match.index}
                              className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium mx-1 ${
                                isDollarRange
                                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300'
                              }`}
                            >
                              {match[0]}
                            </span>
                          );
                        } else if (match[0].includes('%')) {
                          // Percentages - green for single, purple for ranges
                          const isPercentRange = match[0].includes('-');
                          parts.push(
                            <span
                              key={match.index}
                              className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium mx-1 ${
                                isPercentRange
                                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                                  : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                              }`}
                            >
                              {match[0]}
                            </span>
                          );
                        }

                        currentIndex = match.index + match[0].length;
                      }

                      if (currentIndex < text.length) {
                        parts.push(text.slice(currentIndex));
                      }

                      return parts.length > 0 ? parts : text;
                    };

                    // Pull quotes (text starting with >)
                    if (paragraph.startsWith('> ')) {
                      return (
                        <blockquote key={index} className="bg-muted/50 border-l-4 border-primary/30 p-6 my-8 rounded-r-lg">
                          <p className="text-lg italic text-foreground/80 leading-relaxed">
                            {renderText(paragraph.replace('> ', ''))}
                          </p>
                        </blockquote>
                      );
                    }

                    // Tables (simple pipe-separated format)
                    if (paragraph.includes('|') && paragraph.split('\n').length > 1) {
                      const rows = paragraph.split('\n').filter(row => row.includes('|'));
                      const headerRow = rows[0];
                      const dataRows = rows.slice(2); // Skip header and separator

                      if (headerRow && dataRows.length > 0) {
                        const headers = headerRow.split('|').map(h => h.trim()).filter(h => h);

                        return (
                          <div key={index} className="my-8 overflow-x-auto">
                            <table className="w-full border-collapse border border-border rounded-lg">
                              <thead>
                                <tr className="bg-muted/50">
                                  {headers.map((header, headerIndex) => (
                                    <th key={headerIndex} className="border border-border px-4 py-3 text-left text-sm font-semibold">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {dataRows.map((row, rowIndex) => {
                                  const cells = row.split('|').map(c => c.trim()).filter(c => c);
                                  return (
                                    <tr key={rowIndex} className="hover:bg-muted/30">
                                      {cells.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border border-border px-4 py-3 text-sm">
                                          {renderText(cell)}
                                        </td>
                                      ))}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                    }

                    // Pro Tip callouts with lightbulb
                    if (paragraph.includes('Pro Tip:') || paragraph.includes('**Pro Tip:**')) {
                      return (
                        <div key={index} className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                              <Lightbulb className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Pro Tip!</h4>
                              <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm">
                                {renderText(paragraph.replace('**Pro Tip:** ', '').replace('Pro Tip: ', ''))}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // Bullet points
                    if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
                      const items = paragraph.split('\n').filter(line => line.trim().startsWith('-') || line.trim().startsWith('•'));
                      return (
                        <ul key={index} className="space-y-2 my-6 ml-6">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-lg leading-relaxed text-foreground/90">
                              {renderText(item.replace(/^[-•]\s*/, ''))}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    // Regular paragraphs
                    return (
                      <p key={index} className="text-lg leading-relaxed mb-6 text-foreground/90">
                        {renderText(paragraph)}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

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
                    <Link href="/blog">
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
                          <Link href={`/blog/${post.slug}`} className="block">
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
                          <Link href={`/blog/${post.slug}`} className="block">
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
              <div className="sticky top-8 max-h-screen overflow-y-auto">
                <h3 className="font-semibold text-sm text-foreground mb-4">ON THIS PAGE</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((heading) => (
                    <Link
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block text-sm transition-colors ${
                        activeSection === heading.id
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      } ${heading.level === 3 ? 'ml-4' : ''}`}
                    >
                      {heading.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}