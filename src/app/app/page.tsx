'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WorkspaceStage } from './stages/WorkspaceStage';
import { ReflectionStage } from './stages/ReflectionStage';
import { LifeOSStage } from './stages/LifeOSStage';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Stage = 'workspace' | 'reflection' | 'lifeos';

export default function StudioPage() {
  const [currentStage, setCurrentStage] = useState<Stage>('workspace');
  const [stageKeys, setStageKeys] = useState({
    workspace: 0,
    reflection: 0,
    lifeos: 0,
  });
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    loadUser();

    async function loadUser() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        if (data.user) {
          setUserEmail(data.user.email || '');
        }
      } catch (error) {
        console.error('Error loading user:', error);
      }
    }
  }, []);

  const handleStageChange = (newStage: Stage) => {
    setCurrentStage(newStage);
    // Increment the key for the new stage to retrigger animations
    setStageKeys(prev => ({
      ...prev,
      [newStage]: prev[newStage] + 1,
    }));
  };

  return (
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
                Workspace
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
                Life OS
              </Button>
            </div>

            {/* User Dropdown */}
            <div className="flex items-center">
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
                  <DropdownMenuItem>
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
  );
}
