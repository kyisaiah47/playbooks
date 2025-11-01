'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FileText, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewNotePopoverProps {
  onCreateBlankNote: () => void;
  onCreateGuidedNote: () => void;
  children: React.ReactNode;
}

export function NewNotePopover({ onCreateBlankNote, onCreateGuidedNote, children }: NewNotePopoverProps) {
  const [open, setOpen] = useState(false);

  const handleBlankNote = () => {
    setOpen(false);
    onCreateBlankNote();
  };

  const handleGuidedNote = () => {
    setOpen(false);
    onCreateGuidedNote();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-2" align="start">
        <div className="space-y-1">
          <motion.button
            onClick={handleBlankNote}
            className={cn(
              "w-full flex items-start gap-3 p-3 rounded-lg",
              "hover:bg-muted/50 transition-colors text-left"
            )}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm mb-0.5">Blank Note</div>
              <div className="text-xs text-muted-foreground">
                Start with an empty note and write freely
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={handleGuidedNote}
            className={cn(
              "w-full flex items-start gap-3 p-3 rounded-lg",
              "hover:bg-muted/50 transition-colors text-left"
            )}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm mb-0.5">Guided Note</div>
              <div className="text-xs text-muted-foreground">
                Use a guide template with questions and resources
              </div>
            </div>
          </motion.button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
