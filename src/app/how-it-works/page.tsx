"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout";
import { ArrowRight, BookOpen, FileText, Search, Download } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <PageLayout includeHeaderPadding={false}>
      {/* Hero */}
      <section className="relative px-6 pt-40 pb-32 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl mb-8">
            How Templata Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Four simple steps to navigate life's biggest decisions with structure and clarity.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold mb-4">1. Find a guide</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Browse 1,200+ guides organized by category: Career, Relationships, Health, Personal Growth, Finance, and Life Events.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Example: "Career Transition," "Setting Boundaries," "Moving to a New City"
                </p>
              </div>
              <div className="border border-border rounded-lg p-8 bg-muted/20">
                <div className="space-y-3">
                  <div className="h-8 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-8 bg-muted rounded w-full"></div>
                  <div className="h-8 bg-muted rounded w-5/6"></div>
                  <div className="h-8 bg-muted rounded w-full"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold mb-4">2. Answer questions</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Each guide has structured prompts that help you think through all angles of your situation. Work through them at your own pace.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Your answers auto-save in your browser—no account needed.
                </p>
              </div>
              <div className="md:order-1 border border-border rounded-lg p-8 bg-muted/20">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                    <div className="h-20 bg-background border border-border rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-20 bg-background border border-border rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold mb-4">3. Read curated articles</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Access expert articles and resources for deeper context. Each guide includes hand-picked readings to inform your decisions.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  No need to Google—we've done the research for you.
                </p>
              </div>
              <div className="border border-border rounded-lg p-8 bg-muted/20">
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-background border border-border rounded">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-muted rounded w-3/4"></div>
                        <div className="h-2 bg-muted/50 rounded w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold mb-4">4. Export or return anytime</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  When you're done, export your work to PDF. Or just leave it—your answers stay saved in your browser for next time.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Export responses to PDF
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Share with a friend, therapist, or advisor
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Return anytime to revise your thinking
                  </li>
                </ul>
              </div>
              <div className="md:order-1 border border-border rounded-lg p-8 bg-muted/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Download className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-32 mx-auto"></div>
                    <div className="h-2 bg-muted/50 rounded w-24 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">Common Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Do I need to create an account?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                No. You can browse all guides and save your answers locally in your browser without signing up. Create an account only if you want to sync across devices (coming soon).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Is my data private?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Yes. Your answers are saved locally in your browser. We don't see them. We don't collect or store your responses on our servers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Is this therapy or medical advice?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                No. Templata provides structured self-guidance for everyday decisions. If you're struggling with mental health issues, please see a licensed professional.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Why is it free?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                The core library of guides is free—like Wikipedia. Everyone deserves access to good frameworks for life's biggest decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse 1,200+ guides or try the demo
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/guides">
                Browse Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/app">Try Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
