"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout";
import { ReadingContent } from "@/app/library/[slug]/reading-content";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { useState, useEffect } from "react";

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

export default function ReadingPage({ params }: { params: Promise<{ slug: string }> }) {
  const [reading, setReading] = useState<any>(null);
  const [relatedReadings, setRelatedReadings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { slug } = await params;
      const readingData = await getReading(slug);
      setReading(readingData);

      if (readingData?.guide) {
        const related = await getRelatedReadings(readingData.guide, readingData.id);
        setRelatedReadings(related);
      }
      setLoading(false);
    }
    fetchData();
  }, [params]);

  if (loading) {
    return (
      <PageLayout>
        <div className="py-24 md:py-32 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </PageLayout>
    );
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
      {/* Hero Section */}
      <section className="relative pt-56 pb-32">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <p className="text-muted-foreground">
            {guideName}
          </p>
          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {reading.title.split(" ").map((word: string, i: number) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />
          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      <div className="pb-16">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 lg:sticky lg:top-8">
                {/* Reading Info */}
                {reading.excerpt && (
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {reading.excerpt}
                    </p>
                  </div>
                )}

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
                          href={`/library/${post.id}`}
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
