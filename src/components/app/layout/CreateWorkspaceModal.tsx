'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  X,
  BookOpen,
  Heart,
  Star,
  Coffee,
  Home,
  User,
  Calendar,
  Briefcase,
  Database,
  Settings,
  Folder,
  Sparkles,
  Rocket,
  Globe,
  Compass,
  Mountain,
  Waves,
  Sun,
  Moon,
  Book,
  Trophy,
  Diamond,
  Leaf,
  Gamepad2,
  PartyPopper,
  Plane,
  Car,
  Ship,
} from 'lucide-react';

interface CreateWorkspaceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ICON_OPTIONS = [
  { name: 'Folder', component: Folder },
  { name: 'Briefcase', component: Briefcase },
  { name: 'BookOpen', component: BookOpen },
  { name: 'Home', component: Home },
  { name: 'Rocket', component: Rocket },
  { name: 'Star', component: Star },
  { name: 'Heart', component: Heart },
  { name: 'Coffee', component: Coffee },
  { name: 'Trophy', component: Trophy },
  { name: 'Diamond', component: Diamond },
  { name: 'Sparkles', component: Sparkles },
  { name: 'Globe', component: Globe },
  { name: 'Compass', component: Compass },
  { name: 'Mountain', component: Mountain },
  { name: 'Waves', component: Waves },
  { name: 'Sun', component: Sun },
  { name: 'Moon', component: Moon },
  { name: 'Book', component: Book },
  { name: 'Leaf', component: Leaf },
  { name: 'Gamepad2', component: Gamepad2 },
  { name: 'PartyPopper', component: PartyPopper },
  { name: 'Plane', component: Plane },
  { name: 'Car', component: Car },
  { name: 'Ship', component: Ship },
  { name: 'Database', component: Database },
  { name: 'Settings', component: Settings },
  { name: 'User', component: User },
  { name: 'Calendar', component: Calendar },
];

export function CreateWorkspaceModal({ open, onOpenChange }: CreateWorkspaceModalProps) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('Folder');
  const [iconSearch, setIconSearch] = useState('');
  const [creating, setCreating] = useState(false);

  const filteredIcons = iconSearch.trim()
    ? ICON_OPTIONS.filter(icon =>
        icon.name.toLowerCase().includes(iconSearch.toLowerCase())
      )
    : ICON_OPTIONS;

  const handleCreate = async () => {
    if (!name.trim()) return;

    try {
      setCreating(true);
      const response = await fetch('/api/workspaces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          icon: selectedIcon,
        }),
      });

      if (!response.ok) throw new Error('Failed to create workspace');

      const data = await response.json();
      onOpenChange(false);
      router.push(`/app/${data.workspace.id}`);
      router.refresh();

      // Reset form
      setName('');
      setSelectedIcon('📁');
    } catch (error) {
      console.error('Error creating workspace:', error);
    } finally {
      setCreating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-md p-0 gap-0 overflow-hidden" showCloseButton={false}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between">
          <DialogTitle className="text-lg font-semibold">Create Workspace</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Icon Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Icon
            </label>
            <Input
              type="text"
              placeholder="Search icons..."
              value={iconSearch}
              onChange={(e) => setIconSearch(e.target.value)}
              className="h-8 text-sm mb-2"
            />
            <div className="grid grid-cols-7 gap-2 max-h-48 overflow-y-auto border border-border/40 rounded-md p-2">
              {filteredIcons.map((icon) => {
                const Icon = icon.component;
                return (
                  <button
                    key={icon.name}
                    onClick={() => setSelectedIcon(icon.name)}
                    className={`
                      h-10 w-10 rounded-md border-2 transition-all flex items-center justify-center
                      ${selectedIcon === icon.name
                        ? 'border-foreground bg-muted'
                        : 'border-border/40 hover:border-foreground/40 hover:bg-muted/50'
                      }
                    `}
                    title={icon.name}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
            {filteredIcons.length === 0 && (
              <p className="text-xs text-muted-foreground text-center py-4">
                No icons found
              </p>
            )}
          </div>

          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Workspace Name
            </label>
            <input
              type="text"
              placeholder="My Workspace"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && name.trim()) {
                  handleCreate();
                }
              }}
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
              autoFocus
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/40 flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
            disabled={creating}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleCreate}
            disabled={!name.trim() || creating}
          >
            {creating ? 'Creating...' : 'Create Workspace'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
