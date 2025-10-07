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
import { templateRegistry } from '@/registry/templates';
import { useRouter } from 'next/navigation';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { useState } from 'react';

export default function WorkspacePage() {
  const router = useRouter();
  const totalTemplates = templateRegistry.length;
  const [favorites, setFavorites] = useState<string[]>([]);

  // Pagination state
  const [allPage, setAllPage] = useState(0);
  const [recentPage, setRecentPage] = useState(0);
  const [favoritesPage, setFavoritesPage] = useState(0);
  const [workspacesPage, setWorkspacesPage] = useState(0);
  const pageSize = 10;

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
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
