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
      setUnlocking(true);

      // Check if template is already unlocked
      if (!isTemplateUnlocked(slug)) {
        // Check if user can unlock more
        if (!canUnlockMore()) {
          // TODO: Show paywall modal
          alert('You have used all 3 free template unlocks. Upgrade to Pro for unlimited access.');
          return;
        }

        // Auto-unlock the template
        try {
          await unlockTemplate(slug);
        } catch (error: any) {
          if (error.message === 'UPGRADE_REQUIRED') {
            // TODO: Show paywall modal
            alert('You have used all 3 free template unlocks. Upgrade to Pro for unlimited access.');
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
  };

  const handleReadArticle = async (article: Article) => {
    try {
      setUnlocking(true);

      // Check if template is already unlocked
      if (!isTemplateUnlocked(slug)) {
        // TODO: Show paywall modal
        alert('This article is locked. Unlock this template to access all articles.');
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
  };

  return (
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
          <h2 className="text-2xl font-bold mb-8">Prompts</h2>

          {loading ? (
            <p className="text-muted-foreground">Loading prompts...</p>
          ) : prompts.length === 0 ? (
            <p className="text-muted-foreground">No prompts available for this template.</p>
          ) : (
            <div className="space-y-0 border rounded-lg divide-y">
              {prompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="text-sm font-medium truncate">
                      {prompt.prompt}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Badge variant="secondary" className="text-xs">
                      {prompt.categoryName}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleInsertPrompt(prompt)}
                      className="flex items-center gap-1"
                    >
                      Insert
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Articles Library */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold mb-8">Articles</h2>

          {loading ? (
            <p className="text-muted-foreground">Loading articles...</p>
          ) : articles.length === 0 ? (
            <p className="text-muted-foreground">No articles available for this template.</p>
          ) : (
            <div className="space-y-0 border rounded-lg divide-y">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <h3 className="text-sm font-medium mb-1">{article.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleReadArticle(article)}
                      className="flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sticky Select Button */}
      <div className="sticky bottom-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Select this template to unlock all prompts and articles
            </div>
            <Button size="lg" className="flex items-center gap-2">
              Select this template
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
