'use client';

import { MessageSquare, BookOpen, Flame, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface StatsCardsProps {
  questionsAnswered: number;
  activeGuides: number;
  streakDays: number;
  timeSpent: number;
  isLoading?: boolean;
}

export function StatsCards({
  questionsAnswered,
  activeGuides,
  streakDays,
  timeSpent,
  isLoading = false,
}: StatsCardsProps) {
  const stats = [
    {
      label: 'Questions Answered',
      value: questionsAnswered,
      icon: MessageSquare,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
    },
    {
      label: 'Active Guides',
      value: activeGuides,
      icon: BookOpen,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-600/10',
    },
    {
      label: 'Day Streak',
      value: streakDays,
      icon: Flame,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-600/10',
    },
    {
      label: 'Hours Spent',
      value: Math.round(timeSpent / 60),
      icon: Clock,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Skeleton key={index} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-lg border border-border/40 bg-background p-6 hover:border-primary/40 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
