'use client';

import { X, PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tab } from '@/types/workspace';

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string | null;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function TabBar({ tabs, activeTabId, onTabClick, onTabClose, sidebarOpen, onToggleSidebar }: TabBarProps) {
  if (tabs.length === 0) return null;

  return (
    <div className="h-10 border-b border-border/40 bg-background flex items-center gap-px overflow-x-auto">
      {/* Sidebar Toggle Button */}
      <button
        onClick={onToggleSidebar}
        className="h-full px-3 border-r border-border/40 hover:bg-muted/30 transition-colors shrink-0"
        title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {sidebarOpen ? (
          <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
        ) : (
          <PanelLeftOpen className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* Tabs */}
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <div
            key={tab.id}
            className={cn(
              "group h-full min-w-32 max-w-48 flex items-center gap-2 px-3 border-r border-border/40 cursor-pointer transition-colors",
              isActive
                ? 'bg-muted/50'
                : 'hover:bg-muted/30'
            )}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.icon && <span className="text-sm">{tab.icon}</span>}
            <span className="text-xs font-medium truncate flex-1">
              {tab.label}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
