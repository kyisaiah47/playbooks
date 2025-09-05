import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Heart,
  Home,
  Briefcase,
  Target,
  Users,
  Calendar,
  Search,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Sparkles,
  Shield,
  DollarSign,
  FileText,
  ClipboardCheck,
  Truck,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Home Buying Template | Navigate Home Buying Like a Pro - Your Complete Purchase Planner | Templata',
  description: 'Complete home buying template with mortgage comparison, property tracking, inspection checklists, and closing timeline. Used by 5,000+ homebuyers. Save 40+ hours of research. Free to start.',
  keywords: 'home buying template, home buying checklist, home buying guide, mortgage calculator, property search tracker, home inspection checklist, closing process guide, first time home buyer, real estate planner, house hunting tracker',
  openGraph: {
    title: 'Home Buying Template - Navigate Home Buying Like a Pro',
    description: 'Complete home buying system with mortgage tracking, property comparison, and closing timeline. Join 5,000+ homebuyers who saved time and stress.',
    type: 'website',
    images: ['/home-buying-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/home-buying',
  },
}

const features = [
  {
    icon: Sparkles,
    title: "Setup in Minutes",
    description: "Quick guided wizard gets you started with your home buying details and budget in under 5 minutes."
  },
  {
    icon: Shield,
    title: "Expert Created",
    description: "Built by experienced real estate professionals with 20+ years of home buying expertise."
  },
  {
    icon: Clock,
    title: "Progress Tracking",
    description: "Visual dashboards and timelines keep you on schedule through every step of the process."
  },
  {
    icon: CheckCircle2,
    title: "Complete System",
    description: "Everything in one place - no more scattered spreadsheets or forgotten deadlines."
  },
  {
    icon: Users,
    title: "Share & Collaborate",
    description: "Invite your partner, agent, and lender to collaborate on your home buying journey."
  },
  {
    icon: FileText,
    title: "Export & Print",
    description: "Generate beautiful PDFs and printable checklists for agents, lenders, and closing."
  }
]

const corePages = [
  { name: "Property Search & Tracking", icon: Search, description: "Save and compare properties with detailed notes and viewing schedules" },
  { name: "Mortgage & Financing", icon: DollarSign, description: "Compare loans, track applications, and manage pre-approval process" },
  { name: "Home Inspections", icon: ClipboardCheck, description: "Schedule inspections, track reports, and manage repair negotiations" },
  { name: "Moving & Timeline", icon: Truck, description: "Coordinate your move with timeline, vendors, and utility transfers" },
  { name: "Legal & Closing", icon: FileText, description: "Track contracts, closing documents, and final walkthrough details" },
  { name: "Overview Dashboard", icon: Home, description: "See your progress, key dates, and next steps at a glance" },
]

const guidedNotes = [
  { name: "House Hunting Criteria", icon: Home, description: "Define your ideal home features and priorities" },
  { name: "Mortgage Comparison Guide", icon: DollarSign, description: "Compare loan types, rates, and qualification requirements" },
  { name: "Down Payment Strategy", icon: Target, description: "Plan funding sources and cash management" },
  { name: "Home Inspection Checklist", icon: ClipboardCheck, description: "What to look for and how to negotiate repairs" },
  { name: "Insurance Shopping Guide", icon: Shield, description: "Find the right coverage at the best rates" },
  { name: "Closing Process Timeline", icon: Calendar, description: "Navigate final steps from contract to keys" },
  { name: "Moving Coordination", icon: Truck, description: "Plan your move timeline and vendor management" },
  { name: "Utility Setup Guide", icon: Sparkles, description: "Transfer or establish all essential services" },
  { name: "Neighborhood Research", icon: Search, description: "Evaluate locations, schools, and community factors" },
  { name: "Property Tax Planning", icon: FileText, description: "Understand assessments and budget for taxes" },
]

const testimonials = [
  {
    name: "Jennifer & Mark",
    text: "This template saved us over 40 hours of research and kept us organized through the entire 8-month process. We never missed a deadline!",
    rating: 5
  },
  {
    name: "David & Sarah", 
    text: "The mortgage comparison tool helped us save $18,000 over the life of our loan by choosing the right lender. Best investment ever.",
    rating: 5
  },
  {
    name: "Michael & Lisa",
    text: "Managing inspection reports, repair negotiations, and closing documents became effortless. We closed on time with zero stress.",
    rating: 5
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Quick Setup Wizard",
    description: "Answer 6 simple questions about your budget, timeline, and home preferences. Takes just 3 minutes."
  },
  {
    step: "2", 
    title: "Personalized Dashboard",
    description: "Get a fully customized home buying workspace with your timeline, budget, and search criteria pre-filled."
  },
  {
    step: "3",
    title: "Track Every Detail",
    description: "Use guided checklists, mortgage trackers, and inspection tools to manage every aspect of your purchase."
  },
  {
    step: "4",
    title: "Close with Confidence",
    description: "Execute a smooth closing with organized documents, verified inspections, and coordinated timelines."
  }
]

const faqs = [
  {
    question: "What's included in the home buying template?",
    answer: "Everything you need: property search tracker with comparison tools, mortgage application manager with lender comparison, inspection scheduling and report tracking, moving timeline with vendor coordination, legal document organizer, closing checklist, and 10+ guided planning resources written by real estate professionals."
  },
  {
    question: "How long does it take to set up the home buying planner?",
    answer: "Just 3-5 minutes! Our guided setup wizard asks 6 key questions about your budget, timeline, location preferences, and home requirements. The template automatically customizes all sections with your information, so you can start house hunting immediately."
  },
  {
    question: "Can I track multiple properties with this template?",
    answer: "Yes! Save unlimited properties with photos, notes, pros/cons lists, and viewing schedules. Compare properties side-by-side, track price changes, and maintain detailed records of every home you visit."
  },
  {
    question: "Does the template help with mortgage shopping?",
    answer: "Absolutely. Track applications with multiple lenders, compare interest rates and fees, monitor pre-approval status, and calculate total loan costs. Store all mortgage documents and communications in one organized place."
  },
  {
    question: "How does the inspection tracking feature work?",
    answer: "Schedule all inspections (general, specialist, final walkthrough), store inspection reports, track repair requests and responses, and manage contractor quotes. Never lose track of what needs to be fixed before closing."
  },
  {
    question: "Is this better than using spreadsheets for home buying?",
    answer: "Much better! Unlike scattered spreadsheets, everything connects - your budget affects property search filters, inspection results tie to repair negotiations, and closing tasks sync with your timeline. Plus you get professional guidance that spreadsheets don't provide."
  },
  {
    question: "Can my real estate agent and lender access this template?",
    answer: "Yes! Share your planning workspace with your agent, lender, or family members. Set permissions for who can edit vs view different sections. Everyone stays updated on your progress and timeline."
  },
  {
    question: "What if I'm a first-time homebuyer?",
    answer: "Perfect! The template includes extensive educational resources specifically for first-time buyers: mortgage basics, inspection guides, closing process explanations, and step-by-step checklists. You'll feel confident throughout the entire process."
  },
  {
    question: "How far in advance should I start using this home buying planner?",
    answer: "Start as soon as you're considering buying. The template helps you prepare financially, understand the process, and organize your search. Most buyers benefit from starting 2-3 months before actively house hunting."
  },
  {
    question: "Can I export my home buying plans and documents?",
    answer: "Yes! Generate PDFs for lenders, printable checklists for showings, property comparison reports, and closing day schedules. Export individual sections or your complete home buying plan in multiple formats."
  }
]

export default function HomeBuyingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Home Buying Template",
    "description": "Complete home buying template with mortgage comparison, property tracking, inspection checklists, and closing timeline. Save 40+ hours of research.",
    "url": "https://templata.com/home-buying",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "5000"
    },
    "creator": {
      "@type": "Organization",
      "name": "Templata"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/shift.svg" alt="Templata" width={28} height={28} className="dark:invert" />
              <span className="font-bold text-2xl">Templata</span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-6 p-6 w-[500px]">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Personal Life</h4>
                        <NavigationMenuLink asChild>
                          <Link href="/wedding-planning" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Heart className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Wedding Planning</div>
                                <div className="text-sm text-muted-foreground">Complete wedding organization</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/home-buying" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Home className="h-4 w-4 text-primary mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Home Buying</div>
                                <div className="text-sm text-muted-foreground">Navigate the home buying process</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Career & Business</h4>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Briefcase className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Job Search</div>
                                <div className="text-sm text-muted-foreground">Track applications & interviews</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Target className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Business Launch</div>
                                <div className="text-sm text-muted-foreground">Start your business right</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="#" className="text-base font-medium px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors">
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="#" className="text-base font-medium px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors">
                    Support
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button asChild size="sm" className="ml-2">
                    <Link href="/home-buying/app">Get Started Free</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
            <Home className="w-3 h-3 mr-2" />
            Used by 5,000+ homebuyers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Navigate Home Buying
            <span className="block text-primary">Like a Pro</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your complete home purchase planner with mortgage tracking, property comparison, 
            and closing timeline. Save 40+ hours of research and never miss a deadline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/home-buying/app">
                Start Planning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
              Free to start
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
              Setup in 3 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Buy Your Dream Home
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop juggling spreadsheets and sticky notes. Get organized with a complete system 
              built by real estate experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-none bg-background">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Six Powerful Tools in One Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial search to closing day, track every detail of your home buying journey 
              in one organized workspace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePages.map((page, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <page.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{page.name}</CardTitle>
                  <CardDescription>
                    {page.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get organized and stay on track with our proven 4-step home buying system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Home Buying Template?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Save 40+ Hours of Research</h3>
                    <p className="text-muted-foreground">Skip the endless googling. Get expert guidance and checklists that cover every aspect of home buying.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Never Miss Important Deadlines</h3>
                    <p className="text-muted-foreground">Automated timelines and reminders keep you on track from pre-approval to closing day.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Make Better Financial Decisions</h3>
                    <p className="text-muted-foreground">Compare mortgages, track costs, and understand the true price of homeownership before you buy.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reduce Stress & Overwhelm</h3>
                    <p className="text-muted-foreground">Stay organized with everything in one place. Know exactly what to do next at every stage.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="font-semibold text-sm">- {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guided Notes Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              10 Expert Guides Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get step-by-step guidance written by real estate professionals for every 
              aspect of your home purchase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {guidedNotes.map((note, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                    <note.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{note.name}</h3>
                  <p className="text-xs text-muted-foreground">{note.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our home buying template.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Buy Your Dream Home?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join 5,000+ homebuyers who used our template to navigate their purchase with confidence. 
            Get organized, stay on track, and close on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/home-buying/app">
                Start Planning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm opacity-75">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Free to start
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Setup in 3 minutes
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              No credit card needed
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/shift.svg" alt="Templata" width={24} height={24} className="dark:invert" />
                <span className="font-bold text-xl">Templata</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional templates for life&apos;s important moments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Templates</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/wedding-planning" className="hover:text-primary">Wedding Planning</Link></li>
                <li><Link href="/home-buying" className="hover:text-primary">Home Buying</Link></li>
                <li><Link href="#" className="hover:text-primary">Job Search</Link></li>
                <li><Link href="#" className="hover:text-primary">Business Launch</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Templata. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary">Privacy</Link>
              <Link href="#" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}