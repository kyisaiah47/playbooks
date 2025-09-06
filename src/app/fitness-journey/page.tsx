import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Target,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Activity,
  BarChart3,
  Dumbbell,
  Apple,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Fitness Journey Template | Transform Your Body & Build Lasting Habits | Templata',
  description: 'Complete fitness planning template with workout tracking, nutrition planning, goal setting, and progress monitoring. Science-backed system used by 2,500+ people to achieve lasting results.',
  keywords: 'fitness planning template, workout tracker, fitness goals, nutrition planning, fitness journey planner, exercise tracker, fitness habit tracker, fitness progress tracker, fitness template, workout planner',
  openGraph: {
    title: 'Fitness Journey Template - Transform Your Body & Build Lasting Habits',
    description: 'Complete fitness system with workout planning, nutrition tracking, and progress monitoring. Join 2,500+ people who achieved lasting results.',
    type: 'website',
    url: 'https://templata.com/fitness-journey',
    images: [
      {
        url: '/og-fitness-journey.jpg',
        width: 1200,
        height: 630,
        alt: 'Fitness Journey Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Journey Template - Transform Your Body & Build Lasting Habits',
    description: 'Complete fitness system with workout planning, nutrition tracking, and progress monitoring. Join 2,500+ people who achieved lasting results.',
    images: ['/og-fitness-journey.jpg'],
  },
}


const corePages = [
  { 
    name: "Goal Setting & Planning", 
    icon: Target, 
    description: "Set SMART fitness goals and create your personalized roadmap",
    benefits: ["SMART goal framework", "Timeline planning", "Milestone tracking"]
  },
  { 
    name: "Workout Planning & Tracking", 
    icon: Dumbbell, 
    description: "Design and track your workouts with exercise library and progress logs",
    benefits: ["Exercise database", "Set/rep tracking", "Progressive overload"]
  },
  { 
    name: "Nutrition & Meal Planning", 
    icon: Apple, 
    description: "Plan balanced meals and track nutritional intake for optimal results",
    benefits: ["Macro tracking", "Meal prep guides", "Recipe collection"]
  },
  { 
    name: "Habit Building & Consistency", 
    icon: Calendar, 
    description: "Build sustainable fitness habits with proven behavior change strategies",
    benefits: ["Habit stacking", "Consistency tracking", "Reward systems"]
  },
  { 
    name: "Progress Monitoring", 
    icon: BarChart3, 
    description: "Track measurements, photos, and performance metrics over time",
    benefits: ["Body measurements", "Progress photos", "Performance metrics"]
  },
  { 
    name: "Resources & Education", 
    icon: BookOpen, 
    description: "Access expert guides, tips, and educational content for success",
    benefits: ["Exercise guides", "Nutrition education", "Recovery protocols"]
  }
]

const testimonials = [
  {
    name: "Sarah M.",
    text: "Lost 25 pounds and gained so much strength in 6 months. The habit tracking was a game-changer for staying consistent!",
    rating: 5
  },
  {
    name: "Mike T.", 
    text: "Finally found a system that works long-term. The progressive overload tracking helped me add 50 lbs to my bench press.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    text: "The nutrition planning saved me hours each week and helped me fuel my workouts properly. Down 3 dress sizes!",
    rating: 5
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Quick Assessment",
    description: "Answer questions about your current fitness level, goals, schedule, and preferences in just 3 minutes."
  },
  {
    step: "2", 
    title: "Personalized Plan",
    description: "Get a customized fitness template with workouts, nutrition guidance, and habit-building strategies."
  },
  {
    step: "3",
    title: "Track & Progress",
    description: "Log workouts, track nutrition, monitor habits, and watch your transformation unfold with detailed analytics."
  },
  {
    step: "4",
    title: "Achieve Your Goals",
    description: "Reach your fitness goals with proven strategies, consistent tracking, and sustainable habit formation."
  }
]

const benefits = [
  {
    title: "Save 40+ Hours of Research",
    description: "Skip the overwhelming research phase. Our template includes everything you need based on proven science and expert guidance."
  },
  {
    title: "Build Lasting Habits",
    description: "Focus on sustainable behavior change with our habit-building framework that creates long-term success, not quick fixes."
  },
  {
    title: "Progressive Overload System",
    description: "Built-in progression tracking ensures you're constantly challenging yourself and making measurable improvements."
  },
  {
    title: "Nutrition Made Simple",
    description: "No complicated diets. Learn to fuel your body properly with flexible nutrition planning and macro guidance."
  },
  {
    title: "Accountability & Motivation",
    description: "Stay motivated with progress tracking, achievement badges, and community support throughout your journey."
  },
  {
    title: "Expert-Designed Framework",
    description: "Created by certified trainers and sports scientists using evidence-based principles for optimal results."
  }
]

const faqs = [
  {
    question: "Is this template suitable for beginners?",
    answer: "Absolutely! The template adapts to all fitness levels. Beginners get foundational movement patterns, basic nutrition guidance, and gentle habit-building strategies. The assessment customizes everything to your current experience level."
  },
  {
    question: "How is this different from fitness apps?",
    answer: "Unlike single-purpose apps, our template integrates all aspects of fitness - workouts, nutrition, habits, and mindset - in one comprehensive system. You get expert guidance, not just tracking tools, with educational content and proven frameworks."
  },
  {
    question: "Can I use this if I already have a gym routine?",
    answer: "Yes! The template is flexible - use it to enhance your current routine with better tracking, nutrition planning, and habit optimization. Many experienced fitness enthusiasts use it to break through plateaus and stay consistent."
  },
  {
    question: "Does this include specific workout plans?",
    answer: "The template includes workout frameworks and exercise libraries, but it's designed to work with any training style - whether you prefer bodyweight, weights, cardio, yoga, or mixed approaches. It focuses on the planning and tracking systems."
  },
  {
    question: "How does the nutrition tracking work?",
    answer: "Simple macro tracking with educational content about proper nutrition. No complex calorie counting required - focus on balanced meals, portion awareness, and fueling your workouts properly with our flexible approach."
  },
  {
    question: "What if I have limited time to exercise?",
    answer: "Perfect! The template includes time-efficient workout strategies and helps you build consistent habits even with just 20-30 minutes available. Quality and consistency matter more than duration."
  },
  {
    question: "Can I track multiple fitness goals simultaneously?",
    answer: "Yes! Whether you want to lose weight, build muscle, improve endurance, or enhance overall health, the template helps you balance and prioritize multiple objectives with clear action plans."
  },
  {
    question: "Is there support for different diet preferences?",
    answer: "Absolutely. The nutrition section accommodates various dietary preferences - vegetarian, keto, Mediterranean, or flexible dieting. Focus is on principles rather than restrictive meal plans."
  },
  {
    question: "How do I stay motivated during plateaus?",
    answer: "The template includes plateau-busting strategies, progress measurement beyond the scale, and mindset tools to maintain motivation. Plus community features to connect with others facing similar challenges."
  },
  {
    question: "Can I share my progress with a trainer or doctor?",
    answer: "Yes! Export detailed progress reports, workout logs, and health metrics in PDF format to share with fitness professionals, doctors, or accountability partners for professional guidance."
  }
]

export default function FitnessJourneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fitness Journey Planning Template",
    "description": "Complete fitness planning template with workout tracking, nutrition planning, goal setting, and progress monitoring for sustainable results.",
    "url": "https://templata.com/fitness-journey",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2500"
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
            <Link href="/fitness-journey/app">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="px-4 py-2">
              <Activity className="mr-2 h-4 w-4" />
              Science-Backed Fitness Planning
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transform Your Body & Build
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Lasting Fitness Habits
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete fitness planning template with workout tracking, nutrition guidance, 
              and habit-building strategies. Skip the confusion and get organized in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/fitness-journey/app">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                <Users className="mr-2 h-4 w-4" />
                Used by 2,500+ people
              </Button>
            </div>
            
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

      {/* Features Section */}
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
                Successful Fitness Results
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six comprehensive planning areas that guide you through every aspect of your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePages.map((page, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <page.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{page.name}</CardTitle>
                  <CardDescription>
                    {page.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {page.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
              Get Fit & Healthy in
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Just 4 Easy Steps
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
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
                    Start Training Smart
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our fitness template is built by certified trainers and used by thousands. 
                  Get the structure and guidance you need without the overwhelm.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">40+ Hours</div>
                  <p className="text-muted-foreground">
                    Average time saved using our structured approach vs. figuring out fitness on your own
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">87%</div>
                  <p className="text-muted-foreground">
                    Of users report building consistent fitness habits within 30 days using our system
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                  <p className="text-muted-foreground">
                    People have successfully transformed their health and fitness using this template
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories from Real People
            </h2>
            <p className="text-xl text-muted-foreground">
              See what people are saying about their fitness transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </CardDescription>
                  <CardTitle className="text-lg">— {testimonial.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our fitness journey template
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
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Fitness Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of others who have successfully transformed their health and fitness 
            with our expert-designed template.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/fitness-journey/app">
                Start Your Journey - It&apos;s Free
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
                  <Link href="/fitness-journey" className="hover:text-foreground transition-colors">
                    Fitness Journey
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
  )
}