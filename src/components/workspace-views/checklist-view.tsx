'use client';

import { useState } from 'react';
import { PinList, type PinListItem } from '@/components/ui/shadcn-io/pin-list';
import { IconFileText, IconCheckbox } from '@tabler/icons-react';

interface ChecklistViewProps {
  guideId: string | null;
}

export function ChecklistView({ guideId }: ChecklistViewProps) {
  // Mock prompts data - will be replaced with real data
  const [prompts] = useState<PinListItem[]>([
    {
      id: 1,
      name: 'Define your wedding vision',
      info: 'What style and theme do you envision?',
      icon: IconFileText,
      pinned: true,
    },
    {
      id: 2,
      name: 'Set your budget',
      info: 'How much do you plan to spend?',
      icon: IconFileText,
      pinned: true,
    },
    {
      id: 3,
      name: 'Choose your venue',
      info: 'Where will the ceremony take place?',
      icon: IconFileText,
      pinned: false,
    },
    {
      id: 4,
      name: 'Create guest list',
      info: 'Who will you invite?',
      icon: IconFileText,
      pinned: false,
    },
    {
      id: 5,
      name: 'Select vendors',
      info: 'Photographer, caterer, florist, etc.',
      icon: IconFileText,
      pinned: false,
    },
  ]);

  if (!guideId) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <IconCheckbox className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Guide Selected</h3>
          <p className="text-sm text-muted-foreground">
            Select a guide from the dock to view questions
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Checklist View</h2>
          <p className="text-sm text-muted-foreground">
            Pin important questions to keep them at the top. Click any question to toggle its pinned status.
          </p>
        </div>

        <PinList
          items={prompts}
          labels={{
            pinned: 'Pinned Questions',
            unpinned: 'All Questions',
          }}
        />
      </div>
    </div>
  );
}
