'use client';

import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Search, X, User, Zap, FileText, Lightbulb, BookOpen, ChevronDown, ZoomIn, ZoomOut, MoreHorizontal, Type, Maximize2, Download, Copy, Trash2, Palette, Check, PanelLeft, Home, Clock, Settings, ChevronRight } from 'lucide-react';
import { useUserUnlocks } from '@/contexts/UserUnlockContext';
import { CommandPalette } from '@/components/command-palette';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { templateRegistry } from '@/registry/templates';
import { ArticleContent } from '@/app/articles/[slug]/article-content';
import { useCustomTheme } from '@/components/theme-provider-custom';
import { themes } from '@/lib/themes';

// Lazy load editor
const SimpleEditor = lazy(() => import('@/components/tiptap-templates/simple/simple-editor').then(mod => ({ default: mod.SimpleEditor })));

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  readTime: string;
}

interface Prompt {
  id: string;
  prompt: string;
  categoryName: string;
}

export default function WorkspacePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [promptToInsert, setPromptToInsert] = useState<any>(null);
  const [currentWorkspace, setCurrentWorkspace] = useState('Untitled');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templatePrompts, setTemplatePrompts] = useState<Prompt[]>([]);
  const [templateArticles, setTemplateArticles] = useState<Article[]>([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const [articleFontSize, setArticleFontSize] = useState(100); // percentage
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pageTitle, setPageTitle] = useState('Untitled');
  const [pageIcon, setPageIcon] = useState('📝');
  const [showCover, setShowCover] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [templatesExpanded, setTemplatesExpanded] = useState(false);
  const [promptsExpanded, setPromptsExpanded] = useState(false);
  const [articlesExpanded, setArticlesExpanded] = useState(false);
  const { unlockData, loading: unlockLoading } = useUserUnlocks();
  const { currentTheme, setTheme: setCustomTheme } = useCustomTheme();

  // Check for prompt/article to insert from sessionStorage
  useEffect(() => {
    const insertPromptData = sessionStorage.getItem('workspace-insert-prompt');
    const openArticleData = sessionStorage.getItem('workspace-open-article');

    if (insertPromptData) {
      try {
        const prompt = JSON.parse(insertPromptData);
        setPromptToInsert(prompt);
        sessionStorage.removeItem('workspace-insert-prompt');
      } catch (error) {
        console.error('Error parsing prompt data:', error);
      }
    }

    if (openArticleData) {
      try {
        const article = JSON.parse(openArticleData);
        setOpenArticle(article);
        sessionStorage.removeItem('workspace-open-article');
      } catch (error) {
        console.error('Error parsing article data:', error);
      }
    }
  }, []);

  // Insert prompt into editor when promptToInsert changes
  useEffect(() => {
    if (promptToInsert && (window as any).templateEditor) {
      (window as any).templateEditor
        .chain()
        .focus()
        .insertContent([
          {
            type: 'blockquote',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: promptToInsert.prompt }]
              }
            ]
          },
          {
            type: 'paragraph',
            content: []
          }
        ])
        .run();

      setPromptToInsert(null);
    }
  }, [promptToInsert]);

  // Command palette keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandPaletteOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Auto-hide header on scroll
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const currentScrollY = target.scrollTop;

      if (currentScrollY < 50) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const editorContainer = document.querySelector('.editor-scroll-container');
    if (editorContainer) {
      editorContainer.addEventListener('scroll', handleScroll);
      return () => editorContainer.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  // Fetch template content when template is selected
  useEffect(() => {
    if (!selectedTemplate) {
      setTemplatePrompts([]);
      setTemplateArticles([]);
      return;
    }

    async function fetchTemplateContent() {
      setLoadingContent(true);
      try {
        // Fetch prompts
        const promptsRes = await fetch(`/api/prompts?templateId=${selectedTemplate}`);
        const promptsData = await promptsRes.json();
        setTemplatePrompts(promptsData.prompts || []);

        // Fetch articles
        const articlesRes = await fetch(`/api/articles?template=${selectedTemplate}&pageSize=1000`);
        const articlesData = await articlesRes.json();
        setTemplateArticles(articlesData.articles || []);
      } catch (error) {
        console.error('Error fetching template content:', error);
      } finally {
        setLoadingContent(false);
      }
    }

    fetchTemplateContent();
  }, [selectedTemplate]);

  // Group templates by category
  const groupedTemplates = useMemo(() => {
    const grouped: Record<string, typeof templateRegistry> = {};
    templateRegistry.forEach(template => {
      if (!grouped[template.category]) {
        grouped[template.category] = [];
      }
      grouped[template.category].push(template);
    });
    return grouped;
  }, []);

  const categories = Object.keys(groupedTemplates).sort();

  const selectedTemplateName = useMemo(() => {
    const template = templateRegistry.find(t => t.id === selectedTemplate);
    return template?.name || 'Select Template';
  }, [selectedTemplate]);

  // Group prompts by category
  const groupedPrompts = useMemo(() => {
    const grouped: Record<string, Prompt[]> = {};
    templatePrompts.forEach(prompt => {
      const category = prompt.categoryName || 'General';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(prompt);
    });
    return grouped;
  }, [templatePrompts]);

  const promptCategories = Object.keys(groupedPrompts).sort();

  const handleCloseArticle = () => {
    setOpenArticle(null);
  };

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleInsertPrompt = (prompt: Prompt) => {
    if ((window as any).templateEditor) {
      (window as any).templateEditor
        .chain()
        .focus()
        .insertContent([
          {
            type: 'blockquote',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: prompt.prompt }]
              }
            ]
          },
          {
            type: 'paragraph',
            content: []
          }
        ])
        .run();
    }
  };

  const handleOpenArticle = async (article: Article) => {
    // Set article with loading state
    setOpenArticle({ ...article, content: '' });

    // Fetch full article content
    try {
      const response = await fetch(`/api/articles?id=${article.id}`);
      const data = await response.json();
      setOpenArticle({ ...article, content: data.article?.content || '' });
    } catch (error) {
      console.error('Error fetching article content:', error);
      setOpenArticle({ ...article, content: '<p>Failed to load article content.</p>' });
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground">
      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        mode="life-os-mode"
      />

      {/* Top Bar */}
      <header
        className="flex h-10 items-center justify-between px-4 bg-background/80 backdrop-blur z-10 transition-transform duration-300 fixed top-0 left-0 right-0 border-b border-border text-sm"
        style={{ transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-accent"
          >
            <PanelLeft className="h-4 w-4" />
          </Button>

          <Badge variant="outline" className="px-2 py-0.5 text-xs font-semibold">
            <Zap className="h-3 w-3 mr-1" />
            Life OS
          </Badge>

          {/* Workspace Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">{currentWorkspace}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setCurrentWorkspace('Untitled')}>
                Untitled
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentWorkspace('New Workspace')}>
                + New Workspace
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>


        {/* Right side */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-1 hover:bg-accent h-7 px-2"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-muted-foreground text-xs">
              ⌘K
            </span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="hover:bg-accent">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-popover">
              <div className="flex items-center justify-between px-2 py-1.5">
                <span className="text-sm">Full width</span>
                <Switch checked={isFullWidth} onCheckedChange={setIsFullWidth} />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Palette className="h-4 w-4 mr-2" />
                  Theme
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-popover">
                  {themes.map((themeOption) => {
                    const currentThemeInfo = themes.find(t =>
                      JSON.stringify(t.colors.dark) === JSON.stringify(currentTheme)
                    ) || themes[0];

                    return (
                      <DropdownMenuItem
                        key={themeOption.id}
                        onClick={() => setCustomTheme(themeOption.colors.dark)}
                        className="flex items-center gap-3"
                      >
                        <span className="flex-1">{themeOption.name}</span>
                        {currentThemeInfo.id === themeOption.id && (
                          <Check className="h-3 w-3" />
                        )}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Type className="h-4 w-4 mr-2" />
                Font style
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="h-4 w-4 mr-2" />
                Duplicate workspace
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" />
                Export
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-400">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete workspace
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative bg-muted/20 pt-10">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-0'
          } flex-shrink-0 border-r border-border bg-sidebar transition-all duration-300 overflow-hidden`}
        >
          <div className="h-full flex flex-col p-2">
            {/* Navigation Items */}
            <div className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start gap-2 hover:bg-sidebar-accent">
                <Home className="h-4 w-4" />
                <span className="text-sm">Home</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2 hover:bg-sidebar-accent">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Recent</span>
              </Button>
            </div>

            {/* Divider */}
            <div className="h-px bg-sidebar-border my-2" />

            {/* Templates Section */}
            <div className="flex flex-col">
              <button
                onClick={() => setTemplatesExpanded(!templatesExpanded)}
                className="flex items-center justify-between px-2 py-1.5 text-sm hover:bg-sidebar-accent rounded-sm transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Templates</span>
                </div>
                <ChevronRight className={`h-3 w-3 transition-transform ${templatesExpanded ? 'rotate-90' : ''}`} />
              </button>

              {templatesExpanded && (
                <div className="flex flex-col pl-6 mt-1 max-h-60 overflow-y-auto scrollbar-none">
                  {categories.map((category) => (
                    <div key={category} className="mb-2">
                      <div className="text-xs text-sidebar-foreground/50 px-2 py-1">{category}</div>
                      {groupedTemplates[category].map((template) => (
                        <button
                          key={template.id}
                          onClick={() => {
                            handleSelectTemplate(template.id);
                            setPromptsExpanded(true);
                            setArticlesExpanded(true);
                          }}
                          className={`text-xs px-2 py-1 rounded-sm w-full text-left hover:bg-sidebar-accent transition-colors ${
                            selectedTemplate === template.id ? 'bg-sidebar-accent' : ''
                          }`}
                        >
                          {template.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Prompts Section */}
            {selectedTemplate && (
              <div className="flex flex-col">
                <button
                  onClick={() => setPromptsExpanded(!promptsExpanded)}
                  className="flex items-center justify-between px-2 py-1.5 text-sm hover:bg-sidebar-accent rounded-sm transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    <span>Prompts</span>
                    <Badge variant="secondary" className="h-4 px-1 text-xs bg-accent/50 text-accent-foreground border-accent">
                      {templatePrompts.length}
                    </Badge>
                  </div>
                  <ChevronRight className={`h-3 w-3 transition-transform ${promptsExpanded ? 'rotate-90' : ''}`} />
                </button>

                {promptsExpanded && (
                  <div className="flex flex-col pl-6 mt-1 max-h-60 overflow-y-auto scrollbar-none">
                    {loadingContent ? (
                      <div className="text-xs text-sidebar-foreground/50 px-2 py-2">Loading...</div>
                    ) : templatePrompts.length === 0 ? (
                      <div className="text-xs text-sidebar-foreground/50 px-2 py-2">No prompts</div>
                    ) : (
                      promptCategories.map((category) => (
                        <div key={category} className="mb-2">
                          <div className="text-xs text-sidebar-foreground/50 px-2 py-1">{category}</div>
                          {groupedPrompts[category].map((prompt) => (
                            <button
                              key={prompt.id}
                              onClick={() => handleInsertPrompt(prompt)}
                              className="text-xs px-2 py-1 rounded-sm w-full text-left hover:bg-sidebar-accent transition-colors line-clamp-2"
                            >
                              {prompt.prompt}
                            </button>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Articles Section */}
            {selectedTemplate && (
              <div className="flex flex-col">
                <button
                  onClick={() => setArticlesExpanded(!articlesExpanded)}
                  className="flex items-center justify-between px-2 py-1.5 text-sm hover:bg-sidebar-accent rounded-sm transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Articles</span>
                    <Badge variant="secondary" className="h-4 px-1 text-xs bg-accent/50 text-accent-foreground border-accent">
                      {templateArticles.length}
                    </Badge>
                  </div>
                  <ChevronRight className={`h-3 w-3 transition-transform ${articlesExpanded ? 'rotate-90' : ''}`} />
                </button>

                {articlesExpanded && (
                  <div className="flex flex-col pl-6 mt-1 max-h-60 overflow-y-auto scrollbar-none">
                    {loadingContent ? (
                      <div className="text-xs text-sidebar-foreground/50 px-2 py-2">Loading...</div>
                    ) : templateArticles.length === 0 ? (
                      <div className="text-xs text-sidebar-foreground/50 px-2 py-2">No articles</div>
                    ) : (
                      templateArticles.map((article) => (
                        <button
                          key={article.id}
                          onClick={() => handleOpenArticle(article)}
                          className="text-xs px-2 py-1.5 rounded-sm w-full text-left hover:bg-sidebar-accent transition-colors"
                        >
                          <div className="line-clamp-1 font-medium">{article.title}</div>
                          <div className="text-sidebar-foreground/50 text-xs mt-0.5">{article.readTime}</div>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Editor - Clean centered content */}
        <div className="w-full flex flex-col items-center flex-1">
          <div className={`overflow-y-auto editor-scroll-container w-full ${isFullWidth ? 'max-w-full' : 'max-w-[900px]'}`}>

            {/* Cover Photo */}
            {showCover && (
              <div className="relative h-52 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 group">
                <button
                  onClick={() => setShowCover(false)}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white/70 hover:text-white bg-black/20 hover:bg-black/40 px-2 py-1 rounded"
                >
                  Remove cover
                </button>
              </div>
            )}

            {/* Page Header */}
            <div className={`pt-24 pb-4 ${isFullWidth ? 'px-24' : 'px-24'}`}>
              {/* Icon + Add Cover */}
              <div className="flex items-center gap-2 mb-2">
                <button className="text-6xl hover:bg-accent rounded p-1 transition-colors">
                  {pageIcon}
                </button>
                {!showCover && (
                  <button
                    onClick={() => setShowCover(true)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Add cover
                  </button>
                )}
              </div>

              {/* Page Title */}
              <input
                type="text"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                placeholder="Untitled"
                className="text-5xl font-bold bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground/30 mb-1 -ml-0.5"
              />

              {/* Metadata */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span>Last edited just now</span>
              </div>
            </div>

            {/* Editor Content */}
            <div className={`pb-40 ${isFullWidth ? 'px-24' : 'px-24'}`}>
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="text-muted-foreground">Loading editor...</div>
                </div>
              }>
                <SimpleEditor
                  content=""
                  templateId="life-os"
                  onUpdate={(content) => {
                    // Auto-save to localStorage
                    localStorage.setItem('life-os-content', content);
                  }}
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Article Card - Floating in right margin */}
        {openArticle && (
          <div className="fixed right-8 top-24 w-96 max-h-[calc(100vh-12rem)] overflow-y-auto overflow-x-hidden bg-popover/60 backdrop-blur-xl rounded-lg shadow-lg z-20 border border-border">
            <div className="sticky top-0 bg-popover/80 px-6 pt-6 pb-4 z-10 border-b border-border">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {openArticle.readTime}
                </Badge>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => setArticleFontSize(prev => Math.max(50, prev - 10))}
                  >
                    <ZoomOut className="h-3 w-3" />
                  </Button>
                  <span className="text-xs text-muted-foreground w-10 text-center">{articleFontSize}%</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => setArticleFontSize(prev => Math.min(200, prev + 10))}
                  >
                    <ZoomIn className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={handleCloseArticle}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-6" style={{ zoom: `${articleFontSize}%` }}>
              {openArticle.content ? (
                <ArticleContent content={openArticle.content} />
              ) : (
                <p className="text-muted-foreground text-sm">Article content loading...</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
