'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/templates';
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

interface Prompt {
  id: string;
  prompt: string;
  categoryName: string;
}

interface Article {
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
  const [relatedTemplates, setRelatedTemplates] = useState<TemplateRegistryEntry[]>([]);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch all templates
        const templatesRes = await fetch('/api/templates');
        const templatesData = await templatesRes.json();
        const foundTemplate = templatesData.templates?.find((t: TemplateRegistryEntry) => t.id === slug);
        setTemplate(foundTemplate || null);

        // Set related templates (same category, different id)
        if (foundTemplate) {
          const related = templatesData.templates?.filter(
            (t: TemplateRegistryEntry) => t.category === foundTemplate.category && t.id !== slug
          ) || [];
          setRelatedTemplates(related);
        }

        // Fetch prompts
        const promptsRes = await fetch(`/api/prompts?templateId=${slug}`);
        const promptsData = await promptsRes.json();
        setPrompts(promptsData.prompts || []);

        // Fetch articles for this template (server-side filtering)
        const articlesRes = await fetch(`/api/articles?template=${slug}&pageSize=1000`);
        const articlesData = await articlesRes.json();
        setArticles(articlesData.articles || []);
      } catch (error) {
        console.error('Error fetching template data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  // Group prompts by category
  const groupedPrompts = prompts.reduce((acc, prompt) => {
    const category = prompt.categoryName || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  const promptCategories = Object.keys(groupedPrompts).sort();

  if (!template?.template) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Template not found</h1>
        </div>
      </PageLayout>
    );
  }

  const templateData = template.template;

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
        name: 'Templates',
        item: 'https://templata.org/templates'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: templateData.category,
        item: `https://templata.org/templates?category=${encodeURIComponent(templateData.category)}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: templateData.title,
        item: `https://templata.org/templates/${slug}/marketing`
      }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use the ${templateData.title} Template`,
    description: `Complete guide to using Templata's ${templateData.title} template with AI-powered prompts and articles`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Start with Template Workspace',
        text: 'Begin with our split-screen guided experience. Answer prompts on the left while reading contextual articles on the right. Learn the structure of effective planning.',
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: 'Browse through categorized prompts specific to your situation'
          },
          {
            '@type': 'HowToDirection',
            text: 'Read expert articles that provide context and guidance'
          },
          {
            '@type': 'HowToDirection',
            text: 'Drag insights from articles directly into your prompt answers'
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
        text: 'Graduate to your unified Life OS that combines all your template work. Like Notion, but built from your personal foundation.',
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: 'Access all your templates in one unified workspace'
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
    headline: `${templateData.title} - Complete Planning Template`,
    description: templateData.description,
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
      '@id': `https://templata.org/templates/${slug}/marketing`
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    articleSection: templateData.category,
    keywords: `${templateData.title.toLowerCase()}, ${templateData.title.toLowerCase()} template, ${templateData.category.toLowerCase()}, life planning, ai planning tool, templata, life organization, planning prompts, expert articles`,
    about: {
      '@type': 'Thing',
      name: templateData.title,
      description: templateData.description
    }
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${templateData.title} Template`,
    description: `${templateData.description} Get ${prompts.length} expert prompts and ${articles.length} articles.`,
    url: `https://templata.org/templates/${slug}/marketing`,
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

  const promptsListSchema = prompts.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${templateData.title} Prompts`,
    description: `${prompts.length} expert prompts for ${templateData.title.toLowerCase()}`,
    numberOfItems: prompts.length,
    itemListElement: prompts.slice(0, 10).map((prompt, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: prompt.prompt.substring(0, 100),
      item: `https://templata.org/templates/${slug}/marketing#prompt-${prompt.id}`
    }))
  } : null;

  const articlesListSchema = articles.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${templateData.title} Articles`,
    description: `${articles.length} expert articles for ${templateData.title.toLowerCase()}`,
    numberOfItems: articles.length,
    itemListElement: articles.slice(0, 10).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: article.title,
      item: `https://templata.org/templates/${slug}/marketing#article-${article.id}`
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
                <AnnouncementTag>{templateData.category}</AnnouncementTag>
                <AnnouncementTitle>{prompts.length} prompts · {articles.length} articles</AnnouncementTitle>
              </Announcement>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                {templateData.title}
              </h1>

              <p className="mx-auto max-w-2xl text-xl text-white">
                {templateData.description}
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
                Our split-screen interface combines guided prompts, a structured workspace, and an encyclopedia of knowledge.
              </p>
            </div>

            {/* Split-Screen Visual */}
            <Card className="p-8 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Prompts Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Guided Prompts</span>
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
                  <span>104,000+ categorized prompts ensure you consider everything</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>26,000+ articles like Wikipedia for life decisions</span>
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
                <p className="text-muted-foreground">Action Prompts</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">26k+</div>
                <p className="text-muted-foreground">Expert Articles</p>
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
              <h2 className="text-2xl font-bold mb-2">Prompts</h2>
              <p className="text-sm text-muted-foreground">
                {prompts.length} prompts across {promptCategories.length} categories
              </p>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Loading prompts...</p>
            ) : prompts.length === 0 ? (
              <p className="text-muted-foreground">No prompts available for this template.</p>
            ) : (
              <div className="space-y-4">
                {promptCategories.map(category => {
                  const isExpanded = expandedCategories.has(category);
                  const categoryPrompts = groupedPrompts[category];

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
                          {categoryPrompts.length}
                        </Badge>
                      </button>

                      {isExpanded && (
                        <div className="mt-2 grid grid-cols-1 gap-y-1 pl-6">
                          {categoryPrompts.map((prompt) => (
                            <div
                              key={prompt.id}
                              className="group block py-2 hover:text-primary transition-colors"
                            >
                              <div className="text-sm">
                                {prompt.prompt}
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
              <h2 className="text-2xl font-bold mb-2">Articles</h2>
              <p className="text-sm text-muted-foreground">
                {articles.length} articles
              </p>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Loading articles...</p>
            ) : articles.length === 0 ? (
              <p className="text-muted-foreground">No articles available for this template.</p>
            ) : (
              <div className="border-t">
                {articles.map((article) => (
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
              <h2 className="text-2xl font-bold mb-2">Related Templates</h2>
              <p className="text-sm text-muted-foreground">
                Explore more {templateData.category} templates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTemplates
                .slice(0, 6)
                .map((relatedTemplate) => (
                  <Link
                    key={relatedTemplate.id}
                    href={`/templates/${relatedTemplate.id}/marketing`}
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

            {relatedTemplates.length === 0 && (
              <p className="text-muted-foreground text-center">
                No related templates found. <Link href="/templates" className="text-primary hover:underline">Browse all templates</Link>
              </p>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto max-w-3xl px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to organize your {templateData.title.toLowerCase()}?
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
