"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, CheckCircle, DollarSign, Users, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const row1Features = [
  { title: "Budget Tracking", description: "Track expenses and stay within budget", icon: DollarSign },
  { title: "Guest Management", description: "Organize RSVPs and seating charts", icon: Users },
  { title: "Timeline Planning", description: "Plan every detail with custom timelines", icon: Calendar },
  { title: "Vendor Coordination", description: "Manage contracts and communications", icon: MapPin }
]

const row2Features = [
  { title: "Vows & Ceremony", description: "Craft meaningful vows and ceremony details", icon: Heart },
  { title: "Photo Planning", description: "Create shot lists and photo schedules", icon: Calendar },
  { title: "Music Curation", description: "Build playlists for each wedding moment", icon: Users },
  { title: "Emergency Kit", description: "Prepare for unexpected wedding day situations", icon: MapPin }
]

interface TemplateHeroProps {
  templateType: 'wedding' | 'baby' | 'home-buying'
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  badge: {
    text: string
    icon: any
  }
  stats: Array<{
    text: string
  }>
  features: Array<{
    title: string
    description: string
    icon: any
  }>
}

export function WeddingTemplateHero(props?: Partial<TemplateHeroProps>) {
  const defaultProps: TemplateHeroProps = {
    templateType: 'wedding',
    title: 'Plan your perfect',
    subtitle: 'wedding day',
    description: 'Everything you need to organize your dream wedding in one beautiful, easy-to-use template. From budget tracking to guest lists.',
    ctaText: 'Start Planning Free',
    ctaLink: '/templates/wedding-planning',
    badge: {
      text: 'Most Popular Wedding Template',
      icon: Heart
    },
    stats: [
      { text: '10,000+ couples already planning' },
      { text: 'Free to start, no credit card required' },
      { text: 'Set up in under 5 minutes' }
    ],
    features: [
      { title: 'Budget Tracking', description: 'Track expenses and stay within budget', icon: DollarSign },
      { title: 'Guest Management', description: 'Organize RSVPs and seating charts', icon: Users },
      { title: 'Timeline Planning', description: 'Plan every detail with custom timelines', icon: Calendar },
      { title: 'Vendor Coordination', description: 'Manage contracts and communications', icon: MapPin },
      { title: 'Vows & Ceremony', description: 'Craft meaningful vows and ceremony details', icon: Heart },
      { title: 'Photo Planning', description: 'Create shot lists and photo schedules', icon: Calendar }
    ]
  }

  const config = { ...defaultProps, ...props }
  const BadgeIcon = config.badge.icon
  
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgb(0 0 0 / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgb(0 0 0 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main hero content */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <BadgeIcon className="w-4 h-4 mr-2" />
              {config.badge.text}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              {config.title}
              <span className="block text-primary">{config.subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              {config.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href={config.ctaLink}>
                  {config.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4">
                <Link href="#features">
                  See Features
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              {config.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature showcase */}
          <div className="relative">
            {/* Floating feature cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {config.features.slice(0, 6).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index}
                    className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}