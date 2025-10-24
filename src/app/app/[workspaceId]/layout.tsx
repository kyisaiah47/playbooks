'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { IconBar } from '@/components/app/layout/IconBar';
import { Sidebar } from '@/components/app/layout/Sidebar';
import { TabBar } from '@/components/app/layout/TabBar';
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
  Settings
} from 'lucide-react';

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;

  // State
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [pages, setPages] = useState<PageWithSubPages[]>([]);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  // Icon component mapping for converting emoji strings to components
  const iconComponentMap: Record<TabType, any> = {
    overview: LayoutDashboard,
    guide: FileText,
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
    settings: Settings,
  };

  // Parse tabs from URL
  useEffect(() => {
    const tabsParam = searchParams.get('tabs');
    const activeParam = searchParams.get('active');

    if (tabsParam) {
      try {
        const parsedTabs = JSON.parse(decodeURIComponent(tabsParam));
        // Convert emoji icons to components
        const tabsWithComponents = parsedTabs.map((tab: Tab) => ({
          ...tab,
          icon: typeof tab.icon === 'string' ? iconComponentMap[tab.type] || FileText : tab.icon
        }));
        setTabs(tabsWithComponents);
        setActiveTabId(activeParam || tabsWithComponents[0]?.id || null);
      } catch (error) {
        console.error('Error parsing tabs from URL:', error);
        // Default to overview tab
        const defaultTab: Tab = {
          id: 'overview-default',
          type: 'overview',
          label: 'Overview',
          icon: LayoutDashboard,
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
        icon: LayoutDashboard,
      };
      setTabs([defaultTab]);
      setActiveTabId(defaultTab.id);
    }
  }, [searchParams]);

  // Fetch workspace data
  useEffect(() => {
    async function fetchWorkspace() {
      try {
        const response = await fetch(`/api/workspaces/${workspaceId}`);

        if (response.status === 404) {
          // Workspace doesn't exist, redirect to /app to create default workspace
          router.push('/app');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch workspace');
        }

        const data = await response.json();
        setWorkspace(data.workspace);
      } catch (error) {
        console.error('Error fetching workspace:', error);
        // On error, redirect to /app to reinitialize
        router.push('/app');
      }
    }

    if (workspaceId) {
      fetchWorkspace();
    }
  }, [workspaceId, router]);

  // Fetch pages data
  useEffect(() => {
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
  }, [workspaceId]);

  // Sync tabs to URL and navigate to the correct route
  const syncTabsToURL = useCallback((newTabs: Tab[], newActiveTabId: string | null, navigate: boolean = true) => {
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
        const queryString = params.toString();
        router.push(`/app/${workspaceId}${viewPath}${queryString ? `?${queryString}` : ''}`, { scroll: false });
      }
    } else {
      // Just update URL params without navigating
      const queryString = params.toString();
      router.replace(`/app/${workspaceId}${queryString ? `?${queryString}` : ''}`, { scroll: false });
    }
  }, [workspaceId, router]);

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
      syncTabsToURL(tabs, existingTab.id, true);
    } else {
      // Add new tab
      const newTabs = [...tabs, tab];
      setTabs(newTabs);
      setActiveTabId(tab.id);
      syncTabsToURL(newTabs, tab.id, true);
    }
  }, [tabs, syncTabsToURL]);

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
    syncTabsToURL(newTabs, newActiveTabId, true);
  }, [tabs, activeTabId, syncTabsToURL]);

  // Switch to a tab
  const switchTab = useCallback((tabId: string) => {
    setActiveTabId(tabId);
    syncTabsToURL(tabs, tabId, true);
  }, [tabs, syncTabsToURL]);

  // Handle view click from IconBar
  const handleViewClick = useCallback((viewType: TabType) => {
    const viewLabels: Record<TabType, string> = {
      overview: 'Overview',
      guide: 'Guides',
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
      settings: 'Settings',
    };

    const viewIcons: Record<TabType, any> = {
      overview: LayoutDashboard,
      guide: FileText,
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
      settings: Settings,
    };

    const newTab: Tab = {
      id: `${viewType}-${Date.now()}`,
      type: viewType,
      label: viewLabels[viewType],
      icon: viewIcons[viewType],
    };

    addTab(newTab);
  }, [addTab]);

  // Handle page click from Sidebar
  const handlePageClick = useCallback((pageId: string) => {
    const page = pages.find(p => p.id === pageId);
    if (!page) return;

    const newTab: Tab = {
      id: `page-${pageId}`,
      type: 'guide', // Pages are treated as guides
      label: page.name,
      icon: page.icon || FileText,
      pageId: pageId,
    };

    addTab(newTab);
  }, [pages, addTab]);

  // Get active view from active tab
  const activeView: TabType = tabs.find(t => t.id === activeTabId)?.type || 'overview';
  const activePageId = tabs.find(t => t.id === activeTabId)?.pageId || null;

  if (loading || !workspace) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-background">
      {/* IconBar - 36px wide */}
      <IconBar activeView={activeView} onViewClick={handleViewClick} />

      {/* Sidebar - 208px wide (collapsible) */}
      <Sidebar
        workspace={workspace}
        pages={pages}
        activePageId={activePageId}
        onPageClick={handlePageClick}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

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
          {children}
        </div>
      </div>
    </div>
  );
}
