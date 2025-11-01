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
import { ArticleContent } from '@/app/articles/[slug]/article-content';
import Link from 'next/link';
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

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  } | null;
}

const TEMPLATES_PER_LOAD = 50;

// Featured guides for demo mode
const FEATURED_GENERAL_IDS = [
  'wedding-planning',
  'job-search',
  'home-buying',
  'business-launch',
];

const FEATURED_GENZ_IDS = [
  'college-planning',
  'first-job-transition',
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

interface GuidesViewProps {
  trackId?: string;
  onViewChange?: (view: 'guides' | 'reflection' | 'overview') => void;
  setActions?: (actions: {
    openTemplateDropdown?: () => void;
    selectFirstPrompt?: () => void;
    openFirstArticle?: () => void;
  }) => void;
}

export function GuidesView({ trackId, onViewChange, setActions }: GuidesViewProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('wedding-planning');
  const [guides, setTemplates] = useState<Template[]>([]);
  const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);
  const [templateInfo, setTemplateInfo] = useState<{ id: string; name: string } | null>(null);
  const [questions, setPrompts] = useState<Prompt[]>([]);
  const [readings, setArticles] = useState<Article[]>([]);
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
  const [articleContentSearchQuery, setArticleContentSearchQuery] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [answeredPrompts, setAnsweredPrompts] = useState<Set<string>>(new Set());

  // Mobile drawer state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileDrawerTab, setMobileDrawerTab] = useState<'questions' | 'readings'>('questions');
  const [isMobile, setIsMobile] = useState(false);

  // Track state - when a trackId is provided, fetch the track and use its guide_id
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch track when trackId is provided
  useEffect(() => {
    if (!trackId) {
      setTrack(null);
      return;
    }

    async function fetchTrack() {
      try {
        const res = await fetch('/api/tracks?archived=false');
        if (!res.ok) {
          console.error('Failed to fetch tracks');
          return;
        }

        const data = await res.json();
        const tracks = data.tracks || [];
        const foundTrack = tracks.find((t: Track) => t.id === trackId);

        if (foundTrack) {
          setTrack(foundTrack);
          // Update selectedTemplate to the guide_id from the track
          if (foundTrack.guide_id) {
            setSelectedTemplate(foundTrack.guide_id);
          }
        } else {
          console.error('Track not found:', trackId);
        }
      } catch (error) {
        console.error('Error fetching track:', error);
      }
    }

    fetchTrack();
  }, [trackId]);

  // Set up actions for parent to call
  useEffect(() => {
    if (setActions) {
      setActions({
        openTemplateDropdown: () => {
          setOpen(true);
        },
        selectFirstPrompt: () => {
          if (questions.length > 0) {
            const groupedPrompts = questions.reduce((acc, prompt) => {
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
          if (readings.length > 0) {
            handleArticleClick(readings[0].id);
          }
        },
      });
    }
  }, [questions, readings, setActions]);

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
          const url = trackId
            ? `/api/answers?trackId=${trackId}`
            : `/api/answers?guideId=${selectedTemplate}`;
          const res = await fetch(url);
          const data = await res.json();

          if (data.answers) {
            const response = data.answers.find(
              (r: any) =>
                r.prompt_id === selectedPromptId
            );

            if (response) {
              setPromptResponse(response.answer || '');
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
              setPromptResponse(data.answer || '');
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
          await fetch('/api/answers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              guideId: selectedTemplate,
              questionId: selectedPromptId,
              answer: promptResponse,
            }),
          });
          setLastSaved(new Date());
        } else {
          // Save to localStorage
          const key = `workspace_${selectedTemplate}_${selectedPromptId}`;
          const data = {
            answer: promptResponse,
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

  // Fetch guides list
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/guides');
        const data = await res.json();
        const allTemplates = (data.guides || []).sort((a: Template, b: Template) =>
          a.name.localeCompare(b.name)
        );
        setTemplates(allTemplates);

        // Initially load first batch
        setDisplayedTemplates(allTemplates.slice(0, TEMPLATES_PER_LOAD));
        setHasMoreTemplates(allTemplates.length > TEMPLATES_PER_LOAD);
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    }
    fetchTemplates();
  }, []);

  // Load more guides
  const loadMoreTemplates = () => {
    if (!hasMoreTemplates) return;

    const currentLength = displayedTemplates.length;
    const nextBatch = guides.slice(currentLength, currentLength + TEMPLATES_PER_LOAD);

    if (nextBatch.length > 0) {
      setDisplayedTemplates(prev => [...prev, ...nextBatch]);
      setHasMoreTemplates(currentLength + nextBatch.length < guides.length);
    }
  };

  // Filter guides based on search
  const filteredTemplates = searchQuery.trim()
    ? guides.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : displayedTemplates;

  // Split into featured and regular guides (only when no search)
  // Always pull featured from full guides array to ensure they're included
  const showFeatured = !searchQuery.trim();
  const featuredGeneralTemplates = showFeatured
    ? guides.filter(t => FEATURED_GENERAL_IDS.includes(t.id))
    : [];
  const featuredGenZTemplates = showFeatured
    ? guides.filter(t => FEATURED_GENZ_IDS.includes(t.id))
    : [];
  const featuredHealthTemplates = showFeatured
    ? guides.filter(t => FEATURED_HEALTH_IDS.includes(t.id))
    : [];
  const regularTemplates = showFeatured
    ? filteredTemplates.filter(t => !FEATURED_TEMPLATE_IDS.includes(t.id))
    : filteredTemplates;

  // Fetch questions and readings when template changes
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Use track guide info if in track mode, otherwise find in guides array
        const template = track?.guides
          ? { id: track.guides.id, name: track.guides.name }
          : guides.find(t => t.id === selectedTemplate);

        if (template) {
          setTemplateInfo({ id: template.id, name: template.name });
        }

        const questionsRes = await fetch(`/api/guides/${selectedTemplate}/questions`);
        const questionsData = await questionsRes.json();
        const fetchedPrompts = questionsData.questions || [];
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

        const readingsRes = await fetch(`/api/guides/${selectedTemplate}/readings`);
        const readingsData = await readingsRes.json();
        setArticles(readingsData.readings || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    // Fetch data if we have guides loaded OR if we have a track (which provides the guide info)
    if (guides.length > 0 || track) {
      fetchData();
    }
  }, [selectedTemplate, guides, track]);

  // Check which questions have been answered
  useEffect(() => {
    async function checkAnsweredPrompts() {
      if (isAuthenticated === null || questions.length === 0) return;

      const answered = new Set<string>();

      if (isAuthenticated) {
        // Check API answers
        try {
          const res = await fetch(`/api/answers?guideId=${selectedTemplate}`);
          const data = await res.json();
          if (data.answers) {
            data.answers.forEach((r: any) => {
              if (r.answer && r.answer.trim().length > 0) {
                answered.add(r.prompt_id);
              }
            });
          }
        } catch (e) {
          console.error('Error checking answered questions:', e);
        }
      } else {
        // Check localStorage
        questions.forEach((prompt) => {
          const key = `workspace_${selectedTemplate}_${prompt.id}`;
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const data = JSON.parse(saved);
              if (data.answer && data.answer.trim().length > 0) {
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
  }, [selectedTemplate, questions, isAuthenticated, lastSaved, selectedPromptId, promptResponse]);

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
      const res = await fetch(`/api/readings/${articleId}`);
      const data = await res.json();

      setSelectedArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
    } finally {
      setLoadingArticle(false);
    }
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    setArticleContentSearchQuery(''); // Clear search when closing article
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
          await fetch('/api/answers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              guideId: selectedTemplate,
              questionId: selectedPromptId,
              answer: promptResponse,
            }),
          });
          setLastSaved(new Date());
        } else {
          // Save to localStorage
          const key = `workspace_${selectedTemplate}_${selectedPromptId}`;
          const data = {
            answer: promptResponse,
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

  // Filter questions based on search query
  const filteredPrompts = promptSearchQuery.trim()
    ? questions.filter(p =>
        p.prompt.toLowerCase().includes(promptSearchQuery.toLowerCase()) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(promptSearchQuery.toLowerCase()))
      )
    : questions;

  const groupedPrompts = filteredPrompts.reduce((acc, prompt) => {
    const category = prompt.categoryName || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  const categories = Object.keys(groupedPrompts).sort();
  const selectedPrompt = questions.find(p => p.id === selectedPromptId);

  // Auto-expand all categories when filtering
  useEffect(() => {
    if (promptSearchQuery.trim()) {
      // Expand all categories when searching
      setCollapsedCategories(new Set());
    } else {
      // Collapse all categories when filter is cleared
      const allCategories = Object.keys(questions.reduce((acc, prompt) => {
        const category = prompt.categoryName || 'General';
        acc[category] = true;
        return acc;
      }, {} as Record<string, boolean>));
      setCollapsedCategories(new Set(allCategories));
    }
  }, [promptSearchQuery, questions]);

  // Filter readings based on search query
  const filteredArticles = articleSearchQuery.trim()
    ? readings.filter(a =>
        a.title.toLowerCase().includes(articleSearchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(articleSearchQuery.toLowerCase())
      )
    : readings;

  // Browse mode - no track selected
  if (!trackId) {
    return (
      <div className="h-full flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-4">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <h2 className="text-2xl font-semibold mb-2">Select a Track to Begin</h2>
          <p className="text-muted-foreground mb-6">
            Choose one or more tracks from the dropdown above to start working on your guides.
          </p>
          <p className="text-sm text-muted-foreground">
            Don't have any tracks yet? Create one by clicking the track selector.
          </p>
        </div>
      </div>
    );
  }

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
                  {questions.length}
                </Badge>
              </div>
              <Input
                type="text"
                placeholder="Filter questions..."
                value={promptSearchQuery}
                onChange={(e) => setPromptSearchQuery(e.target.value)}
                className="h-8 text-sm mb-2"
              />
              <p className="text-xs text-muted-foreground">
                Select a prompt, write your answer, and see a checkmark appear
              </p>
            </div>

            {loading ? (
              <p className="text-sm text-muted-foreground">Loading questions...</p>
            ) : categories.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {promptSearchQuery.trim() ? 'No questions match your search' : 'No questions available'}
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
                        Back to readings
                      </Button>
                    </div>

                    {/* Floating search bar */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        type="text"
                        placeholder="Search in article..."
                        value={articleContentSearchQuery}
                        onChange={(e) => setArticleContentSearchQuery(e.target.value)}
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
                          <span>{selectedArticle.readTime} min read</span>
                          <span>•</span>
                          <span>{new Date(selectedArticle.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </header>

                      <ArticleContent content={selectedArticle.content} searchQuery={articleContentSearchQuery} />
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
                        {readings.length}
                      </Badge>
                    </div>
                    <Input
                      type="text"
                      placeholder="Filter readings..."
                      value={articleSearchQuery}
                      onChange={(e) => setArticleSearchQuery(e.target.value)}
                      className="h-8 text-sm mb-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Read readings to help guide your answers
                    </p>
                  </div>

                  {loading ? (
                    <p className="text-sm text-muted-foreground">Loading readings...</p>
                  ) : filteredArticles.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      {articleSearchQuery.trim() ? 'No readings match your search' : 'No readings available'}
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
                              <span>{article.readTime} min read</span>
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
                <span>{selectedArticle.readTime} min read</span>
              </div>
              {/* Search bar for mobile */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Search in article..."
                  value={articleContentSearchQuery}
                  onChange={(e) => setArticleContentSearchQuery(e.target.value)}
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
                <ArticleContent content={selectedArticle.content} searchQuery={articleContentSearchQuery} />
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

          <Tabs value={mobileDrawerTab} onValueChange={(v) => setMobileDrawerTab(v as 'questions' | 'readings')} className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="questions" className="gap-1.5">
                <FileText className="h-4 w-4" />
                <span>Prompts</span>
              </TabsTrigger>
              <TabsTrigger value="readings" className="gap-1.5">
                <BookOpen className="h-4 w-4" />
                <span>Articles</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="flex-1 overflow-y-auto px-4 mt-0">
              <div className="space-y-4 py-4">
                <Input
                  type="text"
                  placeholder="Filter questions..."
                  value={promptSearchQuery}
                  onChange={(e) => setPromptSearchQuery(e.target.value)}
                  className="h-8 text-sm -mt-2"
                />
                <p className="text-xs text-muted-foreground -mt-2">
                  Select a prompt, write your answer, and see a checkmark appear
                </p>
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading questions...</p>
                ) : categories.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {promptSearchQuery.trim() ? 'No questions match your search' : 'No questions available'}
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

            <TabsContent value="readings" className="flex-1 overflow-y-auto px-4 mt-0">
              <div className="space-y-4 py-4">
                <Input
                  type="text"
                  placeholder="Filter readings..."
                  value={articleSearchQuery}
                  onChange={(e) => setArticleSearchQuery(e.target.value)}
                  className="h-8 text-sm -mt-2"
                />
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading readings...</p>
                ) : filteredArticles.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {articleSearchQuery.trim() ? 'No readings match your search' : 'No readings available for this template yet.'}
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
                          <span>{article.readTime} min read</span>
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
