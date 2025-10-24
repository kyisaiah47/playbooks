'use client';

import { useParams } from 'next/navigation';
import { LayoutDashboard, Library, ListTodo, Calendar, PenLine } from 'lucide-react';

export default function OverviewPage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Overview</h1>
            <p className="text-xs text-muted-foreground">Your workspace dashboard</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <h2 className="text-xl font-semibold mb-2">Welcome to your workspace</h2>
            <p className="text-muted-foreground">
              This is your overview dashboard. More features will be added here soon.
            </p>
          </div>

          {/* Stats Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Active Guides', value: '0', icon: Library },
              { label: 'Tasks', value: '0', icon: ListTodo },
              { label: 'Calendar Events', value: '0', icon: Calendar },
              { label: 'Journal Entries', value: '0', icon: PenLine },
            ].map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/40 bg-background p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              );
            })}
          </div>

          {/* Recent Activity Placeholder */}
          <div className="rounded-lg border border-border/40 bg-background p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="text-sm text-muted-foreground text-center py-8">
              No recent activity yet. Start by creating some pages or adding guides!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
