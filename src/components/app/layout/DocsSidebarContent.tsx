'use client';

import { BookOpen, Rocket, Grid3x3, Book, FileQuestion, HelpCircle } from 'lucide-react';
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
    description: 'Introduction and quick start guide',
    icon: Rocket,
  },
  {
    id: 'features',
    label: 'Features',
    description: 'Overview of main features',
    icon: Grid3x3,
  },
  {
    id: 'guides',
    label: 'Guides',
    description: 'Step-by-step tutorials',
    icon: Book,
  },
  {
    id: 'reference',
    label: 'Reference',
    description: 'Keyboard shortcuts and API',
    icon: BookOpen,
  },
  {
    id: 'faq',
    label: 'FAQ',
    description: 'Frequently asked questions',
    icon: FileQuestion,
  },
  {
    id: 'support',
    label: 'Support',
    description: 'Get help and contact us',
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
