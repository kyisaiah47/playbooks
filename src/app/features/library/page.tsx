import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Search, Star, Filter, TrendingUp, Bookmark } from 'lucide-react';

export default function LibraryPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                Library
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your personal collection of wisdom
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Save articles, resources, and references from your guides. Build a curated library of everything meaningful you discover during your transition journey.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/demo">Try Demo</Link>
                </Button>
              </div>
            </div>

            {/* Feature Image Placeholder */}
            <div className="w-full aspect-video bg-muted rounded-lg border shadow-2xl" />
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need to organize resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bookmark className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save from Guides</h3>
                <p className="text-muted-foreground">
                  As you work through guide readings, save the most impactful articles and resources to your Library with one click.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                <p className="text-muted-foreground">
                  Filter by guide, category, tags, or reading type. Find exactly what you need when you need it.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Highlight & Annotate</h3>
                <p className="text-muted-foreground">
                  Mark favorite passages, add personal notes, and rate resources. Make saved content truly yours.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full-Text Search</h3>
                <p className="text-muted-foreground">
                  Search across all saved resources—titles, content, your notes. Instantly find that article you remember reading.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reading Analytics</h3>
                <p className="text-muted-foreground">
                  See what you've saved, what you've revisited, and which resources had the most impact over time.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collections</h3>
                <p className="text-muted-foreground">
                  Organize saved resources into custom collections. Group by theme, urgency, or whatever structure works for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Library</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Build your transition reading list</h3>
                  <p className="text-muted-foreground mb-4">
                    Not every guide reading hits at the right time. Save articles that feel too advanced or not yet relevant to revisit when you're ready.
                  </p>
                  <p className="text-muted-foreground">
                    Your Library becomes a curated reading list that grows with you—always accessible, never lost in browser bookmarks.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Revisit what resonated most</h3>
                  <p className="text-muted-foreground mb-4">
                    During transitions, certain articles hit different as your situation evolves. Your Library lets you easily revisit and re-read content with fresh perspective.
                  </p>
                  <p className="text-muted-foreground">
                    Add new notes on second readings to capture how your understanding has changed.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Share wisdom with others</h3>
                  <p className="text-muted-foreground mb-4">
                    When friends face similar transitions, you can easily find and share the articles that helped you most.
                  </p>
                  <p className="text-muted-foreground">
                    Your Library becomes a resource not just for you, but for others navigating similar journeys.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start building your wisdom library</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every resource saved is knowledge preserved. Create your personal library today.
            </p>
            <Button asChild size="lg">
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
