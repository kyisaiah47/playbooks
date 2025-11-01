'use client';

import { Search, Plus, ChevronRight, ChevronDown, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageWithSubPages } from '@/types/workspace';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { useDemo } from '@/contexts/demo-context';

interface PagesSidebarContentProps {
  pages: PageWithSubPages[];
  activePageId: string | null;
  onPageClick: (pageId: string) => void;
}

export function PagesSidebarContent({
  pages,
  activePageId,
  onPageClick,
}: PagesSidebarContentProps) {
  const { demoMode } = useDemo();
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

  return (
    <>
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
      {!demoMode && (
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
      )}
    </>
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
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onPageClick(page.id);
        }}
        className={cn(
          "w-full flex items-center gap-1.5 rounded px-2 py-1.5 text-sm transition-colors group",
          isActive
            ? "bg-primary/10 text-primary"
            : "hover:bg-muted/50 text-foreground"
        )}
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        {hasSubPages && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
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
        {page.icon ? (
          <span className="shrink-0 text-base leading-none">{page.icon}</span>
        ) : (
          <FileText className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        )}
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
