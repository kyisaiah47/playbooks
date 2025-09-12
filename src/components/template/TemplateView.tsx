'use client';

import { useState } from 'react';
import { GuidanceTemplate, Resource, ReflectionPrompt } from '@/types/template';
import { EmbeddedPrompts } from '@/components/prompts/EmbeddedPrompts';
import { TemplataContentSidebar } from '@/components/templata-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeSelector } from '@/components/theme-selector';

interface TemplateViewProps {
  template: GuidanceTemplate;
}

export function TemplateView({ template }: TemplateViewProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [additionalPrompts, setAdditionalPrompts] = useState<ReflectionPrompt[]>([]);

  const handleInsertPrompt = (prompt: ReflectionPrompt) => {
    // Check if prompt is already added
    if (additionalPrompts.some(p => p.id === prompt.id)) {
      return; // Don't add duplicates
    }
    setAdditionalPrompts(prev => [...prev, prompt]);
  };

  const handleRemovePrompt = (promptId: string) => {
    setAdditionalPrompts(prev => prev.filter(p => p.id !== promptId));
  };

  const handleOpenResource = (resource: Resource) => {
    // This could open resource in split screen or modal
    console.log('Open resource:', resource);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground">
        <TemplataContentSidebar
          template={template}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onInsertPrompt={handleInsertPrompt}
          onOpenResource={handleOpenResource}
        />
        
        <main className="flex-1 overflow-auto bg-background">
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                  <span>{template.icon}</span>
                  {template.title}
                </h1>
              </div>
              <ThemeSelector />
            </div>
            
            <EmbeddedPrompts 
              section={template.sections[activeSection]} 
              additionalPrompts={additionalPrompts}
              onRemovePrompt={handleRemovePrompt}
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}