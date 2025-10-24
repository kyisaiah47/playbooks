'use client';

import { useState, useEffect } from 'react';
import { FileText, Sparkles, ChevronRight, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Guide {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface GettingStartedWizardProps {
  workspaceId: string;
  onCreateBlank: () => void;
  onSelectGuide: (guideId: string) => void;
}

export function GettingStartedWizard({
  workspaceId,
  onCreateBlank,
  onSelectGuide,
}: GettingStartedWizardProps) {
  const [showGuideDialog, setShowGuideDialog] = useState(false);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch guides when dialog opens
  useEffect(() => {
    if (!showGuideDialog) return;

    async function fetchGuides() {
      try {
        setLoading(true);
        const res = await fetch('/api/guides');
        const data = await res.json();
        setGuides(data.guides || []);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, [showGuideDialog]);

  const filteredGuides = guides.filter(guide =>
    guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Workspace</h1>
          <p className="text-lg text-muted-foreground">
            Create your first note to get started
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blank Note */}
          <button
            onClick={onCreateBlank}
            className={cn(
              "group relative p-8 rounded-lg border-2 border-border",
              "hover:border-[#6366f1] hover:bg-[#6366f1]/5",
              "transition-all duration-200",
              "text-left"
            )}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted/50 group-hover:bg-[#6366f1]/10 flex items-center justify-center transition-colors">
                <FileText className="w-6 h-6 text-muted-foreground group-hover:text-[#6366f1] transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Start from Blank</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create an empty note and build it from scratch, just like Notion.
            </p>
            <div className="flex items-center text-sm font-medium text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity">
              Create blank note
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>

          {/* Guided Template */}
          <button
            onClick={() => setShowGuideDialog(true)}
            className={cn(
              "group relative p-8 rounded-lg border-2 border-border",
              "hover:border-[#6366f1] hover:bg-[#6366f1]/5",
              "transition-all duration-200",
              "text-left"
            )}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted/50 group-hover:bg-[#6366f1]/10 flex items-center justify-center transition-colors">
                <Sparkles className="w-6 h-6 text-muted-foreground group-hover:text-[#6366f1] transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Use a Guide Template</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get started quickly with a structured template from our guide library.
            </p>
            <div className="flex items-center text-sm font-medium text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity">
              Choose a template
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            You can always create more notes from the sidebar
          </p>
        </div>
      </div>

      {/* Guide Selection Dialog */}
      <Dialog open={showGuideDialog} onOpenChange={setShowGuideDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Choose a Guide Template</DialogTitle>
          </DialogHeader>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Guides List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            {loading ? (
              <div className="text-center py-12 text-muted-foreground text-sm">
                Loading guides...
              </div>
            ) : filteredGuides.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground text-sm">
                No guides found
              </div>
            ) : (
              filteredGuides.map((guide) => (
                <button
                  key={guide.id}
                  onClick={() => {
                    onSelectGuide(guide.id);
                    setShowGuideDialog(false);
                  }}
                  className="w-full p-4 rounded-lg border border-border hover:border-[#6366f1] hover:bg-[#6366f1]/5 transition-colors text-left"
                >
                  <h4 className="font-medium mb-1">{guide.name}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {guide.description}
                  </p>
                  <div className="mt-2">
                    <span className="text-xs text-muted-foreground">{guide.category}</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
