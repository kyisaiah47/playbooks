'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, Calendar, BarChart3, FileText, Heart } from 'lucide-react';

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

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const templateMap = new Map<string, TemplateProgress>();
    const reflectionsList: ReflectionSummary[] = [];

    // Parse localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      // Workspace data
      if (key.startsWith('workspace_')) {
        const parts = key.split('_');
        const templateId = parts.slice(1, -1).join('_');

        if (!templateMap.has(templateId)) {
          templateMap.set(templateId, {
            templateId,
            templateName: templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            promptsCompleted: 0,
            totalPrompts: 0,
            lastWorked: '',
          });
        }

        try {
          const data = JSON.parse(localStorage.getItem(key) || '{}');
          const template = templateMap.get(templateId)!;
          if (data.response && data.response.trim()) {
            template.promptsCompleted++;
          }
          template.totalPrompts++;
          if (data.savedAt && (!template.lastWorked || data.savedAt > template.lastWorked)) {
            template.lastWorked = data.savedAt;
          }
        } catch (e) {
          // Skip invalid data
        }
      }

      // Reflection data
      if (key.startsWith('reflection_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || '{}');
          if (data.content) {
            reflectionsList.push({
              date: key.replace('reflection_', ''),
              mood: data.mood || '',
              tags: data.tags || [],
              wordCount: data.content.split(/\s+/).length,
            });
          }
        } catch (e) {
          // Skip invalid data
        }
      }
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
          // Count prompts worked on this day (rough approximation)
          return count + (t.lastWorked?.startsWith(dateStr) ? 1 : 0);
        }, 0),
      });
    }
    setActivityData(activity);
  };

  const totalReflections = reflections.length;
  const totalTemplates = templates.length;
  const totalPromptsCompleted = templates.reduce((sum, t) => sum + t.promptsCompleted, 0);
  const avgWordsPerReflection = reflections.length > 0
    ? Math.round(reflections.reduce((sum, r) => sum + r.wordCount, 0) / reflections.length)
    : 0;

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
              <div className="space-y-6">
                {/* Templates Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Templates In Progress
                    </h3>
                    <Badge variant="outline">{templates.length}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {templates.length === 0 ? (
                      <Card className="p-6 col-span-full">
                        <p className="text-center text-muted-foreground">
                          No templates started yet. Go to Workspace to begin!
                        </p>
                      </Card>
                    ) : (
                      templates.map((template) => (
                        <Card key={template.templateId} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                          <h4 className="font-medium text-foreground mb-2">{template.templateName}</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="text-foreground font-medium">
                                {template.promptsCompleted}/{template.totalPrompts}
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{
                                  width: `${(template.promptsCompleted / template.totalPrompts) * 100}%`,
                                }}
                              />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Last worked: {new Date(template.lastWorked).toLocaleDateString()}
                            </p>
                          </div>
                        </Card>
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
                      reflections.slice(0, 8).map((reflection) => (
                        <Card key={reflection.date} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
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
                      ))
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Timeline View */}
            <TabsContent value="timeline" className="mt-0">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Last 30 Days</h3>
                <div className="grid grid-cols-10 gap-2">
                  {activityData.map((day) => {
                    const total = day.reflections + day.promptsWorked;
                    const intensity = total === 0 ? 0 : Math.min(total / 5, 1);
                    return (
                      <div
                        key={day.date}
                        className="aspect-square rounded border border-border relative group cursor-pointer"
                        style={{
                          backgroundColor: `hsl(var(--primary) / ${intensity * 0.5})`,
                        }}
                        title={`${day.date}: ${day.reflections} reflections, ${day.promptsWorked} prompts`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs font-medium">{total}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 0.2, 0.4, 0.6, 0.8, 1].map((intensity) => (
                      <div
                        key={intensity}
                        className="w-4 h-4 rounded border border-border"
                        style={{
                          backgroundColor: `hsl(var(--primary) / ${intensity * 0.5})`,
                        }}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </TabsContent>

            {/* Insights View */}
            <TabsContent value="insights" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{totalTemplates}</p>
                      <p className="text-sm text-muted-foreground">Templates Started</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{totalPromptsCompleted}</p>
                      <p className="text-sm text-muted-foreground">Prompts Completed</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{totalReflections}</p>
                      <p className="text-sm text-muted-foreground">Reflections Written</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{avgWordsPerReflection}</p>
                      <p className="text-sm text-muted-foreground">Avg Words/Reflection</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
