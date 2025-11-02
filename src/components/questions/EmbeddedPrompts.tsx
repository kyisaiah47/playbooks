'use client';

import { useState, useEffect } from 'react';
import { GuidanceSection, ReflectionPrompt, FreeformNote } from '@/types/guide';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, HelpCircle, X, ArrowLeft, Plus, Target, BookOpen, Lightbulb, Circle, CheckCircle2, FileText, GripVertical, Edit3, Check, Square, CheckSquare, CircleCheckBig, CircleCheck, Clipboard, CheckCircle, Compass, MessageSquare } from 'lucide-react';
import Prism from '@/components/ui/prism';
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal';
import { Button } from '@/components/ui/button';
import { PremiumGlow } from '@/components/ui/glow-variants';
import { Progress } from '@/components/ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EmbeddedPromptsProps {
  section: GuidanceSection;
  allItems?: (ReflectionPrompt | FreeformNote)[];
  onResponsesChange?: (responses: Record<string, string>) => void;
  onRemovePrompt?: (promptId: string) => void;
  onRemoveNote?: (noteId: string) => void;
  onUpdateNote?: (noteId: string, updates: Partial<FreeformNote>) => void;
  onReorderItems?: (items: (ReflectionPrompt | FreeformNote)[]) => void;
  hideHeader?: boolean;
  responses?: Record<string, string>;
  editMode?: boolean;
  completedItems?: Set<string>;
  onToggleComplete?: (itemId: string) => void;
  highlightedItem?: string | null;
}

export function EmbeddedPrompts({ section, allItems = [], onResponsesChange, onRemovePrompt, onRemoveNote, onUpdateNote, onReorderItems, hideHeader, responses: externalResponses, editMode: externalEditMode = false, completedItems = new Set(), onToggleComplete, highlightedItem }: EmbeddedPromptsProps) {
  const [responses, setResponses] = useState<Record<string, string>>(externalResponses || {});
  const [draggedOver, setDraggedOver] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [newlyAddedItems, setNewlyAddedItems] = useState<Set<string>>(new Set());
  const editMode = externalEditMode;

  // Sync external responses
  useEffect(() => {
    if (externalResponses) {
      setResponses(externalResponses);
    }
  }, [externalResponses]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedItem) {
      const element = document.querySelector(`[data-item-id="${highlightedItem}"]`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }
  }, [highlightedItem]);

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

  const handleDropZone = (e: React.DragEvent, insertIndex: number) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('application/json');

    if (draggedItemId && draggedItem) {
      const draggedIndex = allItems.findIndex(item => item.id === draggedItem);
      if (draggedIndex !== -1) {
        const newItems = [...allItems];
        const [removed] = newItems.splice(draggedIndex, 1);

        // Adjust insert index if dragging down
        const adjustedIndex = draggedIndex < insertIndex ? insertIndex - 1 : insertIndex;
        newItems.splice(adjustedIndex, 0, removed);
        onReorderItems?.(newItems);
      }
    }

    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, promptId: string) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    const draggedItemId = e.dataTransfer.getData('application/json');

    // Handle text drop (existing functionality) - only if not dragging items
    if (text && !draggedItemId) {
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

  const handleDragStart = (e: React.DragEvent, itemId: string, itemType: 'prompt' | 'note') => {
    setDraggedItem(itemId);
    e.dataTransfer.setData('application/json', JSON.stringify({ type: itemType, id: itemId }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDragOverZone = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
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

  // Items are already unified and ordered chronologically
  const additionalPrompts = allItems.filter(item => 'prompt' in item) as ReflectionPrompt[];
  const additionalNotes = allItems.filter(item => 'title' in item && !('prompt' in item)) as FreeformNote[];

  // Separate active and completed items
  const activeItems = allItems.filter(item => !completedItems.has(item.id));
  const completedItemsList = allItems.filter(item => completedItems.has(item.id));

  // TODO: Fix reflection prompts integration
  // const progressPercentage = Math.round((additionalPrompts.length / (section.reflectionPrompts?.length || 1)) * 100);
  const progressPercentage = 0;

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
      <div className="relative">
        {/* Always-Visible Prism Background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Prism
            height={3.5}
            baseWidth={5.5}
            animationType="rotate"
            glow={0.8}
            noise={0.3}
            transparent={true}
            scale={2.8}
            hueShift={0.5}
            colorFrequency={1.2}
            timeScale={0.3}
            suspendWhenOffscreen={true}
          />
        </div>

        {activeItems.length === 0 && completedItemsList.length === 0 ? (
          /* Empty State */
          <div className="relative h-[93vh]">
            <div className="relative flex flex-col items-center justify-center h-full z-10 bg-background/10 backdrop-blur-[1px]">
            <div className="text-center p-8">
              <div className="flex items-center justify-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <VerticalCutReveal
                staggerDuration={0.1}
                staggerFrom="center"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                containerClassName="text-lg font-semibold mb-2 text-foreground"
              >
                Build your personalized guide
              </VerticalCutReveal>
              <VerticalCutReveal
                staggerDuration={0.05}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.8 }}
                containerClassName="text-sm text-muted-foreground mb-4 max-w-sm mx-auto"
              >
                Add prompts from the sidebar to create your customized planning experience. ← Your journey starts here.
              </VerticalCutReveal>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Plus className="h-4 w-4" />
                <VerticalCutReveal
                  staggerDuration={0.08}
                  transition={{ type: "spring", stiffness: 160, damping: 18, delay: 1.5 }}
                >
                  Select prompts to begin your planning
                </VerticalCutReveal>
              </div>
            </div>
            </div>
          </div>
        ) : (
        /* Embedded Prompts in Backdrop */
        <div className="relative p-8 space-y-8 z-10">
          {/* Active Items Section */}
          {activeItems.length > 0 && (
            <div>
              {/* Drop zone before first item */}
              {editMode && (
                <div
                  onDragOver={(e) => handleDragOverZone(e, 0)}
                  onDrop={(e) => handleDropZone(e, 0)}
                  className={`h-2 -mb-2 transition-all duration-200 ${
                    dragOverIndex === 0 && draggedItem ? 'h-8 bg-primary/10 border-2 border-dashed border-primary/50 rounded mb-2' : ''
                  }`}
                />
              )}

              {activeItems.map((item, index) => {
            // Check if this is a prompt or a note
            const isPrompt = 'prompt' in item;
            const isNote = 'title' in item && !('prompt' in item);

            return (
              <div key={item.id}>
                {isPrompt && (() => {
                  const prompt = item as ReflectionPrompt;
                  const isAdditional = additionalPrompts.some(p => p.id === prompt.id);
                  const hasContent = responses[prompt.id]?.trim();
                  return (
                    <div
                      key={prompt.id}
                      data-item-id={prompt.id}
                      draggable={editMode}
                      onDragStart={(e) => handleDragStart(e, prompt.id, 'prompt')}
                      onDragEnd={handleDragEnd}
                      className={`group space-y-4 transition-all duration-300 ${
                        editMode ? 'cursor-move' : ''
                      } ${
                        draggedItem === prompt.id ? 'opacity-50 scale-95' : ''
                      } ${
                        highlightedItem === prompt.id ? 'animate-pulse' : ''
                      }`}
                    >
                      {/* Embedded Prompt Question */}
                      <div className="text-center">
                        <VerticalCutReveal
                          staggerDuration={0.08}
                          staggerFrom="center"
                          transition={{ type: "spring", stiffness: 200, damping: 25 }}
                          containerClassName="text-lg font-semibold mb-2 text-foreground"
                        >
                          {prompt.prompt}
                        </VerticalCutReveal>
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                          <Badge variant="outline" className="text-xs opacity-60">
                            {prompt.category}
                          </Badge>
                          {prompt.helpText && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-muted-foreground hover:text-foreground">
                                  <HelpCircle className="w-3 h-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="bottom" className="max-w-xs">
                                <p className="text-xs">{prompt.helpText}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                          {isAdditional && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemovePrompt?.(prompt.id)}
                              className="h-4 w-4 p-0 text-muted-foreground hover:text-destructive"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Embedded Textarea */}
                      <div className="max-w-2xl mx-auto">
                        <Textarea
                          placeholder="Share your thoughts here..."
                          value={responses[prompt.id] || ''}
                          onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
                          onDragOver={(e) => handleDragOver(e, prompt.id)}
                          onDragLeave={handleDragLeave}
                          onDrop={(e) => handleDrop(e, prompt.id)}
                          className={`min-h-[120px] text-sm resize-none transition-all duration-300 backdrop-blur-sm bg-background/10 border-white/10 text-foreground placeholder:text-muted-foreground/70 focus:bg-background/20 focus:border-white/20 focus:backdrop-blur-md ${
                            draggedOver === prompt.id
                              ? 'ring-2 ring-blue-500/30 bg-blue-500/5'
                              : ''
                          }`}
                        />
                        {hasContent && (
                          <div className="flex justify-center mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onToggleComplete?.(prompt.id)}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors"
                            >
                              <CircleCheck className="w-4 h-4 mr-2" />
                              Mark Complete
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}

                {isNote && (() => {
                  const note = item as FreeformNote;
                  const hasContent = responses[note.id]?.trim();
                  return (
                    <PremiumGlow>
                      <div
                        draggable={editMode}
                        onDragStart={(e) => handleDragStart(e, note.id, 'note')}
                        onDragEnd={handleDragEnd}
                        className={`group p-4 space-y-3 transition-all duration-200 ${
                          editMode ? 'cursor-move' : ''
                        } ${
                          draggedItem === note.id ? 'opacity-50 scale-95' : ''
                        }`}
                      >
                      <div className="flex items-start gap-3">
                        {editMode && <GripVertical className="w-4 h-4 text-muted-foreground mt-1 opacity-60 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing" />}
                        <div className="flex flex-col items-center gap-2">
                          <span className="w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center transition-colors bg-primary/10 text-primary group-hover:bg-primary/20">
                            <FileText className="w-3 h-3" />
                          </span>
                          {hasContent && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onToggleComplete?.(note.id)}
                              className="h-6 w-6 p-0 hover:bg-primary/10 rounded-full border-2 border-border hover:border-primary/30 transition-all flex-shrink-0"
                            >
                              <CircleCheck className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                            </Button>
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
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => onRemoveNote?.(note.id)}
                                className="h-4 w-4 p-0 text-muted-foreground hover:text-destructive flex-shrink-0"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
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
                      <Textarea
                        placeholder={responses[note.id] ? "Type or add more notes..." : "Drop here to capture ideas →"}
                        value={responses[note.id] || ''}
                        onChange={(e) => handleResponseChange(note.id, e.target.value)}
                        onDragOver={(e) => handleDragOver(e, note.id)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, note.id)}
                        className={`min-h-[80px] text-sm border-dashed resize-none transition-colors ${
                          draggedOver === note.id
                            ? 'ring-2 ring-blue-500 ring-opacity-50 bg-blue-50/50 dark:bg-blue-900/10'
                            : 'hover:border-primary/50'
                        }`}
                      />
                      <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        💡 Perfect for capturing insights and ideas
                      </div>
                      </div>
                    </PremiumGlow>
                  );
                })()}

                {/* Drop zone after each item - or spacing when not in edit mode */}
                {editMode ? (
                  <div
                    onDragOver={(e) => handleDragOverZone(e, index + 1)}
                    onDrop={(e) => handleDropZone(e, index + 1)}
                    className={`h-2 transition-all duration-200 ${
                      dragOverIndex === index + 1 && draggedItem ? 'h-8 bg-primary/10 border-2 border-dashed border-primary/50 rounded my-2' : 'my-2'
                    }`}
                  />
                ) : (
                  <div className="my-4" />
                )}
              </div>
            );
          })}
            </div>
          )}

          {/* Completed Items Section */}
          {completedItemsList.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <h3 className="text-sm font-medium text-muted-foreground">Completed ({completedItemsList.length})</h3>
              </div>
              <div className="space-y-2">
                {completedItemsList.map((item) => {
                  const isPrompt = 'prompt' in item;
                  const isNote = 'title' in item && !('prompt' in item);
                  const content = responses[item.id];
                  const preview = content ? content.slice(0, 80) + (content.length > 80 ? '...' : '') : '';

                  return (
                    <div
                      key={item.id}
                      onClick={() => onToggleComplete?.(item.id)}
                      className="group flex items-center gap-3 p-3 bg-primary/5 border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-foreground">
                            {isPrompt ? (item as ReflectionPrompt).prompt : (item as FreeformNote).title}
                          </span>
                          {isPrompt && (
                            <Badge variant="outline" className="text-xs h-4 px-1 opacity-60">
                              {(item as ReflectionPrompt).category}
                            </Badge>
                          )}
                        </div>
                        {preview && (
                          <p className="text-xs text-muted-foreground mt-1 opacity-80">{preview}</p>
                        )}
                      </div>
                      <div className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to reopen
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        )}
      </div>
      </div>
    </TooltipProvider>
  );
}