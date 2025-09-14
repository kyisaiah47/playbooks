"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, FileText, Users, Plus, DollarSign, MapPin, UserCheck, Briefcase, Church, Music, Palette, Shirt, Home, CreditCard, Search, HandCoins, Truck, Target, User, PenTool, Network, MessageSquare, CheckSquare, TrendingUp, Stethoscope, Baby, Calendar, Shield, Activity, Wallet, Bed, Lightbulb, BarChart, Handshake, Rocket, Zap, Brain, Clock, Dumbbell, Apple, Scale, Camera, Timer, Calculator, BookOpen, GraduationCap, School, Award, Banknote, PiggyBank, Receipt, Focus, Layout, Settings, Package, ClipboardList, ArrowRight, Globe, Plane, Utensils, ChefHat, Microscope, Database, PenSquare, Bookmark, FlaskConical, ShoppingCart, Moon, ExternalLink } from "lucide-react"
import { GuidanceTemplate, ReflectionPrompt, Resource } from "@/types/template"
import { Badge } from "@/components/ui/badge"
import { ThemeSelector } from "@/components/theme-selector"
import { RelatedTemplates } from "@/components/template/related-templates"
import { SharePanel } from "@/components/collaboration/share-panel"
import { PDFExportButton } from "@/components/pdf/export-button"
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
} from "@/components/ui/sidebar"

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
    case 'financial-readiness': return <Shield className="w-4 h-4" />;
    case 'location-preferences': return <Target className="w-4 h-4" />;
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
    case 'financial-planning': return <Wallet className="w-4 h-4" />;
    case 'nursery-preparation': return <Bed className="w-4 h-4" />;
    case 'birth-preparation': return <Calendar className="w-4 h-4" />;
    case 'newborn-care': return <Baby className="w-4 h-4" />;
    case 'work-life-balance': return <Activity className="w-4 h-4" />;
    
    // Business Launch sections
    case 'business-validation': return <Lightbulb className="w-4 h-4" />;
    case 'legal-structure': return <Shield className="w-4 h-4" />;
    case 'financial-planning': return <Calculator className="w-4 h-4" />;
    case 'brand-marketing': return <Rocket className="w-4 h-4" />;
    case 'operations-systems': return <Settings className="w-4 h-4" />;
    case 'launch-growth': return <TrendingUp className="w-4 h-4" />;
    
    // Fitness Journey sections
    case 'goal-assessment': return <Target className="w-4 h-4" />;
    case 'nutrition-planning': return <Apple className="w-4 h-4" />;
    case 'workout-planning': return <Dumbbell className="w-4 h-4" />;
    case 'tracking-progress': return <BarChart className="w-4 h-4" />;
    case 'lifestyle-integration': return <Activity className="w-4 h-4" />;
    
    // College Planning sections
    case 'college-selection': return <School className="w-4 h-4" />;
    case 'application-strategy': return <Calendar className="w-4 h-4" />;
    case 'essay-writing': return <PenTool className="w-4 h-4" />;
    case 'financial-aid': return <Award className="w-4 h-4" />;
    case 'final-decisions': return <CheckSquare className="w-4 h-4" />;
    
    // Budget Planning sections
    case 'financial-assessment': return <Calculator className="w-4 h-4" />;
    case 'budget-creation': return <PiggyBank className="w-4 h-4" />;
    case 'debt-management': return <CreditCard className="w-4 h-4" />;
    case 'savings-investment': return <TrendingUp className="w-4 h-4" />;
    case 'tracking-optimization': return <BarChart className="w-4 h-4" />;
    
    // Productivity System sections
    case 'productivity-assessment': return <Brain className="w-4 h-4" />;
    case 'time-blocking-system': return <Clock className="w-4 h-4" />;
    case 'task-management': return <CheckSquare className="w-4 h-4" />;
    case 'focus-techniques': return <Focus className="w-4 h-4" />;
    case 'system-optimization': return <Settings className="w-4 h-4" />;
    
    // Moving sections
    case 'moving-planning': return <Calendar className="w-4 h-4" />;
    case 'vendor-selection': return <Truck className="w-4 h-4" />;
    case 'packing-organization': return <Package className="w-4 h-4" />;
    case 'moving-checklist': return <ClipboardList className="w-4 h-4" />;
    
    // Event Planning sections
    case 'event-vision': return <Lightbulb className="w-4 h-4" />;
    case 'budget-logistics': return <Calculator className="w-4 h-4" />;
    case 'vendor-management': return <Handshake className="w-4 h-4" />;
    case 'marketing-promotion': return <Rocket className="w-4 h-4" />;
    case 'day-of-execution': return <CheckSquare className="w-4 h-4" />;
    case 'follow-up-evaluation': return <BarChart className="w-4 h-4" />;
    
    // Travel Planning sections
    case 'trip-planning': return <Target className="w-4 h-4" />;
    case 'destination-research': return <Globe className="w-4 h-4" />;
    case 'budget-logistics': return <Calculator className="w-4 h-4" />;
    case 'itinerary-building': return <MapPin className="w-4 h-4" />;
    case 'logistics-preparation': return <Plane className="w-4 h-4" />;
    case 'travel-execution': return <Camera className="w-4 h-4" />;
    
    // Meal Planning sections
    case 'nutrition-assessment': return <Apple className="w-4 h-4" />;
    case 'meal-planning-system': return <Calendar className="w-4 h-4" />;
    case 'grocery-budgeting': return <ShoppingCart className="w-4 h-4" />;
    case 'meal-preparation': return <ChefHat className="w-4 h-4" />;
    case 'nutrition-tracking': return <BarChart className="w-4 h-4" />;
    case 'family-social': return <Users className="w-4 h-4" />;
    
    // Academic Research sections
    case 'research-planning': return <Lightbulb className="w-4 h-4" />;
    case 'literature-review': return <BookOpen className="w-4 h-4" />;
    case 'data-collection': return <Database className="w-4 h-4" />;
    case 'analysis-writing': return <PenSquare className="w-4 h-4" />;
    case 'quality-validation': return <FlaskConical className="w-4 h-4" />;
    case 'dissemination': return <Globe className="w-4 h-4" />;
    
    // Freelance Business sections
    case 'service-definition': return <Target className="w-4 h-4" />;
    case 'business-foundation': return <Shield className="w-4 h-4" />;
    case 'pricing-strategy': return <DollarSign className="w-4 h-4" />;
    case 'client-acquisition': return <Network className="w-4 h-4" />;
    case 'client-management': return <UserCheck className="w-4 h-4" />;
    case 'growth-scaling': return <TrendingUp className="w-4 h-4" />;
    
    // Personal Finance & Investment sections
    case 'financial-foundation': return <Banknote className="w-4 h-4" />;
    case 'budgeting-optimization': return <PiggyBank className="w-4 h-4" />;
    case 'investment-fundamentals': return <BarChart className="w-4 h-4" />;
    case 'tax-optimization': return <Receipt className="w-4 h-4" />;
    case 'wealth-building-acceleration': return <Rocket className="w-4 h-4" />;
    case 'monitoring-optimization': return <Activity className="w-4 h-4" />;
    
    // Digital Marketing & SEO sections
    case 'marketing-foundation': return <Focus className="w-4 h-4" />;
    case 'seo-optimization': return <Search className="w-4 h-4" />;
    case 'content-marketing': return <PenTool className="w-4 h-4" />;
    case 'social-media-marketing': return <MessageSquare className="w-4 h-4" />;
    case 'email-marketing': return <Zap className="w-4 h-4" />;
    case 'analytics-optimization': return <Layout className="w-4 h-4" />;
    
    // Remote Work & Productivity sections
    case 'remote-workspace-setup': return <Settings className="w-4 h-4" />;
    case 'communication-collaboration': return <Handshake className="w-4 h-4" />;
    case 'time-management-scheduling': return <Clock className="w-4 h-4" />;
    case 'work-life-balance': return <Scale className="w-4 h-4" />;
    case 'performance-accountability': return <CheckSquare className="w-4 h-4" />;
    case 'career-development': return <Award className="w-4 h-4" />;
    
    // Career Change & Transition sections
    case 'self-assessment-exploration': return <User className="w-4 h-4" />;
    case 'strategic-planning': return <Target className="w-4 h-4" />;
    case 'skill-development-education': return <GraduationCap className="w-4 h-4" />;
    case 'job-search-strategy': return <Search className="w-4 h-4" />;
    case 'transition-management': return <ArrowRight className="w-4 h-4" />;
    case 'long-term-career-development': return <TrendingUp className="w-4 h-4" />;
    
    // Small Business Exit Strategy sections
    case 'exit-strategy-assessment': return <Target className="w-4 h-4" />;
    case 'business-valuation-optimization': return <BarChart className="w-4 h-4" />;
    case 'financial-legal-preparation': return <FileText className="w-4 h-4" />;
    case 'exit-process-execution': return <Rocket className="w-4 h-4" />;
    case 'transition-management': return <Handshake className="w-4 h-4" />;
    case 'post-exit-planning': return <PiggyBank className="w-4 h-4" />;
    
    // Non-Profit Launch sections
    case 'mission-vision-planning': return <Target className="w-4 h-4" />;
    case 'legal-governance-structure': return <Shield className="w-4 h-4" />;
    case 'program-development-design': return <Layout className="w-4 h-4" />;
    case 'fundraising-revenue-strategy': return <DollarSign className="w-4 h-4" />;
    case 'operations-management-systems': return <Settings className="w-4 h-4" />;
    case 'marketing-community-engagement': return <Users className="w-4 h-4" />;
    
    // Personal Health & Wellness sections
    case 'health-assessment-baseline': return <Stethoscope className="w-4 h-4" />;
    case 'nutrition-dietary-planning': return <Apple className="w-4 h-4" />;
    case 'fitness-physical-activity': return <Dumbbell className="w-4 h-4" />;
    case 'sleep-recovery-optimization': return <Moon className="w-4 h-4" />;
    case 'stress-mental-health': return <Brain className="w-4 h-4" />;
    case 'health-monitoring-maintenance': return <Activity className="w-4 h-4" />;
    
    // Sustainable Living sections
    case 'environmental-impact-assessment': return <BarChart className="w-4 h-4" />;
    case 'sustainable-home-energy': return <Home className="w-4 h-4" />;
    case 'sustainable-transportation-mobility': return <Truck className="w-4 h-4" />;
    case 'sustainable-consumption-purchasing': return <ShoppingCart className="w-4 h-4" />;
    case 'sustainable-food-nutrition': return <Apple className="w-4 h-4" />;
    case 'community-advocacy-impact': return <Users className="w-4 h-4" />;
    
    // Creative Project sections
    case 'creative-vision-conceptualization': return <Lightbulb className="w-4 h-4" />;
    case 'project-planning-timeline': return <Calendar className="w-4 h-4" />;
    case 'skill-development-technique': return <GraduationCap className="w-4 h-4" />;
    case 'creative-process-workflow': return <Settings className="w-4 h-4" />;
    case 'presentation-exhibition-sharing': return <Camera className="w-4 h-4" />;
    case 'artistic-career-development': return <TrendingUp className="w-4 h-4" />;
    
    // Digital Marketing & Brand sections
    case 'brand-foundation-identity': return <Target className="w-4 h-4" />;
    case 'digital-marketing-strategy': return <Rocket className="w-4 h-4" />;
    case 'content-creation-management': return <PenTool className="w-4 h-4" />;
    case 'social-media-community': return <Users className="w-4 h-4" />;
    case 'paid-advertising-campaigns': return <DollarSign className="w-4 h-4" />;
    case 'analytics-performance-optimization': return <BarChart className="w-4 h-4" />;
    
    // Remote Work & Digital Nomad sections
    case 'remote-work-foundation': return <Settings className="w-4 h-4" />;
    case 'location-independence-planning': return <Globe className="w-4 h-4" />;
    case 'productivity-time-management': return <Clock className="w-4 h-4" />;
    case 'work-life-integration': return <Scale className="w-4 h-4" />;
    case 'financial-management-nomad': return <Wallet className="w-4 h-4" />;
    case 'career-advancement-scaling': return <TrendingUp className="w-4 h-4" />;
    
    // Investment & Wealth Building sections
    case 'financial-foundation-assessment': return <Calculator className="w-4 h-4" />;
    case 'investment-strategy-development': return <BarChart className="w-4 h-4" />;
    case 'retirement-planning-strategy': return <PiggyBank className="w-4 h-4" />;
    case 'tax-optimization-strategies': return <Receipt className="w-4 h-4" />;
    case 'alternative-investments-income': return <Banknote className="w-4 h-4" />;
    case 'wealth-protection-legacy': return <Shield className="w-4 h-4" />;
    
    // E-commerce & Online Business sections
    case 'business-model-validation': return <Target className="w-4 h-4" />;
    case 'ecommerce-platform-setup': return <Settings className="w-4 h-4" />;
    case 'digital-marketing-customer-acquisition': return <Network className="w-4 h-4" />;
    case 'operations-customer-service': return <Users className="w-4 h-4" />;
    case 'financial-management-scaling': return <TrendingUp className="w-4 h-4" />;
    case 'advanced-strategies-optimization': return <Zap className="w-4 h-4" />;
    
    // Personal Development & Life Coaching sections
    case 'self-assessment-awareness': return <User className="w-4 h-4" />;
    case 'vision-goal-setting': return <Target className="w-4 h-4" />;
    case 'mindset-mental-mastery': return <Brain className="w-4 h-4" />;
    case 'habits-behavior-change': return <CheckSquare className="w-4 h-4" />;
    case 'relationships-communication': return <MessageSquare className="w-4 h-4" />;
    case 'continuous-growth-mastery': return <BookOpen className="w-4 h-4" />;
    
    // Retirement Planning & Life Transition sections
    case 'retirement-vision-lifestyle': return <Home className="w-4 h-4" />;
    case 'financial-security-planning': return <PiggyBank className="w-4 h-4" />;
    case 'health-wellness-aging': return <Activity className="w-4 h-4" />;
    case 'career-transition-identity': return <Briefcase className="w-4 h-4" />;
    case 'family-relationships-dynamics': return <Users className="w-4 h-4" />;
    case 'life-transitions-adaptation': return <ArrowRight className="w-4 h-4" />;
    
    // Home Renovation & Interior Design sections
    case 'vision-planning-assessment': return <Layout className="w-4 h-4" />;
    case 'budgeting-financial-planning': return <Calculator className="w-4 h-4" />;
    case 'design-development-planning': return <Palette className="w-4 h-4" />;
    case 'contractor-team-management': return <Users className="w-4 h-4" />;
    case 'project-execution-management': return <Settings className="w-4 h-4" />;
    case 'finishing-maintenance-enjoyment': return <Home className="w-4 h-4" />;
    
    // Podcast & Content Creation sections
    case 'concept-niche-development': return <Lightbulb className="w-4 h-4" />;
    case 'technical-setup-production': return <Settings className="w-4 h-4" />;
    case 'content-strategy-planning': return <Calendar className="w-4 h-4" />;
    case 'audience-growth-marketing': return <TrendingUp className="w-4 h-4" />;
    case 'monetization-business-development': return <DollarSign className="w-4 h-4" />;
    case 'scaling-long-term-strategy': return <Rocket className="w-4 h-4" />;
    
    // Language Learning & Cultural Immersion sections
    case 'learning-goals-assessment': return <Target className="w-4 h-4" />;
    case 'learning-methods-resources': return <BookOpen className="w-4 h-4" />;
    case 'immersion-cultural-understanding': return <Globe className="w-4 h-4" />;
    case 'practice-skill-development': return <MessageSquare className="w-4 h-4" />;
    case 'motivation-persistence-strategies': return <TrendingUp className="w-4 h-4" />;
    case 'assessment-advancement-planning': return <Award className="w-4 h-4" />;

    // Fitness & Athletic Training sections
    case 'fitness-assessment-goal-setting': return <Target className="w-4 h-4" />;
    case 'training-program-design': return <Calendar className="w-4 h-4" />;
    case 'nutrition-supplementation': return <Apple className="w-4 h-4" />;
    case 'performance-tracking-optimization': return <BarChart className="w-4 h-4" />;
    case 'mental-performance-psychology': return <Brain className="w-4 h-4" />;
    case 'injury-prevention-management': return <Shield className="w-4 h-4" />;

    // Travel Planning & Adventure Design sections
    case 'travel-vision-goals': return <Target className="w-4 h-4" />;
    case 'destination-research-selection': return <Globe className="w-4 h-4" />;
    case 'budget-logistics-planning': return <Calculator className="w-4 h-4" />;
    case 'itinerary-experience-design': return <MapPin className="w-4 h-4" />;
    case 'safety-health-preparation': return <Shield className="w-4 h-4" />;
    case 'travel-documentation-reflection': return <Camera className="w-4 h-4" />;

    // Freelance & Gig Economy Success sections
    case 'skill-assessment-development': return <Award className="w-4 h-4" />;
    case 'business-setup-legalities': return <FileText className="w-4 h-4" />;
    case 'pricing-positioning-strategy': return <DollarSign className="w-4 h-4" />;
    case 'client-acquisition-marketing': return <Users className="w-4 h-4" />;
    case 'project-delivery-excellence': return <CheckSquare className="w-4 h-4" />;
    case 'business-growth-scaling': return <TrendingUp className="w-4 h-4" />;

    // Parenting & Child Development sections
    case 'parenting-philosophy-foundation': return <Heart className="w-4 h-4" />;
    case 'child-development-understanding': return <User className="w-4 h-4" />;
    case 'emotional-social-development': return <MessageSquare className="w-4 h-4" />;
    case 'communication-relationship-building': return <Users className="w-4 h-4" />;
    case 'education-learning-support': return <BookOpen className="w-4 h-4" />;
    case 'health-wellness-safety': return <Shield className="w-4 h-4" />;
    
    default: return <Heart className="w-4 h-4" />;
  }
};

interface TemplataContentSidebarProps {
  template: GuidanceTemplate
  activeSection: number
  onSectionChange: (section: number) => void
  onInsertPrompt?: (prompt: ReflectionPrompt) => void
  onInsertNote?: (note: { id: string; title: string }) => void
  onOpenResource?: (resource: Resource) => void
  responses?: Record<string, string>
  workspaces?: { id: string; name: string }[]
  activeWorkspaceId?: string
  onWorkspaceChange?: (workspaceId: string) => void
  onCreateWorkspace?: () => void
}

export function TemplataContentSidebar({
  template,
  activeSection,
  onSectionChange,
  onInsertPrompt,
  onInsertNote,
  onOpenResource,
  responses,
  workspaces = [],
  activeWorkspaceId,
  onWorkspaceChange,
  onCreateWorkspace,
  ...props
}: TemplataContentSidebarProps & React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState<'prompts' | 'resources' | 'related'>('prompts')
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
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0 justify-center">
                <Link href="/" className="flex justify-center">
                  <Image
                    src="/shift.svg"
                    alt="Templata"
                    width={16}
                    height={16}
                    className="dark:invert"
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
                      {getSectionIcon(section.id)}
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
                    <FileText className="w-4 h-4" />
                    <span className="text-xs">Resources</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={{
                      children: "Related Templates",
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveTab('related')
                      setOpen(true)
                    }}
                    isActive={activeTab === 'related'}
                    className="px-2.5 md:px-2"
                  >
                    <Network className="w-4 h-4" />
                    <span className="text-xs">Related</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Divider */}
                <div className="mx-2 my-2 h-px bg-border" />

                {/* Workspaces section */}
                {workspaces.map((workspace) => (
                  <SidebarMenuItem key={workspace.id}>
                    <SidebarMenuButton
                      tooltip={{
                        children: workspace.name,
                        hidden: false,
                      }}
                      onClick={() => onWorkspaceChange?.(workspace.id)}
                      isActive={activeWorkspaceId === workspace.id}
                      className="px-2.5 md:px-2"
                    >
                      <Bookmark className="w-4 h-4" />
                      <span className="text-xs truncate">{workspace.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* Add workspace button */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={{
                      children: "Create Workspace",
                      hidden: false,
                    }}
                    onClick={() => onCreateWorkspace?.()}
                    className="px-2.5 md:px-2 text-muted-foreground hover:text-foreground"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-xs">Add Workspace</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="flex flex-col gap-2 p-4 items-center">
          <SharePanel
            templateId={template.id}
            templateTitle={template.title}
            responses={responses || {}}
          />
          <PDFExportButton
            template={template}
            responses={responses || {}}
          />
          <ThemeSelector iconOnly />
        </SidebarFooter>
      </Sidebar>

      {/* Content Browser Sidebar */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4 flex-shrink-0">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeTab === 'prompts' ? currentSection?.title :
               activeTab === 'resources' ? 'Resources' : 'Related Templates'}
            </div>
          </div>
          {activeTab !== 'related' && (
            <SidebarInput
              placeholder={activeTab === 'prompts' ? 'Search prompts...' : 'Search resources...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
        </SidebarHeader>
        
        <SidebarContent className="flex-1 overflow-hidden">
          <SidebarGroup className="px-0 h-full">
            <SidebarGroupContent className="h-full overflow-y-auto">
              {activeTab === 'prompts' && (
                <button
                  onClick={() => onInsertNote?.({
                    id: `note-${Date.now()}`,
                    title: "New Note"
                  })}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 border-b p-4 text-sm w-full text-left group"
                >
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>Add Note</span>
                  <Plus className="ml-auto w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              )}
              {activeTab === 'prompts' && filteredPrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => onInsertPrompt?.(prompt)}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight last:border-b-0 w-full text-left group overflow-hidden"
                >
                  <div className="flex w-full items-center gap-2">
                    <Badge className={`text-xs ${getCategoryColor(prompt.category)}`}>
                      {prompt.category}
                    </Badge>
                    <Plus className="ml-auto w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <span className="font-medium line-clamp-2">{prompt.prompt}</span>
                  {prompt.helpText && (
                    <span className="line-clamp-2 text-xs whitespace-break-spaces text-muted-foreground overflow-hidden">
                      {prompt.helpText}
                    </span>
                  )}
                </button>
              ))}
              
              {activeTab === 'resources' && filteredResources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => onOpenResource?.(resource)}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight last:border-b-0 w-full text-left group overflow-hidden"
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
              ))}

              {activeTab === 'related' && (
                <div className="p-4">
                  <RelatedTemplates templateId={template.id} />
                </div>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}