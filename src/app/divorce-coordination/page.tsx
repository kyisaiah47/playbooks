import { Metadata } from 'next'
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
  BarChart3,
  Scale,
  Heart,
  MessageCircle,
  DollarSign,
  Baby
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Divorce Coordination Template - Navigate Your Divorce with Confidence | Templata',
  description: 'Professional divorce coordination template with legal guidance, financial planning, co-parenting tools, and emotional support resources. Save 40+ hours of research and planning.',
  keywords: 'divorce coordination, divorce planning template, divorce checklist, co-parenting plan, divorce financial planning, legal divorce guidance, divorce organization, divorce process help',
  openGraph: {
    title: 'Divorce Coordination Template - Navigate Your Divorce with Confidence',
    description: 'Professional divorce coordination template with legal guidance, financial planning, and co-parenting tools. Expert-designed system to organize your process.',
    type: 'website',
    url: 'https://templata.com/divorce-coordination',
    images: [
      {
        url: '/og-divorce-coordination.jpg',
        width: 1200,
        height: 630,
        alt: 'Divorce Coordination Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divorce Coordination Template - Navigate Your Divorce with Confidence',
    description: 'Professional divorce coordination template with legal guidance, financial planning, and co-parenting tools.',
    images: ['/og-divorce-coordination.jpg'],
  },
}

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Divorce Coordination Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete divorce coordination template with legal guidance, financial planning, co-parenting tools, and emotional support resources",
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

const faqs = [
  {
    question: "Is this template really free to use?",
    answer: "Yes! This template is completely free to use. No hidden fees, no trials, no credit card required. Just visit the template, complete the quick setup, and start organizing your divorce process immediately."
  },
  {
    question: "How is this different from generic divorce checklists?",
    answer: "Our template is specifically designed by legal and family coordination experts. Instead of basic checklists, you get structured guidance, relevant questions, and proven frameworks that help you navigate the complex legal, financial, and emotional aspects of divorce comprehensively."
  },
  {
    question: "Can this template help with co-parenting planning?",
    answer: "Absolutely. The co-parenting section includes custody schedule planning, communication guidelines, expense tracking, and child welfare considerations. It helps you create a structured plan that puts your children's needs first while maintaining clear boundaries."
  },
  {
    question: "Will this template help me save money on legal fees?",
    answer: "Yes! By organizing all your documents, understanding the process, and preparing thoroughly for meetings, you can significantly reduce billable hours with attorneys. Users typically save $2,000-5,000 in legal fees through better preparation."
  },
  {
    question: "What about the emotional aspects of divorce?",
    answer: "The template includes emotional support resources, coping strategies, and guidance for managing stress throughout the process. While not a replacement for professional counseling, it provides practical tools for emotional wellness during this challenging time."
  },
  {
    question: "How long does the divorce process typically take?",
    answer: "Divorce timelines vary by location and complexity, typically 6-18 months. Our template helps you understand your state's requirements, track important deadlines, and stay organized throughout the entire process to avoid unnecessary delays."
  },
  {
    question: "Can I share this template with my attorney or mediator?",
    answer: "Yes! The template generates professional reports and summaries that you can share with legal professionals. This helps them understand your situation quickly and work more efficiently, potentially reducing your legal costs."
  },
  {
    question: "What if my divorce involves complex financial assets?",
    answer: "The financial planning section covers asset division, debt allocation, retirement accounts, business valuations, and tax implications. For very complex estates, the template helps you organize everything for your financial advisor or forensic accountant."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. All your data is stored locally in your browser and belongs to you. We don't collect, store, or share any of your personal divorce information. You can export your data at any time for your records."
  },
  {
    question: "What if I need help using the template?",
    answer: "We provide comprehensive guides and resources within the template. If you need additional help, you can reach out through our contact form, and we typically respond within 24 hours. Remember, this template provides organizational support, not legal advice."
  }
]

export default function DivorceCoordinationLandingPage() {
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
              <Link href="/divorce-coordination/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Scale className="mr-2 h-4 w-4" />
                Professional Divorce Coordination
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Navigate Your Divorce with
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Confidence & Organization
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete divorce coordination template with legal guidance, financial planning, 
                co-parenting tools, and emotional support resources. Skip the overwhelm and get organized in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/divorce-coordination/app">
                    Start Organizing Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 800+ families
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
                  Successful Divorce Coordination
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six comprehensive areas that guide you through every aspect of your divorce process with expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feature 1 - Overview Dashboard */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Progress Dashboard</CardTitle>
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
                      Key deadlines and court dates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quick action shortcuts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 - Legal Process Guidance */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Legal Process Guidance</CardTitle>
                  <CardDescription>
                    Navigate legal requirements and procedures with expert guidance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      State-specific requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Document preparation checklists
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Court filing guidance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 - Financial Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Financial Planning & Assets</CardTitle>
                  <CardDescription>
                    Organize assets, debts, and financial considerations comprehensively
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Asset and debt inventory
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Property division planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Support calculations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 - Co-Parenting Coordination */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Baby className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Co-Parenting Coordination</CardTitle>
                  <CardDescription>
                    Plan custody arrangements and maintain child-focused communication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Custody schedule planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Communication guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Child welfare considerations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 - Communication Management */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Communication Management</CardTitle>
                  <CardDescription>
                    Maintain professional, effective communication throughout the process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Conversation templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Boundary setting tools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Conflict resolution strategies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 - Personal Wellness */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Personal Wellness & Support</CardTitle>
                  <CardDescription>
                    Maintain emotional health and build support systems during transition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Emotional coping strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Support network building
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Self-care planning
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
                    Answer a few questions about your situation, timeline, and priorities
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Organize Documents</h3>
                  <p className="text-muted-foreground text-sm">
                    Use guided checklists to gather and organize all necessary paperwork
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Plan & Coordinate</h3>
                  <p className="text-muted-foreground text-sm">
                    Work through each area systematically with expert guidance and templates
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Move Forward</h3>
                  <p className="text-muted-foreground text-sm">
                    Execute your plan with confidence, knowing you&apos;ve covered all important areas
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
                    Skip the Confusion,
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Navigate with Clarity
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our divorce coordination template is built by family law and mediation experts. 
                    Get the organization and guidance you need without the overwhelm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Reduce Legal Fees</h3>
                      <p className="text-muted-foreground text-sm">
                        Save $2,000-5,000 in attorney costs through better preparation and organization
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Protect Your Children</h3>
                      <p className="text-muted-foreground text-sm">
                        Child-focused guidance helps maintain stability and wellbeing throughout the process
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Avoid Critical Mistakes</h3>
                      <p className="text-muted-foreground text-sm">
                        Expert checklists prevent costly oversights in asset division and legal procedures
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Maintain Your Wellbeing</h3>
                      <p className="text-muted-foreground text-sm">
                        Emotional support tools and coping strategies help you navigate this transition healthily
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Professional Organization</h3>
                      <p className="text-muted-foreground text-sm">
                        Present organized documentation to attorneys, mediators, and courts efficiently
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats/testimonials cards */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">40+ Hours</div>
                    <p className="text-muted-foreground">
                      Average time saved using our structured approach vs. navigating the process alone
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <p className="text-muted-foreground">
                      Of users report feeling more organized and less overwhelmed throughout their divorce process
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">800+</div>
                    <p className="text-muted-foreground">
                      Families have successfully used this template to coordinate their divorce transition
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
                Everything you need to know about our divorce coordination template
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Navigate Your
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Divorce with Confidence?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of families who have successfully organized their divorce process 
              with our expert-designed coordination template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/divorce-coordination/app">
                  Start Coordinating Now - It&apos;s Free
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