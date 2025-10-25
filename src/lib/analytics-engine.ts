/**
 * Analytics Engine
 *
 * Computes insights from user templates and reflections.
 * Analyzes patterns, trends, and provides actionable intelligence.
 */

import {
  AnyInsight,
  CategoryUsageInsight,
  MoodTrendInsight,
  CompletionRateInsight,
  ReflectionFrequencyInsight,
  RecurringThemeInsight,
  StreakInsight,
  InsightPeriod,
  InsightConfig,
  InsightDashboard,
} from '@/types/insight';
import { TemplateSession, ReflectionEntry } from '@/stores/workspace-store';

/**
 * Main Analytics Engine class
 */
export class AnalyticsEngine {
  private templates: TemplateSession[];
  private reflections: ReflectionEntry[];

  constructor(templates: TemplateSession[], reflections: ReflectionEntry[]) {
    this.templates = templates;
    this.reflections = reflections;
  }

  /**
   * Generate complete insight dashboard
   */
  generateDashboard(config: InsightConfig): InsightDashboard {
    const insights: AnyInsight[] = [];

    if (config.types.includes('category-usage')) {
      const categoryInsight = this.analyzeCategoryUsage(config.period);
      if (categoryInsight) insights.push(categoryInsight);
    }

    if (config.types.includes('mood-trend')) {
      const moodInsight = this.analyzeMoodTrend(config.period);
      if (moodInsight) insights.push(moodInsight);
    }

    if (config.types.includes('completion-rate')) {
      const completionInsight = this.analyzeCompletionRate(config.period);
      if (completionInsight) insights.push(completionInsight);
    }

    if (config.types.includes('reflection-frequency')) {
      const frequencyInsight = this.analyzeReflectionFrequency(config.period);
      if (frequencyInsight) insights.push(frequencyInsight);
    }

    if (config.types.includes('recurring-theme')) {
      const themeInsight = this.analyzeRecurringThemes(config.period);
      if (themeInsight) insights.push(themeInsight);
    }

    if (config.types.includes('streak')) {
      const streakInsight = this.analyzeStreak(config.period);
      if (streakInsight) insights.push(streakInsight);
    }

    return {
      userId: 'current-user', // TODO: get from auth
      generatedAt: new Date(),
      period: config.period,
      insights,
      summary: this.generateSummary(),
    };
  }

  /**
   * Analyze category usage patterns
   */
  private analyzeCategoryUsage(period: InsightPeriod): CategoryUsageInsight | null {
    const filteredGuides = this.filterByPeriod(this.templates, period);

    if (filteredGuides.length === 0) return null;

    // Count templates by category
    const categoryCounts: Record<string, number> = {};
    filteredGuides.forEach((template) => {
      const category = this.extractCategory(guide.tags);
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    const total = filteredGuides.length;
    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      count,
      percentage: (count / total) * 100,
      trend: 'stable' as const, // TODO: compare to previous period
    }));

    categories.sort((a, b) => b.count - a.count);

    return {
      id: `category-usage-${Date.now()}`,
      type: 'category-usage',
      title: 'Category Usage',
      description: `Your most active areas of focus over the ${period}`,
      severity: 'info',
      generatedAt: new Date(),
      period,
      data: {
        categories,
        mostActive: categories[0]?.name || 'None',
        leastActive: categories[categories.length - 1]?.name || 'None',
      },
    };
  }

  /**
   * Analyze mood trends over time
   */
  private analyzeMoodTrend(period: InsightPeriod): MoodTrendInsight | null {
    const filteredReflections = this.filterByPeriod(this.reflections, period);

    if (filteredReflections.length === 0) return null;

    // Group by date and compute average mood
    const moodByDate: Record<string, { total: number; count: number }> = {};

    filteredReflections.forEach((reflection) => {
      const dateKey = reflection.createdAt.toISOString().split('T')[0];
      const moodValue = this.moodToNumber(reflection.mood);

      if (!moodByDate[dateKey]) {
        moodByDate[dateKey] = { total: 0, count: 0 };
      }
      moodByDate[dateKey].total += moodValue;
      moodByDate[dateKey].count += 1;
    });

    const timeline = Object.entries(moodByDate).map(([date, { total, count }]) => ({
      date: new Date(date),
      mood: total / count,
      reflectionCount: count,
    }));

    timeline.sort((a, b) => a.date.getTime() - b.date.getTime());

    const averageMood = timeline.reduce((sum, entry) => sum + entry.mood, 0) / timeline.length;

    // Determine trend
    const firstHalf = timeline.slice(0, Math.floor(timeline.length / 2));
    const secondHalf = timeline.slice(Math.floor(timeline.length / 2));
    const firstAvg = firstHalf.reduce((sum, e) => sum + e.mood, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((sum, e) => sum + e.mood, 0) / secondHalf.length;

    let trend: 'improving' | 'declining' | 'stable' = 'stable';
    if (secondAvg > firstAvg + 0.3) trend = 'improving';
    else if (secondAvg < firstAvg - 0.3) trend = 'declining';

    return {
      id: `mood-trend-${Date.now()}`,
      type: 'mood-trend',
      title: 'Mood Trend',
      description: `Your emotional journey is ${trend === 'improving' ? 'on an upward path' : trend === 'declining' ? 'showing some challenges' : 'remaining steady'}`,
      severity: trend === 'improving' ? 'success' : trend === 'declining' ? 'warning' : 'info',
      generatedAt: new Date(),
      period,
      data: {
        timeline,
        average: averageMood,
        trend,
      },
    };
  }

  /**
   * Analyze template completion rates
   */
  private analyzeCompletionRate(period: InsightPeriod): CompletionRateInsight | null {
    const filteredGuides = this.filterByPeriod(this.templates, period);

    if (filteredGuides.length === 0) return null;

    const completed = filteredGuides.filter((t) => t.completion === 100);
    const completionRate = (completed.length / filteredGuides.length) * 100;

    // Calculate average completion time (mock for now)
    const completionTimes = completed.map((t) => {
      const start = t.startedAt.getTime();
      const end = t.updatedAt.getTime();
      return (end - start) / (1000 * 60 * 60 * 24); // days
    });

    const avgTime = completionTimes.length > 0
      ? completionTimes.reduce((sum, t) => sum + t, 0) / completionTimes.length
      : 0;

    // By category
    const byCategory: Record<string, { started: number; completed: number; rate: number }> = {};
    filteredGuides.forEach((template) => {
      const category = this.extractCategory(guide.tags);
      if (!byCategory[category]) {
        byCategory[category] = { started: 0, completed: 0, rate: 0 };
      }
      byCategory[category].started += 1;
      if (guide.completion === 100) {
        byCategory[category].completed += 1;
      }
    });

    Object.keys(byCategory).forEach((category) => {
      const stats = byCategory[category];
      stats.rate = (stats.completed / stats.started) * 100;
    });

    return {
      id: `completion-rate-${Date.now()}`,
      type: 'completion-rate',
      title: 'Completion Rate',
      description: `You're completing ${completionRate.toFixed(0)}% of started templates`,
      severity: completionRate >= 70 ? 'success' : completionRate >= 50 ? 'info' : 'warning',
      generatedAt: new Date(),
      period,
      data: {
        totalStarted: filteredGuides.length,
        totalCompleted: completed.length,
        completionRate,
        averageCompletionTime: avgTime,
        fastestCompletion: Math.min(...completionTimes, 0),
        slowestCompletion: Math.max(...completionTimes, 0),
        byCategory,
      },
    };
  }

  /**
   * Analyze reflection frequency patterns
   */
  private analyzeReflectionFrequency(period: InsightPeriod): ReflectionFrequencyInsight | null {
    const filteredReflections = this.filterByPeriod(this.reflections, period);

    if (filteredReflections.length === 0) return null;

    // Calculate averages
    const periodDays = this.getPeriodDays(period);
    const averagePerWeek = (filteredReflections.length / periodDays) * 7;

    // Frequency by day of week
    const frequencyByDay: Record<string, number> = {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    };

    filteredReflections.forEach((reflection) => {
      const day = reflection.createdAt.toLocaleDateString('en-US', { weekday: 'long' });
      frequencyByDay[day] = (frequencyByDay[day] || 0) + 1;
    });

    // Time of day distribution
    const timeOfDay = {
      morning: 0,
      afternoon: 0,
      evening: 0,
      night: 0,
    };

    filteredReflections.forEach((reflection) => {
      const hour = reflection.createdAt.getHours();
      if (hour >= 5 && hour < 12) timeOfDay.morning += 1;
      else if (hour >= 12 && hour < 17) timeOfDay.afternoon += 1;
      else if (hour >= 17 && hour < 21) timeOfDay.evening += 1;
      else timeOfDay.night += 1;
    });

    // Calculate streak
    const streak = this.calculateReflectionStreak(filteredReflections);

    return {
      id: `reflection-frequency-${Date.now()}`,
      type: 'reflection-frequency',
      title: 'Reflection Frequency',
      description: `You're averaging ${averagePerWeek.toFixed(1)} reflections per week`,
      severity: 'info',
      generatedAt: new Date(),
      period,
      data: {
        totalReflections: filteredReflections.length,
        averagePerWeek,
        currentStreak: streak.current,
        longestStreak: streak.longest,
        lastReflectionDate: filteredReflections[filteredReflections.length - 1]?.createdAt || new Date(),
        frequencyByDay,
        timeOfDay,
      },
    };
  }

  /**
   * Analyze recurring themes in reflections
   */
  private analyzeRecurringThemes(period: InsightPeriod): RecurringThemeInsight | null {
    const filteredReflections = this.filterByPeriod(this.reflections, period);

    if (filteredReflections.length < 3) return null;

    // Simple word frequency analysis
    const wordCounts: Record<string, {
      count: number;
      firstSeen: Date;
      lastSeen: Date;
      categories: Set<string>;
    }> = {};

    // Stop words to exclude
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
      'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
      'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
      'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those',
      'i', 'you', 'he', 'she', 'it', 'we', 'they', 'my', 'your', 'his', 'her',
      'its', 'our', 'their', 'am', 'today', 'feeling'
    ]);

    filteredReflections.forEach((reflection) => {
      const words = reflection.text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter((word) => word.length > 3 && !stopWords.has(word));

      words.forEach((word) => {
        if (!wordCounts[word]) {
          wordCounts[word] = {
            count: 0,
            firstSeen: reflection.createdAt,
            lastSeen: reflection.createdAt,
            categories: new Set(),
          };
        }
        wordCounts[word].count += 1;
        wordCounts[word].lastSeen = reflection.createdAt;
        reflection.linkedGuideIds.forEach((id) => {
          const guide = this.templates.find((t) => t.id === id);
          if (template) {
            const category = this.extractCategory(guide.tags);
            wordCounts[word].categories.add(category);
          }
        });
      });
    });

    // Convert to themes array
    const themes = Object.entries(wordCounts)
      .map(([word, data]) => ({
        word,
        frequency: data.count,
        categories: Array.from(data.categories),
        firstSeen: data.firstSeen,
        lastSeen: data.lastSeen,
      }))
      .filter((theme) => theme.frequency >= 2)
      .sort((a, b) => b.frequency - a.frequency)
      .slice(0, 20);

    const topThemes = themes.slice(0, 7).map((t) => t.word);

    // Emerging themes (appeared recently and frequently)
    const recentThreshold = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000); // 2 weeks ago
    const emergingThemes = themes
      .filter((t) => t.firstSeen > recentThreshold && t.frequency >= 3)
      .slice(0, 3)
      .map((t) => t.word);

    return {
      id: `recurring-theme-${Date.now()}`,
      type: 'recurring-theme',
      title: 'Recurring Themes',
      description: `Key patterns emerging in your reflections`,
      severity: 'insight',
      generatedAt: new Date(),
      period,
      data: {
        themes,
        topThemes,
        emergingThemes,
        fadingThemes: [], // TODO: implement declining frequency detection
      },
    };
  }

  /**
   * Analyze reflection/completion streak
   */
  private analyzeStreak(period: InsightPeriod): StreakInsight | null {
    const filteredReflections = this.filterByPeriod(this.reflections, period);

    if (filteredReflections.length === 0) return null;

    const streak = this.calculateReflectionStreak(filteredReflections);

    return {
      id: `streak-${Date.now()}`,
      type: 'streak',
      title: 'Reflection Streak',
      description: streak.current >= 7
        ? `Amazing! You're on a ${streak.current}-day reflection streak`
        : streak.current > 0
        ? `Keep it up! ${streak.current} days and counting`
        : 'Start a new reflection streak today',
      severity: streak.current >= 7 ? 'success' : 'info',
      generatedAt: new Date(),
      period,
      data: {
        currentStreak: streak.current,
        longestStreak: streak.longest,
        streakType: 'daily-reflection',
        streakStart: streak.startDate || new Date(),
        milestones: streak.milestones,
      },
    };
  }

  /**
   * Generate summary statistics
   */
  private generateSummary() {
    const categoryCounts: Record<string, number> = {};
    this.templates.forEach((template) => {
      const category = this.extractCategory(guide.tags);
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    const mostActiveCategory = Object.entries(categoryCounts)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || 'None';

    const activeDays = new Set(
      [...this.templates.map((t) => t.startedAt.toDateString()),
       ...this.reflections.map((r) => r.createdAt.toDateString())]
    ).size;

    const streak = this.calculateReflectionStreak(this.reflections);

    return {
      totalTemplates: this.templates.length,
      totalReflections: this.reflections.length,
      activeDays,
      mostActiveCategory,
      currentStreak: streak.current,
    };
  }

  /**
   * Helper: Filter data by time period
   */
  private filterByPeriod<T extends { startedAt?: Date; createdAt?: Date; updatedAt?: Date }>(
    items: T[],
    period: InsightPeriod
  ): T[] {
    const now = new Date();
    const cutoff = new Date();

    switch (period) {
      case 'week':
        cutoff.setDate(now.getDate() - 7);
        break;
      case 'month':
        cutoff.setMonth(now.getMonth() - 1);
        break;
      case 'quarter':
        cutoff.setMonth(now.getMonth() - 3);
        break;
      case 'year':
        cutoff.setFullYear(now.getFullYear() - 1);
        break;
      case 'all-time':
        return items;
    }

    return items.filter((item) => {
      const itemDate = item.startedAt || item.createdAt || item.updatedAt;
      return itemDate && itemDate >= cutoff;
    });
  }

  /**
   * Helper: Get number of days in period
   */
  private getPeriodDays(period: InsightPeriod): number {
    switch (period) {
      case 'week': return 7;
      case 'month': return 30;
      case 'quarter': return 90;
      case 'year': return 365;
      case 'all-time': return 365; // default
    }
  }

  /**
   * Helper: Convert mood to numeric value
   */
  private moodToNumber(mood?: 'happy' | 'neutral' | 'sad'): number {
    if (!mood) return 0;
    return mood === 'happy' ? 1 : mood === 'neutral' ? 0 : -1;
  }

  /**
   * Helper: Extract category from tags
   */
  private extractCategory(tags: string[]): string {
    return tags[0] || 'Uncategorized';
  }

  /**
   * Helper: Calculate reflection streak
   */
  private calculateReflectionStreak(reflections: ReflectionEntry[]): {
    current: number;
    longest: number;
    startDate?: Date;
    milestones: Array<{ days: number; reachedAt: Date }>;
  } {
    if (reflections.length === 0) {
      return { current: 0, longest: 0, milestones: [] };
    }

    // Sort by date
    const sorted = [...reflections].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 1;
    let streakStart: Date | undefined;
    const milestones: Array<{ days: number; reachedAt: Date }> = [];

    // Calculate streaks
    for (let i = 1; i < sorted.length; i++) {
      const prevDate = new Date(sorted[i - 1].createdAt);
      const currDate = new Date(sorted[i].createdAt);
      prevDate.setHours(0, 0, 0, 0);
      currDate.setHours(0, 0, 0, 0);

      const dayDiff = Math.floor((currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));

      if (dayDiff === 1 || dayDiff === 0) {
        tempStreak += (dayDiff === 1 ? 1 : 0);
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        if (tempStreak >= 7) {
          milestones.push({ days: tempStreak, reachedAt: sorted[i - 1].createdAt });
        }
        tempStreak = 1;
      }
    }

    longestStreak = Math.max(longestStreak, tempStreak);

    // Check if current streak is active
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastReflectionDate = new Date(sorted[sorted.length - 1].createdAt);
    lastReflectionDate.setHours(0, 0, 0, 0);
    const daysSinceLastReflection = Math.floor((today.getTime() - lastReflectionDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSinceLastReflection <= 1) {
      currentStreak = tempStreak;
      streakStart = sorted[sorted.length - tempStreak]?.createdAt;
    } else {
      currentStreak = 0;
    }

    return {
      current: currentStreak,
      longest: longestStreak,
      startDate: streakStart,
      milestones,
    };
  }
}

/**
 * Create analytics engine instance from store data
 */
export function createAnalyticsEngine(templates: TemplateSession[], reflections: ReflectionEntry[]): AnalyticsEngine {
  return new AnalyticsEngine(templates, reflections);
}
