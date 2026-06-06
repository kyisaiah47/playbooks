'use client';

import { useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Placeholder } from '@tiptap/extension-placeholder';

interface NotesEditorProps {
  playbookId: string;
}

export function NotesEditor({ playbookId }: NotesEditorProps) {

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: 'Start writing your notes here...' }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm prose-stone max-w-none focus:outline-none min-h-full p-5',
      },
    },
  });

  // Load notes
  useEffect(() => {
    fetch(`/api/playbooks/${playbookId}/notes`)
      .then(r => r.json())
      .then(data => {
        if (data.notes && editor) {
          editor.commands.setContent(data.notes);
        }
      });
  }, [playbookId, editor]);

  const save = useCallback(async () => {
    if (!editor) return;
    await fetch(`/api/playbooks/${playbookId}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes: editor.getHTML() }),
    });
  }, [editor, playbookId]);

  // Autosave — debounce 1.5s after last keystroke
  useEffect(() => {
    if (!editor) return;
    let timeout: ReturnType<typeof setTimeout>;
    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(save, 1500);
    };
    editor.on('update', handler);
    return () => { editor.off('update', handler); clearTimeout(timeout); };
  }, [editor, save]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
}
