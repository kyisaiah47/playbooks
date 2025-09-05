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
  DollarSign,
  Users,
  CheckCircle,
  BookOpen,
  Target,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: 'College Planning Template - Complete Digital College Application Organizer | Templata',
  description: 'Navigate your college journey with our comprehensive digital template. Features application tracking, essay planning, scholarship management, and 12 guided planning sections. Start free today.',
  keywords: 'college planning template, digital college planner, college application tracker, college organizer, college checklist, college planning guide',
  openGraph: {
    title: 'College Planning Template - Complete Digital College Application Organizer',
    description: 'Navigate your college journey with our comprehensive digital template. Features application tracking, essay planning, scholarship management, and 12 guided planning sections.',
    type: 'website',
    images: [
      {
        url: '/images/templates/college-planning-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'College Planning Template Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'College Planning Template - Complete Digital College Application Organizer',
    description: 'Navigate your college journey with our comprehensive digital template.',
    images: ['/images/templates/college-planning-preview.jpg'],
  },
}

export default function CollegePlanningTemplatePage() {
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
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">College Planning Made Simple</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Navigate Your College Journey with Confidence
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From application tracking to essay planning, manage every aspect of your college journey in one organized system. Used by 5,000+ students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/templates/college-planning">
                    Start Planning Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8">
                  <Link href="#features">See Features</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold">College Planning Template</div>
                  <div className="text-muted-foreground">12 Guided Sections</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 5,000+ Students</h2>
            <p className="text-lg text-muted-foreground">Join thousands of students who got into their dream schools stress-free</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Got Into Top Choice</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10 min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Alex Chen</div>
                  <div className="text-sm text-muted-foreground">Stanford 2028</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;This template kept me organized through 12 applications. The essay tracker was a lifesaver - I never missed a deadline!&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Maria Rodriguez</div>
                  <div className="text-sm text-muted-foreground">MIT 2028</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;The scholarship tracker helped me find and apply to 15 scholarships. I won $25,000 in aid I wouldn't have found otherwise.&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">James Wilson</div>
                  <div className="text-sm text-muted-foreground">Harvard 2028</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;The guided planning sections walked me through every step. I felt prepared and confident throughout the entire process.&quot;
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
            <Badge variant="outline" className="mb-4">Complete College Toolkit</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need in One Place</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop juggling spreadsheets, sticky notes, and different apps. Our template brings every aspect of college planning into one organized system.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Application Management</Badge>
                <h3 className="text-3xl font-bold mb-6">Never Miss a Deadline Again</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Track every application with smart deadlines, requirements checklists, and status updates. Get alerts before important dates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Application deadline tracking and alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Requirements checklist for each school</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Application status and progress tracking</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Application Tracker</div>
                    <div className="text-muted-foreground">Never Miss a Deadline</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <Badge variant="secondary" className="mb-4">Planning Guides</Badge>
                <h3 className="text-3xl font-bold mb-6">12 Expert-Crafted Planning Sections</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  From essay brainstorming to financial aid planning, each section guides you through specific tasks with prompts, examples, and expert tips.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <div className="font-semibold">✓ School Research</div>
                    <div className="font-semibold">✓ Application Strategy</div>
                    <div className="font-semibold">✓ Essay Planning</div>
                    <div className="font-semibold">✓ Scholarship Search</div>
                    <div className="font-semibold">✓ Interview Prep</div>
                    <div className="font-semibold">✓ Financial Planning</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">✓ Activity Lists</div>
                    <div className="font-semibold">✓ Recommendation Letters</div>
                    <div className="font-semibold">✓ Test Prep Planning</div>
                    <div className="font-semibold">✓ Campus Visits</div>
                    <div className="font-semibold">✓ Decision Making</div>
                    <div className="font-semibold">✓ Transition Planning</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Planning Guides</div>
                    <div className="text-muted-foreground">12 Interactive Sections</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Financial Planning</Badge>
                <h3 className="text-3xl font-bold mb-6">Scholarship & Financial Aid Tracking</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Find and track scholarship opportunities, manage financial aid applications, and plan your college budget with comprehensive tools.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Scholarship opportunity database and tracker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Financial aid application management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>College cost comparison and planning</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Financial Planner</div>
                    <div className="text-muted-foreground">Scholarships & Aid</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Navigate Your College Journey?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join 5,000+ students who chose organized, stress-free college planning with our complete template system.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-2">Start in 10 Minutes</div>
                <div className="text-sm text-muted-foreground">No complex setup required</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold mb-2">100% Free to Start</div>
                <div className="text-sm text-muted-foreground">No credit card needed</div>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <div className="font-semibold mb-2">Used by 5,000+ Students</div>
                <div className="text-sm text-muted-foreground">Trusted by real students</div>
              </div>
            </div>
          </div>

          <Button size="lg" asChild className="text-lg px-8 py-4">
            <Link href="/templates/college-planning">
              Start Planning Your Future Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Set up your college planning workspace in under 10 minutes. No commitment required.
          </p>
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
                    href="/templates/college-planning-template"
                    className="hover:text-foreground transition-colors"
                  >
                    College Planning
                  </Link>
                </li>
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