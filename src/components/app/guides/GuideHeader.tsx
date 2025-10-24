'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Smile, Image as ImageIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface GuideHeaderProps {
  guideName: string;
  guideIcon?: string | null;
  coverImage?: string | null;
  progress?: number;
  onIconChange?: (icon: string) => void;
  onCoverChange?: (coverUrl: string) => void;
}

const EMOJI_OPTIONS = [
  '📚', '📖', '✨', '🎯', '🚀', '💡', '🎓', '🌟',
  '💪', '🎨', '🏆', '🌈', '🔥', '💎', '🎭', '🎪',
  '🎸', '🎹', '🎨', '🎬', '📝', '✍️', '📓', '📔',
];

export function GuideHeader({
  guideName,
  guideIcon,
  coverImage,
  progress = 0,
  onIconChange,
  onCoverChange,
}: GuideHeaderProps) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  return (
    <div className="border-b bg-background">
      {/* Cover Image */}
      {coverImage && (
        <div className="h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 relative">
          <img
            src={coverImage}
            alt="Guide cover"
            className="w-full h-full object-cover"
          />
          {onCoverChange && (
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-3 right-3"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Change Cover
            </Button>
          )}
        </div>
      )}

      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-start gap-4">
          {/* Icon Picker */}
          <Popover open={emojiPickerOpen} onOpenChange={setEmojiPickerOpen}>
            <PopoverTrigger asChild>
              <button
                className={`text-5xl hover:bg-muted/50 rounded-lg p-2 transition-colors ${
                  onIconChange ? 'cursor-pointer' : 'cursor-default'
                }`}
                disabled={!onIconChange}
              >
                {guideIcon || '📚'}
              </button>
            </PopoverTrigger>
            {onIconChange && (
              <PopoverContent className="w-72">
                <div className="grid grid-cols-8 gap-2">
                  {EMOJI_OPTIONS.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => {
                        onIconChange(emoji);
                        setEmojiPickerOpen(false);
                      }}
                      className="text-2xl hover:bg-muted rounded p-2 transition-colors"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>

          {/* Title and Progress */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-foreground mb-2 truncate">
              {guideName}
            </h1>

            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <Progress value={progress} className="flex-1 max-w-md" />
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {progress}% complete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
