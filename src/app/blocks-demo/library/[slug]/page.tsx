import Link from "next/link";
import { PageLayout } from "@/components/layout";
import { ReadingContent } from "@/app/library/[slug]/reading-content";
import type { Metadata } from "next";

async function getReading(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/readings/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const reading = await getReading(slug);

  if (!reading) {
    return {
      title: "Reading Not Found - Templata",
      description: "The reading you're looking for doesn't exist.",
    };
  }

  const guideName = reading.guide
    ? reading.guide.split('-').map((word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : 'Library';

  const description = reading.excerpt ||
    `Expert curated content on ${reading.title}. Save hundreds of hours of research with comprehensive guidance for life's biggest decisions.`;

  return {
    title: `${reading.title} - Templata`,
    description,
    keywords: [
      reading.title.toLowerCase(),
      guideName.toLowerCase(),
      "expert guidance",
      "life planning",
      "curated content",
      "templata reading",
    ],
    authors: reading.author ? [{ name: reading.author }] : undefined,
    openGraph: {
      title: `${reading.title} - Templata`,
      description,
      url: `https://templata.org/library/${slug}`,
      siteName: "Templata",
      locale: "en_US",
      type: "article",
      publishedTime: reading.created_at,
      modifiedTime: reading.updated_at,
      authors: reading.author ? [reading.author] : undefined,
      images: [
        {
          url: "https://templata.org/og-image.png",
          width: 1200,
          height: 630,
          alt: reading.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${reading.title} - Templata`,
      description,
      images: ["https://templata.org/og-image.png"],
    },
  };
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
      <div className="pt-52 pb-16">
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
              <ReadingContent content={reading.content} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
