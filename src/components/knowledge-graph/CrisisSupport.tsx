"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph";
import {
  Shield,
  Heart,
  Phone,
  MessageCircle,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Headphones,
  ExternalLink,
  ArrowRight,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CrisisSupportProps {
  activeTemplates: string[];
  userProfile?: {
    age?: number;
    goals?: string[];
    completedTemplates?: string[];
    stressLevel?: 'low' | 'medium' | 'high';
    recentEvents?: string[];
  };
  variant?: 'full' | 'compact' | 'banner';
  showResources?: boolean;
  showGuidance?: boolean;
  showHotlines?: boolean;
  className?: string;
  onResourceClick?: (resource: string) => void;
  onSupportAction?: (action: string, data?: any) => void;
}

interface CrisisPattern {
  type: 'crisis' | 'high_stress' | 'support_needed' | 'transition';
  severity: 'high' | 'medium' | 'low';
  indicators: string[];
  description: string;
  immediateSupport: string[];
  resources: Array<{
    type: 'hotline' | 'article' | 'community' | 'professional' | 'tool';
    title: string;
    description: string;
    url?: string;
    phone?: string;
  }>;
  gentleGuidance: string[];
}

function CrisisIndicator({ severity, description }: {
  severity: 'high' | 'medium' | 'low';
  description: string;
}) {
  const severityConfig = {
    high: {
      bg: 'bg-red-100',
      border: 'border-red-300',
      text: 'text-red-700',
      icon: AlertTriangle,
      label: 'High Support Needed'
    },
    medium: {
      bg: 'bg-yellow-100',
      border: 'border-yellow-300',
      text: 'text-yellow-700',
      icon: Clock,
      label: 'Additional Support'
    },
    low: {
      bg: 'bg-blue-100',
      border: 'border-blue-300',
      text: 'text-blue-700',
      icon: Info,
      label: 'Guidance Available'
    }
  };

  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <div className={cn("flex items-center gap-2 p-2 rounded-lg", config.bg, config.border)}>
      <Icon className={cn("w-4 h-4", config.text)} />
      <div>
        <Badge className={cn("text-xs", config.text, config.bg)}>
          {config.label}
        </Badge>
        <p className={cn("text-xs mt-1", config.text)}>{description}</p>
      </div>
    </div>
  );
}

function SupportResource({ resource, onResourceClick }: {
  resource: CrisisPattern['resources'][0];
  onResourceClick?: (resource: string) => void;
}) {
  const typeConfig = {
    hotline: { icon: Phone, color: 'text-red-600', bg: 'bg-red-50' },
    article: { icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    community: { icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
    professional: { icon: Headphones, color: 'text-purple-600', bg: 'bg-purple-50' },
    tool: { icon: CheckCircle2, color: 'text-indigo-600', bg: 'bg-indigo-50' }
  };

  const config = typeConfig[resource.type];
  const Icon = config.icon;

  const handleClick = () => {
    onResourceClick?.(resource.type);
    if (resource.url) {
      window.open(resource.url, '_blank');
    }
    if (resource.phone) {
      window.open(`tel:${resource.phone}`, '_self');
    }
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors hover:shadow-sm",
        config.bg,
        "hover:bg-opacity-70"
      )}
      onClick={handleClick}
    >
      <Icon className={cn("w-4 h-4 mt-0.5", config.color)} />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h5 className={cn("font-medium text-sm", config.color)}>
            {resource.title}
          </h5>
          {resource.phone && (
            <Badge variant="outline" className="text-xs">
              {resource.phone}
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          {resource.description}
        </p>
      </div>
      <div className="flex items-center gap-1">
        {resource.url && <ExternalLink className="w-3 h-3 text-muted-foreground" />}
        <ArrowRight className="w-3 h-3 text-muted-foreground" />
      </div>
    </div>
  );
}

function GentleGuidanceSection({ guidance }: { guidance: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="font-medium text-sm flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-yellow-500" />
        Gentle Guidance
      </h4>
      <div className="space-y-2">
        {guidance.map((tip, i) => (
          <div key={i} className="flex items-start gap-2 p-2 rounded bg-green-50 text-green-800 text-sm">
            <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-600" />
            <span>{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Full variant - comprehensive crisis support
function FullCrisisSupport({
  activeTemplates,
  userProfile,
  showResources,
  showGuidance,
  showHotlines,
  onResourceClick,
  onSupportAction
}: Omit<CrisisSupportProps, 'variant' | 'className'>) {
  const { detectCrisisPatterns } = useKnowledgeGraph();

  const crisisPatterns = React.useMemo(() => {
    try {
      return detectCrisisPatterns(activeTemplates, userProfile);
    } catch (error) {
      console.warn('Crisis detection failed:', error);
      return [];
    }
  }, [activeTemplates, userProfile, detectCrisisPatterns]);

  // Filter for significant patterns only
  const significantPatterns = crisisPatterns.filter(
    (pattern: CrisisPattern) => pattern.severity === 'high' || pattern.severity === 'medium'
  );

  if (significantPatterns.length === 0) {
    return null;
  }

  const highestSeverity = significantPatterns.reduce((max, pattern) => {
    const severityOrder = { high: 3, medium: 2, low: 1 };
    return severityOrder[pattern.severity] > severityOrder[max] ? pattern.severity : max;
  }, 'low' as 'high' | 'medium' | 'low');

  return (
    <Card className="border-2 border-blue-200 bg-blue-50/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Shield className="w-5 h-5" />
          Support & Wellness Check
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {significantPatterns.map((pattern, i) => (
          <div key={i}>
            <CrisisIndicator
              severity={pattern.severity}
              description={pattern.description}
            />

            {/* Immediate Support Resources */}
            {showHotlines && pattern.resources.filter(r => r.type === 'hotline').length > 0 && (
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-sm flex items-center gap-2 text-red-700">
                  <Phone className="w-4 h-4" />
                  Immediate Support
                </h4>
                {pattern.resources
                  .filter(r => r.type === 'hotline')
                  .map((resource, j) => (
                    <SupportResource
                      key={j}
                      resource={resource}
                      onResourceClick={onResourceClick}
                    />
                  ))}
              </div>
            )}

            {/* Additional Resources */}
            {showResources && (
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-500" />
                  Support Resources
                </h4>
                <div className="grid gap-2">
                  {pattern.resources
                    .filter(r => r.type !== 'hotline')
                    .slice(0, 3)
                    .map((resource, j) => (
                      <SupportResource
                        key={j}
                        resource={resource}
                        onResourceClick={onResourceClick}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Gentle Guidance */}
            {showGuidance && pattern.gentleGuidance.length > 0 && (
              <div className="mt-4">
                <GentleGuidanceSection guidance={pattern.gentleGuidance} />
              </div>
            )}

            {i < significantPatterns.length - 1 && <Separator className="my-4" />}
          </div>
        ))}

        {/* Support Actions */}
        <div className="flex gap-2 pt-4 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSupportAction?.('connect_support')}
            className="text-blue-700 border-blue-300"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Connect with Support
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSupportAction?.('wellness_check')}
            className="text-green-700 border-green-300"
          >
            <Heart className="w-4 h-4 mr-1" />
            Wellness Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Compact variant - key support info only
function CompactCrisisSupport({
  activeTemplates,
  userProfile,
  onResourceClick
}: Omit<CrisisSupportProps, 'variant' | 'className'>) {
  const { detectCrisisPatterns } = useKnowledgeGraph();

  const hasHighSupport = React.useMemo(() => {
    try {
      const patterns = detectCrisisPatterns(activeTemplates, userProfile);
      return patterns.some((pattern: CrisisPattern) => pattern.severity === 'high');
    } catch (error) {
      return false;
    }
  }, [activeTemplates, userProfile, detectCrisisPatterns]);

  if (!hasHighSupport) return null;

  return (
    <Alert className="border-red-200 bg-red-50">
      <Shield className="h-4 w-4 text-red-600" />
      <AlertDescription>
        <div className="space-y-2">
          <div className="font-medium text-red-800">
            Support resources are available
          </div>
          <p className="text-sm text-red-700">
            We've detected you might benefit from additional support. Resources are here when you need them.
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onResourceClick?.('crisis_hotline')}
              className="text-red-700 border-red-300"
            >
              <Phone className="w-3 h-3 mr-1" />
              Crisis Support
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onResourceClick?.('resources')}
              className="text-red-700 border-red-300"
            >
              View Resources
            </Button>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
}

// Banner variant - minimal alert
function BannerCrisisSupport({
  activeTemplates,
  userProfile
}: Omit<CrisisSupportProps, 'variant' | 'className'>) {
  const { detectCrisisPatterns } = useKnowledgeGraph();

  const needsSupport = React.useMemo(() => {
    try {
      const patterns = detectCrisisPatterns(activeTemplates, userProfile);
      return patterns.length > 0;
    } catch (error) {
      return false;
    }
  }, [activeTemplates, userProfile, detectCrisisPatterns]);

  if (!needsSupport) return null;

  return (
    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-center gap-2">
        <Heart className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-blue-800">
          Support resources available
        </span>
      </div>
      <Button size="sm" variant="outline" className="text-blue-700">
        View Support
      </Button>
    </div>
  );
}

export function CrisisSupport({
  activeTemplates,
  userProfile,
  variant = 'full',
  showResources = true,
  showGuidance = true,
  showHotlines = true,
  className,
  onResourceClick,
  onSupportAction
}: CrisisSupportProps) {
  const props = {
    activeTemplates,
    userProfile,
    showResources,
    showGuidance,
    showHotlines,
    onResourceClick,
    onSupportAction
  };

  switch (variant) {
    case 'compact':
      return (
        <div className={className}>
          <CompactCrisisSupport {...props} />
        </div>
      );
    case 'banner':
      return (
        <div className={className}>
          <BannerCrisisSupport {...props} />
        </div>
      );
    default:
      return (
        <div className={className}>
          <FullCrisisSupport {...props} />
        </div>
      );
  }
}

// Export individual components for advanced use cases
export {
  CrisisIndicator,
  SupportResource,
  GentleGuidanceSection
};