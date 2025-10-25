"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
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
  ChevronDown,
  ChevronRight
} from "lucide-react";
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

type DocSection =
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

export default function DocsPage() {
  const searchParams = useSearchParams();
  const initialSection = (searchParams.get('section') as DocSection) || 'getting-started';
  const [expandedSections, setExpandedSections] = useState<string[]>(['features']);
  const [activeDoc, setActiveDoc] = useState<DocSection>(initialSection);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sidebarSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'getting-started' as DocSection, title: 'Introduction', icon: BookOpen }
      ]
    },
    {
      id: 'features',
      title: 'Features',
      items: [
        { id: 'notes' as DocSection, title: 'Notes', icon: FileText },
        { id: 'discover' as DocSection, title: 'Discover', icon: Compass },
        { id: 'library' as DocSection, title: 'Library', icon: Library },
        { id: 'calendar' as DocSection, title: 'Calendar', icon: Calendar },
        { id: 'tasks' as DocSection, title: 'Tasks', icon: CheckSquare },
        { id: 'timeline' as DocSection, title: 'Timeline', icon: Clock },
        { id: 'daily' as DocSection, title: 'Daily', icon: Calendar },
        { id: 'journal' as DocSection, title: 'Journal', icon: BookMarked },
        { id: 'graph' as DocSection, title: 'Graph', icon: Network },
        { id: 'analytics' as DocSection, title: 'Analytics', icon: BarChart3 },
        { id: 'archive' as DocSection, title: 'Archive', icon: Archive },
      ]
    },
    {
      id: 'help',
      title: 'Help & Support',
      items: [
        { id: 'faq' as DocSection, title: 'FAQ', icon: HelpCircle },
        { id: 'support' as DocSection, title: 'Support', icon: LifeBuoy }
      ]
    }
  ];

  const renderDocContent = () => {
    switch (activeDoc) {
      case 'getting-started': return <GettingStartedDocs />;
      case 'notes': return <NotesDocs />;
      case 'discover': return <DiscoverDocs />;
      case 'library': return <LibraryDocs />;
      case 'calendar': return <CalendarDocs />;
      case 'tasks': return <TasksDocs />;
      case 'timeline': return <TimelineDocs />;
      case 'daily': return <DailyDocs />;
      case 'journal': return <JournalDocs />;
      case 'graph': return <GraphDocs />;
      case 'analytics': return <AnalyticsDocs />;
      case 'archive': return <ArchiveDocs />;
      case 'faq': return <FaqDocs />;
      case 'support': return <SupportDocs />;
      default: return <GettingStartedDocs />;
    }
  };

  return (
      <div className="min-h-screen pt-4 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Learn how to use Templata
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <nav className="space-y-1">
                  {sidebarSections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex items-center justify-between w-full text-left text-sm font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors py-1.5 px-2"
                      >
                        {section.title}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedSections.includes(section.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedSections.includes(section.id) && (
                        <div className="mt-1 space-y-0.5 mb-4">
                          {section.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <button
                                key={item.id}
                                onClick={() => setActiveDoc(item.id)}
                                className={`w-full text-left p-2 rounded-lg transition-colors text-sm flex items-center gap-2 ${
                                  activeDoc === item.id
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                                {item.title}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <main className="prose prose-sm max-w-none">
                {renderDocContent()}
              </main>
            </div>
          </div>
        </div>
      </div>
  );
}
