import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Network, Link2, Eye, Filter, Sparkles, Map } from 'lucide-react';

export default function GraphPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Network className="h-4 w-4" />
                Graph
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Visualize how everything connects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your work isn't linear—it's interconnected. Graph shows how guides, readings, tasks, journal entries, and notes relate to each other, revealing patterns and insights hidden in the connections.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything visualized, connected</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Network View</h3>
                <p className="text-muted-foreground">
                  See all your work as an interactive network. Nodes represent guides, readings, tasks, notes. Lines show connections.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automatic Connections</h3>
                <p className="text-muted-foreground">
                  Connections form automatically: tasks link to guides, notes reference readings, journal entries connect to calendar events.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                <p className="text-muted-foreground">
                  Filter the graph by guide, date range, or content type. Focus on specific areas or zoom out to see everything.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clickable Exploration</h3>
                <p className="text-muted-foreground">
                  Click any node to view its content and connections. Navigate your work visually instead of through lists.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pattern Discovery</h3>
                <p className="text-muted-foreground">
                  See clusters of related work, isolated efforts, and surprising connections between seemingly unrelated areas.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Layouts</h3>
                <p className="text-muted-foreground">
                  Switch between force-directed, hierarchical, or circular layouts. Different views reveal different insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Graph</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Discover hidden connections</h3>
                  <p className="text-muted-foreground mb-4">
                    You wrote a journal entry about career questions. Graph shows it connects to three different guides, two tasks you created, and a note about values. Suddenly you see the pattern.
                  </p>
                  <p className="text-muted-foreground">
                    Graph reveals how separate-seeming work actually relates—insights you'd miss in linear views.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Understand your knowledge landscape</h3>
                  <p className="text-muted-foreground mb-4">
                    Zoom out on the full graph. See which guides are densely connected (lots of activity) versus isolated (barely touched). Understand your focus distribution visually.
                  </p>
                  <p className="text-muted-foreground">
                    The graph structure itself tells a story about where your energy goes.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Navigate your work spatially</h3>
                  <p className="text-muted-foreground mb-4">
                    Some people think spatially, not linearly. Graph lets you explore by following connections instead of scrolling lists.
                  </p>
                  <p className="text-muted-foreground">
                    Click from a guide to a reading to a note to a task—navigating by relationship feels more natural than searching.
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
            <h2 className="text-3xl font-bold mb-4">Start seeing your connections</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your work is richer than you realize. Visualize the network and discover new insights.
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
