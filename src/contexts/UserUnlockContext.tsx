'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTemplateUnlocks, UnlockData } from '@/hooks/use-template-unlocks';

interface UserUnlockContextType {
  unlockData: UnlockData | null;
  loading: boolean;
  error: string | null;
  unlockTemplate: (templateId: string) => Promise<any>;
  isTemplateUnlocked: (templateId: string) => boolean;
  canUnlockMore: () => boolean;
  refresh: () => Promise<void>;
  userId: string | null;
  setUserId: (id: string | null) => void;
}

const UserUnlockContext = createContext<UserUnlockContextType | undefined>(undefined);

export function UserUnlockProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);

  const {
    unlockData,
    loading,
    error,
    unlockTemplate,
    isTemplateUnlocked,
    canUnlockMore,
    refresh
  } = useTemplateUnlocks(userId);

  // Load user ID from auth session on mount
  useEffect(() => {
    // TODO: Replace with actual auth integration (Supabase Auth)
    // For now, using localStorage for development
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Create temporary user for development
      const tempUserId = `temp-${Date.now()}`;
      localStorage.setItem('userId', tempUserId);
      setUserId(tempUserId);
    }
  }, []);

  return (
    <UserUnlockContext.Provider
      value={{
        unlockData,
        loading,
        error,
        unlockTemplate,
        isTemplateUnlocked,
        canUnlockMore,
        refresh,
        userId,
        setUserId
      }}
    >
      {children}
    </UserUnlockContext.Provider>
  );
}

export function useUserUnlocks() {
  const context = useContext(UserUnlockContext);
  if (context === undefined) {
    throw new Error('useUserUnlocks must be used within a UserUnlockProvider');
  }
  return context;
}
