'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/guides';
import { PageLayout } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Particles } from '@/components/magicui/particles';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { ErrorLogger } from '@/lib/error-logger';
import {
  ArrowRight,
  Heart,
  Briefcase,
  Activity,
  DollarSign,
  Home,
  Users,
  Rocket,
  Brain,
  TrendingUp,
  Wallet,
  Baby,
  Target,
  Pill,
  PiggyBank,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface GuideDetailProps {
  params: Promise<{ slug: string }>;
  initialTemplate?: TemplateRegistryEntry | null;
  initialQuestions?: Question[];
  initialReadings?: Reading[];
}

interface Question {
  id: string;
  question: string;
  category_name: string;
}

interface Reading {
  id: string;
  title: string;
  excerpt: string;
  read_time: string;
  slug: string;
  type: string;
}

export default function GuideDetail({ params, initialTemplate, initialQuestions, initialReadings }: GuideDetailProps) {
  const { slug } = use(params);

  const [guide, setGuide] = useState<TemplateRegistryEntry | null>(initialTemplate || null);
  const [relatedGuides, setRelatedGuides] = useState<TemplateRegistryEntry[]>([]);
  const [questions, setQuestions] = useState<Question[]>(initialQuestions || []);
  const [readings, setReadings] = useState<Reading[]>(initialReadings || []);
  const [loading, setLoading] = useState(!initialTemplate);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Skip fetching if we already have initial data
    if (initialTemplate && initialQuestions && initialReadings) {
      // Still fetch related templates
      async function fetchRelated() {
        try {
          const guidesRes = await fetch('/api/guides?all=true');
          const guidesData = await guidesRes.json();
          if (initialTemplate) {
            const related = guidesData.guides?.filter(
              (t: TemplateRegistryEntry) => t.category === initialTemplate.category && t.id !== slug
            ) || [];
            setRelatedGuides(related.slice(0, 3));
          }
        } catch (error) {
          ErrorLogger.logError(error, {
            component: 'GuideDetail',
            action: 'fetchRelated',
            metadata: { slug }
          });
        }
      }
      fetchRelated();
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);

        // Fetch all guides
        const guidesRes = await fetch('/api/guides?all=true');
        const guidesData = await guidesRes.json();
        const foundTemplate = guidesData.guides?.find((t: TemplateRegistryEntry) => t.id === slug);
        setGuide(foundTemplate || null);

        // Set related guides (same category, different id)
        if (foundTemplate) {
          const related = guidesData.guides?.filter(
            (t: TemplateRegistryEntry) => t.category === foundTemplate.category && t.id !== slug
          ) || [];
          setRelatedGuides(related.slice(0, 3));
        }

        // Fetch questions
        const questionsRes = await fetch(`/api/guides/${slug}/questions`);
        const questionsData = await questionsRes.json();
        setQuestions(questionsData.questions || []);

        // Fetch readings for this guide
        const readingsRes = await fetch(`/api/guides/${slug}/readings`);
        const readingsData = await readingsRes.json();
        setReadings(readingsData.readings || []);
      } catch (error) {
        ErrorLogger.logError(error, {
          component: 'GuideDetail',
          action: 'fetchData',
          metadata: { slug }
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug, initialTemplate, initialQuestions, initialReadings]);

  // Group questions by category
  const groupedQuestions = questions.reduce((acc, question) => {
    const category = question.category_name || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(question);
    return acc;
  }, {} as Record<string, Question[]>);

  const questionCategories = Object.keys(groupedQuestions).sort();

  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <p className="text-muted-foreground">Loading guide...</p>
        </div>
      </PageLayout>
    );
  }

  // Check if guide exists and has content (both readings and questions)
  const hasContent = guide && questions.length > 0 && readings.length > 0;

  if (!guide || !hasContent) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-muted-foreground mb-8">
            {!guide
              ? "The guide you're looking for doesn't exist."
              : "This guide is currently in the works. Coming soon!"}
          </p>
          <Button asChild>
            <Link href="/guides">Browse Guides</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const guideData = guide;

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const IconComponent = guideData.icon && (LucideIcons as any)[guideData.icon];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-32 pt-40">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="outline" className="px-4 py-2">
            {guideData.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {guideData.name.split(" ").map((word, i) => (
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

          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            {guideData.description}
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[Heart, Home, Users, Baby]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Briefcase, Rocket, Target, TrendingUp]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Activity, Brain, Pill, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={IconComponent ? [IconComponent, IconComponent, IconComponent, IconComponent] : [DollarSign, PiggyBank, Wallet, Calendar]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Briefcase, Activity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Rocket, Brain, DollarSign, Users]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, Pill, PiggyBank, Baby]}
              dimmed
            />
          </motion.div>

          <div className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{questions.length}</div>
              <p className="text-sm text-muted-foreground">Questions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{readings.length}</div>
              <p className="text-sm text-muted-foreground">Readings</p>
            </div>
          </div>

          <Button asChild size="lg" className="relative z-20 mt-6">
            <Link href={`/app?guide=${slug}`}>
              Start Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Questions */}
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col gap-7">
            <h2 className="text-xl">/ QUESTIONS</h2>
            <div>
              {questions.map((question) => (
                <div key={question.id}>
                  <Separator />
                  <div className="my-2.5 grid gap-2.5 text-sm sm:grid-cols-3">
                    <div className="text-muted-foreground flex items-center gap-2">
                      {question.category_name}
                    </div>
                    <p className="font-medium col-span-3">{question.question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Readings */}
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col gap-7">
            <h2 className="text-xl">/ READINGS</h2>
            <div>
              {readings.map((reading) => (
                <div key={reading.id}>
                  <Separator />
                  <Link href={`/library/${reading.id}`}>
                    <div className="my-2.5 grid gap-2.5 text-sm sm:grid-cols-3 hover:text-primary transition-colors cursor-pointer">
                      <div className="text-muted-foreground flex items-center gap-2">
                        {reading.read_time}
                      </div>
                      <p className="font-medium">{reading.title}</p>
                      <p className="text-muted-foreground">
                        {reading.excerpt}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
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

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  icons: React.ComponentType<{ className?: string }>[];
  dimmed?: boolean;
  highlighted?: boolean;
}

function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  icons,
  dimmed = false,
  highlighted = false,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {icons.map((Icon, idx) => (
          <Card key={idx} Icon={Icon} dimmed={dimmed} highlighted={highlighted} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
}

function Card({ Icon, dimmed, highlighted }: { Icon: React.ComponentType<{ className?: string }>; dimmed?: boolean; highlighted?: boolean }) {
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        dimmed && "opacity-30",
      )}
    >
      <Icon className={cn("size-8", highlighted && "text-foreground")} />
    </div>
  );
}
