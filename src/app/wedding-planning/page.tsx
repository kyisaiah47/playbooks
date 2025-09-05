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
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Sparkles,
  Shield,
  Zap,
  FileText,
  Camera,
  Music,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Wedding Planning Template | Save 50+ Hours Planning Your Perfect Wedding | Templata',
  description: 'Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Used by 10,000+ couples. Save 50+ hours of planning time. Free to start.',
  keywords: 'wedding planning template, wedding budget tracker, wedding guest list, wedding checklist, wedding planner spreadsheet, wedding vendor list, wedding timeline template, wedding planning guide, wedding organization, wedding planning tools',
  openGraph: {
    title: 'Wedding Planning Template - Save 50+ Hours Planning Your Perfect Wedding',
    description: 'Complete wedding planning system with budget tracking, guest management, and vendor coordination. Join 10,000+ couples who saved time and stress.',
    type: 'website',
    images: ['/wedding-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/wedding-planning',
  },
}

const features = [
  {
    icon: Sparkles,
    title: "Setup in Minutes",
    description: "Quick guided wizard gets you started with all your wedding details in under 5 minutes."
  },
  {
    icon: Shield,
    title: "Expert Created",
    description: "Built by professional wedding planners with 15+ years of industry experience."
  },
  {
    icon: Clock,
    title: "Progress Tracking",
    description: "Visual dashboards and timelines keep you on schedule and stress-free."
  },
  {
    icon: CheckCircle2,
    title: "Complete System",
    description: "Everything in one place - no more scattered spreadsheets or forgotten tasks."
  },
  {
    icon: Users,
    title: "Share & Collaborate",
    description: "Invite your partner, family, and wedding party to collaborate on planning."
  },
  {
    icon: FileText,
    title: "Export & Print",
    description: "Generate beautiful PDFs and printable checklists for vendors and venues."
  }
]

const guidedNotes = [
  { name: "Wedding Timeline & Countdown", icon: Calendar, description: "Plan every detail with expert timing guidance" },
  { name: "Vendor Questions & Contracts", icon: FileText, description: "Essential questions to ask each vendor type" },
  { name: "Guest RSVP Tracking", icon: Users, description: "Manage invitations and responses seamlessly" },
  { name: "Seating Arrangements", icon: MapPin, description: "Create perfect table arrangements" },
  { name: "Wedding Day Emergency Kit", icon: Shield, description: "Be prepared for any situation" },
  { name: "Photography Shot List", icon: Camera, description: "Capture every important moment" },
  { name: "Music & Playlist Planning", icon: Music, description: "Perfect soundtrack for your day" },
  { name: "Vows & Ceremony Script", icon: Heart, description: "Write meaningful vows and plan ceremony flow" },
]

const testimonials = [
  {
    name: "Sarah & Michael",
    text: "This template saved us over 50 hours of planning time and kept us organized throughout the entire 12-month process!",
    rating: 5
  },
  {
    name: "Emily & James", 
    text: "The budget tracker helped us save $3,200 by catching vendor overcharges. We stayed under budget and had our dream wedding.",
    rating: 5
  },
  {
    name: "Lisa & David",
    text: "Managing 15+ vendors became effortless. The contract tracking alone prevented 3 major scheduling conflicts.",
    rating: 5
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Quick Setup Wizard",
    description: "Answer 8 simple questions about your wedding vision, budget, and timeline. Takes just 3 minutes."
  },
  {
    step: "2", 
    title: "Personalized Template",
    description: "Get a fully customized wedding planning workspace with your details, vendors, and timeline pre-filled."
  },
  {
    step: "3",
    title: "Plan & Track Progress",
    description: "Use guided checklists, budget trackers, and timeline tools to plan every detail stress-free."
  },
  {
    step: "4",
    title: "Perfect Wedding Day",
    description: "Execute your perfectly planned wedding with printable timelines, vendor contacts, and day-of schedules."
  }
]

const faqs = [
  {
    question: "What's included in the wedding planning template?",
    answer: "Everything you need: budget tracker with 50+ expense categories, guest list manager with RSVP tracking, vendor contact database, wedding timeline builder, seating chart planner, photography shot lists, music playlist organizer, and 12+ guided planning checklists written by professional wedding planners."
  },
  {
    question: "How long does it take to set up the wedding planner?",
    answer: "Just 3-5 minutes! Our guided setup wizard asks 8 key questions about your wedding date, budget, guest count, and venue preferences. The template automatically customizes all sections with your information, so you can start planning immediately."
  },
  {
    question: "Can I track my wedding budget with this template?",
    answer: "Yes! The budget tracker includes 50+ pre-loaded expense categories (venue, catering, photography, flowers, etc.), payment schedule tracking, vendor deposit monitoring, and automatic calculations. You'll see exactly where every dollar goes and get alerts when approaching budget limits."
  },
  {
    question: "Does the template help with guest list management?",
    answer: "Absolutely. Manage unlimited guests with RSVP tracking, meal preferences, plus-one management, address collection for invitations, and an integrated seating chart planner. Export guest lists for vendors and track responses in real-time."
  },
  {
    question: "How does the vendor coordination feature work?",
    answer: "Store all vendor contacts, contracts, and communications in one place. Track payment schedules, contract deadlines, and vendor availability. Includes templates for 15+ vendor types with essential questions to ask each one."
  },
  {
    question: "Is this better than using spreadsheets for wedding planning?",
    answer: "Much better! Unlike scattered spreadsheets, everything connects - your guest count affects catering costs, vendor schedules sync with your timeline, and budget changes update automatically. Plus you get professional guidance and checklists spreadsheets don't provide."
  },
  {
    question: "Can my fiancé and family help with planning using this template?",
    answer: "Yes! Share your planning workspace with your partner, parents, or wedding party. Set permissions for who can edit vs view different sections. Everyone stays updated on progress and can contribute to planning."
  },
  {
    question: "What if I'm planning a small/large wedding?",
    answer: "The template scales perfectly. Whether you're planning an intimate 20-person ceremony or a 300-guest celebration, all tools adapt to your guest count and budget. Small weddings can skip sections like extensive seating charts, while large weddings get detailed coordination tools."
  },
  {
    question: "How far in advance should I start using this wedding planner?",
    answer: "Ideally 12-18 months before your wedding date, but it's helpful at any stage. The template includes timeline recommendations for booking vendors 6-12 months out, sending invitations 8 weeks before, and final confirmations 1 week prior."
  },
  {
    question: "Can I print or export my wedding plans?",
    answer: "Yes! Generate beautiful PDFs for vendors, printable timelines for your wedding day, guest lists for venues, and emergency contact sheets. Export individual sections or your complete wedding plan in multiple formats."
  }
]

export default function WeddingPlanningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Wedding Planning Template",
    "description": "Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Save 50+ hours of planning time.",
    "url": "https://templata.com/wedding-planning",
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
      "ratingCount": "10000"
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
                              <Heart className="h-4 w-4 text-primary mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Wedding Planning</div>
                                <div className="text-sm text-muted-foreground">Complete wedding organization</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Home className="h-4 w-4 text-muted-foreground mt-1" />
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
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/faq" className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">FAQ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/templates">Browse Templates</Link>
              </Button>
              <Button className="text-base font-medium" asChild>
                <Link href="/wedding-planning/app">Start Planning</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-24"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Most Popular Wedding Template
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
              Plan Your Perfect
              <span className="block text-primary">
                Wedding Day
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
              Everything you need to organize your dream wedding in one beautiful template. 
              From budget tracking to guest management, we&apos;ve got every detail covered. Also explore our{" "}
              <Link href="#" className="text-primary hover:underline">home buying template</Link>{" "}
              and <Link href="#" className="text-primary hover:underline">job search planner</Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href="/wedding-planning/app">
                  Start Planning Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href="#features">
                  See Features
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Save 50+ hours of planning time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Track budgets up to $100K+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Manage 300+ guest weddings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Complete Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Wedding Template
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built by experts, designed for busy couples who want to plan their perfect day without the stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Wedding Planning Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From setup to your perfect wedding day in 4 simple steps. Join 10,000+ couples who planned their dream wedding with our system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Notes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Expert Guidance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Step-by-Step Planning Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each section includes prompts, examples, and expert tips to guide you through every aspect of wedding planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidedNotes.map((note, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <note.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{note.name}</CardTitle>
                  <CardDescription>{note.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Couples Everywhere
            </h2>
            <p className="text-xl text-muted-foreground">
              See what real couples are saying about our wedding planning template.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic mb-4">
                    "{testimonial.text}"
                  </CardDescription>
                  <CardTitle className="text-lg">— {testimonial.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wedding Planning FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about planning your wedding with our template.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Planning Your Dream Wedding Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of couples who have organized their perfect wedding day with our comprehensive template. 
              After your wedding, check out our <Link href="/templates" className="text-primary hover:underline">other life planning templates</Link> for your next big milestone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 h-auto" asChild>
              <Link href="/wedding-planning/app">
                Start Planning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" asChild>
              <Link href="/templates">
                Browse All Templates
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free to start • No credit card required • Set up in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/shift.svg" alt="Templata" width={24} height={24} className="dark:invert" />
                <span className="font-bold text-xl">Templata</span>
              </Link>
              <p className="text-muted-foreground">
                Skip the blank page. Start with proven templates for life&apos;s biggest moments.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Templates</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/wedding-planning" className="hover:text-foreground transition-colors">Wedding Planning</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Home Buying</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Job Search</Link></li>
                <li><Link href="/templates" className="hover:text-foreground transition-colors">View All</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 Templata. Organize your life with templates.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}