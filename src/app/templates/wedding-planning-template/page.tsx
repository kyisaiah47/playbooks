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
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WeddingTemplateHero } from '@/components/seo/wedding-template-hero'
import { TemplatePreview } from '@/components/seo/template-preview'
import { TemplateFAQ } from '@/components/seo/template-faq'
import { TemplateCTA } from '@/components/seo/template-cta'

export const metadata: Metadata = {
  title: 'Wedding Planning Template - Complete Digital Wedding Organizer | Templata',
  description: 'Plan your perfect wedding with our comprehensive digital template. Features budget tracking, vendor management, guest lists, timeline planning, and 12 guided planning sections. Start free today.',
  keywords: 'wedding planning template, digital wedding planner, wedding budget tracker, wedding organizer, wedding checklist, wedding planning guide',
  openGraph: {
    title: 'Wedding Planning Template - Complete Digital Wedding Organizer',
    description: 'Plan your perfect wedding with our comprehensive digital template. Features budget tracking, vendor management, guest lists, timeline planning, and 12 guided planning sections.',
    type: 'website',
    images: [
      {
        url: '/images/templates/wedding-planning-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Planning Template Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Planning Template - Complete Digital Wedding Organizer',
    description: 'Plan your perfect wedding with our comprehensive digital template.',
    images: ['/images/templates/wedding-planning-preview.jpg'],
  },
}

export default function WeddingPlanningTemplatePage() {
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
      <WeddingTemplateHero />

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 10,000+ Couples</h2>
            <p className="text-lg text-muted-foreground">Join thousands of couples who planned their dream wedding stress-free</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Couples Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2,847</div>
              <div className="text-sm text-muted-foreground">Avg. Money Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5 min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Sarah & Mike</div>
                  <div className="text-sm text-muted-foreground">Married June 2024</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;This template saved our sanity. We went from scattered chaos to having everything organized in one place. Worth every penny!&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Jessica & Tom</div>
                  <div className="text-sm text-muted-foreground">Married August 2024</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;The budget tracker alone saved us $3,000. We caught overspending early and reallocated to what mattered most.&quot;
              </p>
              <div className="flex text-primary">★★★★★</div>
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Emily & David</div>
                  <div className="text-sm text-muted-foreground">Married September 2024</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                &quot;The vendor question templates were incredible. We asked all the right questions and avoided nasty surprises.&quot;
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
            <Badge variant="outline" className="mb-4">Complete Wedding Toolkit</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need in One Place</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop juggling spreadsheets, apps, and Pinterest boards. Our template brings every aspect of wedding planning into one organized system.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Budget Management</Badge>
                <h3 className="text-3xl font-bold mb-6">Never Go Over Budget Again</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Track every expense with smart categories, get alerts before overspending, and see exactly where your money goes with beautiful visualizations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Industry-standard budget allocation guidelines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Real-time spending alerts and insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Vendor payment timeline tracking</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Budget Dashboard</div>
                    <div className="text-muted-foreground">Live Preview Coming Soon</div>
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
                  From writing vows to emergency day-of kits, each section guides you through specific planning tasks with prompts, examples, and expert tips.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <div className="font-semibold">✓ Timeline Planning</div>
                    <div className="font-semibold">✓ Vendor Questions</div>
                    <div className="font-semibold">✓ Vows & Ceremony</div>
                    <div className="font-semibold">✓ RSVP Management</div>
                    <div className="font-semibold">✓ Seating Charts</div>
                    <div className="font-semibold">✓ Emergency Planning</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">✓ Photo Planning</div>
                    <div className="font-semibold">✓ Music Curation</div>
                    <div className="font-semibold">✓ Gift Registry</div>
                    <div className="font-semibold">✓ Honeymoon Prep</div>
                    <div className="font-semibold">✓ Thank You Notes</div>
                    <div className="font-semibold">✓ Day-of Schedule</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Planning Guides</div>
                    <div className="text-muted-foreground">12 Interactive Sections</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Guest Management</Badge>
                <h3 className="text-3xl font-bold mb-6">Effortless Guest & Vendor Coordination</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Keep track of RSVPs, dietary restrictions, seating arrangements, and vendor communications all in one organized system.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>RSVP tracking with dietary preferences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Seating chart organization tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Vendor contact and contract management</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">Guest Manager</div>
                    <div className="text-muted-foreground">RSVP & Seating Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Template?</h2>
            <p className="text-xl text-muted-foreground">See how we compare to other wedding planning solutions</p>
          </div>

          <div className="bg-background rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <div className="font-semibold text-lg">Features</div>
                <div className="space-y-4 text-sm">
                  <div>Budget Tracking</div>
                  <div>Planning Guides</div>
                  <div>Vendor Management</div>
                  <div>Guest Management</div>
                  <div>Timeline Planning</div>
                  <div>Emergency Prep</div>
                  <div>Customizable</div>
                  <div>One-time Cost</div>
                  <div>No Ads</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="font-semibold text-lg text-center bg-primary text-primary-foreground rounded-lg py-2">Our Template</div>
                <div className="space-y-4 text-sm text-center">
                  <div className="text-primary font-semibold">✓ Advanced</div>
                  <div className="text-primary font-semibold">✓ 12 Sections</div>
                  <div className="text-primary font-semibold">✓ Full Suite</div>
                  <div className="text-primary font-semibold">✓ Complete</div>
                  <div className="text-primary font-semibold">✓ Detailed</div>
                  <div className="text-primary font-semibold">✓ Included</div>
                  <div className="text-primary font-semibold">✓ 100%</div>
                  <div className="text-primary font-semibold">✓ Free Forever</div>
                  <div className="text-primary font-semibold">✓ Ad-Free</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="font-semibold text-lg text-center bg-muted rounded-lg py-2">Wedding Apps</div>
                <div className="space-y-4 text-sm text-center text-muted-foreground">
                  <div>✓ Basic</div>
                  <div>✗ Limited</div>
                  <div>✓ Basic</div>
                  <div>✓ Basic</div>
                  <div>✓ Simple</div>
                  <div>✗ Missing</div>
                  <div>✗ Limited</div>
                  <div>✗ $5-15/month</div>
                  <div>✗ Has Ads</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="font-semibold text-lg text-center bg-muted rounded-lg py-2">Spreadsheets</div>
                <div className="space-y-4 text-sm text-center text-muted-foreground">
                  <div>✓ Manual</div>
                  <div>✗ None</div>
                  <div>✗ None</div>
                  <div>✗ None</div>
                  <div>✗ None</div>
                  <div>✗ None</div>
                  <div>✓ Manual</div>
                  <div>✓ Free</div>
                  <div>✓ No Ads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join 10,000+ couples who chose stress-free wedding planning with our complete template system.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-2">Start in 5 Minutes</div>
                <div className="text-sm text-muted-foreground">No complex setup required</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold mb-2">100% Free to Start</div>
                <div className="text-sm text-muted-foreground">No credit card needed</div>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <div className="font-semibold mb-2">Used by 10,000+ Couples</div>
                <div className="text-sm text-muted-foreground">Trusted by real couples</div>
              </div>
            </div>
          </div>

          <Button size="lg" asChild className="text-lg px-8 py-4">
            <Link href="/templates/wedding-planning">
              Start Planning Your Wedding Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Set up your wedding planning workspace in under 5 minutes. No commitment required.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <TemplateFAQ templateType="wedding" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <TemplateCTA 
            templateType="wedding"
            templateName="Wedding Planning Template"
            appLink="/templates/wedding-planning"
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