"use client";

import {
  Heart,
  Home,
  Briefcase,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/layout";
import { FullTemplatePreview } from "@/components/preview/FullTemplatePreview";

export interface Tab {
  title: string;
  icon: React.ReactNode;
  image: string;
}

const templateTabs: Tab[] = [
  {
    title: "Wedding Planning",
    icon: <Heart />,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
  },
  {
    title: "Home Buying",
    icon: <Home />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
  },
  {
    title: "Career Change",
    icon: <Briefcase />,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
  },
  {
    title: "Business Launch",
    icon: <TrendingUp />,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
  },
  {
    title: "Event Planning",
    icon: <Calendar />,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
  },
];

export default function PreviewPage() {
  const [activeTab, setActiveTab] = useState(templateTabs[0]?.title || "");

  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="px-4 py-2"
            >
              <Heart className="mr-2 h-4 w-4" />
              Template Previews
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              See Your Templates
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                In Action
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Experience how our templates transform overwhelming planning into organized, actionable dashboards.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => {
                  const event = new KeyboardEvent('keydown', {
                    key: 'k',
                    metaKey: true,
                    bubbles: true
                  });
                  document.dispatchEvent(event);
                }}
              >
                Browse Templates
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/wedding-planning/app">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 pb-8">
        <div className="mt-8">
              <Tabs defaultValue={templateTabs[0]?.title} onValueChange={setActiveTab}>
                <div className="px-2">
                  <TabsList className="mx-auto mb-6 flex h-auto w-fit max-w-xs flex-wrap justify-center gap-2 md:max-w-none">
                    {templateTabs.map((tab) => (
                      <TabsTrigger
                        key={tab.title}
                        value={tab.title}
                        className="text-muted-foreground font-normal"
                      >
                        {tab.icon}
                        {tab.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <div className="relative isolate">
                  <div className="relative z-10">
                    {templateTabs.map((tab) => (
                      <TabsContent
                        key={tab.title}
                        value={tab.title}
                        className={cn(
                          "bg-background -mx-px transition-opacity duration-500",
                          {
                            "animate-in fade-in opacity-100":
                              activeTab === tab.title,
                            "opacity-0": activeTab !== tab.title,
                          },
                        )}
                      >
                        <div className="border-border aspect-[16/10] w-full border bg-background shadow-[0_6px_20px_rgb(0,0,0,0.12)]">
                          <FullTemplatePreview templateType={tab.title} />
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                  <span className="-inset-x-1/5 bg-border absolute top-0 -z-10 h-px [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                  <span className="-inset-x-1/5 bg-border absolute bottom-0 -z-10 h-px [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>

                  <span className="-inset-x-1/5 border-border absolute top-12 h-px border-t border-dashed [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                  <span className="-inset-x-1/5 border-border absolute bottom-12 h-px border-t border-dashed [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>

                  <span className="-inset-y-1/5 left-1/6 border-border absolute w-px border-r border-dashed [mask-image:linear-gradient(to_bottom,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                  <span className="-inset-y-1/5 right-1/6 border-border absolute w-px border-r border-dashed [mask-image:linear-gradient(to_bottom,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                </div>
              </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}

// Dashboard Components - Our Actual Template Interface
function WeddingDashboard() {
  return (
    <div className="h-full flex bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20 p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="font-medium text-sm">Wedding Planning</span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
            <Heart className="w-3 h-3" />
            <span>Budget & Finance</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Heart className="w-3 h-3" />
            <span>Venue Selection</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Heart className="w-3 h-3" />
            <span>Guest Management</span>
          </div>
        </div>
        
        <div className="mt-6 text-xs">
          <div className="font-medium mb-2">Reflection Prompts</div>
          <div className="space-y-1">
            <div className="p-2 bg-background rounded border text-xs">What&apos;s your ideal budget range?</div>
            <div className="p-2 bg-background rounded border text-xs">What style reflects your vision?</div>
            <div className="p-2 bg-background rounded border text-xs">Who are your must-have vendors?</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div className="border-b p-3 flex items-center gap-2 text-xs">
          <span>Wedding Planning Guide</span>
          <span>&gt;</span>
          <Heart className="w-3 h-3" />
          <span>Budget & Finance</span>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4">
          <div className="space-y-0">
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">1</span>
                <span className="text-sm font-medium">What&apos;s your total wedding budget?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">2</span>
                <span className="text-sm font-medium">How will you track expenses?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeBuyingDashboard() {
  return (
    <div className="h-full flex bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20 p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="font-medium text-sm">Home Buying</span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
            <Home className="w-3 h-3" />
            <span>Pre-Approval</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Home className="w-3 h-3" />
            <span>House Hunting</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Home className="w-3 h-3" />
            <span>Inspections</span>
          </div>
        </div>
        
        <div className="mt-6 text-xs">
          <div className="font-medium mb-2">Reflection Prompts</div>
          <div className="space-y-1">
            <div className="p-2 bg-background rounded border text-xs">What&apos;s your budget range?</div>
            <div className="p-2 bg-background rounded border text-xs">What neighborhoods interest you?</div>
            <div className="p-2 bg-background rounded border text-xs">Must-have features?</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div className="border-b p-3 flex items-center gap-2 text-xs">
          <span>Home Buying Guide</span>
          <span>&gt;</span>
          <Home className="w-3 h-3" />
          <span>Pre-Approval</span>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4">
          <div className="space-y-0">
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">1</span>
                <span className="text-sm font-medium">What&apos;s your target price range?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">2</span>
                <span className="text-sm font-medium">Have you been pre-approved for a mortgage?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CareerDashboard() {
  return (
    <div className="h-full flex bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20 p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="font-medium text-sm">Career Change</span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
            <Briefcase className="w-3 h-3" />
            <span>Resume & Portfolio</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Briefcase className="w-3 h-3" />
            <span>Networking</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Briefcase className="w-3 h-3" />
            <span>Job Applications</span>
          </div>
        </div>
        
        <div className="mt-6 text-xs">
          <div className="font-medium mb-2">Reflection Prompts</div>
          <div className="space-y-1">
            <div className="p-2 bg-background rounded border text-xs">What skills do you want to use?</div>
            <div className="p-2 bg-background rounded border text-xs">What&apos;s your ideal work environment?</div>
            <div className="p-2 bg-background rounded border text-xs">Target salary range?</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div className="border-b p-3 flex items-center gap-2 text-xs">
          <span>Career Change Guide</span>
          <span>&gt;</span>
          <Briefcase className="w-3 h-3" />
          <span>Resume &amp; Portfolio</span>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4">
          <div className="space-y-0">
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">1</span>
                <span className="text-sm font-medium">What are your key transferable skills?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">2</span>
                <span className="text-sm font-medium">What accomplishments showcase your value?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessDashboard() {
  return (
    <div className="h-full flex bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20 p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="font-medium text-sm">Business Launch</span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
            <TrendingUp className="w-3 h-3" />
            <span>Business Plan</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <TrendingUp className="w-3 h-3" />
            <span>Legal Setup</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <TrendingUp className="w-3 h-3" />
            <span>Marketing Strategy</span>
          </div>
        </div>
        
        <div className="mt-6 text-xs">
          <div className="font-medium mb-2">Reflection Prompts</div>
          <div className="space-y-1">
            <div className="p-2 bg-background rounded border text-xs">What problem are you solving?</div>
            <div className="p-2 bg-background rounded border text-xs">Who is your target market?</div>
            <div className="p-2 bg-background rounded border text-xs">What&apos;s your revenue model?</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div className="border-b p-3 flex items-center gap-2 text-xs">
          <span>Business Launch Guide</span>
          <span>&gt;</span>
          <TrendingUp className="w-3 h-3" />
          <span>Business Plan</span>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4">
          <div className="space-y-0">
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">1</span>
                <span className="text-sm font-medium">What&apos;s your business concept in one sentence?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">2</span>
                <span className="text-sm font-medium">Who are your main competitors?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventDashboard() {
  return (
    <div className="h-full flex bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20 p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="font-medium text-sm">Event Planning</span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
            <Calendar className="w-3 h-3" />
            <span>Event Concept</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Calendar className="w-3 h-3" />
            <span>Venue &amp; Catering</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded">
            <Calendar className="w-3 h-3" />
            <span>Entertainment</span>
          </div>
        </div>
        
        <div className="mt-6 text-xs">
          <div className="font-medium mb-2">Reflection Prompts</div>
          <div className="space-y-1">
            <div className="p-2 bg-background rounded border text-xs">What&apos;s the event purpose?</div>
            <div className="p-2 bg-background rounded border text-xs">How many guests?</div>
            <div className="p-2 bg-background rounded border text-xs">What&apos;s your budget?</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div className="border-b p-3 flex items-center gap-2 text-xs">
          <span>Event Planning Guide</span>
          <span>&gt;</span>
          <Calendar className="w-3 h-3" />
          <span>Event Concept</span>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4">
          <div className="space-y-0">
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">1</span>
                <span className="text-sm font-medium">What type of event are you planning?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
            <div className="border-b p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 bg-primary/10 rounded text-xs flex items-center justify-center">2</span>
                <span className="text-sm font-medium">What atmosphere do you want to create?</span>
              </div>
              <textarea className="w-full h-12 text-xs border rounded p-2 bg-muted/20" placeholder="Your notes..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}