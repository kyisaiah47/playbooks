'use client';

import { CalendarEvent } from '@/types/workspace';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Calendar, Trash2, X } from 'lucide-react';
import { format } from 'date-fns';

interface EventDetailDrawerProps {
  event: CalendarEvent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete?: (eventId: string) => void;
}

export function EventDetailDrawer({
  event,
  open,
  onOpenChange,
  onDelete,
}: EventDetailDrawerProps) {
  if (!event) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>{event.title}</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Date */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-5 w-5 text-[#6366f1]" />
            </div>
            <div>
              <div className="text-sm font-medium">Date</div>
              <div className="text-sm text-muted-foreground">
                {format(new Date(event.date), 'EEEE, MMMM d, yyyy')}
              </div>
            </div>
          </div>

          {/* Description */}
          {event.description && (
            <div>
              <div className="text-sm font-medium mb-2">Description</div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-2">
          {onDelete && (
            <Button
              variant="destructive"
              onClick={() => {
                onDelete(event.id);
                onOpenChange(false);
              }}
              className="flex-1"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Event
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
