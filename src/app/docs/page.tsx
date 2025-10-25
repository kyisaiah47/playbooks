"use client";

import { useState } from "react";
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
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started', 'features']);
  const [activeDoc, setActiveDoc] = useState<DocSection>('getting-started');

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
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto bg-background">
          <div className="py-6 px-4 space-y-6">
            <nav className="space-y-1">
              {sidebarSections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-sm font-medium py-1.5 px-2 hover:bg-muted/50 rounded transition-colors text-left"
                  >
                    <span className="text-sm">{section.title}</span>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </button>

                  {expandedSections.includes(section.id) && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                      {section.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveDoc(item.id)}
                          className={`flex items-center gap-2 w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                            activeDoc === item.id
                              ? 'text-foreground bg-muted/50'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                        >
                          <item.icon className="h-3.5 w-3.5" />
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8">
            {renderDocContent()}
          </div>
        </main>
      </div>
  );
}
