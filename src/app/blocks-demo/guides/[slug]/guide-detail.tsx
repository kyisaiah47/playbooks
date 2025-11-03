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
import {
  ArrowRight,
} from 'lucide-react';

interface GuideDetailProps {
  params: Promise<{ slug: string }>;
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

export default function GuideDetail({ params }: GuideDetailProps) {
  const { slug } = use(params);

  const [template, setTemplate] = useState<TemplateRegistryEntry | null>(null);
  const [relatedTemplates, setRelatedTemplates] = useState<TemplateRegistryEntry[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch all guides
        const guidesRes = await fetch('/api/guides?all=true');
        const guidesData = await guidesRes.json();
        const foundTemplate = guidesData.guides?.find((t: TemplateRegistryEntry) => t.id === slug);
        setTemplate(foundTemplate || null);

        // Set related guides (same category, different id)
        if (foundTemplate) {
          const related = guidesData.guides?.filter(
            (t: TemplateRegistryEntry) => t.category === foundTemplate.category && t.id !== slug
          ) || [];
          setRelatedTemplates(related.slice(0, 3));
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
        console.error('Error fetching guide data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

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

  if (!template) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-muted-foreground mb-8">The guide you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blocks-demo/guides">Browse Guides</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const templateData = template;

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const IconComponent = templateData.icon && (LucideIcons as any)[templateData.icon];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="outline" className="px-4 py-2">
            {templateData.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {templateData.name.split(" ").map((word, i) => (
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
            {templateData.description}
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          {IconComponent && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="relative z-20 mt-10"
            >
              <div
                className={cn(
                  "border-muted relative flex size-32 items-center justify-center overflow-hidden rounded-3xl border p-4",
                  "from-muted/50 to-background bg-gradient-to-b",
                  "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                )}
              >
                <IconComponent className="size-16" />
              </div>
            </motion.div>
          )}

          <div className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{questions.length}</div>
              <p className="text-sm text-muted-foreground">Questions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{readings.length}</div>
              <p className="text-sm text-muted-foreground">Readings</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{questionCategories.length}</div>
              <p className="text-sm text-muted-foreground">Categories</p>
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
              {questionCategories.map((category) => {
                const categoryQuestions = groupedQuestions[category];
                return (
                  <div key={category}>
                    <Separator />
                    <div className="my-2.5 grid gap-2.5 text-sm sm:grid-cols-3">
                      <div className="text-muted-foreground flex items-center gap-2">
                        {category}
                      </div>
                      <p className="font-medium">{categoryQuestions.length} questions</p>
                      <div className="text-muted-foreground">
                        {categoryQuestions.slice(0, 3).map((q, idx) => (
                          <div key={q.id}>
                            {idx > 0 && ', '}
                            {q.question}
                          </div>
                        ))}
                        {categoryQuestions.length > 3 && ` +${categoryQuestions.length - 3} more`}
                      </div>
                    </div>
                  </div>
                );
              })}
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
              {readings.map((reading, idx) => (
                <div key={reading.id}>
                  <Separator />
                  <div className="my-2.5 grid gap-2.5 text-sm sm:grid-cols-3">
                    <div className="text-muted-foreground flex items-center gap-2">
                      {reading.read_time}
                    </div>
                    <p className="font-medium">{reading.title}</p>
                    <p className="text-muted-foreground">
                      {reading.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
