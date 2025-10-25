'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { GettingStartedDocs } from '@/components/docs/GettingStartedDocs';
import { NotesDocs } from '@/components/docs/NotesDocs';
import { DiscoverDocs } from '@/components/docs/DiscoverDocs';
import { LibraryDocs } from '@/components/docs/LibraryDocs';
import { CalendarDocs } from '@/components/docs/CalendarDocs';
import { TasksDocs } from '@/components/docs/TasksDocs';
import { TimelineDocs } from '@/components/docs/TimelineDocs';
import { DailyDocs } from '@/components/docs/DailyDocs';
import { JournalDocs } from '@/components/docs/JournalDocs';
import { GraphDocs } from '@/components/docs/GraphDocs';
import { AnalyticsDocs } from '@/components/docs/AnalyticsDocs';
import { ArchiveDocs } from '@/components/docs/ArchiveDocs';
import { FaqDocs } from '@/components/docs/FaqDocs';
import { SupportDocs } from '@/components/docs/SupportDocs';

type SectionType = 'getting-started' | 'notes' | 'discover' | 'library' | 'calendar' | 'tasks' | 'timeline' | 'daily' | 'journal' | 'graph' | 'analytics' | 'archive' | 'faq' | 'support';

export default function DocsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;
  const [activeSection, setActiveSection] = useState<SectionType>('getting-started');

  // Sync active section from URL
  useEffect(() => {
    const sectionParam = searchParams.get('section') as SectionType;
    if (sectionParam) {
      setActiveSection(sectionParam);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return <GettingStartedDocs />;
      case 'notes':
        return <NotesDocs />;
      case 'discover':
        return <DiscoverDocs />;
      case 'library':
        return <LibraryDocs />;
      case 'calendar':
        return <CalendarDocs />;
      case 'tasks':
        return <TasksDocs />;
      case 'timeline':
        return <TimelineDocs />;
      case 'daily':
        return <DailyDocs />;
      case 'journal':
        return <JournalDocs />;
      case 'graph':
        return <GraphDocs />;
      case 'analytics':
        return <AnalyticsDocs />;
      case 'archive':
        return <ArchiveDocs />;
      case 'faq':
        return <FaqDocs />;
      case 'support':
        return <SupportDocs />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="border-b border-border/40 px-6 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BookOpen className="w-4 h-4 text-primary" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold">Documentation</h1>
            <p className="text-xs text-muted-foreground">Learn how to use Templata</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
}
