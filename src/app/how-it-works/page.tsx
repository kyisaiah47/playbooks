"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout";
import { HeroWorkspace } from "@/components/landing/hero-workspace";
import { BrowseGuides } from "@/components/landing/browse-guides";
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
                  Example: "Career Change," "Setting Boundaries," "Moving to a New City"
                </p>
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-muted/30 shadow-lg">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 bg-background/50 rounded text-xs text-muted-foreground">
                      templata.org/guides
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Content */}
                <div className="bg-background">
                  {/* Search bar */}
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-muted/50">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search guides..."
                        className="flex-1 bg-transparent text-sm outline-none"
                        disabled
                      />
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Career & Work</div>
                        <div className="text-xs text-muted-foreground">156 guides</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 cursor-pointer bg-primary/5 border border-primary/20">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Relationships</div>
                        <div className="text-xs text-muted-foreground">203 guides</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Health & Wellness</div>
                        <div className="text-xs text-muted-foreground">142 guides</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Personal Growth</div>
                        <div className="text-xs text-muted-foreground">189 guides</div>
                      </div>
                    </div>
                  </div>
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
              <div className="md:order-1 border border-border rounded-lg overflow-hidden bg-muted/30 shadow-lg">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 bg-background/50 rounded text-xs text-muted-foreground">
                      templata.org/guides/career-change
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Content */}
                <div className="bg-background">
                  <div className="border-b border-border bg-muted/20 px-4 py-3">
                    <div className="font-semibold text-sm">Career Change Guide</div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium text-sm">What skills from my current role give me energy vs. drain me?</div>
                      <div className="border border-border rounded-md p-3 bg-muted/30 min-h-[80px] text-xs text-muted-foreground">
                        I really enjoy problem-solving and working directly with clients...
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">What's my financial runway? (savings ÷ monthly expenses)</div>
                      <div className="border border-border rounded-md p-3 bg-background min-h-[60px] flex items-center">
                        <div className="w-1 h-4 bg-primary animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                      <span>2 of 12 questions answered</span>
                      <span className="text-green-600">✓ Auto-saved</span>
                    </div>
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
              <div className="border border-border rounded-lg overflow-hidden bg-muted/30 shadow-lg">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 bg-background/50 rounded text-xs text-muted-foreground">
                      templata.org/guides/career-change
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Content */}
                <div className="bg-background">
                  <div className="border-b border-border bg-muted/20 px-4 py-3">
                    <div className="font-semibold text-sm">Related Articles</div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-card">
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1.5 line-clamp-1">
                            The Science of Career Change: What Research Says
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            A meta-analysis of 50+ studies on successful career changes and the key factors that predict satisfaction.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Harvard Business Review</span>
                            <span>•</span>
                            <span>8 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-card">
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1.5 line-clamp-1">
                            Financial Planning for Career Changes
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            How to calculate your runway, build an emergency fund, and make smart financial decisions during job changes.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Forbes</span>
                            <span>•</span>
                            <span>5 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-card">
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1.5 line-clamp-1">
                            Transferable Skills: A Practical Framework
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            Identify and articulate your transferable skills to position yourself for new opportunities and industries.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>McKinsey Quarterly</span>
                            <span>•</span>
                            <span>12 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className="md:order-1 border border-border rounded-lg overflow-hidden bg-muted/30 shadow-lg">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 bg-background/50 rounded text-xs text-muted-foreground">
                      templata.org/guides/career-change
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Content */}
                <div className="bg-background">
                  <div className="border-b border-border bg-muted/20 px-4 py-3">
                    <div className="font-semibold text-sm">Career Change Guide</div>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium">Your Progress</div>
                        <div className="text-xs text-muted-foreground">12 of 12 questions</div>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-full transition-all"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">
                        <Download className="h-4 w-4" />
                        <span className="text-sm">Export to PDF</span>
                      </button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-background px-2 text-muted-foreground">or</span>
                        </div>
                      </div>

                      <div className="text-center py-4 px-4 bg-muted/30 rounded-lg border border-border">
                        <div className="text-xs text-muted-foreground mb-2">
                          Your answers are saved locally
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          ✓ Auto-saved in your browser
                        </div>
                      </div>
                    </div>
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
