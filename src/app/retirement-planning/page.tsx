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
  Calendar,
  FileText,
  BarChart3,
  PiggyBank,
  Calculator,
  Shield,
  TrendingUp,
  Coins,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Retirement Planning Template - Secure Your Financial Future in 40+ Less Hours | Templata',
  description: 'Comprehensive retirement planning template with investment tracking, savings goals, and expert strategies. Save 40+ hours of research and planning. Used by 1,500+ people planning their retirement.',
  keywords: 'retirement planning template, retirement calculator, retirement savings, investment tracking, financial planning, retirement checklist, 401k planning, IRA planning, retirement goals',
  openGraph: {
    title: 'Retirement Planning Template - Secure Your Financial Future',
    description: 'Professional retirement planning template with investment tracking, savings goals, and expert strategies. Save 40+ hours of research.',
    type: 'website',
    url: 'https://templata.com/retirement-planning',
    images: [
      {
        url: '/og-retirement-planning.jpg',
        width: 1200,
        height: 630,
        alt: 'Retirement Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retirement Planning Template - Secure Your Financial Future',
    description: 'Professional retirement planning template with investment tracking, savings goals, and expert strategies. Save 40+ hours of research.',
    images: ['/og-retirement-planning.jpg'],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Retirement Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete retirement planning template with investment tracking, savings goals, and expert strategies",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1500"
  }
}

export default function RetirementPlanningLandingPage() {
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
              <Link href="/retirement-planning/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Professional Retirement Planning
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Secure Your Financial Future
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Save 40+ Hours of Planning
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete retirement planning template with investment tracking, savings goals, 
                and expert strategies. Skip the financial confusion and get organized in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/retirement-planning/app">
                    Start Planning Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 1,500+ people
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
                  Successful Retirement Planning
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six comprehensive planning areas that guide you through every aspect of your retirement journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feature 1 - Overview Dashboard */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Retirement Overview</CardTitle>
                  <CardDescription>
                    Track your overall retirement progress and key milestones at a glance
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
                      Retirement readiness score
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quick action items
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 - Savings Goals */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <PiggyBank className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Savings Goals</CardTitle>
                  <CardDescription>
                    Set and track retirement savings targets with personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Age-based savings targets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Monthly contribution tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Goal achievement timeline
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 - Investment Strategy */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Investment Strategy</CardTitle>
                  <CardDescription>
                    Build a diversified portfolio aligned with your retirement timeline
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Risk tolerance assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Asset allocation guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Rebalancing reminders
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 - Account Management */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Account Management</CardTitle>
                  <CardDescription>
                    Optimize 401(k), IRA, and other retirement accounts for maximum growth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Account type comparison
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Contribution limits tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Tax optimization strategies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 - Income Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Coins className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Income Planning</CardTitle>
                  <CardDescription>
                    Plan your retirement income streams and withdrawal strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Social Security optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Withdrawal rate planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Income stream tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 - Healthcare Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Healthcare Planning</CardTitle>
                  <CardDescription>
                    Prepare for healthcare costs and insurance needs in retirement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Healthcare cost estimation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Insurance coverage planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Long-term care preparation
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
                  <h3 className="text-xl font-semibold mb-2">Financial Assessment</h3>
                  <p className="text-muted-foreground text-sm">
                    Enter your current financial situation and retirement goals
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Set Your Strategy</h3>
                  <p className="text-muted-foreground text-sm">
                    Create personalized savings and investment strategies
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                  <p className="text-muted-foreground text-sm">
                    Monitor your retirement savings growth and milestones
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Future</h3>
                  <p className="text-muted-foreground text-sm">
                    Achieve financial independence and retirement readiness
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
                      Start Planning Smart
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our retirement template is built by financial experts and used by thousands. 
                    Get the guidance and organization you need without the overwhelm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Expert Financial Guidance</h3>
                      <p className="text-muted-foreground text-sm">
                        Built by certified financial planners with 20+ years of experience helping people retire successfully
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Strategies</h3>
                      <p className="text-muted-foreground text-sm">
                        Tailored recommendations based on your age, income, and retirement timeline
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Tax Optimization</h3>
                      <p className="text-muted-foreground text-sm">
                        Maximize your retirement savings with tax-efficient strategies and account optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Comprehensive Planning</h3>
                      <p className="text-muted-foreground text-sm">
                        Cover all aspects from savings and investments to healthcare and estate planning
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Peace of Mind</h3>
                      <p className="text-muted-foreground text-sm">
                        Sleep better knowing you have a clear, actionable plan for your financial future
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
                      Average time saved using our structured approach vs. starting retirement planning from scratch
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">94%</div>
                    <p className="text-muted-foreground">
                      Of users report feeling more confident about their retirement readiness
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">1,500+</div>
                    <p className="text-muted-foreground">
                      People have successfully organized their retirement planning with this template
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
                Everything you need to know about our retirement planning template
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
                  How is this different from generic retirement calculators?
                </AccordionTrigger>
                <AccordionContent>
                  Our template goes beyond simple calculators by providing comprehensive planning across all 
                  aspects of retirement - savings, investments, healthcare, income planning, and more. You get 
                  expert guidance, personalized strategies, and organized tracking all in one place.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  What if I&apos;m already close to retirement?
                </AccordionTrigger>
                <AccordionContent>
                  The template works for all retirement stages. Whether you&apos;re 25 or 60, it provides 
                  age-appropriate strategies and timelines. Those closer to retirement get focused guidance 
                  on income planning, withdrawal strategies, and healthcare preparation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Do I need financial expertise to use this template?
                </AccordionTrigger>
                <AccordionContent>
                  Not at all! The template is designed for beginners and includes clear explanations, 
                  definitions of financial terms, and step-by-step guidance. It educates you while 
                  helping you plan, making complex retirement planning accessible to everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  Can this help with 401(k) and IRA optimization?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! The account management section provides detailed guidance on maximizing your 401(k) 
                  employer match, choosing between traditional and Roth options, understanding contribution 
                  limits, and optimizing your tax strategy across different account types.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger>
                  How does the investment strategy section work?
                </AccordionTrigger>
                <AccordionContent>
                  It includes a risk tolerance assessment, age-based asset allocation recommendations, 
                  and guidance on diversification. You&apos;ll learn about different investment options 
                  and get personalized portfolio suggestions based on your retirement timeline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger>
                  Does this cover Social Security planning?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! The income planning section covers Social Security optimization strategies, 
                  including when to claim benefits for maximum lifetime income, spousal strategies, 
                  and how Social Security fits into your overall retirement income plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8">
                <AccordionTrigger>
                  Can I export my data or notes?
                </AccordionTrigger>
                <AccordionContent>
                  All your data is stored locally in your browser and belongs to you. You can export your notes 
                  and planning data at any time. We also provide printing and PDF export options for easy sharing 
                  with financial advisors or family members.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9">
                <AccordionTrigger>
                  What if I need help or have questions?
                </AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive resources and guides within the template. If you need additional help, 
                  you can reach out through our contact form, and we typically respond within 24 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-10">
                <AccordionTrigger>
                  How often should I update my retirement plan?
                </AccordionTrigger>
                <AccordionContent>
                  We recommend reviewing your plan quarterly and making updates after major life changes 
                  (job changes, salary increases, marriage, etc.). The template includes reminders and 
                  makes it easy to adjust your strategy as your situation evolves.
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
                Retirement Planning?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of others who have successfully organized their retirement journey 
              with our expert-designed template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/retirement-planning/app">
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
                    <Link href="/retirement-planning" className="hover:text-foreground transition-colors">
                      Retirement Planning
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