import { useState, useEffect } from 'react';

export interface TemplateUnlock {
  template_id: string;
  unlocked_at: string;
}

export interface UnlockData {
  tier: 'free' | 'pro';
  hasUnlimitedAccess: boolean;
  unlockedTemplates: string[];
  remainingUnlocks: number | null;
  unlocks?: TemplateUnlock[];
}

export function useTemplateUnlocks(userId: string | null) {
  const [unlockData, setUnlockData] = useState<UnlockData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUnlocks = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/user/unlocks?userId=${userId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch unlocks');
      }

      const data = await response.json();
      setUnlockData(data);
      setError(null);
    } catch (err) {
      console.error('[useTemplateUnlocks] Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch unlocks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnlocks();
  }, [userId]);

  const unlockTemplate = async (templateId: string) => {
    if (!userId) {
      throw new Error('User not authenticated');
    }

    try {
      const response = await fetch('/api/user/unlocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, templateId }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.requiresUpgrade) {
          throw new Error('UPGRADE_REQUIRED');
        }
        throw new Error(data.error || 'Failed to unlock template');
      }

      // Refresh unlock data
      await fetchUnlocks();
      return data;
    } catch (err) {
      console.error('[useTemplateUnlocks] Error unlocking:', err);
      throw err;
    }
  };

  const isTemplateUnlocked = (templateId: string): boolean => {
    if (!unlockData) return false;
    if (unlockData.hasUnlimitedAccess) return true;
    return unlockData.unlockedTemplates.includes(templateId);
  };

  const canUnlockMore = (): boolean => {
    if (!unlockData) return false;
    if (unlockData.hasUnlimitedAccess) return true;
    return (unlockData.remainingUnlocks || 0) > 0;
  };

  return {
    unlockData,
    loading,
    error,
    unlockTemplate,
    isTemplateUnlocked,
    canUnlockMore,
    refresh: fetchUnlocks
  };
}
