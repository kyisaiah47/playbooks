'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { Guide, Resource, ReflectionPrompt, FreeformNote, Workspace } from '@/types/guide';
import { TemplataContentSidebar } from '@/components/templata-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/template-sidebar';
import { ThemeSelector } from '@/components/theme-selector';
import { ResourceViewer } from '@/components/resource/ResourceViewer';
import { Progress } from '@/components/ui/progress';
import { DollarSign, MapPin, UserCheck, Briefcase, Church, Music, Palette, Shirt, Heart, Home, CreditCard, Search, HandCoins, FileText, Truck, Target, User, PenTool, Network, MessageSquare, CheckSquare, TrendingUp, Stethoscope, Baby, Calendar, Shield, Activity, ChevronDown, Plus, Edit3, AlertCircle, Sunset, Moon, Layout } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Lazy load SimpleEditor to reduce initial bundle size
const SimpleEditor = lazy(() => import('@/components/tiptap-templates/simple/simple-editor').then(mod => ({ default: mod.SimpleEditor })));

interface TemplateViewProps {
  template: Guide;
  onSwitchMode?: (mode: 'template' | 'reflection' | 'master') => void;
}

export function TemplateView({ template, onSwitchMode }: TemplateViewProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [allItems, setAllItems] = useState<(ReflectionPrompt | FreeformNote)[]>([]);
  const [openResource, setOpenResource] = useState<Resource | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [editMode, setEditMode] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [duplicateError, setDuplicateError] = useState<string | null>(null);
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);

  // Workspace management (must be defined before useEffects that use them)
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    {
      id: 'default',
      name: 'Main Workspace',
      templateId: template.id,
      allItems: [],
      responses: {},
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string>('default');

  // Auto-save to localStorage every 30 seconds
  useEffect(() => {
    const saveInterval = setInterval(() => {
      const saveData = {
        workspaces,
        activeWorkspaceId,
        responses,
        completedItems: Array.from(completedItems),
        lastSaved: new Date().toISOString()
      };
      localStorage.setItem(`template-${template.id}`, JSON.stringify(saveData));
      console.log('[Auto-save] Workspace saved to localStorage');
    }, 30000); // Save every 30 seconds

    return () => clearInterval(saveInterval);
  }, [workspaces, activeWorkspaceId, responses, completedItems, template.id]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(`template-${template.id}`);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.workspaces) setWorkspaces(parsed.workspaces);
        if (parsed.activeWorkspaceId) setActiveWorkspaceId(parsed.activeWorkspaceId);
        if (parsed.responses) setResponses(parsed.responses);
        if (parsed.completedItems) setCompletedItems(new Set(parsed.completedItems));
        console.log('[Auto-save] Workspace loaded from localStorage');
      } catch (error) {
        console.error('[Auto-save] Failed to load workspace:', error);
      }
    }
  }, [template.id]);

  const handleInsertPrompt = (prompt: ReflectionPrompt) => {
    // Insert prompt into TipTap editor
    if ((window as any).templateEditor) {
      (window as any).templateEditor
        .chain()
        .focus()
        .insertPrompt({
          id: prompt.id,
          text: prompt.prompt,
          category: prompt.category || 'General',
          helpText: prompt.helpText,
        })
        .run();
    }

    // Keep track for legacy compatibility if needed
    const newItems = [prompt, ...allItems];
    setAllItems(newItems);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, allItems: newItems, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleRemovePrompt = (promptId: string) => {
    const newItems = allItems.filter(item => item.id !== promptId);
    setAllItems(newItems);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, allItems: newItems, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleInsertNote = (note: { id: string; title: string }) => {
    const freeformNote: FreeformNote = {
      id: note.id,
      title: note.title,
      content: ''
    };
    const newItems = [freeformNote, ...allItems];
    setAllItems(newItems);


    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, allItems: newItems, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleRemoveNote = (noteId: string) => {
    const newItems = allItems.filter(item => item.id !== noteId);
    setAllItems(newItems);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, allItems: newItems, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleUpdateNote = (noteId: string, updates: Partial<FreeformNote>) => {
    const newItems = allItems.map(item =>
      item.id === noteId && 'title' in item ? { ...item, ...updates } : item
    );
    setAllItems(newItems);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, allItems: newItems, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleReorderItems = (items: (ReflectionPrompt | FreeformNote)[]) => {
    setAllItems(items);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, allItems: items, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleOpenResource = (resource: Resource) => {
    setOpenResource(resource);
  };

  const handleCloseResource = () => {
    setOpenResource(null);
  };

  const handleResponsesChange = (newResponses: Record<string, string>) => {
    setResponses(newResponses);
    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, responses: newResponses, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleWorkspaceChange = (workspaceId: string) => {
    // Save current state to current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? {
            ...workspace,
            allItems,
            responses,
            updatedAt: new Date()
          }
        : workspace
    ));

    // Load new workspace state
    const newWorkspace = workspaces.find(w => w.id === workspaceId);
    if (newWorkspace) {
      setActiveWorkspaceId(workspaceId);
      setAllItems(newWorkspace.allItems || []);
      setResponses(newWorkspace.responses);
    }
  };

  const handleCreateWorkspace = () => {
    const newWorkspace: Workspace = {
      id: `workspace-${Date.now()}`,
      name: `Workspace ${workspaces.length}`,
      templateId: template.id,
      allItems: [],
      responses: {},
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setWorkspaces(prev => [...prev, newWorkspace]);
    handleWorkspaceChange(newWorkspace.id);
  };

  const handleToggleComplete = (itemId: string) => {
    const newCompletedItems = new Set(completedItems);
    if (newCompletedItems.has(itemId)) {
      newCompletedItems.delete(itemId);
    } else {
      newCompletedItems.add(itemId);
    }
    setCompletedItems(newCompletedItems);
  };


  // Calculate completion stats
  const completedPrompts = completedItems.size;
  const totalPrompts = allItems.length;

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground overflow-hidden [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:w-0 [-ms-overflow-style:none] [scrollbar-width:none]">
        <TemplataContentSidebar
          template={template}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onInsertPrompt={handleInsertPrompt}
          onInsertNote={handleInsertNote}
          onOpenResource={handleOpenResource}
          responses={responses}
          workspaces={workspaces.map(w => ({ id: w.id, name: w.name }))}
          activeWorkspaceId={activeWorkspaceId}
          onWorkspaceChange={handleWorkspaceChange}
          onCreateWorkspace={handleCreateWorkspace}
          highlightedItem={highlightedItem}
          allItems={allItems}
        />
        
        <main className="flex-1 flex overflow-hidden bg-background">
          {/* Main Content */}
          <div className={`${openResource ? 'w-1/2' : 'w-full'} overflow-auto border-r transition-all duration-300`}>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-sm font-medium">{template.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="ml-auto flex items-center gap-3">
                {/* Workspace Mode Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Layout className="h-4 w-4" />
                      <span className="hidden sm:inline">Template Workspace</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onSwitchMode?.('template')} className="flex items-center gap-2">
                      <Layout className="h-4 w-4" />
                      <span>Template Workspace</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onSwitchMode?.('reflection')} className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      <span>Reflection Mode</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled className="flex items-center gap-2 opacity-50">
                      <CheckSquare className="h-4 w-4" />
                      <span>Life OS</span>
                      <span className="text-xs text-muted-foreground ml-auto">Coming Soon</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
            </header>

            {/* Simple Editor */}
            <div className="relative z-10 transparent-editor h-full">
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="text-muted-foreground">Loading editor...</div>
                </div>
              }>
                <SimpleEditor
                  content=""
                  templateId={template.id}
                  onUpdate={(content) => {
                  }}
                />
              </Suspense>
            </div>

            <style jsx>{`
              :global(.transparent-editor .simple-editor-wrapper) {
                background: transparent !important;
              }

              :global(.transparent-editor .simple-editor-content) {
                background: transparent !important;
              }

              :global(.transparent-editor .tiptap.ProseMirror.simple-editor) {
                background: transparent !important;
                color: inherit !important;
              }

              :global(.transparent-editor .tiptap-toolbar) {
                background: rgba(255, 255, 255, 0.05) !important;
                backdrop-filter: blur(8px) !important;
                border-color: rgba(255, 255, 255, 0.1) !important;
              }

              :global(.transparent-editor .simple-editor-content) {
                max-width: none !important;
                width: 100% !important;
                padding: 0 !important;
              }

              :global(.transparent-editor .simple-editor-wrapper) {
                width: 100% !important;
                height: 100% !important;
              }
            `}</style>
          </div>

          {/* Resource Panel */}
          {openResource && (
            <div className="w-1/2 overflow-auto bg-muted/20">
              <ResourceViewer
                resource={openResource}
                onClose={handleCloseResource}
              />
            </div>
          )}

        </main>
      </div>
    </SidebarProvider>
  );
}