'use client';

import { AppSidebar } from "@/components/app-sidebar"
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
import { IconTrendingUp, IconFileText, IconFolders, IconPencil, IconTemplate, IconStar, IconClock, IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
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

export default function WorkspacePage() {
  const router = useRouter();
  const totalTemplates = templateRegistry.length;
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [promptsSearchQuery, setPromptsSearchQuery] = useState('');
  const [articlesSearchQuery, setArticlesSearchQuery] = useState('');
  const [workspacesSearchQuery, setWorkspacesSearchQuery] = useState('');
  const [allPrompts, setAllPrompts] = useState<any[]>([]);
  const [allArticles, setAllArticles] = useState<any[]>([]);
  const [promptsLoading, setPromptsLoading] = useState(false);
  const [articlesLoading, setArticlesLoading] = useState(false);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      setCurrentView(hash || 'dashboard');
    };

    handleHashChange(); // Set initial view
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load prompts when needed
  useEffect(() => {
    if (currentView === 'prompts' && allPrompts.length === 0 && !promptsLoading) {
      setPromptsLoading(true);

      // Load prompts for all templates
      const loadAllPrompts = async () => {
        const promptsData: any[] = [];

        // Load prompts for each template in batches to avoid overwhelming the server
        const batchSize = 10;
        for (let i = 0; i < templateRegistry.length; i += batchSize) {
          const batch = templateRegistry.slice(i, i + batchSize);
          const batchPromises = batch.map(template =>
            fetch(`/api/prompts?templateId=${template.id}`)
              .then(res => res.json())
              .then(data => ({
                templateId: template.id,
                templateName: template.name,
                prompts: data.prompts || []
              }))
              .catch(() => ({ templateId: template.id, templateName: template.name, prompts: [] }))
          );

          const batchResults = await Promise.all(batchPromises);
          batchResults.forEach(result => {
            result.prompts.forEach((p: any) => {
              promptsData.push({
                ...p,
                template: result.templateName,
                templateId: result.templateId
              });
            });
          });
        }

        setAllPrompts(promptsData);
        setPromptsLoading(false);
      };

      loadAllPrompts();
    }
  }, [currentView, allPrompts.length, promptsLoading]);

  // Load articles when needed
  useEffect(() => {
    if (currentView === 'articles' && allArticles.length === 0 && !articlesLoading) {
      setArticlesLoading(true);

      const loadArticles = async () => {
        const { data, error } = await supabase
          .from('templata_articles')
          .select('id, title, excerpt, template, read_time, type, published_at, slug')
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
        }
        setArticlesLoading(false);
      };

      loadArticles();
    }
  }, [currentView, allArticles.length, articlesLoading]);

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
    if (!searchQuery.trim()) return templateRegistry;
    return templateRegistry.filter(t =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
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
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">Workspaces</h1>
                    <p className="text-muted-foreground mt-1">
                      {filteredWorkspacesView.length} workspaces
                    </p>
                  </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 max-w-md">
                  <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search workspaces..."
                      value={workspacesSearchQuery}
                      onChange={(e) => {
                        setWorkspacesSearchQuery(e.target.value);
                        setWorkspacesViewPage(0);
                      }}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Workspaces Table */}
                <div className="rounded-lg border overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead className="min-w-[200px]">Workspace</TableHead>
                        <TableHead className="min-w-[150px]">Template</TableHead>
                        <TableHead className="min-w-[150px]">Last Edited</TableHead>
                        <TableHead className="min-w-[100px]">Word Count</TableHead>
                        <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedWorkspacesView.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            No workspaces found
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedWorkspacesView.map((workspace) => (
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
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalWorkspacesPages > 1 && (
                  <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                      Showing {workspacesViewPage * viewPageSize + 1} to {Math.min((workspacesViewPage + 1) * viewPageSize, filteredWorkspacesView.length)} of {filteredWorkspacesView.length} workspaces
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setWorkspacesViewPage(Math.max(0, workspacesViewPage - 1))}
                        disabled={workspacesViewPage === 0}
                      >
                        <IconChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <div className="text-sm text-muted-foreground">
                        Page {workspacesViewPage + 1} of {totalWorkspacesPages}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setWorkspacesViewPage(workspacesViewPage + 1)}
                        disabled={workspacesViewPage >= totalWorkspacesPages - 1}
                      >
                        Next
                        <IconChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
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
      </SidebarInset>
    </SidebarProvider>
  )
}
