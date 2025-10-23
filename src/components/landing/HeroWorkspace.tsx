import { FileText, BookOpen, User, Moon, X, Plus, Circle, CheckCircle2, ChevronRight, Search, Star, Clock, Calendar, ListTodo, BarChart3, LayoutDashboard, PanelLeftClose, PanelLeft } from "lucide-react";
import { useState } from "react";

export function HeroWorkspace() {
  const [activeView, setActiveView] = useState<'guides' | 'calendar' | 'tasks' | 'timeline' | 'overview'>('guides');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openTabs, setOpenTabs] = useState<string[]>(['Wedding Planning']);
  const [activeTab, setActiveTab] = useState('Wedding Planning');

  const handleViewClick = (view: 'guides' | 'calendar' | 'tasks' | 'timeline' | 'overview') => {
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
      const guideTabs = openTabs.filter(tab => !['Calendar', 'Tasks', 'Timeline', 'Overview'].includes(tab));
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
          {/* Guides Icon */}
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

          {/* Calendar Icon */}
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

          {/* Tasks Icon */}
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

          {/* Timeline Icon */}
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

          {/* Overview Icon */}
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
        </div>

        {/* Main Sidebar - Conditional based on active view */}
        {sidebarOpen && (
        <div className="w-52 border-r border-border/40 flex flex-col bg-muted/5">
          {activeView === 'guides' ? (
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

              {/* My Pages Section */}
              <div className="flex-1 overflow-y-auto px-1.5">
                <div className="text-[9px] font-medium text-muted-foreground px-1.5 py-1">
                  My Pages
                </div>
            <div className="space-y-0.5">
              {/* Active Page */}
              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-muted/50 cursor-pointer group">
                <FileText className="w-3 h-3 flex-shrink-0" />
                <span className="text-[11px] flex-1 truncate">Wedding Planning</span>
              </div>

              {/* Other Pages */}
              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-muted-foreground hover:bg-muted/50 cursor-pointer group">
                <FileText className="w-3 h-3 flex-shrink-0" />
                <span className="text-[11px] flex-1 truncate">Career Transition</span>
              </div>

              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-muted-foreground hover:bg-muted/50 cursor-pointer group">
                <FileText className="w-3 h-3 flex-shrink-0" />
                <span className="text-[11px] flex-1 truncate">Setting Boundaries</span>
              </div>

              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-muted-foreground hover:bg-muted/50 cursor-pointer group">
                <FileText className="w-3 h-3 flex-shrink-0" />
                <span className="text-[11px] flex-1 truncate">Personal Growth</span>
              </div>

              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-muted-foreground hover:bg-muted/50 cursor-pointer group">
                <FileText className="w-3 h-3 flex-shrink-0" />
                <span className="text-[11px] flex-1 truncate">Home Buying</span>
              </div>
            </div>

            {/* Favorites */}
            <div className="text-[9px] font-medium text-muted-foreground px-1.5 py-1 mt-3">
              Favorites
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-muted-foreground hover:bg-muted/50 cursor-pointer group">
                <Star className="w-3 h-3 flex-shrink-0" />
                <span className="text-[11px] flex-1 truncate">Career Transition</span>
              </div>
            </div>
          </div>

              {/* New Page Button */}
              <div className="p-1.5 border-t border-border/40">
                <button className="w-full flex items-center gap-1.5 px-1.5 py-1 rounded text-muted-foreground hover:bg-muted/50 transition-colors">
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
                  const isGuide = !['Calendar', 'Tasks', 'Timeline', 'Overview'].includes(tab);
                  const Icon = isGuide ? FileText : tab === 'Calendar' ? Calendar : tab === 'Tasks' ? ListTodo : tab === 'Timeline' ? BarChart3 : LayoutDashboard;
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
                        else setActiveView('guides');
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 min-w-fit cursor-pointer ${
                        isActive
                          ? 'bg-muted/30 border-x border-t border-border/40'
                          : 'hover:bg-muted/20 border-transparent'
                      }`}
                    >
                      <Icon className={`w-3 h-3 ${isActive ? `text-${color}-600 dark:text-${color}-400` : 'text-muted-foreground'}`} style={isActive && tab === 'Calendar' ? {color: '#6366f1'} : {}} />
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
                <button className="p-1.5 rounded hover:bg-muted/30">
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
          {activeTab === 'Tasks' ? (
            /* Tasks View - Kanban */
            <div className="flex-1 p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">Tasks</h2>
                <p className="text-[11px] text-muted-foreground">Manage tasks from your active guides</p>
              </div>

              {/* Kanban Board */}
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* To Do Column */}
                <div className="flex flex-col">
                  <div className="px-3 py-2 bg-muted/20 rounded-t-lg border border-b-0 border-border/40">
                    <h3 className="text-[11px] font-semibold">To Do</h3>
                    <span className="text-[9px] text-muted-foreground">5 tasks</span>
                  </div>
                  <div className="flex-1 border border-border/40 rounded-b-lg p-2 space-y-2 bg-muted/5">
                    {[
                      { title: 'Book photographer', guide: 'Wedding', color: 'blue' },
                      { title: 'Update resume', guide: 'Career', color: 'green' },
                      { title: 'Schedule venue tour', guide: 'Wedding', color: 'blue' },
                      { title: 'Research neighborhoods', guide: 'Home Buying', color: 'purple' },
                      { title: 'Send invitations', guide: 'Wedding', color: 'blue' },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded-lg border border-border/40 bg-background hover:shadow-sm transition-shadow cursor-pointer">
                        <div className="text-[10px] font-medium mb-1">{task.title}</div>
                        <div className={`inline-block text-[8px] px-1.5 py-0.5 rounded bg-${task.color}-500/10 text-${task.color}-600 dark:text-${task.color}-400`}>
                          {task.guide}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress Column */}
                <div className="flex flex-col">
                  <div className="px-3 py-2 bg-muted/20 rounded-t-lg border border-b-0 border-border/40">
                    <h3 className="text-[11px] font-semibold">In Progress</h3>
                    <span className="text-[9px] text-muted-foreground">2 tasks</span>
                  </div>
                  <div className="flex-1 border border-border/40 rounded-b-lg p-2 space-y-2 bg-muted/5">
                    {[
                      { title: 'Plan ceremony details', guide: 'Wedding', color: 'blue' },
                      { title: 'Network with recruiters', guide: 'Career', color: 'green' },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded-lg border border-border/40 bg-background hover:shadow-sm transition-shadow cursor-pointer">
                        <div className="text-[10px] font-medium mb-1">{task.title}</div>
                        <div className={`inline-block text-[8px] px-1.5 py-0.5 rounded bg-${task.color}-500/10 text-${task.color}-600 dark:text-${task.color}-400`}>
                          {task.guide}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done Column */}
                <div className="flex flex-col">
                  <div className="px-3 py-2 bg-muted/20 rounded-t-lg border border-b-0 border-border/40">
                    <h3 className="text-[11px] font-semibold">Done</h3>
                    <span className="text-[9px] text-muted-foreground">3 tasks</span>
                  </div>
                  <div className="flex-1 border border-border/40 rounded-b-lg p-2 space-y-2 bg-muted/5">
                    {[
                      { title: 'Set wedding budget', guide: 'Wedding', color: 'blue' },
                      { title: 'Create LinkedIn profile', guide: 'Career', color: 'green' },
                      { title: 'Book venue', guide: 'Wedding', color: 'blue' },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded-lg border border-border/40 bg-background opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="text-[10px] font-medium mb-1 line-through">{task.title}</div>
                        <div className={`inline-block text-[8px] px-1.5 py-0.5 rounded bg-${task.color}-500/10 text-${task.color}-600 dark:text-${task.color}-400`}>
                          {task.guide}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'Timeline' ? (
            /* Timeline View - Gantt */
            <div className="flex-1 p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">Timeline</h2>
                <p className="text-[11px] text-muted-foreground">Visualize all your projects</p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {/* Wedding Planning Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded bg-blue-500/20" />
                    <h3 className="text-[11px] font-semibold">Wedding Planning</h3>
                    <span className="text-[9px] text-muted-foreground">Nov 2024 - Jun 2025</span>
                  </div>
                  <div className="relative h-12 bg-muted/20 rounded-lg border border-border/40">
                    <div className="absolute top-2 left-[10%] right-[40%] h-8 bg-blue-500/20 border border-blue-500/40 rounded flex items-center px-2">
                      <span className="text-[9px] font-medium">Planning Phase</span>
                    </div>
                  </div>
                </div>

                {/* Career Transition Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded bg-green-500/20" />
                    <h3 className="text-[11px] font-semibold">Career Transition</h3>
                    <span className="text-[9px] text-muted-foreground">Dec 2024 - May 2025</span>
                  </div>
                  <div className="relative h-12 bg-muted/20 rounded-lg border border-border/40">
                    <div className="absolute top-2 left-[20%] right-[30%] h-8 bg-green-500/20 border border-green-500/40 rounded flex items-center px-2">
                      <span className="text-[9px] font-medium">Job Search</span>
                    </div>
                  </div>
                </div>

                {/* Home Buying Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded bg-purple-500/20" />
                    <h3 className="text-[11px] font-semibold">Home Buying</h3>
                    <span className="text-[9px] text-muted-foreground">Jan 2025 - Jul 2025</span>
                  </div>
                  <div className="relative h-12 bg-muted/20 rounded-lg border border-border/40">
                    <div className="absolute top-2 left-[30%] right-[20%] h-8 bg-purple-500/20 border border-purple-500/40 rounded flex items-center px-2">
                      <span className="text-[9px] font-medium">House Hunting</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Months Legend */}
                <div className="flex justify-between text-[9px] text-muted-foreground pt-4 border-t border-border/40">
                  {['Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25', 'Jul 25'].map(month => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : activeTab === 'Overview' ? (
            /* Overview Dashboard */
            <div className="flex-1 p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">Overview</h2>
                <p className="text-[11px] text-muted-foreground">All your guides at a glance</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg border border-border/40 bg-muted/5">
                  <div className="text-[10px] text-muted-foreground mb-1">Active Guides</div>
                  <div className="text-2xl font-bold">5</div>
                </div>
                <div className="p-4 rounded-lg border border-border/40 bg-muted/5">
                  <div className="text-[10px] text-muted-foreground mb-1">Pending Tasks</div>
                  <div className="text-2xl font-bold">7</div>
                </div>
                <div className="p-4 rounded-lg border border-border/40 bg-muted/5">
                  <div className="text-[10px] text-muted-foreground mb-1">Upcoming Dates</div>
                  <div className="text-2xl font-bold">4</div>
                </div>
              </div>

              {/* Active Guides List */}
              <div className="space-y-3">
                {[
                  { name: 'Wedding Planning', progress: 20, questions: '3 of 15', color: 'blue' },
                  { name: 'Career Transition', progress: 42, questions: '5 of 12', color: 'green' },
                  { name: 'Home Buying', progress: 14, questions: '2 of 14', color: 'purple' },
                  { name: 'Setting Boundaries', progress: 67, questions: '6 of 9', color: 'pink' },
                  { name: 'Personal Growth', progress: 33, questions: '4 of 12', color: 'orange' },
                ].map((guide, i) => (
                  <div key={i} className="p-4 rounded-lg border border-border/40 bg-background hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${guide.color}-500`} />
                        <h3 className="text-[11px] font-semibold">{guide.name}</h3>
                      </div>
                      <span className="text-[9px] text-muted-foreground">{guide.questions} complete</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full bg-${guide.color}-500`} style={{ width: `${guide.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'Calendar' ? (
            /* Calendar View */
            <div className="flex-1 p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">Calendar</h2>
                <p className="text-[11px] text-muted-foreground">All dates from your active guides</p>
              </div>

              {/* Calendar Grid */}
              <div className="border border-border/40 rounded-lg overflow-hidden">
                {/* Calendar Header */}
                <div className="bg-muted/20 px-4 py-2 border-b border-border/40 flex items-center justify-between">
                  <h3 className="text-[12px] font-semibold">November 2024</h3>
                  <div className="flex gap-1">
                    <button className="px-2 py-1 text-[10px] hover:bg-muted/50 rounded">Prev</button>
                    <button className="px-2 py-1 text-[10px] hover:bg-muted/50 rounded">Today</button>
                    <button className="px-2 py-1 text-[10px] hover:bg-muted/50 rounded">Next</button>
                  </div>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 border-b border-border/40">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="px-2 py-1.5 text-[9px] font-semibold text-muted-foreground text-center border-r border-border/40 last:border-r-0">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 2; // Start from day -2 to show previous month
                    const hasEvent = [5, 12, 18, 25].includes(day);
                    const isToday = day === 15;

                    return (
                      <div
                        key={i}
                        className={`min-h-[80px] p-2 border-r border-b border-border/40 last:border-r-0 ${
                          day < 1 || day > 30 ? 'bg-muted/10' : ''
                        }`}
                      >
                        <div className={`text-[10px] mb-1 ${isToday ? 'w-5 h-5 rounded-full bg-[#6366f1] text-white flex items-center justify-center' : day < 1 || day > 30 ? 'text-muted-foreground' : ''}`}>
                          {day > 0 && day <= 30 ? day : ''}
                        </div>
                        {hasEvent && day > 0 && (
                          <div className="space-y-1">
                            <div className="text-[8px] px-1.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded truncate">
                              Venue deposit
                            </div>
                            {day === 18 && (
                              <div className="text-[8px] px-1.5 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded truncate">
                                Interview prep
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <>
          {/* Left Column - Prompts & Articles */}
          <div className="w-72 border-r border-border/40 flex flex-col bg-muted/20">
            {/* Page Header */}
            <div className="p-3 border-b border-border/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center">
                  <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-[12px] font-semibold truncate">Wedding Planning</h2>
                  <p className="text-[9px] text-muted-foreground">Created Nov 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-muted-foreground">
                <span>3 of 15 complete</span>
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-1/5" />
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
