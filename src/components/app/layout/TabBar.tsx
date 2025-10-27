'use client';

import {
  X,
  PanelLeftOpen,
  PanelLeftClose,
  LayoutDashboard,
  FileText,
  Compass,
  Library,
  Calendar,
  ListTodo,
  BarChart3,
  CalendarDays,
  PenLine,
  Network,
  TrendingUp,
  Archive,
  Users,
  BookOpen,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  // Map tab types to icon components
  const iconMap: Record<string, any> = {
    overview: CalendarDays,
    notes: FileText,
    discover: Compass,
    library: Library,
    calendar: Calendar,
    tasks: ListTodo,
    timeline: BarChart3,
    daily: CalendarDays,
    journal: PenLine,
    graph: Network,
    analytics: TrendingUp,
    archive: Archive,
    community: Users,
    docs: BookOpen,
    settings: Settings,
  };

  if (tabs.length === 0) return null;

  return (
    <div className="h-10 border-b border-border/40 bg-background flex items-center gap-px overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Sidebar Toggle Button */}
      <motion.button
        onClick={onToggleSidebar}
        className="h-full px-3 border-r border-border/40 hover:bg-muted/30 transition-colors shrink-0"
        title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: sidebarOpen ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
          ) : (
            <PanelLeftOpen className="w-4 h-4 text-muted-foreground" />
          )}
        </motion.div>
      </motion.button>

      {/* Tabs */}
      <AnimatePresence mode="popLayout">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          const IconComponent = iconMap[tab.type] || FileText;

          return (
            <motion.div
              key={tab.id}
              layout
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group h-full min-w-32 max-w-48 flex items-center gap-2 px-3 border-r border-border/40 cursor-pointer transition-colors",
                isActive
                  ? 'bg-muted/50'
                  : 'hover:bg-muted/30'
              )}
              onClick={() => onTabClick(tab.id)}
            >
              <motion.div
                initial={false}
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <IconComponent className={cn(
                  "w-3.5 h-3.5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} />
              </motion.div>
              <span className={cn(
                "text-xs font-medium truncate flex-1 transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}>
                {tab.label}
              </span>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
              </motion.button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
