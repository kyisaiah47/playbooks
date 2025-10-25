'use client';

import {
  BookOpen,
  Rocket,
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
  FileQuestion,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DocSection {
  id: string;
  label: string;
  description: string;
  icon: any;
}

const DOC_SECTIONS: DocSection[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    description: 'Introduction and quick start',
    icon: Rocket,
  },
  {
    id: 'notes',
    label: 'Notes',
    description: 'Work through guides',
    icon: FileText,
  },
  {
    id: 'discover',
    label: 'Discover',
    description: 'Browse available guides',
    icon: Compass,
  },
  {
    id: 'library',
    label: 'Library',
    description: 'Access all readings',
    icon: Library,
  },
  {
    id: 'calendar',
    label: 'Calendar',
    description: 'Schedule and events',
    icon: Calendar,
  },
  {
    id: 'tasks',
    label: 'Tasks',
    description: 'Manage action items',
    icon: ListTodo,
  },
  {
    id: 'timeline',
    label: 'Timeline',
    description: 'Track progress over time',
    icon: BarChart3,
  },
  {
    id: 'daily',
    label: 'Daily',
    description: 'Daily notes and planning',
    icon: CalendarDays,
  },
  {
    id: 'journal',
    label: 'Journal',
    description: 'Daily reflections',
    icon: PenLine,
  },
  {
    id: 'graph',
    label: 'Graph',
    description: 'Visualize connections',
    icon: Network,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    description: 'Progress insights',
    icon: TrendingUp,
  },
  {
    id: 'archive',
    label: 'Archive',
    description: 'Archived guides',
    icon: Archive,
  },
  {
    id: 'faq',
    label: 'FAQ',
    description: 'Common questions',
    icon: FileQuestion,
  },
  {
    id: 'support',
    label: 'Support',
    description: 'Get help',
    icon: HelpCircle,
  },
];

interface DocsSidebarContentProps {
  activeSection: string | null;
  onSectionClick: (sectionId: string) => void;
}

export function DocsSidebarContent({ activeSection, onSectionClick }: DocsSidebarContentProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-3">
        <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          Documentation
        </div>
        <motion.nav
          className="space-y-0.5"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.03 }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {DOC_SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className={cn(
                  "w-full text-left px-2 py-2 rounded transition-colors flex items-start gap-2",
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted/50 text-foreground'
                )}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={cn(
                  "h-4 w-4 flex-shrink-0 mt-0.5",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">
                    {section.label}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {section.description}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}
