'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ThemeSelector } from '@/components/theme-selector';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { 
  Heart, 
  Home, 
  Briefcase, 
  TrendingUp, 
  Calendar,
  DollarSign,
  MapPin,
  UserCheck,
  Church,
  Music,
  Palette,
  Shirt,
  Menu,
  X,
  BookOpen,
  FileText,
  ExternalLink,
  Lightbulb,
  Target,
  Users,
  Plus,
  CreditCard,
  Search,
  ClipboardCheck,
  Handshake,
  Key,
  User,
  Send,
  MessageCircle,
  Scale,
  PiggyBank,
  Megaphone,
  Settings,
  CheckSquare,
  Utensils,
  PartyPopper,
  Calendar as CalendarIcon,
  UserPlus
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface FullTemplatePreviewProps {
  templateType: string;
}

const templateData = {
  "Wedding Planning": {
    icon: Heart,
    sections: [
      { id: 'budget-finance', title: 'Budget & Finance', icon: DollarSign },
      { id: 'venue-selection', title: 'Venue Selection', icon: MapPin },
      { id: 'guest-management', title: 'Guest Management', icon: UserCheck },
      { id: 'vendor-selection', title: 'Vendor Selection', icon: Briefcase },
      { id: 'ceremony-planning', title: 'Ceremony Planning', icon: Church },
      { id: 'reception-planning', title: 'Reception Planning', icon: Music },
      { id: 'styling-decor', title: 'Styling & Decor', icon: Palette },
      { id: 'attire-beauty', title: 'Attire & Beauty', icon: Shirt },
    ],
    prompts: [
      "What's your total wedding budget?",
      "How will you track expenses throughout planning?",
      "What's your ideal venue style and capacity?",
      "Which vendors are absolute must-haves?",
      "What's your guest list size and demographics?",
      "How do you envision your ceremony flow?"
    ],
    resources: [
      { title: "Wedding Budget Tracker", type: "spreadsheet", description: "Track all expenses and payments" },
      { title: "Guest List Template", type: "document", description: "Manage RSVPs and seating" },
      { title: "Vendor Contact Sheet", type: "document", description: "Keep all vendor info organized" },
      { title: "Wedding Timeline", type: "checklist", description: "Month-by-month planning guide" }
    ]
  },
  "Home Buying": {
    icon: Home,
    sections: [
      { id: 'pre-approval', title: 'Pre-Approval', icon: CreditCard },
      { id: 'house-hunting', title: 'House Hunting', icon: Search },
      { id: 'inspections', title: 'Inspections', icon: ClipboardCheck },
      { id: 'negotiations', title: 'Negotiations', icon: Handshake },
      { id: 'closing', title: 'Closing Process', icon: Key },
    ],
    prompts: [
      "What's your target price range?",
      "Have you been pre-approved for a mortgage?",
      "What neighborhoods are you considering?",
      "What are your must-have home features?",
      "How flexible are you on closing timeline?",
      "What's your backup plan if first choice falls through?"
    ],
    resources: [
      { title: "Home Buying Checklist", type: "checklist", description: "Step-by-step buying process" },
      { title: "Mortgage Calculator", type: "calculator", description: "Calculate monthly payments" },
      { title: "Home Inspection Checklist", type: "checklist", description: "What to look for during inspection" },
      { title: "Closing Costs Worksheet", type: "spreadsheet", description: "Track all closing expenses" }
    ]
  },
  "Career Change": {
    icon: Briefcase,
    sections: [
      { id: 'self-assessment', title: 'Self Assessment', icon: User },
      { id: 'resume-portfolio', title: 'Resume & Portfolio', icon: FileText },
      { id: 'networking', title: 'Networking', icon: UserPlus },
      { id: 'job-applications', title: 'Job Applications', icon: Send },
      { id: 'interviews', title: 'Interviews', icon: MessageCircle },
    ],
    prompts: [
      "What are your key transferable skills?",
      "What accomplishments showcase your value?",
      "What type of work environment do you thrive in?",
      "What's your target salary range?",
      "Who's in your professional network?",
      "What's your timeline for making this change?"
    ],
    resources: [
      { title: "Skills Assessment Worksheet", type: "worksheet", description: "Identify transferable skills" },
      { title: "Resume Template", type: "document", description: "Professional resume format" },
      { title: "Interview Prep Guide", type: "guide", description: "Common questions and answers" },
      { title: "Networking Tracker", type: "spreadsheet", description: "Track contacts and follow-ups" }
    ]
  },
  "Business Launch": {
    icon: TrendingUp,
    sections: [
      { id: 'business-plan', title: 'Business Plan', icon: BookOpen },
      { id: 'legal-setup', title: 'Legal Setup', icon: Scale },
      { id: 'financial-planning', title: 'Financial Planning', icon: PiggyBank },
      { id: 'marketing-strategy', title: 'Marketing Strategy', icon: Megaphone },
      { id: 'operations', title: 'Operations', icon: Settings },
    ],
    prompts: [
      "What's your business concept in one sentence?",
      "Who are your main competitors?",
      "What problem are you solving for customers?",
      "Who is your target market?",
      "What's your revenue model?",
      "How will you measure success in year one?"
    ],
    resources: [
      { title: "Business Plan Template", type: "document", description: "Comprehensive business plan outline" },
      { title: "Financial Projections", type: "spreadsheet", description: "Revenue and expense forecasting" },
      { title: "Legal Checklist", type: "checklist", description: "Required business registrations" },
      { title: "Marketing Plan Template", type: "document", description: "Strategic marketing approach" }
    ]
  },
  "Event Planning": {
    icon: Calendar,
    sections: [
      { id: 'event-concept', title: 'Event Concept', icon: Lightbulb },
      { id: 'venue-catering', title: 'Venue & Catering', icon: Utensils },
      { id: 'entertainment', title: 'Entertainment', icon: PartyPopper },
      { id: 'logistics', title: 'Logistics', icon: CheckSquare },
      { id: 'day-of-coordination', title: 'Day-of Coordination', icon: CalendarIcon },
    ],
    prompts: [
      "What type of event are you planning?",
      "What atmosphere do you want to create?",
      "What's the purpose of this event?",
      "How many guests will attend?",
      "What's your total budget?",
      "What's your contingency plan for weather/issues?"
    ],
    resources: [
      { title: "Event Planning Timeline", type: "checklist", description: "When to book each vendor" },
      { title: "Budget Tracker", type: "spreadsheet", description: "Track all event expenses" },
      { title: "Vendor Contact List", type: "document", description: "All vendor information in one place" },
      { title: "Day-of Schedule", type: "schedule", description: "Minute-by-minute event timeline" }
    ]
  }
};

export function FullTemplatePreview({ templateType }: FullTemplatePreviewProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedPrompts, setSelectedPrompts] = useState<string[]>([]);
  
  const template = templateData[templateType as keyof typeof templateData];
  if (!template) return null;

  // Auto-open resource and add some prompts for preview
  const openResource = template.resources[0];
  const previewPrompts = template.prompts.slice(0, 2);

  const TemplateIcon = template.icon;
  const sections = template.sections;
  const currentSection = sections[activeSection];
  const SectionIcon = currentSection.icon;

  return (
    <div className="absolute inset-0 w-full h-full bg-background border-t border-b">
      <SidebarProvider>
        <div className="flex absolute inset-0">
          {/* Content Sidebar */}
          <div className="w-64 border-r bg-muted/20 flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="font-medium text-sm">{templateType}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-2 flex-1">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Sections</div>
              <div className="space-y-0.5">
                {sections.slice(0, 4).map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={section.id}
                      className={`w-full flex items-center gap-2 p-2 rounded text-xs ${
                        index === activeSection ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="truncate">{section.title}</span>
                    </div>
                  );
                })}
              </div>

              {/* Reflection Prompts */}
              <div className="mt-6">
                <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Reflection Prompts</div>
                <div className="space-y-1">
                  {template.prompts.slice(0, 3).map((prompt, index) => (
                    <div
                      key={index}
                      className="w-full p-2 bg-background rounded border text-xs"
                    >
                      <div className="line-clamp-2">{prompt}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex h-full">
            {/* Prompts Area */}
            <div className="w-1/2 flex flex-col border-r h-full">
              {/* Header */}
              <div className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink asChild>
                        <button onClick={() => { const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }); document.dispatchEvent(event); }}>
                          {templateType}
                        </button>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <div className="flex items-center gap-2">
                        <SectionIcon className="w-3 h-3" />
                        <BreadcrumbPage className="text-xs">{currentSection.title}</BreadcrumbPage>
                      </div>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Prompts Content */}
              <div className="flex-1 overflow-auto">
                <div className="min-h-full">
                  {previewPrompts.map((prompt, index) => (
                    <div key={index} className="border-b p-4 space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-primary/10 rounded text-xs text-primary font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2">{prompt}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs h-4 px-1.5">
                              planning
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Textarea
                        placeholder="Your notes..."
                        value={index === 0 ? "Need to research average costs for our area..." : ""}
                        className="min-h-[80px] text-sm"
                        readOnly
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Panel */}
            <div className="w-1/2 bg-muted/20 flex flex-col h-full">
              <div className="flex h-12 items-center justify-between px-4 border-b">
                <h3 className="text-sm font-medium">Resources</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-auto">
                <div className="space-y-4 min-h-full flex flex-col">
                  <div>
                    <h4 className="font-medium text-lg mb-2">{openResource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{openResource.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {openResource.type}
                    </Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3 flex-1">
                    <div className="text-sm">
                      <strong>Resource Preview:</strong>
                    </div>
                    <div className="bg-background border rounded-lg p-4 space-y-3 flex-1">
                      <div className="text-xs text-muted-foreground">
                        This is a preview of your {openResource.type}. The actual resource would contain:
                      </div>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Interactive templates and worksheets</li>
                        <li>• Step-by-step instructions</li>
                        <li>• Expert tips and best practices</li>
                        <li>• Examples and case studies</li>
                      </ul>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Open Resource
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}