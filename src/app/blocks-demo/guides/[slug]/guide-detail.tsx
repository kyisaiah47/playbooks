'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/guides';
import { PageLayout } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  FileText,
  ChevronRight,
  BookOpen,
  Calendar,
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

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              {templateData.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {templateData.name}
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {templateData.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
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

            <div className="pt-8">
              <Button asChild size="lg">
                <Link href={`/app?guide=${slug}`}>
                  Start Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">What's Included</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold">Comprehensive Questions</h3>
              <p className="text-sm text-muted-foreground">
                {questions.length} AI-refined questions covering 90%+ of what you need to consider, organized across {questionCategories.length} categories.
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-semibold">Expert Readings</h3>
              <p className="text-sm text-muted-foreground">
                {readings.length} curated articles saving you hundreds of hours of research, integrated directly into your workflow.
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold">Integrated Planning</h3>
              <p className="text-sm text-muted-foreground">
                Calendar events and tasks organized specifically for this guide—not a generic task manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Preview */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Questions</h2>
            <p className="text-sm text-muted-foreground">
              {questions.length} questions across {questionCategories.length} categories
            </p>
          </div>

          <div className="space-y-2">
            {questionCategories.slice(0, 5).map(category => {
              const isExpanded = expandedCategories.has(category);
              const categoryQuestions = groupedQuestions[category];

              return (
                <div key={category} className="border rounded-lg">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      />
                      <h3 className="font-medium">{category}</h3>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {categoryQuestions.length}
                    </Badge>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-2">
                      {categoryQuestions.slice(0, 5).map((question) => (
                        <div
                          key={question.id}
                          className="pl-7 py-2 text-sm text-muted-foreground"
                        >
                          {question.question}
                        </div>
                      ))}
                      {categoryQuestions.length > 5 && (
                        <div className="pl-7 py-2 text-sm text-muted-foreground italic">
                          + {categoryQuestions.length - 5} more questions
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            {questionCategories.length > 5 && (
              <p className="text-sm text-muted-foreground text-center pt-4">
                + {questionCategories.length - 5} more categories
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Readings Preview */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Expert Readings</h2>
            <p className="text-sm text-muted-foreground">
              {readings.length} curated articles
            </p>
          </div>

          <div className="grid gap-4">
            {readings.slice(0, 6).map((reading) => (
              <div
                key={reading.id}
                className="p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-medium mb-1">{reading.title}</h3>
                {reading.excerpt && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {reading.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen className="h-3 w-3" />
                  <span>{reading.read_time}</span>
                </div>
              </div>
            ))}
          </div>
          {readings.length > 6 && (
            <p className="text-sm text-muted-foreground text-center pt-4">
              + {readings.length - 6} more readings
            </p>
          )}
        </div>
      </section>

      {/* Related Guides */}
      {relatedTemplates.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Related Guides</h2>
              <p className="text-sm text-muted-foreground">
                More {templateData.category} guides
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedTemplates.map((relatedTemplate) => (
                <Link
                  key={relatedTemplate.id}
                  href={`/blocks-demo/guides/${relatedTemplate.id}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <Badge variant="outline" className="text-xs mb-2 w-fit">
                        {relatedTemplate.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {relatedTemplate.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedTemplate.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Transform your {templateData.name.toLowerCase()} from overwhelming to exhilarating
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with comprehensive questions, expert guidance, and premium analytics.
          </p>
          <Button asChild size="lg">
            <Link href={`/app?guide=${slug}`}>
              Start Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
