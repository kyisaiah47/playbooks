'use client';

import { useState } from 'react';
import {
  EditorRoot,
  EditorContent,
  EditorCommand,
  EditorCommandItem,
  EditorBubble,
  EditorBubbleItem,
} from 'novel';
import { IconFileText } from '@tabler/icons-react';

interface TextEditorViewProps {
  templateId: string | null;
}

export function TextEditorView({ templateId }: TextEditorViewProps) {
  const [content, setContent] = useState('');

  if (!templateId) {
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

        <div className="border rounded-lg p-4 min-h-[600px] bg-background">
          <EditorRoot>
            <EditorContent
              className="prose dark:prose-invert max-w-none"
              initialContent={content}
              onUpdate={({ editor }) => {
                setContent(editor.getHTML());
              }}
            >
              <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
                <EditorCommandItem
                  value="paragraph"
                  onCommand={(editor, range) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .toggleNode('paragraph', 'paragraph')
                      .run();
                  }}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    <p className="text-sm">¶</p>
                  </div>
                  <div>
                    <p className="font-medium">Paragraph</p>
                    <p className="text-xs text-muted-foreground">
                      Just start typing with plain text.
                    </p>
                  </div>
                </EditorCommandItem>
                <EditorCommandItem
                  value="heading1"
                  onCommand={(editor, range) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setNode('heading', { level: 1 })
                      .run();
                  }}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    <p className="text-sm font-bold">H1</p>
                  </div>
                  <div>
                    <p className="font-medium">Heading 1</p>
                    <p className="text-xs text-muted-foreground">
                      Big section heading.
                    </p>
                  </div>
                </EditorCommandItem>
                <EditorCommandItem
                  value="heading2"
                  onCommand={(editor, range) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setNode('heading', { level: 2 })
                      .run();
                  }}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    <p className="text-sm font-bold">H2</p>
                  </div>
                  <div>
                    <p className="font-medium">Heading 2</p>
                    <p className="text-xs text-muted-foreground">
                      Medium section heading.
                    </p>
                  </div>
                </EditorCommandItem>
                <EditorCommandItem
                  value="bulletList"
                  onCommand={(editor, range) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .toggleBulletList()
                      .run();
                  }}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    <p className="text-sm">•</p>
                  </div>
                  <div>
                    <p className="font-medium">Bullet List</p>
                    <p className="text-xs text-muted-foreground">
                      Create a simple bullet list.
                    </p>
                  </div>
                </EditorCommandItem>
              </EditorCommand>

              <EditorBubble className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl">
                <EditorBubbleItem
                  onSelect={(editor) => {
                    editor.chain().focus().toggleBold().run();
                  }}
                  className="p-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <p className="text-sm font-bold">B</p>
                </EditorBubbleItem>
                <EditorBubbleItem
                  onSelect={(editor) => {
                    editor.chain().focus().toggleItalic().run();
                  }}
                  className="p-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <p className="text-sm italic">I</p>
                </EditorBubbleItem>
                <EditorBubbleItem
                  onSelect={(editor) => {
                    editor.chain().focus().toggleUnderline().run();
                  }}
                  className="p-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <p className="text-sm underline">U</p>
                </EditorBubbleItem>
                <EditorBubbleItem
                  onSelect={(editor) => {
                    editor.chain().focus().toggleStrike().run();
                  }}
                  className="p-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <p className="text-sm line-through">S</p>
                </EditorBubbleItem>
              </EditorBubble>
            </EditorContent>
          </EditorRoot>
        </div>
      </div>
    </div>
  );
}
