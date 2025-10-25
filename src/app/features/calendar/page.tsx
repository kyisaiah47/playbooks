import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Clock, Bell, Repeat, ExternalLink, CheckSquare } from 'lucide-react';

export default function CalendarPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                Calendar
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Time your work intentionally
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule guide readings, track milestones, and plan reflection time. Your Calendar connects directly to your work, helping you maintain momentum through scheduled consistency.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need to plan your work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Guide-Connected Events</h3>
                <p className="text-muted-foreground">
                  Schedule time to work on specific guides. Calendar events automatically link to your guides and show relevant tasks.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Repeat className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recurring Events</h3>
                <p className="text-muted-foreground">
                  Set up recurring blocks for weekly reflections, daily journaling, or regular guide work. Build productive habits with rhythm.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
                <p className="text-muted-foreground">
                  Get reminded before scheduled guide work or reflection time. Never miss important moments.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calendar Sync</h3>
                <p className="text-muted-foreground">
                  Sync with Google Calendar, Apple Calendar, or other apps. Keep your work integrated with the rest of your life.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Blocking</h3>
                <p className="text-muted-foreground">
                  Block dedicated time for deep reflection, guide readings, or task completion. Protect your work from getting crowded out.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Views</h3>
                <p className="text-muted-foreground">
                  Switch between day, week, and month views. See upcoming work at whatever granularity you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Calendar</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Schedule consistent guide work</h3>
                  <p className="text-muted-foreground mb-4">
                    Block 30 minutes every Tuesday and Thursday morning for guide readings. Or Sunday evenings for weekly reflection. Consistency comes from scheduled rhythm.
                  </p>
                  <p className="text-muted-foreground">
                    Recurring calendar events turn good intentions into habits that actually stick.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Track important milestones</h3>
                  <p className="text-muted-foreground mb-4">
                    Mark calendar events for significant dates: meetings, deadlines, appointments, decision points. Keep important moments visible.
                  </p>
                  <p className="text-muted-foreground">
                    Your Calendar becomes a timeline of your key moments, not just your task list.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Coordinate with your existing life</h3>
                  <p className="text-muted-foreground mb-4">
                    Sync Templata Calendar with your main calendar so your work appears alongside meetings, appointments, and commitments.
                  </p>
                  <p className="text-muted-foreground">
                    You're not living two separate lives—your work integrates with everything else.
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
            <h2 className="text-3xl font-bold mb-4">Start scheduling your work</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Progress requires time. Make space for your work with intentional planning.
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
