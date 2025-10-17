'use client';

import { useState, useEffect } from 'react';
import { WorkspaceStage } from './stages/WorkspaceStage';
import { ReflectionStage } from './stages/ReflectionStage';
import { LifeOSStage } from './stages/LifeOSStage';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';

type Stage = 'workspace' | 'reflection' | 'lifeos';

type TransitionPhase = 'idle' | 'exiting' | 'entering';

export default function StudioPage() {
  const [currentStage, setCurrentStage] = useState<Stage>('workspace');
  const [previousStage, setPreviousStage] = useState<Stage>('workspace');
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('idle');

  const handleStageChange = (newStage: Stage) => {
    if (newStage === currentStage) return;

    setPreviousStage(currentStage);
    setTransitionPhase('exiting');

    // Wait for exit animation, then switch
    setTimeout(() => {
      setCurrentStage(newStage);
      setTransitionPhase('entering');

      // Complete transition
      setTimeout(() => {
        setTransitionPhase('idle');
      }, 800);
    }, 600);
  };

  const getTransitionClass = (stage: Stage) => {
    if (transitionPhase === 'idle') {
      return stage === currentStage ? 'opacity-100' : 'opacity-0 pointer-events-none';
    }

    if (transitionPhase === 'exiting' && stage === previousStage) {
      // Exiting animations based on direction
      if (previousStage === 'workspace' && currentStage === 'reflection') {
        return 'animate-workspace-to-reflection-exit';
      }
      if (previousStage === 'reflection' && currentStage === 'lifeos') {
        return 'animate-reflection-to-lifeos-exit';
      }
      if (previousStage === 'lifeos' && currentStage === 'workspace') {
        return 'animate-lifeos-to-workspace-exit';
      }
      // Default backward transitions
      return 'opacity-0 scale-95';
    }

    if (transitionPhase === 'entering' && stage === currentStage) {
      // Entering animations based on direction
      if (previousStage === 'workspace' && currentStage === 'reflection') {
        return 'animate-workspace-to-reflection-enter';
      }
      if (previousStage === 'reflection' && currentStage === 'lifeos') {
        return 'animate-reflection-to-lifeos-enter';
      }
      if (previousStage === 'lifeos' && currentStage === 'workspace') {
        return 'animate-lifeos-to-workspace-enter';
      }
      // Default backward transitions
      return 'opacity-100 scale-100';
    }

    return 'opacity-0 pointer-events-none';
  };

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
                onClick={() => handleStageChange('workspace')}
                disabled={transitionPhase !== 'idle'}
              >
                Workspace
              </Button>
              <Button
                variant={currentStage === 'reflection' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleStageChange('reflection')}
                disabled={transitionPhase !== 'idle'}
              >
                Reflection
              </Button>
              <Button
                variant={currentStage === 'lifeos' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleStageChange('lifeos')}
                disabled={transitionPhase !== 'idle'}
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
          className={`absolute inset-0 ${getTransitionClass('workspace')} ${
            currentStage === 'workspace' || previousStage === 'workspace' ? 'z-10' : 'z-0'
          }`}
        >
          <WorkspaceStage />
        </div>
        <div
          className={`absolute inset-0 ${getTransitionClass('reflection')} ${
            currentStage === 'reflection' || previousStage === 'reflection' ? 'z-10' : 'z-0'
          }`}
        >
          <ReflectionStage />
        </div>
        <div
          className={`absolute inset-0 ${getTransitionClass('lifeos')} ${
            currentStage === 'lifeos' || previousStage === 'lifeos' ? 'z-10' : 'z-0'
          }`}
        >
          <LifeOSStage />
        </div>
      </div>
    </div>
  );
}
