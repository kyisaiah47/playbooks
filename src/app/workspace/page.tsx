'use client';

import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, User, Zap, FileText, Lightbulb, BookOpen, ChevronDown } from 'lucide-react';
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
  const { unlockData, loading: unlockLoading } = useUserUnlocks();

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
        .insertPrompt({
          id: promptToInsert.id,
          text: promptToInsert.prompt,
          category: promptToInsert.categoryName || 'General',
        })
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
        .insertPrompt({
          id: prompt.id,
          text: prompt.prompt,
          category: prompt.categoryName || 'General',
        })
        .run();
    }
  };

  const handleOpenArticle = (article: Article) => {
    setOpenArticle(article);
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
      <header className="flex h-16 items-center justify-between px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="px-3 py-1.5 text-sm font-semibold">
            <Zap className="h-4 w-4 mr-2" />
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

        {/* Middle - Quick access dropdowns */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Templates Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {selectedTemplate ? selectedTemplateName : 'Templates'}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 max-h-[400px] overflow-y-auto">
              {categories.map((category) => (
                <DropdownMenuSub key={category}>
                  <DropdownMenuSubTrigger>{category}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="max-h-[300px] overflow-y-auto">
                    {groupedTemplates[category].map((template) => (
                      <DropdownMenuItem
                        key={template.id}
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        {template.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Prompts Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                disabled={!selectedTemplate}
              >
                <Lightbulb className="h-4 w-4" />
                Prompts
                {selectedTemplate && <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">{templatePrompts.length}</Badge>}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80 max-h-[400px] overflow-y-auto">
              {loadingContent ? (
                <div className="p-4 text-center text-sm text-muted-foreground">Loading prompts...</div>
              ) : templatePrompts.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  {selectedTemplate ? 'No prompts available' : 'Select a template first'}
                </div>
              ) : (
                promptCategories.map((category) => (
                  <DropdownMenuSub key={category}>
                    <DropdownMenuSubTrigger>
                      {category}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-80 max-h-[300px] overflow-y-auto">
                      {groupedPrompts[category].map((prompt) => (
                        <DropdownMenuItem
                          key={prompt.id}
                          onClick={() => handleInsertPrompt(prompt)}
                          className="cursor-pointer"
                        >
                          <span className="text-sm line-clamp-2">{prompt.prompt}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Articles Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                disabled={!selectedTemplate}
              >
                <BookOpen className="h-4 w-4" />
                Articles
                {selectedTemplate && <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">{templateArticles.length}</Badge>}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80 max-h-[400px] overflow-y-auto">
              {loadingContent ? (
                <div className="p-4 text-center text-sm text-muted-foreground">Loading articles...</div>
              ) : templateArticles.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  {selectedTemplate ? 'No articles available' : 'Select a template first'}
                </div>
              ) : (
                templateArticles.map((article) => (
                  <DropdownMenuItem
                    key={article.id}
                    onClick={() => handleOpenArticle(article)}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium line-clamp-1">{article.title}</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline text-muted-foreground text-sm">
              ⌘K
            </span>
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Editor - Full width with centered content */}
        <div className="w-full flex flex-col">
          <div className="flex-1 overflow-y-auto">
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

        {/* Article Panel - Fixed in side margin */}
        {openArticle && (
          <div className="fixed right-0 top-16 bottom-0 w-96 flex flex-col border-l bg-background shadow-2xl z-20">
            <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur flex-shrink-0">
              <h2 className="text-sm font-semibold truncate">{openArticle.title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseArticle}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6 prose prose-sm prose-neutral dark:prose-invert max-w-none">
                <p className="text-xs text-muted-foreground mb-4">
                  {openArticle.readTime} • {openArticle.excerpt}
                </p>
                <div dangerouslySetInnerHTML={{ __html: openArticle.content || 'Article content loading...' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
