'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { BarChart3, Loader2, Calendar, CheckSquare, Trash2, X } from 'lucide-react';
import { GanttView } from '@/components/app/timeline/GanttView';
import { Item, CalendarEvent, Task } from '@/types/workspace';
import { startOfMonth, endOfMonth, format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function TimelinePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [allItems, setAllItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ item: CalendarEvent | Task; type: 'event' | 'task' } | null>(null);

  // Get selected note IDs from URL, fallback to localStorage if URL is empty
  // If note-scoped mode is active, only show data for that single note
  const scopedNoteId = searchParams.get('scopedNoteId');
  const urlIds = searchParams.get('timelineNotes')?.split(',').filter(Boolean);
  const localStorageIds = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('selectedTimelineNoteIds') || '[]')
    : [];
  const selectedNoteIds = scopedNoteId
    ? [scopedNoteId]
    : (urlIds && urlIds.length > 0 ? urlIds : localStorageIds);

  // Filter items by selected notes, or show all in demo mode
  const filteredItems = selectedNoteIds.length > 0
    ? allItems.filter(item => item.user_guide_id && selectedNoteIds.includes(item.user_guide_id))
    : (demoMode ? allItems : []);

  // Separate events (items with start_time) from tasks (items with due_date but no start_time)
  const events = filteredItems.filter(item => item.start_time);
  const tasks = filteredItems.filter(item => item.due_date && !item.start_time);

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch items
      const itemsResponse = await fetch('/api/items');
      if (!itemsResponse.ok) throw new Error('Failed to fetch items');
      const itemsData = await itemsResponse.json();
      setAllItems(itemsData.items || []);
    } catch (err) {
      console.error('Error fetching timeline data:', err);
      setError('Failed to load timeline data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleItemClick = (item: CalendarEvent | Task, type: 'event' | 'task') => {
    setSelectedItem({ item, type });
  };

  const handleDeleteItem = async (itemId: string) => {
    if (demoMode) {
      toast.info('Not available in demo mode');
      return;
    }

    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      toast.success('Item deleted successfully');
      setSelectedItem(null);
      fetchData();
    } catch (err) {
      console.error('Error deleting item:', err);
      toast.error('Failed to delete item');
    }
  };

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Timeline</h1>
            <p className="text-xs text-muted-foreground">Visualize your active guides</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {loading ? (
          <motion.div
            className="flex items-center justify-center h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </motion.div>
        ) : error ? (
          <motion.div
            className="flex items-center justify-center h-96 text-destructive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{error}</p>
          </motion.div>
        ) : selectedNoteIds.length === 0 && !demoMode ? (
          <motion.div
            className="flex flex-col items-center justify-center h-96 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BarChart3 className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No notes selected</p>
            <p className="text-sm">Select notes from the sidebar to see your timeline</p>
          </motion.div>
        ) : filteredItems.length === 0 && selectedNoteIds.length > 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center h-96 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BarChart3 className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No data found</p>
            <p className="text-sm">The selected notes don't have any timeline data yet</p>
          </motion.div>
        ) : (
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GanttView events={events} tasks={tasks} onItemClick={handleItemClick} />
          </motion.div>
        )}
      </div>

      {/* Item Details Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedItem?.type === 'event' ? 'Event Details' : 'Task Details'}
            </DialogTitle>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold mb-2">{selectedItem.item.title}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {selectedItem.type === 'event' ? (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>
                        {selectedItem.item.start_time
                          ? format(new Date(selectedItem.item.start_time), 'EEEE, MMMM d, yyyy')
                          : 'No date set'}
                      </span>
                    </>
                  ) : (
                    <>
                      <CheckSquare className="w-4 h-4" />
                      <span>
                        Due: {selectedItem.item.due_date
                          ? format(new Date(selectedItem.item.due_date), 'EEEE, MMMM d, yyyy')
                          : 'No due date'}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {selectedItem.item.description && (
                <div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedItem.item.description}
                  </p>
                </div>
              )}

              {selectedItem.type === 'task' && 'status' in selectedItem.item && (
                <div>
                  <span className="text-xs font-medium text-muted-foreground">Status: </span>
                  <span className={`text-xs font-medium ${
                    selectedItem.item.status === 'done'
                      ? 'text-green-600'
                      : selectedItem.item.status === 'in_progress'
                        ? 'text-blue-600'
                        : 'text-orange-500'
                  }`}>
                    {selectedItem.item.status === 'done'
                      ? 'Done'
                      : selectedItem.item.status === 'in_progress'
                        ? 'In Progress'
                        : 'To Do'}
                  </span>
                </div>
              )}

              <div className="pt-2 border-t">
                <button
                  onClick={() => handleDeleteItem(selectedItem.item.id)}
                  className="text-sm text-destructive hover:text-destructive/80 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete {selectedItem.type === 'event' ? 'Event' : 'Task'}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
