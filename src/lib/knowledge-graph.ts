// Knowledge Graph Service Wrapper for Browser Environment
// Provides clean TypeScript interface to the knowledge graph system

// Import JSON data directly (works in browser)
import semanticClustersData from '../../knowledge-graph/template-connections-comprehensive.json';
import microClustersData from '../../knowledge-graph/micro-clusters.json';
import advancedConnectionsData from '../../knowledge-graph/advanced-connections.json';
import lifeSequencesData from '../../knowledge-graph/life-sequences-detailed.json';
import contextualPromptsData from '../../knowledge-graph/context-specific-prompts.json';
import articleConnectionsData from '../../knowledge-graph/article-connections.json';
import promptConnectionsData from '../../knowledge-graph/prompt-connections.json';

// TypeScript interfaces
export interface TemplateConnection {
  templateId: string;
  strength: number;
  strength_level: 'critical' | 'strong' | 'medium';
  reasoning: string;
  psychological_basis: string;
}

export interface ConflictConnection {
  conflict_type: 'priority' | 'timing';
  conflicting_template: string;
  conflict_strength: number;
  reasoning: string;
  psychological_conflict: string;
  resolution_strategy: string;
}

export interface TemplateRelationships {
  templateId: string;
  semantic_cluster: {
    name: string;
    reasoning: string;
    total_templates: number;
    related_templates: string[];
  } | null;
  micro_cluster: {
    main_cluster: string;
    micro_cluster: string;
    micro_theme: string;
    psychological_focus: string;
    related_templates: string[];
  } | null;
  weighted_connections: TemplateConnection[];
  negative_connections: ConflictConnection[];
  total_relationship_strength: number;
}

// New interfaces for articles and prompts
export interface ArticleConnection {
  id: string;
  strength: number;
  reason: string;
}

export interface PromptConnection {
  id: string;
  strength: number;
  reason: string;
}

export interface CrossConnection {
  type: 'template' | 'article' | 'prompt';
  id: string;
  strength: number;
  reason: string;
}

export interface UserRecommendation {
  templateId: string;
  priority: 'high' | 'sequence' | 'medium';
  reason: string;
  life_stage?: string;
  sequence_context?: Record<string, unknown>;
}

export interface AnalysisReport {
  template_id: string;
  cluster_membership: {
    semantic: Record<string, unknown>;
    micro: Record<string, unknown>;
  };
  connection_strength: {
    total_weighted_connections: number;
    average_strength: number;
    strongest_connection: TemplateConnection | null;
    critical_connections_count: number;
  };
  conflict_analysis: {
    total_conflicts: number;
    priority_conflicts: number;
    timing_conflicts: number;
    highest_conflict: ConflictConnection | null;
  };
  recommendations: {
    high_synergy_templates: string[];
    avoid_simultaneously: string[];
    optimal_timing: string;
  };
}

// Browser-compatible Knowledge Graph class
class BrowserKnowledgeGraph {
  private semanticClusters: Record<string, unknown>;
  private microClusters: Record<string, unknown>;
  private weightedConnections: Record<string, unknown>;
  private negativeConnections: Record<string, unknown>;
  private lifeSequences: Record<string, unknown>;
  private lifecyclePatterns: Record<string, unknown>;
  private contextualPrompts: Record<string, unknown>;
  private promptTriggers: Record<string, unknown>;
  private loaded = false;

  constructor() {
    this.load();
  }

  private load() {
    try {
      // Load all data from imported JSON
      this.semanticClusters = semanticClustersData.semantic_clusters;
      this.microClusters = microClustersData.micro_clusters;
      this.weightedConnections = advancedConnectionsData.weighted_cross_connections;
      this.negativeConnections = advancedConnectionsData.negative_connections;
      this.lifeSequences = lifeSequencesData.comprehensive_life_sequences;
      this.lifecyclePatterns = lifeSequencesData.lifecycle_timing_patterns;
      this.contextualPrompts = contextualPromptsData.scenario_based_prompts;
      this.promptTriggers = contextualPromptsData.contextual_prompt_triggers;
      this.loaded = true;
    } catch (error) {
      console.error('Failed to load Knowledge Graph data:', error);
    }
  }

  // Find which semantic cluster a template belongs to
  findSemanticCluster(templateId: string) {
    if (!this.loaded) return null;

    for (const [clusterName, cluster] of Object.entries(this.semanticClusters)) {
      const clusterData = cluster as any;
      if (clusterData.templates?.includes(templateId)) {
        return {
          name: clusterName,
          reasoning: clusterData.reasoning,
          total_templates: clusterData.templates.length,
          related_templates: clusterData.templates.filter((t: string) => t !== templateId)
        };
      }
    }
    return null;
  }

  // Find which micro-cluster a template belongs to
  findMicroCluster(templateId: string) {
    if (!this.loaded) return null;

    for (const [mainCluster, microClusters] of Object.entries(this.microClusters)) {
      for (const [microName, microCluster] of Object.entries(microClusters as any)) {
        const microData = microCluster as any;
        if (microData.templates?.includes(templateId)) {
          return {
            main_cluster: mainCluster,
            micro_cluster: microName,
            micro_theme: microData.micro_theme,
            psychological_focus: microData.psychological_focus,
            related_templates: microData.templates.filter((t: string) => t !== templateId)
          };
        }
      }
    }
    return null;
  }

  // Get weighted connections for a template
  getWeightedConnections(templateId: string): TemplateConnection[] {
    if (!this.loaded) return [];

    const connections = this.weightedConnections[templateId];
    if (!connections) return [];

    const allConnections: TemplateConnection[] = [];

    // Add critical connections
    if (connections.critical_connections) {
      allConnections.push(...connections.critical_connections.map((conn: any) => ({
        ...conn,
        strength_level: 'critical' as const
      })));
    }

    // Add strong connections
    if (connections.strong_connections) {
      allConnections.push(...connections.strong_connections.map((conn: any) => ({
        ...conn,
        strength_level: 'strong' as const
      })));
    }

    // Add medium connections
    if (connections.medium_connections) {
      allConnections.push(...connections.medium_connections.map((conn: any) => ({
        ...conn,
        strength_level: 'medium' as const
      })));
    }

    return allConnections.sort((a, b) => b.strength - a.strength);
  }

  // Get negative connections (conflicts)
  getNegativeConnections(templateId: string): ConflictConnection[] {
    if (!this.loaded) return [];

    const conflicts: ConflictConnection[] = [];

    // Check conflicting priorities
    if (this.negativeConnections.conflicting_priorities) {
      this.negativeConnections.conflicting_priorities.forEach((conflict: any) => {
        if (conflict.template1 === templateId || conflict.template2 === templateId) {
          conflicts.push({
            conflict_type: 'priority',
            conflicting_template: conflict.template1 === templateId ? conflict.template2 : conflict.template1,
            conflict_strength: conflict.conflict_strength,
            reasoning: conflict.reasoning,
            psychological_conflict: conflict.psychological_conflict,
            resolution_strategy: conflict.resolution_strategy
          });
        }
      });
    }

    // Check timing conflicts
    if (this.negativeConnections.timing_conflicts) {
      this.negativeConnections.timing_conflicts.forEach((conflict: any) => {
        if (conflict.template1 === templateId || conflict.template2 === templateId) {
          conflicts.push({
            conflict_type: 'timing',
            conflicting_template: conflict.template1 === templateId ? conflict.template2 : conflict.template1,
            conflict_strength: conflict.conflict_strength,
            reasoning: conflict.reasoning,
            psychological_conflict: conflict.psychological_conflict,
            resolution_strategy: conflict.resolution_strategy
          });
        }
      });
    }

    return conflicts;
  }

  // Get comprehensive template relationships
  getTemplateRelationships(templateId: string): TemplateRelationships {
    const relationships: TemplateRelationships = {
      templateId,
      semantic_cluster: this.findSemanticCluster(templateId),
      micro_cluster: this.findMicroCluster(templateId),
      weighted_connections: this.getWeightedConnections(templateId),
      negative_connections: this.getNegativeConnections(templateId),
      total_relationship_strength: 0
    };

    // Calculate total relationship strength
    if (relationships.weighted_connections.length > 0) {
      relationships.total_relationship_strength = relationships.weighted_connections
        .reduce((sum, conn) => sum + conn.strength, 0) / relationships.weighted_connections.length;
    }

    return relationships;
  }

  // Determine age group for lifecycle patterns
  determineAgeGroup(age: number): string {
    if (age <= 22) return 'teens_18_22';
    if (age <= 30) return 'young_adults_23_30';
    if (age <= 40) return 'adults_30_40';
    if (age <= 55) return 'midlife_40_55';
    if (age <= 65) return 'pre_retirement_55_65';
    return 'retirement_65_plus';
  }

  // Get optimal life sequence for user
  getOptimalLifeSequence(userAge: number, userGoals: string[] = [], completedTemplates: string[] = []): UserRecommendation[] {
    if (!this.loaded) return [];

    const recommendations: UserRecommendation[] = [];

    // Check lifecycle patterns for age-appropriate templates
    const ageGroup = this.determineAgeGroup(userAge);
    const agePatterns = this.lifecyclePatterns.life_stage_priorities?.[ageGroup];

    if (agePatterns) {
      // Primary templates for this age group
      agePatterns.primary?.forEach((templateId: string) => {
        if (!completedTemplates.includes(templateId)) {
          recommendations.push({
            templateId,
            priority: 'high',
            reason: `Primary focus for ${ageGroup}: ${agePatterns.timing_note}`,
            life_stage: ageGroup
          });
        }
      });

      // Secondary templates
      agePatterns.secondary?.forEach((templateId: string) => {
        if (!completedTemplates.includes(templateId)) {
          recommendations.push({
            templateId,
            priority: 'medium',
            reason: `Secondary focus for ${ageGroup}`,
            life_stage: ageGroup
          });
        }
      });
    }

    // Sort by priority and relevance
    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, sequence: 2, medium: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  // Generate comprehensive analysis report
  generateAnalysisReport(templateId: string): AnalysisReport {
    if (!this.loaded) {
      throw new Error('Knowledge Graph not loaded');
    }

    const relationships = this.getTemplateRelationships(templateId);

    return {
      template_id: templateId,
      cluster_membership: {
        semantic: relationships.semantic_cluster,
        micro: relationships.micro_cluster
      },
      connection_strength: {
        total_weighted_connections: relationships.weighted_connections.length,
        average_strength: relationships.total_relationship_strength,
        strongest_connection: relationships.weighted_connections[0] || null,
        critical_connections_count: relationships.weighted_connections.filter(c => c.strength_level === 'critical').length
      },
      conflict_analysis: {
        total_conflicts: relationships.negative_connections.length,
        priority_conflicts: relationships.negative_connections.filter(c => c.conflict_type === 'priority').length,
        timing_conflicts: relationships.negative_connections.filter(c => c.conflict_type === 'timing').length,
        highest_conflict: relationships.negative_connections.sort((a, b) => b.conflict_strength - a.conflict_strength)[0] || null
      },
      recommendations: {
        high_synergy_templates: relationships.weighted_connections
          .filter(c => c.strength >= 80)
          .map(c => c.templateId),
        avoid_simultaneously: relationships.negative_connections
          .filter(c => c.conflict_strength >= 70)
          .map(c => c.conflicting_template),
        optimal_timing: relationships.micro_cluster?.psychological_focus || 'context_dependent'
      }
    };
  }
}

// Export singleton instance
export const knowledgeGraph = new BrowserKnowledgeGraph();

// Utility functions for common use cases
export const getRelatedTemplates = (templateId: string, limit = 5) => {
  const relationships = knowledgeGraph.getTemplateRelationships(templateId);
  return relationships.weighted_connections
    .slice(0, limit)
    .map(conn => ({
      templateId: conn.templateId,
      strength: conn.strength,
      reason: conn.reasoning,
      level: conn.strength_level
    }));
};

export const getConflictingTemplates = (templateIds: string[]) => {
  const conflicts: Array<{
    template1: string;
    template2: string;
    reason: string;
    resolution: string;
  }> = [];

  templateIds.forEach(templateId => {
    const relationships = knowledgeGraph.getTemplateRelationships(templateId);
    relationships.negative_connections.forEach(conflict => {
      if (templateIds.includes(conflict.conflicting_template)) {
        conflicts.push({
          template1: templateId,
          template2: conflict.conflicting_template,
          reason: conflict.reasoning,
          resolution: conflict.resolution_strategy
        });
      }
    });
  });

  return conflicts;
};

export const getPersonalizedRecommendations = (userProfile: {
  age?: number;
  goals?: string[];
  completedTemplates?: string[];
  currentTemplates?: string[];
}) => {
  const { age = 25, goals = [], completedTemplates = [], currentTemplates = [] } = userProfile;

  const ageRecs = knowledgeGraph.getOptimalLifeSequence(age, goals, completedTemplates);

  // Filter out current templates
  return ageRecs.filter(rec => !currentTemplates.includes(rec.templateId));
};

// Article recommendation functions
export const getRelatedArticles = (articleId: string, limit: number = 4): ArticleConnection[] => {
  const articleData = (articleConnectionsData as any)[articleId];
  if (!articleData?.related_articles) return [];

  return articleData.related_articles.slice(0, limit);
};

export const getArticlesForTemplate = (templateId: string, limit: number = 4): ArticleConnection[] => {
  const articles: ArticleConnection[] = [];

  // Find articles that reference this template
  Object.entries(articleConnectionsData as any).forEach(([articleId, data]: [string, any]) => {
    if (data.related_templates) {
      const templateMatch = data.related_templates.find((t: any) => t.id === templateId);
      if (templateMatch) {
        articles.push({
          id: articleId,
          strength: templateMatch.strength,
          reason: templateMatch.reason
        });
      }
    }
  });

  return articles.sort((a, b) => b.strength - a.strength).slice(0, limit);
};

// Prompt recommendation functions
export const getRelatedPrompts = (promptId: string, limit: number = 4): PromptConnection[] => {
  const promptData = (promptConnectionsData as any)[promptId];
  if (!promptData?.related_prompts) return [];

  return promptData.related_prompts.slice(0, limit);
};

export const getPromptsForTemplate = (templateId: string, limit: number = 4): PromptConnection[] => {
  const prompts: PromptConnection[] = [];

  // Find prompts that reference this template
  Object.entries(promptConnectionsData as any).forEach(([promptId, data]: [string, any]) => {
    if (data.related_templates) {
      const templateMatch = data.related_templates.find((t: any) => t.id === templateId);
      if (templateMatch) {
        prompts.push({
          id: promptId,
          strength: templateMatch.strength,
          reason: templateMatch.reason
        });
      }
    }
  });

  return prompts.sort((a, b) => b.strength - a.strength).slice(0, limit);
};

// Cross-content recommendations
export const getCrossRecommendations = (contentType: 'template' | 'article' | 'prompt', contentId: string): CrossConnection[] => {
  const recommendations: CrossConnection[] = [];

  switch (contentType) {
    case 'template':
      // Get related articles for this template
      const relatedArticles = getArticlesForTemplate(contentId, 3);
      relatedArticles.forEach(article => {
        recommendations.push({
          type: 'article',
          id: article.id,
          strength: article.strength,
          reason: article.reason
        });
      });

      // Get related prompts for this template
      const relatedPrompts = getPromptsForTemplate(contentId, 3);
      relatedPrompts.forEach(prompt => {
        recommendations.push({
          type: 'prompt',
          id: prompt.id,
          strength: prompt.strength,
          reason: prompt.reason
        });
      });
      break;

    case 'article':
      // Get related templates and prompts for this article
      const articleData = (articleConnectionsData as any)[contentId];
      if (articleData?.related_templates) {
        articleData.related_templates.slice(0, 3).forEach((template: any) => {
          recommendations.push({
            type: 'template',
            id: template.id,
            strength: template.strength,
            reason: template.reason
          });
        });
      }
      if (articleData?.related_prompts) {
        articleData.related_prompts.slice(0, 3).forEach((prompt: any) => {
          recommendations.push({
            type: 'prompt',
            id: prompt.id,
            strength: prompt.strength,
            reason: prompt.reason
          });
        });
      }
      break;

    case 'prompt':
      // Get related templates and articles for this prompt
      const promptData = (promptConnectionsData as any)[contentId];
      if (promptData?.related_templates) {
        promptData.related_templates.slice(0, 3).forEach((template: any) => {
          recommendations.push({
            type: 'template',
            id: template.id,
            strength: template.strength,
            reason: template.reason
          });
        });
      }
      if (promptData?.related_articles) {
        promptData.related_articles.slice(0, 3).forEach((article: any) => {
          recommendations.push({
            type: 'article',
            id: article.id,
            strength: article.strength,
            reason: article.reason
          });
        });
      }
      break;
  }

  return recommendations.sort((a, b) => b.strength - a.strength);
};