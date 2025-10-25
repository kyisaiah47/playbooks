/**
 * Insight Types for Life OS Analytics
 *
 * Provides data structures for computing and displaying insights
 * about user progress, patterns, and growth across guides and reflections.
 */

export type InsightType =
  | 'category-usage'
  | 'mood-trend'
  | 'completion-rate'
  | 'reflection-frequency'
  | 'recurring-theme'
  | 'streak'
  | 'time-of-day'
  | 'category-correlation';

export type InsightPeriod = 'week' | 'month' | 'quarter' | 'year' | 'all-time';

export type InsightSeverity = 'info' | 'success' | 'warning' | 'insight';

/**
 * Base insight interface
 */
export interface Insight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  severity: InsightSeverity;
  generatedAt: Date;
  period: InsightPeriod;
  data: unknown; // Type-specific data
}

/**
 * Category usage insights
 */
export interface CategoryUsageInsight extends Insight {
  type: 'category-usage';
  data: {
    categories: Array<{
      name: string;
      count: number;
      percentage: number;
      trend: 'up' | 'down' | 'stable';
    }>;
    mostActive: string;
    leastActive: string;
  };
}

/**
 * Mood trend insights
 */
export interface MoodTrendInsight extends Insight {
  type: 'mood-trend';
  data: {
    timeline: Array<{
      date: Date;
      mood: number; // -1 to 1 (or 0-5 scale)
      reflectionCount: number;
    }>;
    average: number;
    trend: 'improving' | 'declining' | 'stable';
    bestPeriod?: string;
    worstPeriod?: string;
  };
}

/**
 * Completion rate insights
 */
export interface CompletionRateInsight extends Insight {
  type: 'completion-rate';
  data: {
    totalStarted: number;
    totalCompleted: number;
    completionRate: number; // 0-100
    averageCompletionTime: number; // in days
    fastestCompletion: number;
    slowestCompletion: number;
    byCategory: Record<string, {
      started: number;
      completed: number;
      rate: number;
    }>;
  };
}

/**
 * Reflection frequency insights
 */
export interface ReflectionFrequencyInsight extends Insight {
  type: 'reflection-frequency';
  data: {
    totalReflections: number;
    averagePerWeek: number;
    currentStreak: number;
    longestStreak: number;
    lastReflectionDate: Date;
    frequencyByDay: Record<string, number>; // day of week -> count
    timeOfDay: {
      morning: number;
      afternoon: number;
      evening: number;
      night: number;
    };
  };
}

/**
 * Recurring theme insights (word/topic analysis)
 */
export interface RecurringThemeInsight extends Insight {
  type: 'recurring-theme';
  data: {
    themes: Array<{
      word: string;
      frequency: number;
      sentiment?: number;
      categories: string[];
      firstSeen: Date;
      lastSeen: Date;
    }>;
    topThemes: string[];
    emergingThemes: string[]; // recently appearing frequently
    fadingThemes: string[]; // declining in frequency
  };
}

/**
 * Streak insights
 */
export interface StreakInsight extends Insight {
  type: 'streak';
  data: {
    currentStreak: number;
    longestStreak: number;
    streakType: 'daily-reflection' | 'guide-completion' | 'both';
    streakStart: Date;
    streakEnd?: Date;
    milestones: Array<{
      days: number;
      reachedAt: Date;
    }>;
  };
}

/**
 * Time-of-day insights
 */
export interface TimeOfDayInsight extends Insight {
  type: 'time-of-day';
  data: {
    peakProductivityHour: number; // 0-23
    distribution: Record<number, number>; // hour -> activity count
    moodByTimeOfDay: {
      morning: number;
      afternoon: number;
      evening: number;
      night: number;
    };
  };
}

/**
 * Category correlation insights (which categories often go together)
 */
export interface CategoryCorrelationInsight extends Insight {
  type: 'category-correlation';
  data: {
    correlations: Array<{
      category1: string;
      category2: string;
      strength: number; // 0-1
      coOccurrences: number;
    }>;
    strongestPair: {
      categories: [string, string];
      strength: number;
    };
  };
}

/**
 * Union type for all insights
 */
export type AnyInsight =
  | CategoryUsageInsight
  | MoodTrendInsight
  | CompletionRateInsight
  | ReflectionFrequencyInsight
  | RecurringThemeInsight
  | StreakInsight
  | TimeOfDayInsight
  | CategoryCorrelationInsight;

/**
 * Insight generation config
 */
export interface InsightConfig {
  period: InsightPeriod;
  types: InsightType[];
  minDataPoints?: number; // minimum data required to generate insight
  includeComparisons?: boolean; // compare to previous period
}

/**
 * Insight dashboard data
 */
export interface InsightDashboard {
  userId: string;
  generatedAt: Date;
  period: InsightPeriod;
  insights: AnyInsight[];
  summary: {
    totalTemplates: number;
    totalReflections: number;
    activeDays: number;
    mostActiveCategory: string;
    currentStreak: number;
  };
}
