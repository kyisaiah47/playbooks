'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string | null;
}

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  archived: boolean;
  created_at: string;
  guides: Guide;
}

interface CacheState {
  tracks: Track[] | null;
  guides: Guide[] | null;
  lastFetch: {
    tracks: number | null;
    guides: number | null;
  };
}

interface DataCacheContextType {
  tracks: Track[] | null;
  guides: Guide[] | null;
  fetchTracks: (force?: boolean) => Promise<Track[]>;
  fetchGuides: (force?: boolean) => Promise<Guide[]>;
  invalidateTracks: () => void;
  invalidateGuides: () => void;
  invalidateAll: () => void;
}

const DataCacheContext = createContext<DataCacheContextType | undefined>(undefined);

const CACHE_KEY = 'templata_data_cache';
const CACHE_DURATION = Infinity; // Cache for entire session (cleared on tab close or logout)

export function DataCacheProvider({ children }: { children: React.ReactNode }) {
  const [cache, setCache] = useState<CacheState>(() => {
    // Try to load from sessionStorage on initial mount
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem(CACHE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          // Check if cache is still valid (within 5 minutes)
          const now = Date.now();
          const tracksValid = parsed.lastFetch.tracks && (now - parsed.lastFetch.tracks < CACHE_DURATION);
          const guidesValid = parsed.lastFetch.guides && (now - parsed.lastFetch.guides < CACHE_DURATION);

          return {
            tracks: tracksValid ? parsed.tracks : null,
            guides: guidesValid ? parsed.guides : null,
            lastFetch: {
              tracks: tracksValid ? parsed.lastFetch.tracks : null,
              guides: guidesValid ? parsed.lastFetch.guides : null,
            },
          };
        }
      } catch (e) {
        console.error('Failed to load cache from sessionStorage:', e);
      }
    }
    return {
      tracks: null,
      guides: null,
      lastFetch: { tracks: null, guides: null },
    };
  });

  // Use ref to access latest cache without causing re-renders
  const cacheRef = useRef(cache);
  useEffect(() => {
    cacheRef.current = cache;
  }, [cache]);

  // Save to sessionStorage whenever cache changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch (e) {
        console.error('Failed to save cache to sessionStorage:', e);
      }
    }
  }, [cache]);

  const fetchTracks = useCallback(async (force = false): Promise<Track[]> => {
    const currentCache = cacheRef.current;

    // Return cached data if available and not forcing refresh
    if (!force && currentCache.tracks && currentCache.lastFetch.tracks) {
      const age = Date.now() - currentCache.lastFetch.tracks;
      if (age < CACHE_DURATION) {
        return currentCache.tracks;
      }
    }

    try {
      const res = await fetch('/api/tracks?archived=false');
      if (!res.ok) {
        throw new Error('Failed to fetch tracks');
      }
      const data = await res.json();
      const tracks = data.tracks || [];

      setCache(prev => ({
        ...prev,
        tracks,
        lastFetch: { ...prev.lastFetch, tracks: Date.now() },
      }));

      return tracks;
    } catch (error) {
      console.error('Error fetching tracks:', error);
      // Return cached data if fetch fails
      return currentCache.tracks || [];
    }
  }, []); // No dependencies - stable function

  const fetchGuides = useCallback(async (force = false): Promise<Guide[]> => {
    const currentCache = cacheRef.current;

    // Return cached data if available and not forcing refresh
    if (!force && currentCache.guides && currentCache.lastFetch.guides) {
      const age = Date.now() - currentCache.lastFetch.guides;
      if (age < CACHE_DURATION) {
        return currentCache.guides;
      }
    }

    try {
      const res = await fetch('/api/guides?all=true');
      if (!res.ok) {
        throw new Error('Failed to fetch guides');
      }
      const data = await res.json();
      const guides = data.guides || [];

      setCache(prev => ({
        ...prev,
        guides,
        lastFetch: { ...prev.lastFetch, guides: Date.now() },
      }));

      return guides;
    } catch (error) {
      console.error('Error fetching guides:', error);
      // Return cached data if fetch fails
      return currentCache.guides || [];
    }
  }, []); // No dependencies - stable function

  const invalidateTracks = useCallback(() => {
    setCache(prev => ({
      ...prev,
      tracks: null,
      lastFetch: { ...prev.lastFetch, tracks: null },
    }));
  }, []);

  const invalidateGuides = useCallback(() => {
    setCache(prev => ({
      ...prev,
      guides: null,
      lastFetch: { ...prev.lastFetch, guides: null },
    }));
  }, []);

  const invalidateAll = useCallback(() => {
    setCache({
      tracks: null,
      guides: null,
      lastFetch: { tracks: null, guides: null },
    });
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(CACHE_KEY);
    }
  }, []);

  return (
    <DataCacheContext.Provider
      value={{
        tracks: cache.tracks,
        guides: cache.guides,
        fetchTracks,
        fetchGuides,
        invalidateTracks,
        invalidateGuides,
        invalidateAll,
      }}
    >
      {children}
    </DataCacheContext.Provider>
  );
}

export function useDataCache() {
  const context = useContext(DataCacheContext);
  if (!context) {
    throw new Error('useDataCache must be used within DataCacheProvider');
  }
  return context;
}
