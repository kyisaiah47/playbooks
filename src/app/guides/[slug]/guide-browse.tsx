'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { TemplateRegistryEntry } from '@/registry/guides';
import { PageLayout } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Sparkles, FileText, Zap, ChevronRight } from 'lucide-react';
import { SubtleGlow } from '@/components/ui/glow-variants';
import Script from 'next/script';

interface GuideBrowseProps {
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

export default function GuideBrowse({ params }: GuideBrowseProps) {
  const router = useRouter();
  const { slug } = use(params);

  const [template, setTemplate] = useState<TemplateRegistryEntry | null>(null);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [relatedTemplates, setRelatedTemplates] = useState<TemplateRegistryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch template data
        const templatesRes = await fetch('/api/guides');
        const templatesData = await templatesRes.json();
        const foundTemplate = templatesData.templates?.find((t: TemplateRegistryEntry) => t.id === slug);
        setTemplate(foundTemplate || null);

        // Fetch prompts
        const promptsRes = await fetch(`/api/prompts?templateId=${slug}`);
        const promptsData = await promptsRes.json();
        setPrompts(promptsData.prompts || []);

        // Fetch articles for this template (server-side filtering)
        const articlesRes = await fetch(`/api/readings?template=${slug}&pageSize=1000`);
        const articlesData = await articlesRes.json();

        console.log('[Template Browse] Articles for', slug, ':', articlesData.articles?.length || 0);
        setArticles(articlesData.articles || []);

        // Fetch related templates (same category, exclude current)
        if (foundTemplate) {
          const related = templatesData.templates
            ?.filter((t: TemplateRegistryEntry) =>
              t.category === foundTemplate.category && t.id !== slug
            )
            .slice(0, 5) || [];
          setRelatedTemplates(related);
        }
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

  const handleInsertPrompt = async (prompt: Prompt) => {
    try {
      // Store prompt data for workspace to use
      sessionStorage.setItem('workspace-insert-prompt', JSON.stringify(prompt));

      // Redirect to workspace
      router.push('/workspace');
    } catch (error) {
      console.error('Error inserting prompt:', error);
      alert('Failed to insert prompt. Please try again.');
    }
  };

  const handleReadArticle = async (article: Article) => {
    try {
      // Store article data for workspace to use
      sessionStorage.setItem('workspace-open-article', JSON.stringify(article));

      // Redirect to workspace
      router.push('/workspace');
    } catch (error) {
      console.error('Error opening article:', error);
      alert('Failed to open article. Please try again.');
    }
  };

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

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="px-4 py-2">
              <FileText className="mr-2 h-4 w-4" />
              {templateData.category}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {templateData.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {templateData.description}
            </p>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4" />
                <span>{prompts.length} prompts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>{articles.length} articles</span>
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
                      <ol className="mt-2 space-y-2 pl-6 list-decimal marker:text-sm">
                        {categoryPrompts.map((prompt) => (
                          <li
                            key={prompt.id}
                            className="group py-2 text-sm hover:text-primary transition-colors"
                          >
                            {prompt.prompt}
                          </li>
                        ))}
                      </ol>
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
            <ol className="space-y-3 pl-6 list-decimal marker:text-sm border-t pt-6">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="group py-2"
                >
                  <Link href={`/readings/${article.slug}`}>
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <Separator />

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Related Templates</h2>
              <p className="text-sm text-muted-foreground">
                Explore similar templates in {templateData.category}
              </p>
            </div>

            <div className="border-t">
              {relatedTemplates.map((relatedTemplate) => (
                <a
                  key={relatedTemplate.id}
                  href={`/guides/${relatedTemplate.id}`}
                  className="group border-b py-4 hover:bg-muted/50 transition-colors flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {relatedTemplate.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {relatedTemplate.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-4" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Schema.org CreativeWork Markup */}
      <Script
        id="template-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: `${templateData.title} Template`,
            description: templateData.description,
            creator: {
              '@type': 'Organization',
              name: 'Templata',
              url: 'https://templata.org'
            },
            url: `https://templata.org/guides/${slug}`,
            inLanguage: 'en-US',
            genre: 'Planning Template',
            keywords: templateData.tags?.join(', ') || templateData.category,
            isPartOf: {
              '@type': 'WebSite',
              name: 'Templata',
              url: 'https://templata.org'
            },
            about: {
              '@type': 'Thing',
              name: templateData.category
            }
          })
        }}
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <SubtleGlow>
          <Button
            size="lg"
            onClick={handleOpenInWorkspace}
            variant="outline"
            className="bg-background hover:bg-background/80 flex items-center gap-2"
          >
            <Zap className="h-5 w-5" />
            Open in Life OS
          </Button>
        </SubtleGlow>
      </div>
    </PageLayout>
  );
}
