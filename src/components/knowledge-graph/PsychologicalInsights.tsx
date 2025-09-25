"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph";
import {
  Brain,
  Heart,
  Target,
  AlertTriangle,
  CheckCircle2,
  Clock,
  TrendingUp,
  Lightbulb,
  User,
  Shield,
  Zap,
  Eye,
  Info,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface PsychologicalInsightsProps {
  templateId: string;
  userProfile?: {
    age?: number;
    goals?: string[];
    completedTemplates?: string[];
    currentTemplates?: string[];
    lifeStage?: string;
    stressLevel?: 'low' | 'medium' | 'high';
  };
  variant?: 'full' | 'compact' | 'summary';
  showReadiness?: boolean;
  showPatterns?: boolean;
  showRecommendations?: boolean;
  className?: string;
  onInsightAction?: (action: string, data: any) => void;
}

interface PsychologicalPattern {
  name: string;
  description: string;
  strength: number;
  type: 'motivational' | 'behavioral' | 'cognitive' | 'emotional';
  insights: string[];
}

interface ReadinessIndicator {
  factor: string;
  score: number;
  reason: string;
  improvement?: string;
  status: 'ready' | 'developing' | 'needs_work';
}

function ReadinessScore({ readiness }: { readiness: ReadinessIndicator[] }) {
  const overallScore = Math.round(
    readiness.reduce((sum, indicator) => sum + indicator.score, 0) / readiness.length
  );

  const scoreColor = overallScore >= 80 ? 'text-green-600' :
                    overallScore >= 60 ? 'text-yellow-600' : 'text-red-600';

  const scoreBg = overallScore >= 80 ? 'bg-green-50' :
                  overallScore >= 60 ? 'bg-yellow-50' : 'bg-red-50';

  return (
    <div className="space-y-4">
      <div className={cn("p-4 rounded-lg border", scoreBg)}>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-sm">Psychological Readiness</h4>
          <div className={cn("text-2xl font-bold", scoreColor)}>
            {overallScore}%
          </div>
        </div>
        <Progress value={overallScore} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {overallScore >= 80 ? 'High readiness - optimal timing to begin' :
           overallScore >= 60 ? 'Moderate readiness - consider preparation first' :
           'Lower readiness - focus on foundational work first'}
        </p>
      </div>

      <div className="space-y-3">
        {readiness.map((indicator, i) => {
          const statusConfig = {
            ready: { color: 'text-green-700', bg: 'bg-green-100', icon: CheckCircle2 },
            developing: { color: 'text-yellow-700', bg: 'bg-yellow-100', icon: Clock },
            needs_work: { color: 'text-red-700', bg: 'bg-red-100', icon: AlertTriangle }
          };

          const config = statusConfig[indicator.status];
          const Icon = config.icon;

          return (
            <div key={i} className="flex items-start gap-3">
              <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", config.bg)}>
                <Icon className={cn("w-3 h-3", config.color)} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{indicator.factor}</span>
                  <span className="text-xs text-muted-foreground">{indicator.score}%</span>
                </div>
                <p className="text-xs text-muted-foreground">{indicator.reason}</p>
                {indicator.improvement && (
                  <p className="text-xs text-blue-600 mt-1">💡 {indicator.improvement}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PsychologicalPatternsDisplay({ patterns }: { patterns: PsychologicalPattern[] }) {
  const typeConfig = {
    motivational: { color: 'text-green-600', bg: 'bg-green-50', icon: Target },
    behavioral: { color: 'text-blue-600', bg: 'bg-blue-50', icon: User },
    cognitive: { color: 'text-purple-600', bg: 'bg-purple-50', icon: Brain },
    emotional: { color: 'text-pink-600', bg: 'bg-pink-50', icon: Heart }
  };

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-sm flex items-center gap-2">
        <Eye className="w-4 h-4 text-purple-500" />
        Psychological Patterns
      </h4>
      {patterns.map((pattern, i) => {
        const config = typeConfig[pattern.type];
        const Icon = config.icon;

        return (
          <div key={i} className={cn("p-3 rounded-lg border", config.bg)}>
            <div className="flex items-start gap-3 mb-2">
              <Icon className={cn("w-4 h-4 mt-0.5", config.color)} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className={cn("font-medium text-sm", config.color)}>
                    {pattern.name}
                  </h5>
                  <Badge variant="outline" className="text-xs">
                    {pattern.strength}% match
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {pattern.description}
                </p>
              </div>
            </div>

            {pattern.insights.length > 0 && (
              <div className="space-y-1">
                {pattern.insights.map((insight, j) => (
                  <div key={j} className="flex items-start gap-2 text-xs">
                    <Lightbulb className="w-3 h-3 text-yellow-500 mt-0.5" />
                    <span className="text-muted-foreground">{insight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function LifeStageAlignment({ templateId, userProfile }: {
  templateId: string;
  userProfile: PsychologicalInsightsProps['userProfile']
}) {
  const age = userProfile?.age || 25;
  const lifeStage = age <= 25 ? 'Foundation Building' :
                   age <= 35 ? 'Career Development' :
                   age <= 45 ? 'Peak Achievement' :
                   age <= 60 ? 'Wisdom & Legacy' : 'Life Mastery';

  const templateOptimalAge = getTemplateOptimalAge(templateId);
  const alignment = calculateStageAlignment(age, templateOptimalAge);

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-sm flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-blue-500" />
        Life Stage Alignment
      </h4>

      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <div>
          <div className="font-medium text-sm">Current Stage</div>
          <div className="text-xs text-muted-foreground">{lifeStage} (Age {age})</div>
        </div>
        <div className="text-right">
          <div className={cn("font-medium text-sm",
            alignment >= 80 ? 'text-green-600' :
            alignment >= 60 ? 'text-yellow-600' : 'text-red-600'
          )}>
            {alignment}% match
          </div>
          <div className="text-xs text-muted-foreground">
            {alignment >= 80 ? 'Optimal timing' :
             alignment >= 60 ? 'Good timing' : 'Consider timing'}
          </div>
        </div>
      </div>

      {alignment < 60 && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <div className="text-sm">
              This template is typically most effective during different life stages.
              Consider whether this is the right time or if you should prepare for optimal timing.
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

// Full variant - comprehensive psychological analysis
function FullPsychologicalInsights({
  templateId,
  userProfile,
  showReadiness,
  showPatterns,
  showRecommendations,
  onInsightAction
}: Omit<PsychologicalInsightsProps, 'variant' | 'className'>) {
  const { getPsychologicalProfile, getReadinessIndicators } = useKnowledgeGraph();

  const insights = React.useMemo(() => {
    return getPsychologicalProfile(templateId, userProfile);
  }, [templateId, userProfile, getPsychologicalProfile]);

  const readiness = React.useMemo(() => {
    return getReadinessIndicators(templateId, userProfile || {});
  }, [templateId, userProfile, getReadinessIndicators]);

  const patterns = insights?.patterns || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          Psychological Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Life Stage Alignment */}
        <LifeStageAlignment templateId={templateId} userProfile={userProfile} />

        <Separator />

        {/* Readiness Assessment */}
        {showReadiness && readiness.length > 0 && (
          <>
            <ReadinessScore readiness={readiness} />
            <Separator />
          </>
        )}

        {/* Psychological Patterns */}
        {showPatterns && patterns.length > 0 && (
          <>
            <PsychologicalPatternsDisplay patterns={patterns} />
            <Separator />
          </>
        )}

        {/* Smart Recommendations */}
        {showRecommendations && insights?.recommendations && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              Personalized Recommendations
            </h4>
            {insights.recommendations.map((rec: any, i: number) => (
              <div key={i} className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <div className="font-medium text-sm text-blue-800 mb-1">
                  {rec.title}
                </div>
                <p className="text-xs text-blue-700">{rec.description}</p>
                {rec.action && onInsightAction && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onInsightAction(rec.action, rec.data)}
                    className="mt-2 text-blue-700 border-blue-300"
                  >
                    {rec.actionLabel || 'Take Action'}
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Compact variant - key insights only
function CompactPsychologicalInsights({
  templateId,
  userProfile
}: Omit<PsychologicalInsightsProps, 'variant' | 'className'>) {
  const { getReadinessIndicators } = useKnowledgeGraph();
  const readiness = getReadinessIndicators(templateId, userProfile || {});
  const overallScore = Math.round(
    readiness.reduce((sum, indicator) => sum + indicator.score, 0) / readiness.length
  );

  return (
    <Card className="space-y-3">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Brain className="w-4 h-4 text-purple-500" />
          Readiness Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Progress value={overallScore} className="flex-1 mr-3" />
          <div className={cn("text-lg font-bold",
            overallScore >= 80 ? 'text-green-600' :
            overallScore >= 60 ? 'text-yellow-600' : 'text-red-600'
          )}>
            {overallScore}%
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {overallScore >= 80 ? 'Ready to begin' :
           overallScore >= 60 ? 'Consider preparation' :
           'Build foundation first'}
        </p>
      </CardContent>
    </Card>
  );
}

// Summary variant - quick overview
function SummaryPsychologicalInsights({
  templateId,
  userProfile
}: Omit<PsychologicalInsightsProps, 'variant' | 'className'>) {
  const age = userProfile?.age || 25;
  const alignment = calculateStageAlignment(age, getTemplateOptimalAge(templateId));

  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
      <div className="flex items-center gap-2">
        <Brain className="w-4 h-4 text-purple-500" />
        <span className="text-sm font-medium">Timing Analysis</span>
      </div>
      <Badge variant={alignment >= 70 ? "default" : "secondary"}>
        {alignment >= 70 ? 'Good fit' : 'Consider timing'}
      </Badge>
    </div>
  );
}

export function PsychologicalInsights({
  templateId,
  userProfile,
  variant = 'full',
  showReadiness = true,
  showPatterns = true,
  showRecommendations = true,
  className,
  onInsightAction
}: PsychologicalInsightsProps) {
  const props = {
    templateId,
    userProfile,
    showReadiness,
    showPatterns,
    showRecommendations,
    onInsightAction
  };

  switch (variant) {
    case 'compact':
      return (
        <div className={className}>
          <CompactPsychologicalInsights {...props} />
        </div>
      );
    case 'summary':
      return (
        <div className={className}>
          <SummaryPsychologicalInsights {...props} />
        </div>
      );
    default:
      return (
        <div className={className}>
          <FullPsychologicalInsights {...props} />
        </div>
      );
  }
}

// Helper functions
function getTemplateOptimalAge(templateId: string): { min: number; max: number } {
  const ageRanges: Record<string, { min: number; max: number }> = {
    'college-planning': { min: 16, max: 18 },
    'job-search': { min: 20, max: 35 },
    'wedding-planning': { min: 22, max: 35 },
    'home-buying': { min: 25, max: 45 },
    'baby-planning': { min: 25, max: 38 },
    'career-change': { min: 28, max: 50 },
    'business-launch': { min: 25, max: 45 },
    'retirement-planning': { min: 35, max: 65 },
    'divorce-coordination': { min: 25, max: 65 }
  };

  return ageRanges[templateId] || { min: 18, max: 65 };
}

function calculateStageAlignment(currentAge: number, optimalRange: { min: number; max: number }): number {
  if (currentAge >= optimalRange.min && currentAge <= optimalRange.max) {
    return 100;
  }

  const distance = currentAge < optimalRange.min ?
    optimalRange.min - currentAge :
    currentAge - optimalRange.max;

  return Math.max(0, Math.min(100, 100 - (distance * 10)));
}

// Export for advanced use cases
export {
  ReadinessScore,
  PsychologicalPatternsDisplay,
  LifeStageAlignment
};