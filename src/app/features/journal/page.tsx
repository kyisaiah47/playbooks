import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Lock, Heart, Filter, Search, Tag } from 'lucide-react';

export default function JournalPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                Journal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Process emotions and reflect privately
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Journal is your private space to process emotions, explore what you're experiencing, and make sense of internal shifts. Write freely without judgment.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything for emotional processing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Completely Private</h3>
                <p className="text-muted-foreground">
                  Journal entries are entirely private—never shared, never used for any purpose. This is your space to be completely honest.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Questions & Guides</h3>
                <p className="text-muted-foreground">
                  Start with guided questions when you don't know what to write. Guides for grief, decision-making, gratitude, or free writing.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tag Emotions & Themes</h3>
                <p className="text-muted-foreground">
                  Tag entries by emotion, theme, or topic. Later, filter to see all entries about specific feelings or situations.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Filter & Browse</h3>
                <p className="text-muted-foreground">
                  Filter journal entries by date, guide, emotion tags, or keywords. Find specific entries or browse chronologically.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full-Text Search</h3>
                <p className="text-muted-foreground">
                  Search across all journal entries to find when you wrote about specific topics, people, or situations.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Link to Guides</h3>
                <p className="text-muted-foreground">
                  Connect journal entries to specific guides or readings. Process emotions that surface during your work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Journal</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Process difficult emotions safely</h3>
                  <p className="text-muted-foreground mb-4">
                    Life brings up grief, anger, fear, regret. Journal gives you permission to feel these without judgment. Write freely, be messy, express what's hard.
                  </p>
                  <p className="text-muted-foreground">
                    Getting emotions onto the page often reduces their intensity and creates distance for perspective.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Track emotional patterns over time</h3>
                  <p className="text-muted-foreground mb-4">
                    Tag entries by emotion. Weeks later, filter by "anxiety" or "excitement" to see how often those feelings appear and what triggers them.
                  </p>
                  <p className="text-muted-foreground">
                    Patterns reveal themselves: you feel anxious every Sunday, or excited after certain activities. Data you can act on.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">See how far you've come emotionally</h3>
                  <p className="text-muted-foreground mb-4">
                    Read journal entries from 3 months ago. Notice how your emotional landscape has shifted. What used to feel overwhelming might now feel manageable.
                  </p>
                  <p className="text-muted-foreground">
                    Your journal becomes evidence of emotional growth that's hard to see day-to-day.
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
            <h2 className="text-3xl font-bold mb-4">Start processing your emotions</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your feelings matter. Give them space to be heard, understood, and processed.
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
