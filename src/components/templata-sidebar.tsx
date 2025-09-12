"use client"

import * as React from "react"
import { Heart, FileText, Users, Plus } from "lucide-react"
import { GuidanceTemplate, ReflectionPrompt, Resource } from "@/types/template"
import { Badge } from "@/components/ui/badge"
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
} from "@/components/ui/sidebar"

interface TemplataContentSidebarProps {
  template: GuidanceTemplate
  activeSection: number
  onSectionChange: (section: number) => void
  onInsertPrompt?: (prompt: ReflectionPrompt) => void
  onOpenResource?: (resource: Resource) => void
}

export function TemplataContentSidebar({
  template,
  activeSection,
  onSectionChange,
  onInsertPrompt,
  onOpenResource,
  ...props
}: TemplataContentSidebarProps & React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState<'prompts' | 'resources'>('prompts')
  const [searchQuery, setSearchQuery] = React.useState('')
  const { setOpen } = useSidebar()

  const currentSection = template.sections[activeSection]
  const filteredPrompts = currentSection?.reflectionPrompts.filter(prompt =>
    prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.helpText?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  const filteredResources = template.resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'consideration': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      case 'planning': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'decision': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
      case 'research': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
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
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <div>
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <span className="text-lg">{template.icon}</span>
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Templata</span>
                    <span className="truncate text-xs">{template.category}</span>
                  </div>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {template.sections.map((section, index) => (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      tooltip={{
                        children: section.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        onSectionChange(index)
                        setActiveTab('prompts')
                        setOpen(true)
                      }}
                      isActive={activeSection === index && activeTab === 'prompts'}
                      className="px-2.5 md:px-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span className="text-xs">{section.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={{
                      children: "Resources",
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveTab('resources')
                      setOpen(true)
                    }}
                    isActive={activeTab === 'resources'}
                    className="px-2.5 md:px-2"
                  >
                    <Users className="w-4 h-4" />
                    <span className="text-xs">Resources</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Content Browser Sidebar */}
      <Sidebar collapsible="none" className="hidden w-80 md:flex h-full">
        <SidebarHeader className="gap-3.5 border-b p-4 flex-shrink-0">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeTab === 'prompts' ? currentSection?.title : 'Resources'}
            </div>
          </div>
          <SidebarInput 
            placeholder="Search prompts and resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SidebarHeader>
        
        <SidebarContent className="flex-1 overflow-hidden">
          <SidebarGroup className="px-0 h-full">
            <SidebarGroupContent className="h-full overflow-y-auto">
              {activeTab === 'prompts' && filteredPrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => onInsertPrompt?.(prompt)}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight last:border-b-0 w-full text-left group"
                >
                  <div className="flex w-full items-center gap-2">
                    <Badge className={`text-xs ${getCategoryColor(prompt.category)}`}>
                      {prompt.category}
                    </Badge>
                    <Plus className="ml-auto w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-medium line-clamp-2">{prompt.prompt}</span>
                  {prompt.helpText && (
                    <span className="line-clamp-2 w-full text-xs whitespace-break-spaces text-muted-foreground">
                      {prompt.helpText}
                    </span>
                  )}
                </button>
              ))}
              
              {activeTab === 'resources' && filteredResources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => onOpenResource?.(resource)}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight last:border-b-0 w-full text-left group"
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
                  <span className="line-clamp-2 w-full text-xs whitespace-break-spaces text-muted-foreground">
                    {resource.excerpt}
                  </span>
                </button>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}