'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
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
} from '@/components/ui/dropdown-menu';

// Lazy load editor
const SimpleEditor = lazy(() => import('@/components/tiptap-templates/simple/simple-editor').then(mod => ({ default: mod.SimpleEditor })));

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  readTime: string;
}

type PanelType = 'templates' | 'prompts' | 'articles' | null;

export default function WorkspacePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [promptToInsert, setPromptToInsert] = useState<any>(null);
  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const [currentWorkspace, setCurrentWorkspace] = useState('Untitled');
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

  const handleCloseArticle = () => {
    setOpenArticle(null);
  };

  // Get unlock status text
  const getUnlockStatusText = () => {
    if (unlockLoading) return 'Loading...';
    if (!unlockData) return '';

    if (unlockData.hasUnlimitedAccess) {
      return 'Unlimited ∞';
    }

    const used = unlockData.unlockedTemplates.length;
    return `${used}/3 unlocked`;
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

        {/* Middle - Quick access */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant={activePanel === 'templates' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setActivePanel(activePanel === 'templates' ? null : 'templates')}
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Templates
          </Button>
          <Button
            variant={activePanel === 'prompts' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setActivePanel(activePanel === 'prompts' ? null : 'prompts')}
            className="flex items-center gap-2"
          >
            <Lightbulb className="h-4 w-4" />
            Prompts
          </Button>
          <Button
            variant={activePanel === 'articles' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setActivePanel(activePanel === 'articles' ? null : 'articles')}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Articles
          </Button>
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
      <div className="flex flex-1 overflow-hidden">
        {/* Editor - Full width or 50% when panel is open */}
        <div className={`${(openArticle || activePanel) ? 'w-1/2' : 'w-full'} flex flex-col transition-all duration-300`}>
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

        {/* Right Panel - Templates/Prompts/Articles or Article */}
        {(openArticle || activePanel) && (
          <div className="w-1/2 flex flex-col border-l bg-muted/20">
            {/* Panel Header */}
            <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur flex-shrink-0">
              <h2 className="text-lg font-semibold">
                {openArticle ? openArticle.title :
                 activePanel === 'templates' ? 'Browse Templates' :
                 activePanel === 'prompts' ? 'Browse Prompts' :
                 activePanel === 'articles' ? 'Browse Articles' : ''}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setOpenArticle(null);
                  setActivePanel(null);
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Panel Content */}
            <div className="flex-1 overflow-y-auto">
              {openArticle && (
                <div className="max-w-3xl mx-auto p-8 prose prose-neutral dark:prose-invert">
                  <p className="text-sm text-muted-foreground mb-4">
                    {openArticle.readTime} • {openArticle.excerpt}
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: openArticle.content || 'Article content loading...' }} />
                </div>
              )}

              {activePanel === 'templates' && (
                <div className="p-6">
                  <p className="text-muted-foreground">Templates panel - Coming soon</p>
                </div>
              )}

              {activePanel === 'prompts' && (
                <div className="p-6">
                  <p className="text-muted-foreground">Prompts panel - Coming soon</p>
                </div>
              )}

              {activePanel === 'articles' && (
                <div className="p-6">
                  <p className="text-muted-foreground">Articles panel - Coming soon</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
