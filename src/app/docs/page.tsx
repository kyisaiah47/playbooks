'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layout/page-layout';
import {
  BookOpen,
  FileText,
  Calendar,
  CheckSquare,
  Clock,
  BookMarked,
  Network,
  BarChart3,
  Archive,
  HelpCircle,
  LifeBuoy,
  Compass,
  Library,
  ChevronRight,
} from 'lucide-react';
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

type SectionType =
  | 'getting-started'
  | 'notes'
  | 'discover'
  | 'library'
  | 'calendar'
  | 'tasks'
  | 'timeline'
  | 'daily'
  | 'journal'
  | 'graph'
  | 'analytics'
  | 'archive'
  | 'faq'
  | 'support';

const sections = [
  { id: 'getting-started', label: 'Getting Started', icon: BookOpen },
  { id: 'notes', label: 'Notes', icon: FileText },
  { id: 'discover', label: 'Discover', icon: Compass },
  { id: 'library', label: 'Library', icon: Library },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'timeline', label: 'Timeline', icon: Clock },
  { id: 'daily', label: 'Daily', icon: Calendar },
  { id: 'journal', label: 'Journal', icon: BookMarked },
  { id: 'graph', label: 'Graph', icon: Network },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'archive', label: 'Archive', icon: Archive },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'support', label: 'Support', icon: LifeBuoy },
] as const;

export default function DocsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<SectionType>(
    (searchParams.get('section') as SectionType) || 'getting-started'
  );

  const handleSectionChange = (sectionId: SectionType) => {
    setActiveSection(sectionId);
    router.push(`/docs?section=${sectionId}`);
  };

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
    <PageLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Learn how to use Templata
            </p>
          </div>

          <div className="grid md:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id as SectionType)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {section.label}
                    {activeSection === section.id && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </button>
                );
              })}
            </aside>

            {/* Content */}
            <main className="prose prose-sm max-w-none">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
