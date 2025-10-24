'use client';

import { Search, Plus, ChevronRight, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageWithSubPages, Workspace } from '@/types/workspace';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

interface SidebarProps {
  workspace: Workspace;
  pages: PageWithSubPages[];
  activePageId: string | null;
  onPageClick: (pageId: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({
  workspace,
  pages,
  activePageId,
  onPageClick,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set());

  const togglePageExpanded = (pageId: string) => {
    const newExpanded = new Set(expandedPages);
    if (newExpanded.has(pageId)) {
      newExpanded.delete(pageId);
    } else {
      newExpanded.add(pageId);
    }
    setExpandedPages(newExpanded);
  };

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!sidebarOpen) {
    return null;
  }

  return (
    <div className="w-52 border-r border-border/40 bg-background flex flex-col">
      {/* Workspace Header */}
      <div className="px-3 py-2.5 border-b border-border/40 flex items-center justify-between">
        <button
          className="flex items-center gap-2 flex-1 min-w-0 hover:bg-muted/50 rounded px-2 py-1.5 transition-colors"
          onClick={() => {}}
        >
          <span className="text-lg shrink-0">{workspace.icon || '📁'}</span>
          <span className="font-medium text-sm truncate">{workspace.name}</span>
        </button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setSidebarOpen(false)}
          className="shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-8 text-sm"
          />
        </div>
      </div>

      {/* Pages List */}
      <ScrollArea className="flex-1">
        <div className="px-2 py-1">
          {filteredPages.map((page) => (
            <PageItem
              key={page.id}
              page={page}
              activePageId={activePageId}
              onPageClick={onPageClick}
              expanded={expandedPages.has(page.id)}
              onToggleExpanded={togglePageExpanded}
              level={0}
            />
          ))}
        </div>
      </ScrollArea>

      {/* New Page Button */}
      <div className="px-2 py-2 border-t border-border/40">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2"
          onClick={() => {}}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Page</span>
        </Button>
      </div>
    </div>
  );
}

interface PageItemProps {
  page: PageWithSubPages;
  activePageId: string | null;
  onPageClick: (pageId: string) => void;
  expanded: boolean;
  onToggleExpanded: (pageId: string) => void;
  level: number;
}

function PageItem({
  page,
  activePageId,
  onPageClick,
  expanded,
  onToggleExpanded,
  level,
}: PageItemProps) {
  const isActive = activePageId === page.id;
  const hasSubPages = page.subPages && page.subPages.length > 0;
  const paddingLeft = level * 12 + 8; // 12px per level + 8px base

  return (
    <div>
      <button
        onClick={() => onPageClick(page.id)}
        className={cn(
          "w-full flex items-center gap-1.5 rounded px-2 py-1.5 text-sm transition-colors group",
          isActive
            ? "bg-[#6366f1]/10 text-[#6366f1]"
            : "hover:bg-muted/50 text-foreground"
        )}
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        {hasSubPages && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpanded(page.id);
            }}
            className="shrink-0 hover:bg-muted/80 rounded p-0.5 transition-colors"
          >
            {expanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </button>
        )}
        {!hasSubPages && <div className="w-4" />}
        <span className="shrink-0 text-base leading-none">{page.icon || '📄'}</span>
        <span className="truncate flex-1 text-left">{page.name}</span>
      </button>

      {/* Sub-pages */}
      {hasSubPages && expanded && (
        <div>
          {page.subPages.map((subPage) => (
            <PageItem
              key={subPage.id}
              page={{ ...subPage, subPages: [] }}
              activePageId={activePageId}
              onPageClick={onPageClick}
              expanded={false}
              onToggleExpanded={onToggleExpanded}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
