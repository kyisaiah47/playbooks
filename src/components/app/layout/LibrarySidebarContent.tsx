'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BookOpen, Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Reading {
  id: string;
  title: string;
  guide_id: string;
  guide_name: string;
  reading_time: number;
}

interface ReadingProgress {
  id: string;
  guide_section_id: string;
  completed_at: string;
}

interface LibrarySidebarContentProps {
  selectedReadingId: string | null;
  onReadingClick: (readingId: string) => void;
}

export function LibrarySidebarContent({ selectedReadingId, onReadingClick }: LibrarySidebarContentProps) {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  const [readings, setReadings] = useState<Reading[]>([]);
  const [progress, setProgress] = useState<ReadingProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch readings
        const readingsResponse = await fetch(`/api/readings?workspace_id=${workspaceId}`);
        const readingsData = await readingsResponse.json();
        setReadings(readingsData.readings || []);

        // Fetch progress
        const progressResponse = await fetch('/api/reading-progress');
        const progressData = await progressResponse.json();
        setProgress(progressData.progress || []);
      } catch (error) {
        console.error('Error fetching library data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [workspaceId]);

  const progressMap = new Map(progress.map((p) => [p.guide_section_id, p]));

  const filteredReadings = readings.filter(reading =>
    reading.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reading.guide_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group readings by guide
  const readingsByGuide = filteredReadings.reduce((acc, reading) => {
    if (!acc[reading.guide_id]) {
      acc[reading.guide_id] = {
        name: reading.guide_name,
        readings: [],
      };
    }
    acc[reading.guide_id].readings.push(reading);
    return acc;
  }, {} as Record<string, { name: string; readings: Reading[] }>);

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-3 py-2 border-b border-border/40">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="Search readings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-7 pr-2 bg-transparent border border-border/40 rounded text-[11px] focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Readings List */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {loading ? (
          <motion.div
            className="flex items-center justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </motion.div>
        ) : filteredReadings.length === 0 ? (
          <motion.div
            className="text-center py-8 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              {searchQuery ? 'No readings found' : 'No readings available'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={filteredReadings.length}
            className="space-y-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {Object.entries(readingsByGuide).map(([guideId, { name, readings: guideReadings }]) => (
              <motion.div
                key={guideId}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  {name}
                </h3>
                <div className="space-y-0.5">
                  {guideReadings.map((reading) => (
                    <motion.button
                      key={reading.id}
                      onClick={() => onReadingClick(reading.id)}
                      className={cn(
                        "w-full text-left px-2 py-2 rounded transition-colors flex items-center gap-2",
                        selectedReadingId === reading.id
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-muted/50 text-foreground'
                      )}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BookOpen className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1 truncate text-sm font-medium">{reading.title}</span>
                      {progressMap.has(reading.id) && (
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
