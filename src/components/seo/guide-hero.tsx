import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface GuideHeroProps {
  templateType: string
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  badge: {
    text: string
    icon: LucideIcon
  }
  stats: Array<{
    text: string
  }>
  features: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
}

export function TemplateHero(props: TemplateHeroProps) {
  const BadgeIcon = props.badge.icon
  
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
              {props.badge.text}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              {props.title}
              <span className="block text-primary">{props.subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              {props.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href={props.ctaLink}>
                  {props.ctaText}
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
              {props.stats.map((stat, index) => (
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
              {props.features.slice(0, 6).map((feature, index) => {
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