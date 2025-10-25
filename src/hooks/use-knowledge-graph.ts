// React Hook for Knowledge Graph Integration
// Provides clean interface for components to use knowledge graph functionality

import { useMemo, useState, useCallback } from 'react';
import {
  knowledgeGraph,
  getRelatedGuides,
  getConflictingGuides,
  getPersonalizedRecommendations,
  getRelatedReadings,
  getReadingsForTemplate,
  getRelatedQuestions,
  getQuestionsForGuide,
  getCrossRecommendations,
  type GuideRelationships,
  type UserRecommendation,
  type AnalysisReport,
  type ReadingConnection,
  type QuestionConnection,
  type CrossConnection
} from '@/lib/knowledge-graph';

// User profile interface
export interface UserProfile {
  age?: number;
  goals?: string[];
  completedGuides?: string[];
  currentGuides?: string[];
  interests?: string[];
  lifeStage?: string;
}

// Hook return interface
export interface UseKnowledgeGraphReturn {
  // Guide relationships
  getGuideRelationships: (guideId: string) => GuideRelationships;
  getRelatedGuides: (guideId: string, limit?: number) => Array<{
    guideId: string;
    strength: number;
    reason: string;
    level: 'critical' | 'strong' | 'medium';
  }>;

  // User recommendations
  getPersonalizedRecommendations: (userProfile: UserProfile) => UserRecommendation[];
  getAgeAppropriateGuides: (age: number, limit?: number) => UserRecommendation[];

  // Conflict detection
  getConflictingGuides: (guideIds: string[]) => Array<{
    guide1: string;
    guide2: string;
    reason: string;
    resolution: string;
  }>;
  checkGuideConflicts: (guideId: string, activeGuides: string[]) => Array<{
    conflictingGuide: string;
    reason: string;
    resolution: string;
    severity: 'high' | 'medium' | 'low';
  }>;

  // Analysis and insights
  generateAnalysisReport: (guideId: string) => AnalysisReport | null;
  getGuideCluster: (guideId: string) => {
    semantic?: string;
    micro?: string;
    theme?: string;
    focus?: string;
  };

  // Life sequences and progressions
  getNextInSequence: (completedGuides: string[], userProfile: UserProfile) => UserRecommendation[];
  getLifeStageRecommendations: (lifeStage: string, limit?: number) => UserRecommendation[];

  // Utility functions
  isGuideRecommended: (guideId: string, userProfile: UserProfile) => boolean;
  getGuideStrength: (guide1: string, guide2: string) => number;

  // Reading and question recommendations
  getRelatedReadings: (readingId: string, limit?: number) => ReadingConnection[];
  getReadingsForTemplate: (guideId: string, limit?: number) => ReadingConnection[];
  getRelatedQuestions: (questionId: string, limit?: number) => QuestionConnection[];
  getQuestionsForGuide: (guideId: string, limit?: number) => QuestionConnection[];
  getCrossRecommendations: (contentType: 'guide' | 'reading' | 'question', contentId: string) => CrossConnection[];
}

export function useKnowledgeGraph(): UseKnowledgeGraphReturn {
  const [error, setError] = useState<string | null>(null);

  // Clear error on function calls
  const clearError = useCallback(() => {
    if (error) setError(null);
  }, [error]);

  // Get guide relationships with error handling
  const getTemplateRelationshipsSafe = useCallback((guideId: string): GuideRelationships => {
    try {
      clearError();
      return knowledgeGraph.getGuideRelationships(guideId);
    } catch (err) {
      setError(`Failed to get relationships for ${guideId}`);
      return {
        guideId,
        semantic_cluster: null,
        micro_cluster: null,
        weighted_connections: [],
        negative_connections: [],
        total_relationship_strength: 0
      };
    }
  }, [clearError]);

  // Get related guides with memoization
  const getRelatedTemplatesMemo = useCallback((guideId: string, limit = 5) => {
    try {
      clearError();
      return getRelatedGuides(guideId, limit);
    } catch (err) {
      setError(`Failed to get related guides for ${guideId}`);
      return [];
    }
  }, [clearError]);

  // Get personalized recommendations
  const getPersonalizedRecommendationsMemo = useCallback((userProfile: UserProfile) => {
    try {
      clearError();
      return getPersonalizedRecommendations(userProfile);
    } catch (err) {
      setError('Failed to get personalized recommendations');
      return [];
    }
  }, [clearError]);

  // Get age-appropriate guides
  const getAgeAppropriateGuides = useCallback((age: number, limit = 6): UserRecommendation[] => {
    try {
      clearError();
      const recommendations = knowledgeGraph.getOptimalLifeSequence(age, [], []);
      return recommendations.slice(0, limit);
    } catch (err) {
      setError('Failed to get age-appropriate guides');
      return [];
    }
  }, [clearError]);

  // Get conflicting guides
  const getConflictingTemplatesMemo = useCallback((guideIds: string[]) => {
    try {
      clearError();
      return getConflictingGuides(guideIds);
    } catch (err) {
      setError('Failed to get conflicting guides');
      return [];
    }
  }, [clearError]);

  // Check guide conflicts with severity assessment
  const checkGuideConflicts = useCallback((guideId: string, activeGuides: string[]) => {
    try {
      clearError();
      const relationships = knowledgeGraph.getGuideRelationships(guideId);

      return relationships.negative_connections
        .filter(conflict => activeGuides.includes(conflict.conflicting_template))
        .map(conflict => ({
          conflictingGuide: conflict.conflicting_template,
          reason: conflict.reasoning,
          resolution: conflict.resolution_strategy,
          severity: conflict.conflict_strength >= 80 ? 'high' as const :
                   conflict.conflict_strength >= 60 ? 'medium' as const : 'low' as const
        }));
    } catch (err) {
      setError('Failed to check guide conflicts');
      return [];
    }
  }, [clearError]);

  // Generate analysis report
  const generateAnalysisReportSafe = useCallback((guideId: string): AnalysisReport | null => {
    try {
      clearError();
      return knowledgeGraph.generateAnalysisReport(guideId);
    } catch (err) {
      setError(`Failed to generate analysis for ${guideId}`);
      return null;
    }
  }, [clearError]);

  // Get guide cluster information
  const getGuideCluster = useCallback((guideId: string) => {
    try {
      clearError();
      const relationships = knowledgeGraph.getGuideRelationships(guideId);

      return {
        semantic: relationships.semantic_cluster?.name,
        micro: relationships.micro_cluster?.micro_cluster,
        theme: relationships.micro_cluster?.micro_theme,
        focus: relationships.micro_cluster?.psychological_focus
      };
    } catch (err) {
      setError('Failed to get guide cluster');
      return {};
    }
  }, [clearError]);

  // Get next guides in sequence
  const getNextInSequence = useCallback((completedGuides: string[], userProfile: UserProfile): UserRecommendation[] => {
    try {
      clearError();
      const { age = 25, goals = [] } = userProfile;
      return knowledgeGraph.getOptimalLifeSequence(age, goals, completedGuides);
    } catch (err) {
      setError('Failed to get sequence recommendations');
      return [];
    }
  }, [clearError]);

  // Get life stage specific recommendations
  const getLifeStageRecommendations = useCallback((lifeStage: string, limit = 5): UserRecommendation[] => {
    try {
      clearError();
      // Map life stages to approximate ages for now
      const ageMap: Record<string, number> = {
        'young_adult': 25,
        'early_career': 28,
        'family_building': 32,
        'midlife': 45,
        'pre_retirement': 60,
        'retirement': 70
      };

      const age = ageMap[lifeStage] || 30;
      return knowledgeGraph.getOptimalLifeSequence(age, [], []).slice(0, limit);
    } catch (err) {
      setError('Failed to get life stage recommendations');
      return [];
    }
  }, [clearError]);

  // Check if guide is recommended for user
  const isGuideRecommended = useCallback((guideId: string, userProfile: UserProfile): boolean => {
    try {
      clearError();
      const recommendations = getPersonalizedRecommendations(userProfile);
      return recommendations.some(rec => rec.guideId === guideId && rec.priority === 'high');
    } catch (err) {
      return false;
    }
  }, [clearError]);

  // Get connection strength between two guides
  const getGuideStrength = useCallback((guide1: string, guide2: string): number => {
    try {
      clearError();
      const relationships = knowledgeGraph.getGuideRelationships(guide1);
      const connection = relationships.weighted_connections.find(conn => conn.guideId === guide2);
      return connection?.strength || 0;
    } catch (err) {
      return 0;
    }
  }, [clearError]);

  return useMemo(() => ({
    // Guide relationships
    getGuideRelationships: getTemplateRelationshipsSafe,
    getRelatedGuides: getRelatedTemplatesMemo,

    // User recommendations
    getPersonalizedRecommendations: getPersonalizedRecommendationsMemo,
    getAgeAppropriateGuides,

    // Conflict detection
    getConflictingGuides: getConflictingTemplatesMemo,
    checkGuideConflicts,

    // Analysis and insights
    generateAnalysisReport: generateAnalysisReportSafe,
    getGuideCluster,

    // Life sequences and progressions
    getNextInSequence,
    getLifeStageRecommendations,

    // Utility functions
    isGuideRecommended,
    getGuideStrength,

    // Reading and question recommendations
    getRelatedReadings,
    getReadingsForTemplate,
    getRelatedQuestions,
    getQuestionsForGuide,
    getCrossRecommendations,
  }), [
    getTemplateRelationshipsSafe,
    getRelatedTemplatesMemo,
    getPersonalizedRecommendationsMemo,
    getAgeAppropriateGuides,
    getConflictingTemplatesMemo,
    checkGuideConflicts,
    generateAnalysisReportSafe,
    getGuideCluster,
    getNextInSequence,
    getLifeStageRecommendations,
    isGuideRecommended,
    getGuideStrength,
  ]);
}

// Specialized hooks for common use cases

// Hook for guide selection pages
export function useTemplateRecommendations(guideId: string, userProfile: UserProfile) {
  const kg = useKnowledgeGraph();

  return useMemo(() => {
    const related = kg.getRelatedGuides(guideId, 4);
    const conflicts = kg.checkGuideConflicts(guideId, userProfile.currentGuides || []);
    const cluster = kg.getGuideCluster(guideId);

    return {
      relatedGuides: related,
      conflicts,
      cluster,
      hasConflicts: conflicts.length > 0,
      highSeverityConflicts: conflicts.filter(c => c.severity === 'high')
    };
  }, [kg, guideId, userProfile]);
}

// Hook for dashboard/workspace pages
export function useUserRecommendations(userProfile: UserProfile) {
  const kg = useKnowledgeGraph();

  return useMemo(() => {
    const personalized = kg.getPersonalizedRecommendations(userProfile);
    const ageAppropriate = userProfile.age ? kg.getAgeAppropriateGuides(userProfile.age, 6) : [];
    const nextInSequence = kg.getNextInSequence(userProfile.completedGuides || [], userProfile);
    const conflicts = kg.getConflictingGuides(userProfile.currentGuides || []);

    return {
      personalizedRecommendations: personalized.slice(0, 6),
      ageAppropriateTemplates: ageAppropriate,
      nextInSequence: nextInSequence.slice(0, 3),
      activeConflicts: conflicts,
      hasActiveConflicts: conflicts.length > 0
    };
  }, [kg, userProfile]);
}

// Hook for multi-guide workspaces
export function useMultiTemplateIntelligence(activeGuideIds: string[], userProfile: UserProfile) {
  const kg = useKnowledgeGraph();

  return useMemo(() => {
    const allConflicts = kg.getConflictingGuides(activeGuideIds);
    const synergies: Array<{guide1: string, guide2: string, strength: number}> = [];

    // Find synergistic connections between active guides
    activeGuideIds.forEach((guide1, i) => {
      activeGuideIds.slice(i + 1).forEach(guide2 => {
        const strength = kg.getGuideStrength(guide1, guide2);
        if (strength >= 70) { // Strong synergy threshold
          synergies.push({ guide1, guide2, strength });
        }
      });
    });

    return {
      conflicts: allConflicts,
      synergies,
      hasConflicts: allConflicts.length > 0,
      hasSynergies: synergies.length > 0,
      overallHealth: allConflicts.length === 0 ? 'healthy' :
                   allConflicts.length <= 2 ? 'caution' : 'problematic'
    };
  }, [kg, activeGuideIds, userProfile]);
}