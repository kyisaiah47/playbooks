'use client';

import {
  FileText,
  Compass,
  Library,
  Calendar,
  ListTodo,
  BarChart3,
  CalendarDays,
  PenLine,
  Network,
  LayoutDashboard,
  TrendingUp,
  Archive,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TabType } from '@/types/workspace';

interface IconBarProps {
  activeView: TabType;
  onViewClick: (view: TabType) => void;
}

const ICON_VIEWS: { type: TabType; icon: any; label: string }[] = [
  { type: 'guide', icon: FileText, label: 'Guides' },
  { type: 'discover', icon: Compass, label: 'Discover' },
  { type: 'library', icon: Library, label: 'Library' },
  { type: 'calendar', icon: Calendar, label: 'Calendar' },
  { type: 'tasks', icon: ListTodo, label: 'Tasks' },
  { type: 'timeline', icon: BarChart3, label: 'Timeline' },
  { type: 'daily', icon: CalendarDays, label: 'Daily' },
  { type: 'journal', icon: PenLine, label: 'Journal' },
  { type: 'graph', icon: Network, label: 'Graph' },
  { type: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { type: 'analytics', icon: TrendingUp, label: 'Analytics' },
  { type: 'archive', icon: Archive, label: 'Archive' },
  { type: 'settings', icon: Settings, label: 'Settings' },
];

export function IconBar({ activeView, onViewClick }: IconBarProps) {
  let lastWasDivider = false;

  return (
    <div className="w-9 border-r border-border/40 bg-muted/10 flex flex-col items-center py-1.5 gap-0.5">
      {ICON_VIEWS.map((view, index) => {
        const Icon = view.icon;
        const isActive = activeView === view.type;

        // Add dividers
        const showDivider = index === 3 || index === 6 || index === 9;
        const divider = showDivider && !lastWasDivider ? (
          <div key={`divider-${index}`} className="w-4 h-px bg-border my-1" />
        ) : null;

        if (showDivider) lastWasDivider = true;
        else lastWasDivider = false;

        return (
          <div key={view.type}>
            {divider}
            <button
              onClick={() => onViewClick(view.type)}
              className={cn(
                "w-6 h-6 rounded flex items-center justify-center transition-colors",
                isActive
                  ? 'bg-[#6366f1]/10 text-[#6366f1]'
                  : 'text-muted-foreground hover:bg-muted/50'
              )}
              title={view.label}
            >
              <Icon className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
