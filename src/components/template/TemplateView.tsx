'use client';

import { useState } from 'react';
import { GuidanceTemplate, Resource, ReflectionPrompt } from '@/types/template';
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
import { DollarSign, MapPin, UserCheck, Briefcase, Church, Music, Palette, Shirt, Heart, Home, CreditCard, Search, HandCoins, FileText, Truck, Target, User, PenTool, Network, MessageSquare, CheckSquare, TrendingUp, Stethoscope, Baby, Calendar, Shield, Activity } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

interface TemplateViewProps {
  template: GuidanceTemplate;
}

export function TemplateView({ template }: TemplateViewProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [additionalPrompts, setAdditionalPrompts] = useState<ReflectionPrompt[]>([]);
  const [openResource, setOpenResource] = useState<Resource | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});

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
    setAdditionalPrompts(prev => [...prev, prompt]);
  };

  const handleRemovePrompt = (promptId: string) => {
    setAdditionalPrompts(prev => prev.filter(p => p.id !== promptId));
  };

  const handleOpenResource = (resource: Resource) => {
    setOpenResource(resource);
  };

  const handleCloseResource = () => {
    setOpenResource(null);
  };

  const handleResponsesChange = (newResponses: Record<string, string>) => {
    setResponses(newResponses);
  };


  // Calculate completion stats
  const completedPrompts = Object.values(responses).filter(response => response.trim() !== '').length;
  const totalPrompts = additionalPrompts.length;

  // Get experts for this template
  const templateExperts = getTemplateExperts(template.id);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground">
        <CommandPalette
          template={template}
          onSectionChange={setActiveSection}
          onInsertPrompt={handleInsertPrompt}
          onOpenResource={handleOpenResource}
        />
        <TemplataContentSidebar
          template={template}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onInsertPrompt={handleInsertPrompt}
          onOpenResource={handleOpenResource}
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
              <div className="flex flex-col gap-2">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage>{template.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                {templateExperts.length > 0 && (
                  <ExpertBadgeList experts={templateExperts} variant="inline" maxDisplay={2} />
                )}
              </div>
              <div className="ml-auto flex items-center gap-3">
                <SharePanel
                  templateId={template.id}
                  templateTitle={template.title}
                  responses={responses}
                />
                <PDFExportButton
                  template={template}
                  responses={responses}
                />
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
              </div>
            </header>
            <EmbeddedPrompts
              section={template.sections[activeSection]}
              additionalPrompts={additionalPrompts}
              onRemovePrompt={handleRemovePrompt}
              onResponsesChange={handleResponsesChange}
              responses={responses}
              hideHeader={true}
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