"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TemplateHero } from "@/components/seo/template-hero"
import { TemplateCTA } from "@/components/seo/template-cta"
import { TemplateFeatures } from "@/components/seo/template-features"
import { TemplatePreview } from "@/components/seo/template-preview"
import { TemplateFAQ } from "@/components/seo/template-faq"
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
  DollarSign,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react"

const weddingHeroConfig = {
  templateType: "wedding",
  title: "Plan your perfect",
  subtitle: "wedding day",
  description: "Everything you need to organize your dream wedding in one beautiful, easy-to-use template. From budget tracking to guest lists.",
  ctaText: "Start Planning Free",
  ctaLink: "/wedding-planning/app",
  badge: {
    text: "Most Popular Wedding Template",
    icon: Heart,
  },
  stats: [
    { text: "10,000+ couples already planning" },
    { text: "Free to start, no credit card required" },
    { text: "Set up in under 5 minutes" },
  ],
  features: [
    { title: "Budget Tracking", description: "Track expenses and stay within budget", icon: DollarSign },
    { title: "Guest Management", description: "Organize RSVPs and seating charts", icon: Users },
    { title: "Timeline Planning", description: "Plan every detail with custom timelines", icon: Calendar },
    { title: "Vendor Coordination", description: "Manage contracts and communications", icon: MapPin },
    { title: "Vows & Ceremony", description: "Craft meaningful vows and ceremony details", icon: Heart },
    { title: "Photo Planning", description: "Create shot lists and photo schedules", icon: Calendar },
  ],
}

export default function WeddingSEOPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/shift.svg"
                  alt="Templata"
                  width={28}
                  height={28}
                  className="dark:invert"
                />
                <span className="font-bold text-2xl">Templata</span>
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
                            <Link href="/seo/wedding" className="block group">
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
                            <Link href="#" className="block group">
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
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Career & Business
                        </h4>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block group">
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
                            <Link href="#" className="block group">
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Target className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">
                                    Business Launch
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Start your business right
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
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/templates">Browse Templates</Link>
              </Button>
              <Button className="text-base font-medium" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to account for floating header */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <TemplateHero {...weddingHeroConfig} />

      {/* Features Section */}
      <TemplateFeatures templateType="wedding" />

      {/* Preview Section */}
      <TemplatePreview templateType="wedding" />

      {/* FAQ Section */}
      <TemplateFAQ templateType="wedding" />

      {/* CTA Section */}
      <TemplateCTA 
        templateType="wedding" 
        templateName="Wedding Planning" 
        appLink="/wedding-planning/app" 
      />

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
                    href="/seo/wedding"
                    className="hover:text-foreground transition-colors"
                  >
                    Wedding Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Home Buying
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
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