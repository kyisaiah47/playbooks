import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  CheckCircle2,
  Star,
  Users,
  Clock,
  Target,
  ArrowRight,
  Calendar,
  FileText,
  BarChart3,
  DollarSign,
  ClipboardList
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Event Planning Template - Organize Any Event Like a Pro | Save 30+ Hours | Templata',
  description: 'Professional event planning template with guest management, vendor coordination, timeline planning, and budget tracking. Perfect for corporate events, parties, and celebrations.',
  keywords: 'event planning template, event organization, party planning, corporate event planner, event budget tracker, event timeline template, event management, celebration planning',
  openGraph: {
    title: 'Event Planning Template - Organize Any Event Like a Pro',
    description: 'Professional event planning template with guest management, vendor coordination, and timeline planning. Save 30+ hours of event organization.',
    type: 'website',
    url: 'https://templata.com/event-planning',
    images: [
      {
        url: '/og-event-planning.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planning Template - Organize Any Event Like a Pro',
    description: 'Professional event planning template with guest management, vendor coordination, and timeline planning. Save 30+ hours.',
    images: ['/og-event-planning.jpg'],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Event Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete event planning template with guest management, vendor coordination, timeline planning, and budget tracking for any type of event",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}

export default function EventPlanningLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/shift.svg"
                alt="Templata"
                width={28}
                height={28}
                className="dark:invert"
              />
              <span className="font-bold text-xl">Templata</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/templates" className="text-muted-foreground hover:text-foreground">
                Templates
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </nav>
            
            <Button asChild>
              <Link href="/event-planning/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Professional Event Planning
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Organize Any Event Like a Pro
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Save 30+ Hours of Planning
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete event planning template with guest management, vendor coordination, 
                timeline planning, and budget tracking. Perfect for any celebration or corporate event.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/event-planning/app">
                    Start Planning Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 850+ event planners
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>No Signup Required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Expert Created</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Highlight Your 6 Core Pages */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">
                <Target className="mr-2 h-4 w-4" />
                Complete Solution
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Everything You Need for
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Successful Event Planning
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six comprehensive planning areas that guide you through every aspect of your event journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feature 1 - Overview Dashboard */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Event Dashboard</CardTitle>
                  <CardDescription>
                    Track your overall progress and key milestones at a glance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Real-time progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Key metrics and deadlines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quick action shortcuts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 - Timeline Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Timeline & Schedule</CardTitle>
                  <CardDescription>
                    Create detailed timelines with automated reminders and milestones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Day-of-event schedule
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Pre-event planning timeline
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Automated task reminders
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 - Guest Management */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Guest Management</CardTitle>
                  <CardDescription>
                    Handle invitations, RSVPs, and seating arrangements effortlessly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      RSVP tracking & follow-up
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Dietary restrictions tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Smart seating arrangements
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 - Budget Tracker */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Budget & Expenses</CardTitle>
                  <CardDescription>
                    Track all event costs and stay within budget with smart alerts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Real-time budget tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Expense categorization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Cost-per-guest calculations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 - Vendor Coordination */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Vendor Coordination</CardTitle>
                  <CardDescription>
                    Manage all your vendors, contracts, and deliverables in one place
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Contract status tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Payment schedule management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Vendor contact database
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 - Resources & Checklists */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Resources & Checklists</CardTitle>
                  <CardDescription>
                    Access expert templates, checklists, and planning resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Event-type specific guides
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Emergency planning templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Professional checklists
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Simple Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Get Organized in
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Just 4 Easy Steps
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Answer a few questions about your event type, date, and budget
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Plan & Organize</h3>
                  <p className="text-muted-foreground text-sm">
                    Use guided templates to plan guest list, timeline, and vendor requirements
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                  <p className="text-muted-foreground text-sm">
                    Monitor your budget, timeline, and tasks with visual dashboards
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Perfect Event</h3>
                  <p className="text-muted-foreground text-sm">
                    Execute your flawlessly planned event with confidence and ease
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline">
                    <Star className="mr-2 h-4 w-4" />
                    Why Choose Our Template
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Skip the Stress,
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Start Planning Smart
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our event planning template is built by professional event planners and used by hundreds. 
                    Get the structure and guidance you need without the overwhelm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Save 30+ Hours of Planning Time</h3>
                      <p className="text-muted-foreground text-sm">
                        Skip the research phase with pre-built templates, checklists, and proven timelines
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Never Miss Important Details</h3>
                      <p className="text-muted-foreground text-sm">
                        Automated reminders and comprehensive checklists ensure nothing falls through the cracks
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Stay Within Budget</h3>
                      <p className="text-muted-foreground text-sm">
                        Real-time budget tracking with alerts helps you make informed spending decisions
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Professional Results</h3>
                      <p className="text-muted-foreground text-sm">
                        Look like a pro with polished timelines, vendor coordination, and guest management
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Works for Any Event Size</h3>
                      <p className="text-muted-foreground text-sm">
                        From intimate gatherings to large corporate events - scales to your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Collaborate with Your Team</h3>
                      <p className="text-muted-foreground text-sm">
                        Share planning responsibilities and keep everyone aligned on progress
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats cards */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">30+ Hours</div>
                    <p className="text-muted-foreground">
                      Average time saved using our structured planning approach vs. starting from scratch
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <p className="text-muted-foreground">
                      Of event planners report staying within budget using our tracking system
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">850+</div>
                    <p className="text-muted-foreground">
                      Successful events planned using our comprehensive template system
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our event planning template
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Is this template really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! This template is completely free to use. No hidden fees, no trials, no credit card required. 
                  Just visit the template, complete the quick setup, and start planning immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  What types of events can I plan with this template?
                </AccordionTrigger>
                <AccordionContent>
                  Our template works for any type of event - corporate conferences, birthday parties, anniversaries, 
                  fundraisers, product launches, networking events, and more. The sections adapt to your specific event type 
                  and scale from intimate gatherings to large celebrations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  How is this different from generic planning tools?
                </AccordionTrigger>
                <AccordionContent>
                  Unlike basic spreadsheets or generic tools, our template is specifically designed for event planning by 
                  professional event coordinators. You get structured guidance, proven timelines, vendor checklists, 
                  and expert tips that help you avoid common pitfalls and deliver professional results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Can I track my event budget with this template?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! The budget tracker includes comprehensive expense categories for all event types 
                  (venue, catering, entertainment, decorations, etc.), real-time spending alerts, cost-per-guest 
                  calculations, and payment schedule tracking to help you stay within budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  How does guest management work for large events?
                </AccordionTrigger>
                <AccordionContent>
                  The template scales to handle events of any size. For large events, you can import guest lists, 
                  track RSVPs in bulk, manage dietary restrictions and special requests, create seating charts, 
                  and generate reports for caterers and venues. Everything syncs automatically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger>
                  Can multiple people work on planning the same event?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! You can share your event planning workspace with team members, co-hosts, or vendors. 
                  Set different permission levels for editing vs. viewing different sections, and everyone stays 
                  updated on progress and changes in real-time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger>
                  What if I&apos;m planning multiple events at the same time?
                </AccordionTrigger>
                <AccordionContent>
                  Perfect! You can create separate planning workspaces for each event while keeping them organized 
                  in one dashboard. Track different budgets, timelines, and vendor relationships for each event 
                  without any confusion or overlap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8">
                <AccordionTrigger>
                  How far in advance should I start planning my event?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline depends on your event size and complexity. Our template includes recommended planning 
                  timelines: 2-3 months for small events, 4-6 months for medium events, and 6-12 months for large 
                  or complex events. You can start at any stage and the template will adapt to your timeline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9">
                <AccordionTrigger>
                  Can I export my data or print planning documents?
                </AccordionTrigger>
                <AccordionContent>
                  All your data is stored locally in your browser and belongs to you. You can export your event 
                  plans, generate PDFs for vendors, print day-of schedules and contact lists, and create 
                  professional reports to share with stakeholders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-10">
                <AccordionTrigger>
                  What if I need help or have questions while planning?
                </AccordionTrigger>
                <AccordionContent>
                  The template includes comprehensive guides, tips, and best practices built in. If you need 
                  additional help, you can reach out through our contact form, and we typically respond 
                  within 24 hours with personalized advice.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Event Planning?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of others who have successfully organized their events 
              with our expert-designed template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/event-planning/app">
                  Start Planning Now - It&apos;s Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/templates">
                  Browse All Templates
                </Link>
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              No signup required • Works in your browser • Your data stays private
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/shift.svg"
                    alt="Templata"
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                  <span className="font-bold text-xl">Templata</span>
                </Link>
                <p className="text-muted-foreground text-sm">
                  Professional templates for life&apos;s biggest moments.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Templates</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/templates" className="hover:text-foreground transition-colors">
                      Browse All Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/wedding-planning" className="hover:text-foreground transition-colors">
                      Wedding Planning
                    </Link>
                  </li>
                  <li>
                    <Link href="/event-planning" className="hover:text-foreground transition-colors">
                      Event Planning
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/about" className="hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-foreground transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © 2024 Templata. Professional planning templates.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}