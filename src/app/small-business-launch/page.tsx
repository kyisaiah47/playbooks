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
  Building2,
  Zap,
  TrendingUp,
  DollarSign,
  Scale
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Small Business Launch Template - Start Your Business Right | Templata',
  description: 'Complete small business launch template with business planning, legal setup, marketing strategy, and financial tracking. Save 60+ hours of startup research.',
  keywords: 'small business template, business launch planner, startup checklist, business plan template, small business startup, entrepreneur guide, business launch toolkit',
  openGraph: {
    title: 'Small Business Launch Template - Start Your Business Right',
    description: 'Professional small business launch template with business planning, legal setup, marketing strategy, and financial tracking.',
    type: 'website',
    url: 'https://templata.com/small-business-launch',
    images: [
      {
        url: '/og-small-business-launch.jpg',
        width: 1200,
        height: 630,
        alt: 'Small Business Launch Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Launch Template - Start Your Business Right',
    description: 'Professional small business launch template with business planning, legal setup, marketing strategy, and financial tracking.',
    images: ['/og-small-business-launch.jpg'],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Small Business Launch Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete small business launch template with business planning, legal setup, marketing strategy, and financial tracking",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "247"
  }
}

export default function SmallBusinessLaunchLandingPage() {
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
              <Link href="/small-business-launch/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Building2 className="mr-2 h-4 w-4" />
                Professional Business Launch
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Launch Your Business Like a Pro
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Save 60+ Hours of Research
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete small business launch template with business planning, legal setup, 
                marketing strategy, and financial tracking. Skip months of research and start smart.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/small-business-launch/app">
                    Start Planning Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 247+ entrepreneurs
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

        {/* Features Section - Core Pages */}
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
                  Successful Business Launch
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Seven comprehensive planning areas that guide you through every aspect of starting your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Overview Dashboard */}
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
                      Key metrics and deadlines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quick action shortcuts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Business Foundation */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Business Foundation</CardTitle>
                  <CardDescription>
                    Define your business model, mission, and core strategy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Business model canvas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Mission & vision planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Value proposition design
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Legal & Registration */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Legal & Registration</CardTitle>
                  <CardDescription>
                    Handle business registration, licenses, and legal requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Business structure guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      License requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Compliance tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Financial Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Financial Planning</CardTitle>
                  <CardDescription>
                    Create budgets, projections, and funding strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Startup cost calculator
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Cash flow projections
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Funding options guide
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Marketing Strategy */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Marketing Strategy</CardTitle>
                  <CardDescription>
                    Develop marketing plans and customer acquisition strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Target market analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Marketing channel planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Brand development guide
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Operations Setup */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Operations Setup</CardTitle>
                  <CardDescription>
                    Establish systems, processes, and operational workflows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Process documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Tool & software selection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quality control systems
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
                Launch Your Business in
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
                  <h3 className="text-xl font-semibold mb-2">Define Your Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    Clarify your business idea, target market, and value proposition with guided questions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Handle Legal Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete business registration, get required licenses, and establish legal foundation
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Build Your Strategy</h3>
                  <p className="text-muted-foreground text-sm">
                    Develop financial plans, marketing strategy, and operational systems for success
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Launch & Grow</h3>
                  <p className="text-muted-foreground text-sm">
                    Execute your plan with confidence and track progress toward sustainable growth
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
                    Skip the Guesswork,
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Start Business Smart
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our business launch template is built by entrepreneurs and business experts. 
                    Get the structure and guidance you need without the overwhelm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Avoid Costly Mistakes</h3>
                      <p className="text-muted-foreground text-sm">
                        Pre-built checklists and expert guidance help you avoid the common pitfalls that derail 70% of new businesses
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Launch Faster</h3>
                      <p className="text-muted-foreground text-sm">
                        Structured approach reduces launch time from 6-12 months to 2-3 months with proper preparation
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Expert Guidance</h3>
                      <p className="text-muted-foreground text-sm">
                        Get insights from successful entrepreneurs and business advisors built into every section
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Stay Organized</h3>
                      <p className="text-muted-foreground text-sm">
                        Keep all your business planning in one place instead of scattered documents and forgotten tasks
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">60+ Hours</div>
                    <p className="text-muted-foreground">
                      Average time saved using our structured approach vs. starting from scratch with research
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <p className="text-muted-foreground">
                      Of users report feeling more confident and prepared for their business launch
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">247+</div>
                    <p className="text-muted-foreground">
                      Entrepreneurs have successfully used this template for their business journey
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
                Everything you need to know about our small business launch template
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Is this template really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! This template is completely free to use. No hidden fees, no trials, no credit card required. 
                  Just visit the template, complete the quick setup, and start planning your business launch immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  How is this different from generic business planning tools?
                </AccordionTrigger>
                <AccordionContent>
                  Our template is specifically designed for small business launches by entrepreneurs and business experts. Instead of blank 
                  documents, you get structured guidance, relevant questions, and proven frameworks that 
                  have helped hundreds of businesses successfully launch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  What type of businesses can use this template?
                </AccordionTrigger>
                <AccordionContent>
                  This template works for most small business types including service businesses, retail, e-commerce, 
                  consulting, local businesses, and online businesses. The framework is flexible enough to adapt to 
                  different industries while providing specific guidance for common business structures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Do I need business experience to use this template?
                </AccordionTrigger>
                <AccordionContent>
                  No! This template is designed for first-time entrepreneurs. Each section includes explanations, 
                  examples, and step-by-step guidance. You&apos;ll learn key business concepts as you plan, making it 
                  perfect for both beginners and experienced entrepreneurs who want a structured approach.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  How long does it take to complete the business planning?
                </AccordionTrigger>
                <AccordionContent>
                  Most entrepreneurs complete the core planning in 2-4 weeks working 2-3 hours per week. You can 
                  work at your own pace and the template saves your progress. Some sections like legal setup may 
                  take additional time depending on your location and business type.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger>
                  Does the template help with legal requirements and registration?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! The legal section provides guidance on business structures, registration requirements, licenses, 
                  and permits. While we provide comprehensive information and checklists, we always recommend 
                  consulting with a business attorney for complex legal decisions specific to your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger>
                  Can I use this template if I already started my business?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Many entrepreneurs use this template to organize existing businesses, plan expansions, 
                  or ensure they haven&apos;t missed critical steps. You can skip completed sections and focus on areas 
                  that need attention like marketing strategy or financial planning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8">
                <AccordionTrigger>
                  Can I export my business plan or share it with others?
                </AccordionTrigger>
                <AccordionContent>
                  All your data is stored locally in your browser and belongs to you. You can export your business plan 
                  and planning data at any time. We also provide printing and PDF export options for easy sharing 
                  with investors, advisors, or business partners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9">
                <AccordionTrigger>
                  What if I need help or have questions about my business plan?
                </AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive resources, examples, and guides within the template. If you need additional help, 
                  you can reach out through our contact form, and we typically respond within 24 hours. For complex 
                  business decisions, we recommend consulting with business advisors or mentors.
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
                Business Idea into Reality?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of entrepreneurs who have successfully launched their businesses 
              with our expert-designed template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/small-business-launch/app">
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
                    <Link href="/small-business-launch" className="hover:text-foreground transition-colors">
                      Small Business Launch
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