'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TemplatesView } from '@/app/app/views/TemplatesView';
import { Loader2, FileText } from 'lucide-react';

export default function GuidePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;
  const guideId = searchParams.get('id');

  const [userGuideId, setUserGuideId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch or create user_guide instance for this guide
  useEffect(() => {
    async function fetchOrCreateUserGuide() {
      if (!guideId) {
        setLoading(false);
        return;
      }

      try {
        // Check if user already has this guide in workspace
        const response = await fetch(`/api/user-guides?workspace_id=${workspaceId}&guide_id=${guideId}`);
        const data = await response.json();

        if (data.userGuides && data.userGuides.length > 0) {
          // Use existing user_guide
          setUserGuideId(data.userGuides[0].id);
        } else {
          // Create new user_guide instance
          const createResponse = await fetch('/api/user-guides', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              workspace_id: workspaceId,
              guide_id: guideId,
            }),
          });

          if (createResponse.ok) {
            const createData = await createResponse.json();
            setUserGuideId(createData.userGuide.id);
          }
        }
      } catch (error) {
        console.error('Error fetching/creating user guide:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrCreateUserGuide();
  }, [guideId, workspaceId]);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!guideId) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <div className="mb-4 flex justify-center">
            <FileText className="w-16 h-16 text-muted-foreground/40" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">No Guide Selected</h2>
          <p className="text-muted-foreground">
            Please select a guide from the sidebar or use the Discover view to find guides.
          </p>
        </div>
      </div>
    );
  }

  return (
    <TemplatesView
      workspaceId={workspaceId}
      userGuideId={userGuideId || undefined}
      defaultTemplateId={guideId}
    />
  );
}
