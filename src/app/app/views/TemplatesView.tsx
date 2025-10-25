'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
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
  CommandSeparator,
} from '@/components/ui/command';
import { FileText, BookOpen, ChevronRight, ChevronDown, Save, ArrowLeft, X, AlertCircle, ChevronsUpDown, Check, CheckCircle, Star, Menu, Search } from 'lucide-react';
import { ReadingContent } from '@/app/readings/[slug]/reading-content';
import Link from 'next/link';
import { GuideHeader } from '@/components/app/guides/GuideHeader';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

// Featured templates for demo mode
const FEATURED_GENERAL_IDS = [
  'wedding-planning',
  'job-search',
  'home-buying',
  'business-launch',
];

const FEATURED_GENZ_IDS = [
  'college-planning',
  'first-job-change',
  'first-apartment-independence',
  'content-creator-career',
];

const FEATURED_HEALTH_IDS = [
  'fitness-journey',
  'mental-health',
  'nutrition-planning-system',
  'health-wellness',
];

const FEATURED_TEMPLATE_IDS = [...FEATURED_GENERAL_IDS, ...FEATURED_GENZ_IDS, ...FEATURED_HEALTH_IDS];

interface TemplatesViewProps {
  onViewChange?: (view: 'templates' | 'reflection' | 'overview') => void;
  setActions?: (actions: {
    openTemplateDropdown?: () => void;
    selectFirstPrompt?: () => void;
    openFirstArticle?: () => void;
  }) => void;
  workspaceId?: string;
  userGuideId?: string;
  defaultTemplateId?: string;
}

export function TemplatesView({ onViewChange, setActions, workspaceId, userGuideId, defaultTemplateId }: TemplatesViewProps) {
  const [selectedTemplate, setSelectedTemplate] = useState(defaultTemplateId || 'wedding-planning');
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
  const [promptSearchQuery, setPromptSearchQuery] = useState('');
  const [articleSearchQuery, setArticleSearchQuery] = useState('');
  const [articleContentSearchQuery, setReadingContentSearchQuery] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [answeredPrompts, setAnsweredPrompts] = useState<Set<string>>(new Set());
  const [userGuide, setUserGuide] = useState<any | null>(null);

  // Mobile drawer state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileDrawerTab, setMobileDrawerTab] = useState<'prompts' | 'articles'>('prompts');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up actions for parent to call
  useEffect(() => {
    if (setActions) {
      setActions({
        openTemplateDropdown: () => {
          setOpen(true);
        },
        selectFirstPrompt: () => {
          if (prompts.length > 0) {
            const groupedPrompts = prompts.reduce((acc, prompt) => {
              const category = prompt.categoryName || 'General';
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(prompt);
              return acc;
            }, {} as Record<string, Prompt[]>);
            const firstCategory = Object.keys(groupedPrompts).sort()[0];
            // Expand first category
            setCollapsedCategories((prev) => {
              const newSet = new Set(prev);
              newSet.delete(firstCategory);
              return newSet;
            });
            // Select first prompt
            const firstPrompt = groupedPrompts[firstCategory][0];
            if (firstPrompt) {
              setSelectedPromptId(firstPrompt.id);
            }
          }
        },
        openFirstArticle: () => {
          if (articles.length > 0) {
            handleArticleClick(articles[0].id);
          }
        },
      });
    }
  }, [prompts, articles, setActions]);

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

  // Fetch user guide data if userGuideId is provided
  useEffect(() => {
    async function fetchUserGuide() {
      if (!userGuideId || !isAuthenticated) return;

      try {
        const res = await fetch(`/api/user-guides/${userGuideId}`);

        if (!res.ok) {
          console.error('Failed to fetch user guide:', res.status);
          return;
        }

        const data = await res.json();
        setUserGuide(data.userGuide);
      } catch (error) {
        console.error('Error fetching user guide:', error);
      }
    }

    fetchUserGuide();
  }, [userGuideId, isAuthenticated]);

  // Load data from Supabase (auth) or localStorage (anonymous)
  useEffect(() => {
    if (selectedPromptId && selectedTemplate && isAuthenticated !== null) {
      loadResponse();
    }

    async function loadResponse() {
      try {
        if (isAuthenticated) {
          // Load from Supabase
          const params = new URLSearchParams({
            templateId: selectedTemplate,
          });

          // If we have a userGuideId, include it for filtering
          if (userGuideId) {
            params.append('userGuideId', userGuideId);
          }

          const res = await fetch(`/api/workspace/responses?${params.toString()}`);
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
  }, [selectedPromptId, selectedTemplate, isAuthenticated, userGuideId]);

  // Autosave functionality - save to Supabase or localStorage
  useEffect(() => {
    if (!autoSave || !selectedPromptId || !selectedTemplate || isAuthenticated === null) return;

    const timeoutId = setTimeout(async () => {
      try {
        if (isAuthenticated) {
          // Save to Supabase
          const body: any = {
            templateId: selectedTemplate,
            promptId: selectedPromptId,
            response: promptResponse,
          };

          // Include userGuideId if available
          if (userGuideId) {
            body.userGuideId = userGuideId;
          }

          await fetch('/api/workspace/responses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
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
  }, [promptResponse, autoSave, selectedPromptId, selectedTemplate, isAuthenticated, userGuideId]);

  // Fetch templates list
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/guides');
        const data = await res.json();
        const allTemplates = (data.templates || []).sort((a: Template, b: Template) =>
          a.name.localeCompare(b.name)
        );
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

  // Split into featured and regular templates (only when no search)
  // Always pull featured from full templates array to ensure they're included
  const showFeatured = !searchQuery.trim();
  const featuredGeneralTemplates = showFeatured
    ? templates.filter(t => FEATURED_GENERAL_IDS.includes(t.id))
    : [];
  const featuredGenZTemplates = showFeatured
    ? templates.filter(t => FEATURED_GENZ_IDS.includes(t.id))
    : [];
  const featuredHealthTemplates = showFeatured
    ? templates.filter(t => FEATURED_HEALTH_IDS.includes(t.id))
    : [];
  const regularTemplates = showFeatured
    ? filteredTemplates.filter(t => !FEATURED_TEMPLATE_IDS.includes(t.id))
    : filteredTemplates;

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

        const articlesRes = await fetch(`/api/readings?template=${selectedTemplate}&pageSize=50`);
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
          const params = new URLSearchParams({
            templateId: selectedTemplate,
          });

          // If we have a userGuideId, include it for filtering
          if (userGuideId) {
            params.append('userGuideId', userGuideId);
          }

          const res = await fetch(`/api/workspace/responses?${params.toString()}`);
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

      // Optimistically show checkmark for current prompt if it has content
      if (selectedPromptId && promptResponse.trim().length > 0) {
        answered.add(selectedPromptId);
      }

      setAnsweredPrompts(answered);
    }

    checkAnsweredPrompts();
  }, [selectedTemplate, prompts, isAuthenticated, lastSaved, selectedPromptId, promptResponse, userGuideId]);

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
      const res = await fetch(`/api/readings?id=${articleId}`);
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
    setReadingContentSearchQuery(''); // Clear search when closing article
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
          const body: any = {
            templateId: selectedTemplate,
            promptId: selectedPromptId,
            response: promptResponse,
          };

          // Include userGuideId if available
          if (userGuideId) {
            body.userGuideId = userGuideId;
          }

          await fetch('/api/workspace/responses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
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

  // Filter prompts based on search query
  const filteredPrompts = promptSearchQuery.trim()
    ? prompts.filter(p =>
        p.prompt.toLowerCase().includes(promptSearchQuery.toLowerCase()) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(promptSearchQuery.toLowerCase()))
      )
    : prompts;

  const groupedPrompts = filteredPrompts.reduce((acc, prompt) => {
    const category = prompt.categoryName || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  const categories = Object.keys(groupedPrompts).sort();
  const selectedPrompt = prompts.find(p => p.id === selectedPromptId);

  // Auto-expand all categories when filtering
  useEffect(() => {
    if (promptSearchQuery.trim()) {
      // Expand all categories when searching
      setCollapsedCategories(new Set());
    } else {
      // Collapse all categories when filter is cleared
      const allCategories = Object.keys(prompts.reduce((acc, prompt) => {
        const category = prompt.categoryName || 'General';
        acc[category] = true;
        return acc;
      }, {} as Record<string, boolean>));
      setCollapsedCategories(new Set(allCategories));
    }
  }, [promptSearchQuery, prompts]);

  // Filter articles based on search query
  const filteredArticles = articleSearchQuery.trim()
    ? articles.filter(a =>
        a.title.toLowerCase().includes(articleSearchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(articleSearchQuery.toLowerCase())
      )
    : articles;

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Anonymous User Banner */}
      {isAuthenticated === false && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-4 py-3">
          <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              <span className="text-foreground">
                <span className="hidden sm:inline">Your work is saved locally in your browser. Create an account to save permanently and access from any device.</span>
                <span className="sm:hidden">Saved locally. Sign up to sync across devices.</span>
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <Link href="/signup" className="flex-1 sm:flex-initial">
                <Button size="sm" variant="default" className="w-full sm:w-auto">Sign Up</Button>
              </Link>
              <Link href="/login" className="flex-1 sm:flex-initial">
                <Button size="sm" variant="ghost" className="w-full sm:w-auto">Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Guide Header - Only show in workspace context */}
      {userGuideId && userGuide && (
        <GuideHeader
          guideName={userGuide.custom_name || userGuide.guides?.name || templateInfo?.name || 'Guide'}
          guideIcon={userGuide.custom_icon || userGuide.guides?.icon}
          coverImage={userGuide.custom_cover_image}
          progress={userGuide.progress || 0}
          templateName={templateInfo?.name}
          onNameChange={async (newName) => {
            try {
              const res = await fetch(`/api/user-guides/${userGuideId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName }),
              });
              if (res.ok) {
                const data = await res.json();
                setUserGuide(data.userGuide);
              }
            } catch (error) {
              console.error('Error updating guide name:', error);
            }
          }}
          onIconChange={async (newIcon) => {
            try {
              console.log('Updating icon to:', newIcon);
              const res = await fetch(`/api/user-guides/${userGuideId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ icon: newIcon }),
              });
              console.log('Response status:', res.status);
              if (res.ok) {
                const data = await res.json();
                console.log('Updated userGuide:', data.userGuide);
                setUserGuide(data.userGuide);
              } else {
                const errorData = await res.json();
                console.error('Error response:', errorData);
              }
            } catch (error) {
              console.error('Error updating guide icon:', error);
            }
          }}
          onCoverChange={async (coverUrl) => {
            try {
              const res = await fetch(`/api/user-guides/${userGuideId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cover_image: coverUrl }),
              });
              if (res.ok) {
                const data = await res.json();
                setUserGuide(data.userGuide);
              }
            } catch (error) {
              console.error('Error updating cover image:', error);
            }
          }}
        />
      )}

      {/* Main Content - 3 Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Prompts (Desktop only) */}
        <div className="hidden md:block w-80 border-r bg-background overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-primary" />
                <h2 className="font-semibold text-foreground">Action Prompts</h2>
                <Badge variant="outline" className="ml-auto text-xs">
                  {prompts.length}
                </Badge>
              </div>
              <Input
                type="text"
                placeholder="Filter prompts..."
                value={promptSearchQuery}
                onChange={(e) => setPromptSearchQuery(e.target.value)}
                className="h-8 text-sm mb-2"
              />
              <p className="text-xs text-muted-foreground">
                Select a prompt, write your answer, and see a checkmark appear
              </p>
            </div>

            {loading ? (
              <p className="text-sm text-muted-foreground">Loading prompts...</p>
            ) : categories.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {promptSearchQuery.trim() ? 'No prompts match your search' : 'No prompts available'}
              </p>
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
          <div className="container mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8 h-full">
            <AnimatePresence mode="wait">
              {selectedPrompt ? (
                <motion.div
                  key={selectedPromptId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="h-full flex flex-col gap-4 md:gap-6"
                >
                  <div>
                    <Badge variant="outline" className="mb-2 md:mb-3 text-xs">
                      {selectedPrompt.categoryName}
                    </Badge>
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {selectedPrompt.prompt}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                      {autoSave
                        ? 'Your work is automatically saved as you type'
                        : 'Remember to save your work manually'}
                    </p>
                  </div>

                  <Card className="p-4 md:p-8 flex-1 border-border bg-muted/30">
                    <textarea
                      className="w-full h-full bg-transparent border-none outline-none resize-none text-foreground text-[15px] leading-relaxed font-normal placeholder:text-muted-foreground/60"
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

        {/* Right Sidebar - Articles or Article Content (Desktop only) */}
        <motion.div
          className="hidden md:block border-l bg-background overflow-y-auto"
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
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCloseArticle}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to articles
                      </Button>
                    </div>

                    {/* Floating search bar */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        type="text"
                        placeholder="Search in article..."
                        value={articleContentSearchQuery}
                        onChange={(e) => setReadingContentSearchQuery(e.target.value)}
                        className="h-9 text-sm pl-9"
                      />
                    </div>
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

                      <ReadingContent content={selectedArticle.content} searchQuery={articleContentSearchQuery} />
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
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h2 className="font-semibold text-foreground">Related Articles</h2>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {articles.length}
                      </Badge>
                    </div>
                    <Input
                      type="text"
                      placeholder="Filter articles..."
                      value={articleSearchQuery}
                      onChange={(e) => setArticleSearchQuery(e.target.value)}
                      className="h-8 text-sm mb-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Read articles to help guide your responses
                    </p>
                  </div>

                  {loading ? (
                    <p className="text-sm text-muted-foreground">Loading articles...</p>
                  ) : filteredArticles.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      {articleSearchQuery.trim() ? 'No articles match your search' : 'No articles available'}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {filteredArticles.map((article, index) => (
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

      {/* Mobile Article Viewer */}
      {isMobile && selectedArticle && (
        <Drawer open={!!selectedArticle} onOpenChange={(open) => !open && handleCloseArticle()}>
          <DrawerContent className="max-h-[90vh]">
            <DrawerHeader>
              <div className="flex items-center justify-between mb-3">
                <DrawerTitle className="text-left">{selectedArticle.title}</DrawerTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseArticle}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              {/* Search bar for mobile */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Search in article..."
                  value={articleContentSearchQuery}
                  onChange={(e) => setReadingContentSearchQuery(e.target.value)}
                  className="h-9 text-sm pl-9"
                />
              </div>
            </DrawerHeader>
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              {loadingArticle ? (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Loading article...</p>
                </div>
              ) : (
                <ReadingContent content={selectedArticle.content} searchQuery={articleContentSearchQuery} />
              )}
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Mobile Drawer - Prompts & Articles */}
      {isMobile && (
        <Drawer open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              size="lg"
              className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 shadow-lg"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[85vh]">
          <DrawerHeader>
            <DrawerTitle>Browse</DrawerTitle>
          </DrawerHeader>

          <Tabs value={mobileDrawerTab} onValueChange={(v) => setMobileDrawerTab(v as 'prompts' | 'articles')} className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="prompts" className="gap-1.5">
                <FileText className="h-4 w-4" />
                <span>Prompts</span>
              </TabsTrigger>
              <TabsTrigger value="articles" className="gap-1.5">
                <BookOpen className="h-4 w-4" />
                <span>Articles</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="prompts" className="flex-1 overflow-y-auto px-4 mt-0">
              <div className="space-y-4 py-4">
                <Input
                  type="text"
                  placeholder="Filter prompts..."
                  value={promptSearchQuery}
                  onChange={(e) => setPromptSearchQuery(e.target.value)}
                  className="h-8 text-sm -mt-2"
                />
                <p className="text-xs text-muted-foreground -mt-2">
                  Select a prompt, write your answer, and see a checkmark appear
                </p>
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading prompts...</p>
                ) : categories.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {promptSearchQuery.trim() ? 'No prompts match your search' : 'No prompts available'}
                  </p>
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
                              {groupedPrompts[category].map((prompt) => (
                                <button
                                  key={prompt.id}
                                  onClick={() => {
                                    setSelectedPromptId(prompt.id);
                                    setMobileDrawerOpen(false);
                                  }}
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
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="articles" className="flex-1 overflow-y-auto px-4 mt-0">
              <div className="space-y-4 py-4">
                <Input
                  type="text"
                  placeholder="Filter articles..."
                  value={articleSearchQuery}
                  onChange={(e) => setArticleSearchQuery(e.target.value)}
                  className="h-8 text-sm -mt-2"
                />
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading articles...</p>
                ) : filteredArticles.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {articleSearchQuery.trim() ? 'No articles match your search' : 'No articles available for this template yet.'}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {filteredArticles.map((article) => (
                      <Card
                        key={article.id}
                        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-border"
                        onClick={() => {
                          handleArticleClick(article.id);
                          setMobileDrawerOpen(false);
                        }}
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
              </div>
            </TabsContent>
          </Tabs>
        </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
