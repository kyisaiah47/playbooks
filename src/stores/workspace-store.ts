import { create } from 'zustand';
import { WorkspaceMode } from '@/types/workspace';

/**
 * Stage State Machine
 *
 * Events:
 * - COMPLETE_STEP → stays in Guide
 * - FINISH_GUIDE → GO_REFLECT
 * - SAVE_REFLECTION → GO_LIFEOS (optional modal)
 * - SET_STAGE → direct navigation
 * - OPEN_GUIDE / OPEN_REFLECTION → deep link from Life OS
 *
 * Guards:
 * - Unsaved changes → prompt "Save & continue?"
 *
 * Effects:
 * - On enter Reflection → set dim theme, focus editor
 * - On enter Life OS → compute aggregates, fetch graph
 */

export interface GuideSession {
  id: string;
  guideId: string;
  answers: Record<string, string>;
  completion: number;
  tags: string[];
  lastStep: number;
  startedAt: Date;
  updatedAt: Date;
}

export interface ReflectionEntry {
  id: string;
  text: string;
  mood?: 'happy' | 'neutral' | 'sad';
  tags: string[];
  linkedGuideIds: string[];
  createdAt: Date;
  sentiment?: number; // -1 to 1
}

interface WorkspaceState {
  // Current stage
  stage: WorkspaceMode;

  // Active sessions
  currentGuideSession: GuideSession | null;
  currentReflectionEntry: ReflectionEntry | null;

  // UI state
  hasUnsavedChanges: boolean;
  soundEnabled: boolean;
  reducedMotion: boolean;
  highContrastMode: boolean;

  // Actions (Events)
  setStage: (stage: WorkspaceMode) => void;
  completeStep: () => void;
  finishGuide: () => void;
  saveReflection: () => void;
  openGuide: (guideId: string) => void;
  openReflection: (entryId: string) => void;

  // Setters
  setUnsavedChanges: (hasChanges: boolean) => void;
  toggleSound: () => void;
  setReducedMotion: (enabled: boolean) => void;
  toggleHighContrast: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  // Initial state
  stage: 'guide',
  currentGuideSession: null,
  currentReflectionEntry: null,
  hasUnsavedChanges: false,
  soundEnabled: true,
  reducedMotion: false,
  highContrastMode: false,

  // Event: SET_STAGE
  setStage: (stage) => {
    const { hasUnsavedChanges, stage: currentStage, reducedMotion } = get();

    // Guard: check for unsaved changes
    if (hasUnsavedChanges) {
      const confirmed = confirm('You have unsaved changes. Continue anyway?');
      if (!confirmed) return;
    }

    // Apply transition effects (Guide → Reflection blur/desaturate)
    if (!reducedMotion && currentStage === 'guide' && stage === 'reflect') {
      document.body.classList.add('transitioning-to-reflection');

      // Wait for blur/desaturate, then switch stage
      setTimeout(() => {
        document.body.classList.remove('transitioning-to-reflection');
        document.body.classList.add('transitioning-from-guide');

        // Effect: stage-specific setup
        document.body.classList.add('reflection-mode');

        set({ stage, hasUnsavedChanges: false });

        // Remove transition class after animation completes
        setTimeout(() => {
          document.body.classList.remove('transitioning-from-guide');
        }, 340); // --dur-slow
      }, 340); // --dur-slow
    } else {
      // No special transition, switch immediately

      // Effect: stage-specific setup
      if (stage === 'reflect') {
        document.body.classList.add('reflection-mode');
      } else {
        document.body.classList.remove('reflection-mode');
      }

      if (stage === 'lifeos') {
        // Trigger analytics computation
        // (future: dispatch fetch for graph data)
      }

      set({ stage, hasUnsavedChanges: false });
    }
  },

  // Event: COMPLETE_STEP (stays in Guide)
  completeStep: () => {
    // Update current session's lastStep
    const { currentGuideSession } = get();
    if (currentGuideSession) {
      set({
        currentGuideSession: {
          ...currentGuideSession,
          lastStep: currentGuideSession.lastStep + 1,
          updatedAt: new Date(),
        },
      });
    }
  },

  // Event: FINISH_GUIDE → GO_REFLECT
  finishGuide: () => {
    const { currentGuideSession } = get();

    if (currentGuideSession) {
      // Mark guide as complete
      set({
        currentGuideSession: {
          ...currentGuideSession,
          completion: 100,
          updatedAt: new Date(),
        },
      });

      // Trigger transition to Reflection
      setTimeout(() => {
        get().setStage('reflect');
      }, 1500); // Allow completion animation to play
    }
  },

  // Event: SAVE_REFLECTION → optional GO_LIFEOS
  saveReflection: () => {
    const { currentReflectionEntry } = get();

    if (currentReflectionEntry) {
      set({
        currentReflectionEntry: {
          ...currentReflectionEntry,
          createdAt: new Date(),
        },
        hasUnsavedChanges: false,
      });

      // Optional modal: "See connections?"
      // For now, auto-transition after 2s
      setTimeout(() => {
        const showConnections = confirm('See how this connects across your journey?');
        if (showConnections) {
          get().setStage('lifeos');
        }
      }, 2000);
    }
  },

  // Deep link: OPEN_GUIDE
  openGuide: (guideId) => {
    // Load guide session (future: fetch from DB)
    set({
      currentGuideSession: {
        id: 'mock-session',
        guideId,
        answers: {},
        completion: 0,
        tags: [],
        lastStep: 0,
        startedAt: new Date(),
        updatedAt: new Date(),
      },
      stage: 'guide',
    });
  },

  // Deep link: OPEN_REFLECTION
  openReflection: (entryId) => {
    // Load reflection entry (future: fetch from DB)
    set({
      currentReflectionEntry: {
        id: entryId,
        text: '',
        tags: [],
        linkedGuideIds: [],
        createdAt: new Date(),
      },
      stage: 'reflect',
    });
  },

  // Setters
  setUnsavedChanges: (hasChanges) => set({ hasUnsavedChanges: hasChanges }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  setReducedMotion: (enabled) => set({ reducedMotion: enabled }),
  toggleHighContrast: () => {
    const newValue = !get().highContrastMode;
    set({ highContrastMode: newValue });

    // Apply high contrast class to document
    if (typeof document !== 'undefined') {
      if (newValue) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    }
  },
}));
