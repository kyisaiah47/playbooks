'use client';

import { useState, useEffect } from 'react';
import { GuidanceTemplate, Resource, ReflectionPrompt, FreeformNote, Workspace } from '@/types/template';
import { EmbeddedPrompts } from '@/components/prompts/EmbeddedPrompts';
import { TemplataContentSidebar } from '@/components/templata-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeSelector } from '@/components/theme-selector';
import { ResourceViewer } from '@/components/resource/ResourceViewer';
import { Progress } from '@/components/ui/progress';
import { CommandPalette } from '@/components/command-palette';
import { PDFExportButton } from '@/components/pdf/export-button';
import { ExpertBadgeList } from '@/components/expert/expert-badge';
import { getTemplateExperts } from '@/lib/expert-badges';
import { SharePanel } from '@/components/collaboration/share-panel';
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


interface TemplateViewProps {
  template: GuidanceTemplate;
  onSwitchMode?: (mode: 'template' | 'reflection' | 'master') => void;
}

export function TemplateView({ template, onSwitchMode }: TemplateViewProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [allItems, setAllItems] = useState<(ReflectionPrompt | FreeformNote)[]>([]);
  const [openResource, setOpenResource] = useState<Resource | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [editMode, setEditMode] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [duplicateError, setDuplicateError] = useState<string | null>(null);
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);

  // Command palette keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandPaletteOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Workspace management
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


  const handleInsertPrompt = (prompt: ReflectionPrompt) => {
    // Check if prompt is already added
    if (allItems.some(item => item.id === prompt.id)) {
      // Highlight existing item with error state
      setHighlightedItem(prompt.id);

      // Clear highlight after 1.5 seconds
      setTimeout(() => {
        setHighlightedItem(null);
      }, 1500);

      return; // Don't add duplicates
    }

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

  // Get experts for this template
  const templateExperts = getTemplateExperts(template.id);


  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground overflow-hidden [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:w-0 [-ms-overflow-style:none] [scrollbar-width:none]">
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          mode="template-mode"
          templateMode={{
            template,
            onSectionChange: setActiveSection,
            onInsertPrompt: handleInsertPrompt,
            onOpenResource: handleOpenResource
          }}
        />
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

                <div className="flex flex-col items-end gap-1">
                  {totalPrompts > 0 && (
                    <>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-medium">{completedPrompts}/{totalPrompts}</span>
                        <span>completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={(completedPrompts / totalPrompts) * 100}
                          className="w-20 h-2 [&>div]:bg-green-500"
                        />
                        <span className="text-xs font-medium text-muted-foreground">{Math.round((completedPrompts / totalPrompts) * 100)}%</span>
                      </div>
                    </>
                  )}
                </div>
                {allItems.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditMode(!editMode)}
                    className={`h-8 w-8 p-0 ${editMode ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </header>
            <EmbeddedPrompts
              section={template.sections[activeSection]}
              allItems={allItems}
              onRemovePrompt={handleRemovePrompt}
              onRemoveNote={handleRemoveNote}
              onUpdateNote={handleUpdateNote}
              onReorderItems={handleReorderItems}
              onResponsesChange={handleResponsesChange}
              responses={responses}
              hideHeader={true}
              editMode={editMode}
              completedItems={completedItems}
              onToggleComplete={handleToggleComplete}
              highlightedItem={highlightedItem}
            />
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