import Link from "next/link";
import { PageLayout } from "@/components/layout";
import { ReadingContent } from "@/app/library/[slug]/reading-content";

async function getReading(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/readings/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

async function getRelatedReadings(guide: string, currentId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/library?guide=${guide}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return (data.readings || []).filter((r: any) => r.id !== currentId).slice(0, 6);
}

export default async function ReadingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reading = await getReading(slug);

  let relatedReadings = [];
  if (reading?.guide) {
    relatedReadings = await getRelatedReadings(reading.guide, reading.id);
  }

  if (!reading) {
    return (
      <PageLayout>
        <div className="py-24 md:py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Reading Not Found</h1>
          <p className="text-muted-foreground">The reading you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </PageLayout>
    );
  }

  const guideName = reading.guide
    ? reading.guide.split('-').map((word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : 'Library';

  return (
    <PageLayout>
      <div className="py-16">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 lg:sticky lg:top-8">
                {/* Reading Info */}
                <div>
                  <p className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-widest">
                    {guideName}
                  </p>
                  <h1 className="mb-4 text-4xl font-bold">{reading.title}</h1>
                  {reading.excerpt && (
                    <p className="text-muted-foreground leading-relaxed">
                      {reading.excerpt}
                    </p>
                  )}
                </div>

                {/* Metadata */}
                <div className="space-y-6 border-t pt-8">
                  {reading.author && (
                    <div>
                      <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase tracking-wider">
                        Author
                      </p>
                      <p className="font-medium">{reading.author}</p>
                    </div>
                  )}
                  {reading.read_time && (
                    <div>
                      <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase tracking-wider">
                        Read Time
                      </p>
                      <p className="font-medium">{reading.read_time}</p>
                    </div>
                  )}
                  {reading.updated_at && (
                    <div>
                      <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase tracking-wider">
                        Last Updated
                      </p>
                      <p className="font-medium">
                        {new Date(reading.updated_at).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </div>

                {/* Related Readings Navigation */}
                {relatedReadings.length > 0 && (
                  <nav className="border-t pt-8">
                    <p className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
                      Related Readings
                    </p>
                    <div className="space-y-2">
                      {relatedReadings.map((post: any) => (
                        <Link
                          key={post.id}
                          href={`/blocks-demo/library/${post.id}`}
                          className="hover:text-primary block text-sm transition-colors"
                        >
                          {post.title}
                        </Link>
                      ))}
                    </div>
                  </nav>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <ReadingContent content={reading.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
