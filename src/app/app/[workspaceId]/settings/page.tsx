'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SettingsPage() {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.workspaceId as string;

  // Redirect to main settings page
  useEffect(() => {
    router.push('/app/settings');
  }, [router]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to settings...</p>
    </div>
  );
}
