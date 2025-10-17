'use client';

import { useState } from 'react';
import { WorkspaceStage } from './stages/WorkspaceStage';
import { ReflectionStage } from './stages/ReflectionStage';
import { LifeOSStage } from './stages/LifeOSStage';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';

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
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-lg font-bold text-foreground">Studio</h1>
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
          </div>
        </div>
      </div>

      {/* Stage Viewport with transitions */}
      <div className="flex-1 overflow-hidden relative bg-background">
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            currentStage === 'workspace'
              ? 'opacity-100 translate-x-0 z-10'
              : 'opacity-0 translate-x-8 z-0 pointer-events-none'
          }`}
        >
          <WorkspaceStage />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            currentStage === 'reflection'
              ? 'opacity-100 translate-x-0 z-10'
              : 'opacity-0 translate-x-8 z-0 pointer-events-none'
          }`}
        >
          <ReflectionStage />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            currentStage === 'lifeos'
              ? 'opacity-100 translate-x-0 z-10'
              : 'opacity-0 translate-x-8 z-0 pointer-events-none'
          }`}
        >
          <LifeOSStage />
        </div>
      </div>
    </div>
  );
}
