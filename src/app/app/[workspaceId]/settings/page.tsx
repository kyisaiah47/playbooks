'use client';

import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="h-full w-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <Settings className="w-5 h-5 text-[#6366f1]" />
          </div>
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        <p className="text-muted-foreground">
          This view is under development.
        </p>
      </div>
    </div>
  );
}
