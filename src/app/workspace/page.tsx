'use client';

import { WorkspaceSidebar } from "@/components/workspace-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconTrendingUp, IconFileText, IconFolders, IconPencil, IconTemplate, IconStar, IconClock, IconChevronLeft, IconChevronRight, IconCirclePlus } from "@tabler/icons-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconSearch } from "@tabler/icons-react"
import { templateRegistry } from '@/registry/templates';
import { useRouter } from 'next/navigation';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { ChatView } from '@/components/workspace-views/chat-view';
import { SplitView } from '@/components/workspace-views/split-view';
import { BoardView } from '@/components/workspace-views/board-view';
import { ChecklistView } from '@/components/workspace-views/checklist-view';
import { TableView } from '@/components/workspace-views/table-view';
import { TimelineView } from '@/components/workspace-views/timeline-view';
import { TextEditorView } from '@/components/workspace-views/text-editor-view';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/shadcn-io/dock';
import { IconNotes } from '@tabler/icons-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export type ViewMode = 'chat' | 'split' | 'board' | 'text' | 'timeline' | 'table' | 'cards' | 'outline' | 'checklist' | 'tabs';

export default function WorkspacePage() {
  const router = useRouter();
  const totalTemplates = templateRegistry.length;
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(
    templateRegistry[0]?.id || null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [letterFilter, setLetterFilter] = useState<string>('all');
  const [promptsSearchQuery, setPromptsSearchQuery] = useState('');
  const [articlesSearchQuery, setArticlesSearchQuery] = useState('');
  const [workspacesSearchQuery, setWorkspacesSearchQuery] = useState('');
  const [templatesDrawerOpen, setTemplatesDrawerOpen] = useState(false);
  const [promptsDrawerOpen, setPromptsDrawerOpen] = useState(false);
  const [articlesDrawerOpen, setArticlesDrawerOpen] = useState(false);
  const [allPrompts, setAllPrompts] = useState<any[]>([]);
  const [allArticles, setAllArticles] = useState<any[]>([]);
  const [promptsLoading, setPromptsLoading] = useState(false);
  const [articlesLoading, setArticlesLoading] = useState(false);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      const view = hash || 'dashboard';
      setCurrentView(view);
    };

    handleHashChange(); // Set initial view
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load prompts when template is selected
  useEffect(() => {
    if (!selectedTemplateId) {
      setAllPrompts([]);
      setPromptsLoading(false);
      return;
    }

    setPromptsLoading(true);

    const loadTemplatePrompts = async () => {
      const template = templateRegistry.find(t => t.id === selectedTemplateId);
      if (!template) {
        setAllPrompts([]);
        setPromptsLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/prompts?templateId=${selectedTemplateId}`);
        const data = await res.json();

        const promptsData = (data.prompts || []).map((p: any) => ({
          ...p,
          template: template.name,
          templateId: template.id
        }));

        setAllPrompts(promptsData);
      } catch (error) {
        console.error('Error loading prompts:', error);
        setAllPrompts([]);
      } finally {
        setPromptsLoading(false);
      }
    };

    loadTemplatePrompts();
  }, [selectedTemplateId]);

  // Load articles when template is selected
  useEffect(() => {
    if (!selectedTemplateId) {
      setAllArticles([]);
      setArticlesLoading(false);
      return;
    }

    setArticlesLoading(true);

    const loadTemplateArticles = async () => {
      const template = templateRegistry.find(t => t.id === selectedTemplateId);
      if (!template) {
        setAllArticles([]);
        setArticlesLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('templata_articles')
          .select('id, title, excerpt, template, read_time, type, published_at, slug')
          .eq('template', template.id)
          .order('published_at', { ascending: false });

        if (!error && data) {
          setAllArticles(data.map(article => ({
            id: article.id,
            title: article.title,
            excerpt: article.excerpt,
            template: article.template,
            readTime: article.read_time,
            type: article.type,
            publishedAt: article.published_at,
            slug: article.slug
          })));
        } else {
          setAllArticles([]);
        }
      } catch (error) {
        console.error('Error loading articles:', error);
        setAllArticles([]);
      } finally {
        setArticlesLoading(false);
      }
    };

    loadTemplateArticles();
  }, [selectedTemplateId]);

  // Pagination state
  const [allPage, setAllPage] = useState(0);
  const [recentPage, setRecentPage] = useState(0);
  const [favoritesPage, setFavoritesPage] = useState(0);
  const [workspacesPage, setWorkspacesPage] = useState(0);
  const [templatesPage, setTemplatesPage] = useState(0);
  const [promptsPage, setPromptsPage] = useState(0);
  const [articlesPage, setArticlesPage] = useState(0);
  const [workspacesViewPage, setWorkspacesViewPage] = useState(0);
  const pageSize = 10;
  const templatesPageSize = 20;
  const viewPageSize = 20;

  // Mock data - replace with real data later
  const stats = {
    totalTemplates: totalTemplates,
    activeWorkspaces: 3,
    totalWords: 12450,
    templatesUsed: 8,
  };

  // Group templates by category for the table
  const allTemplates = templateRegistry;
  const recentTemplates = templateRegistry.slice(0, 5); // Last 5 used
  const favoriteTemplates = templateRegistry.filter(t => favorites.includes(t.id));

  // Mock workspaces
  const workspaces = [
    { id: 1, name: 'Morning Journal', template: 'Daily Reflection', lastEdited: '2 hours ago', wordCount: 450 },
    { id: 2, name: 'Business Plan Draft', template: 'Strategic Planning', lastEdited: '1 day ago', wordCount: 2340 },
    { id: 3, name: 'Weekly Review', template: 'Weekly Review', lastEdited: '3 days ago', wordCount: 890 },
  ];

  // Paginated data
  const paginatedAllTemplates = allTemplates.slice(allPage * pageSize, (allPage + 1) * pageSize);
  const paginatedRecentTemplates = recentTemplates.slice(recentPage * pageSize, (recentPage + 1) * pageSize);
  const paginatedFavoriteTemplates = favoriteTemplates.slice(favoritesPage * pageSize, (favoritesPage + 1) * pageSize);
  const paginatedWorkspaces = workspaces.slice(workspacesPage * pageSize, (workspacesPage + 1) * pageSize);

  // Filter templates for templates view
  const filteredTemplates = useMemo(() => {
    let filtered = templateRegistry;

    // Apply search query filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply letter filter
    if (letterFilter !== 'all') {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().startsWith(letterFilter.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, letterFilter]);

  const paginatedTemplatesView = useMemo(() => {
    return filteredTemplates.slice(templatesPage * templatesPageSize, (templatesPage + 1) * templatesPageSize);
  }, [filteredTemplates, templatesPage]);

  const totalTemplatesPages = Math.ceil(filteredTemplates.length / templatesPageSize);

  // Filter and paginate prompts
  const filteredPrompts = useMemo(() => {
    if (!promptsSearchQuery.trim()) return allPrompts;
    return allPrompts.filter(p =>
      p.prompt?.toLowerCase().includes(promptsSearchQuery.toLowerCase()) ||
      p.template?.toLowerCase().includes(promptsSearchQuery.toLowerCase()) ||
      p.categoryName?.toLowerCase().includes(promptsSearchQuery.toLowerCase())
    );
  }, [promptsSearchQuery, allPrompts]);

  const paginatedPrompts = useMemo(() => {
    return filteredPrompts.slice(promptsPage * viewPageSize, (promptsPage + 1) * viewPageSize);
  }, [filteredPrompts, promptsPage]);

  const totalPromptsPages = Math.ceil(filteredPrompts.length / viewPageSize);

  // Filter and paginate articles
  const filteredArticles = useMemo(() => {
    if (!articlesSearchQuery.trim()) return allArticles;
    return allArticles.filter(a =>
      a.title?.toLowerCase().includes(articlesSearchQuery.toLowerCase()) ||
      a.template?.toLowerCase().includes(articlesSearchQuery.toLowerCase()) ||
      a.excerpt?.toLowerCase().includes(articlesSearchQuery.toLowerCase())
    );
  }, [articlesSearchQuery, allArticles]);

  const paginatedArticles = useMemo(() => {
    return filteredArticles.slice(articlesPage * viewPageSize, (articlesPage + 1) * viewPageSize);
  }, [filteredArticles, articlesPage]);

  const totalArticlesPages = Math.ceil(filteredArticles.length / viewPageSize);

  // Filter and paginate workspaces for workspaces view
  const filteredWorkspacesView = useMemo(() => {
    if (!workspacesSearchQuery.trim()) return workspaces;
    return workspaces.filter(w =>
      w.name.toLowerCase().includes(workspacesSearchQuery.toLowerCase()) ||
      w.template.toLowerCase().includes(workspacesSearchQuery.toLowerCase())
    );
  }, [workspacesSearchQuery]);

  const paginatedWorkspacesView = useMemo(() => {
    return filteredWorkspacesView.slice(workspacesViewPage * viewPageSize, (workspacesViewPage + 1) * viewPageSize);
  }, [filteredWorkspacesView, workspacesViewPage]);

  const totalWorkspacesPages = Math.ceil(filteredWorkspacesView.length / viewPageSize);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <WorkspaceSidebar
        variant="inset"
        viewMode={currentView as ViewMode}
        onViewModeChange={(mode) => {
          setCurrentView(mode);
          window.location.hash = mode;
        }}
      />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col pb-32">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {currentView === 'dashboard' ? (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

              {/* Stats Cards */}
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

                {/* All Templates */}
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>All Templates</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      {stats.totalTemplates}
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconTemplate className="h-3 w-3" />
                        Free access
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      All templates available
                    </div>
                    <div className="text-muted-foreground">
                      Across all categories
                    </div>
                  </CardFooter>
                </Card>

                {/* Active Workspaces */}
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Active Workspaces</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      {stats.activeWorkspaces}
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconFolders className="h-3 w-3" />
                        In progress
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Current workspaces
                    </div>
                    <div className="text-muted-foreground">
                      Documents you're working on
                    </div>
                  </CardFooter>
                </Card>

                {/* Total Words */}
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Words This Month</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      {stats.totalWords.toLocaleString()}
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconTrendingUp />
                        +22%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Great progress <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Keep up the momentum
                    </div>
                  </CardFooter>
                </Card>

                {/* Templates Used */}
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Templates Used</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      {stats.templatesUsed}
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconPencil className="h-3 w-3" />
                        This month
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Exploring templates
                    </div>
                    <div className="text-muted-foreground">
                      Try more to find your favorites
                    </div>
                  </CardFooter>
                </Card>

              </div>

              {/* Activity Chart */}
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>

              {/* Tabbed Tables */}
              <div className="px-4 lg:px-6">
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <TabsList>
                      <TabsTrigger value="all">All Templates</TabsTrigger>
                      <TabsTrigger value="recent">
                        <IconClock className="h-3 w-3 mr-1" />
                        Recent
                      </TabsTrigger>
                      <TabsTrigger value="favorites">
                        <IconStar className="h-3 w-3 mr-1" />
                        Favorites
                      </TabsTrigger>
                      <TabsTrigger value="workspaces">
                        <IconFolders className="h-3 w-3 mr-1" />
                        Workspaces
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* All Templates Tab */}
                  <TabsContent value="all">
                    <div className="space-y-4">
                      <div className="rounded-lg border overflow-x-auto">
                        <Table>
                          <TableHeader className="bg-muted">
                            <TableRow>
                              <TableHead className="min-w-[200px]">Template</TableHead>
                              <TableHead className="min-w-[120px]">Category</TableHead>
                              <TableHead className="min-w-[300px] max-w-[400px]">Description</TableHead>
                              <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {paginatedAllTemplates.map((template) => (
                              <TableRow key={template.id}>
                                <TableCell className="font-medium">{template.name}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="text-muted-foreground px-1.5">
                                    {template.category}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground max-w-[400px] truncate">
                                  {template.description}
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => router.push(`/templates/${template.id}`)}
                                  >
                                    Open
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="flex items-center justify-between px-2">
                        <div className="text-sm text-muted-foreground">
                          Showing {allPage * pageSize + 1} to {Math.min((allPage + 1) * pageSize, allTemplates.length)} of {allTemplates.length} templates
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setAllPage(Math.max(0, allPage - 1))}
                            disabled={allPage === 0}
                          >
                            <IconChevronLeft className="h-4 w-4" />
                            Previous
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setAllPage(allPage + 1)}
                            disabled={(allPage + 1) * pageSize >= allTemplates.length}
                          >
                            Next
                            <IconChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Recent Tab */}
                  <TabsContent value="recent">
                    <div className="rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Template</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Last Used</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentTemplates.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                No recent templates
                              </TableCell>
                            </TableRow>
                          ) : (
                            recentTemplates.map((template) => (
                              <TableRow key={template.id}>
                                <TableCell className="font-medium">{template.name}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="text-muted-foreground px-1.5">
                                    {template.category}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground">
                                  2 days ago
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => router.push(`/templates/${template.id}`)}
                                  >
                                    Open
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  {/* Favorites Tab */}
                  <TabsContent value="favorites">
                    <div className="rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Template</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {favoriteTemplates.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                No favorite templates yet. Star templates to add them here.
                              </TableCell>
                            </TableRow>
                          ) : (
                            favoriteTemplates.map((template) => (
                              <TableRow key={template.id}>
                                <TableCell className="font-medium">{template.name}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="text-muted-foreground px-1.5">
                                    {template.category}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground">
                                  {template.description}
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => router.push(`/templates/${template.id}`)}
                                  >
                                    Open
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  {/* Workspaces Tab */}
                  <TabsContent value="workspaces">
                    <div className="rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Workspace</TableHead>
                            <TableHead>Template</TableHead>
                            <TableHead>Last Edited</TableHead>
                            <TableHead>Word Count</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {workspaces.map((workspace) => (
                            <TableRow key={workspace.id}>
                              <TableCell className="font-medium">{workspace.name}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="text-muted-foreground px-1.5">
                                  {workspace.template}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {workspace.lastEdited}
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {workspace.wordCount.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => router.push(`/workspace/${workspace.id}`)}
                                >
                                  Open
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              </div>
            ) : currentView === 'templates' ? (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">Templates</h1>
                    <p className="text-muted-foreground mt-1">
                      {filteredTemplates.length} templates available
                    </p>
                  </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 max-w-md">
                  <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search templates..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setTemplatesPage(0);
                      }}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Templates Table */}
                <div className="rounded-lg border overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead className="min-w-[200px]">Template</TableHead>
                        <TableHead className="min-w-[120px]">Category</TableHead>
                        <TableHead className="min-w-[300px] max-w-[400px]">Description</TableHead>
                        <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedTemplatesView.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                            No templates found
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedTemplatesView.map((template) => (
                          <TableRow key={template.id}>
                            <TableCell className="font-medium">{template.name}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-muted-foreground px-1.5">
                                {template.category}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground max-w-[400px] truncate">
                              {template.description}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/${template.id}/template`)}
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalTemplatesPages > 1 && (
                  <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                      Showing {templatesPage * templatesPageSize + 1} to {Math.min((templatesPage + 1) * templatesPageSize, filteredTemplates.length)} of {filteredTemplates.length} templates
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTemplatesPage(Math.max(0, templatesPage - 1))}
                        disabled={templatesPage === 0}
                      >
                        <IconChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <div className="text-sm text-muted-foreground">
                        Page {templatesPage + 1} of {totalTemplatesPages}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTemplatesPage(templatesPage + 1)}
                        disabled={templatesPage >= totalTemplatesPages - 1}
                      >
                        Next
                        <IconChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : currentView === 'prompts' ? (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">Prompts</h1>
                    <p className="text-muted-foreground mt-1">
                      {promptsLoading ? 'Loading prompts...' : `${filteredPrompts.length} prompts available`}
                    </p>
                  </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 max-w-md">
                  <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search prompts..."
                      value={promptsSearchQuery}
                      onChange={(e) => {
                        setPromptsSearchQuery(e.target.value);
                        setPromptsPage(0);
                      }}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Prompts Table */}
                <div className="rounded-lg border overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead className="min-w-[300px] max-w-[500px]">Prompt</TableHead>
                        <TableHead className="min-w-[150px]">Template</TableHead>
                        <TableHead className="min-w-[120px]">Category</TableHead>
                        <TableHead className="min-w-[100px]">Type</TableHead>
                        <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedPrompts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            No prompts found
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedPrompts.map((prompt) => (
                          <TableRow key={prompt.id}>
                            <TableCell className="text-sm max-w-[500px] truncate">{prompt.prompt}</TableCell>
                            <TableCell className="font-medium">{prompt.template}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-muted-foreground px-1.5">
                                {prompt.categoryName || 'General'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="px-1.5">
                                {prompt.category || 'planning'}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/${prompt.templateId}/template`)}
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPromptsPages > 1 && (
                  <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                      Showing {promptsPage * viewPageSize + 1} to {Math.min((promptsPage + 1) * viewPageSize, filteredPrompts.length)} of {filteredPrompts.length} prompts
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPromptsPage(Math.max(0, promptsPage - 1))}
                        disabled={promptsPage === 0}
                      >
                        <IconChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <div className="text-sm text-muted-foreground">
                        Page {promptsPage + 1} of {totalPromptsPages}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPromptsPage(promptsPage + 1)}
                        disabled={promptsPage >= totalPromptsPages - 1}
                      >
                        Next
                        <IconChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : currentView === 'articles' ? (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">Articles</h1>
                    <p className="text-muted-foreground mt-1">
                      {articlesLoading ? 'Loading articles...' : `${filteredArticles.length} articles available`}
                    </p>
                  </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 max-w-md">
                  <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={articlesSearchQuery}
                      onChange={(e) => {
                        setArticlesSearchQuery(e.target.value);
                        setArticlesPage(0);
                      }}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Articles Table */}
                <div className="rounded-lg border overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead className="min-w-[250px]">Title</TableHead>
                        <TableHead className="min-w-[150px]">Template</TableHead>
                        <TableHead className="min-w-[300px] max-w-[400px]">Excerpt</TableHead>
                        <TableHead className="min-w-[100px]">Read Time</TableHead>
                        <TableHead className="min-w-[100px]">Type</TableHead>
                        <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedArticles.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                            No articles found
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedArticles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell className="font-medium">{article.title}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-muted-foreground px-1.5">
                                {article.template || 'General'}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground max-w-[400px] truncate">
                              {article.excerpt || 'No excerpt available'}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {article.readTime || 5} min
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="px-1.5">
                                {article.type || 'guide'}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/articles/${article.slug || article.id}`)}
                              >
                                Read
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalArticlesPages > 1 && (
                  <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                      Showing {articlesPage * viewPageSize + 1} to {Math.min((articlesPage + 1) * viewPageSize, filteredArticles.length)} of {filteredArticles.length} articles
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setArticlesPage(Math.max(0, articlesPage - 1))}
                        disabled={articlesPage === 0}
                      >
                        <IconChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <div className="text-sm text-muted-foreground">
                        Page {articlesPage + 1} of {totalArticlesPages}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setArticlesPage(articlesPage + 1)}
                        disabled={articlesPage >= totalArticlesPages - 1}
                      >
                        Next
                        <IconChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : currentView === 'workspaces' ? (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {/* Workspaces Table View */}
                <div className="px-4 lg:px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold">Workspaces</h1>
                      <p className="text-sm text-muted-foreground">
                        {workspaces.length} workspace{workspaces.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <Button>
                      <IconCirclePlus className="h-4 w-4 mr-2" />
                      New Workspace
                    </Button>
                  </div>

                  {/* Search */}
                  <Input
                    placeholder="Search workspaces..."
                    value={workspacesSearchQuery}
                    onChange={(e) => setWorkspacesSearchQuery(e.target.value)}
                    className="mb-4"
                  />

                  {/* Workspaces Table */}
                  <div className="border rounded-lg">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Name
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Template
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Last Edited
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Progress
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Word Count
                            </th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {paginatedWorkspaces.map((workspace) => (
                            <tr key={workspace.id} className="border-b transition-colors hover:bg-muted/50">
                              <td className="p-4 align-middle font-medium">{workspace.name}</td>
                              <td className="p-4 align-middle">
                                <Badge variant="outline">{workspace.template}</Badge>
                              </td>
                              <td className="p-4 align-middle text-muted-foreground">
                                {workspace.lastEdited}
                              </td>
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-2">
                                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-primary"
                                      style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                                    />
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {Math.floor(Math.random() * 100)}%
                                  </span>
                                </div>
                              </td>
                              <td className="p-4 align-middle text-muted-foreground">
                                {workspace.wordCount.toLocaleString()} words
                              </td>
                              <td className="p-4 align-middle text-right">
                                <div className="flex gap-2 justify-end">
                                  <Button size="sm" variant="outline">
                                    Open
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    Export
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between py-4">
                    <div className="text-sm text-muted-foreground">
                      Showing {workspacesPage * pageSize + 1} to {Math.min((workspacesPage + 1) * pageSize, workspaces.length)} of {workspaces.length}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setWorkspacesPage(workspacesPage - 1)}
                        disabled={workspacesPage === 0}
                      >
                        <IconChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setWorkspacesPage(workspacesPage + 1)}
                        disabled={(workspacesPage + 1) * pageSize >= workspaces.length}
                      >
                        Next
                        <IconChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentView === 'chat' || currentView === 'split' || currentView === 'board' ||
               currentView === 'checklist' || currentView === 'table' || currentView === 'timeline' ||
               currentView === 'text' || currentView === 'cards' || currentView === 'outline' ||
               currentView === 'tabs' ? (
              <div className="flex flex-col h-full">
                {/* Working View Header */}
                <div className="border-b px-4 py-3">
                  <h1 className="text-2xl font-bold">My Workspace</h1>
                  <p className="text-sm text-muted-foreground">
                    Template: {templateRegistry.find(t => t.id === selectedTemplateId)?.name || 'Select a template from dock'}
                  </p>
                </div>

                {/* View Mode Content */}
                <div className="flex-1 overflow-hidden">
                  {currentView === 'chat' && <ChatView templateId={selectedTemplateId} />}
                  {currentView === 'split' && <SplitView templateId={selectedTemplateId} />}
                  {currentView === 'board' && <BoardView templateId={selectedTemplateId} />}
                  {currentView === 'checklist' && <ChecklistView templateId={selectedTemplateId} />}
                  {currentView === 'table' && <TableView templateId={selectedTemplateId} />}
                  {currentView === 'timeline' && <TimelineView templateId={selectedTemplateId} />}
                  {currentView === 'text' && <TextEditorView templateId={selectedTemplateId} />}
                  {currentView === 'cards' && <div className="flex items-center justify-center h-full text-muted-foreground">Cards View - Coming Soon</div>}
                  {currentView === 'outline' && <div className="flex items-center justify-center h-full text-muted-foreground">Outline View - Coming Soon</div>}
                  {currentView === 'tabs' && <div className="flex items-center justify-center h-full text-muted-foreground">Tabs View - Coming Soon</div>}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full px-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                  <p className="text-muted-foreground">This section is under construction.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Dock - Always visible - Fixed overlay */}
        <div className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none z-50">
          <div className="pointer-events-auto">
            <Dock>
                {/* Templates Drawer */}
                <Drawer
                  direction="bottom"
                  open={templatesDrawerOpen}
                  onOpenChange={(open) => {
                    setTemplatesDrawerOpen(open);
                    if (!open) {
                      setLetterFilter('all');
                      setSearchQuery('');
                    }
                  }}
                >
                  <div onClick={() => setTemplatesDrawerOpen(true)} className="flex items-center justify-center h-full">
                    <DockItem>
                      <DockLabel>Templates</DockLabel>
                      <DockIcon>
                        <IconTemplate className="h-6 w-6" />
                      </DockIcon>
                    </DockItem>
                  </div>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Select Template</DrawerTitle>
                      <DrawerDescription>Choose a template to work with</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 overflow-y-auto max-h-[60vh]">
                            <Input
                              placeholder="Search templates..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="mb-4"
                            />

                            {/* Letter filter */}
                            <div className="flex gap-1 mb-4 overflow-x-auto pb-2">
                              <Button
                                variant={letterFilter === 'all' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setLetterFilter('all')}
                                className="min-w-[40px]"
                              >
                                All
                              </Button>
                              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                                <Button
                                  key={letter}
                                  variant={letterFilter === letter ? 'default' : 'outline'}
                                  size="sm"
                                  onClick={() => setLetterFilter(letter)}
                                  className="min-w-[40px]"
                                >
                                  {letter}
                                </Button>
                              ))}
                            </div>

                            <div className="text-sm text-muted-foreground mb-2">
                              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {filteredTemplates.map((template) => (
                                <div
                                  key={template.id}
                                  className="p-3 border rounded-lg hover:bg-muted cursor-pointer transition-colors"
                                  onClick={() => {
                                    setSelectedTemplateId(template.id);
                                    setTemplatesDrawerOpen(false);
                                  }}
                                >
                                  <div className="font-medium text-sm truncate">{template.name}</div>
                                  <div className="text-xs text-muted-foreground truncate">{template.category}</div>
                                </div>
                              ))}
                            </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                {/* Prompts Drawer */}
                <Drawer
                  direction="bottom"
                  open={promptsDrawerOpen}
                  onOpenChange={setPromptsDrawerOpen}
                >
                  <div onClick={() => setPromptsDrawerOpen(true)} className="flex items-center justify-center h-full">
                    <DockItem>
                      <DockLabel>Prompts</DockLabel>
                      <DockIcon>
                        <IconNotes className="h-6 w-6" />
                      </DockIcon>
                    </DockItem>
                  </div>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Browse Prompts</DrawerTitle>
                      <DrawerDescription>
                        {selectedTemplateId
                          ? `Prompts for ${templateRegistry.find(t => t.id === selectedTemplateId)?.name}`
                          : 'Select a template first'}
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 overflow-y-auto max-h-[60vh]">
                      <Input
                        placeholder="Search prompts..."
                        value={promptsSearchQuery}
                        onChange={(e) => setPromptsSearchQuery(e.target.value)}
                        className="mb-4"
                      />
                      {!selectedTemplateId ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          Select a template from the dock to view prompts
                        </p>
                      ) : promptsLoading ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          Loading prompts...
                        </p>
                      ) : filteredPrompts.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          No prompts found
                        </p>
                      ) : (
                        <>
                          <div className="text-sm text-muted-foreground mb-2">
                            {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? 's' : ''} found
                          </div>
                          <div className="space-y-2">
                            {filteredPrompts.map((prompt) => (
                              <div
                                key={prompt.id}
                                className="p-3 border rounded-lg hover:bg-muted transition-colors flex flex-col gap-2"
                              >
                                <div className="font-medium text-sm mb-1">{prompt.prompt}</div>
                                {prompt.categoryName && (
                                  <div className="text-xs text-muted-foreground">{prompt.categoryName}</div>
                                )}
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigator.clipboard.writeText(prompt.prompt);
                                    }}
                                    className="px-2 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded"
                                  >
                                    Copy
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // TODO: Implement insert functionality
                                      console.log('Insert prompt:', prompt.prompt);
                                    }}
                                    className="px-2 py-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded"
                                  >
                                    Insert
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // TODO: Implement mark complete functionality
                                      console.log('Mark complete:', prompt.id);
                                    }}
                                    className="px-2 py-1 text-xs bg-muted hover:bg-muted/80 rounded"
                                  >
                                    Mark Complete
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </DrawerContent>
                </Drawer>

                {/* Articles Drawer */}
                <Drawer
                  direction="bottom"
                  open={articlesDrawerOpen}
                  onOpenChange={setArticlesDrawerOpen}
                >
                  <div onClick={() => setArticlesDrawerOpen(true)} className="flex items-center justify-center h-full">
                    <DockItem>
                      <DockLabel>Articles</DockLabel>
                      <DockIcon>
                        <IconFileText className="h-6 w-6" />
                      </DockIcon>
                    </DockItem>
                  </div>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Browse Articles</DrawerTitle>
                      <DrawerDescription>
                        {selectedTemplateId
                          ? `Articles for ${templateRegistry.find(t => t.id === selectedTemplateId)?.name}`
                          : 'Select a template first'}
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 overflow-y-auto max-h-[60vh]">
                      <Input
                        placeholder="Search articles..."
                        value={articlesSearchQuery}
                        onChange={(e) => setArticlesSearchQuery(e.target.value)}
                        className="mb-4"
                      />
                      {!selectedTemplateId ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          Select a template from the dock to view articles
                        </p>
                      ) : articlesLoading ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          Loading articles...
                        </p>
                      ) : filteredArticles.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          No articles found
                        </p>
                      ) : (
                        <>
                          <div className="text-sm text-muted-foreground mb-2">
                            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                          </div>
                          <div className="space-y-2">
                            {filteredArticles.map((article) => (
                              <div
                                key={article.id}
                                className="p-3 border rounded-lg hover:bg-muted transition-colors flex flex-col gap-2"
                              >
                                <div className="font-medium text-sm mb-1">{article.title}</div>
                                {article.excerpt && (
                                  <div className="text-xs text-muted-foreground line-clamp-2">{article.excerpt}</div>
                                )}
                                <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                                  {article.type && <span>{article.type}</span>}
                                  {article.readTime && <span>• {article.readTime}</span>}
                                </div>
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // TODO: Implement read functionality (open in side panel or modal)
                                      console.log('Read article:', article.slug);
                                      window.open(`/${article.template}/articles/${article.slug}`, '_blank');
                                    }}
                                    className="px-2 py-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded"
                                  >
                                    Read
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // TODO: Implement save for later functionality
                                      console.log('Save for later:', article.id);
                                    }}
                                    className="px-2 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded"
                                  >
                                    Save for Later
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // TODO: Implement add reference functionality
                                      console.log('Add reference:', article.title);
                                    }}
                                    className="px-2 py-1 text-xs bg-muted hover:bg-muted/80 rounded"
                                  >
                                    Add Reference
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </DrawerContent>
                </Drawer>
              </Dock>
            </div>
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
