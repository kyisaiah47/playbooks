"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { blogRegistry, getAllBlogCategories } from "@/registry/blogs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User, BookOpen, Heart, Home, Briefcase, DollarSign, Calendar as CalendarIcon, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PageLayout } from "@/components/layout";

const categories = ["All", ...getAllBlogCategories()];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Wedding Planning": return <Heart className="h-5 w-5" />;
    case "Real Estate": return <Home className="h-5 w-5" />;
    case "Career": return <Briefcase className="h-5 w-5" />;
    case "Business": return <TrendingUp className="h-5 w-5" />;
    case "Event Planning": return <CalendarIcon className="h-5 w-5" />;
    case "Personal Finance": return <DollarSign className="h-5 w-5" />;
    default: return <BookOpen className="h-5 w-5" />;
  }
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogRegistry.filter(post =>
    selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="px-4 py-2"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Expert Insights
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Templata Blog
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Expert guidance, practical tips, and insights to help you navigate life&apos;s biggest moments with confidence.
            </p>
          </div>
        </div>
      </section>

        <div className="container mx-auto max-w-7xl px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>


          {/* All Posts - New Grid Layout */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredPosts.length} posts)
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-200 border-0 bg-muted/30">
                  <CardContent className="p-0">
                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          {getCategoryIcon(post.category)}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
                            {post.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
        <div className="py-12" />
    </PageLayout>
  );
}