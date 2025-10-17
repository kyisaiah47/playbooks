'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LayoutGrid, Calendar, BarChart3, FileText, Heart, TrendingUp, Flame } from 'lucide-react';

interface TemplateProgress {
  templateId: string;
  templateName: string;
  promptsCompleted: number;
  totalPrompts: number;
  lastWorked: string;
}

interface ReflectionSummary {
  date: string;
  mood: string;
  tags: string[];
  wordCount: number;
}

interface ActivityDay {
  date: string;
  reflections: number;
  promptsWorked: number;
}

export function LifeOSStage() {
  const [view, setView] = useState<'board' | 'timeline' | 'insights'>('board');
  const [templates, setTemplates] = useState<TemplateProgress[]>([]);
  const [reflections, setReflections] = useState<ReflectionSummary[]>([]);
  const [activityData, setActivityData] = useState<ActivityDay[]>([]);
  const [boardFilter, setBoardFilter] = useState<'all' | 'in-progress' | 'completed'>('all');
  const [selectedDay, setSelectedDay] = useState<ActivityDay | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Fetch workspace responses
      const workspaceRes = await fetch('/api/workspace/responses');
      const workspaceData = await workspaceRes.json();

      // Fetch reflections
      const reflectionsRes = await fetch('/api/reflections');
      const reflectionsData = await reflectionsRes.json();

      // Process workspace data
      const templateMap = new Map<string, TemplateProgress>();

      if (workspaceData.responses) {
        workspaceData.responses.forEach((response: any) => {
          const templateId = response.template_id;

          if (!templateMap.has(templateId)) {
            templateMap.set(templateId, {
              templateId,
              templateName: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              promptsCompleted: 0,
              totalPrompts: 0,
              lastWorked: '',
            });
          }

          const template = templateMap.get(templateId)!;

          if (response.response && response.response.trim()) {
            template.promptsCompleted++;
          }
          template.totalPrompts++;

          if (response.updated_at && (!template.lastWorked || response.updated_at > template.lastWorked)) {
            template.lastWorked = response.updated_at;
          }
        });
      }

      // Process reflections data
      const reflectionsList: ReflectionSummary[] = [];

      if (reflectionsData.reflections) {
        reflectionsData.reflections.forEach((reflection: any) => {
          if (reflection.content) {
            reflectionsList.push({
              date: reflection.date,
              mood: reflection.mood || '',
              tags: reflection.tags || [],
              wordCount: reflection.content.split(/\s+/).length,
            });
          }
        });
      }

      setTemplates(Array.from(templateMap.values()).filter(t => t.promptsCompleted > 0));
      setReflections(reflectionsList.sort((a, b) => b.date.localeCompare(a.date)));

      // Generate activity data (last 30 days)
      const activity: ActivityDay[] = [];
      const today = new Date();

      for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        activity.push({
          date: dateStr,
          reflections: reflectionsList.filter(r => r.date === dateStr).length,
          promptsWorked: Array.from(templateMap.values()).reduce((count, t) => {
            return count + (t.lastWorked?.startsWith(dateStr) ? 1 : 0);
          }, 0),
        });
      }

      setActivityData(activity);
    } catch (error) {
      console.error('Error loading Life OS data:', error);
    }
  };

  const totalReflections = reflections.length;
  const totalTemplates = templates.length;
  const totalPromptsCompleted = templates.reduce((sum, t) => sum + t.promptsCompleted, 0);
  const avgWordsPerReflection = reflections.length > 0
    ? Math.round(reflections.reduce((sum, r) => sum + r.wordCount, 0) / reflections.length)
    : 0;

  // Filter templates based on boardFilter
  const filteredTemplates = templates.filter(t => {
    if (boardFilter === 'all') return true;
    const isCompleted = t.promptsCompleted === t.totalPrompts;
    if (boardFilter === 'completed') return isCompleted;
    if (boardFilter === 'in-progress') return !isCompleted;
    return true;
  });

  // Calculate longest streak
  const longestStreak = (() => {
    let maxStreak = 0;
    let currentStreak = 0;

    activityData.forEach((day) => {
      if (day.reflections > 0 || day.promptsWorked > 0) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    return maxStreak;
  })();

  // Calculate top themes from reflection tags
  const topThemes = (() => {
    const tagCounts: Record<string, number> = {};
    reflections.forEach(r => {
      r.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([tag]) => tag);
  })();

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground">Life OS</h2>
              <p className="text-sm text-muted-foreground">Your complete overview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={view} onValueChange={(v) => setView(v as any)} className="flex-1 flex flex-col">
        <div className="border-b bg-background">
          <div className="container mx-auto max-w-7xl px-8">
            <TabsList className="bg-transparent border-none h-auto p-0">
              <TabsTrigger value="board" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <LayoutGrid className="h-4 w-4 mr-2" />
                Board
              </TabsTrigger>
              <TabsTrigger value="timeline" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <Calendar className="h-4 w-4 mr-2" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <BarChart3 className="h-4 w-4 mr-2" />
                Insights
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-7xl px-8 py-8">
            {/* Board View */}
            <TabsContent value="board" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Templates Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Templates
                    </h3>
                    <Badge variant="outline">{filteredTemplates.length}</Badge>
                  </div>

                  {/* Filter Chips */}
                  <div className="flex gap-2 mb-4">
                    <Button
                      variant={boardFilter === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setBoardFilter('all')}
                    >
                      All
                    </Button>
                    <Button
                      variant={boardFilter === 'in-progress' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setBoardFilter('in-progress')}
                    >
                      In Progress
                    </Button>
                    <Button
                      variant={boardFilter === 'completed' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setBoardFilter('completed')}
                    >
                      Completed
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredTemplates.length === 0 ? (
                      <Card className="p-6 col-span-full">
                        <p className="text-center text-muted-foreground">
                          {boardFilter === 'all'
                            ? 'No templates started yet. Go to Workspace to begin!'
                            : `No ${boardFilter} templates.`}
                        </p>
                      </Card>
                    ) : (
                      filteredTemplates.map((template, index) => (
                        <motion.div
                          key={template.templateId}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full">
                            <h4 className="font-medium text-foreground mb-2">{template.templateName}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-foreground font-medium">
                                  {template.promptsCompleted}/{template.totalPrompts}
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <motion.div
                                  className="bg-primary h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(template.promptsCompleted / template.totalPrompts) * 100}%` }}
                                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                                />
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Last worked: {new Date(template.lastWorked).toLocaleDateString()}
                              </p>
                            </div>
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>

                {/* Reflections Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Recent Reflections
                    </h3>
                    <Badge variant="outline">{reflections.length}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reflections.length === 0 ? (
                      <Card className="p-6 col-span-full">
                        <p className="text-center text-muted-foreground">
                          No reflections yet. Go to Reflection to write!
                        </p>
                      </Card>
                    ) : (
                      reflections.slice(0, 8).map((reflection, index) => (
                        <motion.div
                          key={reflection.date}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: (templates.length * 0.05) + (index * 0.03) }}
                        >
                          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-foreground">
                                {new Date(reflection.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              {reflection.mood && <span className="text-xl">{reflection.mood}</span>}
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">
                              {reflection.wordCount} words
                            </p>
                            {reflection.tags.length > 0 && (
                              <div className="flex gap-1 flex-wrap">
                                {reflection.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Timeline View */}
            <TabsContent value="timeline" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Last 30 Days</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{activityData[0]?.date && new Date(activityData[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>→</span>
                    <span>{activityData[activityData.length - 1]?.date && new Date(activityData[activityData.length - 1].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <div className="grid grid-cols-10 gap-2">
                  {activityData.map((day, index) => {
                    const total = day.reflections + day.promptsWorked;
                    const intensity = total === 0 ? 0 : Math.min(total / 5, 1);
                    const date = new Date(day.date);
                    const isFirstOfMonth = date.getDate() === 1;
                    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    const isStartOrEnd = index === 0 || index === activityData.length - 1;

                    // Generate color based on intensity using theme colors
                    const getColor = () => {
                      if (total === 0) return 'bg-muted';
                      if (intensity <= 0.2) return 'bg-primary/20';
                      if (intensity <= 0.4) return 'bg-primary/40';
                      if (intensity <= 0.6) return 'bg-primary/60';
                      if (intensity <= 0.8) return 'bg-primary/80';
                      return 'bg-primary';
                    };

                    return (
                      <motion.div
                        key={day.date}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        className={`aspect-square rounded border border-border relative group cursor-pointer ${getColor()}`}
                        title={`${formattedDate} (${dayOfWeek}): ${day.reflections} reflections, ${day.promptsWorked} prompts`}
                        onClick={() => {
                          if (total > 0) {
                            setSelectedDay(day);
                            setDialogOpen(true);
                          }
                        }}
                      >
                        {/* Default: Show date for start/end, or month for first of month */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:opacity-0 transition-opacity">
                          {isStartOrEnd ? (
                            <>
                              <span className="text-[10px] font-medium text-foreground leading-none">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                              <span className="text-xs font-bold text-foreground leading-none mt-0.5">{date.getDate()}</span>
                            </>
                          ) : isFirstOfMonth ? (
                            <span className="text-[10px] font-medium text-foreground">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                          ) : null}
                        </div>
                        {/* On hover: Show count */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 rounded">
                          <span className="text-xs font-medium text-foreground">{total}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded border border-border bg-muted" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/20" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/40" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/60" />
                    <div className="w-4 h-4 rounded border border-border bg-primary/80" />
                    <div className="w-4 h-4 rounded border border-border bg-primary" />
                  </div>
                  <span>More</span>
                </div>
              </motion.div>
            </TabsContent>

            {/* Insights View */}
            <TabsContent value="insights" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {totalTemplates}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Templates Started</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <BarChart3 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.25 }}
                          >
                            {totalPromptsCompleted}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Prompts Completed</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            {totalReflections}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Reflections Written</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.35 }}
                          >
                            {avgWordsPerReflection}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Avg Words/Reflection</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-orange-500/10">
                          <Flame className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <motion.p
                            className="text-2xl font-bold text-foreground"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            {longestStreak}
                          </motion.p>
                          <p className="text-sm text-muted-foreground">Longest Streak</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Top Themes Section */}
                {topThemes.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Top Themes</h3>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {topThemes.map((theme, index) => (
                          <motion.div
                            key={theme}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.4 + (index * 0.05) }}
                          >
                            <Badge variant="secondary" className="text-sm px-3 py-1">
                              {theme}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        Most frequently used tags in your reflections
                      </p>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
          </div>
        </div>
      </Tabs>

      {/* Activity Day Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedDay && new Date(selectedDay.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </DialogTitle>
          </DialogHeader>
          {selectedDay && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-foreground">Reflections</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{selectedDay.reflections}</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-foreground">Prompts Worked</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{selectedDay.promptsWorked}</p>
                </Card>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Total activity: {selectedDay.reflections + selectedDay.promptsWorked}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
