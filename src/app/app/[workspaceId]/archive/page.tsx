'use client';

import { useParams } from 'next/navigation';
import { Archive } from 'lucide-react';
import { ArchivedGuideList } from '@/components/app/archive/ArchivedGuideList';

export default function ArchivePage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  return (
    <div className="h-full w-full">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <Archive className="w-5 h-5 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Archive</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your archived guides
            </p>
          </div>
        </div>

        {/* Archived Guide List */}
        <ArchivedGuideList workspaceId={workspaceId} />
      </div>
    </div>
  );
}
