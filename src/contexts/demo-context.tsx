'use client';

import React, { createContext, useContext, useState } from 'react';

interface DemoContextType {
  demoMode: boolean;
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  selectedGuideId: string | null;
  setSelectedGuideId: (guideId: string | null) => void;
  selectedReadingId: string | null;
  setSelectedReadingId: (readingId: string | null) => void;
}

const DemoContext = createContext<DemoContextType>({
  demoMode: false,
  selectedCategory: null,
  setSelectedCategory: () => {},
  selectedGuideId: null,
  setSelectedGuideId: () => {},
  selectedReadingId: null,
  setSelectedReadingId: () => {},
});

export function DemoProvider({ children, demoMode = false }: { children: React.ReactNode; demoMode?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('career-work'); // Default category for demo
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [selectedReadingId, setSelectedReadingId] = useState<string | null>(null);

  return (
    <DemoContext.Provider value={{ demoMode, selectedCategory, setSelectedCategory, selectedGuideId, setSelectedGuideId, selectedReadingId, setSelectedReadingId }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}
