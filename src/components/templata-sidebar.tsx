"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, FileText, Users, Plus, DollarSign, MapPin, UserCheck, Briefcase, Church, Music, Palette, Shirt, Home, CreditCard, Search, HandCoins, Truck, Target, User, PenTool, Network, MessageSquare, CheckSquare, TrendingUp, Stethoscope, Baby, Calendar, Shield, Activity, Wallet, Bed, Lightbulb, BarChart, Handshake, Rocket, Zap, Brain, Clock, Dumbbell, Apple, Scale, Camera, Timer, Calculator, BookOpen, GraduationCap, School, Award, Banknote, PiggyBank, Receipt, Focus, Layout, Settings, Package, ClipboardList, ArrowRight, Globe, Plane, Utensils, ChefHat, Microscope, Database, PenSquare, Bookmark, FlaskConical, ShoppingCart, Moon, ExternalLink, Ban, HelpCircle, CheckCircle, Compass, Clipboard, Sunset, Share, Copy } from "lucide-react"
import { GuidanceTemplate, ReflectionQuestion, Resource } from "@/types/guide"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RelatedTemplates } from "@/components/guide/related-templates"
import { ThemeSelector } from "@/components/theme-selector"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter,
} from "@/components/ui/template-sidebar"
import { SubtleGlow } from "@/components/ui/glow-variants"

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'consideration': return <HelpCircle className="w-4 h-4" />
    case 'planning': return <Clipboard className="w-4 h-4" />
    case 'decision': return <CheckCircle className="w-4 h-4" />
    case 'research': return <Compass className="w-4 h-4" />
    default: return <MessageSquare className="w-4 h-4" />
  }
}

const iconMap: Record<string, any> = {
  Heart, FileText, Users, Plus, DollarSign, MapPin, UserCheck, Briefcase, Church, Music, Palette, Shirt, Home, CreditCard, Search, HandCoins, Truck, Target, User, PenTool, Network, MessageSquare, CheckSquare, TrendingUp, Stethoscope, Baby, Calendar, Shield, Activity, Wallet, Bed, Lightbulb, BarChart, Handshake, Rocket, Zap, Brain, Clock, Dumbbell, Apple, Scale, Camera, Timer, Calculator, BookOpen, GraduationCap, School, Award, Banknote, PiggyBank, Receipt, Focus, Layout, Settings, Package, ClipboardList, ArrowRight, Globe, Plane, Utensils, ChefHat, Microscope, Database, PenSquare, Bookmark, FlaskConical, ShoppingCart, Moon, ExternalLink, Ban, HelpCircle, CheckCircle, Compass, Clipboard, Sunset
};

const getSectionIcon = (iconName?: string) => {
  const IconComponent = iconName ? iconMap[iconName] || Target : Target;
  return <IconComponent className="w-4 h-4" />;
};

interface TemplataContentSidebarProps {
  guide: GuidanceTemplate
  activeSection: number
  onSectionChange: (section: number) => void
  onInsertQuestion?: (question: ReflectionQuestion) => void
  onInsertNote?: (note: { id: string; title: string }) => void
  onOpenResource?: (resource: Resource) => void
  responses?: Record<string, string>
  workspaces?: { id: string; name: string }[]
  activeWorkspaceId?: string
  onWorkspaceChange?: (workspaceId: string) => void
  onCreateWorkspace?: () => void
  highlightedItem?: string | null
  allItems?: (ReflectionQuestion | any)[]
}

export function TemplataContentSidebar({
  template,
  activeSection,
  onSectionChange,
  onInsertQuestion,
  onInsertNote,
  onOpenResource,
  responses,
  workspaces = [],
  activeWorkspaceId,
  onWorkspaceChange,
  onCreateWorkspace,
  highlightedItem,
  allItems,
  ...props
}: TemplataContentSidebarProps & React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState<'questions' | 'resources' | 'related'>('questions')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [categoryNameFilter, setCategoryNameFilter] = React.useState<string>('all')
  const [categoryTypeFilter, setCategoryTypeFilter] = React.useState<string>('all')
  const { setOpen } = useSidebar()

  const currentSection = guide.sections?.[activeSection]
  const sectionPrompts = currentSection?.reflectionPrompts || []

  // Fetch questions from API client-side
  const [templateRegistryPrompts, setTemplateRegistryPrompts] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch(`/api/questions?guideId=${guide.id}`)
      .then(res => res.json())
      .then(data => setTemplateRegistryPrompts(data.questions || []))
      .catch(err => console.error('Failed to load questions:', err))
  }, [guide.id])

  // Convert registry questions to display format with categoryNumber and categoryName
  const displayPrompts = [...sectionPrompts, ...templateRegistryPrompts.map(p => ({
    id: p.id,
    question: p.question,
    category: p.category,
    categoryNumber: p.categoryNumber,
    categoryName: p.categoryName
  }))]

  const filteredQuestions = displayPrompts.filter((question: any) => {
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.category?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategoryName = categoryNameFilter === 'all' || question.categoryName === categoryNameFilter
    const matchesCategoryType = categoryTypeFilter === 'all' || question.category === categoryTypeFilter
    return matchesSearch && matchesCategoryName && matchesCategoryType
  })

  // Get unique category names and types for filter dropdowns
  const uniqueCategoryNames = Array.from(new Set(displayPrompts.map((p: any) => p.categoryName).filter(Boolean)))
  const uniqueCategoryTypes = Array.from(new Set(displayPrompts.map((p: any) => p.category).filter(Boolean)))

  // Articles loading - fetch from API client-side filtered by template
  const [templateResources, setTemplateResources] = React.useState<any[]>([])

  React.useEffect(() => {
    // Fetch readings that have this guide ID
    fetch(`/api/readings?limit=100`)
      .then(res => res.json())
      .then(data => {
        const readings = data.readings || []
        // Filter to only readings that match this guide ID
        const filtered = readings.filter((a: any) => a.template === guide.id)
        setTemplateResources(filtered)
      })
      .catch(err => console.error('Failed to load readings:', err))
  }, [guide.id])

  const filteredResources = templateResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'consideration': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      case 'planning': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'decision': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
      case 'research': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
      case 'reflection': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      case 'action': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
      case 'expert': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
      default: return 'bg-muted text-muted-foreground'
    }
  }


  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden h-screen *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* Navigation Sidebar */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r h-full"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0 justify-center hover:[&_img]:scale-110 hover:[&_img]:animate-bounce">
                <Link href="/" className="flex justify-center">
                  <Image
                    src="/brand/templata-logo.svg"
                    alt="Templata"
                    width={16}
                    height={16}
                    className="dark:invert transition-transform duration-200"
                  />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {/* Theme Selector */}
                <SidebarMenuItem>
                  <div className="flex justify-center hover:[&>*]:scale-110 hover:[&>*]:animate-bounce [&>*]:!bg-transparent [&>*]:!border-0 [&>*]:!p-0 [&>*]:!h-4 [&>*]:!w-4 [&>*]:!min-w-4 [&>*]:transition-transform [&>*]:duration-200">
                    <ThemeSelector iconOnly />
                  </div>
                </SidebarMenuItem>

                {guide.sections?.map((section, index) => (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        onSectionChange(index)
                        setActiveTab('questions')
                        setOpen(true)
                      }}
                      isActive={activeSection === index && activeTab === 'questions'}
                      className="px-2.5 md:px-2 hover:[&>div]:scale-110 hover:[&>div]:animate-bounce"
                    >
                      <div className="transition-transform duration-200">
                        {getSectionIcon(section.icon)}
                      </div>
                      <span className="text-xs">{section.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* Horizontal divider */}
                <div className="px-2 py-2">
                  <div className="h-px bg-border opacity-50"></div>
                </div>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => {
                      setActiveTab('questions')
                      setOpen(true)
                    }}
                    isActive={activeTab === 'questions'}
                    className="px-2.5 md:px-2 hover:[&>div]:scale-110 hover:[&>div]:animate-bounce"
                  >
                    <div className="transition-transform duration-200">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="text-xs">Prompts</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => {
                      setActiveTab('resources')
                      setOpen(true)
                    }}
                    isActive={activeTab === 'resources'}
                    className="px-2.5 md:px-2 hover:[&>div]:scale-110 hover:[&>div]:animate-bounce"
                  >
                    <div className="transition-transform duration-200">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-xs">Resources</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => {
                      setActiveTab('related')
                      setOpen(true)
                    }}
                    isActive={activeTab === 'related'}
                    className="px-2.5 md:px-2 hover:[&>div]:scale-110 hover:[&>div]:animate-bounce"
                  >
                    <div className="transition-transform duration-200">
                      <Network className="w-4 h-4" />
                    </div>
                    <span className="text-xs">Related</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Divider */}
                <div className="mx-2 my-2 h-px bg-border" />

                {/* Workspaces section */}
                {workspaces.map((workspace) => (
                  <SidebarMenuItem key={workspace.id}>
                    <SidebarMenuButton
                      onClick={() => onWorkspaceChange?.(workspace.id)}
                      isActive={activeWorkspaceId === workspace.id}
                      className="px-2.5 md:px-2 hover:[&>div]:scale-110 hover:[&>div]:animate-bounce"
                    >
                      <div className="transition-transform duration-200">
                        <Bookmark className="w-4 h-4" />
                      </div>
                      <span className="text-xs truncate">{workspace.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* Add workspace button */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => onCreateWorkspace?.()}
                    className="px-2.5 md:px-2 text-muted-foreground hover:text-foreground hover:[&>div]:scale-110 hover:[&>div]:animate-bounce"
                  >
                    <div className="transition-transform duration-200">
                      <Plus className="w-4 h-4" />
                    </div>
                    <span className="text-xs">Add Workspace</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

      </Sidebar>

      {/* Content Browser Sidebar */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4 flex-shrink-0">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeTab === 'questions' ? currentSection?.title :
               activeTab === 'resources' ? 'Resources' : 'Related Guides'}
            </div>
          </div>
          {activeTab !== 'related' && (
            <div className="flex flex-col gap-2">
              <SidebarInput
                placeholder={activeTab === 'questions' ? 'Search questions...' : 'Search resources...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {activeTab === 'questions' && (
                <div className="flex gap-2">
                  <Select value={categoryNameFilter} onValueChange={setCategoryNameFilter}>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {uniqueCategoryNames.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={categoryTypeFilter} onValueChange={setCategoryTypeFilter}>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {uniqueCategoryTypes.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}
        </SidebarHeader>
        
        <SidebarContent className="flex-1 overflow-hidden">
          <SidebarGroup className="px-0 h-full">
            <SidebarGroupContent className="h-full overflow-y-auto">
              {activeTab === 'questions' && (
                <div className="px-2 py-1">
                  <SubtleGlow>
                    <button
                      onClick={() => onInsertNote?.({
                        id: `note-${Date.now()}`,
                        title: "New Note"
                      })}
                      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 p-4 text-sm w-full text-left group/add-note hover:[&>div]:scale-110 hover:[&>div]:rotate-3 overflow-hidden rounded-lg"
                    >
                      <div className="transition-transform duration-200">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span>Add Note</span>
                      <ArrowRight className="ml-auto w-3 h-3 opacity-30 group-hover/add-note:opacity-100 group-hover/add-note:translate-x-1 transition-all duration-200" />
                    </button>
                  </SubtleGlow>
                </div>
              )}
              {activeTab === 'questions' && (() => {
                // Sort questions: not-added first, already-added at bottom
                const sortedPrompts = [...filteredQuestions].sort((a, b) => {
                  const aIsAdded = allItems?.some(item => item.id === a.id) || false;
                  const bIsAdded = allItems?.some(item => item.id === b.id) || false;

                  if (aIsAdded && !bIsAdded) return 1;  // a goes to bottom
                  if (!aIsAdded && bIsAdded) return -1; // b goes to bottom
                  return 0; // maintain original order for same type
                });

                return sortedPrompts.map((question) => {
                  const isAlreadyAdded = allItems?.some(item => item.id === question.id) || false;

                return (
                <div key={question.id} className="px-2 py-1">
                  <SubtleGlow>
                    <button
                      onClick={() => onInsertQuestion?.(question)}
                      className={`hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 p-4 text-sm leading-tight w-full text-left group/question overflow-hidden rounded-lg transition-all duration-200 ${
                        isAlreadyAdded ? 'opacity-50 cursor-pointer' : ''
                      }`}
                    >
                    <div className="flex w-full items-center gap-2">
                      <Badge className={`text-xs ${getCategoryColor(question.category)}`}>
                        {question.category}
                      </Badge>
                      {highlightedItem === question.id ? (
                        <div className="ml-auto flex items-center gap-1 text-destructive animate-pulse">
                          <span className="text-xs font-medium">Already added</span>
                          <Ban className="w-4 h-4" />
                        </div>
                      ) : isAlreadyAdded ? (
                        <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                          <span className="text-xs font-medium">Added</span>
                          <CheckSquare className="w-3 h-3" />
                        </div>
                      ) : (
                        <ArrowRight className="ml-auto w-3 h-3 opacity-30 group-hover/question:opacity-100 group-hover/question:translate-x-1 transition-all duration-200" />
                      )}
                    </div>
                    <span className="font-medium line-clamp-3">{question.question}</span>
                    </button>
                  </SubtleGlow>
                </div>
              );
                });
              })()}

              {activeTab === 'resources' && filteredResources.map((resource) => (
                <div key={resource.id} className="px-2 py-1">
                  <SubtleGlow>
                    <button
                      onClick={() => onOpenResource?.(resource)}
                      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 p-4 text-sm leading-tight w-full text-left group overflow-hidden rounded-lg"
                    >
                    <div className="flex w-full items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </Badge>
                      <span className="ml-auto text-xs text-muted-foreground">{resource.readTime}</span>
                    </div>
                    <span className="font-medium line-clamp-2">{resource.title}</span>
                    <div className="line-clamp-2 text-xs whitespace-break-spaces text-muted-foreground overflow-hidden">
                      {resource.excerpt.split('**').map((part, index) =>
                        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                      )}
                    </div>
                    </button>
                  </SubtleGlow>
                </div>
              ))}

              {activeTab === 'related' && (
                <div className="p-4">
                  <RelatedTemplates guideId={guide.id} />
                </div>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}