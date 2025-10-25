import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckSquare, Calendar, Tag, Filter, ListChecks, Target } from 'lucide-react';

export default function TasksPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <CheckSquare className="h-4 w-4" />
                Tasks
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Turn reflection into action
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your guides will surface actions to take. Tasks helps you track what needs doing, when, and why it matters to your work. Not just another to-do list—tasks connected to your journey.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need to take action</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Guide-Connected Tasks</h3>
                <p className="text-muted-foreground">
                  Tasks automatically link to the guides they came from. See why each action matters in your bigger story.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Due Dates & Scheduling</h3>
                <p className="text-muted-foreground">
                  Set due dates and priority levels. Your tasks sync with Calendar so important actions don't slip through the cracks.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Filters</h3>
                <p className="text-muted-foreground">
                  Filter by guide, priority, due date, or status. Focus on what's urgent, what's for a specific project, or what's overdue.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Tags</h3>
                <p className="text-muted-foreground">
                  Tag tasks by type: research, calls to make, decisions to finalize, applications to submit. Organize however makes sense.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ListChecks className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Subtasks</h3>
                <p className="text-muted-foreground">
                  Break big actions into smaller steps. Check off progress as you go instead of facing one overwhelming task.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Completion Tracking</h3>
                <p className="text-muted-foreground">
                  See your completion rate and velocity in Analytics. Track momentum and celebrate progress as you check things off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Tasks</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Capture action items as you reflect</h3>
                  <p className="text-muted-foreground mb-4">
                    While working through guide readings, you'll realize things you need to do: research options, have conversations, make appointments, draft documents.
                  </p>
                  <p className="text-muted-foreground">
                    Create tasks directly from readings so insights immediately become actions—no switching between apps.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Track follow-through on decisions</h3>
                  <p className="text-muted-foreground mb-4">
                    After making a decision, create tasks for next steps. "Update resume," "Tell boss," "Research health insurance options."
                  </p>
                  <p className="text-muted-foreground">
                    Decisions without action items rarely happen. Tasks bridges the gap between clarity and change.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Organize your logistics</h3>
                  <p className="text-muted-foreground mb-4">
                    Your work involves practical tasks: scheduling appointments, filing paperwork, coordinating with others, organizing resources.
                  </p>
                  <p className="text-muted-foreground">
                    Keep all your tasks in one place alongside your reflection work. Nothing slips through.
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
            <h2 className="text-3xl font-bold mb-4">Start turning insights into actions</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Reflection matters, but so does doing. Track the actions that move your work forward.
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
