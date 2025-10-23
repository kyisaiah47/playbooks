import { FileText, BookOpen, User, Moon, X, Plus, Circle, CheckCircle2, ChevronRight, Search, Star, Clock, Calendar, ListTodo, BarChart3, LayoutDashboard, PanelLeftClose, PanelLeft, Compass, PenLine, Command, Network, CalendarDays, Settings, Library, TrendingUp, Archive } from "lucide-react";
import { useState } from "react";

export function HeroWorkspace() {
  const [activeView, setActiveView] = useState<'guides' | 'calendar' | 'tasks' | 'timeline' | 'overview' | 'discover' | 'journal' | 'graph' | 'daily' | 'settings' | 'library' | 'analytics' | 'archive'>('guides');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openTabs, setOpenTabs] = useState<string[]>(["Sarah & Mike's Wedding"]);
  const [activeTab, setActiveTab] = useState("Sarah & Mike's Wedding");
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState('My Life Planning');
  const [showWorkspaceSwitcher, setShowWorkspaceSwitcher] = useState(false);

  // Workspace data
  const workspaces = {
    'My Life Planning': {
      icon: '🏠',
      pages: [
        {
          name: "Sarah & Mike's Wedding",
          icon: '💍',
          subPages: [
            { name: 'Venue Research', icon: '📍' },
            { name: 'Guest List', icon: '👥' },
            { name: 'Budget Tracker', icon: '💰' }
          ]
        },
        { name: 'Dream Home in Austin', icon: '🏡', subPages: [] },
        { name: 'Tech Lead Transition', icon: '💼', subPages: [
          { name: 'Interview Prep', icon: '📝' },
          { name: 'Skill Goals', icon: '🎯' }
        ]},
        { name: 'Setting Boundaries', icon: '🛡️', subPages: [] },
        { name: 'Health Reset', icon: '💪', subPages: [] }
      ]
    },
    'Work Projects': {
      icon: '💼',
      pages: [
        {
          name: 'Q4 OKRs',
          icon: '🎯',
          subPages: [
            { name: 'Team Goals', icon: '👥' },
            { name: 'Performance Metrics', icon: '📊' }
          ]
        },
        { name: 'Product Roadmap', icon: '🗺️', subPages: [] },
        { name: 'Team 1:1s', icon: '👤', subPages: [] },
        { name: 'System Design Review', icon: '🏗️', subPages: [] }
      ]
    },
    'Side Hustles': {
      icon: '🚀',
      pages: [
        {
          name: 'Indie SaaS Launch',
          icon: '💡',
          subPages: [
            { name: 'MVP Features', icon: '⚙️' },
            { name: 'Marketing Plan', icon: '📣' },
            { name: 'Pricing Strategy', icon: '💵' }
          ]
        },
        { name: 'Content Creation', icon: '✍️', subPages: [] },
        { name: 'Course Development', icon: '🎓', subPages: [] }
      ]
    }
  };

  const workspace = workspaces[currentWorkspace as keyof typeof workspaces];

  const handleViewClick = (view: 'guides' | 'calendar' | 'tasks' | 'timeline' | 'overview' | 'discover' | 'journal' | 'graph' | 'daily' | 'settings' | 'library' | 'analytics' | 'archive') => {
    setActiveView(view);
    if (view !== 'guides') {
      // Open a new tab for the view
      const viewName = view.charAt(0).toUpperCase() + view.slice(1);
      if (!openTabs.includes(viewName)) {
        setOpenTabs([...openTabs, viewName]);
      }
      setActiveTab(viewName);
    } else {
      // Switch to most recently used guide tab
      const guideTabs = openTabs.filter(tab => !['Calendar', 'Tasks', 'Timeline', 'Overview', 'Discover', 'Journal', 'Graph', 'Daily', 'Settings', 'Library', 'Analytics', 'Archive', 'New Page'].includes(tab));
      if (guideTabs.length > 0) {
        setActiveTab(guideTabs[guideTabs.length - 1]);
      }
    }
  };

  return (
    <div className="w-full bg-background rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ring-1 ring-black/5 dark:ring-white/10">
      {/* Browser Chrome */}
      <div className="h-7 bg-muted/60 border-b border-border/60 flex items-center px-2 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-12">
          <div className="px-3 py-0.5 bg-background/50 rounded text-[9px] text-muted-foreground border border-border/40 max-w-[200px] truncate">
            app.templata.org
          </div>
        </div>
      </div>

      <div className="flex h-[600px] bg-background">
        {/* Leftmost Icon Bar - Obsidian style */}
        <div className="w-9 border-r border-border/40 bg-muted/10 flex flex-col items-center py-1.5 gap-0.5">
          {/* Core Views */}
          <button
            onClick={() => handleViewClick('guides')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'guides'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <FileText className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('discover')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'discover'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <Compass className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('library')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'library'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <Library className="w-3 h-3" />
          </button>

          {/* Divider */}
          <div className="w-4 h-px bg-border my-1" />

          {/* Planning & Organization */}
          <button
            onClick={() => handleViewClick('calendar')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'calendar'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <Calendar className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('tasks')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'tasks'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <ListTodo className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('timeline')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'timeline'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <BarChart3 className="w-3 h-3" />
          </button>

          {/* Divider */}
          <div className="w-4 h-px bg-border my-1" />

          {/* Notes & Insights */}
          <button
            onClick={() => handleViewClick('daily')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'daily'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <CalendarDays className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('journal')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'journal'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <PenLine className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('graph')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'graph'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <Network className="w-3 h-3" />
          </button>

          {/* Divider */}
          <div className="w-4 h-px bg-border my-1" />

          {/* Meta Views */}
          <button
            onClick={() => handleViewClick('overview')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'overview'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <LayoutDashboard className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('analytics')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'analytics'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('archive')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'archive'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <Archive className="w-3 h-3" />
          </button>

          <button
            onClick={() => handleViewClick('settings')}
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              activeView === 'settings'
                ? 'bg-[#6366f1]/10 text-[#6366f1]'
                : 'text-muted-foreground hover:bg-muted/50'
            }`}
          >
            <Settings className="w-3 h-3" />
          </button>
        </div>

        {/* Main Sidebar - Conditional based on active view */}
        {sidebarOpen && (
        <div className="w-52 border-r border-border/40 flex flex-col bg-muted/5">
          {activeView === 'guides' ? (
            <>
              {/* Workspace Switcher */}
              <div className="p-1.5 border-b border-border/40 relative">
                <div
                  onClick={() => setShowWorkspaceSwitcher(!showWorkspaceSwitcher)}
                  className="flex items-center gap-2 px-1.5 py-1 hover:bg-muted/50 rounded cursor-pointer group"
                >
                  <div className="text-base">{workspace.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-medium truncate">{currentWorkspace}</div>
                    <div className="text-[9px] text-muted-foreground">{workspace.pages.length} pages</div>
                  </div>
                  <ChevronRight className={`w-3 h-3 text-muted-foreground transition-all ${showWorkspaceSwitcher ? 'rotate-90 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>

                {/* Workspace Dropdown */}
                {showWorkspaceSwitcher && (
                  <div className="absolute top-full left-1.5 right-1.5 mt-1 bg-background border border-border/60 rounded-lg shadow-lg z-50 overflow-hidden">
                    {Object.entries(workspaces).map(([name, ws]) => (
                      <div
                        key={name}
                        onClick={() => {
                          setCurrentWorkspace(name);
                          setShowWorkspaceSwitcher(false);
                          // Switch to first page of new workspace
                          setOpenTabs([ws.pages[0].name]);
                          setActiveTab(ws.pages[0].name);
                        }}
                        className={`flex items-center gap-2 px-2 py-1.5 cursor-pointer transition-colors ${
                          currentWorkspace === name
                            ? 'bg-[#6366f1]/10'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="text-sm">{ws.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-medium truncate">{name}</div>
                          <div className="text-[9px] text-muted-foreground">{ws.pages.length} pages</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="px-1.5 py-1.5">
                <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-muted/30 text-muted-foreground hover:bg-muted/50 cursor-pointer">
                  <Search className="w-3 h-3" />
                  <span className="text-[10px]">Search</span>
                </div>
              </div>

              {/* Pages Section */}
              <div className="flex-1 overflow-y-auto px-1.5">
                <div className="text-[9px] font-medium text-muted-foreground px-1.5 py-1 uppercase tracking-wider">
                  Pages
                </div>
                <div className="space-y-0.5">
                  {workspace.pages.map((page, index) => (
                    <div key={page.name}>
                      {/* Main Page */}
                      <div
                        className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer group ${
                          index === 0 ? 'bg-muted/50 font-medium' : 'text-muted-foreground hover:bg-muted/50'
                        }`}
                      >
                        <div className="text-sm leading-none">{page.icon}</div>
                        <span className="text-[11px] flex-1 truncate">{page.name}</span>
                      </div>

                      {/* Sub-pages */}
                      {page.subPages && page.subPages.length > 0 && (
                        <div className="ml-4 space-y-0.5">
                          {page.subPages.map((subPage) => (
                            <div
                              key={subPage.name}
                              className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-muted-foreground hover:bg-muted/50 cursor-pointer group"
                            >
                              <div className="text-xs leading-none">{subPage.icon}</div>
                              <span className="text-[10px] flex-1 truncate">{subPage.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* New Page Button */}
              <div className="p-1.5 border-t border-border/40">
                <button
                  onClick={() => {
                    if (!openTabs.includes('New Page')) {
                      setOpenTabs([...openTabs, 'New Page']);
                    }
                    setActiveTab('New Page');
                  }}
                  className="w-full flex items-center gap-1.5 px-1.5 py-1 rounded text-muted-foreground hover:bg-muted/50 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  <span className="text-[11px]">New Page</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Sidebar Header */}
              <div className="p-1.5">
                <div className="flex items-center gap-1.5 px-1.5 py-1 hover:bg-muted/50 rounded cursor-pointer">
                  <svg viewBox="0 0 51 43" className="w-3 h-2.5 flex-shrink-0" fill="currentColor">
                    <path d="M42 6.63334C41.5 6.13334 41 5.63334 40.5 5.13334C39 3.53334 37.4 1.93334 35.4 0.93334C33.1 -0.26666 30.6 0.033331 28.1 0.033331C24.3 0.033331 14.8 0.033331 9.2 0.033331L13 5.13334C19.9 5.13334 30.7 5.13334 35.7 5.13334C37.8 5.13334 39.6 5.53334 41.3 6.63334C41.6 6.73334 41.9 6.73334 42 6.63334Z"/>
                    <path d="M46.2 14.8333C45.7 14.3333 45.2 13.8333 44.7 13.3333C43.2 11.7333 41.6 10.1333 39.6 9.13334C37.3 7.93334 34.8 8.23335 32.3 8.23335C29 8.23335 21.1 8.23335 15.5 8.23335L19.3 13.3333C26.1 13.3333 35.4 13.3333 40 13.3333C42.1 13.3333 43.9 13.7333 45.6 14.8333C45.8 14.9333 46 14.9333 46.2 14.8333Z"/>
                    <path d="M50.9 22.8334C50.4 22.3334 49.9 21.8334 49.4 21.3334C47.9 19.7334 46.3 18.1333 44.3 17.1333C42 15.9333 39.5 16.2333 37 16.2333C33.9 16.2333 27.1 16.2333 21.6 16.2333L25.4 21.3334C32 21.3334 40.4 21.3334 44.6 21.3334C46.7 21.3334 48.5 21.7334 50.2 22.8334C50.5 22.9334 50.7 23.0334 50.9 22.8334Z"/>
                    <path d="M8.8 36.3333C9.3 36.8333 9.8 37.3333 10.3 37.8333C11.8 39.4333 13.4 41.0333 15.4 42.0333C17.7 43.2333 20.2 42.9333 22.7 42.9333H41.6L37.8 37.8333C30.9 37.8333 20.1 37.8333 15.1 37.8333C13 37.8333 11.2 37.4333 9.5 36.3333C9.2 36.2333 9 36.2333 8.8 36.3333Z"/>
                    <path d="M4.60001 28.1333C5.10001 28.6333 5.60001 29.1333 6.10001 29.6333C7.60001 31.2333 9.2 32.8333 11.2 33.8333C13.5 35.0333 16 34.7333 18.5 34.7333H35.3L31.5 29.6333C24.7 29.6333 15.4 29.6333 10.8 29.6333C8.7 29.6333 6.9 29.2333 5.2 28.1333C5 28.0333 4.80001 28.0333 4.60001 28.1333Z"/>
                    <path d="M0 20.0333C0.5 20.5333 1 21.0333 1.5 21.5333C3 23.1333 4.60001 24.7333 6.60001 25.7333C8.90001 26.9333 11.4 26.6333 13.9 26.6333H29.3L25.5 21.5333C18.9 21.5333 10.5 21.5333 6.3 21.5333C4.2 21.5333 2.4 21.1333 0.699997 20.0333C0.399997 19.9333 0.2 19.9333 0 20.0333Z"/>
                  </svg>
                  <span className="font-medium text-[11px] flex-1">Templata</span>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                </div>
              </div>

              {/* Search */}
              <div className="px-1.5 pb-1.5">
                <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-muted/30 text-muted-foreground hover:bg-muted/50 cursor-pointer">
                  <Search className="w-3 h-3" />
                  <span className="text-[10px]">Search</span>
                </div>
              </div>

              {/* Active Guides Section */}
              <div className="flex-1 overflow-y-auto px-1.5">
                <div className="text-[9px] font-medium text-muted-foreground px-1.5 py-1">
                  Active Guides
                </div>
                <div className="space-y-0.5">
                  {[
                    { name: 'Wedding Planning', checked: true },
                    { name: 'Career Transition', checked: true },
                    { name: 'Setting Boundaries', checked: false },
                    { name: 'Personal Growth', checked: false },
                    { name: 'Home Buying', checked: false },
                  ].map((guide) => (
                    <div
                      key={guide.name}
                      className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer group ${
                        guide.checked ? 'bg-muted/50' : 'text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded border flex items-center justify-center flex-shrink-0 ${
                        guide.checked ? 'bg-[#6366f1] border-[#6366f1]' : 'border-border'
                      }`}>
                        {guide.checked && (
                          <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                      <span className="text-[11px] flex-1 truncate">{guide.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Nav with Tabs */}
          <div className="border-b border-border/40 bg-background">
            <div className="px-4 py-1 flex items-center gap-2 w-full">
              {/* Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 rounded hover:bg-muted/50 transition-colors"
              >
                {sidebarOpen ? (
                  <PanelLeftClose className="w-3.5 h-3.5 text-muted-foreground" />
                ) : (
                  <PanelLeft className="w-3.5 h-3.5 text-muted-foreground" />
                )}
              </button>

              {/* Page Tabs */}
              <div className="flex-1 flex items-center gap-0.5 overflow-x-auto -mb-px">
                {openTabs.map((tab, i) => {
                  const isActive = tab === activeTab;
                  const isGuide = !['Calendar', 'Tasks', 'Timeline', 'Overview', 'Discover', 'Journal', 'Graph', 'Daily', 'Settings', 'Library', 'Analytics', 'Archive', 'New Page'].includes(tab);

                  // Get emoji icon for guide pages
                  let pageIcon = null;
                  if (isGuide) {
                    // Find the page in all workspaces
                    for (const ws of Object.values(workspaces)) {
                      const page = ws.pages.find(p => p.name === tab);
                      if (page) {
                        pageIcon = page.icon;
                        break;
                      }
                    }
                  }

                  const Icon = isGuide ? FileText :
                    tab === 'Calendar' ? Calendar :
                    tab === 'Tasks' ? ListTodo :
                    tab === 'Timeline' ? BarChart3 :
                    tab === 'Overview' ? LayoutDashboard :
                    tab === 'Discover' ? Compass :
                    tab === 'Journal' ? PenLine :
                    tab === 'Graph' ? Network :
                    tab === 'Daily' ? CalendarDays :
                    tab === 'Settings' ? Settings :
                    tab === 'Library' ? Library :
                    tab === 'Analytics' ? TrendingUp :
                    tab === 'Archive' ? Archive :
                    tab === 'New Page' ? Plus :
                    FileText;
                  const colors = ['blue', 'green', 'purple', 'orange', 'pink'];
                  const color = colors[i % colors.length];

                  return (
                    <div
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        // Update activeView based on tab type
                        if (tab === 'Calendar') setActiveView('calendar');
                        else if (tab === 'Tasks') setActiveView('tasks');
                        else if (tab === 'Timeline') setActiveView('timeline');
                        else if (tab === 'Overview') setActiveView('overview');
                        else if (tab === 'Discover') setActiveView('discover');
                        else if (tab === 'Journal') setActiveView('journal');
                        else if (tab === 'Graph') setActiveView('graph');
                        else if (tab === 'Daily') setActiveView('daily');
                        else if (tab === 'Settings') setActiveView('settings');
                        else if (tab === 'Library') setActiveView('library');
                        else if (tab === 'Analytics') setActiveView('analytics');
                        else if (tab === 'Archive') setActiveView('archive');
                        else setActiveView('guides');
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 min-w-fit cursor-pointer ${
                        isActive
                          ? 'bg-muted/30 border-x border-t border-border/40'
                          : 'hover:bg-muted/20 border-transparent'
                      }`}
                    >
                      {pageIcon ? (
                        <div className="text-sm leading-none">{pageIcon}</div>
                      ) : (
                        <Icon className={`w-3 h-3 ${isActive ? `text-${color}-600 dark:text-${color}-400` : 'text-muted-foreground'}`} style={isActive && tab === 'Calendar' ? {color: '#6366f1'} : {}} />
                      )}
                      <span className={`text-[11px] ${isActive ? 'font-medium' : 'text-muted-foreground'}`}>{tab}</span>
                      <button className="p-0.5 rounded hover:bg-background" onClick={(e) => {
                        e.stopPropagation();
                        setOpenTabs(openTabs.filter(t => t !== tab));
                        if (tab === activeTab && openTabs.length > 1) {
                          setActiveTab(openTabs[0] === tab ? openTabs[1] : openTabs[0]);
                        }
                      }}>
                        <X className="w-3 h-3 text-muted-foreground" />
                      </button>
                    </div>
                  );
                })}

                {/* New Tab Button */}
                <button
                  onClick={() => {
                    if (!openTabs.includes('New Page')) {
                      setOpenTabs([...openTabs, 'New Page']);
                    }
                    setActiveTab('New Page');
                  }}
                  className="p-1.5 rounded hover:bg-muted/30"
                >
                  <Plus className="w-3 h-3 text-muted-foreground" />
                </button>
              </div>

              {/* Theme Selector & User Dropdown */}
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded hover:bg-muted/50">
                  <Moon className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 rounded hover:bg-muted/50">
                  <User className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-1 overflow-hidden bg-background flex">
          {activeTab === 'New Page' ? (
            /* New Page View */
            <div className="flex-1 p-8 overflow-y-auto">
              <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Create New Page</h2>
                  <p className="text-[13px] text-muted-foreground">Choose a guide to get started, or create a blank page</p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                    <input
                      type="text"
                      placeholder="Search 1,200+ guides..."
                      className="w-full h-11 pl-10 pr-4 bg-muted/20 border border-border/60 rounded-lg outline-none focus:border-[#6366f1]/50 transition-colors text-[13px]"
                    />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <button className="p-5 rounded-lg border border-border/60 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/5 transition-all text-left group">
                    <FileText className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-[#6366f1]" />
                    <div className="text-[14px] font-medium mb-1">Blank Page</div>
                    <div className="text-[11px] text-muted-foreground">Start with an empty page</div>
                  </button>
                  <button className="p-5 rounded-lg border border-border/60 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/5 transition-all text-left group">
                    <PenLine className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-[#6366f1]" />
                    <div className="text-[14px] font-medium mb-1">Journal Entry</div>
                    <div className="text-[11px] text-muted-foreground">Free-form writing space</div>
                  </button>
                </div>

                {/* Popular Guides */}
                <div className="mb-8">
                  <h3 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">Popular Guides</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Wedding Planning", category: "Life Events", color: "indigo", questions: 15, readings: 12, users: 1203 },
                      { title: "Career Transition", category: "Career & Work", color: "blue", questions: 12, readings: 8, users: 2847 },
                      { title: "Home Buying", category: "Finance", color: "emerald", questions: 14, readings: 10, users: 1654 },
                      { title: "Starting a Business", category: "Career & Work", color: "blue", questions: 18, readings: 15, users: 2103 },
                    ].map((guide) => (
                      <button
                        key={guide.title}
                        className="p-4 rounded-lg border border-border/60 hover:border-[#6366f1]/50 hover:shadow-sm transition-all text-left group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className={`text-[10px] font-medium px-2 py-1 rounded ${
                            guide.color === 'indigo' ? 'bg-[#6366f1]/10' :
                            guide.color === 'blue' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                            'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          }`} style={guide.color === 'indigo' ? { color: '#6366f1' } : {}}>
                            {guide.category}
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#6366f1]" />
                        </div>
                        <h4 className="text-[14px] font-medium mb-2">{guide.title}</h4>
                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                          <span>{guide.questions} questions</span>
                          <span>·</span>
                          <span>{guide.readings} articles</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {guide.users.toLocaleString()} working on this
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Browse by Category */}
                <div>
                  <h3 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">Browse by Category</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Career & Work", guides: 156, color: "blue" },
                      { name: "Relationships", guides: 203, color: "pink" },
                      { name: "Health & Wellness", guides: 142, color: "green" },
                      { name: "Personal Growth", guides: 189, color: "purple" },
                      { name: "Finance", guides: 127, color: "emerald" },
                      { name: "Life Events", guides: 181, color: "indigo" },
                    ].map((category) => (
                      <button
                        key={category.name}
                        className="w-full flex items-center justify-between p-3 rounded-lg border border-border/60 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/5 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${
                            category.color === 'indigo' ? 'bg-[#6366f1]' :
                            category.color === 'blue' ? 'bg-blue-500' :
                            category.color === 'pink' ? 'bg-pink-500' :
                            category.color === 'green' ? 'bg-green-500' :
                            category.color === 'purple' ? 'bg-purple-500' :
                            'bg-emerald-500'
                          }`} />
                          <span className="text-[14px] font-medium">{category.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[12px] text-muted-foreground">{category.guides} guides</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#6366f1]" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Tasks' ? (
            /* Tasks View - Kanban */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-sm font-semibold mb-0.5">Tasks</h2>
                <p className="text-[10px] text-muted-foreground">10 total • 5 pending</p>
              </div>

              {/* Kanban Board */}
              <div className="grid grid-cols-3 gap-4">
                {/* To Do Column */}
                <div className="flex flex-col">
                  <div className="px-2 py-1.5 mb-2">
                    <h3 className="text-[10px] font-semibold">To Do</h3>
                    <span className="text-[9px] text-muted-foreground">5 tasks</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: 'Book photographer', guide: 'Wedding Planning', date: 'Nov 28' },
                      { title: 'Update resume', guide: 'Career Transition', date: 'Nov 30' },
                      { title: 'Schedule venue tour', guide: 'Wedding Planning', date: 'Dec 5' },
                      { title: 'Research neighborhoods', guide: 'Home Buying', date: 'Dec 8' },
                      { title: 'Send invitations', guide: 'Wedding Planning', date: 'Jan 15' },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded border border-border/40 bg-background hover:shadow-sm transition-shadow cursor-pointer">
                        <div className="text-[10px] font-medium mb-1">{task.title}</div>
                        <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
                          <span>{task.guide}</span>
                          <span>•</span>
                          <span>{task.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress Column */}
                <div className="flex flex-col">
                  <div className="px-2 py-1.5 mb-2">
                    <h3 className="text-[10px] font-semibold">In Progress</h3>
                    <span className="text-[9px] text-muted-foreground">2 tasks</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: 'Plan ceremony details', guide: 'Wedding Planning' },
                      { title: 'Network with recruiters', guide: 'Career Transition' },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded border border-border/40 bg-background hover:shadow-sm transition-shadow cursor-pointer">
                        <div className="text-[10px] font-medium mb-1">{task.title}</div>
                        <div className="text-[9px] text-muted-foreground">{task.guide}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done Column */}
                <div className="flex flex-col">
                  <div className="px-2 py-1.5 mb-2">
                    <h3 className="text-[10px] font-semibold">Done</h3>
                    <span className="text-[9px] text-muted-foreground">3 tasks</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: 'Set wedding budget', guide: 'Wedding Planning' },
                      { title: 'Create LinkedIn profile', guide: 'Career Transition' },
                      { title: 'Book venue', guide: 'Wedding Planning' },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded border border-border/40 bg-background opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="text-[10px] font-medium mb-1 line-through">{task.title}</div>
                        <div className="text-[9px] text-muted-foreground">{task.guide}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Timeline' ? (
            /* Timeline View - Gantt Style */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-0.5">Timeline</h2>
                  <p className="text-[10px] text-muted-foreground">3 active projects • Nov 2024 - Jul 2025</p>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  {/* Wedding Planning Timeline */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <h3 className="text-[11px] font-semibold">Wedding Planning</h3>
                      <span className="text-[9px] text-muted-foreground">Nov 2024 - Jun 2025</span>
                    </div>
                    <div className="relative h-8 bg-muted/10 rounded overflow-hidden">
                      <div className="absolute top-0 left-[10%] right-[40%] h-full bg-blue-500/20 border-l-2 border-blue-500 flex items-center px-2">
                        <span className="text-[9px] font-medium">Planning Phase</span>
                      </div>
                    </div>
                  </div>

                  {/* Career Transition Timeline */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <h3 className="text-[11px] font-semibold">Career Transition</h3>
                      <span className="text-[9px] text-muted-foreground">Dec 2024 - May 2025</span>
                    </div>
                    <div className="relative h-8 bg-muted/10 rounded overflow-hidden">
                      <div className="absolute top-0 left-[20%] right-[30%] h-full bg-green-500/20 border-l-2 border-green-500 flex items-center px-2">
                        <span className="text-[9px] font-medium">Job Search</span>
                      </div>
                    </div>
                  </div>

                  {/* Home Buying Timeline */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <h3 className="text-[11px] font-semibold">Home Buying</h3>
                      <span className="text-[9px] text-muted-foreground">Jan 2025 - Jul 2025</span>
                    </div>
                    <div className="relative h-8 bg-muted/10 rounded overflow-hidden">
                      <div className="absolute top-0 left-[30%] right-[20%] h-full bg-purple-500/20 border-l-2 border-purple-500 flex items-center px-2">
                        <span className="text-[9px] font-medium">House Hunting</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Months Legend */}
                  <div className="flex justify-between text-[9px] text-muted-foreground pt-4">
                    {['Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25', 'Jul 25'].map(month => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Overview' ? (
            /* Overview Dashboard */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-0.5">Overview</h2>
                  <p className="text-[10px] text-muted-foreground">5 active guides • 7 pending tasks</p>
                </div>

                {/* Active Guides List */}
                <div className="space-y-1">
                  {[
                    { name: 'Wedding Planning', progress: 20, questions: '3 of 15', color: 'blue', nextTask: 'Book photographer', nextDate: 'Nov 28' },
                    { name: 'Career Transition', progress: 42, questions: '5 of 12', color: 'green', nextTask: 'Update resume', nextDate: 'Nov 30' },
                    { name: 'Home Buying', progress: 14, questions: '2 of 14', color: 'purple', nextTask: 'Get pre-approved', nextDate: 'Jan 15' },
                    { name: 'Setting Boundaries', progress: 67, questions: '6 of 9', color: 'pink', nextTask: 'Practice saying no', nextDate: 'Dec 1' },
                    { name: 'Personal Growth', progress: 33, questions: '4 of 12', color: 'orange', nextTask: 'Morning meditation', nextDate: 'Daily' },
                  ].map((guide, i) => (
                    <div key={i} className="group px-3 py-3 hover:bg-muted/30 rounded transition-colors cursor-pointer">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            guide.color === 'blue' ? 'bg-blue-500' :
                            guide.color === 'green' ? 'bg-green-500' :
                            guide.color === 'purple' ? 'bg-purple-500' :
                            guide.color === 'pink' ? 'bg-pink-500' :
                            'bg-orange-500'
                          }`} />
                          <h3 className="text-[11px] font-semibold truncate">{guide.name}</h3>
                        </div>
                        <span className="text-[9px] text-muted-foreground flex-shrink-0">{guide.questions}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                          <div className={`h-full ${
                            guide.color === 'blue' ? 'bg-blue-500' :
                            guide.color === 'green' ? 'bg-green-500' :
                            guide.color === 'purple' ? 'bg-purple-500' :
                            guide.color === 'pink' ? 'bg-pink-500' :
                            'bg-orange-500'
                          }`} style={{ width: `${guide.progress}%` }} />
                        </div>
                        <span className="text-[9px] text-muted-foreground flex-shrink-0">{guide.progress}%</span>
                      </div>
                      <div className="mt-2 text-[9px] text-muted-foreground flex items-center gap-2">
                        <span>Next: {guide.nextTask}</span>
                        <span>·</span>
                        <span>{guide.nextDate}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                    Recent Activity
                  </div>
                  <div className="space-y-3">
                    {[
                      { action: 'Completed question', guide: 'Wedding Planning', time: '2 hours ago' },
                      { action: 'Added task', guide: 'Career Transition', time: '5 hours ago' },
                      { action: 'Updated timeline', guide: 'Home Buying', time: 'Yesterday' },
                      { action: 'Completed question', guide: 'Personal Growth', time: '2 days ago' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-1 text-[10px]">
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                        <span className="text-muted-foreground">{item.action} in</span>
                        <span className="font-medium">{item.guide}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground text-[9px]">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Calendar' ? (
            /* Calendar View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-4xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-semibold mb-0.5">November 2024</h2>
                    <p className="text-[10px] text-muted-foreground">4 events this month</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="px-2 py-1 text-[10px] hover:bg-muted/30 rounded transition-colors">Prev</button>
                    <button className="px-2 py-1 text-[10px] hover:bg-muted/30 rounded transition-colors">Today</button>
                    <button className="px-2 py-1 text-[10px] hover:bg-muted/30 rounded transition-colors">Next</button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="border-t border-l border-border/40">
                  {/* Days of Week */}
                  <div className="grid grid-cols-7">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="px-2 py-1.5 text-[9px] font-semibold text-muted-foreground border-r border-b border-border/40">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7">
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 2;
                      const hasEvent = [5, 12, 18, 25].includes(day);
                      const isToday = day === 15;

                      return (
                        <div
                          key={i}
                          className={`min-h-[70px] p-2 border-r border-b border-border/40 ${
                            day < 1 || day > 30 ? 'bg-muted/5' : 'hover:bg-muted/10 cursor-pointer'
                          } transition-colors`}
                        >
                          <div className={`text-[10px] mb-1 ${
                            isToday
                              ? 'w-5 h-5 rounded-full bg-[#6366f1] text-white flex items-center justify-center font-medium'
                              : day < 1 || day > 30
                              ? 'text-muted-foreground/40'
                              : 'text-foreground'
                          }`}>
                            {day > 0 && day <= 30 ? day : ''}
                          </div>
                          {hasEvent && day > 0 && (
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                                <div className="text-[9px] text-foreground truncate">Venue deposit</div>
                              </div>
                              {day === 18 && (
                                <div className="flex items-center gap-1">
                                  <div className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
                                  <div className="text-[9px] text-foreground truncate">Interview prep</div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Upcoming Events List */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                    Upcoming Events
                  </div>
                  <div className="space-y-2">
                    {[
                      { date: 'Nov 28', title: 'Venue deposit due', guide: 'Wedding Planning', color: 'blue' },
                      { date: 'Dec 1', title: 'Update LinkedIn profile', guide: 'Career Transition', color: 'green' },
                      { date: 'Dec 5', title: 'Schedule venue tour', guide: 'Wedding Planning', color: 'blue' },
                      { date: 'Dec 8', title: 'Research neighborhoods', guide: 'Home Buying', color: 'purple' },
                    ].map((event, i) => (
                      <div key={i} className="flex items-center gap-3 px-2 py-2 hover:bg-muted/30 rounded transition-colors cursor-pointer">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          event.color === 'blue' ? 'bg-blue-500' :
                          event.color === 'green' ? 'bg-green-500' :
                          'bg-purple-500'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-medium mb-0.5">{event.title}</div>
                          <div className="text-[9px] text-muted-foreground">{event.guide}</div>
                        </div>
                        <span className="text-[9px] text-muted-foreground flex-shrink-0">{event.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Discover' ? (
            /* Discover View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-0.5">Discover Guides</h2>
                  <p className="text-[10px] text-muted-foreground">1,200+ guides across 6 categories</p>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search guides..."
                      className="w-full h-9 pl-9 pr-4 rounded-lg border border-border/60 bg-background text-[11px] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                    />
                  </div>
                </div>

                {/* Popular Guides */}
                <div className="mb-8">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                    Popular This Week
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: 'Career Transition', category: 'Career & Work', users: 1203, questions: 12 },
                      { title: 'Wedding Planning', category: 'Life Events', users: 856, questions: 15 },
                      { title: 'Home Buying', category: 'Finance', users: 642, questions: 14 },
                      { title: 'Starting a Business', category: 'Career & Work', users: 534, questions: 18 },
                    ].map((guide, i) => (
                      <div key={i} className="p-3 rounded-lg border border-border/40 bg-background hover:shadow-sm transition-shadow cursor-pointer">
                        <h3 className="text-[11px] font-semibold mb-1">{guide.title}</h3>
                        <div className="text-[9px] text-muted-foreground mb-2">{guide.category}</div>
                        <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
                          <span>{guide.users.toLocaleString()} working on this</span>
                          <span>•</span>
                          <span>{guide.questions} questions</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                    Browse by Category
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Career & Work', guides: 156 },
                      { name: 'Relationships', guides: 203 },
                      { name: 'Health & Wellness', guides: 142 },
                      { name: 'Personal Growth', guides: 189 },
                      { name: 'Finance', guides: 127 },
                      { name: 'Life Events', guides: 181 },
                    ].map((category, i) => (
                      <div key={i} className="flex items-center justify-between px-3 py-2 hover:bg-muted/30 rounded transition-colors cursor-pointer">
                        <span className="text-[11px] font-medium">{category.name}</span>
                        <span className="text-[9px] text-muted-foreground">{category.guides} guides</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Journal' ? (
            /* Journal View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-0.5">Journal</h2>
                  <p className="text-[10px] text-muted-foreground">Free-form notes and thoughts</p>
                </div>

                {/* New Entry */}
                <div className="mb-6">
                  <div className="rounded-lg border border-border/40 bg-background p-4">
                    <input
                      type="text"
                      placeholder="Entry title..."
                      className="w-full text-[13px] font-semibold mb-3 bg-transparent border-none focus:outline-none"
                    />
                    <textarea
                      placeholder="Write your thoughts..."
                      className="w-full h-32 text-[11px] bg-transparent border-none focus:outline-none resize-none"
                    />
                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <span className="text-[9px] text-muted-foreground">Today, 3:42 PM</span>
                      <button className="px-3 py-1.5 rounded text-[10px] font-medium bg-[#6366f1] text-white hover:bg-[#6366f1]/90">
                        Save Entry
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Entries */}
                <div>
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                    Recent Entries
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'Thoughts on career changes', date: 'Yesterday, 8:15 PM', preview: 'Been thinking a lot about what I really want from my next role...' },
                      { title: 'Wedding venue visit', date: 'Nov 18, 2:30 PM', preview: 'Visited three venues today. The barn venue was stunning but...' },
                      { title: 'Morning reflections', date: 'Nov 17, 7:00 AM', preview: 'Woke up early and took some time to think about priorities...' },
                    ].map((entry, i) => (
                      <div key={i} className="p-3 rounded-lg border border-border/40 bg-background hover:shadow-sm transition-shadow cursor-pointer">
                        <h3 className="text-[11px] font-semibold mb-1">{entry.title}</h3>
                        <p className="text-[10px] text-muted-foreground mb-2 line-clamp-2">{entry.preview}</p>
                        <span className="text-[9px] text-muted-foreground">{entry.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Graph' ? (
            /* Graph View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-sm font-semibold mb-0.5">Graph View</h2>
                <p className="text-[10px] text-muted-foreground">How your guides connect</p>
              </div>

              {/* Mock Graph Visualization */}
              <div className="relative h-[500px] rounded-lg border border-border/30 bg-muted/5 overflow-hidden">
                {/* Connection lines */}
                <svg className="absolute inset-0 pointer-events-none">
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#6366f1" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#6366f1" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="33%" y2="75%" stroke="#6366f1" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="#6366f1" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 4" />
                </svg>

                {/* Central node - larger, active */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                  <div className="w-24 h-24 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/40 group-hover:border-[#6366f1] flex items-center justify-center transition-all group-hover:shadow-lg">
                    <span className="text-[10px] font-semibold text-center px-2 text-[#6366f1]">Wedding<br/>Planning</span>
                  </div>
                </div>

                {/* Connected nodes - smaller */}
                <div className="absolute top-1/4 left-1/4 cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-background border border-border/40 group-hover:border-emerald-500/60 flex items-center justify-center transition-all group-hover:shadow-md">
                    <span className="text-[9px] font-medium text-center px-2 text-muted-foreground group-hover:text-foreground">Home<br/>Buying</span>
                  </div>
                </div>

                <div className="absolute top-1/4 right-1/4 cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-background border border-border/40 group-hover:border-blue-500/60 flex items-center justify-center transition-all group-hover:shadow-md">
                    <span className="text-[9px] font-medium text-center px-2 text-muted-foreground group-hover:text-foreground">Career</span>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-1/3 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full bg-background border border-border/40 group-hover:border-pink-500/60 flex items-center justify-center transition-all group-hover:shadow-md">
                    <span className="text-[8px] font-medium text-center px-1 text-muted-foreground group-hover:text-foreground">Setting<br/>Boundaries</span>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-[30%] cursor-pointer group">
                  <div className="w-14 h-14 rounded-full bg-background border border-border/40 group-hover:border-purple-500/60 flex items-center justify-center transition-all group-hover:shadow-md">
                    <span className="text-[8px] font-medium text-center px-1 text-muted-foreground group-hover:text-foreground">Personal<br/>Growth</span>
                  </div>
                </div>
              </div>

              {/* Connection Stats - minimal */}
              <div className="mt-4 flex items-center gap-6 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1]/30" />
                  <span>3 date connections</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1]/30" />
                  <span>5 shared resources</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1]/30" />
                  <span>2 themes</span>
                </div>
              </div>
            </div>
          ) : activeTab === 'Daily' ? (
            /* Daily Note View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-0.5">Today's Note</h2>
                  <p className="text-[10px] text-muted-foreground">Friday, November 22, 2024</p>
                </div>

                {/* Today's Agenda - compact */}
                <div className="mb-6 p-3 rounded-lg border border-border/30 bg-muted/5">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Today's Agenda</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] group cursor-pointer">
                      <div className="w-3 h-3 rounded border border-blue-500/40 group-hover:bg-blue-500/10 transition-colors" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Call venue about catering options</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] group cursor-pointer">
                      <div className="w-3 h-3 rounded border border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Submit mortgage pre-approval documents</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] group cursor-pointer">
                      <div className="w-3 h-3 rounded border border-purple-500/40 group-hover:bg-purple-500/10 transition-colors" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Review job posting for Senior Engineer role</span>
                    </div>
                  </div>
                </div>

                {/* Note Content - clean */}
                <textarea
                  placeholder="What's on your mind today..."
                  className="w-full h-80 p-4 rounded-lg border border-border/30 bg-background text-[11px] leading-relaxed resize-none focus:outline-none focus:border-[#6366f1]/50 transition-colors"
                />

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[9px] text-muted-foreground">Last saved at 3:42 PM</span>
                  <button className="px-3 py-1.5 rounded text-[10px] font-medium bg-[#6366f1] text-white hover:bg-[#6366f1]/90 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ) : activeTab === 'Library' ? (
            /* Reading Library View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold mb-0.5">Reading Library</h2>
                  <p className="text-[10px] text-muted-foreground">42 articles across your guides</p>
                </div>
                {/* Filters - minimal */}
                <div className="flex items-center gap-1.5">
                  <button className="px-2.5 py-1 rounded text-[10px] font-medium bg-[#6366f1]/10 text-[#6366f1]">
                    All
                  </button>
                  <button className="px-2.5 py-1 rounded text-[10px] text-muted-foreground hover:bg-muted/30 transition-colors">
                    Saved
                  </button>
                  <button className="px-2.5 py-1 rounded text-[10px] text-muted-foreground hover:bg-muted/30 transition-colors">
                    Unread
                  </button>
                </div>
              </div>

              {/* Articles List - cleaner */}
              <div className="space-y-2">
                {[
                  { title: 'Ceremony Planning Essentials', guide: 'Wedding Planning', read: true, time: '5 min' },
                  { title: 'Mortgage Pre-Approval Guide', guide: 'Home Buying', read: false, time: '8 min' },
                  { title: 'Negotiating Your Salary', guide: 'Career Transition', read: true, time: '6 min' },
                  { title: 'Setting Healthy Boundaries', guide: 'Personal Growth', read: false, time: '4 min' },
                  { title: 'Wedding Budget Breakdown', guide: 'Wedding Planning', read: true, time: '7 min' },
                  { title: 'First-Time Home Buyer Tips', guide: 'Home Buying', read: false, time: '5 min' },
                  { title: 'Interview Preparation Checklist', guide: 'Career Transition', read: false, time: '6 min' },
                  { title: 'Saying No Without Guilt', guide: 'Personal Growth', read: true, time: '4 min' },
                ].map((article, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border/30 bg-background hover:border-border hover:shadow-sm transition-all cursor-pointer group">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[11px] font-medium truncate">{article.title}</h3>
                          {!article.read && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
                          <span className={`${
                            article.guide === 'Wedding Planning' ? 'text-[#6366f1]' :
                            article.guide === 'Home Buying' ? 'text-emerald-600' :
                            article.guide === 'Career Transition' ? 'text-blue-600' :
                            'text-purple-600'
                          }`}>{article.guide}</span>
                          <span>·</span>
                          <span>{article.time} read</span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'Analytics' ? (
            /* Analytics View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-sm font-semibold mb-0.5">Analytics</h2>
                <p className="text-[10px] text-muted-foreground">Track your progress</p>
              </div>

              {/* Stats Cards - compact */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] text-muted-foreground mb-1 uppercase tracking-wider">Questions</div>
                  <div className="text-xl font-semibold mb-0.5">42</div>
                  <div className="text-[9px] text-emerald-600 dark:text-emerald-400">+8 this week</div>
                </div>
                <div className="p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] text-muted-foreground mb-1 uppercase tracking-wider">Active</div>
                  <div className="text-xl font-semibold mb-0.5">5</div>
                  <div className="text-[9px] text-muted-foreground">guides</div>
                </div>
                <div className="p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] text-muted-foreground mb-1 uppercase tracking-wider">Streak</div>
                  <div className="text-xl font-semibold mb-0.5">7</div>
                  <div className="text-[9px] text-muted-foreground">days</div>
                </div>
                <div className="p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] text-muted-foreground mb-1 uppercase tracking-wider">Time</div>
                  <div className="text-xl font-semibold mb-0.5">12h</div>
                  <div className="text-[9px] text-muted-foreground">this month</div>
                </div>
              </div>

              {/* Activity Chart - minimal */}
              <div className="p-4 rounded-lg border border-border/30 bg-background mb-6">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">This Week</div>
                <div className="h-32 flex items-end justify-between gap-1.5">
                  {[3, 5, 2, 8, 4, 6, 7].map((height, i) => (
                    <div key={i} className="flex-1 bg-[#6366f1]/10 hover:bg-[#6366f1]/20 rounded-t transition-colors cursor-pointer" style={{height: `${height * 12}px`}} />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-muted-foreground">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <span key={i} className="flex-1 text-center">{day}</span>
                  ))}
                </div>
              </div>

              {/* Guide Progress - thin bars */}
              <div className="space-y-3">
                {[
                  { name: 'Wedding Planning', progress: 60, questions: '9/15', color: '#6366f1' },
                  { name: 'Career Transition', progress: 45, questions: '6/12', color: '#3b82f6' },
                  { name: 'Home Buying', progress: 30, questions: '4/14', color: '#10b981' },
                  { name: 'Personal Growth', progress: 75, questions: '12/16', color: '#a855f7' },
                ].map((guide, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border/30 bg-background hover:shadow-sm transition-shadow">
                    <div className="flex justify-between text-[10px] mb-2">
                      <span className="font-medium">{guide.name}</span>
                      <span className="text-muted-foreground">{guide.questions} questions</span>
                    </div>
                    <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{width: `${guide.progress}%`, backgroundColor: guide.color}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'Archive' ? (
            /* Archive View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-sm font-semibold mb-0.5">Archive</h2>
                <p className="text-[10px] text-muted-foreground">2 completed guides</p>
              </div>

              {/* Archived Guides - cleaner */}
              <div className="space-y-2">
                {[
                  { title: 'College Planning', completed: 'Sept 2024', questions: 11 },
                  { title: 'Breakup Recovery', completed: 'Aug 2024', questions: 9 },
                ].map((guide, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border/30 bg-muted/10 hover:bg-background transition-colors group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-[11px] font-medium mb-0.5">{guide.title}</h3>
                        <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
                          <span>Completed {guide.completed}</span>
                          <span>·</span>
                          <span>{guide.questions} questions</span>
                        </div>
                      </div>
                      <button className="text-[10px] text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity">
                        Restore
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'Settings' ? (
            /* Settings View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-xl">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-0.5">Settings</h2>
                  <p className="text-[10px] text-muted-foreground">Manage your account</p>
                </div>

                {/* Appearance - compact */}
                <div className="mb-4 p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Appearance</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px]">Theme</span>
                    <div className="flex items-center gap-1.5">
                      <button className="px-2.5 py-1 rounded text-[10px] font-medium bg-[#6366f1]/10 text-[#6366f1]">Light</button>
                      <button className="px-2.5 py-1 rounded text-[10px] text-muted-foreground hover:bg-muted/30 transition-colors">Dark</button>
                      <button className="px-2.5 py-1 rounded text-[10px] text-muted-foreground hover:bg-muted/30 transition-colors">Auto</button>
                    </div>
                  </div>
                </div>

                {/* Notifications - compact toggles */}
                <div className="mb-4 p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Notifications</div>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px]">Daily reminders</span>
                      <button className="w-9 h-5 rounded-full bg-[#6366f1] relative transition-colors">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px]">Task deadlines</span>
                      <button className="w-9 h-5 rounded-full bg-[#6366f1] relative transition-colors">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px]">Weekly summary</span>
                      <button className="w-9 h-5 rounded-full bg-muted/50 relative transition-colors">
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Data - minimal */}
                <div className="mb-4 p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Data & Privacy</div>
                  <div className="space-y-1">
                    <button className="w-full text-left px-2 py-1.5 rounded text-[10px] hover:bg-muted/30 transition-colors">
                      Export all data
                    </button>
                    <button className="w-full text-left px-2 py-1.5 rounded text-[10px] text-red-600 hover:bg-red-500/10 transition-colors">
                      Delete account
                    </button>
                  </div>
                </div>

                {/* Account info */}
                <div className="p-3 rounded-lg border border-border/30 bg-background">
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Account</div>
                  <div className="space-y-2 text-[10px] text-muted-foreground">
                    <div>user@example.com</div>
                    <div>Joined November 2024</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
          {/* Left Column - Prompts & Articles */}
          <div className="w-72 border-r border-border/40 flex flex-col bg-muted/20">
            {/* Page Header */}
            <div className="border-b border-border/40">
              {/* Cover Image */}
              <div className="h-24 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[9px] text-white font-medium px-2 py-1 bg-black/50 rounded">
                    Change cover
                  </div>
                </div>
              </div>

              {/* Icon + Title */}
              <div className="p-3">
                <div className="flex items-start gap-2 mb-2">
                  {/* Emoji Icon Picker */}
                  <div className="text-3xl leading-none cursor-pointer hover:bg-muted/50 rounded p-1 transition-colors" title="Change icon">
                    💍
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    {/* Editable Title */}
                    <h2 className="text-[13px] font-semibold truncate">Sarah & Mike's Wedding</h2>
                    <p className="text-[9px] text-muted-foreground">Wedding Planning Guide · Created Nov 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
                  <span>3 of 15 complete</span>
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 w-1/5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="flex-1 overflow-y-auto p-3">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Questions
              </div>
              <div className="space-y-1">
                {[
                  { q: 'What is your overall vision and theme?', done: true },
                  { q: 'What is your budget breakdown?', done: true },
                  { q: 'What is your ideal guest count?', done: true },
                  { q: 'What are your ceremony priorities?', done: false },
                  { q: 'What are your catering preferences?', done: false },
                ].map((prompt, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded text-[10px] cursor-pointer transition-colors flex items-start gap-2 ${
                      i === 3
                        ? 'bg-primary/10 text-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    {prompt.done ? (
                      <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="flex-1">{prompt.q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Readings Section */}
            <div className="border-t border-border/40 p-3">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Readings
              </div>
              <div className="space-y-1.5">
                {[
                  { title: 'Wedding Planning Timeline', time: '8 min' },
                  { title: 'Budget Management Tips', time: '6 min' },
                ].map((article, i) => (
                  <div
                    key={i}
                    className="p-2 rounded border border-border/60 hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-medium">{article.title}</div>
                        <div className="text-[9px] text-muted-foreground">{article.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Question Detail */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Question Header */}
            <div className="p-4 border-b border-border/40">
              <div className="text-[9px] text-muted-foreground mb-1">QUESTION 4 OF 15</div>
              <h2 className="text-sm font-semibold mb-3">What are your priorities for the ceremony and reception?</h2>
              <p className="text-[11px] text-muted-foreground">
                Think about what moments matter most to you and what kind of atmosphere you want to create for each part of your wedding day.
              </p>
            </div>

            {/* Response Area */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-medium mb-1.5">Your Response</label>
                  <textarea
                    className="w-full h-32 p-3 rounded-lg border border-border/60 bg-background text-[11px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Take your time to reflect on what matters most to you..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button className="text-[10px] text-muted-foreground hover:text-foreground">
                    Skip for now
                  </button>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded text-[10px] font-medium border border-border/60 hover:bg-muted/30">
                      Save Draft
                    </button>
                    <button className="px-3 py-1.5 rounded text-[10px] font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                      Save & Next
                    </button>
                  </div>
                </div>

                {/* Helper Section */}
                <div className="mt-6 pt-4 border-t border-border/40">
                  <h3 className="text-[11px] font-semibold mb-2">Need inspiration?</h3>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-muted/30 border border-border/40">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-[10px] font-medium mb-0.5">Ceremony Planning Essentials</div>
                          <div className="text-[9px] text-muted-foreground mb-1.5">Key elements to consider when planning your wedding ceremony</div>
                          <button className="text-[9px] text-primary hover:underline">Read article →</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Reading Content */}
          <div className="w-96 border-l border-border/40 flex flex-col bg-background overflow-hidden">
            {/* Reading Header */}
            <div className="p-4 border-b border-border/40">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-[12px] font-semibold flex-1">Wedding Planning Timeline</h3>
                <button className="p-1 rounded hover:bg-muted/50">
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
                <span>8 min read</span>
                <span>•</span>
                <span>Updated Nov 2024</span>
              </div>
            </div>

            {/* Reading Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="prose prose-sm max-w-none">
                <h4 className="text-[11px] font-semibold mb-2">12-18 Months Before</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">
                  Begin with the big picture decisions. Set your budget, determine your guest count, and start touring venues.
                  This is also the time to hire your key vendors like photographers and caterers.
                </p>

                <h4 className="text-[11px] font-semibold mb-2">9-11 Months Before</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">
                  Book your ceremony and reception venues. Shop for your wedding dress and bridesmaids dresses.
                  Send save-the-dates and create your wedding website.
                </p>

                <h4 className="text-[11px] font-semibold mb-2">6-8 Months Before</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">
                  Order invitations, book your florist and DJ/band, and start planning your honeymoon.
                  This is also when you should register for gifts and start dress fittings.
                </p>

                <h4 className="text-[11px] font-semibold mb-2">3-5 Months Before</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">
                  Finalize your menu and cake design. Book transportation and accommodations for out-of-town guests.
                  Order wedding rings and schedule final dress fittings.
                </p>

                <h4 className="text-[11px] font-semibold mb-2">1-2 Months Before</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">
                  Send invitations, finalize seating chart, and confirm details with all vendors.
                  Apply for marriage license and schedule final hair and makeup trials.
                </p>

                <div className="mt-6 p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="text-[10px] font-semibold mb-1">Pro Tip</div>
                  <div className="text-[9px] text-muted-foreground leading-relaxed">
                    Create a shared spreadsheet to track all deadlines and vendor payments. This keeps you organized and ensures nothing falls through the cracks.
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
