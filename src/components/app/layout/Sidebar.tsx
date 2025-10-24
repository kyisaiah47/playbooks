'use client';

import { useRouter } from 'next/navigation';
import { Search, Plus, ChevronRight, ChevronDown, X, PanelLeftOpen, FileText, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageWithSubPages, Workspace } from '@/types/workspace';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WorkspaceSwitcher } from './WorkspaceSwitcher';
import { useState } from 'react';

interface SidebarProps {
  workspace: Workspace;
  workspaces?: Workspace[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  children?: React.ReactNode; // Dynamic content for different views
}

export function Sidebar({
  workspace,
  workspaces = [],
  sidebarOpen,
  setSidebarOpen,
  children,
}: SidebarProps) {
  const router = useRouter();

  if (!sidebarOpen) {
    return null;
  }

  return (
    <div className="w-64 border-r border-border/40 bg-background flex flex-col">
      {/* Workspace Switcher */}
      <div className="px-3 py-2.5 border-b border-border/40">
        <WorkspaceSwitcher
          workspaces={workspaces}
          currentWorkspaceId={workspace.id}
          onWorkspaceChange={(id) => {
            router.push(`/app/${id}`);
          }}
        />
      </div>

      {/* Dynamic content from children */}
      {children}
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
