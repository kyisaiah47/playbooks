'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DemoProvider, useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID, DEMO_USER_ID } from '@/lib/demo-constants';
import OverviewPage from './page';
import NotesPage from './notes/page';
import DiscoverPage from './discover/page';
import LibraryPage from './library/page';
import CalendarPage from './calendar/page';
import TasksPage from './tasks/page';
import TimelinePage from './timeline/page';
import DailyPage from './daily/page';
import JournalPage from './journal/page';
import GraphPage from './graph/page';
import AnalyticsPage from './analytics/page';
import ArchivePage from './archive/page';
import CommunityPage from './community/page';
import DocsPage from './docs/page';
import SettingsPage from './settings/page';
import { IconBar } from '@/components/app/layout/IconBar';
import { Sidebar } from '@/components/app/layout/Sidebar';
import { TabBar } from '@/components/app/layout/TabBar';
import { PagesSidebarContent } from '@/components/app/layout/PagesSidebarContent';
import { CategorySidebarContent } from '@/components/app/layout/CategorySidebarContent';
import { NotesSidebarContent } from '@/components/app/layout/NotesSidebarContent';
import { LibrarySidebarContent } from '@/components/app/layout/LibrarySidebarContent';
import { CalendarSidebarContent } from '@/components/app/layout/CalendarSidebarContent';
import { TasksSidebarContent } from '@/components/app/layout/TasksSidebarContent';
import { TimelineSidebarContent } from '@/components/app/layout/TimelineSidebarContent';
import { DailySidebarContent } from '@/components/app/layout/DailySidebarContent';
import { JournalSidebarContent } from '@/components/app/layout/JournalSidebarContent';
import { GraphSidebarContent } from '@/components/app/layout/GraphSidebarContent';
import { OverviewSidebarContent } from '@/components/app/layout/OverviewSidebarContent';
import { AnalyticsSidebarContent } from '@/components/app/layout/AnalyticsSidebarContent';
import { ArchiveSidebarContent } from '@/components/app/layout/ArchiveSidebarContent';
import { CommunitySidebarContent } from '@/components/app/layout/CommunitySidebarContent';
import { DocsSidebarContent } from '@/components/app/layout/DocsSidebarContent';
import { SettingsSidebarContent } from '@/components/app/layout/SettingsSidebarContent';
import { Tab, TabType, Workspace, PageWithSubPages } from '@/types/workspace';
import {
  Loader2,
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
import { Toaster } from '@/components/ui/sonner';

interface WorkspaceLayoutProps {
  children?: React.ReactNode;
  demoMode?: boolean;
}

export default function WorkspaceLayout({ children, demoMode = false }: WorkspaceLayoutProps) {
  const params = useParams();
  const actualRouter = useRouter();
  const searchParams = useSearchParams();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  // Create a no-op router for demo mode (memoized to prevent infinite loops)
  const noOpRouter = useMemo(() => ({
    push: (...args: any[]) => {
      console.log('BLOCKED router.push in demo mode:', args);
    },
    replace: (...args: any[]) => {
      console.log('BLOCKED router.replace in demo mode:', args);
    },
    back: () => {
      console.log('BLOCKED router.back in demo mode');
    },
    forward: () => {
      console.log('BLOCKED router.forward in demo mode');
    },
    refresh: () => {
      console.log('BLOCKED router.refresh in demo mode');
    },
    prefetch: () => Promise.resolve(),
  }), []);
  const router = demoMode ? noOpRouter as any : actualRouter;

  // State
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [pages, setPages] = useState<PageWithSubPages[]>([]);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedReadingId, setSelectedReadingId] = useState<string | null>(null);
  const [selectedCalendarNoteIds, setSelectedCalendarNoteIds] = useState<Set<string>>(new Set());
  const [selectedTasksNoteIds, setSelectedTasksNoteIds] = useState<Set<string>>(new Set());
  const [selectedTimelineNoteIds, setSelectedTimelineNoteIds] = useState<Set<string>>(new Set());
  const [selectedDailyNoteIds, setSelectedDailyNoteIds] = useState<Set<string>>(new Set());
  const [selectedJournalEntryId, setSelectedJournalEntryId] = useState<string | null>(null);
  const [selectedGraphGuideIds, setSelectedGraphGuideIds] = useState<Set<string>>(new Set());
  const [selectedOverviewGuideIds, setSelectedOverviewGuideIds] = useState<Set<string>>(new Set());
  const [selectedAnalyticsGuideIds, setSelectedAnalyticsGuideIds] = useState<Set<string>>(new Set());
  const [settingsSection, setSettingsSection] = useState<'profile' | 'privacy' | 'data' | 'notifications' | 'appearance'>('profile');
  const [communityTab, setCommunityTab] = useState<'discussions' | 'requests' | 'feedback' | 'bugs' | 'features' | 'experts'>('discussions');
  const [docsSection, setDocsSection] = useState<'getting-started' | 'notes' | 'discover' | 'library' | 'calendar' | 'tasks' | 'timeline' | 'daily' | 'journal' | 'graph' | 'analytics' | 'archive' | 'faq' | 'support'>('getting-started');

  // Icon component mapping for converting emoji strings to components
  const iconComponentMap: Record<TabType, any> = {
    overview: LayoutDashboard,
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

  // Parse tabs from URL
  useEffect(() => {
    const tabsParam = searchParams.get('tabs');
    const activeParam = searchParams.get('active');

    if (tabsParam) {
      try {
        const parsedTabs = JSON.parse(decodeURIComponent(tabsParam));
        // Don't set icons from URL - they'll be added when needed
        setTabs(parsedTabs);
        setActiveTabId(activeParam || parsedTabs[0]?.id || null);
      } catch (error) {
        console.error('Error parsing tabs from URL:', error);
        // Default to overview tab
        const defaultTab: Tab = {
          id: 'overview-default',
          type: 'overview',
          label: 'Overview',
        };
        setTabs([defaultTab]);
        setActiveTabId(defaultTab.id);
      }
    } else {
      // Initialize with overview tab if no tabs in URL
      const defaultTab: Tab = {
        id: 'overview-default',
        type: 'overview',
        label: 'Overview',
      };
      setTabs([defaultTab]);
      setActiveTabId(defaultTab.id);
    }
  }, [searchParams]);

  // Fetch workspace data and all workspaces
  useEffect(() => {
    if (demoMode) {
      // Fetch real data from demo account
      

      async function fetchDemoData() {
        try {
          const [workspaceRes, workspacesRes] = await Promise.all([
            fetch(`/api/workspaces/${DEMO_WORKSPACE_ID}`),
            fetch(`/api/workspaces?user_id=${DEMO_USER_ID}`)
          ]);

          if (workspaceRes.ok) {
            const workspaceData = await workspaceRes.json();
            setWorkspace(workspaceData.workspace);
          }

          if (workspacesRes.ok) {
            const workspacesData = await workspacesRes.json();
            setWorkspaces(workspacesData.workspaces || []);
          }
        } catch (error) {
          console.error('Error fetching demo data:', error);
        } finally {
          setLoading(false);
        }
      }

      fetchDemoData();
      return;
    }

    async function fetchWorkspace() {
      try {
        const response = await fetch(`/api/workspaces/${workspaceId}`);

        if (response.status === 404) {
          if (!demoMode) {
            // Workspace doesn't exist, redirect to /app to create default workspace
            router.push('/app');
          }
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch workspace');
        }

        const data = await response.json();
        setWorkspace(data.workspace);
      } catch (error) {
        console.error('Error fetching workspace:', error);
        if (!demoMode) {
          // On error, redirect to /app to reinitialize
          router.push('/app');
        }
      }
    }

    async function fetchAllWorkspaces() {
      try {
        const response = await fetch('/api/workspaces');
        if (!response.ok) throw new Error('Failed to fetch workspaces');
        const data = await response.json();
        setWorkspaces(data.workspaces || []);
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    }

    if (workspaceId) {
      fetchWorkspace();
      fetchAllWorkspaces();
    }
  }, [workspaceId, router, demoMode]);

  // Fetch pages data
  useEffect(() => {
    if (demoMode) {
      // Fetch real pages from demo workspace
      

      async function fetchDemoPages() {
        try {
          const response = await fetch(`/api/workspaces/${DEMO_WORKSPACE_ID}/pages`);
          if (!response.ok) throw new Error('Failed to fetch demo pages');
          const data = await response.json();

          // Transform flat pages into hierarchical structure
          const pagesMap = new Map(data.pages.map((p: any) => [p.id, { ...p, subPages: [] }]));
          const rootPages: PageWithSubPages[] = [];

          data.pages.forEach((page: any) => {
            const pageWithSubs = pagesMap.get(page.id)!;
            if (page.parent_page_id) {
              const parent = pagesMap.get(page.parent_page_id);
              if (parent) {
                parent.subPages.push(pageWithSubs);
              }
            } else {
              rootPages.push(pageWithSubs);
            }
          });

          setPages(rootPages);
        } catch (error) {
          console.error('Error fetching demo pages:', error);
        }
      }

      fetchDemoPages();
      return;
    }

    async function fetchPages() {
      try {
        const response = await fetch(`/api/workspaces/${workspaceId}/pages`);
        if (!response.ok) throw new Error('Failed to fetch pages');
        const data = await response.json();

        // Transform flat pages into hierarchical structure
        const pagesMap = new Map(data.pages.map((p: any) => [p.id, { ...p, subPages: [] }]));
        const rootPages: PageWithSubPages[] = [];

        data.pages.forEach((page: any) => {
          const pageWithSubs = pagesMap.get(page.id)!;
          if (page.parent_page_id) {
            const parent = pagesMap.get(page.parent_page_id);
            if (parent) {
              parent.subPages.push(pageWithSubs);
            }
          } else {
            rootPages.push(pageWithSubs);
          }
        });

        setPages(rootPages);
      } catch (error) {
        console.error('Error fetching pages:', error);
      } finally {
        setLoading(false);
      }
    }

    if (workspaceId) {
      fetchPages();
    }
  }, [workspaceId, demoMode]);

  // Get active view from active tab (needed before useEffects)
  const activeView: TabType = tabs.find(t => t.id === activeTabId)?.type || 'overview';
  const activePageId = tabs.find(t => t.id === activeTabId)?.pageId || null;
  const activeGuideId = tabs.find(t => t.id === activeTabId)?.guideId || null;

  // Sync category selection to URL
  useEffect(() => {
    if (activeView === 'discover' || activeView === 'notes') {
      const categoryParam = searchParams.get('category');
      if (categoryParam && categoryParam !== selectedCategory) {
        setSelectedCategory(categoryParam);
      }
    }
  }, [searchParams, activeView, selectedCategory]);

  // Sync reading selection from URL
  useEffect(() => {
    if (activeView === 'library') {
      const readingParam = searchParams.get('readingId');
      if (readingParam && readingParam !== selectedReadingId) {
        setSelectedReadingId(readingParam);
      }
    }
  }, [searchParams, activeView, selectedReadingId]);

  // Sync calendar note selection from URL
  useEffect(() => {
    if (activeView === 'calendar') {
      const calendarNotesParam = searchParams.get('calendarNotes');
      if (calendarNotesParam) {
        const noteIds = new Set(calendarNotesParam.split(','));
        setSelectedCalendarNoteIds(noteIds);
      } else {
        setSelectedCalendarNoteIds(new Set());
      }
    }
  }, [searchParams, activeView]);

  // Sync tasks note selection from URL
  useEffect(() => {
    if (activeView === 'tasks') {
      const tasksNotesParam = searchParams.get('tasksNotes');
      if (tasksNotesParam) {
        const noteIds = new Set(tasksNotesParam.split(','));
        setSelectedTasksNoteIds(noteIds);
      } else {
        setSelectedTasksNoteIds(new Set());
      }
    }
  }, [searchParams, activeView]);

  // Sync timeline note selection from URL
  useEffect(() => {
    if (activeView === 'timeline') {
      const timelineNotesParam = searchParams.get('timelineNotes');
      if (timelineNotesParam) {
        const noteIds = new Set(timelineNotesParam.split(','));
        setSelectedTimelineNoteIds(noteIds);
      } else {
        setSelectedTimelineNoteIds(new Set());
      }
    }
  }, [searchParams, activeView]);

  // Sync daily note selection from URL
  useEffect(() => {
    if (activeView === 'daily') {
      const dailyNotesParam = searchParams.get('dailyNotes');
      if (dailyNotesParam) {
        const noteIds = new Set(dailyNotesParam.split(','));
        setSelectedDailyNoteIds(noteIds);
      } else {
        setSelectedDailyNoteIds(new Set());
      }
    }
  }, [searchParams, activeView]);

  // Sync journal entry selection from URL
  useEffect(() => {
    if (activeView === 'journal') {
      const entryParam = searchParams.get('entryId');
      setSelectedJournalEntryId(entryParam);
    }
  }, [searchParams, activeView]);

  // Sync graph guide selection from URL
  useEffect(() => {
    if (activeView === 'graph') {
      const graphGuidesParam = searchParams.get('graphGuides');
      if (graphGuidesParam) {
        const guideIds = new Set(graphGuidesParam.split(','));
        setSelectedGraphGuideIds(guideIds);
      }
    }
  }, [searchParams, activeView]);

  // Sync overview guide selection from URL
  useEffect(() => {
    if (activeView === 'overview') {
      const overviewGuidesParam = searchParams.get('overviewGuides');
      if (overviewGuidesParam) {
        const guideIds = new Set(overviewGuidesParam.split(','));
        setSelectedOverviewGuideIds(guideIds);
      }
    }

    if (activeView === 'analytics') {
      const analyticsGuidesParam = searchParams.get('analyticsGuides');
      if (analyticsGuidesParam) {
        const guideIds = new Set(analyticsGuidesParam.split(','));
        setSelectedAnalyticsGuideIds(guideIds);
      }
    }
  }, [searchParams, activeView]);

  // Sync settings section from URL
  useEffect(() => {
    if (activeView === 'settings') {
      const sectionParam = searchParams.get('section') as 'profile' | 'privacy' | 'data' | 'notifications' | 'appearance';
      if (sectionParam) {
        setSettingsSection(sectionParam);
      }
    }
  }, [searchParams, activeView]);

  // Sync docs section from URL
  useEffect(() => {
    if (activeView === 'docs') {
      const sectionParam = searchParams.get('section') as 'getting-started' | 'notes' | 'discover' | 'library' | 'calendar' | 'tasks' | 'timeline' | 'daily' | 'journal' | 'graph' | 'analytics' | 'archive' | 'faq' | 'support';
      if (sectionParam) {
        setDocsSection(sectionParam);
      }
    }
  }, [searchParams, activeView]);

  // Get demo context for category selection
  const { setSelectedCategory: setDemoCategory } = useDemo();

  // Update URL when category changes
  const handleCategorySelect = useCallback((categoryId: string) => {
    if (demoMode) {
      // In demo mode, update context instead of URL
      setDemoCategory(categoryId);
    } else {
      // In normal mode, update both state and URL
      setSelectedCategory(categoryId);
      const params = new URLSearchParams(searchParams.toString());
      params.set('category', categoryId);
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [searchParams, router, demoMode, setDemoCategory]);

  // Sync tabs to URL and navigate to the correct route
  const syncTabsToURL = useCallback((newTabs: Tab[], newActiveTabId: string | null, navigate: boolean = true) => {
    // Don't sync URLs in demo mode
    if (demoMode) return;

    const params = new URLSearchParams();

    if (newTabs.length > 0) {
      // Remove icon components before serializing to URL (they can't be serialized)
      const tabsForUrl = newTabs.map(({ icon, ...tab }) => tab);
      params.set('tabs', encodeURIComponent(JSON.stringify(tabsForUrl)));
    }

    if (newActiveTabId) {
      params.set('active', newActiveTabId);
    }

    // Navigate to the correct view route
    if (navigate && newActiveTabId) {
      const activeTab = newTabs.find(t => t.id === newActiveTabId);
      if (activeTab) {
        const viewPath = activeTab.type === 'overview' ? '' : `/${activeTab.type}`;

        // Add pageId to query params if it exists
        if (activeTab.pageId) {
          params.set('pageId', activeTab.pageId);
        }

        // Add guideId to query params if it exists (as 'id' for backwards compatibility)
        if (activeTab.guideId) {
          params.set('id', activeTab.guideId);
        }

        const queryString = params.toString();
        router.push(`/app/${workspaceId}${viewPath}${queryString ? `?${queryString}` : ''}`, { scroll: false });
      }
    } else {
      // Just update URL params without navigating
      const queryString = params.toString();
      router.replace(`/app/${workspaceId}${queryString ? `?${queryString}` : ''}`, { scroll: false });
    }
  }, [workspaceId, router, demoMode]);

  // Add a new tab
  const addTab = useCallback((tab: Tab) => {
    // Check if tab already exists
    const existingTab = tabs.find(t =>
      t.type === tab.type &&
      (!tab.pageId || t.pageId === tab.pageId) &&
      (!tab.guideId || t.guideId === tab.guideId)
    );

    if (existingTab) {
      // Just switch to existing tab
      setActiveTabId(existingTab.id);
      if (!demoMode) {
        syncTabsToURL(tabs, existingTab.id, true);
      }
    } else {
      // Add new tab
      const newTabs = [...tabs, tab];
      setTabs(newTabs);
      setActiveTabId(tab.id);
      if (!demoMode) {
        syncTabsToURL(newTabs, tab.id, true);
      }
    }
  }, [tabs, syncTabsToURL, demoMode]);

  // Remove a tab
  const removeTab = useCallback((tabId: string) => {
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    const newTabs = tabs.filter(t => t.id !== tabId);

    // If removing active tab, switch to adjacent tab
    let newActiveTabId = activeTabId;
    if (tabId === activeTabId && newTabs.length > 0) {
      // Switch to the tab to the left, or the first tab if removing the first tab
      newActiveTabId = newTabs[Math.max(0, tabIndex - 1)]?.id || null;
    } else if (newTabs.length === 0) {
      newActiveTabId = null;
    }

    setTabs(newTabs);
    setActiveTabId(newActiveTabId);
    if (!demoMode) {
      syncTabsToURL(newTabs, newActiveTabId, true);
    }
  }, [tabs, activeTabId, syncTabsToURL, demoMode]);

  // Switch to a tab
  const switchTab = useCallback((tabId: string) => {
    setActiveTabId(tabId);
    if (!demoMode) {
      syncTabsToURL(tabs, tabId, true);
    }
  }, [tabs, syncTabsToURL, demoMode]);

  // Handle view click from IconBar
  const handleViewClick = useCallback((viewType: TabType) => {
    // In demo mode, still allow view switching but don't update URL

    const viewLabels: Record<TabType, string> = {
      overview: 'Overview',
      notes: 'Notes',
      discover: 'Discover',
      library: 'Library',
      calendar: 'Calendar',
      tasks: 'Tasks',
      timeline: 'Timeline',
      daily: 'Daily',
      journal: 'Journal',
      graph: 'Graph',
      analytics: 'Analytics',
      archive: 'Archive',
      community: 'Community',
      docs: 'Docs',
      settings: 'Settings',
    };

    const viewIcons: Record<TabType, any> = {
      overview: LayoutDashboard,
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

    const newTab: Tab = {
      id: `${viewType}-${Date.now()}`,
      type: viewType,
      label: viewLabels[viewType],
      icon: viewIcons[viewType],
    };

    addTab(newTab);
  }, [addTab, demoMode]);

  // Handle page click from Sidebar
  const handlePageClick = useCallback((pageId: string) => {
    const page = pages.find(p => p.id === pageId);
    if (!page) return;

    const newTab: Tab = {
      id: `page-${pageId}`,
      type: 'notes', // Pages are treated as notes
      label: page.name,
      icon: page.icon || FileText,
      pageId: pageId,
    };

    addTab(newTab);
  }, [pages, addTab]);

  // Handle note click from Notes Sidebar
  const handleNoteClick = useCallback((guideId: string) => {
    const newTab: Tab = {
      id: `note-${guideId}`,
      type: 'notes',
      label: 'Note', // Will be updated when guide data loads
      icon: FileText,
      guideId: guideId,
    };

    addTab(newTab);
  }, [addTab]);

  // Handle new note button click from Notes Sidebar
  const handleNewNote = useCallback(() => {
    handleViewClick('discover');
  }, [handleViewClick]);

  // Handle reading click from Library Sidebar
  const handleReadingClick = useCallback((readingId: string) => {
    setSelectedReadingId(readingId);

    if (!demoMode) {
      // Update URL with reading ID
      const params = new URLSearchParams(searchParams.toString());
      params.set('readingId', readingId);
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [searchParams, router, demoMode]);

  // Handle calendar note toggle
  const handleCalendarNoteToggle = useCallback((noteId: string) => {
    const newSet = new Set(selectedCalendarNoteIds);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }

    setSelectedCalendarNoteIds(newSet);

    if (!demoMode) {
      // Update URL with selected note IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('calendarNotes', Array.from(newSet).join(','));
      } else {
        params.delete('calendarNotes');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedCalendarNoteIds, searchParams, router, demoMode]);

  // Handle tasks note toggle
  const handleTasksNoteToggle = useCallback((noteId: string) => {
    const newSet = new Set(selectedTasksNoteIds);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }

    setSelectedTasksNoteIds(newSet);

    if (!demoMode) {
      // Update URL with selected note IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('tasksNotes', Array.from(newSet).join(','));
      } else {
        params.delete('tasksNotes');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedTasksNoteIds, searchParams, router, demoMode]);

  // Handle timeline note toggle
  const handleTimelineNoteToggle = useCallback((noteId: string) => {
    const newSet = new Set(selectedTimelineNoteIds);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }

    setSelectedTimelineNoteIds(newSet);

    if (!demoMode) {
      // Update URL with selected note IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('timelineNotes', Array.from(newSet).join(','));
      } else {
        params.delete('timelineNotes');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedTimelineNoteIds, searchParams, router, demoMode]);

  // Handle daily note toggle
  const handleDailyNoteToggle = useCallback((noteId: string) => {
    const newSet = new Set(selectedDailyNoteIds);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }

    setSelectedDailyNoteIds(newSet);

    if (!demoMode) {
      // Update URL with selected note IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('dailyNotes', Array.from(newSet).join(','));
      } else {
        params.delete('dailyNotes');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedDailyNoteIds, searchParams, router, demoMode]);

  // Handle journal entry selection
  const handleJournalEntrySelect = useCallback((entryId: string | null) => {
    setSelectedJournalEntryId(entryId);

    if (!demoMode) {
      // Update URL with selected entry ID
      const params = new URLSearchParams(searchParams.toString());
      if (entryId) {
        params.set('entryId', entryId);
      } else {
        params.delete('entryId');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [searchParams, router, demoMode]);

  // Handle graph guide toggle
  const handleGraphGuideToggle = useCallback((guideId: string) => {
    const newSet = new Set(selectedGraphGuideIds);
    if (newSet.has(guideId)) {
      newSet.delete(guideId);
    } else {
      newSet.add(guideId);
    }

    setSelectedGraphGuideIds(newSet);

    if (!demoMode) {
      // Update URL with selected guide IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('graphGuides', Array.from(newSet).join(','));
      } else {
        params.delete('graphGuides');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedGraphGuideIds, searchParams, router, demoMode]);

  // Handle overview guide toggle
  const handleOverviewGuideToggle = useCallback((guideId: string) => {
    const newSet = new Set(selectedOverviewGuideIds);
    if (newSet.has(guideId)) {
      newSet.delete(guideId);
    } else {
      newSet.add(guideId);
    }

    setSelectedOverviewGuideIds(newSet);

    if (!demoMode) {
      // Update URL with selected guide IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('overviewGuides', Array.from(newSet).join(','));
      } else {
        params.delete('overviewGuides');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedOverviewGuideIds, searchParams, router, demoMode]);

  // Handle analytics guide toggle
  const handleAnalyticsGuideToggle = useCallback((guideId: string) => {
    const newSet = new Set(selectedAnalyticsGuideIds);
    if (newSet.has(guideId)) {
      newSet.delete(guideId);
    } else {
      newSet.add(guideId);
    }

    setSelectedAnalyticsGuideIds(newSet);

    if (!demoMode) {
      // Update URL with selected guide IDs
      const params = new URLSearchParams(searchParams.toString());
      if (newSet.size > 0) {
        params.set('analyticsGuides', Array.from(newSet).join(','));
      } else {
        params.delete('analyticsGuides');
      }
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [selectedAnalyticsGuideIds, searchParams, router, demoMode]);

  // Handle settings section change
  const handleSettingsSectionChange = useCallback((section: 'profile' | 'privacy' | 'data' | 'notifications' | 'appearance') => {
    setSettingsSection(section);

    if (!demoMode) {
      // Update URL with section param
      const params = new URLSearchParams(searchParams.toString());
      params.set('section', section);
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [searchParams, router, demoMode]);

  // Handle docs section change
  const handleDocsSectionChange = useCallback((section: 'getting-started' | 'notes' | 'discover' | 'library' | 'calendar' | 'tasks' | 'timeline' | 'daily' | 'journal' | 'graph' | 'analytics' | 'archive' | 'faq' | 'support') => {
    setDocsSection(section);

    if (!demoMode) {
      // Update URL with section param
      const params = new URLSearchParams(searchParams.toString());
      params.set('section', section);
      const queryString = params.toString();
      router.replace(`${window.location.pathname}?${queryString}`, { scroll: false });
    }
  }, [searchParams, router, demoMode]);

  // Render view component based on activeView for demo mode
  const renderDemoView = () => {
    switch (activeView) {
      case 'overview':
        return <OverviewPage />;
      case 'notes':
        return <NotesPage />;
      case 'discover':
        return <DiscoverPage />;
      case 'library':
        return <LibraryPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'tasks':
        return <TasksPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'daily':
        return <DailyPage />;
      case 'journal':
        return <JournalPage />;
      case 'graph':
        return <GraphPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'archive':
        return <ArchivePage />;
      case 'community':
        return <CommunityPage />;
      case 'docs':
        return <DocsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <OverviewPage />;
    }
  };

  if (loading || !workspace) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <DemoProvider demoMode={demoMode}>
      <div className={demoMode ? "h-full w-full flex overflow-hidden bg-background" : "h-screen w-screen flex overflow-hidden bg-background"}>
        {/* IconBar - 36px wide */}
        <IconBar activeView={activeView} onViewClick={handleViewClick} />

        {/* Sidebar - 256px wide (collapsible) */}
        <Sidebar
          workspace={workspace}
          workspaces={workspaces}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        >
          {/* Render sidebar content based on active view */}
          {activeView === 'overview' ? (
            <OverviewSidebarContent
              selectedGuideIds={selectedOverviewGuideIds}
              onGuideToggle={handleOverviewGuideToggle}
            />
          ) : activeView === 'discover' ? (
            <CategorySidebarContent
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          ) : activeView === 'notes' ? (
            <NotesSidebarContent
              activeGuideId={activeGuideId}
              onNoteClick={handleNoteClick}
              onNewNote={handleNewNote}
            />
          ) : activeView === 'library' ? (
            <LibrarySidebarContent
              selectedReadingId={selectedReadingId}
              onReadingClick={handleReadingClick}
            />
          ) : activeView === 'calendar' ? (
            <CalendarSidebarContent
              selectedNoteIds={selectedCalendarNoteIds}
              onNoteToggle={handleCalendarNoteToggle}
            />
          ) : activeView === 'tasks' ? (
            <TasksSidebarContent
              selectedNoteIds={selectedTasksNoteIds}
              onNoteToggle={handleTasksNoteToggle}
            />
          ) : activeView === 'timeline' ? (
            <TimelineSidebarContent
              selectedNoteIds={selectedTimelineNoteIds}
              onNoteToggle={handleTimelineNoteToggle}
            />
          ) : activeView === 'daily' ? (
            <DailySidebarContent
              selectedNoteIds={selectedDailyNoteIds}
              onNoteToggle={handleDailyNoteToggle}
            />
          ) : activeView === 'journal' ? (
            <JournalSidebarContent
              selectedEntryId={selectedJournalEntryId}
              onEntrySelect={handleJournalEntrySelect}
            />
          ) : activeView === 'graph' ? (
            <GraphSidebarContent
              selectedGuideIds={selectedGraphGuideIds}
              onGuideToggle={handleGraphGuideToggle}
            />
          ) : activeView === 'analytics' ? (
            <AnalyticsSidebarContent
              selectedGuideIds={selectedAnalyticsGuideIds}
              onGuideToggle={handleAnalyticsGuideToggle}
            />
          ) : activeView === 'archive' ? (
            <ArchiveSidebarContent />
          ) : activeView === 'community' ? (
            <CommunitySidebarContent
              selectedTab={communityTab}
              onTabClick={setCommunityTab}
            />
          ) : activeView === 'docs' ? (
            <DocsSidebarContent
              activeSection={docsSection}
              onSectionClick={handleDocsSectionChange}
            />
          ) : activeView === 'settings' ? (
            <SettingsSidebarContent
              activeSection={settingsSection}
              onSectionChange={handleSettingsSectionChange}
            />
          ) : (
            <PagesSidebarContent
              pages={pages}
              activePageId={activePageId}
              onPageClick={handlePageClick}
            />
          )}
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* TabBar - 40px high */}
          <TabBar
            tabs={tabs}
            activeTabId={activeTabId}
            onTabClick={switchTab}
            onTabClose={removeTab}
            sidebarOpen={sidebarOpen}
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            <AnimatePresence mode="wait">
              {demoMode ? renderDemoView() : children}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {demoMode && (
        <style jsx global>{`
          [data-sonner-toaster] {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
        `}</style>
      )}
      <Toaster position="top-center" />
    </DemoProvider>
  );
}
