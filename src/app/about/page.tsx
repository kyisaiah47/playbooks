"use client"

import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/layout"
import { StatsVisualization } from "@/components/about/StatsVisualization"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout includeHeaderPadding={false}>
      {/* Hero - Linear style */}
      <section className="relative px-6 pt-40 pb-32 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl mb-8">
            Bringing structure to
            <br />
            <span className="text-muted-foreground">life's biggest moments</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Every major decision deserves a framework—not a blank page.
          </p>
        </div>
      </section>

      {/* Stats Visualization */}
      <section className="px-6 pb-40">
        <div className="mx-auto max-w-6xl">
          <StatsVisualization />
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-48 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Why we exist
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              When people face life's biggest decisions, they're handed blank pages and told to "figure it out."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">The problem</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Career changes, wedding planning, health decisions, relationship transitions—these aren't problems that need invention. Millions have walked these paths. But the knowledge is scattered across Reddit threads, blog posts, and closed communities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our solution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Like Wikipedia organized human knowledge and Notion structured team workflows, Templata provides expert-curated frameworks for life's biggest moments. 1,200+ guides with guided questions and curated reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-48 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              How we work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Expert-curated, not AI-generated</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every framework is built by someone who's navigated that exact situation. We believe in human expertise, not algorithm-generated advice.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Structured, not prescriptive</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide frameworks and questions, not answers. Your decisions are yours—we just help you think through them systematically.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Comprehensive, not overwhelming</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Coverage across 1,200+ topics, but each guide is focused and actionable. No endless scrolling—just the framework you need.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Free forever, not freemium</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No paywalls, no premium tiers, no feature gates. Everyone deserves access to good frameworks for life's biggest decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-48 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Team
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Small team obsessed with helping people make better decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Isaiah Kim</h3>
              <p className="text-sm text-muted-foreground">Founder</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Previously built tools at startups and worked on knowledge systems. Started Templata after watching too many people reinvent the wheel for decisions that already have frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-48 border-t border-border/40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Get in touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Questions, feedback, or want to contribute a guide?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href="mailto:templata.app@gmail.com">
                Email us
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/app">Try Templata</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
