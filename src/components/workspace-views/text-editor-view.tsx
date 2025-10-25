'use client';

import { useState } from 'react';
import {
  EditorRoot,
  EditorContent,
} from 'novel';
import { IconFileText } from '@tabler/icons-react';

interface TextEditorViewProps {
  guideId: string | null;
}

export function TextEditorView({ guideId }: TextEditorViewProps) {
  const [initialContent] = useState({
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'Start writing...',
          },
        ],
      },
    ],
  });

  if (!guideId) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <IconFileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Template Selected</h3>
          <p className="text-sm text-muted-foreground">
            Select a template from the dock to start writing
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Text Editor View</h2>
          <p className="text-sm text-muted-foreground">
            Write freely with a rich text editor. Use "/" for commands.
          </p>
        </div>

        <div className="border rounded-lg p-8 min-h-[600px] bg-background">
          <EditorRoot>
            <EditorContent
              initialContent={initialContent}
              className="prose dark:prose-invert max-w-none focus:outline-none"
            />
          </EditorRoot>
        </div>
      </div>
    </div>
  );
}
