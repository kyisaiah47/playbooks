'use client';

import { Resource } from '@/types/template';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, BookOpen, ExternalLink } from 'lucide-react';

interface ResourceViewerProps {
  resource: Resource;
  onClose: () => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
    case 'intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
    case 'expert': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
    default: return 'bg-muted text-muted-foreground';
  }
};

export function ResourceViewer({ resource, onClose }: ResourceViewerProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b bg-background/50 backdrop-blur">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
            <Badge variant="outline" className="text-xs">
              {resource.type}
            </Badge>
            <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>
              {resource.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
              <Clock className="w-3 h-3" />
              {resource.readTime}
            </div>
          </div>
          <h2 className="font-semibold text-lg line-clamp-2">{resource.title}</h2>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{resource.excerpt}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0 ml-3 flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          {/* Resource content would go here */}
          <div className="prose prose-sm max-w-none dark:prose-invert text-sm">
            <div className="bg-muted/50 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-medium mb-2">About this resource</h3>
              <p className="text-sm text-muted-foreground">
                {resource.excerpt}
              </p>
            </div>

            {/* Placeholder content - in a real app, this would be the actual resource content */}
            <div className="space-y-3">
              <h3 className="text-base font-medium">Key Points</h3>
              <ul className="space-y-1 text-sm">
                <li>Expert guidance on {resource.title.toLowerCase()}</li>
                <li>Practical tips and actionable advice</li>
                <li>Real-world examples and case studies</li>
                <li>Step-by-step implementation guides</li>
              </ul>

              <h3 className="text-base font-medium">What You'll Learn</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This {resource.difficulty} level {resource.type.toLowerCase()} provides comprehensive coverage 
                of the topic with practical insights you can apply immediately to your planning process.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-sm">💡 Pro Tip</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  Take notes as you read and refer back to the reflection prompts in the main panel 
                  to apply what you learn directly to your planning process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4 bg-background/50">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Resource • {resource.readTime} read
          </div>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            <ExternalLink className="w-3 h-3 mr-1" />
            Open Full View
          </Button>
        </div>
      </div>
    </div>
  );
}