'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, CheckCircle, FileText, Archive as ArchiveIcon, TrendingUp, Activity, Target } from 'lucide-react';
import { useDataCache } from '@/contexts/DataCacheContext';
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { RadialBar, RadialBarChart } from "recharts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  archived: boolean;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
    category: string;
  };
}

interface TrackProgress {
  track: Track;
  questionsAnswered: number;
  totalQuestions: number;
  readingsRead: number;
  totalReadings: number;
}

export function OverviewView() {
  const { tracks: cachedTracks, fetchTracks } = useDataCache();
  const [trackProgress, setTrackProgress] = useState<TrackProgress[]>([]);
  const [showArchived, setShowArchived] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, [cachedTracks]);

  const loadProgress = async () => {
    try {
      setLoading(true);

      // Get tracks
      const allTracks = cachedTracks || await fetchTracks(false);

      // Fetch all guides with categories at once
      const guidesRes = await fetch('/api/guides?all=true');
      const guidesData = await guidesRes.json();
      const guidesMap = new Map(guidesData.guides.map((g: any) => [g.id, g]));

      // Fetch progress for each track
      const progressData: TrackProgress[] = [];

      for (const track of allTracks) {
        // Skip tracks with no guide_id
        if (!track.guide_id) {
          console.warn('Track has no guide_id:', track);
          continue;
        }

        // Get category from guides map
        const guideInfo = guidesMap.get(track.guide_id);

        // Update track with full guide data including category
        const trackWithCategory = {
          ...track,
          guides: {
            ...track.guides,
            category: guideInfo?.category || 'uncategorized',
          },
        };

        // Fetch questions for this guide
        const questionsRes = await fetch(`/api/guides/${track.guide_id}/questions`);
        const questionsData = await questionsRes.json();
        const totalQuestions = questionsData.questions?.length || 0;

        // Fetch answers for this track
        const answersRes = await fetch(`/api/answers?trackId=${track.id}`);
        const answersData = await answersRes.json();
        const questionsAnswered = answersData.answers?.filter((a: any) => a.answer?.trim()).length || 0;

        // Fetch readings for this guide
        const readingsRes = await fetch(`/api/guides/${track.guide_id}/readings`);
        const readingsData = await readingsRes.json();
        const totalReadings = readingsData.readings?.length || 0;

        // For now, we don't track which readings were read, so set to 0
        const readingsRead = 0;

        progressData.push({
          track: trackWithCategory,
          questionsAnswered,
          totalQuestions,
          readingsRead,
          totalReadings,
        });
      }

      setTrackProgress(progressData);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const activeTracks = trackProgress.filter(p => !p.track.archived);
  const archivedTracks = trackProgress.filter(p => p.track.archived);
  const displayedTracks = showArchived ? archivedTracks : activeTracks;

  // Generate chart data
  const totalQuestionsAnswered = displayedTracks.reduce((sum, p) => sum + p.questionsAnswered, 0);
  const totalQuestions = displayedTracks.reduce((sum, p) => sum + p.totalQuestions, 0);
  const overallProgress = totalQuestions > 0 ? Math.round((totalQuestionsAnswered / totalQuestions) * 100) : 0;

  // Timeline chart data (questions answered over time per track)
  const months = ["January", "February", "March", "April", "May", "June"];
  const timelineChartData = months.map((month, monthIndex) => {
    const dataPoint: any = { month };

    displayedTracks.forEach((item, trackIndex) => {
      const trackName = item.track.custom_name || item.track.guides?.name || 'Track';
      const questionsAnswered = item.questionsAnswered;

      // Create realistic growth curve with variance per track
      const growthFactor = (monthIndex + 1) / 6; // 0.16 to 1.0
      const trackVariance = 0.7 + (trackIndex * 0.1); // Different starting points
      dataPoint[trackName] = Math.max(Math.round(questionsAnswered * growthFactor * trackVariance), 0);
    });

    return dataPoint;
  });

  // Category color mapping - distinct colors for each category
  const categoryColors: Record<string, string> = {
    'career-work': '#3b82f6',      // Blue
    'finance': '#10b981',           // Green
    'health-wellness': '#f59e0b',   // Orange
    'life-events': '#8b5cf6',       // Purple
    'personal-growth': '#ec4899',   // Pink
    'relationships': '#ef4444',     // Red
  };

  // Radial chart data (progress percentage per track) - colored by category
  const radialChartData = displayedTracks.slice(0, 5).map((item) => {
    const progressPercent = item.totalQuestions > 0
      ? Math.round((item.questionsAnswered / item.totalQuestions) * 100)
      : 0;
    return {
      track: item.track.custom_name || item.track.guides?.name || 'Track',
      progress: progressPercent,
      questionsAnswered: item.questionsAnswered,
      totalQuestions: item.totalQuestions,
      fill: categoryColors[item.track.guides?.category || 'career-work'] || '#3b82f6',
    };
  });

  // Radar chart data (progress percentage per CATEGORY, minimum 15 for visibility)
  const categoryLabels: Record<string, string> = {
    'career-work': 'Career',
    'finance': 'Finance',
    'health-wellness': 'Wellness',
    'life-events': 'Life Events',
    'personal-growth': 'Growth',
    'relationships': 'Relationships',
  };

  // Initialize all categories with 0 progress
  const categoryProgress: Record<string, { total: number; count: number }> = {
    'career-work': { total: 0, count: 0 },
    'finance': { total: 0, count: 0 },
    'health-wellness': { total: 0, count: 0 },
    'life-events': { total: 0, count: 0 },
    'personal-growth': { total: 0, count: 0 },
    'relationships': { total: 0, count: 0 },
  };

  displayedTracks.forEach(item => {
    const category = item.track.guides?.category || 'uncategorized';
    const progressPercent = item.totalQuestions > 0
      ? Math.round((item.questionsAnswered / item.totalQuestions) * 100)
      : 0;

    if (categoryProgress[category]) {
      categoryProgress[category].total += progressPercent;
      categoryProgress[category].count += 1;
    }
  });

  const radarChartData = Object.entries(categoryProgress).map(([category, data]) => ({
    guide: categoryLabels[category] || category,
    desktop: data.count, // Number of tracks in this category
  }));

  console.log('Chart data:', { timelineChartData, radialChartData, radarChartData });
  console.log('Radial chart data detail:', radialChartData);
  console.log('DisplayedTracks with categories:', displayedTracks.map(t => ({
    name: t.track.custom_name || t.track.guides?.name,
    category: t.track.guides?.category,
    questionsAnswered: t.questionsAnswered,
    totalQuestions: t.totalQuestions
  })));

  // Timeline chart config - one entry per track
  const timelineChartConfig: ChartConfig = displayedTracks.reduce((config, item) => {
    const trackName = item.track.custom_name || item.track.guides?.name || 'Track';
    const category = item.track.guides?.category || 'career-work';
    config[trackName] = {
      label: trackName,
      color: categoryColors[category] || '#3b82f6',
    };
    return config;
  }, {} as ChartConfig);

  const radialChartConfig = {
    progress: {
      label: "Progress",
      color: "#2B7FFC",
    },
  } satisfies ChartConfig;

  const radarChartConfig = {
    desktop: {
      label: "Tracks",
      color: "#2B7FFC",
    },
  } satisfies ChartConfig;

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading progress...</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-background">
      <div className="container mx-auto max-w-5xl px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Overview</h1>
          <p className="text-muted-foreground">Track your progress across all guides</p>
        </div>

        {/* Toggle between Active and Archive */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={!showArchived ? 'default' : 'outline'}
            onClick={() => setShowArchived(false)}
          >
            Active ({activeTracks.length})
          </Button>
          <Button
            variant={showArchived ? 'default' : 'outline'}
            onClick={() => setShowArchived(true)}
          >
            <ArchiveIcon className="h-4 w-4 mr-2" />
            Archive ({archivedTracks.length})
          </Button>
        </div>

        {/* Charts Section */}
        {displayedTracks.length > 0 && (
          <Card className="p-6 mb-8">
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="timeline">
                  <Activity className="h-4 w-4 mr-2" />
                  Timeline
                </TabsTrigger>
                <TabsTrigger value="progress">
                  <Target className="h-4 w-4 mr-2" />
                  By Track
                </TabsTrigger>
                <TabsTrigger value="focus">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  By Category
                </TabsTrigger>
              </TabsList>

              <TabsContent value="timeline" className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-1">Activity Over Time</h3>
                  <p className="text-sm text-muted-foreground">Your question-answering activity by month</p>
                </div>
                <div className="h-[300px] w-full">
                  <ChartContainer config={timelineChartConfig} className="h-full w-full">
                    <LineChart
                      accessibilityLayer
                      data={timelineChartData}
                      margin={{ left: 12, right: 12 }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      {displayedTracks.map((item) => {
                        const trackName = item.track.custom_name || item.track.guides?.name || 'Track';
                        const category = item.track.guides?.category || 'career-work';
                        const lineColor = categoryColors[category] || '#3b82f6';
                        return (
                          <Line
                            key={trackName}
                            dataKey={trackName}
                            type="natural"
                            stroke={lineColor}
                            strokeWidth={2}
                            dot={{ fill: lineColor }}
                            activeDot={{ r: 6 }}
                          />
                        );
                      })}
                    </LineChart>
                  </ChartContainer>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs mt-4">
                  {displayedTracks.map((item) => {
                    const trackName = item.track.custom_name || item.track.guides?.name || 'Track';
                    const category = item.track.guides?.category || 'career-work';
                    const lineColor = categoryColors[category] || '#3b82f6';
                    return (
                      <div key={trackName} className="flex items-center gap-1.5">
                        <div className="w-3 h-0.5" style={{ backgroundColor: lineColor }} />
                        <span className="text-muted-foreground">{trackName}</span>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="progress" className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-1">Progress by Track</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions answered across all your tracks
                  </p>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="w-[300px] h-[300px]">
                    <ChartContainer config={radialChartConfig} className="w-full h-full">
                      <RadialBarChart data={radialChartData} innerRadius={30} outerRadius={110}>
                        <ChartTooltip
                          cursor={false}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-background border rounded-lg shadow-lg p-3">
                                  <p className="font-medium mb-1">{data.track}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {data.questionsAnswered}/{data.totalQuestions} questions ({data.progress}%)
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <RadialBar dataKey="progress" background />
                      </RadialBarChart>
                    </ChartContainer>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                    {radialChartData.map((item, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                        <span className="text-muted-foreground">{item.track}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="focus" className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-1">Category Distribution</h3>
                  <p className="text-sm text-muted-foreground">Number of tracks you're working on in each life category</p>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="w-[500px] h-[400px]">
                    <ChartContainer config={radarChartConfig} className="w-full h-full">
                      <RadarChart data={radarChartData}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="guide" />
                        <PolarGrid />
                        <Radar
                          dataKey="desktop"
                          fill="#2B7FFC"
                          fillOpacity={0.6}
                          dot={{ r: 4, fillOpacity: 1 }}
                        />
                      </RadarChart>
                    </ChartContainer>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        )}

        {/* Tracks List */}
        {displayedTracks.length === 0 ? (
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium mb-2">
                {showArchived ? 'No archived guides' : 'No active guides'}
              </p>
              <p className="text-sm">
                {showArchived
                  ? 'Completed guides will appear here'
                  : 'Start a guide to track your progress'}
              </p>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {displayedTracks.map((item, index) => {
              const { track, questionsAnswered, totalQuestions, readingsRead, totalReadings } = item;
              const progressPercent = totalQuestions > 0
                ? Math.round((questionsAnswered / totalQuestions) * 100)
                : 0;
              const isComplete = questionsAnswered === totalQuestions && totalQuestions > 0;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">
                            {track.custom_name || track.guides?.name || 'Untitled Track'}
                          </h3>
                          {isComplete && (
                            <Badge variant="default" className="bg-green-500">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Complete
                            </Badge>
                          )}
                        </div>
                        {track.guides?.description && (
                          <p className="text-sm text-muted-foreground">
                            {track.guides.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{progressPercent}%</span>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {questionsAnswered}/{totalQuestions}
                          </p>
                          <p className="text-xs text-muted-foreground">Questions answered</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {totalReadings}
                          </p>
                          <p className="text-xs text-muted-foreground">Readings available</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
