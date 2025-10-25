"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Heart, Home, Briefcase, Target, Lightbulb } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Highlighter } from "@/components/ui/highlighter";
import { PageLayout } from "@/components/layout";
import { getArticleBySlug, getRelatedArticles, getArticlesByCategory, articleRegistry } from "@/registry/readings";
import { TemplateImage } from "@/components/ui/template-image";
import { use } from "react";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph";
import { templateRegistry } from "@/registry/guides";

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

interface ReadingClientProps {
  params: Promise<{ slug: string }>;
}

export default function ReadingClient({ params }: ReadingClientProps) {
  const { slug } = use(params);
  const post = getArticleBySlug(slug);
  const [activeSection, setActiveSection] = useState('');

  // Knowledge graph integration
  const {
    getConnectedConcepts,
    getRelatedTemplates,
    getConceptByName,
    isLoading: kgLoading
  } = useKnowledgeGraph();

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('h2[id], h3[id]');
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      if (section.offsetTop <= scrollPosition) {
        setActiveSection(section.id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Get connected concepts and templates
  const connectedConcepts = useMemo(() => {
    if (!post || kgLoading) return [];

    const concepts = [];

    // Extract key concepts from title and content
    const titleConcepts = post.title.toLowerCase().split(' ').filter(word => word.length > 3);
    const categoryConcepts = [post.category.toLowerCase()];

    const allConcepts = [...titleConcepts, ...categoryConcepts];

    for (const conceptName of allConcepts) {
      const connected = getConnectedConcepts(conceptName);
      concepts.push(...connected);
    }

    return concepts.slice(0, 10); // Limit to 10 concepts
  }, [post, getConnectedConcepts, kgLoading]);

  const relatedGuides = useMemo(() => {
    if (!post || kgLoading) return [];

    const templates = [];

    // Get templates related to the article's category
    const categoryTemplates = getRelatedTemplates(post.category.toLowerCase());
    templates.push(...categoryTemplates);

    // Get templates from connected concepts
    for (const concept of connectedConcepts.slice(0, 3)) {
      const conceptTemplates = getRelatedTemplates(concept.name);
      templates.push(...conceptTemplates);
    }

    // Remove duplicates and limit
    const uniqueTemplates = Array.from(new Set(templates.map(t => t.id)))
      .map(id => templates.find(t => t.id === id))
      .filter(Boolean)
      .slice(0, 6);

    return uniqueTemplates;
  }, [post, connectedConcepts, getRelatedTemplates, kgLoading]);

  if (!post) {
    return (
      <PageLayout>
        <div className="container max-w-4xl mx-auto py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/readings">
                Browse All Articles
              </Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const relatedPosts = getRelatedArticles(slug, 3);
  const categoryPosts = getArticlesByCategory(post.category, 4);
  const CategoryIcon = getCategoryIcon(post.category);

  // Extract headings for table of contents
  const headings = post.content
    ? post.content.match(/^#{2,3}\s+(.+)$/gm) || []
    : [];

  const tableOfContents = headings.map((heading, index) => {
    const level = heading.match(/^#+/)?.[0].length || 2;
    const text = heading.replace(/^#+\s+/, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return {
      id,
      text,
      level,
    };
  });

  return (
    <PageLayout>
      <ScrollProgress />

      <article className="container max-w-4xl mx-auto py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/readings" className="hover:text-foreground transition-colors">
              Articles
            </Link>
            <span>/</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              <CategoryIcon className="w-3 h-3" />
              {post.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <Highlighter text={post.title} />
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author || 'Templata Editorial Team'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            {post.difficulty && (
              <Badge variant="outline">
                {post.difficulty}
              </Badge>
            )}
          </div>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Article Image */}
        {post.image && (
          <div className="mb-8">
            <TemplateImage
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          {tableOfContents.length > 0 && (
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm transition-colors py-1 ${
                        activeSection === item.id
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      } ${
                        item.level === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {item.text}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Article Content */}
          <div className="lg:col-span-3">
            {post.content && (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}

            {/* Connected Concepts */}
            {connectedConcepts.length > 0 && (
              <section className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Related Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {connectedConcepts.map((concept, index) => (
                    <Badge key={index} variant="secondary">
                      {concept.name}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Related Templates */}
            {relatedGuides.length > 0 && (
              <section className="mt-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Templates That Can Help
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedGuides.map((guide) => (
                    <div key={template.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-medium mb-2">
                        <Link
                          href={`/${template.id}/template`}
                          className="hover:text-primary transition-colors"
                        >
                          {template.name}
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {template.description}
                      </p>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/${template.id}/template`}>
                          Use Template
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="container max-w-6xl mx-auto py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/readings/${relatedPost.slug}`}
                className="group block"
              >
                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {relatedPost.image && (
                    <div className="aspect-video overflow-hidden">
                      <TemplateImage
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3" />
                        {relatedPost.category}
                      </Badge>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    {relatedPost.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Category Articles Marquee */}
      {categoryPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container max-w-6xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-center">
              More {post.category} Articles
            </h2>
          </div>
          <Marquee className="py-4" pauseOnHover>
            {categoryPosts.map((categoryPost) => (
              <Link
                key={categoryPost.slug}
                href={`/readings/${categoryPost.slug}`}
                className="mx-4"
              >
                <article className="w-80 border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow">
                  {categoryPost.image && (
                    <div className="aspect-video overflow-hidden">
                      <TemplateImage
                        src={categoryPost.image}
                        alt={categoryPost.title}
                        width={320}
                        height={180}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{categoryPost.readTime}</span>
                      {categoryPost.difficulty && (
                        <>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {categoryPost.difficulty}
                          </Badge>
                        </>
                      )}
                    </div>
                    <h3 className="font-medium hover:text-primary transition-colors line-clamp-2">
                      {categoryPost.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </Marquee>
        </section>
      )}
    </PageLayout>
  );
}