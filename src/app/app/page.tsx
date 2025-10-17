'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WorkspaceStage } from './stages/WorkspaceStage';
import { ReflectionStage } from './stages/ReflectionStage';
import { LifeOSStage } from './stages/LifeOSStage';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, User, FileText, Heart, BarChart3, X } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ThemeSelector } from '@/components/theme-selector';
import { Card } from '@/components/ui/card';

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
    <>
      {/* Onboarding Modal */}
      <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Welcome to Templata</DialogTitle>
            <DialogDescription>
              Your life guidance workspace - here's how to get started
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="grid gap-4">
              <Card className="p-4 border-primary/20 bg-primary/5">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Templates</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose from hundreds of life templates. Each template has curated prompts to guide you through important decisions like wedding planning, career changes, or health journeys.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-border">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Reflection</h3>
                    <p className="text-sm text-muted-foreground">
                      Daily reflection space with rotating prompts. Track your mood, add tags, and build a journaling habit.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-border">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Overview</h3>
                    <p className="text-sm text-muted-foreground">
                      See your complete progress across all templates, reflections, and activity streaks.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                All your work auto-saves as you type
              </p>
              <Button onClick={handleCloseOnboarding}>
                Get Started
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="h-screen flex flex-col bg-background">
      {/* Top Nav */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-foreground">Templata</h1>
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {userEmail && (
                    <>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-muted-foreground">{userEmail}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                    </>
                  )}
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
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
