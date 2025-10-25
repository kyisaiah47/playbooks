import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart3, TrendingUp, Target, PieChart, Activity, Zap } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                See your progress objectively
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                During transitions, it's hard to know if you're making progress. Analytics shows completion rates, momentum trends, activity patterns, and behavioral insights—proof of movement when emotions make it hard to see.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything measured, visualized</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Completion Metrics</h3>
                <p className="text-muted-foreground">
                  Track completion rates across guides, readings, and tasks. See percentages, velocities, and progress toward goals.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Activity Heatmaps</h3>
                <p className="text-muted-foreground">
                  Calendar-style heatmaps show which days you were active. Spot patterns, gaps, and identify your most productive periods.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trend Charts</h3>
                <p className="text-muted-foreground">
                  Line charts showing progress over weeks and months. See if you're accelerating, plateauing, or slowing down.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Focus Distribution</h3>
                <p className="text-muted-foreground">
                  Pie charts showing time and energy across guides. See which transitions get attention and which are neglected.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Streak Tracking</h3>
                <p className="text-muted-foreground">
                  Track consecutive days of activity. Build and maintain streaks for consistent habit formation during transitions.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Date Ranges</h3>
                <p className="text-muted-foreground">
                  Filter analytics by 7 days, 30 days, 3 months, or custom ranges. Compare time periods to see shifts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Analytics</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Prove progress when it's invisible</h3>
                  <p className="text-muted-foreground mb-4">
                    You feel stuck, like nothing's changing. Check Analytics: you've completed 12 readings this month, checked off 20 tasks, wrote 8 journal entries. Progress is happening.
                  </p>
                  <p className="text-muted-foreground">
                    Data counters the emotional lie that you're not moving forward. Numbers don't lie.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Identify what's actually working</h3>
                  <p className="text-muted-foreground mb-4">
                    Analytics shows you complete tasks at 80% rate when due dates are set, but only 40% without them. Or you engage more on weekends. Data reveals patterns.
                  </p>
                  <p className="text-muted-foreground">
                    Adjust your approach based on what the numbers show works for you, not what "should" work.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Celebrate data-backed wins</h3>
                  <p className="text-muted-foreground mb-4">
                    Hit a 30-day streak. Completed 50% of your Career Transition guide. Maintained 5 active days per week for a month. Analytics shows achievements worth celebrating.
                  </p>
                  <p className="text-muted-foreground">
                    Milestones become real when you can quantify them. Numbers make progress feel legitimate.
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
            <h2 className="text-3xl font-bold mb-4">Start tracking your progress</h2>
            <p className="text-xl text-muted-foreground mb-8">
              See your transition work objectively. Measure momentum, identify patterns, celebrate wins.
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
