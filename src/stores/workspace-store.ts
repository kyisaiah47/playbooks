import { create } from 'zustand';
import { WorkspaceMode } from '@/types/workspace';

/**
 * Stage State Machine
 *
 * Events:
 * - COMPLETE_STEP → stays in Template
 * - FINISH_TEMPLATE → GO_REFLECT
 * - SAVE_REFLECTION → GO_LIFEOS (optional modal)
 * - SET_STAGE → direct navigation
 * - OPEN_TEMPLATE / OPEN_REFLECTION → deep link from Life OS
 *
 * Guards:
 * - Unsaved changes → prompt "Save & continue?"
 *
 * Effects:
 * - On enter Reflection → set dim theme, focus editor
 * - On enter Life OS → compute aggregates, fetch graph
 */

export interface TemplateSession {
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
  currentTemplateSession: TemplateSession | null;
  currentReflectionEntry: ReflectionEntry | null;

  // UI state
  hasUnsavedChanges: boolean;
  soundEnabled: boolean;
  reducedMotion: boolean;
  highContrastMode: boolean;

  // Actions (Events)
  setStage: (stage: WorkspaceMode) => void;
  completeStep: () => void;
  finishTemplate: () => void;
  saveReflection: () => void;
  openTemplate: (guideId: string) => void;
  openReflection: (entryId: string) => void;

  // Setters
  setUnsavedChanges: (hasChanges: boolean) => void;
  toggleSound: () => void;
  setReducedMotion: (enabled: boolean) => void;
  toggleHighContrast: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  // Initial state
  stage: 'template',
  currentTemplateSession: null,
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

    // Apply transition effects (Template → Reflection blur/desaturate)
    if (!reducedMotion && currentStage === 'template' && stage === 'reflect') {
      document.body.classList.add('transitioning-to-reflection');

      // Wait for blur/desaturate, then switch stage
      setTimeout(() => {
        document.body.classList.remove('transitioning-to-reflection');
        document.body.classList.add('transitioning-from-template');

        // Effect: stage-specific setup
        document.body.classList.add('reflection-mode');

        set({ stage, hasUnsavedChanges: false });

        // Remove transition class after animation completes
        setTimeout(() => {
          document.body.classList.remove('transitioning-from-template');
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

  // Event: COMPLETE_STEP (stays in Template)
  completeStep: () => {
    // Update current session's lastStep
    const { currentTemplateSession } = get();
    if (currentTemplateSession) {
      set({
        currentTemplateSession: {
          ...currentTemplateSession,
          lastStep: currentTemplateSession.lastStep + 1,
          updatedAt: new Date(),
        },
      });
    }
  },

  // Event: FINISH_TEMPLATE → GO_REFLECT
  finishTemplate: () => {
    const { currentTemplateSession } = get();

    if (currentTemplateSession) {
      // Mark template as complete
      set({
        currentTemplateSession: {
          ...currentTemplateSession,
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

  // Deep link: OPEN_TEMPLATE
  openTemplate: (guideId) => {
    // Load template session (future: fetch from DB)
    set({
      currentTemplateSession: {
        id: 'mock-session',
        guideId,
        answers: {},
        completion: 0,
        tags: [],
        lastStep: 0,
        startedAt: new Date(),
        updatedAt: new Date(),
      },
      stage: 'template',
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
