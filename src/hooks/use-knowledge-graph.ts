// React Hook for Knowledge Graph Integration
// Provides clean interface for components to use knowledge graph functionality

import { useMemo, useState, useCallback } from 'react';
import {
  knowledgeGraph,
  getRelatedTemplates,
  getConflictingTemplates,
  getPersonalizedRecommendations,
  type TemplateRelationships,
  type UserRecommendation,
  type AnalysisReport
} from '@/lib/knowledge-graph';

// User profile interface
export interface UserProfile {
  age?: number;
  goals?: string[];
  completedTemplates?: string[];
  currentTemplates?: string[];
  interests?: string[];
  lifeStage?: string;
}

// Hook return interface
export interface UseKnowledgeGraphReturn {
  // Template relationships
  getTemplateRelationships: (templateId: string) => TemplateRelationships;
  getRelatedTemplates: (templateId: string, limit?: number) => Array<{
    templateId: string;
    strength: number;
    reason: string;
    level: 'critical' | 'strong' | 'medium';
  }>;

  // User recommendations
  getPersonalizedRecommendations: (userProfile: UserProfile) => UserRecommendation[];
  getAgeAppropriateTemplates: (age: number, limit?: number) => UserRecommendation[];

  // Conflict detection
  getConflictingTemplates: (templateIds: string[]) => Array<{
    template1: string;
    template2: string;
    reason: string;
    resolution: string;
  }>;
  checkTemplateConflicts: (templateId: string, activeTemplates: string[]) => Array<{
    conflictingTemplate: string;
    reason: string;
    resolution: string;
    severity: 'high' | 'medium' | 'low';
  }>;

  // Analysis and insights
  generateAnalysisReport: (templateId: string) => AnalysisReport | null;
  getTemplateCluster: (templateId: string) => {
    semantic?: string;
    micro?: string;
    theme?: string;
    focus?: string;
  };

  // Life sequences and progressions
  getNextInSequence: (completedTemplates: string[], userProfile: UserProfile) => UserRecommendation[];
  getLifeStageRecommendations: (lifeStage: string, limit?: number) => UserRecommendation[];

  // Utility functions
  isTemplateRecommended: (templateId: string, userProfile: UserProfile) => boolean;
  getTemplateStrength: (template1: string, template2: string) => number;
}

export function useKnowledgeGraph(): UseKnowledgeGraphReturn {
  const [error, setError] = useState<string | null>(null);

  // Clear error on function calls
  const clearError = useCallback(() => {
    if (error) setError(null);
  }, [error]);

  // Get template relationships with error handling
  const getTemplateRelationshipsSafe = useCallback((templateId: string): TemplateRelationships => {
    try {
      clearError();
      return knowledgeGraph.getTemplateRelationships(templateId);
    } catch (err) {
      setError(`Failed to get relationships for ${templateId}`);
      return {
        templateId,
        semantic_cluster: null,
        micro_cluster: null,
        weighted_connections: [],
        negative_connections: [],
        total_relationship_strength: 0
      };
    }
  }, [clearError]);

  // Get related templates with memoization
  const getRelatedTemplatesMemo = useCallback((templateId: string, limit = 5) => {
    try {
      clearError();
      return getRelatedTemplates(templateId, limit);
    } catch (err) {
      setError(`Failed to get related templates for ${templateId}`);
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

  // Get age-appropriate templates
  const getAgeAppropriateTemplates = useCallback((age: number, limit = 6): UserRecommendation[] => {
    try {
      clearError();
      const recommendations = knowledgeGraph.getOptimalLifeSequence(age, [], []);
      return recommendations.slice(0, limit);
    } catch (err) {
      setError('Failed to get age-appropriate templates');
      return [];
    }
  }, [clearError]);

  // Get conflicting templates
  const getConflictingTemplatesMemo = useCallback((templateIds: string[]) => {
    try {
      clearError();
      return getConflictingTemplates(templateIds);
    } catch (err) {
      setError('Failed to get conflicting templates');
      return [];
    }
  }, [clearError]);

  // Check template conflicts with severity assessment
  const checkTemplateConflicts = useCallback((templateId: string, activeTemplates: string[]) => {
    try {
      clearError();
      const relationships = knowledgeGraph.getTemplateRelationships(templateId);

      return relationships.negative_connections
        .filter(conflict => activeTemplates.includes(conflict.conflicting_template))
        .map(conflict => ({
          conflictingTemplate: conflict.conflicting_template,
          reason: conflict.reasoning,
          resolution: conflict.resolution_strategy,
          severity: conflict.conflict_strength >= 80 ? 'high' as const :
                   conflict.conflict_strength >= 60 ? 'medium' as const : 'low' as const
        }));
    } catch (err) {
      setError('Failed to check template conflicts');
      return [];
    }
  }, [clearError]);

  // Generate analysis report
  const generateAnalysisReportSafe = useCallback((templateId: string): AnalysisReport | null => {
    try {
      clearError();
      return knowledgeGraph.generateAnalysisReport(templateId);
    } catch (err) {
      setError(`Failed to generate analysis for ${templateId}`);
      return null;
    }
  }, [clearError]);

  // Get template cluster information
  const getTemplateCluster = useCallback((templateId: string) => {
    try {
      clearError();
      const relationships = knowledgeGraph.getTemplateRelationships(templateId);

      return {
        semantic: relationships.semantic_cluster?.name,
        micro: relationships.micro_cluster?.micro_cluster,
        theme: relationships.micro_cluster?.micro_theme,
        focus: relationships.micro_cluster?.psychological_focus
      };
    } catch (err) {
      setError('Failed to get template cluster');
      return {};
    }
  }, [clearError]);

  // Get next templates in sequence
  const getNextInSequence = useCallback((completedTemplates: string[], userProfile: UserProfile): UserRecommendation[] => {
    try {
      clearError();
      const { age = 25, goals = [] } = userProfile;
      return knowledgeGraph.getOptimalLifeSequence(age, goals, completedTemplates);
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

  // Check if template is recommended for user
  const isTemplateRecommended = useCallback((templateId: string, userProfile: UserProfile): boolean => {
    try {
      clearError();
      const recommendations = getPersonalizedRecommendations(userProfile);
      return recommendations.some(rec => rec.templateId === templateId && rec.priority === 'high');
    } catch (err) {
      return false;
    }
  }, [clearError]);

  // Get connection strength between two templates
  const getTemplateStrength = useCallback((template1: string, template2: string): number => {
    try {
      clearError();
      const relationships = knowledgeGraph.getTemplateRelationships(template1);
      const connection = relationships.weighted_connections.find(conn => conn.templateId === template2);
      return connection?.strength || 0;
    } catch (err) {
      return 0;
    }
  }, [clearError]);

  return useMemo(() => ({
    // Template relationships
    getTemplateRelationships: getTemplateRelationshipsSafe,
    getRelatedTemplates: getRelatedTemplatesMemo,

    // User recommendations
    getPersonalizedRecommendations: getPersonalizedRecommendationsMemo,
    getAgeAppropriateTemplates,

    // Conflict detection
    getConflictingTemplates: getConflictingTemplatesMemo,
    checkTemplateConflicts,

    // Analysis and insights
    generateAnalysisReport: generateAnalysisReportSafe,
    getTemplateCluster,

    // Life sequences and progressions
    getNextInSequence,
    getLifeStageRecommendations,

    // Utility functions
    isTemplateRecommended,
    getTemplateStrength,
  }), [
    getTemplateRelationshipsSafe,
    getRelatedTemplatesMemo,
    getPersonalizedRecommendationsMemo,
    getAgeAppropriateTemplates,
    getConflictingTemplatesMemo,
    checkTemplateConflicts,
    generateAnalysisReportSafe,
    getTemplateCluster,
    getNextInSequence,
    getLifeStageRecommendations,
    isTemplateRecommended,
    getTemplateStrength,
  ]);
}

// Specialized hooks for common use cases

// Hook for template selection pages
export function useTemplateRecommendations(templateId: string, userProfile: UserProfile) {
  const kg = useKnowledgeGraph();

  return useMemo(() => {
    const related = kg.getRelatedTemplates(templateId, 4);
    const conflicts = kg.checkTemplateConflicts(templateId, userProfile.currentTemplates || []);
    const cluster = kg.getTemplateCluster(templateId);

    return {
      relatedTemplates: related,
      conflicts,
      cluster,
      hasConflicts: conflicts.length > 0,
      highSeverityConflicts: conflicts.filter(c => c.severity === 'high')
    };
  }, [kg, templateId, userProfile]);
}

// Hook for dashboard/workspace pages
export function useUserRecommendations(userProfile: UserProfile) {
  const kg = useKnowledgeGraph();

  return useMemo(() => {
    const personalized = kg.getPersonalizedRecommendations(userProfile);
    const ageAppropriate = userProfile.age ? kg.getAgeAppropriateTemplates(userProfile.age, 6) : [];
    const nextInSequence = kg.getNextInSequence(userProfile.completedTemplates || [], userProfile);
    const conflicts = kg.getConflictingTemplates(userProfile.currentTemplates || []);

    return {
      personalizedRecommendations: personalized.slice(0, 6),
      ageAppropriateTemplates: ageAppropriate,
      nextInSequence: nextInSequence.slice(0, 3),
      activeConflicts: conflicts,
      hasActiveConflicts: conflicts.length > 0
    };
  }, [kg, userProfile]);
}

// Hook for multi-template workspaces
export function useMultiTemplateIntelligence(activeTemplateIds: string[], userProfile: UserProfile) {
  const kg = useKnowledgeGraph();

  return useMemo(() => {
    const allConflicts = kg.getConflictingTemplates(activeTemplateIds);
    const synergies: Array<{template1: string, template2: string, strength: number}> = [];

    // Find synergistic connections between active templates
    activeTemplateIds.forEach((template1, i) => {
      activeTemplateIds.slice(i + 1).forEach(template2 => {
        const strength = kg.getTemplateStrength(template1, template2);
        if (strength >= 70) { // Strong synergy threshold
          synergies.push({ template1, template2, strength });
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
  }, [kg, activeTemplateIds, userProfile]);
}