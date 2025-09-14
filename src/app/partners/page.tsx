"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Home,
  Briefcase,
  DollarSign,
  Users,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  UserPlus,
  Award,
  Globe,
  Handshake
} from "lucide-react"
import { PageLayout } from "@/components/layout"
import { PartnerApplicationModal } from "@/components/partner-application-modal"

const partnerDomains = [
  {
    icon: Heart,
    title: "Wedding Planners",
    description: "Share ceremony guides, vendor checklists, and timeline templates",
    color: "text-pink-600"
  },
  {
    icon: Home,
    title: "Real Estate Professionals",
    description: "Contribute home buying guides, market insights, and closing checklists",
    color: "text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Career Coaches",
    description: "Create job search strategies, interview prep, and career transition guides",
    color: "text-green-600"
  },
  {
    icon: DollarSign,
    title: "Financial Advisors",
    description: "Develop budgeting templates, investment guides, and financial planning tools",
    color: "text-yellow-600"
  },
  {
    icon: Users,
    title: "Life Coaches",
    description: "Build personal development frameworks and goal-setting templates",
    color: "text-purple-600"
  },
  {
    icon: Star,
    title: "Wellness Experts",
    description: "Design health journeys, fitness plans, and mindfulness resources",
    color: "text-emerald-600"
  }
]

const benefits = [
  {
    icon: Globe,
    title: "Reach Thousands",
    description: "Get your expertise in front of people actively planning major life decisions"
  },
  {
    icon: Award,
    title: "Professional Attribution",
    description: "Full credit with your name, credentials, and website link on every template"
  },
  {
    icon: TrendingUp,
    title: "Grow Your Practice",
    description: "Convert template users into clients through trusted, valuable content"
  },
  {
    icon: Handshake,
    title: "Revenue Opportunities",
    description: "Future affiliate partnerships and revenue sharing as we grow together"
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Apply",
    description: "Tell us about your expertise and the templates you'd like to create"
  },
  {
    step: "2",
    title: "Contribute",
    description: "Work with our team to develop high-quality, actionable templates"
  },
  {
    step: "3",
    title: "Get Featured",
    description: "Your templates go live with full attribution and professional profile"
  }
]

export default function PartnersPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2">
              <UserPlus className="mr-2 h-4 w-4" />
              Templata Partners
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Share Your Expertise,
              <br />
              <span className="text-primary">Grow Your Reach</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Partner with Templata to help people through life's biggest moments.
              Contribute your professional knowledge and connect with clients who need your expertise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <PartnerApplicationModal>
                <Button size="lg" className="h-12 px-8">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </PartnerApplicationModal>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perfect for Professionals In</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're looking for experts across life's major domains to contribute their knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerDomains.map((domain) => {
              const Icon = domain.icon
              return (
                <Card key={domain.title} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                        <Icon className={`h-5 w-5 ${domain.color}`} />
                      </div>
                      <CardTitle className="text-lg">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{domain.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner with Templata?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a platform that values professional expertise and helps you reach clients at crucial decision moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Partnership Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple process to get your expertise featured and start reaching potential clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <CheckCircle className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Built on Trust & Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Our users are making life's biggest decisions. They need authoritative, credible guidance
                from real professionals—not generic advice. Your expertise makes all the difference.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-8">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Professional verification
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Quality review process
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Full attribution & credits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Share Your Expertise?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join Templata Partners and help people navigate life's biggest moments with confidence.
            </p>
            <PartnerApplicationModal>
              <Button size="lg" className="h-12 px-8">
                Apply to Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </PartnerApplicationModal>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}