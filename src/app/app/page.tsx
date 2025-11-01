'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GuidesView } from './views/GuidesView';
import { OverviewView } from './views/OverviewView';
import { CalendarView } from './views/CalendarView';
import { TasksView } from './views/TasksView';
import { AnalyticsView } from './views/AnalyticsView';
import { ArchiveView } from './views/ArchiveView';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, User, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeSelector } from '@/components/theme-selector';

type View = 'guides' | 'overview' | 'calendar' | 'tasks' | 'analytics' | 'archive';

export default function StudioPage() {
  const [currentView, setCurrentView] = useState<View>('guides');
  const [viewKeys, setViewKeys] = useState({
    guides: 0,
    overview: 0,
    calendar: 0,
    tasks: 0,
    analytics: 0,
    archive: 0,
  });
  const [userEmail, setUserEmail] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Callbacks for interactive banner
  const [templatesActions, setTemplatesActions] = useState<{
    openTemplateDropdown?: () => void;
    selectFirstPrompt?: () => void;
    openFirstArticle?: () => void;
  }>({});

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
          <div className="flex items-center gap-2 w-full relative">
            {/* Left side - Templata Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/brand/favicon-white.svg"
                  alt="Templata"
                  width={20}
                  height={20}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                <span className="hidden md:block font-semibold text-lg">Templata</span>
              </Link>
            </div>

            {/* View Switcher - Centered */}
            <div className="flex items-center gap-1 md:gap-2 absolute left-1/2 -translate-x-1/2">
              <Button
                variant={currentView === 'guides' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('guides')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Guides
              </Button>
              <Button
                variant={currentView === 'calendar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('calendar')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Calendar
              </Button>
              <Button
                variant={currentView === 'tasks' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('tasks')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Tasks
              </Button>
              <Button
                variant={currentView === 'analytics' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('analytics')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Analytics
              </Button>
              <Button
                variant={currentView === 'archive' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('archive')}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                Archive
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
            <div className="flex items-center gap-1 md:gap-2 ml-auto">
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

      {/* Info Banner */}
      <div className="border-b bg-primary/5 border-primary/20">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <p className="text-sm text-foreground text-center">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">1</span>
              Pick a{' '}
              <button
                onClick={() => {
                  if (currentView !== 'guides') handleViewChange('guides');
                  setTimeout(() => templatesActions.openTemplateDropdown?.(), 100);
                }}
                className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
              >
                guide
              </button>{' '}
              that fits your goal
            </span>
            {' → '}
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">2</span>
              Answer thoughtful{' '}
              <button
                onClick={() => {
                  if (currentView !== 'guides') handleViewChange('guides');
                  setTimeout(() => templatesActions.selectFirstPrompt?.(), 100);
                }}
                className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
              >
                questions
              </button>
            </span>
            {' → '}
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">3</span>
              Read curated{' '}
              <button
                onClick={() => {
                  if (currentView !== 'guides') handleViewChange('guides');
                  setTimeout(() => templatesActions.openFirstArticle?.(), 100);
                }}
                className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
              >
                readings
              </button>{' '}
              for help
            </span>
            {' → '}
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold">4</span>
              See everything you've written in{' '}
              <button
                onClick={() => {
                  sessionStorage.setItem('overview-tab', 'responses');
                  handleViewChange('overview');
                }}
                className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 font-medium transition-colors"
              >
                Overview
              </button>
            </span>.
          </p>
        </div>
      </div>

      {/* View Viewport with transitions */}
      <div className={`flex-1 relative bg-background ${currentView === 'overview' ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: currentView === 'guides' ? 1 : 0,
            y: currentView === 'guides' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'guides' ? 'auto' : 'none',
            zIndex: currentView === 'guides' ? 10 : 0
          }}
        >
          <GuidesView
            key={`guides-${viewKeys.guides}`}
            onViewChange={handleViewChange}
            setActions={setTemplatesActions}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentView === 'calendar' ? 1 : 0,
            y: currentView === 'calendar' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'calendar' ? 'auto' : 'none',
            zIndex: currentView === 'calendar' ? 10 : 0
          }}
        >
          <CalendarView key={`calendar-${viewKeys.calendar}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentView === 'tasks' ? 1 : 0,
            y: currentView === 'tasks' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'tasks' ? 'auto' : 'none',
            zIndex: currentView === 'tasks' ? 10 : 0
          }}
        >
          <TasksView key={`tasks-${viewKeys.tasks}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentView === 'analytics' ? 1 : 0,
            y: currentView === 'analytics' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'analytics' ? 'auto' : 'none',
            zIndex: currentView === 'analytics' ? 10 : 0
          }}
        >
          <AnalyticsView key={`analytics-${viewKeys.analytics}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentView === 'archive' ? 1 : 0,
            y: currentView === 'archive' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentView === 'archive' ? 'auto' : 'none',
            zIndex: currentView === 'archive' ? 10 : 0
          }}
        >
          <ArchiveView key={`archive-${viewKeys.archive}`} />
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
