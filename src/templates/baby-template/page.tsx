import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Baby, CheckCircle, Heart, Calendar, ShoppingCart, Home, Stethoscope, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baby Planning Template - Prepare for Your New Arrival | Templata',
  description: 'Comprehensive baby planning template with pregnancy tracking, baby gear checklists, nursery planning, and healthcare coordination. Get organized for your new arrival.',
  keywords: 'baby planning, pregnancy tracker, nursery planning, baby checklist, pregnancy organizer, baby gear',
  openGraph: {
    title: 'Baby Planning Template - Prepare for Your New Arrival',
    description: 'Comprehensive baby planning template with pregnancy tracking, baby gear checklists, nursery planning, and healthcare coordination.',
    type: 'website',
  },
}

const features = [
  {
    icon: Heart,
    title: 'Pregnancy Tracking',
    description: 'Track your pregnancy journey week by week with symptoms, appointments, and milestones.'
  },
  {
    icon: ShoppingCart,
    title: 'Baby Gear Checklist',
    description: 'Comprehensive checklists for all the essential baby gear you\'ll need before arrival.'
  },
  {
    icon: Home,
    title: 'Nursery Planning',
    description: 'Design and organize your nursery with layout planning and decoration tracking.'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Coordination',
    description: 'Manage doctor appointments, tests, and create your personalized birth plan.'
  },
  {
    icon: DollarSign,
    title: 'Budget Planning',
    description: 'Track baby-related expenses and stay within your budget for the new arrival.'
  },
  {
    icon: Calendar,
    title: 'Timeline & Schedule',
    description: 'Organize important dates, milestones, and prepare for your due date.'
  },
]

const benefits = [
  'Stay organized throughout your pregnancy journey',
  'Never forget important appointments or preparations',
  'Track your budget and expenses effectively',
  'Create comprehensive checklists for baby essentials',
  'Plan and design your perfect nursery',
  'Coordinate healthcare and birth planning',
]

function TemplateHero() {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Baby className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <Badge variant="secondary" className="mb-4">
            Life Events Template
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Baby Planning
            <span className="block text-primary">Made Simple</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Prepare for your new arrival with our comprehensive baby planning template. 
            Track your pregnancy, organize baby gear, plan your nursery, and coordinate 
            healthcare all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/templates/baby-planning">
                Start Planning Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="/templates">
                View All Templates
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            6 minute setup • No credit card required
          </p>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need for Baby Planning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our baby planning template includes all the tools and features you need to 
            prepare for your new arrival with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function BenefitsSection() {
  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Stay Organized Throughout Your Pregnancy Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our baby planning template helps you manage every aspect of preparing 
              for your new arrival, from tracking your pregnancy to organizing your 
              nursery and coordinating healthcare.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">40</div>
                <div className="text-sm text-muted-foreground">Weeks to track</div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Baby gear items</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Planning tasks</div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">6 min</div>
                <div className="text-sm text-muted-foreground">Setup time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      question: "What's included in the baby planning template?",
      answer: "The template includes pregnancy tracking, baby gear checklists, nursery planning tools, healthcare coordination, budget planning, and timeline management. Everything you need to prepare for your new arrival."
    },
    {
      question: "How long does setup take?",
      answer: "Initial setup takes about 6 minutes. You'll answer a few questions about your due date, preferences, and planning goals to customize the template for your needs."
    },
    {
      question: "Can I track multiple pregnancies?",
      answer: "Yes! The template is designed to be flexible and can be used for multiple pregnancies or adapted for different family situations."
    },
    {
      question: "Is the template suitable for first-time parents?",
      answer: "Absolutely! The template is especially helpful for first-time parents as it provides comprehensive checklists, guides, and timelines to ensure nothing is overlooked."
    },
  ]

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the baby planning template.
          </p>
        </div>
        
        <div className="grid gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-6 last:border-b-0">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CTASection() {
  return (
    <div className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Planning for Your Baby?
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Join thousands of families who have used our baby planning template 
          to prepare for their new arrival with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8"
            asChild
          >
            <Link href="/templates/baby-planning">
              Get Started Free
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary-foreground/20 hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/templates">
              View All Templates
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function BabyTemplatePage() {
  return (
    <div className="min-h-screen">
      <TemplateHero />
      <FeaturesSection />
      <BenefitsSection />
      <FAQ />
      <CTASection />
    </div>
  )
}