'use client';

import { Settings, User, Palette, Bell, Shield, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

type SettingsSection = 'profile' | 'appearance' | 'notifications' | 'privacy' | 'data';

interface SettingsSidebarContentProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export function SettingsSidebarContent({ activeSection, onSectionChange }: SettingsSidebarContentProps) {
  const settingsCategories: Array<{
    id: SettingsSection;
    icon: typeof User;
    title: string;
    description: string;
  }> = [
    {
      id: 'profile',
      icon: User,
      title: 'Profile',
      description: 'Personal information'
    },
    {
      id: 'appearance',
      icon: Palette,
      title: 'Appearance',
      description: 'Theme and display'
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Notifications',
      description: 'Email and alerts'
    },
    {
      id: 'privacy',
      icon: Shield,
      title: 'Privacy',
      description: 'Security settings'
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data',
      description: 'Export and delete'
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-3 border-b border-border/40">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Settings</h3>
        </div>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-y-auto px-2 py-3">
        <div className="space-y-1">
          {settingsCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSectionChange(category.id)}
              className={cn(
                "w-full flex items-start gap-2.5 px-2 py-2.5 rounded transition-colors text-left",
                activeSection === category.id
                  ? "bg-primary/10"
                  : "hover:bg-muted/30"
              )}
            >
              <category.icon className={cn(
                "w-4 h-4 flex-shrink-0 mt-0.5",
                activeSection === category.id ? "text-primary" : "text-muted-foreground"
              )} />
              <div className="flex-1 min-w-0">
                <div className={cn(
                  "text-sm font-medium",
                  activeSection === category.id ? "text-primary" : "text-foreground"
                )}>{category.title}</div>
                <div className="text-xs text-muted-foreground">{category.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
