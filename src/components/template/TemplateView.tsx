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
import { DollarSign, MapPin, UserCheck, Briefcase, Church, Music, Palette, Shirt, Heart, Home, CreditCard, Search, HandCoins, FileText, Truck, Target, User, PenTool, Network, MessageSquare, CheckSquare, TrendingUp, Stethoscope, Baby, Calendar, Shield, Activity, ChevronDown, Plus, Edit3 } from 'lucide-react';
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
}

export function TemplateView({ template }: TemplateViewProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [additionalPrompts, setAdditionalPrompts] = useState<ReflectionPrompt[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState<FreeformNote[]>([]);
  const [openResource, setOpenResource] = useState<Resource | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [editMode, setEditMode] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

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
      additionalPrompts: [],
      additionalNotes: [],
      responses: {},
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string>('default');

  const getSectionIcon = (sectionId: string) => {
    switch (sectionId) {
      // Wedding Planning sections
      case 'budget-finance': return <DollarSign className="w-4 h-4" />;
      case 'venue-selection': return <MapPin className="w-4 h-4" />;
      case 'guest-management': return <UserCheck className="w-4 h-4" />;
      case 'vendor-selection': return <Briefcase className="w-4 h-4" />;
      case 'ceremony-planning': return <Church className="w-4 h-4" />;
      case 'reception-planning': return <Music className="w-4 h-4" />;
      case 'styling-decor': return <Palette className="w-4 h-4" />;
      case 'attire-beauty': return <Shirt className="w-4 h-4" />;
      
      // Home Buying sections
      case 'financial-readiness': return <DollarSign className="w-4 h-4" />;
      case 'location-preferences': return <MapPin className="w-4 h-4" />;
      case 'home-specifications': return <Home className="w-4 h-4" />;
      case 'mortgage-financing': return <CreditCard className="w-4 h-4" />;
      case 'house-hunting': return <Search className="w-4 h-4" />;
      case 'making-offers': return <HandCoins className="w-4 h-4" />;
      case 'closing-process': return <FileText className="w-4 h-4" />;
      case 'moving-settling': return <Truck className="w-4 h-4" />;
      
      // Job Search sections
      case 'career-assessment': return <User className="w-4 h-4" />;
      case 'application-materials': return <PenTool className="w-4 h-4" />;
      case 'job-searching': return <Network className="w-4 h-4" />;
      case 'interview-preparation': return <MessageSquare className="w-4 h-4" />;
      case 'offer-evaluation': return <CheckSquare className="w-4 h-4" />;
      case 'career-development': return <TrendingUp className="w-4 h-4" />;
      
      // Baby Planning sections
      case 'pregnancy-preparation': return <Stethoscope className="w-4 h-4" />;
      case 'financial-planning': return <DollarSign className="w-4 h-4" />;
      case 'nursery-preparation': return <Home className="w-4 h-4" />;
      case 'birth-preparation': return <Calendar className="w-4 h-4" />;
      case 'newborn-care': return <Baby className="w-4 h-4" />;
      case 'work-life-balance': return <Activity className="w-4 h-4" />;
      
      default: return <Target className="w-4 h-4" />;
    }
  };

  const handleInsertPrompt = (prompt: ReflectionPrompt) => {
    // Check if prompt is already added
    if (additionalPrompts.some(p => p.id === prompt.id)) {
      return; // Don't add duplicates
    }
    const newPrompts = [prompt, ...additionalPrompts];
    setAdditionalPrompts(newPrompts);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalPrompts: newPrompts, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleRemovePrompt = (promptId: string) => {
    const newPrompts = additionalPrompts.filter(p => p.id !== promptId);
    setAdditionalPrompts(newPrompts);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalPrompts: newPrompts, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleInsertNote = (note: { id: string; title: string }) => {
    const freeformNote: FreeformNote = {
      id: note.id,
      title: note.title,
      content: ''
    };
    const newNotes = [freeformNote, ...additionalNotes];
    setAdditionalNotes(newNotes);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalNotes: newNotes, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleRemoveNote = (noteId: string) => {
    const newNotes = additionalNotes.filter(n => n.id !== noteId);
    setAdditionalNotes(newNotes);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalNotes: newNotes, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleUpdateNote = (noteId: string, updates: Partial<FreeformNote>) => {
    const newNotes = additionalNotes.map(note =>
      note.id === noteId ? { ...note, ...updates } : note
    );
    setAdditionalNotes(newNotes);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalNotes: newNotes, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleReorderPrompts = (prompts: ReflectionPrompt[]) => {
    setAdditionalPrompts(prompts);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalPrompts: prompts, updatedAt: new Date() }
        : workspace
    ));
  };

  const handleReorderNotes = (notes: FreeformNote[]) => {
    setAdditionalNotes(notes);

    // Update current workspace
    setWorkspaces(prev => prev.map(workspace =>
      workspace.id === activeWorkspaceId
        ? { ...workspace, additionalNotes: notes, updatedAt: new Date() }
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
            additionalPrompts,
            additionalNotes,
            responses,
            updatedAt: new Date()
          }
        : workspace
    ));

    // Load new workspace state
    const newWorkspace = workspaces.find(w => w.id === workspaceId);
    if (newWorkspace) {
      setActiveWorkspaceId(workspaceId);
      setAdditionalPrompts(newWorkspace.additionalPrompts);
      setAdditionalNotes(newWorkspace.additionalNotes);
      setResponses(newWorkspace.responses);
    }
  };

  const handleCreateWorkspace = () => {
    const newWorkspace: Workspace = {
      id: `workspace-${Date.now()}`,
      name: `Workspace ${workspaces.length}`,
      templateId: template.id,
      additionalPrompts: [],
      additionalNotes: [],
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
  const totalPrompts = additionalPrompts.length + additionalNotes.length;

  // Get experts for this template
  const templateExperts = getTemplateExperts(template.id);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground">
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
                {(additionalPrompts.length > 0 || additionalNotes.length > 0) && (
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
              additionalPrompts={additionalPrompts}
              additionalNotes={additionalNotes}
              onRemovePrompt={handleRemovePrompt}
              onRemoveNote={handleRemoveNote}
              onUpdateNote={handleUpdateNote}
              onReorderPrompts={handleReorderPrompts}
              onReorderNotes={handleReorderNotes}
              onResponsesChange={handleResponsesChange}
              responses={responses}
              hideHeader={true}
              editMode={editMode}
              completedItems={completedItems}
              onToggleComplete={handleToggleComplete}
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