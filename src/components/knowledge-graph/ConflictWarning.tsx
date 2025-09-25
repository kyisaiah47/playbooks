"use client";

import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph";
import {
  AlertTriangle,
  Clock,
  Zap,
  X,
  CheckCircle2,
  Info,
  Lightbulb,
  ArrowRight,
  AlertCircle
} from "lucide-react";

export interface ConflictWarningProps {
  templateId: string;
  activeTemplates: string[];
  onResolve?: (resolution: string) => void;
  onIgnore?: () => void;
  className?: string;
  showResolutions?: boolean;
  variant?: 'alert' | 'card' | 'inline';
}

interface ConflictData {
  conflictingTemplate: string;
  reason: string;
  resolution: string;
  severity: 'high' | 'medium' | 'low';
}

function ConflictSeverityIndicator({ severity }: { severity: 'high' | 'medium' | 'low' }) {
  const config = {
    high: {
      color: 'text-red-600',
      bg: 'bg-red-100',
      border: 'border-red-300',
      icon: AlertTriangle,
      text: 'High Conflict'
    },
    medium: {
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
      border: 'border-yellow-300',
      icon: Clock,
      text: 'Medium Conflict'
    },
    low: {
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      border: 'border-blue-300',
      icon: Info,
      text: 'Low Conflict'
    }
  };

  const { color, bg, border, icon: Icon, text } = config[severity];

  return (
    <Badge variant="outline" className={`${bg} ${border} ${color}`}>
      <Icon className="w-3 h-3 mr-1" />
      {text}
    </Badge>
  );
}

function ConflictResolutionSuggestion({
  resolution,
  onApply
}: {
  resolution: string;
  onApply?: (resolution: string) => void;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
      <Lightbulb className="w-4 h-4 text-green-600 mt-0.5" />
      <div className="flex-1">
        <div className="text-sm font-medium text-green-800 mb-1">
          Suggested Resolution
        </div>
        <div className="text-sm text-green-700 mb-2">
          {resolution}
        </div>
        {onApply && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onApply(resolution)}
            className="text-green-700 border-green-300 hover:bg-green-100"
          >
            Apply This Solution
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
}

function SingleConflictDisplay({
  templateId,
  conflict,
  onResolve,
  onIgnore,
  showResolutions
}: {
  templateId: string;
  conflict: ConflictData;
  onResolve?: (resolution: string) => void;
  onIgnore?: () => void;
  showResolutions?: boolean;
}) {
  const templateName = templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const conflictingName = conflict.conflictingTemplate.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="space-y-4">
      {/* Conflict Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-medium text-gray-900">
              {templateName} conflicts with {conflictingName}
            </h4>
            <ConflictSeverityIndicator severity={conflict.severity} />
          </div>
          <p className="text-sm text-gray-600">
            {conflict.reason}
          </p>
        </div>
        {onIgnore && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onIgnore}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Resolution Suggestion */}
      {showResolutions && (
        <ConflictResolutionSuggestion
          resolution={conflict.resolution}
          onApply={onResolve}
        />
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2">
        {onResolve && (
          <Button
            size="sm"
            onClick={() => onResolve(conflict.resolution)}
          >
            <CheckCircle2 className="w-4 h-4 mr-1" />
            Resolve Conflict
          </Button>
        )}
        {onIgnore && (
          <Button
            size="sm"
            variant="outline"
            onClick={onIgnore}
          >
            Continue Anyway
          </Button>
        )}
      </div>
    </div>
  );
}

// Alert variant - for urgent conflicts
function ConflictAlert({
  templateId,
  conflicts,
  onResolve,
  onIgnore,
  showResolutions
}: {
  templateId: string;
  conflicts: ConflictData[];
  onResolve?: (resolution: string) => void;
  onIgnore?: () => void;
  showResolutions?: boolean;
}) {
  const highestSeverity = conflicts.reduce((max, conflict) => {
    const severityOrder = { high: 3, medium: 2, low: 1 };
    return severityOrder[conflict.severity] > severityOrder[max] ? conflict.severity : max;
  }, 'low' as 'high' | 'medium' | 'low');

  const severityConfig = {
    high: 'destructive',
    medium: 'default',
    low: 'default'
  } as const;

  return (
    <Alert variant={severityConfig[highestSeverity]}>
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        <div className="space-y-3">
          <div className="font-medium">
            Template Conflict Detected ({conflicts.length} conflict{conflicts.length > 1 ? 's' : ''})
          </div>
          {conflicts.map((conflict, i) => (
            <SingleConflictDisplay
              key={i}
              templateId={templateId}
              conflict={conflict}
              onResolve={onResolve}
              onIgnore={onIgnore}
              showResolutions={showResolutions}
            />
          ))}
        </div>
      </AlertDescription>
    </Alert>
  );
}

// Card variant - for detailed conflict analysis
function ConflictCard({
  templateId,
  conflicts,
  onResolve,
  onIgnore,
  showResolutions
}: {
  templateId: string;
  conflicts: ConflictData[];
  onResolve?: (resolution: string) => void;
  onIgnore?: () => void;
  showResolutions?: boolean;
}) {
  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <AlertCircle className="w-5 h-5" />
          Potential Template Conflicts
          <Badge variant="secondary" className="ml-auto">
            {conflicts.length} detected
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {conflicts.map((conflict, i) => (
          <div key={i}>
            <SingleConflictDisplay
              templateId={templateId}
              conflict={conflict}
              onResolve={onResolve}
              onIgnore={onIgnore}
              showResolutions={showResolutions}
            />
            {i < conflicts.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Inline variant - for subtle integration
function ConflictInline({
  templateId,
  conflicts,
  onResolve,
  onIgnore
}: {
  templateId: string;
  conflicts: ConflictData[];
  onResolve?: (resolution: string) => void;
  onIgnore?: () => void;
}) {
  const totalHighSeverity = conflicts.filter(c => c.severity === 'high').length;

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
      <AlertTriangle className="w-4 h-4 text-yellow-600" />
      <div className="flex-1">
        <span className="text-sm font-medium text-yellow-800">
          {conflicts.length} template conflict{conflicts.length > 1 ? 's' : ''} detected
          {totalHighSeverity > 0 && ` (${totalHighSeverity} high severity)`}
        </span>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="text-yellow-700 border-yellow-300">
          Review Conflicts
        </Button>
        {onIgnore && (
          <Button size="sm" variant="ghost" onClick={onIgnore}>
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>
    </div>
  );
}

export function ConflictWarning({
  templateId,
  activeTemplates,
  onResolve,
  onIgnore,
  className,
  showResolutions = true,
  variant = 'alert'
}: ConflictWarningProps) {
  const { checkTemplateConflicts } = useKnowledgeGraph();

  // Get conflicts for this template against active templates
  const conflicts = React.useMemo(() => {
    return checkTemplateConflicts(templateId, activeTemplates);
  }, [templateId, activeTemplates, checkTemplateConflicts]);

  // Don't render if no conflicts
  if (conflicts.length === 0) {
    return null;
  }

  const props = {
    templateId,
    conflicts,
    onResolve,
    onIgnore,
    showResolutions
  };

  switch (variant) {
    case 'card':
      return <ConflictCard {...props} />;
    case 'inline':
      return <ConflictInline {...props} />;
    default:
      return <ConflictAlert {...props} />;
  }
}

// Export individual components for advanced use cases
export {
  ConflictSeverityIndicator,
  ConflictResolutionSuggestion,
  SingleConflictDisplay
};