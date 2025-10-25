'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/guides';
import { PageLayout } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  FileText,
  ChevronRight,
  BookOpen,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/ui/announcement';

interface MarketingClientProps {
  params: Promise<{ slug: string }>;
}

interface Question {
  id: string;
  question: string;
  categoryName: string;
}

interface Reading {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  slug: string;
  type: string;
}

export default function MarketingClient({ params }: MarketingClientProps) {
  const { slug } = use(params);

  const [template, setTemplate] = useState<TemplateRegistryEntry | null>(null);
  const [relatedGuides, setRelatedTemplates] = useState<TemplateRegistryEntry[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch all templates
        const templatesRes = await fetch('/api/guides');
        const guidesData = await templatesRes.json();
        const foundGuide = guidesData.templates?.find((t:GuideRegistryEntry) => t.id === slug);
        setTemplate(foundGuide || null);

        // Set related templates (same category, different id)
        if (foundGuide) {
          const related = guidesData.templates?.filter(
            (t:GuideRegistryEntry) => t.category === foundGuide.category && t.id !== slug
          ) || [];
          setRelatedTemplates(related);
        }

        // Fetch questions
        const questionsRes = await fetch(`/api/questions?guideId=${slug}`);
        const questionsData = await questionsRes.json();
        setQuestions(questionsData.questions || []);

        // Fetch readings for this template (server-side filtering)
        const readingsRes = await fetch(`/api/readings?template=${slug}&pageSize=1000`);
        const readingsData = await readingsRes.json();
        setReadings(readingsData.readings || []);
      } catch (error) {
        console.error('Error fetching template data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  // Group questions by category
  const groupedQuestions = questions.reduce((acc, question) => {
    const category = question.categoryName || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(question);
    return acc;
  }, {} as Record<string, Question[]>);

  const questionCategories = Object.keys(groupedQuestions).sort();

  if (!template?.template) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Guide not found</h1>
        </div>
      </PageLayout>
    );
  }

  const guideData = template.template;

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  // Comprehensive JSON-LD structured data for SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: 'https://templata.org/guides'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guideData.category,
        item: `https://templata.org/guides?category=${encodeURIComponent(guideData.category)}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: guideData.title,
        item: `https://templata.org/guides/${slug}/marketing`
      }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use the ${guideData.title} Guide`,
    description: `Complete guide to using Templata's ${guideData.title} guide with AI-powered questions and readings`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Start with Guide Workspace',
        text: 'Begin with our split-screen guided experience. Answer questions on the left while reading contextual readings on the right. Learn the structure of effective planning.',
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: 'Browse through categorized questions specific to your situation'
          },
          {
            '@type': 'HowToDirection',
            text: 'Read expert readings that provide context and guidance'
          },
          {
            '@type': 'HowToDirection',
            text: 'Drag insights from readings directly into your question answers'
          }
        ]
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Process with Reflection Workspace',
        text: 'Use daily fullscreen reflection sessions to process your journey. Pause and think deeply about your progress and decisions.',
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: 'Review your progress in a distraction-free environment'
          },
          {
            '@type': 'HowToDirection',
            text: 'Reflect on key decisions and learnings'
          }
        ]
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Master with Life OS',
        text: 'Graduate to your unified Life OS that combines all your guide work. Like Notion, but built from your personal foundation.',
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: 'Access all your guides in one unified workspace'
          },
          {
            '@type': 'HowToDirection',
            text: 'Build your custom life operating system'
          }
        ]
      }
    ],
    totalTime: 'PT30M'
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${guideData.title} - Complete Planning Guide`,
    description: guideData.description,
    author: {
      '@type': 'Organization',
      name: 'Templata',
      url: 'https://templata.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Templata',
      logo: {
        '@type': 'ImageObject',
        url: 'https://templata.org/brand/templata-logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://templata.org/guides/${slug}/marketing`
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    articleSection: guideData.category,
    keywords: `${guideData.title.toLowerCase()}, ${guideData.title.toLowerCase()} guide, ${guideData.category.toLowerCase()}, life planning, ai planning tool, templata, life organization, planning questions, expert readings`,
    about: {
      '@type': 'Thing',
      name: guideData.title,
      description: guideData.description
    }
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${guideData.title} Guide`,
    description: `${guideData.description} Get ${questions.length} expert questions and ${readings.length} readings.`,
    url: `https://templata.org/guides/${slug}/marketing`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Templata',
      url: 'https://templata.org'
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Templata',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://templata.org/og-image.jpg'
    }
  };

  const promptsListSchema = questions.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${guideData.title} Questions`,
    description: `${questions.length} expert questions for ${guideData.title.toLowerCase()}`,
    numberOfItems: questions.length,
    itemListElement: questions.slice(0, 10).map((question, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: question.question.substring(0, 100),
      item: `https://templata.org/guides/${slug}/marketing#question-${question.id}`
    }))
  } : null;

  const articlesListSchema = readings.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${guideData.title} Readings`,
    description: `${readings.length} expert readings for ${guideData.title.toLowerCase()}`,
    numberOfItems: readings.length,
    itemListElement: readings.slice(0, 10).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: article.title,
      item: `https://templata.org/guides/${slug}/marketing#article-${article.id}`
    }))
  } : null;

  // Combine all schemas
  const allSchemas = [
    breadcrumbSchema,
    howToSchema,
    articleSchema,
    webPageSchema,
    promptsListSchema,
    articlesListSchema
  ].filter(Boolean);

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageLayout includeHeaderPadding={false}>
        {/* Hero Section with Full-Screen Background */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          {/* Geometric Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-background"
            style={{
              backgroundImage: 'url(/geometric-monuments.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Theme-aware color overlay */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply dark:mix-blend-screen dark:bg-primary/20" />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center space-y-8">
              <Announcement className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
                <AnnouncementTag>{guideData.category}</AnnouncementTag>
                <AnnouncementTitle>{questions.length} questions · {readings.length} readings</AnnouncementTitle>
              </Announcement>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                {guideData.title}
              </h1>

              <p className="mx-auto max-w-2xl text-xl text-white">
                {guideData.description}
              </p>
            </div>
          </div>
        </section>

        {/* What It Is - Split-Screen Workspace */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">
                Wikipedia meets Notion for life planning
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our split-screen interface combines guided questions, a structured workspace, and an encyclopedia of knowledge.
              </p>
            </div>

            {/* Split-Screen Visual */}
            <Card className="p-8 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Prompts Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Guided Questions</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-muted rounded text-sm">What's your venue budget?</div>
                    <div className="p-3 bg-muted rounded text-sm">Expected guest count?</div>
                    <div className="p-3 bg-primary/10 rounded text-primary border border-primary/20 text-sm">→ Who are must-have vendors?</div>
                  </div>
                </div>

                {/* Workspace Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Your Workspace</span>
                  </div>
                  <div className="p-4 bg-background rounded border min-h-[160px] text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>Photographer - top priority</p>
                      <p>Videographer - nice to have</p>
                      <p>Florist - DIY option possible</p>
                    </div>
                  </div>
                </div>

                {/* Articles Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Knowledge Base</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
                      <div className="font-medium mb-1">Vendor Cost Breakdown</div>
                      <div className="text-xs text-muted-foreground">Average costs by category...</div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
                      <div className="font-medium mb-1">Contract Checklist</div>
                      <div className="text-xs text-muted-foreground">What to look for...</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t mt-8 pt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>104,000+ categorized questions ensure you consider everything</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>26,000+ readings like Wikipedia for life decisions</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for every life moment</h2>
              <p className="text-lg text-muted-foreground">Comprehensive, structured, and completely free</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">1,298</div>
                <p className="text-muted-foreground">Guided Workspaces</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">104K+</div>
                <p className="text-muted-foreground">Questions</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">26k+</div>
                <p className="text-muted-foreground">Expert Readings</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">Free</div>
                <p className="text-muted-foreground">No Paywalls</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prompts Library */}
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-2">Questions</h2>
              <p className="text-sm text-muted-foreground">
                {questions.length} questions across {questionCategories.length} categories
              </p>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Loading questions...</p>
            ) : questions.length === 0 ? (
              <p className="text-muted-foreground">No questions available for this guide.</p>
            ) : (
              <div className="space-y-4">
                {questionCategories.map(category => {
                  const isExpanded = expandedCategories.has(category);
                  const categoryQuestions = groupedQuestions[category];

                  return (
                    <section key={category} className="border-t pt-4">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                          />
                          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                            {category}
                          </h3>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {categoryQuestions.length}
                        </Badge>
                      </button>

                      {isExpanded && (
                        <div className="mt-2 grid grid-cols-1 gap-y-1 pl-6">
                          {categoryQuestions.map((question) => (
                            <div
                              key={question.id}
                              className="group block py-2 hover:text-primary transition-colors"
                            >
                              <div className="text-sm">
                                {question.question}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <Separator />

        {/* Articles Library */}
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-2">Readings</h2>
              <p className="text-sm text-muted-foreground">
                {readings.length} readings
              </p>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Loading readings...</p>
            ) : readings.length === 0 ? (
              <p className="text-muted-foreground">No readings available for this guide.</p>
            ) : (
              <div className="border-t">
                {readings.map((reading) => (
                  <div
                    key={article.id}
                    className="group border-b py-3 hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Related Templates Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-2">Related Guides</h2>
              <p className="text-sm text-muted-foreground">
                Explore more {guideData.category} guides
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGuides
                .slice(0, 6)
                .map((relatedTemplate) => (
                  <Link
                    key={relatedTemplate.id}
                    href={`/guides/${relatedTemplate.id}/marketing`}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {relatedTemplate.category}
                          </Badge>
                        </div>
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

            {relatedGuides.length === 0 && (
              <p className="text-muted-foreground text-center">
                No related guides found. <Link href="/guides" className="text-primary hover:underline">Browse all guides</Link>
              </p>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto max-w-3xl px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to organize your {guideData.title.toLowerCase()}?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start with this template. Everything is free—no credit card required.
            </p>
          </div>
        </section>

      </PageLayout>
    </>
  );
}
