'use client';

import { cn } from '@/lib/utils';

type SettingsSection = 'profile' | 'privacy' | 'data' | 'notifications' | 'appearance';

const sidebarItems = [
  { id: 'profile' as const, label: 'My Account' },
  { id: 'appearance' as const, label: 'Appearance' },
  { id: 'notifications' as const, label: 'Notifications' },
  { id: 'privacy' as const, label: 'Security' },
  { id: 'data' as const, label: 'Data' },
];

interface SettingsSidebarContentProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export function SettingsSidebarContent({ activeSection, onSectionChange }: SettingsSidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-2 border-b border-border/40">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Settings</h3>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        <div className="space-y-0.5">
          {sidebarItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                type="button"
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSectionChange(item.id);
                }}
                className={cn(
                  "w-full flex items-center gap-2 px-2 py-2 rounded text-sm transition-colors hover:bg-muted/50",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground"
                )}
              >
                <div className="flex-1 min-w-0 text-left">
                  <div className="font-medium break-words text-sm">
                    {item.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
