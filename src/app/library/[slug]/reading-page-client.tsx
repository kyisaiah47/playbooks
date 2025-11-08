"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout";
import { ReadingContent } from "@/app/library/[slug]/reading-content";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

async function getReading(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/readings/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

async function getGuide(guideId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/guides/${guideId}`, {
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

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function Card({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <Icon className="size-8" />
    </div>
  );
}

function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  icons,
}: {
  showCard: number;
  reverse?: boolean;
  className?: string;
  icons: React.ComponentType<{ className?: string }>[];
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {icons.map((Icon, idx) => (
          <Card key={idx} Icon={Icon} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
}

export default function ReadingPageClient({ params }: { params: Promise<{ slug: string }> }) {
  const [reading, setReading] = useState<any>(null);
  const [guide, setGuide] = useState<any>(null);
  const [relatedReadings, setRelatedReadings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { slug } = await params;
      const readingData = await getReading(slug);
      setReading(readingData);

      if (readingData?.guide) {
        const guideData = await getGuide(readingData.guide);
        setGuide(guideData);
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

  const guideName = guide?.title || 'Library';
  const guideId = reading?.guide;

  // Get the icon component from lucide
  const GuideIcon = guide?.icon ? (LucideIcons as any)[guide.icon] || LucideIcons.BookOpen : LucideIcons.BookOpen;

  // Create icon array with guide icon repeated
  const iconArray = [
    GuideIcon,
    LucideIcons.BookOpen,
    LucideIcons.FileText,
    LucideIcons.Newspaper,
    LucideIcons.Lightbulb,
    LucideIcons.GraduationCap,
    LucideIcons.BookMarked,
    LucideIcons.ScrollText
  ];

  return (
    <PageLayout>
      {/* Hero Section - Minimized */}
      <section className="relative py-20 pt-40">
        <div className="container flex flex-col items-center justify-center gap-3 overflow-hidden">
          {guideId && (
            <Link href={`/guides/${guideId}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {guideName}
            </Link>
          )}
          <h1 className="realtive z-15 max-w-3xl text-center text-4xl font-medium tracking-tighter md:text-5xl">
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

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-20 mt-6 flex items-center justify-center gap-3"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[iconArray[0], iconArray[2], iconArray[4], iconArray[6]]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[iconArray[1], iconArray[3], iconArray[5], iconArray[7]]}
            />
            <SkiperUiMarquee
              showCard={2}
              reverse={true}
              className=""
              icons={[iconArray[0], iconArray[1], iconArray[2], iconArray[3]]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[iconArray[4], iconArray[5], iconArray[6], iconArray[7]]}
            />
            <SkiperUiMarquee
              showCard={2}
              reverse={true}
              className=""
              icons={[iconArray[0], iconArray[2], iconArray[4], iconArray[1]]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[iconArray[3], iconArray[5], iconArray[6], iconArray[7]]}
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[iconArray[1], iconArray[3], iconArray[5], iconArray[0]]}
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Single Column Content */}
      <div className="pb-16">
        <div className="container max-w-4xl">
          {/* Metadata Section */}
          <div className="mb-12 pb-8 border-b space-y-6">
            {reading.excerpt && (
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wider">
                  Overview
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {reading.excerpt}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-8">
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
          </div>

          <ReadingContent content={reading.content} />

          {/* Related Readings Below Content */}
          {relatedReadings.length > 0 && (
            <nav className="mt-16 border-t pt-8">
              <p className="text-muted-foreground mb-6 text-sm font-semibold uppercase tracking-wider">
                Related Readings
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedReadings.map((post: any) => (
                  <Link
                    key={post.id}
                    href={`/library/${post.id}`}
                    className="hover:border-primary block rounded-lg border p-4 transition-colors"
                  >
                    <h3 className="font-medium">{post.title}</h3>
                    {post.excerpt && (
                      <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
