'use client';

import { Settings, User, Palette, Bell, Shield, HelpCircle } from 'lucide-react';

export function SettingsSidebarContent() {
  const settingsCategories = [
    {
      icon: User,
      title: 'Profile',
      description: 'Personal information'
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Theme and display'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Email and alerts'
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Data and security'
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
            <div
              key={category.title}
              className="flex items-start gap-2.5 px-2 py-2.5 rounded hover:bg-muted/30 transition-colors"
            >
              <category.icon className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground">{category.title}</div>
                <div className="text-xs text-muted-foreground">{category.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="p-3 border-t border-border/40">
        <div className="flex items-start gap-2 px-2 py-2 rounded hover:bg-muted/30 transition-colors cursor-pointer">
          <HelpCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground">Help & Support</div>
            <div className="text-xs text-muted-foreground">Get help with settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
