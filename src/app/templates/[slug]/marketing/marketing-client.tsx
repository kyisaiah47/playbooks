'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/templates';
import { PageLayout } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ArrowRight,
  Sparkles,
  FileText,
  Zap,
  ChevronRight,
  Layout,
  BookOpen,
  MessageSquare,
  Crown,
  TrendingUp,
  Timer,
  Target
} from 'lucide-react';
import { SubtleGlow } from '@/components/ui/glow-variants';
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
  const router = useRouter();
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

  const handleOpenInWorkspace = () => {
    // Store template context for workspace
    sessionStorage.setItem('workspace-template-context', JSON.stringify({
      templateId: slug,
      templateName: templateData.title
    }));

    // Navigate to workspace
    router.push('/workspace');
  };

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
        item: 'https://templata.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Templates',
        item: 'https://templata.com/templates'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: templateData.category,
        item: `https://templata.com/templates?category=${encodeURIComponent(templateData.category)}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: templateData.title,
        item: `https://templata.com/templates/${slug}/marketing`
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
      url: 'https://templata.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Templata',
      logo: {
        '@type': 'ImageObject',
        url: 'https://templata.com/brand/templata-logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://templata.com/templates/${slug}/marketing`
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
    url: `https://templata.com/templates/${slug}/marketing`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Templata',
      url: 'https://templata.com'
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
      url: 'https://templata.com/og-image.jpg'
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
      item: `https://templata.com/templates/${slug}/marketing#prompt-${prompt.id}`
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
      item: `https://templata.com/templates/${slug}/marketing#article-${article.id}`
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <SubtleGlow>
                  <Button
                    size="lg"
                    onClick={handleOpenInWorkspace}
                    className="h-12 px-8 text-base bg-white text-black hover:bg-white/90"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Open in Life OS
                  </Button>
                </SubtleGlow>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    const event = new KeyboardEvent('keydown', {
                      key: 'k',
                      metaKey: true,
                      bubbles: true
                    });
                    document.dispatchEvent(event);
                  }}
                >
                  Browse All Templates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Templata Section */}
        <section className="py-24 border-t bg-muted/10">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 mb-16">
              <Badge variant="outline" className="px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4" />
                Powered by Templata
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
                AI-powered workspaces for
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  life's biggest moments
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Templata combines 15,000+ action prompts and 26,000+ expert articles with intelligent workspaces to guide you through any life decision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">15,000+ Action Prompts</h3>
                  <CardDescription>
                    Tactical, practical prompts that drive decision-making. Categorized by planning phases and organized for maximum impact.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">26,000+ Expert Articles</h3>
                  <CardDescription>
                    In-depth guidance and insights for every situation. Contextually relevant to your current prompts and decisions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                    <Layout className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Split-Screen Interface</h3>
                  <CardDescription>
                    Prompts on the left, articles on the right. Drag insights directly into your answers without losing momentum.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Workspace Evolution Section */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <TrendingUp className="mr-2 h-4 w-4" />
                Complete Evolution
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                From guided templates to
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  life mastery
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn structure, then graduate to complete autonomy. Our three progressive workspace modes take you from guided learning to mastering your own life operating system.
              </p>

              <div className="relative pt-8">
                {/* Workspace Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative text-center space-y-4">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6">
                      <Layout className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Template Workspace</h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Start Here</p>
                    <p className="text-muted-foreground">
                      Split-screen guided experience with prompts and contextual articles. Learn structure first.
                    </p>
                  </div>

                  <div className="relative text-center space-y-4">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6">
                      <Timer className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Reflection Workspace</h3>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">Then Process</p>
                    <p className="text-muted-foreground">
                      Daily fullscreen immersion for processing your journey. Pause and think deeply about progress.
                    </p>
                  </div>

                  <div className="relative text-center space-y-4">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6">
                      <Crown className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Life OS</h3>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">Finally Master</p>
                    <p className="text-muted-foreground">
                      Unified life OS combining all your template work. Like Notion, but built from your foundation.
                    </p>
                  </div>
                </div>
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
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to organize your {templateData.title.toLowerCase()}?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Get started with this template in Life OS. Answer prompts, read articles, and build your plan.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                  onClick={handleOpenInWorkspace}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Open in Life OS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    const event = new KeyboardEvent('keydown', {
                      key: 'k',
                      metaKey: true,
                      bubbles: true
                    });
                    document.dispatchEvent(event);
                  }}
                >
                  Browse All Templates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

      </PageLayout>
    </>
  );
}
