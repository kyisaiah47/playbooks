'use client';

import { useState, useEffect } from 'react';
import { GuidanceTemplate, DailyReflectionQuestion } from '@/types/guide';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import { WorkspaceSwitcher } from '@/components/tiptap-templates/simple/workspace-switcher';
import { ThemeSelector } from '@/components/theme-selector';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ReflectionViewProps {
  template: GuidanceTemplate;
  onSwitchMode: (mode: 'guide' | 'reflection' | 'master') => void;
}

export function ReflectionView({ template, onSwitchMode }: ReflectionViewProps) {
  const [reflectionResponse, setReflectionResponse] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState<DailyReflectionQuestion | null>(null);

  // Sample reflection questions for wedding planning (we'll move this to data later)
  const reflectionPrompts: DailyReflectionQuestion[] = [
    {
      id: 'wedding-reflection-1',
      text: 'What aspects of your wedding planning journey have surprised you the most, and what do they reveal about your values as a couple?',
      category: 'Values & Meaning',
      order: 1,
      expertAdvice: 'Wedding planners often notice that couples discover their priorities through planning challenges. The moments that stress you most usually point to what matters least, while the decisions you make easily often align with your deepest values.',
      helpText: 'Consider both positive surprises (what felt easier than expected) and challenges (what was harder than anticipated).'
    },
    {
      id: 'wedding-reflection-2',
      text: 'How has planning this wedding changed your perspective on what truly matters for your relationship?',
      category: 'Relationship Growth',
      order: 2,
      expertAdvice: 'Relationship therapists note that wedding planning often acts as a preview of how couples handle major decisions together. The process reveals communication patterns, conflict resolution styles, and shared values.',
      helpText: 'Think about how you and your partner have navigated decisions together during this process.'
    },
    {
      id: 'wedding-reflection-3',
      text: 'What moments during the planning process have felt most authentic to who you are as a couple?',
      category: 'Authenticity',
      order: 3,
      expertAdvice: 'Event planners emphasize that the most memorable weddings reflect the couple\'s genuine personality rather than following trends. Authentic choices often feel effortless and exciting rather than stressful.',
      helpText: 'Consider decisions that felt natural and true to your relationship, versus ones that felt forced or influenced by others.'
    },
    {
      id: 'wedding-reflection-4',
      text: 'How do you want to feel on your wedding day, and what elements of your planning are most aligned with that feeling?',
      category: 'Emotional Vision',
      order: 4,
      expertAdvice: 'Wedding coordinators suggest focusing on the emotional experience rather than just logistics. The details that create your desired feeling are often different from what looks good in photos or impresses others.',
      helpText: 'Think beyond the visual aspects to the emotional atmosphere and energy you want to create.'
    },
    {
      id: 'wedding-reflection-5',
      text: 'What traditions or expectations have you chosen to embrace or let go of, and why?',
      category: 'Traditions & Choices',
      order: 5,
      expertAdvice: 'Cultural and family dynamics experts note that couples who thoughtfully choose which traditions to honor (rather than defaulting to all or none) often feel more ownership over their celebration.',
      helpText: 'Consider both family expectations and cultural traditions, and how your choices reflect your values as a couple.'
    }
  ];

  // Get today's reflection question (simple daily rotation)
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    const promptIndex = dayOfYear % reflectionPrompts.length;
    setCurrentPrompt(reflectionPrompts[promptIndex]);
  }, []);

  const handleSaveReflection = () => {
    // No-op for now
  };

  if (!currentPrompt) {
    return <div>Loading reflection...</div>;
  }

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col font-sans bg-background text-foreground">
      {/* Header with workspace switcher and reflection question */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="absolute left-4">
          <ThemeSelector />
        </div>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="text-sm font-medium text-muted-foreground">
              {currentPrompt.category}
            </h2>
            {currentPrompt.expertAdvice && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs p-3 text-center">
                    <p className="text-sm">
                      <span className="font-medium">Expert insight:</span> {currentPrompt.expertAdvice}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <p className="text-base text-foreground">
            {currentPrompt.text}
          </p>
        </div>
        <div className="absolute right-4">
          <WorkspaceSwitcher currentMode="reflection" onSwitchMode={onSwitchMode} />
        </div>
      </div>

      {/* Editor taking remaining space */}
      <div className="flex-1 overflow-hidden">
        <SimpleEditor
          content={reflectionResponse}
          onUpdate={setReflectionResponse}
        />
      </div>
    </div>
  );
}