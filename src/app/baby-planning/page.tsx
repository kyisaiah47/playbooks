import type { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Heart,
  Home,
  Target,
  Baby,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Sparkles,
  Shield,
  Zap,
  FileText,
  ShoppingBag,
  Stethoscope,
  DollarSign,
  Users,
  BrainCircuit,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Baby Planning Template | Plan Your Perfect Pregnancy Journey - Save 40+ Hours of Research | Templata',
  description: 'Complete baby planning template with nursery setup, registry tracker, milestone planning, and new parent preparation. Used by 5,000+ expecting parents. Save 40+ hours of research time. Free to start.',
  keywords: 'baby planning template, baby registry checklist, nursery planning, new parent preparation, baby shower planning, pregnancy tracker, baby budget planner, new baby checklist, baby gear guide, postpartum planning',
  openGraph: {
    title: 'Baby Planning Template - Plan Your Perfect Pregnancy Journey',
    description: 'Complete baby planning system with nursery setup, registry management, and milestone tracking. Join 5,000+ parents preparing for their bundle of joy.',
    type: 'website',
    images: ['/baby-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/baby-planning',
  },
}

const features = [
  {
    icon: Sparkles,
    title: "Setup in Minutes",
    description: "Quick guided wizard gets you started with all your baby planning details in under 5 minutes."
  },
  {
    icon: Shield,
    title: "Expert Created",
    description: "Built by pediatric professionals and experienced parents with combined 20+ years of knowledge."
  },
  {
    icon: Clock,
    title: "Progress Tracking",
    description: "Visual dashboards and pregnancy timelines keep you on schedule and prepared."
  },
  {
    icon: CheckCircle2,
    title: "Complete System",
    description: "Everything in one place - no more scattered research or forgotten preparations."
  },
  {
    icon: Users,
    title: "Share & Collaborate",
    description: "Invite your partner, family, and support network to collaborate on baby preparations."
  },
  {
    icon: FileText,
    title: "Export & Print",
    description: "Generate beautiful PDFs and printable checklists for hospital, pediatrician, and family."
  }
]

const coreFeatures = [
  { name: "Health Tracking", icon: Stethoscope, description: "Track appointments, symptoms, and test results throughout pregnancy" },
  { name: "Registry & Shopping", icon: ShoppingBag, description: "Organize baby registry and shopping lists with priority tracking" },
  { name: "Budget Tracking", icon: DollarSign, description: "Plan expenses, track costs, and set savings goals for baby" },
  { name: "Timeline & Milestones", icon: Calendar, description: "Track pregnancy milestones and preparation deadlines" },
  { name: "Postpartum Planning", icon: Heart, description: "Prepare for recovery, newborn care, and life after baby" },
  { name: "Overview Dashboard", icon: Target, description: "Central hub with key metrics and progress tracking" },
]

const guidedNotes = [
  { name: "Birth Plan & Preferences", icon: FileText, description: "Document your birth preferences and share with healthcare team" },
  { name: "Hospital Bag Checklist", icon: ShoppingBag, description: "Complete packing list for mom, baby, and partner" },
  { name: "Nursery Setup Guide", icon: Home, description: "Design and organize the perfect nursery space" },
  { name: "Baby Registry Essentials", icon: Target, description: "Comprehensive registry across all price points" },
  { name: "Maternity Leave Planning", icon: Calendar, description: "Navigate policies and plan your time away from work" },
  { name: "Childcare Research & Setup", icon: Users, description: "Find and evaluate childcare options that fit your family" },
  { name: "Baby-Proofing Checklist", icon: Shield, description: "Make your home safe as baby grows and explores" },
  { name: "Feeding Plan & Schedule", icon: Heart, description: "Develop feeding strategy from birth through solids" },
  { name: "Sleep Schedule & Routine", icon: Clock, description: "Establish healthy sleep habits from day one" },
  { name: "Emergency Contacts & Info", icon: Zap, description: "Organize critical information for family safety" },
]

const resources = [
  { name: "Pregnancy Week-by-Week Guide", icon: Calendar, description: "Comprehensive development timeline and what to expect" },
  { name: "Baby Gear Checklist", icon: ShoppingBag, description: "Essential vs nice-to-have items by category and timeline" },
  { name: "Newborn Care Guide", icon: Baby, description: "Basic care instructions for your baby&apos;s first weeks" },
  { name: "Postpartum Recovery Guide", icon: Heart, description: "Physical and emotional support for the fourth trimester" },
]

const testimonials = [
  {
    name: "Jessica & Mark",
    text: "This template saved us 40+ hours of research and kept us organized throughout our entire pregnancy journey!",
    rating: 5
  },
  {
    name: "Amanda & Chris", 
    text: "The budget tracker helped us save $2,800 by avoiding unnecessary purchases. We stayed on budget and got everything we needed.",
    rating: 5
  },
  {
    name: "Sarah & David",
    text: "Managing all the appointments and preparations became effortless. The timeline feature prevented us from missing important milestones.",
    rating: 5
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Quick Setup Wizard",
    description: "Answer 6 simple questions about your due date, budget, and preferences. Takes just 3 minutes."
  },
  {
    step: "2", 
    title: "Personalized Template",
    description: "Get a fully customized baby planning workspace with your timeline, budget, and preparation tasks pre-filled."
  },
  {
    step: "3",
    title: "Plan & Track Progress",
    description: "Use guided checklists, milestone trackers, and planning tools to prepare for baby stress-free."
  },
  {
    step: "4",
    title: "Welcome Your Baby",
    description: "Feel confident and prepared with organized plans, essential contacts, and everything ready for baby&apos;s arrival."
  }
]

const faqs = [
  {
    question: "What&apos;s included in the baby planning template?",
    answer: "Everything you need: health tracking with appointment scheduler, comprehensive registry organizer with 200+ items, budget tracker with baby-specific categories, pregnancy milestone timeline, postpartum planning guide, 10 guided planning checklists written by pediatric professionals, and 4 detailed educational resources covering pregnancy through newborn care."
  },
  {
    question: "How long does it take to set up the baby planner?",
    answer: "Just 3-5 minutes! Our guided setup wizard asks 6 key questions about your due date, budget, baby&apos;s details, and healthcare preferences. The template automatically customizes all sections with your information, so you can start planning immediately."
  },
  {
    question: "Is this suitable for first-time parents?",
    answer: "Absolutely! This template was designed specifically with first-time parents in mind. Every section includes expert guidance, examples, and tips from pediatric professionals and experienced parents. You&apos;ll get step-by-step instructions for everything from setting up the nursery to preparing for postpartum recovery."
  },
  {
    question: "Can I share this with my partner and family?",
    answer: "Yes! The template is designed for collaboration. You can share your planning workspace with your partner, family members, and support network. Everyone can contribute to preparations, view progress, and stay updated on important milestones and appointments."
  },
  {
    question: "What if I&apos;m already several months pregnant?",
    answer: "No problem! The template adapts to any stage of pregnancy. Simply enter your current week, and the timeline will adjust to show relevant upcoming milestones and tasks. Many parents start using this template in their second or third trimester and find it incredibly helpful for organizing remaining preparations."
  },
  {
    question: "Does this work for different types of births and feeding plans?",
    answer: "Yes, the template accommodates all birth plans (hospital, birthing center, home birth) and feeding preferences (breastfeeding, formula, combination). The guided notes and checklists include options for every approach, and you can customize content based on your specific choices and circumstances."
  },
  {
    question: "How does the budget tracking work?",
    answer: "The budget tracker includes 15+ baby-specific expense categories (nursery, clothing, gear, healthcare, etc.), tracks actual vs planned spending, and provides savings goal management. You can set alerts for overspending, compare prices, and get recommendations for essential vs optional purchases to stay within budget."
  },
  {
    question: "What educational resources are included?",
    answer: "Four comprehensive guides: Pregnancy Week-by-Week Guide (trimester-by-trimester development and what to expect), Baby Gear Checklist (essential items with timing recommendations), Newborn Care Guide (feeding, sleeping, bathing, and health basics), and Postpartum Recovery Guide (physical and emotional support for after birth)."
  },
  {
    question: "Can I print or export my plans?",
    answer: "Absolutely! You can export beautiful PDFs of your birth plan, hospital bag checklist, baby registry, emergency contacts, and any other lists. These are perfect for sharing with your healthcare provider, partner, family members, or printing for easy reference during appointments or hospital stay."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, absolutely. All your personal pregnancy and baby information is stored securely in your browser&apos;s local storage and never sent to external servers. Only you have access to your data, and you can clear it anytime. We prioritize the privacy and security of expecting parents&apos; sensitive information."
  }
]

export default function BabyPlanningPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Baby className="h-6 w-6" />
              <span className="font-bold">Templata</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/templates" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Templates
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </Link>
            </nav>
            <Button asChild size="sm">
              <Link href="/baby-planning/app">Start Planning</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Baby Planning Template",
            "description": "Complete baby planning template with nursery setup, registry tracker, milestone planning, and new parent preparation.",
            "url": "https://templata.com/baby-planning",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "5000"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1 h-3 w-3" />
              Used by 5,000+ expecting parents
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
              Plan Your Perfect Pregnancy Journey
              <span className="block text-primary">Save 40+ Hours of Research</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
              Complete baby planning template with health tracking, registry management, 
              budget planning, and expert guidance. Everything you need to prepare for 
              your baby&apos;s arrival, organized in one beautiful workspace.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/baby-planning/app">
                  Start Planning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link href="#features">See What&apos;s Included</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              ✓ Free forever ✓ No account required ✓ Setup in 3 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Everything You Need for Baby Planning
            </h2>
            <p className="mb-16 text-lg text-muted-foreground">
              Comprehensive tools and expert guidance to prepare for your baby&apos;s arrival
            </p>
          </div>
          
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Core Features Grid */}
          <div className="mb-8">
            <h3 className="mb-8 text-2xl font-bold text-center">6 Core Planning Areas</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.name}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              How It Works
            </h2>
            <p className="mb-16 text-lg text-muted-foreground">
              Get organized and prepared in just 4 simple steps
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < howItWorks.length - 1 && (
                    <ArrowRight className="mx-auto mt-4 h-6 w-6 text-muted-foreground hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guided Notes & Resources */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Expert Guidance Every Step of the Way
            </h2>
            <p className="text-lg text-muted-foreground">
              Guided planning templates and educational resources created by pediatric professionals
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Guided Notes */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">10 Guided Planning Checklists</h3>
              <div className="space-y-4">
                {guidedNotes.map((note, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                      <note.icon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-base">{note.name}</CardTitle>
                        <CardDescription className="text-sm">{note.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">4 Comprehensive Resources</h3>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                      <resource.icon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-base">{resource.name}</CardTitle>
                        <CardDescription className="text-sm">{resource.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6 bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <BrainCircuit className="h-6 w-6 text-primary mr-2" />
                    <CardTitle className="text-base">Plus: Free-Form Notes</CardTitle>
                  </div>
                  <CardDescription>
                    Flexible note-taking space for your thoughts, questions, and additional planning needs
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Why Choose Our Baby Planning Template?
            </h2>
            <p className="mb-16 text-lg text-muted-foreground">
              Join thousands of parents who chose organized, stress-free baby planning
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Save 40+ Hours</CardTitle>
                <CardDescription className="text-base">
                  Stop spending endless hours researching what you need. Our expert-created 
                  template gives you everything in one organized system.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Expert Guidance</CardTitle>
                <CardDescription className="text-base">
                  Created by pediatric professionals and experienced parents. Get confidence 
                  knowing you&apos;re following best practices and nothing is forgotten.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Feel Prepared</CardTitle>
                <CardDescription className="text-base">
                  Reduce anxiety and feel confident about your baby&apos;s arrival. Track progress, 
                  stay organized, and know exactly what to expect at each stage.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Loved by Expecting Parents
            </h2>
            <p className="mb-16 text-lg text-muted-foreground">
              See why over 5,000 parents chose our baby planning template
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic mb-4">
                    &quot;{testimonial.text}&quot;
                  </CardDescription>
                  <CardTitle className="text-lg">— {testimonial.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-16 text-lg text-muted-foreground">
              Everything you need to know about the baby planning template
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Start Planning Your Baby&apos;s Arrival Today
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join 5,000+ expecting parents who chose organized, stress-free baby planning. 
              Setup takes just 3 minutes and it&apos;s completely free.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/baby-planning/app">
                  Start Planning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              ✓ No credit card required ✓ Setup in 3 minutes ✓ Works on all devices
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Baby className="h-6 w-6" />
              <span className="font-bold">Templata</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Templata. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}