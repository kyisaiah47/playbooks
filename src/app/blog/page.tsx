"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User, BookOpen, Heart, Home, Briefcase, DollarSign, Calendar as CalendarIcon, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PageLayout } from "@/components/layout";

// Mock blog data - in a real app this would come from a CMS or database
const blogPosts = [
  {
    id: "wedding-planning-timeline",
    title: "The Complete Wedding Planning Timeline: 12 Months to Your Perfect Day",
    excerpt: "Navigate your wedding planning journey with confidence using our comprehensive month-by-month guide that ensures nothing gets overlooked.",
    category: "Wedding Planning",
    author: "Sarah Johnson",
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "home-buying-checklist",
    title: "First-Time Home Buyer's Essential Checklist",
    excerpt: "From pre-approval to closing day, discover the critical steps and documents you need for a smooth home buying experience.",
    category: "Real Estate",
    author: "Michael Chen",
    publishedAt: "2024-03-10",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "career-change-guide",
    title: "Making a Career Change at 30: A Strategic Approach",
    excerpt: "Learn how to pivot your career successfully with practical steps for networking, skill building, and financial planning.",
    category: "Career",
    author: "Emily Rodriguez",
    publishedAt: "2024-03-05",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "small-business-launch",
    title: "From Idea to Launch: Your Small Business Startup Roadmap",
    excerpt: "Transform your business idea into reality with our step-by-step guide covering planning, legal setup, and marketing strategies.",
    category: "Business",
    author: "David Park",
    publishedAt: "2024-02-28",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: "event-planning-tips",
    title: "10 Event Planning Mistakes That Could Ruin Your Special Day",
    excerpt: "Avoid common pitfalls with expert insights on budget management, vendor selection, and timeline planning for memorable events.",
    category: "Event Planning",
    author: "Lisa Thompson",
    publishedAt: "2024-02-20",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "financial-planning-basics",
    title: "Building Your Emergency Fund: A Beginner's Guide",
    excerpt: "Establish financial security with practical strategies for saving, budgeting, and growing your emergency fund over time.",
    category: "Personal Finance",
    author: "Robert Kim",
    publishedAt: "2024-02-15",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Wedding Planning", "Real Estate", "Career", "Business", "Event Planning", "Personal Finance"];

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
              Expert guidance, practical tips, and insights to help you navigate life's biggest moments with confidence.
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
                variant={category === "All" ? "default" : "outline"} 
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="group hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs h-4 px-1.5">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 text-xs" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-xl font-semibold mb-4">All Articles</h2>
            <div className="flex flex-col">
              <Separator />
              {blogPosts.map((post, index) => (
                <div key={post.id}>
                  <div className="grid items-center gap-4 px-4 py-4 md:grid-cols-6">
                    <div className="order-2 flex items-center gap-2 md:order-none md:col-span-2">
                      <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-md bg-muted">
                        {getCategoryIcon(post.category)}
                      </span>
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs h-4 px-1.5">
                            {post.category}
                          </Badge>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="order-1 text-base md:order-none md:col-span-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        className="order-3 ml-auto w-fit gap-2 md:order-none"
                        href={`/blog/${post.id}`}
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12">
            <Card className="max-w-xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest templates, tips, and insights delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2 text-sm border rounded-md"
                  />
                  <Button size="sm">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </PageLayout>
  );
}