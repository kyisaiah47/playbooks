import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { getReadingBySlug, getRelatedArticles, getArticlesByCategory } from "@/registry/readings";
import { getGuideById } from "@/registry/guides";
import { ReadingContent } from "./reading-content";

// Metadata is handled in layout.tsx

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = await getReadingBySlug(slug);

  // Get guide name if reading has a guide
  const guideInfo = blogPost?.guide ? await getGuideById(blogPost.guide) : null;

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
          <p className="text-muted-foreground">The reading you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section - Clean minimal style like templates page */}
      <section className="py-16 border-b">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="space-y-4">
            {/* Metadata */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              {guideInfo && (
                <>
                  <Link href={`/guides/${blogPost.guide}`} className="hover:text-primary transition-colors">
                    {guideInfo.guide.title}
                  </Link>
                  <span>·</span>
                </>
              )}
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
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <ReadingContent content={blogPost.content} />
      </div>

      {/* Related Articles - Simple list like templates page */}
      {relatedPosts.length > 0 && (
        <section className="border-t py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-xs font-semibold text-muted-foreground mb-6 tracking-wider uppercase">
              Related Articles
            </h2>
            <div className="space-y-0 divide-y divide-border">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/readings/${post.slug}`}
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