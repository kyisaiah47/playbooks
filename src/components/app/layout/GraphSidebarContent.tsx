'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Network, Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserGuide {
  id: string;
  guide_id: string;
  progress: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
  custom_name: string | null;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  };
}

interface GraphSidebarContentProps {
  selectedGuideIds: Set<string>;
  onGuideToggle: (guideId: string) => void;
}

export function GraphSidebarContent({ selectedGuideIds, onGuideToggle }: GraphSidebarContentProps) {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  const [guides, setGuides] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchGuides() {
      try {
        setLoading(true);
        const guidesResponse = await fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`);
        const guidesData = await guidesResponse.json();
        setGuides(guidesData.userGuides || []);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, [workspaceId]);

  const filteredGuides = guides.filter(guide =>
    (guide.custom_name || guide.guides.name).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-3 py-2 border-b border-border/40">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-7 pr-2 bg-transparent border border-border/40 rounded text-[11px] focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Guides List */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        ) : filteredGuides.length === 0 ? (
          <div className="text-center py-8 px-2">
            <p className="text-[11px] text-muted-foreground">
              {searchQuery ? 'No guides found' : 'No guides yet'}
            </p>
          </div>
        ) : (
          <div className="space-y-0.5">
            {filteredGuides.map((guide) => {
              const isSelected = selectedGuideIds.has(guide.id);
              const displayName = guide.custom_name || guide.guides.name;

              return (
                <button
                  key={guide.id}
                  onClick={() => onGuideToggle(guide.id)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors group hover:bg-muted/50"
                  )}
                >
                  <div className={cn(
                    "h-3.5 w-3.5 rounded border flex items-center justify-center flex-shrink-0 transition-colors",
                    isSelected
                      ? "bg-[#6366f1] border-[#6366f1]"
                      : "border-muted-foreground/40"
                  )}>
                    {isSelected && (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-normal text-foreground break-words text-[11px]">
                      {displayName}
                    </div>
                    <div className="text-[10px] text-muted-foreground/70">
                      {guide.progress}% complete
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Info Text */}
      <div className="p-3 border-t border-border/40">
        <p className="text-[10px] text-muted-foreground">
          Toggle guides to show in graph
        </p>
      </div>
    </div>
  );
}
