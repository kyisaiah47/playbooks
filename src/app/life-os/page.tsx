'use client';

import { AppSidebar } from "@/components/life-os-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/life-os-sidebar"
import { LifeOSSidebarProvider } from "@/components/life-os-sidebar-provider"
import { useMultiTemplateIntelligence } from "@/hooks/use-knowledge-graph"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Brain,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Zap,
  Target,
  Heart,
  TrendingUp
} from "lucide-react"

// Mock active templates - in real app, this would come from user state/context
const MOCK_ACTIVE_TEMPLATES = [
  'home-buying',
  'wedding-planning',
  'business-launch',
  'baby-planning'
];

const MOCK_USER_PROFILE = {
  age: 28,
  goals: ['family_focused', 'financial_independence'],
  completedTemplates: ['job-search', 'personal-finance'],
  currentTemplates: MOCK_ACTIVE_TEMPLATES
};

function ActiveTemplatesWidget({ activeTemplates }: { activeTemplates: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="w-5 h-5 text-blue-500" />
          Active Templates ({activeTemplates.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {activeTemplates.map(templateId => (
            <div key={templateId} className="flex items-center justify-between p-3 rounded-lg border">
              <span className="font-medium">{templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
              <Badge variant="secondary">Active</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ConflictDetectionWidget({ conflicts, synergies, overallHealth }: {
  conflicts: Array<{template1: string, template2: string, reason: string, resolution: string}>,
  synergies: Array<{template1: string, template2: string, strength: number}>,
  overallHealth: 'healthy' | 'caution' | 'problematic'
}) {
  const healthConfig = {
    healthy: { color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle2, text: 'Healthy Workspace' },
    caution: { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: AlertTriangle, text: 'Some Conflicts' },
    problematic: { color: 'text-red-600', bg: 'bg-red-50', icon: AlertTriangle, text: 'High Conflicts' }
  }

  const config = healthConfig[overallHealth]
  const Icon = config.icon

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="w-5 h-5 text-purple-500" />
          Intelligence Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Health */}
        <div className={`flex items-center gap-3 p-3 rounded-lg ${config.bg}`}>
          <Icon className={`w-5 h-5 ${config.color}`} />
          <div>
            <div className={`font-medium ${config.color}`}>{config.text}</div>
            <div className="text-sm text-muted-foreground">
              {conflicts.length} conflicts • {synergies.length} synergies detected
            </div>
          </div>
        </div>

        {/* Conflicts */}
        {conflicts.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-red-600 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Template Conflicts
            </h4>
            {conflicts.map((conflict, i) => (
              <Alert key={i}>
                <AlertDescription>
                  <div className="space-y-1">
                    <div className="font-medium">
                      {conflict.template1.replace('-', ' ')} ↔ {conflict.template2.replace('-', ' ')}
                    </div>
                    <div className="text-sm text-muted-foreground">{conflict.reason}</div>
                    <div className="text-sm font-medium">Resolution: {conflict.resolution}</div>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* Synergies */}
        {synergies.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-green-600 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Template Synergies
            </h4>
            {synergies.map((synergy, i) => (
              <div key={i} className="p-2 rounded-lg bg-green-50 border-green-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    {synergy.template1.replace('-', ' ')} + {synergy.template2.replace('-', ' ')}
                  </span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {synergy.strength}% synergy
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function RecommendationsWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="w-5 h-5 text-green-500" />
          Smart Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <div className="font-medium text-blue-800">Consider adding Personal Finance</div>
                <div className="text-sm text-blue-600">
                  Critical for your home buying and wedding planning financial coordination
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-green-200 bg-green-50">
            <div className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-green-600 mt-0.5" />
              <div className="flex-1">
                <div className="font-medium text-green-800">Sequence Timing Optimization</div>
                <div className="text-sm text-green-600">
                  Complete wedding planning before baby planning for optimal timing
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" size="sm" className="w-full">
            View All Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function SimpleTemplateOverview({ activeTemplates }: { activeTemplates: string[] }) {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="w-5 h-5 text-indigo-500" />
          Active Templates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {activeTemplates.map(templateId => (
            <div key={templateId} className="flex items-center justify-between p-3 rounded-lg border">
              <span className="font-medium">{templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
              <Badge variant="secondary">Active</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function LifeOSPage() {
  // Get multi-template intelligence
  const workspaceIntelligence = useMultiTemplateIntelligence(MOCK_ACTIVE_TEMPLATES, MOCK_USER_PROFILE)

  return (
    <LifeOSSidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Life OS
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Intelligent Workspace</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">
          {/* Top Row - Overview Cards */}
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            <ActiveTemplatesWidget activeTemplates={MOCK_ACTIVE_TEMPLATES} />
            <ConflictDetectionWidget
              conflicts={workspaceIntelligence.conflicts}
              synergies={workspaceIntelligence.synergies}
              overallHealth={workspaceIntelligence.overallHealth}
            />
            <RecommendationsWidget />
          </div>

          {/* Bottom Row - Cross-Template Intelligence */}
          <div className="grid gap-6 md:grid-cols-3">
            <SimpleTemplateOverview activeTemplates={MOCK_ACTIVE_TEMPLATES} />
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Update wedding budget</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm">Research neighborhoods</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-sm">Plan business timeline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </LifeOSSidebarProvider>
  );
}