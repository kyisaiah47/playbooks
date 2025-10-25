import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, ListChecks, FileText, Clock, TrendingUp, Edit } from 'lucide-react';

export default function DailyPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                Daily
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Structure your days with daily notes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Daily notes anchor your work in everyday life. Plan your day, track progress on guides, capture quick thoughts, and maintain consistency through simple daily practice.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything for daily consistency</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Edit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Capture</h3>
                <p className="text-muted-foreground">
                  Open today's Daily note instantly. Jot quick thoughts, track what you did, note what's coming. Fast, simple, dated.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ListChecks className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Daily Guides</h3>
                <p className="text-muted-foreground">
                  Use guides for daily planning: Morning intentions, evening reflections, task lists, or simple freeform notes.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Guide Progress Tracking</h3>
                <p className="text-muted-foreground">
                  See which guides you worked on each day. Daily notes automatically link to completed readings and tasks.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Historical Browse</h3>
                <p className="text-muted-foreground">
                  Navigate to any past date to see what you were doing, thinking, and working on. Scroll through your daily log.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Streak Tracking</h3>
                <p className="text-muted-foreground">
                  Build momentum with daily practice. Track streaks of consecutive days with activity or notes written.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
                <p className="text-muted-foreground">
                  Your daily notes show calendar events and scheduled tasks. See your full day in context with your work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Daily</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Maintain daily consistency</h3>
                  <p className="text-muted-foreground mb-4">
                    Life is messy and unpredictable. Daily notes provide a simple, repeatable practice: open today's note, write something, close it. Even 2 minutes counts.
                  </p>
                  <p className="text-muted-foreground">
                    Consistency through simplicity—Daily is the easiest habit to maintain when everything else feels hard.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Track micro-progress between milestones</h3>
                  <p className="text-muted-foreground mb-4">
                    Big projects have long gaps between major wins. Daily notes capture the small stuff: a good conversation, a helpful reading, a small realization.
                  </p>
                  <p className="text-muted-foreground">
                    Week to week, you see progress accumulating even when nothing dramatic happened.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Create a log of your days</h3>
                  <p className="text-muted-foreground mb-4">
                    Years later, you can revisit any day and remember what you were working on, struggling with, or celebrating. Daily creates a dated record.
                  </p>
                  <p className="text-muted-foreground">
                    Future you will appreciate having a complete log of how you spent these months.
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
            <h2 className="text-3xl font-bold mb-4">Start your daily practice</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Consistency compounds. Begin tracking your days, one note at a time.
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
