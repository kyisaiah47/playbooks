'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, User, Zap } from 'lucide-react';
import { useUserUnlocks } from '@/contexts/UserUnlockContext';
import { CommandPalette } from '@/components/command-palette';

// Lazy load editor
const SimpleEditor = lazy(() => import('@/components/tiptap-templates/simple/simple-editor').then(mod => ({ default: mod.SimpleEditor })));

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  readTime: string;
}

export default function WorkspacePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [promptToInsert, setPromptToInsert] = useState<any>(null);
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
      <header className="flex h-16 items-center justify-between px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="px-3 py-1.5 text-sm font-semibold">
            <Zap className="h-4 w-4 mr-2" />
            Life OS
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline text-muted-foreground text-sm">
              Search (⌘K)
            </span>
          </Button>

          {/* MVP: Hide unlock status - everything is free */}
          {/* <Badge variant="outline" className="px-3 py-1">
            {getUnlockStatusText()}
          </Badge> */}

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor - Full width or 50% when article is open */}
        <div className={`${openArticle ? 'w-1/2' : 'w-full'} flex flex-col transition-all duration-300`}>
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

        {/* Article Panel - Slides in from right */}
        {openArticle && (
          <div className="w-1/2 flex flex-col border-l bg-muted/20">
            <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur flex-shrink-0">
              <h2 className="text-lg font-semibold truncate">{openArticle.title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseArticle}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto p-8 prose prose-neutral dark:prose-invert">
                <p className="text-sm text-muted-foreground mb-4">
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
