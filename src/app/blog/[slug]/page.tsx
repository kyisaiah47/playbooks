"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Heart, Share, Bookmark } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PageLayout } from "@/components/layout";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/registry/blogs";
import { use } from "react";
import React from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const blogPost = getBlogPostBySlug(slug);
  const relatedPosts = blogPost ? getRelatedBlogPosts(blogPost.id) : [];
  
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
      <article className="py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary">
                <Heart className="w-3 h-3 mr-1" />
                {blogPost.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </header>

          <Separator className="mb-12" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed space-y-6">
              {blogPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.trim()) {
                  // Parse markdown bold text
                  const renderMarkdown = (text: string) => {
                    const parts: (string | React.JSX.Element)[] = [];
                    let currentIndex = 0;
                    
                    // Find all bold text matches
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    let match;
                    
                    while ((match = boldRegex.exec(text)) !== null) {
                      // Add text before the match
                      if (match.index > currentIndex) {
                        parts.push(text.slice(currentIndex, match.index));
                      }
                      
                      // Add the bold text
                      parts.push(<strong key={match.index} className="font-semibold">{match[1]}</strong>);
                      
                      currentIndex = match.index + match[0].length;
                    }
                    
                    // Add remaining text
                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }
                    
                    return parts.length > 1 ? parts : text;
                  };

                  return (
                    <p key={index} className="text-base leading-7 mb-4">
                      {renderMarkdown(paragraph)}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Perfect Wedding?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get our comprehensive wedding planning template with budget trackers, 
                vendor checklists, and timeline guides to avoid these common mistakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/wedding-planning/app">
                    Get Wedding Template
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/templates">
                    Browse All Templates
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <section>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit text-xs mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
}