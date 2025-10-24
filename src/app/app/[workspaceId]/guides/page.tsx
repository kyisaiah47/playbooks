'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TemplatesView } from '@/app/app/views/TemplatesView';
import { Loader2 } from 'lucide-react';

export default function GuidesPage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  const [userGuides, setUserGuides] = useState<any[]>([]);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user guides for this workspace
  useEffect(() => {
    async function fetchUserGuides() {
      try {
        const response = await fetch(`/api/user-guides?workspace_id=${workspaceId}`);
        if (!response.ok) throw new Error('Failed to fetch user guides');

        const data = await response.json();
        setUserGuides(data.userGuides || []);

        // Auto-select first guide if available
        if (data.userGuides && data.userGuides.length > 0) {
          setSelectedGuideId(data.userGuides[0].id);
        }
      } catch (error) {
        console.error('Error fetching user guides:', error);
      } finally {
        setLoading(false);
      }
    }

    if (workspaceId) {
      fetchUserGuides();
    }
  }, [workspaceId]);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // If no guides, show empty state
  if (userGuides.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-foreground">No Guides Yet</h2>
          <p className="text-muted-foreground">
            You haven't added any guides to this workspace yet. Head to the Discover view to browse and add guides.
          </p>
        </div>
      </div>
    );
  }

  const selectedUserGuide = userGuides.find(ug => ug.id === selectedGuideId);

  return (
    <TemplatesView
      workspaceId={workspaceId}
      userGuideId={selectedGuideId || undefined}
      defaultTemplateId={selectedUserGuide?.guide_id}
    />
  );
}
