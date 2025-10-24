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
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TabType } from '@/types/workspace';

interface IconBarProps {
  activeView: TabType;
  onViewClick: (view: TabType) => void;
}

const ICON_VIEWS: { type: TabType; icon: any; label: string }[] = [
  { type: 'notes', icon: FileText, label: 'Notes' },
  { type: 'discover', icon: Compass, label: 'Discover' },
  { type: 'library', icon: Library, label: 'Library' },
  { type: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { type: 'calendar', icon: Calendar, label: 'Calendar' },
  { type: 'tasks', icon: ListTodo, label: 'Tasks' },
  { type: 'timeline', icon: BarChart3, label: 'Timeline' },
  { type: 'daily', icon: CalendarDays, label: 'Daily' },
  { type: 'journal', icon: PenLine, label: 'Journal' },
  { type: 'graph', icon: Network, label: 'Graph' },
  { type: 'analytics', icon: TrendingUp, label: 'Analytics' },
  { type: 'archive', icon: Archive, label: 'Archive' },
  { type: 'settings', icon: Settings, label: 'Settings' },
];

export function IconBar({ activeView, onViewClick }: IconBarProps) {
  let lastWasDivider = false;

  return (
    <div className="w-12 border-r border-border/40 bg-muted/10 flex flex-col items-center py-2 gap-0.5">
      {ICON_VIEWS.map((view, index) => {
        const Icon = view.icon;
        const isActive = activeView === view.type;

        // Add dividers
        const showDivider = index === 3 || index === 7 || index === 10;
        const divider = showDivider && !lastWasDivider ? (
          <div key={`divider-${index}`} className="w-5 h-px bg-border my-1" />
        ) : null;

        if (showDivider) lastWasDivider = true;
        else lastWasDivider = false;

        return (
          <div key={view.type}>
            {divider}
            <motion.button
              onClick={() => onViewClick(view.type)}
              className={cn(
                "w-8 h-8 rounded-md flex items-center justify-center transition-colors",
                isActive
                  ? 'bg-[#6366f1]/10 text-[#6366f1]'
                  : 'text-muted-foreground hover:bg-muted/50'
              )}
              title={view.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  rotate: isActive ? [0, -5, 5, 0] : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
