'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WorkspaceStage } from './stages/WorkspaceStage';
import { ReflectionStage } from './stages/ReflectionStage';
import { LifeOSStage } from './stages/LifeOSStage';
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

type Stage = 'workspace' | 'reflection' | 'lifeos';

export default function StudioPage() {
  const [currentStage, setCurrentStage] = useState<Stage>('workspace');
  const [stageKeys, setStageKeys] = useState({
    workspace: 0,
    reflection: 0,
    lifeos: 0,
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

  const handleStageChange = (newStage: Stage) => {
    setCurrentStage(newStage);
    // Increment the key for the new stage to retrigger animations
    setStageKeys(prev => ({
      ...prev,
      [newStage]: prev[newStage] + 1,
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <h1 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">Templata</h1>
              </Link>
            </div>

            {/* Stage Switcher */}
            <div className="flex items-center gap-2">
              <Button
                variant={currentStage === 'workspace' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleStageChange('workspace')}
              >
                Templates
              </Button>
              <Button
                variant={currentStage === 'reflection' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleStageChange('reflection')}
              >
                Reflection
              </Button>
              <Button
                variant={currentStage === 'lifeos' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleStageChange('lifeos')}
              >
                Overview
              </Button>
            </div>

            {/* Theme Selector & User Dropdown */}
            <div className="flex items-center gap-2">
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

      {/* Stage Viewport with transitions */}
      <div className="flex-1 overflow-hidden relative bg-background">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: currentStage === 'workspace' ? 1 : 0,
            y: currentStage === 'workspace' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentStage === 'workspace' ? 'auto' : 'none',
            zIndex: currentStage === 'workspace' ? 10 : 0
          }}
        >
          <WorkspaceStage key={`workspace-${stageKeys.workspace}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentStage === 'reflection' ? 1 : 0,
            y: currentStage === 'reflection' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentStage === 'reflection' ? 'auto' : 'none',
            zIndex: currentStage === 'reflection' ? 10 : 0
          }}
        >
          <ReflectionStage key={`reflection-${stageKeys.reflection}`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentStage === 'lifeos' ? 1 : 0,
            y: currentStage === 'lifeos' ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            pointerEvents: currentStage === 'lifeos' ? 'auto' : 'none',
            zIndex: currentStage === 'lifeos' ? 10 : 0
          }}
        >
          <LifeOSStage key={`lifeos-${stageKeys.lifeos}`} />
        </motion.div>
      </div>
    </div>
  );
}
