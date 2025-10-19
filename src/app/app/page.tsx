'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TemplatesView } from './views/TemplatesView';
import { ReflectionView } from './views/ReflectionView';
import { OverviewView } from './views/OverviewView';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, User, X } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeSelector } from '@/components/theme-selector';

type View = 'templates' | 'reflection' | 'overview';

export default function StudioPage() {
  const [currentView, setCurrentView] = useState<View>('templates');
  const [viewKeys, setViewKeys] = useState({
    templates: 0,
    reflection: 0,
    overview: 0,
  });
  const [userEmail, setUserEmail] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    loadUser();
    checkOnboarding();

    async function loadUser() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        if (data.user) {
          setUserEmail(data.user.email || '');
        }
        // Allow anonymous users - don't redirect
      } catch (error) {
        console.error('Error loading user:', error);
        // Allow anonymous users - don't redirect
      }
    }

    function checkOnboarding() {
      const hasSeenOnboarding = localStorage.getItem('templata-onboarding-seen');
      if (!hasSeenOnboarding) {
        setShowOnboarding(true);
      }
    }
  }, []);

  const handleCloseOnboarding = () => {
    localStorage.setItem('templata-onboarding-seen', 'true');
    setShowOnboarding(false);
  };

  const handleViewChange = (newView: View) => {
    setCurrentView(newView);
    // Increment the key for the new view to retrigger animations
    setViewKeys(prev => ({
      ...prev,
      [newView]: prev[newView] + 1,
    }));
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Nav */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between gap-2 w-full md:relative">
            <div className="md:flex items-center gap-4">
              <Link href="/" className="hidden md:block">
                <h1 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">Templata</h1>
              </Link>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 md:gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
              <Button
                variant={currentView === 'templates' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('templates')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Templates
              </Button>
              <Button
                variant={currentView === 'reflection' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('reflection')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Reflection
              </Button>
              <Button
                variant={currentView === 'overview' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('overview')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Overview
              </Button>
            </div>

            {/* Theme Selector & User Dropdown */}
            <div className="flex items-center gap-1 md:gap-2">
              <ThemeSelector iconOnly />

              {userEmail && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm text-muted-foreground">{userEmail}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/app/settings">
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dismissible Welcome Banner */}
      {showOnboarding && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border-b bg-primary/5 border-primary/20"
        >
          <div className="container mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Welcome to Templata!</span> Choose <span className="font-medium">Templates</span> to start a guided workspace, <span className="font-medium">Reflection</span> for daily journaling, or <span className="font-medium">Overview</span> to see your progress.
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseOnboarding}
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* View Viewport with transitions */}
      <div className="flex-1 overflow-hidden relative bg-background">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: currentView === 'templates' ? 1 : 0,
            y: currentView === 'templates' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'templates' ? 'auto' : 'none',
            zIndex: currentView === 'templates' ? 10 : 0
          }}
        >
          <TemplatesView key={`templates-${viewKeys.templates}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentView === 'reflection' ? 1 : 0,
            y: currentView === 'reflection' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'reflection' ? 'auto' : 'none',
            zIndex: currentView === 'reflection' ? 10 : 0
          }}
        >
          <ReflectionView key={`reflection-${viewKeys.reflection}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentView === 'overview' ? 1 : 0,
            y: currentView === 'overview' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'overview' ? 'auto' : 'none',
            zIndex: currentView === 'overview' ? 10 : 0
          }}
        >
          <OverviewView key={`overview-${viewKeys.overview}`} />
        </motion.div>
      </div>
    </div>
  );
}
