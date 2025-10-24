'use client';

import { BookOpen, Clock, Check, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ReadingCardProps {
  id: string;
  title: string;
  description: string;
  guideName: string;
  readingTime: number;
  isRead: boolean;
  onToggleRead: (id: string, isRead: boolean) => void;
  onClick: () => void;
}

export function ReadingCard({
  id,
  title,
  description,
  guideName,
  readingTime,
  isRead,
  onToggleRead,
  onClick,
}: ReadingCardProps) {
  return (
    <div
      className="group rounded-lg border border-border/40 bg-background p-4 hover:border-[#6366f1]/40 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-xs text-muted-foreground">{guideName}</span>
          </div>

          <h3 className="font-semibold mb-1 group-hover:text-[#6366f1] transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{readingTime} min read</span>
            </div>

            {isRead && (
              <Badge variant="secondary" className="text-xs">
                <Check className="w-3 h-3 mr-1" />
                Read
              </Badge>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className={isRead ? 'text-green-600' : 'text-muted-foreground'}
          onClick={(e) => {
            e.stopPropagation();
            onToggleRead(id, !isRead);
          }}
        >
          {isRead ? (
            <Check className="w-4 h-4" />
          ) : (
            <Circle className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
