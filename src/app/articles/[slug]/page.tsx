import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { getArticleBySlug, getRelatedArticles, getArticlesByCategory } from "@/registry/articles";
import { ArticleContent } from "./article-content";

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
      {/* Hero Section - Clean minimal style like templates page */}
      <section className="py-16 border-b">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-4">
            {/* Metadata */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="outline">{blogPost.type}</Badge>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {blogPost.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            {blogPost.excerpt && (
              <p className="text-base text-muted-foreground">
                {blogPost.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <ArticleContent content={blogPost.content} />
      </div>

      {/* Related Articles - Simple list like templates page */}
      {relatedPosts.length > 0 && (
        <section className="border-t py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-xs font-semibold text-muted-foreground mb-6 tracking-wider uppercase">
              Related Articles
            </h2>
            <div className="space-y-0 divide-y divide-border">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/articles/${post.slug}`}
                  className="group block py-3 hover:text-primary transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}