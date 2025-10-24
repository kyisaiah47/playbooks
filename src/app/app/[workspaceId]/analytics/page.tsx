'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { TrendingUp } from 'lucide-react';
import { StatsCards } from '@/components/app/analytics/StatsCards';
import { ActivityChart } from '@/components/app/analytics/ActivityChart';
import { GuideProgressList } from '@/components/app/analytics/GuideProgressList';

export default function AnalyticsPage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  // Fetch user guides with progress
  const { data: userGuidesData, isLoading: guidesLoading } = useQuery({
    queryKey: ['user-guides', workspaceId],
    queryFn: async () => {
      const response = await fetch(`/api/user-guides?workspace_id=${workspaceId}`);
      if (!response.ok) throw new Error('Failed to fetch user guides');
      return response.json();
    },
  });

  // Fetch responses for activity tracking
  const { data: responsesData, isLoading: responsesLoading } = useQuery({
    queryKey: ['responses', workspaceId],
    queryFn: async () => {
      const response = await fetch(`/api/workspace/responses?workspace_id=${workspaceId}`);
      if (!response.ok) throw new Error('Failed to fetch responses');
      return response.json();
    },
  });

  // Calculate stats
  const userGuides = userGuidesData?.userGuides || [];
  const responses = responsesData?.responses || [];

  const questionsAnswered = responses.length;
  const activeGuides = userGuides.filter((g: any) => !g.archived).length;

  // Calculate streak
  const calculateStreak = () => {
    if (responses.length === 0) return 0;

    const sortedResponses = [...responses].sort(
      (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    for (const response of sortedResponses) {
      const responseDate = new Date(response.created_at);
      responseDate.setHours(0, 0, 0, 0);

      const diffDays = Math.floor(
        (currentDate.getTime() - responseDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === streak) {
        streak++;
      } else if (diffDays > streak) {
        break;
      }
    }

    return streak;
  };

  const streakDays = calculateStreak();

  // Estimate time spent (5 minutes per question)
  const timeSpent = responses.length * 5;

  // Prepare activity chart data (last 30 days)
  const getLast30DaysActivity = () => {
    const last30Days = [];
    const today = new Date();

    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const dateStr = date.toISOString().split('T')[0];
      const responsesOnDate = responses.filter((r: any) => {
        const responseDate = new Date(r.created_at);
        responseDate.setHours(0, 0, 0, 0);
        return responseDate.toISOString().split('T')[0] === dateStr;
      }).length;

      last30Days.push({
        date: dateStr,
        responses: responsesOnDate,
      });
    }

    return last30Days;
  };

  const activityData = getLast30DaysActivity();

  // Prepare guide progress data
  const guideProgress = userGuides
    .filter((ug: any) => !ug.archived)
    .map((ug: any) => {
      const guideResponses = responses.filter((r: any) => r.user_guide_id === ug.id);
      const totalQuestions = ug.guides?.total_questions || 100; // Default to 100 if not available
      const answeredQuestions = guideResponses.length;
      const progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;

      return {
        id: ug.id,
        name: ug.guides?.name || 'Untitled Guide',
        icon: ug.guides?.icon || '📄',
        progress,
        totalQuestions,
        answeredQuestions,
      };
    });

  const isLoading = guidesLoading || responsesLoading;

  return (
    <div className="h-full w-full">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Track your progress and activity
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8">
          <StatsCards
            questionsAnswered={questionsAnswered}
            activeGuides={activeGuides}
            streakDays={streakDays}
            timeSpent={timeSpent}
            isLoading={isLoading}
          />
        </div>

        {/* Activity Chart */}
        <div className="mb-8">
          <ActivityChart data={activityData} isLoading={isLoading} />
        </div>

        {/* Guide Progress */}
        <GuideProgressList guides={guideProgress} isLoading={isLoading} />
      </div>
    </div>
  );
}
