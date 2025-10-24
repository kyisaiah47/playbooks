'use client';

import { Check, ChevronsUpDown, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Workspace } from '@/types/workspace';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

interface WorkspaceSwitcherProps {
  workspaces: Workspace[];
  currentWorkspaceId: string;
  onWorkspaceChange: (workspaceId: string) => void;
  pageCount?: Record<string, number>; // Optional: map of workspace ID to page count
}

export function WorkspaceSwitcher({
  workspaces,
  currentWorkspaceId,
  onWorkspaceChange,
  pageCount = {},
}: WorkspaceSwitcherProps) {
  const [open, setOpen] = useState(false);

  const currentWorkspace = workspaces.find(w => w.id === currentWorkspaceId);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between gap-2 px-2"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg shrink-0">
              {currentWorkspace?.icon || '📁'}
            </span>
            <span className="font-medium text-sm truncate">
              {currentWorkspace?.name || 'Select workspace'}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2" align="start">
        <div className="space-y-1">
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Workspaces
          </div>

          {/* Workspace List */}
          <div className="space-y-0.5">
            {workspaces.map((workspace) => {
              const isSelected = workspace.id === currentWorkspaceId;
              const count = pageCount[workspace.id] || 0;

              return (
                <button
                  key={workspace.id}
                  onClick={() => {
                    onWorkspaceChange(workspace.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 rounded px-2 py-2 text-sm transition-colors",
                    isSelected
                      ? "bg-[#6366f1]/10 text-[#6366f1]"
                      : "hover:bg-muted/50"
                  )}
                >
                  <span className="text-lg shrink-0">{workspace.icon || '📁'}</span>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-medium truncate">{workspace.name}</div>
                    {count > 0 && (
                      <div className="text-xs text-muted-foreground">
                        {count} {count === 1 ? 'page' : 'pages'}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="ml-auto h-4 w-4 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-1" />

          {/* New Workspace Button */}
          <button
            onClick={() => {
              // Handle new workspace creation
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-muted/50 transition-colors"
          >
            <div className="w-[1.125rem] h-[1.125rem] rounded border-2 border-dashed border-muted-foreground/40 flex items-center justify-center shrink-0">
              <Plus className="w-3 h-3 text-muted-foreground" />
            </div>
            <span className="font-medium">New Workspace</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
