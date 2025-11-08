'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string | null;
  hasContent?: boolean;
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

interface Question {
  id: string;
  question: string;
  categoryName: string;
}

interface Reading {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
}

interface Item {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'done';
  due_date: string | null;
  start_time: string | null;
  end_time: string | null;
  track_id: string | null;
  created_at: string;
  updated_at: string;
}

interface CacheState {
  tracks: Track[] | null;
  guides: Guide[] | null;
  questionsByGuide: Record<string, Question[]>;
  readingsByGuide: Record<string, Reading[]>;
  notesByTrack: Record<string, string>;
  items: Item[] | null;
  lastFetch: {
    tracks: number | null;
    guides: number | null;
    questionsByGuide: Record<string, number>;
    readingsByGuide: Record<string, number>;
    notesByTrack: Record<string, number>;
    items: number | null;
  };
}

interface DataCacheContextType {
  tracks: Track[] | null;
  guides: Guide[] | null;
  items: Item[] | null;
  fetchTracks: (force?: boolean) => Promise<Track[]>;
  fetchGuides: (force?: boolean) => Promise<Guide[]>;
  fetchQuestions: (guideId: string, force?: boolean) => Promise<Question[]>;
  fetchReadings: (guideId: string, force?: boolean) => Promise<Reading[]>;
  fetchNotes: (trackId: string, force?: boolean) => Promise<string>;
  fetchItems: (force?: boolean) => Promise<Item[]>;
  saveNotes: (trackId: string, content: string) => void;
  invalidateTracks: () => void;
  invalidateGuides: () => void;
  invalidateItems: () => void;
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
          // Check if cache is still valid (within cache duration)
          const now = Date.now();
          const tracksValid = parsed.lastFetch?.tracks && (now - parsed.lastFetch.tracks < CACHE_DURATION);
          const guidesValid = parsed.lastFetch?.guides && (now - parsed.lastFetch.guides < CACHE_DURATION);

          const itemsValid = parsed.lastFetch?.items && (now - parsed.lastFetch.items < CACHE_DURATION);

          return {
            tracks: tracksValid ? parsed.tracks : null,
            guides: guidesValid ? parsed.guides : null,
            questionsByGuide: parsed.questionsByGuide || {},
            readingsByGuide: parsed.readingsByGuide || {},
            notesByTrack: parsed.notesByTrack || {},
            items: itemsValid ? parsed.items : null,
            lastFetch: {
              tracks: tracksValid ? parsed.lastFetch.tracks : null,
              guides: guidesValid ? parsed.lastFetch.guides : null,
              questionsByGuide: parsed.lastFetch?.questionsByGuide || {},
              readingsByGuide: parsed.lastFetch?.readingsByGuide || {},
              notesByTrack: parsed.lastFetch?.notesByTrack || {},
              items: itemsValid ? parsed.lastFetch.items : null,
            },
          };
        }
      } catch (e) {
      }
    }
    return {
      tracks: null,
      guides: null,
      questionsByGuide: {},
      readingsByGuide: {},
      notesByTrack: {},
      items: null,
      lastFetch: {
        tracks: null,
        guides: null,
        questionsByGuide: {},
        readingsByGuide: {},
        notesByTrack: {},
        items: null,
      },
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
      // Return cached data if fetch fails
      return currentCache.guides || [];
    }
  }, []); // No dependencies - stable function

  const fetchItems = useCallback(async (force = false): Promise<Item[]> => {
    const currentCache = cacheRef.current;

    // Return cached data if available and not forcing refresh
    if (!force && currentCache.items && currentCache.lastFetch.items) {
      const age = Date.now() - currentCache.lastFetch.items;
      if (age < CACHE_DURATION) {
        return currentCache.items;
      }
    }

    try {
      const res = await fetch('/api/items');
      if (!res.ok) {
        // If unauthorized, return empty array
        if (res.status === 401) {
          return [];
        }
        throw new Error('Failed to fetch items');
      }
      const data = await res.json();
      const items = data.items || [];

      setCache(prev => ({
        ...prev,
        items,
        lastFetch: { ...prev.lastFetch, items: Date.now() },
      }));

      return items;
    } catch (error) {
      // Return cached data if fetch fails
      return currentCache.items || [];
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

  const invalidateItems = useCallback(() => {
    setCache(prev => ({
      ...prev,
      items: null,
      lastFetch: { ...prev.lastFetch, items: null },
    }));
  }, []);

  const fetchQuestions = useCallback(async (guideId: string, force = false): Promise<Question[]> => {
    const currentCache = cacheRef.current;

    // Return cached data if available and not forcing refresh
    if (!force && currentCache.questionsByGuide?.[guideId] && currentCache.lastFetch?.questionsByGuide?.[guideId]) {
      const age = Date.now() - currentCache.lastFetch.questionsByGuide[guideId];
      if (age < CACHE_DURATION) {
        return currentCache.questionsByGuide[guideId];
      }
    }

    try {
      const res = await fetch(`/api/guides/${guideId}/questions`);
      if (!res.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await res.json();
      const questions = data.questions || [];

      setCache(prev => ({
        ...prev,
        questionsByGuide: { ...prev.questionsByGuide, [guideId]: questions },
        lastFetch: {
          ...prev.lastFetch,
          questionsByGuide: { ...prev.lastFetch.questionsByGuide, [guideId]: Date.now() },
        },
      }));

      return questions;
    } catch (error) {
      return currentCache.questionsByGuide[guideId] || [];
    }
  }, []);

  const fetchReadings = useCallback(async (guideId: string, force = false): Promise<Reading[]> => {
    const currentCache = cacheRef.current;

    // Return cached data if available and not forcing refresh
    if (!force && currentCache.readingsByGuide?.[guideId] && currentCache.lastFetch?.readingsByGuide?.[guideId]) {
      const age = Date.now() - currentCache.lastFetch.readingsByGuide[guideId];
      if (age < CACHE_DURATION) {
        return currentCache.readingsByGuide[guideId];
      }
    }

    try {
      const res = await fetch(`/api/guides/${guideId}/readings`);
      if (!res.ok) {
        throw new Error('Failed to fetch readings');
      }
      const data = await res.json();
      const readings = data.readings || [];

      setCache(prev => ({
        ...prev,
        readingsByGuide: { ...prev.readingsByGuide, [guideId]: readings },
        lastFetch: {
          ...prev.lastFetch,
          readingsByGuide: { ...prev.lastFetch.readingsByGuide, [guideId]: Date.now() },
        },
      }));

      return readings;
    } catch (error) {
      return currentCache.readingsByGuide[guideId] || [];
    }
  }, []);

  const fetchNotes = useCallback(async (trackId: string, force = false): Promise<string> => {
    const currentCache = cacheRef.current;

    // Return cached data if available and not forcing refresh
    if (!force && currentCache.notesByTrack?.[trackId] !== undefined && currentCache.lastFetch?.notesByTrack?.[trackId]) {
      const age = Date.now() - currentCache.lastFetch.notesByTrack[trackId];
      if (age < CACHE_DURATION) {
        return currentCache.notesByTrack[trackId];
      }
    }

    try {
      const res = await fetch(`/api/notes?track_id=${trackId}`);
      if (!res.ok) {
        throw new Error('Failed to fetch notes');
      }
      const data = await res.json();
      const content = data.content || '';

      setCache(prev => ({
        ...prev,
        notesByTrack: { ...prev.notesByTrack, [trackId]: content },
        lastFetch: {
          ...prev.lastFetch,
          notesByTrack: { ...prev.lastFetch.notesByTrack, [trackId]: Date.now() },
        },
      }));

      return content;
    } catch (error) {
      return currentCache.notesByTrack?.[trackId] || '';
    }
  }, []);

  const saveNotes = useCallback((trackId: string, content: string) => {
    setCache(prev => ({
      ...prev,
      notesByTrack: { ...prev.notesByTrack, [trackId]: content },
      lastFetch: {
        ...prev.lastFetch,
        notesByTrack: { ...prev.lastFetch.notesByTrack, [trackId]: Date.now() },
      },
    }));
  }, []);

  const invalidateAll = useCallback(() => {
    setCache({
      tracks: null,
      guides: null,
      questionsByGuide: {},
      readingsByGuide: {},
      notesByTrack: {},
      items: null,
      lastFetch: {
        tracks: null,
        guides: null,
        questionsByGuide: {},
        readingsByGuide: {},
        notesByTrack: {},
        items: null,
      },
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
        items: cache.items,
        fetchTracks,
        fetchGuides,
        fetchQuestions,
        fetchReadings,
        fetchNotes,
        fetchItems,
        saveNotes,
        invalidateTracks,
        invalidateGuides,
        invalidateItems,
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
