"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: { email: string } | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load auth state from localStorage on mount
  React.useEffect(() => {
    try {
      const storedUser = localStorage.getItem('templata-user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setIsLoggedIn(true);
        setUser(userData);
      }
    } catch (error) {
      console.error('Error loading auth state:', error);
      localStorage.removeItem('templata-user');
    }
    setIsLoaded(true);
  }, []);

  const login = (email: string) => {
    const userData = { email };
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('templata-user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('templata-user');
  };

  // Auth state is loading, but render children anyway since there's no blank page issue

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}