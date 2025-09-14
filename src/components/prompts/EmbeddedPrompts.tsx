'use client';

import { useState, useEffect } from 'react';
import { GuidanceSection, ReflectionPrompt, FreeformNote } from '@/types/template';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, HelpCircle, X, ArrowLeft, Plus, Target, BookOpen, Lightbulb, Circle, CheckCircle2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EmbeddedPromptsProps {
  section: GuidanceSection;
  additionalPrompts?: ReflectionPrompt[];
  additionalNotes?: FreeformNote[];
  onResponsesChange?: (responses: Record<string, string>) => void;
  onRemovePrompt?: (promptId: string) => void;
  onRemoveNote?: (noteId: string) => void;
  onUpdateNote?: (noteId: string, updates: Partial<FreeformNote>) => void;
  hideHeader?: boolean;
  responses?: Record<string, string>;
}

export function EmbeddedPrompts({ section, additionalPrompts = [], additionalNotes = [], onResponsesChange, onRemovePrompt, onRemoveNote, onUpdateNote, hideHeader, responses: externalResponses }: EmbeddedPromptsProps) {
  const [responses, setResponses] = useState<Record<string, string>>(externalResponses || {});
  const [draggedOver, setDraggedOver] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Sync external responses
  useEffect(() => {
    if (externalResponses) {
      setResponses(externalResponses);
    }
  }, [externalResponses]);

  const handleResponseChange = (promptId: string, value: string) => {
    const newResponses = { ...responses, [promptId]: value };
    setResponses(newResponses);
    onResponsesChange?.(newResponses);
  };

  const handleDragOver = (e: React.DragEvent, promptId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDraggedOver(promptId);
  };

  const handleDragLeave = () => {
    setDraggedOver(null);
  };

  const handleDrop = (e: React.DragEvent, promptId: string) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');

    if (text) {
      const currentText = responses[promptId] || '';
      const newText = currentText ? `${currentText}\n\n${text}` : text;

      const newResponses = { ...responses, [promptId]: newText };
      setResponses(newResponses);
      onResponsesChange?.(newResponses);

      // Show success toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }

    setDraggedOver(null);
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

  // Combine prompts and notes for rendering
  const allPrompts = additionalPrompts;
  const allItems = [...additionalPrompts, ...additionalNotes];

  const progressPercentage = Math.round((additionalPrompts.length / section.reflectionPrompts.length) * 100);

  return (
    <TooltipProvider>
      <div className="space-y-4 relative">
        {/* Success Toast */}
        {showToast && (
          <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-5 duration-300 animate-out fade-out-0 slide-out-to-right-5">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">Text added to note!</span>
            </div>
          </div>
        )}

      {/* Main Content */}
      {allItems.length === 0 ? (
        /* Aspirational Empty State */
        <div className="text-center py-12 border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Build your personalized guide</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
            Add prompts from the sidebar to create your customized planning experience.
            ← Your journey starts here.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Plus className="h-4 w-4" />
            <span>Select prompts to begin your planning</span>
          </div>
        </div>
      ) : (
        /* Compact Prompts and Notes */
        <div className="space-y-0">
          {allItems.map((item, index) => {
            // Check if this is a prompt or a note
            const isPrompt = 'prompt' in item;
            const isNote = 'title' in item && !('prompt' in item);

            if (isPrompt) {
              const prompt = item as ReflectionPrompt;
              const isAdditional = additionalPrompts.some(p => p.id === prompt.id) &&
                                   !section.reflectionPrompts.some(s => s.id === prompt.id);
              return (
              <div key={prompt.id} className="border-b p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                    <span className="w-5 h-5 bg-primary/10 rounded text-xs text-primary font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    {responses[prompt.id]?.trim() ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-1.5 flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 flex-1">{prompt.prompt}</h4>
                        {prompt.helpText && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-4 w-4 p-0 text-muted-foreground hover:text-foreground flex-shrink-0 mt-0.5"
                              >
                                <HelpCircle className="w-3 h-3" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="left" className="max-w-xs">
                              <p className="text-xs">{prompt.helpText}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
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
                <div className="relative">
                  <Textarea
                    placeholder="Your notes... (drag text from resources to add here)"
                    value={responses[prompt.id] || ''}
                    onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
                    onDragOver={(e) => handleDragOver(e, prompt.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, prompt.id)}
                    className={`min-h-[80px] text-sm transition-all duration-200 ${
                      draggedOver === prompt.id
                        ? 'ring-2 ring-blue-500 ring-opacity-50 bg-blue-50/50 dark:bg-blue-900/10 scale-[1.02]'
                        : 'hover:ring-1 hover:ring-muted-foreground/20'
                    }`}
                  />
                </div>
              </div>
              )
            } else if (isNote) {
              const note = item as FreeformNote;
              return (
                <div key={note.id} className="border-b p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                      <span className="w-5 h-5 bg-primary/10 rounded text-xs text-primary font-medium flex items-center justify-center">
                        <FileText className="w-3 h-3" />
                      </span>
                      {responses[note.id]?.trim() ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-1.5 flex-1 min-w-0">
                          <input
                            type="text"
                            value={note.title}
                            onChange={(e) => onUpdateNote?.(note.id, { title: e.target.value })}
                            className="font-medium text-sm flex-1 bg-transparent border-none outline-none focus:ring-0 p-0"
                            placeholder="Note title..."
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveNote?.(note.id)}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={note.category || ''}
                          onChange={(e) => onUpdateNote?.(note.id, { category: e.target.value })}
                          className="text-xs text-muted-foreground bg-transparent border-none outline-none focus:ring-0 p-0"
                          placeholder="Add category/tag..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Textarea
                      placeholder="Add your notes here... (drag text from resources to add here)"
                      value={responses[note.id] || ''}
                      onChange={(e) => handleResponseChange(note.id, e.target.value)}
                      onDragOver={(e) => handleDragOver(e, note.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, note.id)}
                      className={`min-h-[80px] text-sm transition-all duration-200 ${
                        draggedOver === note.id
                          ? 'ring-2 ring-blue-500 ring-opacity-50 bg-blue-50/50 dark:bg-blue-900/10 scale-[1.02]'
                          : 'hover:ring-1 hover:ring-muted-foreground/20'
                      }`}
                    />
                  </div>
                </div>
              )
            }
            return null;
          })}
        </div>
      )}
      </div>
    </TooltipProvider>
  );
}