"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false); // Start as false - assume logged out

  // Load auth state from session API on mount (only if needed)
  useEffect(() => {
    // Check if there's a session cookie before making API call
    const hasSessionCookie = document.cookie.includes('session=');
    if (!hasSessionCookie) {
      setLoading(false);
      return;
    }

    async function loadSession() {
      try {
        setLoading(true);
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
          cache: 'no-store'
        });
        const data = await res.json();

        if (data.user) {
          setIsLoggedIn(true);
          setUser(data.user);
        }
      } catch (error) {
        console.error('Error loading session:', error);
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, []);

  const login = (userData: User) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    }
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
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