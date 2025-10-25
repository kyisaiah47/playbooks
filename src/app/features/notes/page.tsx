import { PageLayout } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Search, Tag, Link2, Clock, Sparkles } from 'lucide-react';

export default function NotesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <FileText className="h-4 w-4" />
                Notes
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your thoughts, organized and connected
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Capture ideas, reflections, and insights as you work. Notes in Templata aren't just text—they're connected to your guides, tasks, and timeline, creating a living knowledge base.
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need to capture and organize</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Powerful Search</h3>
                <p className="text-muted-foreground">
                  Find any note instantly with full-text search across all your content. Search by keywords, tags, or linked guides.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Organization</h3>
                <p className="text-muted-foreground">
                  Tag notes, link them to guides, and organize with folders. Your notes automatically connect to related content.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Connections</h3>
                <p className="text-muted-foreground">
                  Link notes to guides, tasks, calendar events, and journal entries. See how your ideas relate in the Graph view.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Version History</h3>
                <p className="text-muted-foreground">
                  Every note saves automatically with full version history. Never lose a thought or earlier draft.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rich Formatting</h3>
                <p className="text-muted-foreground">
                  Use Markdown for formatting, add checklists, code blocks, and embed links. Make your notes as simple or detailed as needed.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Guides</h3>
                <p className="text-muted-foreground">
                  Start with guides for common note types: meeting notes, decision logs, reflections, or create your own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How people use Notes</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Capture insights as you work through guides</h3>
                  <p className="text-muted-foreground mb-4">
                    As you read readings and reflect on questions in your guides, capture key insights in notes. Link notes directly to specific readings so you can revisit them later.
                  </p>
                  <p className="text-muted-foreground">
                    Your notes become a personalized knowledge base built from your work—not generic content, but insights specific to your situation.
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg border" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-muted rounded-lg border md:order-1" />
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Track decisions and their reasoning</h3>
                  <p className="text-muted-foreground mb-4">
                    You make countless decisions in your work. Create decision logs in Notes to track what you decided, why, and what information influenced you.
                  </p>
                  <p className="text-muted-foreground">
                    Months later, when questioning a choice, you can revisit your reasoning instead of second-guessing yourself.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Build a personal resource library</h3>
                  <p className="text-muted-foreground mb-4">
                    Create notes for resources you discover: books that resonated, readings worth revisiting, frameworks that clicked, people to follow up with.
                  </p>
                  <p className="text-muted-foreground">
                    Tag and organize these resource notes so they're easy to find when you need them again.
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
            <h2 className="text-3xl font-bold mb-4">Start capturing your insights</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every thought captured is a step toward clarity. Begin building your knowledge base today.
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
