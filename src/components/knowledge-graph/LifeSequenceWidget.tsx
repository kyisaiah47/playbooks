"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph";
import {
  Target,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  PlayCircle,
  Calendar,
  User,
  Brain,
  Star,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface LifeSequenceWidgetProps {
  userProfile: {
    age?: number;
    goals?: string[];
    completedTemplates?: string[];
    currentTemplates?: string[];
  };
  variant?: 'full' | 'compact' | 'minimal';
  showNextSteps?: boolean;
  showProgress?: boolean;
  showRecommendations?: boolean;
  maxNextSteps?: number;
  className?: string;
  onTemplateSelect?: (templateId: string) => void;
  onViewAllSequences?: () => void;
}

interface LifeStageData {
  name: string;
  ageRange: string;
  description: string;
  progress: number;
  status: 'completed' | 'current' | 'upcoming';
  templates: Array<{
    templateId: string;
    name: string;
    status: 'completed' | 'active' | 'recommended';
    priority: 'high' | 'medium' | 'low';
    timing?: string;
  }>;
}

function getLifeStageFromAge(age: number): {
  currentStage: string;
  nextStage: string;
  progressInStage: number;
} {
  const stages = [
    { name: 'Education & Foundation', min: 18, max: 25 },
    { name: 'Career Building', min: 23, max: 35 },
    { name: 'Family & Stability', min: 30, max: 45 },
    { name: 'Peak Achievement', min: 40, max: 55 },
    { name: 'Wisdom & Legacy', min: 55, max: 100 }
  ];

  const currentStageData = stages.find(stage => age >= stage.min && age <= stage.max);
  const currentStageIndex = stages.findIndex(stage => age >= stage.min && age <= stage.max);
  const nextStageData = stages[currentStageIndex + 1];

  if (!currentStageData) {
    return {
      currentStage: stages[0].name,
      nextStage: stages[1].name,
      progressInStage: 0
    };
  }

  const progressInStage = ((age - currentStageData.min) / (currentStageData.max - currentStageData.min)) * 100;

  return {
    currentStage: currentStageData.name,
    nextStage: nextStageData?.name || 'Life Mastery',
    progressInStage: Math.min(100, Math.max(0, progressInStage))
  };
}

function SequenceProgressBar({
  label,
  progress,
  status,
  description
}: {
  label: string;
  progress: number;
  status: 'completed' | 'current' | 'upcoming';
  description?: string;
}) {
  const statusConfig = {
    completed: {
      badge: 'bg-green-100 text-green-700 border-green-300',
      progress: 'bg-green-500',
      icon: CheckCircle2
    },
    current: {
      badge: 'bg-blue-100 text-blue-700 border-blue-300',
      progress: 'bg-blue-500',
      icon: PlayCircle
    },
    upcoming: {
      badge: 'bg-gray-100 text-gray-600 border-gray-300',
      progress: 'bg-gray-300',
      icon: Clock
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span className="font-medium text-sm">{label}</span>
        </div>
        <Badge variant="outline" className={config.badge}>
          {status === 'completed' ? 'Complete' :
           status === 'current' ? 'In Progress' : 'Upcoming'}
        </Badge>
      </div>
      <Progress
        value={progress}
        className="h-2"
        // className={`h-2 ${config.progress}`}
      />
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function NextStepsSection({
  nextSteps,
  onTemplateSelect,
  maxSteps
}: {
  nextSteps: Array<{
    templateId: string;
    priority: 'high' | 'medium' | 'sequence';
    reason: string;
    lifeStage?: string;
  }>;
  onTemplateSelect?: (templateId: string) => void;
  maxSteps: number;
}) {
  const priorityConfig = {
    high: {
      color: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: AlertCircle
    },
    sequence: {
      color: 'text-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: TrendingUp
    },
    medium: {
      color: 'text-yellow-700',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: Clock
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-sm flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-blue-500" />
        Recommended Next Steps
      </h4>
      {nextSteps.slice(0, maxSteps).map((step, i) => {
        const config = priorityConfig[step.priority as keyof typeof priorityConfig] || priorityConfig.medium;
        const Icon = config.icon;
        const templateName = step.templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        return (
          <div
            key={i}
            className={cn(
              "p-3 rounded-lg border cursor-pointer transition-colors hover:shadow-sm",
              config.bg,
              config.border,
              onTemplateSelect && "hover:bg-opacity-70"
            )}
            onClick={() => onTemplateSelect?.(step.templateId)}
          >
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border flex items-center justify-center text-xs font-medium">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={cn("w-3 h-3", config.color)} />
                  <span className={cn("text-sm font-medium", config.color)}>
                    {templateName}
                  </span>
                  <Badge variant="outline" size="sm">
                    {step.priority} priority
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {step.reason}
                </p>
                {step.lifeStage && (
                  <div className="flex items-center gap-1 mt-1">
                    <User className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground capitalize">
                      {step.lifeStage.replace('_', ' ')}
                    </span>
                  </div>
                )}
              </div>
              {onTemplateSelect && (
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LifeStageOverview({
  userProfile
}: {
  userProfile: LifeSequenceWidgetProps['userProfile'];
}) {
  const age = userProfile.age || 25;
  const { currentStage, nextStage, progressInStage } = getLifeStageFromAge(age);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium">{currentStage}</h3>
          <p className="text-sm text-muted-foreground">
            Age {age} • {Math.round(progressInStage)}% through this stage
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Stage Progress</span>
          <span className="font-medium">{Math.round(progressInStage)}%</span>
        </div>
        <Progress value={progressInStage} className="h-2" />
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ArrowRight className="w-3 h-3" />
        <span>Next stage: {nextStage}</span>
      </div>
    </div>
  );
}

// Full variant - comprehensive sequence widget
function FullLifeSequenceWidget({
  userProfile,
  showNextSteps,
  showProgress,
  showRecommendations,
  maxNextSteps,
  onTemplateSelect,
  onViewAllSequences
}: Omit<LifeSequenceWidgetProps, 'variant' | 'className'>) {
  const { getPersonalizedRecommendations, getNextInSequence } = useKnowledgeGraph();

  const recommendations = React.useMemo(() => {
    return getPersonalizedRecommendations(userProfile);
  }, [userProfile, getPersonalizedRecommendations]);

  const nextSteps = React.useMemo(() => {
    return getNextInSequence(userProfile.completedTemplates || [], userProfile);
  }, [userProfile, getNextInSequence]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-green-500" />
          Your Life Sequence
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Life Stage Overview */}
        <LifeStageOverview userProfile={userProfile} />

        <Separator />

        {/* Progress Tracking */}
        {showProgress && (
          <>
            <div>
              <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                Life Areas Progress
              </h4>
              <div className="space-y-4">
                <SequenceProgressBar
                  label="Career Foundation"
                  progress={85}
                  status="current"
                  description="Building professional skills and network"
                />
                <SequenceProgressBar
                  label="Financial Independence"
                  progress={60}
                  status="current"
                  description="Establishing savings and investment habits"
                />
                <SequenceProgressBar
                  label="Relationship & Family"
                  progress={30}
                  status="upcoming"
                  description="Future focus area for your life stage"
                />
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Next Steps */}
        {showNextSteps && nextSteps.length > 0 && (
          <NextStepsSection
            nextSteps={nextSteps}
            onTemplateSelect={onTemplateSelect}
            maxSteps={maxNextSteps || 4}
          />
        )}

        {/* Actions */}
        <div className="flex gap-2">
          {onViewAllSequences && (
            <Button variant="outline" size="sm" onClick={onViewAllSequences}>
              <Brain className="w-4 h-4 mr-1" />
              View All Sequences
            </Button>
          )}
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-1" />
            Plan Timeline
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Compact variant - smaller version for sidebars
function CompactLifeSequenceWidget({
  userProfile,
  showNextSteps,
  maxNextSteps,
  onTemplateSelect
}: Omit<LifeSequenceWidgetProps, 'variant' | 'className'>) {
  const { getNextInSequence } = useKnowledgeGraph();
  const nextSteps = getNextInSequence(userProfile.completedTemplates || [], userProfile);

  return (
    <Card className="space-y-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Target className="w-4 h-4 text-green-500" />
          Life Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Progress value={65} className="h-1" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Overall Progress</span>
            <span>65%</span>
          </div>
        </div>

        {showNextSteps && nextSteps.length > 0 && (
          <div className="space-y-2">
            <h5 className="text-xs font-medium text-muted-foreground">Next Steps</h5>
            {nextSteps.slice(0, maxNextSteps || 2).map((step, i) => (
              <div
                key={i}
                className="text-xs p-2 rounded bg-muted/50 cursor-pointer hover:bg-muted"
                onClick={() => onTemplateSelect?.(step.templateId)}
              >
                <div className="font-medium">
                  {step.templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Minimal variant - just the progress indicator
function MinimalLifeSequenceWidget({
  userProfile
}: Omit<LifeSequenceWidgetProps, 'variant' | 'className'>) {
  const age = userProfile.age || 25;
  const { currentStage, progressInStage } = getLifeStageFromAge(age);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{currentStage}</span>
        <span className="text-muted-foreground">{Math.round(progressInStage)}%</span>
      </div>
      <Progress value={progressInStage} className="h-1" />
    </div>
  );
}

export function LifeSequenceWidget({
  userProfile,
  variant = 'full',
  showNextSteps = true,
  showProgress = true,
  showRecommendations = true,
  maxNextSteps = 4,
  className,
  onTemplateSelect,
  onViewAllSequences
}: LifeSequenceWidgetProps) {
  const props = {
    userProfile,
    showNextSteps,
    showProgress,
    showRecommendations,
    maxNextSteps,
    onTemplateSelect,
    onViewAllSequences
  };

  switch (variant) {
    case 'compact':
      return (
        <div className={className}>
          <CompactLifeSequenceWidget {...props} />
        </div>
      );
    case 'minimal':
      return (
        <div className={className}>
          <MinimalLifeSequenceWidget {...props} />
        </div>
      );
    default:
      return (
        <div className={className}>
          <FullLifeSequenceWidget {...props} />
        </div>
      );
  }
}

// Export sub-components for advanced use cases
export {
  SequenceProgressBar,
  NextStepsSection,
  LifeStageOverview
};