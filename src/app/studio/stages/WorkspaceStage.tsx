'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileText, BookOpen, ChevronRight, ChevronDown, Save, ArrowLeft, X } from 'lucide-react';

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
}

interface ArticleDetail extends Article {
  content: string;
  author: string;
  publishedAt: string;
}

interface Template {
  id: string;
  name: string;
  category: string;
}

export function WorkspaceStage() {
  const [selectedTemplate, setSelectedTemplate] = useState('wedding-planning');
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templateInfo, setTemplateInfo] = useState<{ id: string; name: string } | null>(null);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);
  const [promptResponse, setPromptResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleDetail | null>(null);
  const [loadingArticle, setLoadingArticle] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  // Load data from Supabase on mount
  useEffect(() => {
    if (selectedPromptId && selectedTemplate) {
      loadResponse();
    }

    async function loadResponse() {
      try {
        const res = await fetch(
          `/api/workspace/responses?templateId=${selectedTemplate}`
        );
        const data = await res.json();

        if (data.responses) {
          const response = data.responses.find(
            (r: any) =>
              r.template_id === selectedTemplate && r.prompt_id === selectedPromptId
          );

          if (response) {
            setPromptResponse(response.response || '');
            setLastSaved(response.updated_at ? new Date(response.updated_at) : null);
          } else {
            setPromptResponse('');
            setLastSaved(null);
          }
        }
      } catch (e) {
        console.error('Error loading saved data:', e);
        setPromptResponse('');
        setLastSaved(null);
      }
    }
  }, [selectedPromptId, selectedTemplate]);

  // Autosave functionality - save to Supabase
  useEffect(() => {
    if (!autoSave || !selectedPromptId || !selectedTemplate) return;

    const timeoutId = setTimeout(async () => {
      try {
        await fetch('/api/workspace/responses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            templateId: selectedTemplate,
            promptId: selectedPromptId,
            response: promptResponse,
          }),
        });
        setLastSaved(new Date());
      } catch (e) {
        console.error('Error auto-saving:', e);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [promptResponse, autoSave, selectedPromptId, selectedTemplate]);

  // Fetch templates list
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/templates');
        const data = await res.json();
        setTemplates(data.templates || []);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    }
    fetchTemplates();
  }, []);

  // Fetch prompts and articles when template changes
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const template = templates.find(t => t.id === selectedTemplate);
        if (template) {
          setTemplateInfo({ id: template.id, name: template.name });
        }

        const promptsRes = await fetch(`/api/prompts?templateId=${selectedTemplate}`);
        const promptsData = await promptsRes.json();
        setPrompts(promptsData.prompts || []);

        const articlesRes = await fetch(`/api/articles?template=${selectedTemplate}&pageSize=50`);
        const articlesData = await articlesRes.json();
        setArticles(articlesData.articles || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    if (templates.length > 0) {
      fetchData();
    }
  }, [selectedTemplate, templates]);

  const handleTemplateChange = (newTemplateId: string) => {
    setSelectedTemplate(newTemplateId);
    setSelectedPromptId(null);
    setPromptResponse('');
  };

  const handleArticleClick = async (articleId: string) => {
    try {
      setLoadingArticle(true);
      const res = await fetch(`/api/articles?id=${articleId}`);
      const data = await res.json();
      setSelectedArticle(data.article);
    } catch (error) {
      console.error('Error fetching article:', error);
    } finally {
      setLoadingArticle(false);
    }
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const toggleCategory = (category: string) => {
    setCollapsedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleManualSave = async () => {
    if (selectedPromptId && selectedTemplate) {
      try {
        await fetch('/api/workspace/responses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            templateId: selectedTemplate,
            promptId: selectedPromptId,
            response: promptResponse,
          }),
        });
        setLastSaved(new Date());
      } catch (e) {
        console.error('Error saving:', e);
      }
    }
  };

  const groupedPrompts = prompts.reduce((acc, prompt) => {
    const category = prompt.categoryName || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  const categories = Object.keys(groupedPrompts).sort();
  const selectedPrompt = prompts.find(p => p.id === selectedPromptId);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Stage Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              {templateInfo && (
                <p className="text-sm text-muted-foreground">{templateInfo.name}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Template Selector */}
              <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Autosave Toggle */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border">
                <input
                  type="checkbox"
                  id="autosave"
                  checked={autoSave}
                  onChange={(e) => setAutoSave(e.target.checked)}
                  className="h-4 w-4"
                />
                <label htmlFor="autosave" className="text-sm text-foreground cursor-pointer">
                  Auto-save
                </label>
              </div>

              {/* Manual Save Button */}
              <Button
                onClick={handleManualSave}
                disabled={!selectedPromptId || !promptResponse}
                size="sm"
                variant="outline"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>

              {/* Last Saved Indicator */}
              {lastSaved && (
                <span className="text-xs text-muted-foreground">
                  Saved {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 3 Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Prompts */}
        <div className="w-80 border-r bg-background overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-4 w-4 text-primary" />
              <h2 className="font-semibold text-foreground">Action Prompts</h2>
              <Badge variant="outline" className="ml-auto text-xs">
                {prompts.length}
              </Badge>
            </div>

            {loading ? (
              <p className="text-sm text-muted-foreground">Loading prompts...</p>
            ) : (
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category} className="space-y-2">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-2 w-full text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                      <ChevronDown
                        className={`h-3 w-3 transition-transform ${
                          collapsedCategories.has(category) ? '-rotate-90' : ''
                        }`}
                      />
                      {category}
                    </button>
                    {!collapsedCategories.has(category) && (
                      <div className="space-y-1">
                        {groupedPrompts[category].map((prompt) => (
                          <button
                            key={prompt.id}
                            onClick={() => setSelectedPromptId(prompt.id)}
                            className={`w-full text-left p-3 rounded-lg transition-colors text-sm ${
                              selectedPromptId === prompt.id
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'bg-muted/50 text-foreground hover:bg-muted'
                            }`}
                          >
                            {prompt.prompt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Middle - Editor */}
        <div className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto max-w-4xl px-8 py-8">
            {selectedPrompt ? (
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-3">
                    {selectedPrompt.categoryName}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {selectedPrompt.prompt}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {autoSave
                      ? 'Your work is automatically saved as you type'
                      : 'Remember to save your work manually'}
                  </p>
                </div>

                <Card className="p-6 min-h-[500px] border-border bg-background">
                  <textarea
                    className="w-full h-full min-h-[500px] bg-transparent border-none outline-none resize-none text-foreground"
                    placeholder="Start typing your response..."
                    value={promptResponse}
                    onChange={(e) => setPromptResponse(e.target.value)}
                  />
                </Card>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-2">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Select a prompt to begin
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Choose a prompt from the left sidebar to start working on your template
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Articles or Article Content */}
        <div className={`${selectedArticle ? 'w-[600px]' : 'w-80'} border-l bg-background overflow-y-auto transition-all duration-300`}>
          <div className="p-6 space-y-4">
            {selectedArticle ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCloseArticle}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to articles
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCloseArticle}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {loadingArticle ? (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">Loading article...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {selectedArticle.title}
                      </h2>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span>{selectedArticle.author}</span>
                        <span>•</span>
                        <span>{selectedArticle.readTime}</span>
                        <span>•</span>
                        <span>{new Date(selectedArticle.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4 mb-6">
                        {selectedArticle.excerpt}
                      </p>
                    </div>

                    <div
                      className="prose prose-sm max-w-none dark:prose-invert text-foreground"
                      dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-foreground">Related Articles</h2>
                  <Badge variant="outline" className="ml-auto text-xs">
                    {articles.length}
                  </Badge>
                </div>

                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading articles...</p>
                ) : articles.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No articles available</p>
                ) : (
                  <div className="space-y-3">
                    {articles.map((article) => (
                      <Card
                        key={article.id}
                        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-border"
                        onClick={() => handleArticleClick(article.id)}
                      >
                        <h3 className="text-sm font-medium text-foreground mb-1">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{article.readTime}</span>
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
