'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { ReadingList } from '@/components/app/library/ReadingList';

export default function LibraryPage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  return (
    <div className="h-full w-full">
      <ReadingList workspaceId={workspaceId} />
    </div>
  );
}
