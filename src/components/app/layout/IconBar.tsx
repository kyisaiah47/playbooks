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
  Users,
  BookOpen,
  Settings,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TabType } from '@/types/workspace';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useDemo } from '@/contexts/demo-context';
import { toast } from 'sonner';

interface IconBarProps {
  activeView: TabType;
  onViewClick: (view: TabType) => void;
}

const ICON_VIEWS: { type: TabType; icon: any; label: string }[] = [
  { type: 'overview', icon: CalendarDays, label: 'Daily' },
  { type: 'note', icon: FileText, label: 'Notes' },
  { type: 'discover', icon: Compass, label: 'Discover' },
  { type: 'library', icon: Library, label: 'Library' },
  { type: 'calendar', icon: Calendar, label: 'Calendar' },
  { type: 'tasks', icon: ListTodo, label: 'Tasks' },
  { type: 'timeline', icon: BarChart3, label: 'Timeline' },
  { type: 'graph', icon: Network, label: 'Graph' },
  { type: 'analytics', icon: TrendingUp, label: 'Analytics' },
  { type: 'community', icon: Users, label: 'Community' },
  { type: 'docs', icon: BookOpen, label: 'Docs' },
  { type: 'archive', icon: Archive, label: 'Archive' },
  { type: 'settings', icon: Settings, label: 'Settings' },
];

export function IconBar({ activeView, onViewClick }: IconBarProps) {
  const router = useRouter();
  const { demoMode } = useDemo();
  let lastWasDivider = false;

  const handleLogout = async () => {
    if (demoMode) {
      toast.info('Not available in demo mode');
      return;
    }
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="w-12 border-r border-border/40 bg-muted/10 flex flex-col items-center py-2 gap-0.5">
      {ICON_VIEWS.map((view, index) => {
        const Icon = view.icon;
        const isActive = activeView === view.type;

        // Add dividers after: Library (3), Timeline (6), Analytics (8), Docs (10)
        const showDivider = index === 3 || index === 6 || index === 8 || index === 10;
        const divider = showDivider && !lastWasDivider ? (
          <div key={`divider-${index}`} className="w-8 h-px bg-border my-1" />
        ) : null;

        if (showDivider) lastWasDivider = true;
        else lastWasDivider = false;

        return (
          <div key={view.type}>
            <motion.button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onViewClick(view.type);
              }}
              className={cn(
                "w-8 h-8 rounded-md flex items-center justify-center transition-colors",
                view.type === 'overview'
                  ? (isActive ? 'bg-amber-500/20 text-amber-500' : 'text-amber-500/70 hover:bg-amber-500/10')
                  : (isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/50')
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
            {divider}
          </div>
        );
      })}

      {/* Logout Button */}
      <motion.button
        type="button"
        onClick={handleLogout}
        className="w-8 h-8 rounded-md flex items-center justify-center transition-colors text-muted-foreground hover:bg-red-500/10 hover:text-red-500"
        title="Logout"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        <LogOut className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
