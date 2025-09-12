'use client';

import { useState } from 'react';
import { GuidanceTemplate, Resource, ReflectionPrompt } from '@/types/template';
import { EmbeddedPrompts } from '@/components/prompts/EmbeddedPrompts';
import { TemplataContentSidebar } from '@/components/templata-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeSelector } from '@/components/theme-selector';
import { ResourceViewer } from '@/components/resource/ResourceViewer';
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

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground">
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
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{template.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="ml-auto">
                <ThemeSelector />
              </div>
            </header>
            <EmbeddedPrompts 
              section={template.sections[activeSection]} 
              additionalPrompts={additionalPrompts}
              onRemovePrompt={handleRemovePrompt}
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