import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Heart, Home, Briefcase, Target } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { PageLayout } from "@/components/layout";
import { getArticleBySlug, getRelatedArticles, getArticlesByCategory } from "@/registry/articles";
import React from "react";
import { ArticleContent } from "./article-content";

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

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-6">
            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </span>
              <span>·</span>
              <Badge variant="outline">{blogPost.type}</Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {blogPost.excerpt}
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-background">

        {/* Content */}
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <main>
              <ArticleContent content={blogPost.content} />

              {/* Related articles with Marquee */}
              {relatedPosts.length > 0 && (
                <section className="mt-16">
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
        </div>
      </div>
    </PageLayout>
  );
}