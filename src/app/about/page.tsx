"use client"

import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/layout"
import { StatsVisualization } from "@/components/about/StatsVisualization"
import { ArrowRight } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

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
              <h3 className="text-2xl font-semibold">The problem</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Career changes, wedding planning, health decisions, relationship changes—these aren't problems that need invention. Millions have walked these paths. But the knowledge is scattered across Reddit threads, blog posts, and closed communities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our solution</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
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
              <h3 className="text-2xl font-semibold">Expert-curated, not AI-generated</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every framework is built by someone who's navigated that exact situation. We believe in human expertise, not algorithm-generated advice.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Structured, not prescriptive</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We provide frameworks and questions, not answers. Your decisions are yours—we just help you think through them systematically.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Comprehensive, not overwhelming</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Coverage across 1,200+ topics, but each guide is focused and actionable. No endless scrolling—just the framework you need.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Free forever, not freemium</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
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
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="cursor-pointer inline-block">
                    <Image
                      src="/team/isaiah-kim.jpg"
                      alt="Isaiah Kim"
                      width={80}
                      height={80}
                      className="rounded-lg grayscale mb-4"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-card/95 backdrop-blur p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/team/isaiah-kim.jpg"
                        alt="Isaiah Kim"
                        width={36}
                        height={36}
                        className="rounded-full grayscale"
                      />
                      <div>
                        <h4 className="text-sm font-semibold">Isaiah Kim</h4>
                        <p className="text-xs text-muted-foreground">Founder</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href="https://github.com/isaiahkimdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href="https://linkedin.com/in/isaiah-kim" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                      </Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <h3 className="text-2xl font-semibold">Isaiah Kim</h3>
              <p className="text-base text-muted-foreground">Founder</p>
              <p className="text-base text-muted-foreground leading-relaxed">
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
