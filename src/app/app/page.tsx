'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkspaceStage } from './stages/WorkspaceStage';
import { ReflectionStage } from './stages/ReflectionStage';
import { LifeOSStage } from './stages/LifeOSStage';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Stage = 'workspace' | 'reflection' | 'lifeos';

export default function StudioPage() {
  const [currentStage, setCurrentStage] = useState<Stage>('workspace');

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
                onClick={() => setCurrentStage('workspace')}
              >
                Workspace
              </Button>
              <Button
                variant={currentStage === 'reflection' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setCurrentStage('reflection')}
              >
                Reflection
              </Button>
              <Button
                variant={currentStage === 'lifeos' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setCurrentStage('lifeos')}
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
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
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
        <AnimatePresence mode="wait">
          {currentStage === 'workspace' && (
            <motion.div
              key="workspace"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <WorkspaceStage />
            </motion.div>
          )}
          {currentStage === 'reflection' && (
            <motion.div
              key="reflection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <ReflectionStage />
            </motion.div>
          )}
          {currentStage === 'lifeos' && (
            <motion.div
              key="lifeos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <LifeOSStage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
