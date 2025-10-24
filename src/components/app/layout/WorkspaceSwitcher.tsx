'use client';

import { Check, ChevronsUpDown, Plus, Folder } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { Workspace } from '@/types/workspace';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { CreateWorkspaceModal } from './CreateWorkspaceModal';

// Helper to get Lucide icon component by name
function getLucideIcon(iconName: string | null) {
  if (!iconName) return Folder;
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent || Folder;
}

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
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const currentWorkspace = workspaces.find(w => w.id === currentWorkspaceId);
  const CurrentIcon = getLucideIcon(currentWorkspace?.icon);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between gap-2 px-2 h-8"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <CurrentIcon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            <span className="font-medium text-[11px] truncate">
              {currentWorkspace?.name || 'Select workspace'}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto h-3 w-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="start">
        <div className="space-y-1">
          <div className="px-2 py-1 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
            Workspaces
          </div>

          {/* Workspace List */}
          <div className="space-y-0.5">
            {workspaces.map((workspace) => {
              const isSelected = workspace.id === currentWorkspaceId;
              const count = pageCount[workspace.id] || 0;
              const WorkspaceIcon = getLucideIcon(workspace.icon);

              return (
                <button
                  key={workspace.id}
                  onClick={() => {
                    onWorkspaceChange(workspace.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-1.5 rounded px-2 py-1.5 transition-colors",
                    isSelected
                      ? "bg-[#6366f1]/10 text-[#6366f1]"
                      : "hover:bg-muted/50"
                  )}
                >
                  <WorkspaceIcon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-medium truncate text-[11px]">{workspace.name}</div>
                    {count > 0 && (
                      <div className="text-[10px] text-muted-foreground">
                        {count} {count === 1 ? 'page' : 'pages'}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="ml-auto h-3.5 w-3.5 shrink-0" />
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
              setOpen(false);
              setCreateModalOpen(true);
            }}
            className="w-full flex items-center gap-1.5 rounded px-2 py-1.5 hover:bg-muted/50 transition-colors"
          >
            <div className="w-3.5 h-3.5 rounded border-2 border-dashed border-muted-foreground/40 flex items-center justify-center shrink-0">
              <Plus className="w-2.5 h-2.5 text-muted-foreground" />
            </div>
            <span className="font-medium text-[11px]">New Workspace</span>
          </button>
        </div>
      </PopoverContent>

      <CreateWorkspaceModal open={createModalOpen} onOpenChange={setCreateModalOpen} />
    </Popover>
  );
}
