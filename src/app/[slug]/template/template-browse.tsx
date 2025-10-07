'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getTemplateById } from '@/registry/templates';
import { PageLayout } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Sparkles, FileText } from 'lucide-react';
import { useUserUnlocks } from '@/contexts/UserUnlockContext';
import { PaywallModal } from '@/components/paywall-modal';

interface TemplateBrowseProps {
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

export default function TemplateBrowse({ params }: TemplateBrowseProps) {
  const router = useRouter();
  const { slug } = use(params);
  const template = getTemplateById(slug);
  const { unlockData, isTemplateUnlocked, canUnlockMore, unlockTemplate } = useUserUnlocks();

  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [unlocking, setUnlocking] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallTrigger, setPaywallTrigger] = useState<'unlock-limit' | 'locked-content'>('unlock-limit');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch prompts
        const promptsRes = await fetch(`/api/prompts?templateId=${slug}`);
        const promptsData = await promptsRes.json();
        setPrompts(promptsData.prompts || []);

        // Fetch articles for this template
        const articlesRes = await fetch(`/api/articles?pageSize=1000`);
        const articlesData = await articlesRes.json();

        // Filter articles by template
        const templateArticles = articlesData.articles.filter(
          (a: Article) => (a as any).template === slug
        );
        setArticles(templateArticles);
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
    // MVP: No paywall checks - everything is free
    try {
      // Store prompt data for workspace to use
      sessionStorage.setItem('workspace-insert-prompt', JSON.stringify(prompt));

      // Redirect to workspace
      router.push('/workspace');
    } catch (error) {
      console.error('Error inserting prompt:', error);
      alert('Failed to insert prompt. Please try again.');
    }

    /* TODO: Enable for production with paywall
    try {
      setUnlocking(true);

      // Check if template is already unlocked
      if (!isTemplateUnlocked(slug)) {
        // Check if user can unlock more
        if (!canUnlockMore()) {
          setPaywallTrigger('unlock-limit');
          setPaywallOpen(true);
          return;
        }

        // Auto-unlock the template
        try {
          await unlockTemplate(slug);
        } catch (error: any) {
          if (error.message === 'UPGRADE_REQUIRED') {
            setPaywallTrigger('unlock-limit');
            setPaywallOpen(true);
            return;
          }
          throw error;
        }
      }

      // Store prompt data for workspace to use
      sessionStorage.setItem('workspace-insert-prompt', JSON.stringify(prompt));

      // Redirect to workspace
      router.push('/workspace');
    } catch (error) {
      console.error('Error inserting prompt:', error);
      alert('Failed to insert prompt. Please try again.');
    } finally {
      setUnlocking(false);
    }
    */
  };

  const handleReadArticle = async (article: Article) => {
    // MVP: No paywall checks - everything is free
    try {
      // Store article data for workspace to use
      sessionStorage.setItem('workspace-open-article', JSON.stringify(article));

      // Redirect to workspace
      router.push('/workspace');
    } catch (error) {
      console.error('Error opening article:', error);
      alert('Failed to open article. Please try again.');
    }

    /* TODO: Enable for production with paywall
    try {
      setUnlocking(true);

      // Check if template is already unlocked
      if (!isTemplateUnlocked(slug)) {
        setPaywallTrigger('locked-content');
        setPaywallOpen(true);
        return;
      }

      // Store article data for workspace to use
      sessionStorage.setItem('workspace-open-article', JSON.stringify(article));

      // Redirect to workspace
      router.push('/workspace');
    } catch (error) {
      console.error('Error opening article:', error);
      alert('Failed to open article. Please try again.');
    } finally {
      setUnlocking(false);
    }
    */
  };

  return (
    <>
      {/* MVP: Paywall modal disabled */}
      {/* <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        trigger={paywallTrigger}
        templateName={templateData.title}
      /> */}

      <PageLayout>
      {/* Marketing Hero */}
      <section className="py-24 md:py-32 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              {templateData.category}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {templateData.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {templateData.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
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
            <div className="space-y-12">
              {promptCategories.map(category => (
                <section key={category} className="border-t pt-8">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-6 tracking-wider uppercase">
                    {category}
                  </h3>

                  <div className="grid grid-cols-1 gap-y-1">
                    {groupedPrompts[category].map((prompt) => (
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
                </section>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="group block py-2"
                >
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{article.readTime}</span>
                    {article.excerpt && (
                      <>
                        <span>•</span>
                        <span className="line-clamp-1">{article.excerpt}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MVP: Remove sticky select button with pricing language */}
      {/* <div className="sticky bottom-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Use the buttons above to insert prompts into your workspace or read articles
            </div>
          </div>
        </div>
      </div> */}
    </PageLayout>
    </>
  );
}
