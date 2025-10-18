'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { FileText, BookOpen, ChevronRight, ChevronDown, Save, ArrowLeft, X, AlertCircle, ChevronsUpDown, Check, CheckCircle } from 'lucide-react';
import { ArticleContent } from '@/app/articles/[slug]/article-content';
import Link from 'next/link';

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

const TEMPLATES_PER_LOAD = 50;

export function WorkspaceStage() {
  const [selectedTemplate, setSelectedTemplate] = useState('wedding-planning');
  const [templates, setTemplates] = useState<Template[]>([]);
  const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);
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
  const [open, setOpen] = useState(false);
  const [hasMoreTemplates, setHasMoreTemplates] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [answeredPrompts, setAnsweredPrompts] = useState<Set<string>>(new Set());

  // Check authentication status
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        setIsAuthenticated(!!data.user);
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  // Load data from Supabase (auth) or localStorage (anonymous)
  useEffect(() => {
    if (selectedPromptId && selectedTemplate && isAuthenticated !== null) {
      loadResponse();
    }

    async function loadResponse() {
      try {
        if (isAuthenticated) {
          // Load from Supabase
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
        } else {
          // Load from localStorage
          const key = `workspace_${selectedTemplate}_${selectedPromptId}`;
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const data = JSON.parse(saved);
              setPromptResponse(data.response || '');
              setLastSaved(data.savedAt ? new Date(data.savedAt) : null);
            } catch (e) {
              console.error('Error loading from localStorage:', e);
              setPromptResponse('');
              setLastSaved(null);
            }
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
  }, [selectedPromptId, selectedTemplate, isAuthenticated]);

  // Autosave functionality - save to Supabase or localStorage
  useEffect(() => {
    if (!autoSave || !selectedPromptId || !selectedTemplate || isAuthenticated === null) return;

    const timeoutId = setTimeout(async () => {
      try {
        if (isAuthenticated) {
          // Save to Supabase
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
        } else {
          // Save to localStorage
          const key = `workspace_${selectedTemplate}_${selectedPromptId}`;
          const data = {
            response: promptResponse,
            savedAt: new Date().toISOString(),
          };
          localStorage.setItem(key, JSON.stringify(data));
          setLastSaved(new Date());
        }
      } catch (e) {
        console.error('Error auto-saving:', e);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [promptResponse, autoSave, selectedPromptId, selectedTemplate, isAuthenticated]);

  // Fetch templates list
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/templates');
        const data = await res.json();
        const allTemplates = data.templates || [];
        setTemplates(allTemplates);

        // Initially load first batch
        setDisplayedTemplates(allTemplates.slice(0, TEMPLATES_PER_LOAD));
        setHasMoreTemplates(allTemplates.length > TEMPLATES_PER_LOAD);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    }
    fetchTemplates();
  }, []);

  // Load more templates
  const loadMoreTemplates = () => {
    if (!hasMoreTemplates) return;

    const currentLength = displayedTemplates.length;
    const nextBatch = templates.slice(currentLength, currentLength + TEMPLATES_PER_LOAD);

    if (nextBatch.length > 0) {
      setDisplayedTemplates(prev => [...prev, ...nextBatch]);
      setHasMoreTemplates(currentLength + nextBatch.length < templates.length);
    }
  };

  // Filter templates based on search
  const filteredTemplates = searchQuery.trim()
    ? templates.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : displayedTemplates;

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
        const fetchedPrompts = promptsData.prompts || [];
        setPrompts(fetchedPrompts);

        // Collapse all categories by default
        const groupedPrompts = fetchedPrompts.reduce((acc: Record<string, Prompt[]>, prompt: Prompt) => {
          const category = prompt.categoryName || 'General';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(prompt);
          return acc;
        }, {});
        const allCategories = Object.keys(groupedPrompts);
        setCollapsedCategories(new Set(allCategories));

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

  // Check which prompts have been answered
  useEffect(() => {
    async function checkAnsweredPrompts() {
      if (isAuthenticated === null || prompts.length === 0) return;

      const answered = new Set<string>();

      if (isAuthenticated) {
        // Check API responses
        try {
          const res = await fetch(`/api/workspace/responses?templateId=${selectedTemplate}`);
          const data = await res.json();
          if (data.responses) {
            data.responses.forEach((r: any) => {
              if (r.response && r.response.trim().length > 0) {
                answered.add(r.prompt_id);
              }
            });
          }
        } catch (e) {
          console.error('Error checking answered prompts:', e);
        }
      } else {
        // Check localStorage
        prompts.forEach((prompt) => {
          const key = `workspace_${selectedTemplate}_${prompt.id}`;
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const data = JSON.parse(saved);
              if (data.response && data.response.trim().length > 0) {
                answered.add(prompt.id);
              }
            } catch (e) {
              // Ignore parse errors
            }
          }
        });
      }

      setAnsweredPrompts(answered);
    }

    checkAnsweredPrompts();
  }, [selectedTemplate, prompts, isAuthenticated, lastSaved]);

  const handleTemplateChange = (newTemplateId: string) => {
    setSelectedTemplate(newTemplateId);
    setSelectedPromptId(null);
    setPromptResponse('');
    setSearchQuery('');
    setOpen(false);
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
        if (isAuthenticated) {
          // Save to Supabase
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
        } else {
          // Save to localStorage
          const key = `workspace_${selectedTemplate}_${selectedPromptId}`;
          const data = {
            response: promptResponse,
            savedAt: new Date().toISOString(),
          };
          localStorage.setItem(key, JSON.stringify(data));
          setLastSaved(new Date());
        }
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
      {/* Anonymous User Banner */}
      {isAuthenticated === false && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-4 py-3">
          <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              <span className="text-foreground">
                Your work is saved locally in your browser. Create an account to save permanently and access from any device.
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link href="/signup">
                <Button size="sm" variant="default">Create Account</Button>
              </Link>
              <Link href="/login">
                <Button size="sm" variant="ghost">Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Stage Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Template Selector */}
              <Popover
                open={open}
                onOpenChange={(isOpen) => {
                  setOpen(isOpen);
                  if (!isOpen) {
                    setSearchQuery('');
                  }
                }}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[350px] justify-between"
                  >
                    {selectedTemplate
                      ? templates.find((t) => t.id === selectedTemplate)?.name
                      : "Select template..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[350px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search templates..."
                      value={searchQuery}
                      onValueChange={setSearchQuery}
                    />
                    <CommandList
                      onScroll={(e) => {
                        const target = e.target as HTMLElement;
                        const scrollPercentage = (target.scrollTop + target.clientHeight) / target.scrollHeight;

                        // Load more when scrolled 80% down
                        if (scrollPercentage > 0.8 && !searchQuery.trim()) {
                          loadMoreTemplates();
                        }
                      }}
                    >
                      <CommandEmpty>No template found.</CommandEmpty>
                      <CommandGroup>
                        {filteredTemplates.map((template) => (
                          <CommandItem
                            key={template.id}
                            value={template.name}
                            onSelect={() => {
                              handleTemplateChange(template.id);
                            }}
                          >
                            <Check
                              className={`mr-2 h-4 w-4 ${
                                selectedTemplate === template.id ? "opacity-100" : "opacity-0"
                              }`}
                            />
                            {template.name}
                          </CommandItem>
                        ))}
                        {!searchQuery.trim() && hasMoreTemplates && (
                          <div className="py-2 text-center text-xs text-muted-foreground">
                            Scroll for more...
                          </div>
                        )}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center gap-3">
              {/* Autosave Toggle */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border">
                <Checkbox
                  id="autosave"
                  checked={autoSave}
                  onCheckedChange={setAutoSave}
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
                      <motion.div
                        animate={{ rotate: collapsedCategories.has(category) ? -90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </motion.div>
                      {category}
                    </button>
                    <AnimatePresence initial={false}>
                      {!collapsedCategories.has(category) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-1 overflow-hidden"
                        >
                          {groupedPrompts[category].map((prompt, index) => (
                            <motion.button
                              key={prompt.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.03 }}
                              onClick={() => setSelectedPromptId(prompt.id)}
                              className={`w-full text-left p-3 rounded-lg transition-colors text-sm flex items-start gap-2 ${
                                selectedPromptId === prompt.id
                                  ? 'bg-primary/10 text-primary border border-primary/20'
                                  : 'bg-muted/50 text-foreground hover:bg-muted'
                              }`}
                            >
                              {answeredPrompts.has(prompt.id) && (
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                              )}
                              <span className="flex-1">{prompt.prompt}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Middle - Editor */}
        <div className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto max-w-4xl px-8 py-8">
            <AnimatePresence mode="wait">
              {selectedPrompt ? (
                <motion.div
                  key={selectedPromptId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-6"
                >
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

                  <Card className="p-8 min-h-[500px] border-border bg-muted/30">
                    <textarea
                      className="w-full h-full min-h-[500px] bg-transparent border-none outline-none resize-none text-foreground text-[15px] leading-relaxed font-normal placeholder:text-muted-foreground/60"
                      placeholder="Start writing your response here..."
                      value={promptResponse}
                      onChange={(e) => setPromptResponse(e.target.value)}
                      style={{ fontFamily: 'inherit' }}
                    />
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center space-y-2">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Select a prompt to begin
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Choose a prompt from the left sidebar to start working on your template
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sidebar - Articles or Article Content */}
        <motion.div
          className="border-l bg-background overflow-y-auto"
          animate={{ width: selectedArticle ? 600 : 320 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="p-6 space-y-4">
            <AnimatePresence mode="wait">
              {selectedArticle ? (
                <motion.div
                  key="article-detail"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
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
                    <div className="space-y-6">
                      <header>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                          {selectedArticle.title}
                        </h2>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{selectedArticle.author}</span>
                          <span>•</span>
                          <span>{selectedArticle.readTime}</span>
                          <span>•</span>
                          <span>{new Date(selectedArticle.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </header>

                      <ArticleContent content={selectedArticle.content} />
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="article-list"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
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
                      {articles.map((article, index) => (
                        <motion.div
                          key={article.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card
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
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
