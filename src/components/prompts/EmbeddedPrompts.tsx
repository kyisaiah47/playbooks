'use client';

import { useState } from 'react';
import { GuidanceSection, ReflectionPrompt } from '@/types/template';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmbeddedPromptsProps {
  section: GuidanceSection;
  additionalPrompts?: ReflectionPrompt[];
  onResponsesChange?: (responses: Record<string, string>) => void;
  onRemovePrompt?: (promptId: string) => void;
}

export function EmbeddedPrompts({ section, additionalPrompts = [], onResponsesChange, onRemovePrompt }: EmbeddedPromptsProps) {
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

  // Combine section prompts with additional prompts, avoiding duplicates
  const allPrompts = [
    ...section.reflectionPrompts,
    ...additionalPrompts.filter(additional => 
      !section.reflectionPrompts.some(section => section.id === additional.id)
    )
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {section.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{section.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {allPrompts.map((prompt) => {
          const isAdditional = additionalPrompts.some(p => p.id === prompt.id) && 
                               !section.reflectionPrompts.some(s => s.id === prompt.id);
          return (
          <div key={prompt.id} className="space-y-3">
            <div className="flex items-start gap-2">
              {getCategoryIcon(prompt.category)}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm">{prompt.prompt}</h4>
                  <Badge variant="outline" className="text-xs">
                    {prompt.category}
                  </Badge>
                  {isAdditional && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemovePrompt?.(prompt.id)}
                      className="ml-auto h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>
                {prompt.helpText && (
                  <p className="text-xs text-muted-foreground mb-2">
                    💡 {prompt.helpText}
                  </p>
                )}
              </div>
            </div>
            <Textarea
              placeholder="Your thoughts and planning notes..."
              value={responses[prompt.id] || ''}
              onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          );
        })}
      </CardContent>
    </Card>
  );
}