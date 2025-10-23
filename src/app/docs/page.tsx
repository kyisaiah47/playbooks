"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout";
import { ArrowRight, FileText, BookOpen, Download, RotateCcw } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 py-16 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">How Templata Works</h1>
          <p className="text-xl text-muted-foreground">
            Four simple steps to make better life decisions
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {/* Step 1 */}
          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold">Pick a life situation</h2>
                <p className="text-muted-foreground">
                  Browse 1,200+ guides organized by category: Career, Relationships, Health,
                  Personal Growth, Finance, and Life Events.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Example: "Career Transition," "Setting Boundaries," "Moving to a New City"
                </p>
              </div>
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold">Open the guide</h2>
                <p className="text-muted-foreground">
                  Each guide has two main sections side-by-side:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Guided Questions:</strong> Structured prompts to help you think through
                    all angles
                  </li>
                  <li>
                    <strong>Curated Reading:</strong> Expert articles and resources for deeper
                    context
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold">Work through questions & decisions</h2>
                <p className="text-muted-foreground">
                  Answer the guided questions in the built-in workspace. Your answers auto-save in
                  your browser — no account needed. Read the curated resources for deeper
                  understanding.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">💡 Pro tip</p>
                  <p className="text-sm text-muted-foreground">
                    You don't need to answer everything at once. Come back anytime — your progress
                    is saved locally.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 4 */}
          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold">Export or return anytime</h2>
                <p className="text-muted-foreground">
                  When you're done, export your work to PDF. Or just leave it — your answers stay
                  saved in your browser for next time.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Export responses to PDF</li>
                  <li>Share with a friend, therapist, or advisor</li>
                  <li>Return anytime to revise your thinking</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8 pt-8 border-t">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Why is it free?</h3>
              <p className="text-sm text-muted-foreground">
                The core library of guides is free — like Wikipedia. We'll add optional premium,
                expert-authored guides later. The everyday guides stay open and free forever.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Is this therapy?</h3>
              <p className="text-sm text-muted-foreground">
                No. Templata provides structured self-guidance for everyday decisions. If you're
                struggling with mental health issues, please see a licensed professional.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">How does privacy work?</h3>
              <p className="text-sm text-muted-foreground">
                Your answers are saved locally in your browser. We don't see them. In the future,
                we'll offer optional cloud sync, but local-first will always be available.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I request a guide?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! Use the "Request a Guide" button on any page. We review requests and may
                create guides based on popular demand.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-8">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
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
      </div>
    </PageLayout>
  );
}
