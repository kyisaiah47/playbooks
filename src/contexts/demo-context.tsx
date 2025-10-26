'use client';

import React, { createContext, useContext } from 'react';

interface DemoContextType {
  demoMode: boolean;
}

const DemoContext = createContext<DemoContextType>({ demoMode: false });

export function DemoProvider({ children, demoMode = false }: { children: React.ReactNode; demoMode?: boolean }) {
  return (
    <DemoContext.Provider value={{ demoMode }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}
