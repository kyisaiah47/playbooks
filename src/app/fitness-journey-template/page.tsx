import { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  GraduationCap,
  Baby,
  ArrowRight,
  Calendar,
  Target,
  Users,
  CheckCircle,
  Dumbbell,
  Activity,
  TrendingUp,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { FitnessTemplateHero } from '@/components/seo/fitness-template-hero'
import { TemplateFAQ } from '@/components/seo/template-faq'
import { TemplateCTA } from '@/components/seo/template-cta'

export const metadata: Metadata = {
  title: 'Fitness Journey Template - Complete Workout & Nutrition Planner | Templata',
  description: 'Transform your fitness goals with our comprehensive digital template. Features workout tracking, nutrition planning, progress monitoring, and 12 guided fitness sections. Start free today.',
  keywords: 'fitness template, workout planner, nutrition tracker, fitness goals, digital fitness planner, workout tracker, health planner',
  openGraph: {
    title: 'Fitness Journey Template - Complete Workout & Nutrition Planner',
    description: 'Transform your fitness goals with our comprehensive digital template. Features workout tracking, nutrition planning, progress monitoring, and 12 guided fitness sections.',
    type: 'website',
    images: [
      {
        url: '/images/templates/fitness-journey-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Fitness Journey Template Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Journey Template - Complete Workout & Nutrition Planner',
    description: 'Transform your fitness goals with our comprehensive digital template.',
    images: ['/images/templates/fitness-journey-preview.jpg'],
  },
}

export default function FitnessJourneyTemplatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/shift.svg"
                alt="Templata"
                width={28}
                height={28}
                className="dark:invert"
              />
              <Link href="/" className="font-bold text-2xl hover:text-primary transition-colors">
                Templata
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">
                    Templates
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-6 p-6 w-[500px]">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Personal Life
                        </h4>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/templates/wedding-planning-template"
                              className="block group"
                            >
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Heart className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    Wedding Planning
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Complete wedding organization
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link
                              href="/templates/home-buying-template"
                              className="block group"
                            >
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Home className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    Home Buying
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Navigate the home buying process
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link
                              href="/templates/baby-planning-template"
                              className="block group"
                            >
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Baby className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    Baby Planning
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Prepare for your little one
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Career & Business
                        </h4>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/templates/job-search-template"
                              className="block group"
                            >
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    Job Search
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Track applications & interviews
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <Link
                              href="/templates/college-planning-template"
                              className="block group"
                            >
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    College Planning
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Navigate college applications
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/faq"
                      className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      FAQ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                className="text-base"
                asChild
              >
                <Link href="/templates">Browse Templates</Link>
              </Button>
              <Button
                className="text-base font-medium"
                asChild
              >
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to account for floating header */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <FitnessTemplateHero />

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 5,000+ Fitness Enthusiasts</h2>
            <p className="text-lg text-muted-foreground">Join thousands who achieved their fitness goals with our template</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Goal Achievement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3 weeks</div>
              <div className="text-sm text-muted-foreground">Avg. Time to Results</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Alex M.</div>
                  <div className="text-sm text-muted-foreground">Lost 30 lbs</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;This template kept me accountable. The workout tracking and nutrition planning made all the difference. Down 30 pounds!&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Sarah K.</div>
                  <div className="text-sm text-muted-foreground">Marathon Runner</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;The training plans and progress tracking helped me complete my first marathon. Couldn't have done it without this!&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Mike R.</div>
                  <div className="text-sm text-muted-foreground">Gained 15 lbs muscle</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;The strength training guides and meal prep sections transformed my physique. Gained 15 pounds of muscle!&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4">Complete Fitness Toolkit</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need in One Place</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop juggling apps, spreadsheets, and notebooks. Our template brings every aspect of fitness planning into one organized system.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Workout Tracking</Badge>
                <h3 className="text-3xl font-bold mb-6">Never Miss a Rep Again</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Track every exercise, set, and rep with detailed workout logs. Monitor your progress over time and see your strength gains visualized with beautiful charts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Customizable workout routines and templates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Progressive overload tracking and analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Exercise library with form cues and tips</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Dumbbell className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Workout Tracker</div>
                    <div className="text-muted-foreground">Log Every Rep & Set</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <Badge variant="secondary" className="mb-4">Nutrition Planning</Badge>
                <h3 className="text-3xl font-bold mb-6">12 Expert-Designed Fitness Sections</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  From meal prep to goal setting, each section guides you through specific aspects of fitness with actionable prompts, examples, and expert advice.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <div className="font-semibold">✓ Goal Setting</div>
                    <div className="font-semibold">✓ Workout Planning</div>
                    <div className="font-semibold">✓ Nutrition Tracking</div>
                    <div className="font-semibold">✓ Meal Prep Guide</div>
                    <div className="font-semibold">✓ Progress Photos</div>
                    <div className="font-semibold">✓ Measurements Log</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">✓ Supplements Guide</div>
                    <div className="font-semibold">✓ Recovery Planning</div>
                    <div className="font-semibold">✓ Habit Tracking</div>
                    <div className="font-semibold">✓ Motivation Tools</div>
                    <div className="font-semibold">✓ Plateau Solutions</div>
                    <div className="font-semibold">✓ Success Celebration</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Fitness Guides</div>
                    <div className="text-muted-foreground">12 Interactive Sections</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Progress Monitoring</Badge>
                <h3 className="text-3xl font-bold mb-6">See Your Transformation Unfold</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Track your progress with detailed metrics, body measurements, progress photos, and performance analytics that show how far you've come.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Body composition and measurement tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Progress photo organization and comparison</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Performance metrics and strength gains</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Progress Tracker</div>
                    <div className="text-muted-foreground">Watch Your Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Fitness?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join 5,000+ people who chose structured, results-driven fitness planning with our complete template system.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-2">Start in 5 Minutes</div>
                <div className="text-sm text-muted-foreground">No complex setup required</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💪</div>
                <div className="font-semibold mb-2">100% Free to Start</div>
                <div className="text-sm text-muted-foreground">No credit card needed</div>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <div className="font-semibold mb-2">Proven by 5,000+ Users</div>
                <div className="text-sm text-muted-foreground">Real results from real people</div>
              </div>
            </div>
          </div>

          <Button size="lg" asChild className="text-lg px-8 py-4">
            <Link href="/templates/fitness-journey">
              Start Your Fitness Journey Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Set up your fitness planning workspace in under 5 minutes. No commitment required.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <TemplateFAQ templateType="fitness" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <TemplateCTA 
            templateType="fitness"
            templateName="Fitness Journey Template"
            appLink="/templates/fitness-journey"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/shift.svg"
                  alt="Templata"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
                <span className="font-bold text-xl">Templata</span>
              </div>
              <p className="text-muted-foreground">
                Skip the blank page. Start with proven templates for life&apos;s
                biggest moments.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Templates</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/templates/wedding-planning-template"
                    className="hover:text-foreground transition-colors"
                  >
                    Wedding Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates/home-buying-template"
                    className="hover:text-foreground transition-colors"
                  >
                    Home Buying
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates/job-search-template"
                    className="hover:text-foreground transition-colors"
                  >
                    Job Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="hover:text-foreground transition-colors"
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 Templata. Organize your life with templates.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}