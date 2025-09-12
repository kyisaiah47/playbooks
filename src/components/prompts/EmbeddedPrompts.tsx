'use client';

import { useState } from 'react';
import { GuidanceSection, ReflectionPrompt } from '@/types/template';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, HelpCircle, X, ArrowLeft, Plus, Target, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface EmbeddedPromptsProps {
  section: GuidanceSection;
  additionalPrompts?: ReflectionPrompt[];
  onResponsesChange?: (responses: Record<string, string>) => void;
  onRemovePrompt?: (promptId: string) => void;
  hideHeader?: boolean;
}

export function EmbeddedPrompts({ section, additionalPrompts = [], onResponsesChange, onRemovePrompt, hideHeader }: EmbeddedPromptsProps) {
  const [responses, setResponses] = useState<Record<string, string>>({});

  const handleResponseChange = (promptId: string, value: string) => {
    const newResponses = { ...responses, [promptId]: value };
    setResponses(newResponses);
    onResponsesChange?.(newResponses);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'consideration': return <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'planning': return <HelpCircle className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'decision': return <MessageCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'research': return <HelpCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />;
      default: return <MessageCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  // Only show additional prompts that have been explicitly added
  const allPrompts = additionalPrompts;

  const progressPercentage = Math.round((additionalPrompts.length / section.reflectionPrompts.length) * 100);

  return (
    <div className="space-y-4">

      {/* Main Content */}
      {allPrompts.length === 0 ? (
        /* Compact Empty State */
        <div className="text-center py-8 border-2 border-dashed rounded-lg">
          <Plus className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-medium mb-1">Select prompts to begin</p>
          <p className="text-xs text-muted-foreground">
            Choose from {section.reflectionPrompts.length} prompts in the sidebar
          </p>
        </div>
      ) : (
        /* Compact Prompts */
        <div className="space-y-4">
          {allPrompts.map((prompt, index) => {
            const isAdditional = additionalPrompts.some(p => p.id === prompt.id) && 
                                 !section.reflectionPrompts.some(s => s.id === prompt.id);
            return (
              <div key={prompt.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 rounded text-xs text-primary font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-sm line-clamp-2">{prompt.prompt}</h4>
                      {isAdditional && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemovePrompt?.(prompt.id)}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      {getCategoryIcon(prompt.category)}
                      <Badge variant="outline" className="text-xs h-4 px-1.5">
                        {prompt.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Textarea
                  placeholder="Your notes..."
                  value={responses[prompt.id] || ''}
                  onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
                  className="min-h-[80px] text-sm"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}