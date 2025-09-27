// MASTER KNOWLEDGE GRAPH SYSTEM
// Integrates all knowledge graph components into a comprehensive system

const fs = require('fs');

class MasterKnowledgeGraph {
  constructor() {
    this.semanticClusters = null;
    this.microClusters = null;
    this.weightedConnections = null;
    this.lifeSequences = null;
    this.contextualPrompts = null;
    this.loaded = false;
  }

  // Load all knowledge graph components
  load() {
    try {
      console.log('🧠 Loading Master Knowledge Graph...');

      // Get the directory of this script
      const path = require('path');
      const scriptDir = __dirname;

      // Load semantic clusters
      const comprehensiveConnections = JSON.parse(fs.readFileSync(path.join(scriptDir, 'template-connections.json'), 'utf8'));
      this.semanticClusters = comprehensiveConnections.semantic_clusters;

      // Load micro-clusters
      const microClusters = JSON.parse(fs.readFileSync(path.join(scriptDir, 'micro-clusters.json'), 'utf8'));
      this.microClusters = microClusters.micro_clusters;

      // Load weighted connections
      const advancedConnections = JSON.parse(fs.readFileSync(path.join(scriptDir, 'advanced-connections.json'), 'utf8'));
      this.weightedConnections = advancedConnections.weighted_cross_connections;
      this.negativeConnections = advancedConnections.negative_connections;

      // Load life sequences
      const lifeSequences = JSON.parse(fs.readFileSync(path.join(scriptDir, 'life-sequences-detailed.json'), 'utf8'));
      this.lifeSequences = lifeSequences.comprehensive_life_sequences;
      this.lifecyclePatterns = lifeSequences.lifecycle_timing_patterns;

      // Load contextual prompts
      const contextualPrompts = JSON.parse(fs.readFileSync(path.join(scriptDir, 'context-specific-prompts.json'), 'utf8'));
      this.contextualPrompts = contextualPrompts.scenario_based_prompts;
      this.promptTriggers = contextualPrompts.contextual_prompt_triggers;

      this.loaded = true;
      console.log('✅ Master Knowledge Graph loaded successfully');
    } catch (error) {
      console.error('❌ Failed to load Master Knowledge Graph:', error);
      throw error;
    }
  }

  // Get comprehensive template relationships
  getTemplateRelationships(templateId, options = {}) {
    if (!this.loaded) this.load();

    const {
      includeWeighted = true,
      includeMicroClusters = true,
      includeLifeSequences = true,
      maxResults = 10
    } = options;

    const relationships = {
      templateId,
      semantic_cluster: this.findSemanticCluster(templateId),
      micro_cluster: includeMicroClusters ? this.findMicroCluster(templateId) : null,
      weighted_connections: includeWeighted ? this.getWeightedConnections(templateId) : [],
      life_sequences: includeLifeSequences ? this.getLifeSequenceConnections(templateId) : [],
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

  // Find which semantic cluster a template belongs to
  findSemanticCluster(templateId) {
    for (const [clusterName, cluster] of Object.entries(this.semanticClusters)) {
      if (cluster.templates.includes(templateId)) {
        return {
          name: clusterName,
          reasoning: cluster.reasoning,
          total_templates: cluster.templates.length,
          related_templates: cluster.templates.filter(t => t !== templateId)
        };
      }
    }
    return null;
  }

  // Find which micro-cluster a template belongs to
  findMicroCluster(templateId) {
    for (const [mainCluster, microClusters] of Object.entries(this.microClusters)) {
      for (const [microName, microCluster] of Object.entries(microClusters)) {
        if (microCluster.templates && microCluster.templates.includes(templateId)) {
          return {
            main_cluster: mainCluster,
            micro_cluster: microName,
            micro_theme: microCluster.micro_theme,
            psychological_focus: microCluster.psychological_focus,
            related_templates: microCluster.templates.filter(t => t !== templateId)
          };
        }
      }
    }
    return null;
  }

  // Get weighted connections for a template
  getWeightedConnections(templateId) {
    const connections = this.weightedConnections[templateId];
    if (!connections) return [];

    const allConnections = [];

    // Add critical connections
    if (connections.critical_connections) {
      allConnections.push(...connections.critical_connections.map(conn => ({
        ...conn,
        strength_level: 'critical'
      })));
    }

    // Add strong connections
    if (connections.strong_connections) {
      allConnections.push(...connections.strong_connections.map(conn => ({
        ...conn,
        strength_level: 'strong'
      })));
    }

    // Add medium connections
    if (connections.medium_connections) {
      allConnections.push(...connections.medium_connections.map(conn => ({
        ...conn,
        strength_level: 'medium'
      })));
    }

    return allConnections.sort((a, b) => b.strength - a.strength);
  }

  // Get life sequence connections
  getLifeSequenceConnections(templateId) {
    const sequences = [];

    for (const [sequenceName, sequence] of Object.entries(this.lifeSequences)) {
      const templateIndex = sequence.sequence.findIndex(step => step.templateId === templateId);
      if (templateIndex !== -1) {
        const currentStep = sequence.sequence[templateIndex];
        const previousStep = templateIndex > 0 ? sequence.sequence[templateIndex - 1] : null;
        const nextStep = templateIndex < sequence.sequence.length - 1 ? sequence.sequence[templateIndex + 1] : null;

        sequences.push({
          sequence_name: sequenceName,
          sequence_reasoning: sequence.sequence_reasoning,
          current_step: currentStep,
          previous_step: previousStep,
          next_step: nextStep,
          position_in_sequence: `${templateIndex + 1}/${sequence.sequence.length}`
        });
      }
    }

    return sequences;
  }

  // Get negative connections (conflicts)
  getNegativeConnections(templateId) {
    const conflicts = [];

    // Check conflicting priorities
    if (this.negativeConnections.conflicting_priorities) {
      this.negativeConnections.conflicting_priorities.forEach(conflict => {
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
      this.negativeConnections.timing_conflicts.forEach(conflict => {
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

  // Get contextual prompts based on user scenario
  getContextualPrompts(activeTemplates, userScenario = null, userContext = {}) {
    if (!this.loaded) this.load();

    const prompts = [];

    // Add scenario-based prompts if scenario specified
    if (userScenario && this.contextualPrompts[userScenario]) {
      const scenarioPrompts = this.contextualPrompts[userScenario];
      for (const [scenarioName, scenario] of Object.entries(scenarioPrompts)) {
        const hasApplicableTemplates = scenario.applicable_templates.some(t => activeTemplates.includes(t));
        if (hasApplicableTemplates) {
          prompts.push(...scenario.context_prompts.map(prompt => ({
            prompt,
            source: `scenario:${userScenario}:${scenarioName}`,
            psychological_considerations: scenario.psychological_considerations,
            timing_factors: scenario.timing_factors
          })));
        }
      }
    }

    // Add trigger-based prompts
    for (const [triggerName, trigger] of Object.entries(this.promptTriggers)) {
      if (this.checkTriggerConditions(trigger.triggers, userContext)) {
        prompts.push(...trigger.applicable_prompts.map(prompt => ({
          prompt,
          source: `trigger:${triggerName}`,
          trigger_reason: trigger.triggers
        })));
      }
    }

    return prompts;
  }

  // Check if trigger conditions are met
  checkTriggerConditions(triggers, userContext) {
    // This would be implemented based on actual user data
    // For now, return false as we don't have user context
    return false;
  }

  // Get optimal life sequence for user
  getOptimalLifeSequence(userAge, userGoals = [], completedTemplates = []) {
    if (!this.loaded) this.load();

    const recommendations = [];

    // Check lifecycle patterns for age-appropriate templates
    const ageGroup = this.determineAgeGroup(userAge);
    const agePatterns = this.lifecyclePatterns.life_stage_priorities[ageGroup];

    if (agePatterns) {
      // Primary templates for this age group
      agePatterns.primary.forEach(templateId => {
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
      agePatterns.secondary.forEach(templateId => {
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

    // Check for sequence opportunities
    for (const [sequenceName, sequence] of Object.entries(this.lifeSequences)) {
      const userProgress = this.assessSequenceProgress(sequence, completedTemplates);
      if (userProgress.next_step) {
        recommendations.push({
          templateId: userProgress.next_step.templateId,
          priority: 'sequence',
          reason: `Next step in ${sequenceName} sequence`,
          sequence_context: userProgress
        });
      }
    }

    // Sort by priority and relevance
    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, sequence: 2, medium: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  // Determine age group for lifecycle patterns
  determineAgeGroup(age) {
    if (age <= 22) return 'teens_18_22';
    if (age <= 30) return 'young_adults_23_30';
    if (age <= 40) return 'adults_30_40';
    if (age <= 55) return 'midlife_40_55';
    if (age <= 65) return 'pre_retirement_55_65';
    return 'retirement_65_plus';
  }

  // Assess progress in a life sequence
  assessSequenceProgress(sequence, completedTemplates) {
    let lastCompletedIndex = -1;

    sequence.sequence.forEach((step, index) => {
      if (completedTemplates.includes(step.templateId)) {
        lastCompletedIndex = index;
      }
    });

    const nextStepIndex = lastCompletedIndex + 1;
    const nextStep = nextStepIndex < sequence.sequence.length ? sequence.sequence[nextStepIndex] : null;

    return {
      sequence_name: sequence.sequence_reasoning,
      completed_steps: lastCompletedIndex + 1,
      total_steps: sequence.sequence.length,
      progress_percentage: ((lastCompletedIndex + 1) / sequence.sequence.length * 100).toFixed(1),
      next_step: nextStep
    };
  }

  // Generate comprehensive analysis report
  generateAnalysisReport(templateId) {
    if (!this.loaded) this.load();

    const relationships = this.getTemplateRelationships(templateId);

    return {
      template_id: templateId,
      analysis_timestamp: new Date().toISOString(),

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

      life_journey_context: {
        sequences_involved: relationships.life_sequences.length,
        typical_life_stage: relationships.life_sequences[0]?.current_step?.typical_age || 'varies',
        sequence_positions: relationships.life_sequences.map(s => s.position_in_sequence)
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
        optimal_timing: relationships.life_sequences[0]?.current_step?.typical_age || 'context_dependent'
      }
    };
  }

  // Export complete knowledge graph data
  exportCompleteGraph() {
    if (!this.loaded) this.load();

    return {
      export_timestamp: new Date().toISOString(),
      graph_version: '1.0.0',
      total_templates: Object.values(this.semanticClusters).reduce((sum, cluster) => sum + cluster.templates.length, 0),

      components: {
        semantic_clusters: Object.keys(this.semanticClusters).length,
        micro_clusters: Object.values(this.microClusters).reduce((sum, cluster) => sum + Object.keys(cluster).length, 0),
        weighted_connections: Object.keys(this.weightedConnections).length,
        life_sequences: Object.keys(this.lifeSequences).length,
        contextual_scenarios: Object.keys(this.contextualPrompts).length
      },

      data: {
        semantic_clusters: this.semanticClusters,
        micro_clusters: this.microClusters,
        weighted_connections: this.weightedConnections,
        negative_connections: this.negativeConnections,
        life_sequences: this.lifeSequences,
        lifecycle_patterns: this.lifecyclePatterns,
        contextual_prompts: this.contextualPrompts,
        prompt_triggers: this.promptTriggers
      }
    };
  }
}

// Export singleton instance
const masterKnowledgeGraph = new MasterKnowledgeGraph();

module.exports = {
  masterKnowledgeGraph,
  MasterKnowledgeGraph
};

// Demo usage if run directly
if (require.main === module) {
  console.log('🧠 MASTER KNOWLEDGE GRAPH DEMO\\n');

  const graph = masterKnowledgeGraph;

  // Demo: Analyze home-buying
  console.log('📊 ANALYZING: home-buying\\n');
  const analysis = graph.generateAnalysisReport('home-buying');
  console.log('Cluster Membership:', analysis.cluster_membership.semantic?.name);
  console.log('Micro-Cluster:', analysis.cluster_membership.micro?.micro_cluster);
  console.log('Connection Strength:', analysis.connection_strength.average_strength);
  console.log('Life Sequences:', analysis.life_journey_context.sequences_involved);
  console.log('Conflicts:', analysis.conflict_analysis.total_conflicts);

  // Demo: Get relationships
  console.log('\\n🔗 RELATIONSHIPS:\\n');
  const relationships = graph.getTemplateRelationships('home-buying');
  console.log('Semantic Cluster:', relationships.semantic_cluster?.name);
  console.log('Weighted Connections:', relationships.weighted_connections.length);
  relationships.weighted_connections.slice(0, 3).forEach(conn => {
    console.log(`   → ${conn.templateId} (${conn.strength_level}, strength: ${conn.strength})`);
  });

  console.log('\\n✅ Master Knowledge Graph Demo Complete');
}