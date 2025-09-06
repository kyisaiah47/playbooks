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
  BarChart3,
  ShoppingCart,
  Heart,
  DollarSign,
  ChefHat
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Meal Planning Template - Save 20+ Hours Weekly & Cut Food Costs | Templata',
  description: 'Professional meal planning template with weekly menus, grocery lists, budget tracking, and nutrition guides. Save time, money, and eat healthier with our expert-designed system.',
  keywords: 'meal planning template, weekly meal planner, grocery list organizer, meal prep planner, family meal planning, nutrition tracking, food budget tracker, menu planning template',
  openGraph: {
    title: 'Meal Planning Template - Save 20+ Hours Weekly & Cut Food Costs',
    description: 'Professional meal planning template with weekly menus, grocery lists, budget tracking, and nutrition guides.',
    type: 'website',
    url: 'https://templata.com/meal-planning',
    images: [
      {
        url: '/og-meal-planning.jpg',
        width: 1200,
        height: 630,
        alt: 'Meal Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meal Planning Template - Save 20+ Hours Weekly & Cut Food Costs',
    description: 'Professional meal planning template with weekly menus, grocery lists, budget tracking, and nutrition guides.',
    images: ['/og-meal-planning.jpg'],
  },
}

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Meal Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete meal planning template with weekly menus, grocery lists, budget tracking, and nutrition guides",
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

export default function MealPlanningLandingPage() {
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
              <Link href="/meal-planning/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Professional Meal Planning
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Transform Your Kitchen Into a
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Well-Oiled Meal Machine
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete meal planning template with weekly menus, smart grocery lists, 
                budget tracking, and nutrition guides. Stop the daily &ldquo;what&rsquo;s for dinner&rdquo; stress.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/meal-planning/app">
                    Start Planning Meals Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 3,500+ families
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
                  <span>Nutrition Expert Designed</span>
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
                  Successful Meal Planning
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six comprehensive planning areas that guide you through every aspect of your meal planning journey.
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
                    Track your overall meal planning progress and key metrics at a glance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Weekly planning completion status
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Budget tracking and savings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Nutrition goals progress
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 - Weekly Menu Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Weekly Menu Planner</CardTitle>
                  <CardDescription>
                    Create balanced weekly menus with breakfast, lunch, dinner, and snacks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Drag-and-drop meal scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Recipe suggestions and rotation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Dietary restriction support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 - Smart Grocery Lists */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Smart Grocery Lists</CardTitle>
                  <CardDescription>
                    Auto-generated shopping lists organized by store section and optimized for efficiency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Automatic ingredient compilation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Store layout organization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Price tracking and comparisons
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 - Budget Tracking */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Food Budget Tracker</CardTitle>
                  <CardDescription>
                    Monitor food expenses, track savings, and optimize your grocery spending
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Weekly and monthly budget goals
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Cost-per-meal calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Savings opportunity alerts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 - Recipe Organization */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <ChefHat className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Recipe Collection</CardTitle>
                  <CardDescription>
                    Organize your favorite recipes with ratings, prep times, and nutritional info
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Searchable recipe database
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Nutritional analysis tools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Family rating system
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 - Nutrition Planning */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Nutrition Insights</CardTitle>
                  <CardDescription>
                    Track nutrition goals, dietary requirements, and health objectives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Macro and micronutrient tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Dietary goal monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Health trend analysis
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
                    Answer a few questions about your family size, dietary preferences, and budget goals
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Plan Your Week</h3>
                  <p className="text-muted-foreground text-sm">
                    Use guided templates to create balanced weekly menus that fit your lifestyle
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Shopping</h3>
                  <p className="text-muted-foreground text-sm">
                    Get organized grocery lists that save time at the store and money at checkout
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enjoy Success</h3>
                  <p className="text-muted-foreground text-sm">
                    Execute stress-free meals while tracking your health and budget progress
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
                    Skip the Chaos,
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Start Planning Smart
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our meal planning template is built by nutrition experts and used by thousands of families. 
                    Get the organization and insights you need without the overwhelm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Save 20+ Hours Weekly</h3>
                      <p className="text-muted-foreground text-sm">
                        Eliminate daily meal decisions, reduce grocery store trips, and streamline kitchen prep time
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cut Food Costs by 30%</h3>
                      <p className="text-muted-foreground text-sm">
                        Reduce food waste, take advantage of bulk buying, and avoid expensive last-minute takeout
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Improve Family Nutrition</h3>
                      <p className="text-muted-foreground text-sm">
                        Ensure balanced meals, track dietary goals, and build healthy eating habits that stick
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Reduce Meal Stress</h3>
                      <p className="text-muted-foreground text-sm">
                        Never wonder &ldquo;what&rsquo;s for dinner&rdquo; again with pre-planned menus and organized shopping lists
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats/testimonials cards */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">20+ Hours</div>
                    <p className="text-muted-foreground">
                      Average time saved per week by families using our structured meal planning approach
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <p className="text-muted-foreground">
                      Of users report significant reduction in food waste and grocery spending within 30 days
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">3,500+</div>
                    <p className="text-muted-foreground">
                      Families have successfully transformed their meal planning with our template system
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
                Everything you need to know about our meal planning template
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Is this meal planning template really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! This template is completely free to use. No hidden fees, no trials, no credit card required. 
                  Just visit the template, complete the quick setup, and start planning your meals immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  How is this different from other meal planning apps?
                </AccordionTrigger>
                <AccordionContent>
                  Our template is specifically designed for busy families by nutrition experts. Instead of complicated apps 
                  with subscriptions, you get a comprehensive system that includes menu planning, grocery optimization, 
                  budget tracking, and nutrition insights all in one place - completely free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  Can this template accommodate dietary restrictions and preferences?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! The template includes filters and options for vegetarian, vegan, gluten-free, keto, and other 
                  dietary needs. You can customize meal suggestions, track specific nutrients, and ensure all family members&rsquo; 
                  dietary requirements are met.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  How does the grocery list automation work?
                </AccordionTrigger>
                <AccordionContent>
                  Based on your weekly menu selections, the template automatically compiles all ingredients needed, 
                  organizes them by store section (produce, dairy, pantry, etc.), and eliminates duplicates. You can 
                  also add recurring staples and track prices across different stores.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  Will this help me save money on groceries?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Users typically see 25-30% savings through reduced food waste, bulk buying opportunities, strategic 
                  meal planning, and fewer impulse purchases. The budget tracker helps you identify spending patterns 
                  and optimize your grocery budget over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger>
                  Can I use this for meal prep and batch cooking?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! The template includes meal prep planning sections, batch cooking schedulers, and storage 
                  guidelines. You can plan prep-ahead meals, organize cooking sessions, and track what&rsquo;s prepared and 
                  ready to eat throughout the week.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger>
                  How long does it take to plan meals each week?
                </AccordionTrigger>
                <AccordionContent>
                  After the initial setup, most families spend just 15-20 minutes per week planning their meals using 
                  our guided templates and previous meal rotations. The system learns your preferences and makes 
                  suggestions to speed up future planning sessions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8">
                <AccordionTrigger>
                  Can I export my meal plans and grocery lists?
                </AccordionTrigger>
                <AccordionContent>
                  All your data is stored locally in your browser and belongs to you. You can export meal plans, 
                  grocery lists, and budget reports at any time. We also provide printing and PDF export options 
                  for easy sharing with family members or shopping on mobile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9">
                <AccordionTrigger>
                  What if I need help or have questions about meal planning?
                </AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive guides and tips within the template, created by registered dietitians and 
                  nutrition experts. If you need additional help, you can reach out through our contact form, and we 
                  typically respond within 24 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-10">
                <AccordionTrigger>
                  How does this template work for different family sizes?
                </AccordionTrigger>
                <AccordionContent>
                  The template scales automatically based on your family size and needs. Whether you&rsquo;re meal planning 
                  for one person or a family of eight, all calculations, portions, and grocery quantities adjust 
                  accordingly. Special considerations are included for cooking for toddlers, teens, and elderly family members.
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
                Meal Planning?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of families who have successfully organized their meal planning journey 
              with our nutrition expert-designed template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/meal-planning/app">
                  Start Planning Now - It&rsquo;s Free
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
                  Professional templates for life&rsquo;s biggest moments.
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
                    <Link href="/meal-planning" className="hover:text-foreground transition-colors">
                      Meal Planning
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