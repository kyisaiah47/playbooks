import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, MapPin, TrendingUp, Filter, Calendar, Eye } from 'lucide-react';

export default function TimelinePage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Clock className="h-4 w-4" />
                Timeline
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                See your journey unfold
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your Timeline visualizes every reading completed, task checked off, journal entry written, and milestone reached. Watch your transition progress become visible—chronologically, honestly, completely.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything tracked, visualized chronologically</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Activity View</h3>
                <p className="text-muted-foreground">
                  Every action you take appears on your Timeline: readings completed, tasks checked off, journal entries, calendar events, notes created.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Milestone Markers</h3>
                <p className="text-muted-foreground">
                  Mark significant moments: guide completions, major decisions, important conversations. See your big wins stand out.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                <p className="text-muted-foreground">
                  Filter by guide, activity type, date range, or milestone type. See your full journey or focus on specific aspects.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
                <p className="text-muted-foreground">
                  See when you're most active, which guides get consistent attention, and how momentum shifts over time.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Time Views</h3>
                <p className="text-muted-foreground">
                  Switch between daily, weekly, monthly, or all-time views. Zoom in on recent days or out to see months of progress.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reflection Anchors</h3>
                <p className="text-muted-foreground">
                  Click any Timeline entry to see what you wrote, thought, or did in that moment. Revisit your past self's perspective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Timeline</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Prove to yourself you're making progress</h3>
                  <p className="text-muted-foreground mb-4">
                    When transitions feel stuck, your Timeline shows objective evidence of movement. Look back a month—see how many readings you completed, tasks you checked off, reflections you wrote.
                  </p>
                  <p className="text-muted-foreground">
                    Progress often feels invisible until you visualize it chronologically.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Understand your transition patterns</h3>
                  <p className="text-muted-foreground mb-4">
                    Notice when you're most active. See which weeks had intense work and which were quiet. Identify what events triggered bursts of activity or periods of pause.
                  </p>
                  <p className="text-muted-foreground">
                    Your Timeline reveals patterns you wouldn't consciously notice—insights about how you navigate change.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Revisit your journey during reflection</h3>
                  <p className="text-muted-foreground mb-4">
                    During monthly or annual reviews, scroll through your Timeline to see the full arc of your transition. Where did it start? What milestones happened? How did momentum shift?
                  </p>
                  <p className="text-muted-foreground">
                    Your Timeline tells the complete story of how you moved through this chapter.
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
            <h2 className="text-3xl font-bold mb-4">Start building your transition timeline</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every action you take becomes part of your story. Watch your journey unfold.
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
