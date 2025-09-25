"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph";
import {
  Lightbulb,
  MessageCircle,
  AlertTriangle,
  Zap,
  Target,
  Clock,
  Heart,
  DollarSign,
  Home,
  Baby,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  X,
  Brain,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContextualPromptsProps {
  activeTemplates: string[];
  userProfile?: {
    age?: number;
    goals?: string[];
    completedTemplates?: string[];
    stressLevel?: 'low' | 'medium' | 'high';
    timeframe?: 'immediate' | 'short_term' | 'long_term';
  };
  variant?: 'full' | 'compact' | 'inline';
  maxPrompts?: number;
  showConflicts?: boolean;
  showSynergies?: boolean;
  showTimingPrompts?: boolean;
  className?: string;
  onPromptAction?: (action: string, promptId: string, data?: any) => void;
  onPromptDismiss?: (promptId: string) => void;
}

interface ContextualPrompt {
  id: string;
  type: 'conflict' | 'synergy' | 'timing' | 'decision' | 'optimization';
  title: string;
  description: string;
  templates: string[];
  urgency: 'high' | 'medium' | 'low';
  category: string;
  actions: Array<{
    label: string;
    action: string;
    data?: any;
    variant?: 'default' | 'outline' | 'ghost';
  }>;
  insights?: string[];
  dismissable?: boolean;
}

function getTemplateIcon(templateId: string) {
  const iconMap: Record<string, any> = {
    'wedding-planning': Heart,
    'home-buying': Home,
    'baby-planning': Baby,
    'business-launch': Briefcase,
    'personal-finance': DollarSign,
    'job-search': Briefcase
  };
  return iconMap[templateId] || Target;
}

function PromptCard({ prompt, onAction, onDismiss }: {
  prompt: ContextualPrompt;
  onAction?: (action: string, promptId: string, data?: any) => void;
  onDismiss?: (promptId: string) => void;
}) {
  const typeConfig = {
    conflict: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: AlertTriangle,
      color: 'text-red-600',
      badgeColor: 'bg-red-100 text-red-700'
    },
    synergy: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: Zap,
      color: 'text-green-600',
      badgeColor: 'bg-green-100 text-green-700'
    },
    timing: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: Clock,
      color: 'text-yellow-600',
      badgeColor: 'bg-yellow-100 text-yellow-700'
    },
    decision: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: MessageCircle,
      color: 'text-blue-600',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    optimization: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: Brain,
      color: 'text-purple-600',
      badgeColor: 'bg-purple-100 text-purple-700'
    }
  };

  const config = typeConfig[prompt.type];
  const Icon = config.icon;

  const urgencyConfig = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  };

  return (
    <div className={cn("p-4 rounded-lg border", config.bg, config.border)}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Icon className={cn("w-5 h-5", config.color)} />
          <div>
            <h4 className={cn("font-medium", config.color)}>
              {prompt.title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <Badge className={config.badgeColor}>
                {prompt.type}
              </Badge>
              <div className={cn("w-2 h-2 rounded-full", urgencyConfig[prompt.urgency])} />
              <span className="text-xs text-muted-foreground">
                {prompt.urgency} priority
              </span>
            </div>
          </div>
        </div>
        {prompt.dismissable && onDismiss && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDismiss(prompt.id)}
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-3">
        {prompt.description}
      </p>

      {/* Template connections */}
      <div className="flex items-center gap-2 mb-3">
        {prompt.templates.map((templateId, i) => {
          const TemplateIcon = getTemplateIcon(templateId);
          const templateName = templateId.split('-').map(w =>
            w.charAt(0).toUpperCase() + w.slice(1)
          ).join(' ');

          return (
            <React.Fragment key={templateId}>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TemplateIcon className="w-3 h-3" />
                <span>{templateName}</span>
              </div>
              {i < prompt.templates.length - 1 && (
                <ArrowRight className="w-3 h-3 text-muted-foreground" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Insights */}
      {prompt.insights && prompt.insights.length > 0 && (
        <div className="space-y-1 mb-3">
          {prompt.insights.map((insight, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <Lightbulb className="w-3 h-3 text-yellow-500 mt-0.5" />
              <span className="text-muted-foreground">{insight}</span>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        {prompt.actions.map((action, i) => (
          <Button
            key={i}
            size="sm"
            variant={action.variant || 'outline'}
            onClick={() => onAction?.(action.action, prompt.id, action.data)}
            className="text-xs"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

function InlinePrompt({ prompt, onAction }: {
  prompt: ContextualPrompt;
  onAction?: (action: string, promptId: string, data?: any) => void;
}) {
  const Icon = getTemplateIcon(prompt.templates[0]);

  return (
    <Alert>
      <Icon className="h-4 w-4" />
      <AlertDescription>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="font-medium text-sm mb-1">{prompt.title}</div>
            <div className="text-xs text-muted-foreground mb-2">
              {prompt.description}
            </div>
            <div className="flex gap-2">
              {prompt.actions.slice(0, 2).map((action, i) => (
                <Button
                  key={i}
                  size="sm"
                  variant="outline"
                  onClick={() => onAction?.(action.action, prompt.id, action.data)}
                  className="text-xs h-6"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
}

// Full variant - comprehensive contextual prompts
function FullContextualPrompts({
  activeTemplates,
  userProfile,
  maxPrompts,
  showConflicts,
  showSynergies,
  showTimingPrompts,
  onPromptAction,
  onPromptDismiss
}: Omit<ContextualPromptsProps, 'variant' | 'className'>) {
  const { getContextualPrompts, checkTemplateConflicts } = useKnowledgeGraph();

  const prompts = React.useMemo(() => {
    if (activeTemplates.length < 2) return [];

    try {
      const contextPrompts = getContextualPrompts(activeTemplates, userProfile);

      // Filter by type preferences
      let filteredPrompts = contextPrompts.filter((prompt: ContextualPrompt) => {
        if (prompt.type === 'conflict' && !showConflicts) return false;
        if (prompt.type === 'synergy' && !showSynergies) return false;
        if (prompt.type === 'timing' && !showTimingPrompts) return false;
        return true;
      });

      // Sort by urgency and limit
      filteredPrompts = filteredPrompts
        .sort((a: ContextualPrompt, b: ContextualPrompt) => {
          const urgencyOrder = { high: 3, medium: 2, low: 1 };
          return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
        })
        .slice(0, maxPrompts || 6);

      return filteredPrompts;
    } catch (error) {
      console.warn('Failed to get contextual prompts:', error);
      return [];
    }
  }, [activeTemplates, userProfile, maxPrompts, showConflicts, showSynergies, showTimingPrompts, getContextualPrompts]);

  if (prompts.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <MessageCircle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            No cross-template insights available yet.
            Add more templates to see intelligent connections.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Group prompts by category
  const groupedPrompts = prompts.reduce((groups: Record<string, ContextualPrompt[]>, prompt: ContextualPrompt) => {
    const category = prompt.category || 'General';
    if (!groups[category]) groups[category] = [];
    groups[category].push(prompt);
    return groups;
  }, {});

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          Contextual Insights
          <Badge variant="secondary" className="ml-auto">
            {prompts.length} active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(groupedPrompts).map(([category, categoryPrompts], i) => (
          <div key={category}>
            {Object.keys(groupedPrompts).length > 1 && (
              <>
                <h4 className="font-medium text-sm text-muted-foreground mb-3">
                  {category}
                </h4>
              </>
            )}
            <div className="space-y-3">
              {categoryPrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  onAction={onPromptAction}
                  onDismiss={onPromptDismiss}
                />
              ))}
            </div>
            {i < Object.keys(groupedPrompts).length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Compact variant - key prompts only
function CompactContextualPrompts({
  activeTemplates,
  userProfile,
  maxPrompts,
  onPromptAction
}: Omit<ContextualPromptsProps, 'variant' | 'className'>) {
  const { getContextualPrompts } = useKnowledgeGraph();

  const topPrompts = React.useMemo(() => {
    if (activeTemplates.length < 2) return [];

    try {
      const prompts = getContextualPrompts(activeTemplates, userProfile);
      return prompts
        .filter((prompt: ContextualPrompt) => prompt.urgency === 'high')
        .slice(0, maxPrompts || 3);
    } catch (error) {
      return [];
    }
  }, [activeTemplates, userProfile, maxPrompts, getContextualPrompts]);

  if (topPrompts.length === 0) return null;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-500" />
          Key Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topPrompts.map((prompt: ContextualPrompt) => (
          <InlinePrompt
            key={prompt.id}
            prompt={prompt}
            onAction={onPromptAction}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export function ContextualPrompts({
  activeTemplates,
  userProfile,
  variant = 'full',
  maxPrompts = 6,
  showConflicts = true,
  showSynergies = true,
  showTimingPrompts = true,
  className,
  onPromptAction,
  onPromptDismiss
}: ContextualPromptsProps) {
  const props = {
    activeTemplates,
    userProfile,
    maxPrompts,
    showConflicts,
    showSynergies,
    showTimingPrompts,
    onPromptAction,
    onPromptDismiss
  };

  switch (variant) {
    case 'compact':
      return (
        <div className={className}>
          <CompactContextualPrompts {...props} />
        </div>
      );
    case 'inline':
      return (
        <div className={className}>
          {/* Inline variant would be individual prompts without card wrapper */}
          <CompactContextualPrompts {...props} />
        </div>
      );
    default:
      return (
        <div className={className}>
          <FullContextualPrompts {...props} />
        </div>
      );
  }
}

// Export individual components for advanced use cases
export {
  PromptCard,
  InlinePrompt
};