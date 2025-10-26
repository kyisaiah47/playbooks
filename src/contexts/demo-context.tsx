'use client';

import React, { createContext, useContext, useState } from 'react';

interface DemoContextType {
  demoMode: boolean;
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}

const DemoContext = createContext<DemoContextType>({
  demoMode: false,
  selectedCategory: null,
  setSelectedCategory: () => {},
});

export function DemoProvider({ children, demoMode = false }: { children: React.ReactNode; demoMode?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('career-work'); // Default category for demo

  return (
    <DemoContext.Provider value={{ demoMode, selectedCategory, setSelectedCategory }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}
