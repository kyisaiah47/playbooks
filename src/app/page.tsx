"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowRight,
	FileText,
	BookOpen,
	Check,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { HeroWorkspace } from "@/components/landing/HeroWorkspace";
import { BrowseGuides } from "@/components/landing/BrowseGuides";
import { SplitScreenOpen } from "@/components/landing/SplitScreenOpen";
import { WorkspaceActive } from "@/components/landing/WorkspaceActive";
import { ExportOverview } from "@/components/landing/ExportOverview";
import { CategorySelection } from "@/components/landing/CategorySelection";
import { StructuredGuide } from "@/components/landing/StructuredGuide";
import { PopularGuides } from "@/components/landing/PopularGuides";
import { CommunityHub } from "@/components/landing/CommunityHub";
import { ExpertProfile } from "@/components/landing/ExpertProfile";
import { SubmitGuide } from "@/components/landing/SubmitGuide";
import { CommunityActivity } from "@/components/landing/CommunityActivity";

export default function LandingPage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'Wikipedia × Notion for life planning. Expert-curated guides for life\'s biggest decisions.',
		url: 'https://templata.org',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		featureList: [
			'1,200+ Life Planning Guides',
			'Guided Questions',
			'Curated Reading',
			'Split-Screen Workspace',
		],
	};

	return (
		<PageLayout includeHeaderPadding={false}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero Section - Linear style: centered, lots of space */}
			<section className="relative px-6 pt-40 pb-32 md:pt-56 md:pb-40">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-5xl font-semibold tracking-tight md:text-7xl mb-8">
						Wikipedia × Notion
						<br />
						<span>for life planning</span>
					</h1>

					<p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
						Expert-curated guides for life's biggest decisions.
						Get the framework — not a blank page.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
						<Button size="lg" asChild>
							<Link href="/guides">
								Browse Guides
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/app">Try Demo</Link>
						</Button>
					</div>

					<p className="text-sm text-muted-foreground">
						No signup needed · Export to PDF anytime · 100% free
					</p>
				</div>
			</section>

			{/* Hero Screenshot - Code-based UI */}
			<section className="px-6 pb-40">
				<div className="mx-auto max-w-6xl">
					<HeroWorkspace />
				</div>
			</section>

			{/* How It Works - 2x2 grid */}
			<section className="px-6 py-48 border-t border-border/40">
				<div className="mx-auto max-w-5xl">
					<div className="mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							How it works
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							No AI. No blank pages. Just expert-designed frameworks ready to use.
							Pick a guide, answer thoughtful questions, and export when you're done.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-16">
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">1. Pick a situation</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								Browse 1,200+ guides for career, relationships, health, and life events.
							</p>
							<BrowseGuides />
						</div>

						<div className="space-y-4">
							<h3 className="text-lg font-semibold">2. Open the guide</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								See guided questions and curated reading in split-screen.
							</p>
							<SplitScreenOpen />
						</div>

						<div className="space-y-4">
							<h3 className="text-lg font-semibold">3. Work through it</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								Answer questions and review decisions. Everything saves locally.
							</p>
							<WorkspaceActive />
						</div>

						<div className="space-y-4">
							<h3 className="text-lg font-semibold">4. Export or return</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								Download as PDF or come back anytime — your progress is saved.
							</p>
							<ExportOverview />
						</div>
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="px-6 py-48 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Browse by category
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							From life events to relationships, career moves to personal growth — find expert frameworks
							for the decisions that shape your life.
						</p>
					</div>
					<CategorySelection />
				</div>
			</section>

			{/* Why different */}
			<section className="px-6 py-48 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Not just another tool
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							AI gives you generic advice. Blank journals leave you stuck. Templata gives you
							expert frameworks with the exact questions you need to answer.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Screenshot */}
						<div>
							<StructuredGuide />
						</div>

						{/* Comparisons */}
						<div className="space-y-8">
							<div>
								<h3 className="text-lg font-semibold mb-4">vs. ChatGPT / AI</h3>
								<div className="space-y-3 text-sm">
									<div className="flex items-start gap-3">
										<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
										<div>
											<div className="font-medium">Expert-curated frameworks</div>
											<div className="text-muted-foreground">Pre-structured questions and resources, not generic AI responses</div>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
										<div>
											<div className="font-medium">Ready to use</div>
											<div className="text-muted-foreground">Start with a complete framework instead of building from scratch</div>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
										<div>
											<div className="font-medium">Vetted content</div>
											<div className="text-muted-foreground">Curated readings and resources, no hallucinations</div>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-4">vs. Blank journal</h3>
								<div className="space-y-3 text-sm">
									<div className="flex items-start gap-3">
										<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
										<div>
											<div className="font-medium">Pre-written questions</div>
											<div className="text-muted-foreground">Know exactly what to think through, no blank page anxiety</div>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
										<div>
											<div className="font-medium">Comprehensive coverage</div>
											<div className="text-muted-foreground">Expert frameworks ensure you don't miss important considerations</div>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
										<div>
											<div className="font-medium">Guided progress</div>
											<div className="text-muted-foreground">Track completion and see your progress as you work</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Guides */}
			<section className="px-6 py-48 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Popular guides
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							See what others are working through. Wedding planning, career changes, relationship decisions,
							and more — each with expert questions and curated resources.
						</p>
					</div>
					<PopularGuides />
				</div>
			</section>

			{/* Community */}
			<section className="px-6 py-48 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Built by the community
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							Like Wikipedia, our guides are created and refined by experts and users who've been there.
							Submit your own, request what you need, and help others navigate life's big decisions.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Screenshot */}
						<div>
							<CommunityHub />
						</div>

						{/* Benefits */}
						<div className="space-y-6">
							<div className="space-y-3 text-sm">
								<div className="flex items-start gap-3">
									<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
									<div>
										<div className="font-medium">Community-curated content</div>
										<div className="text-muted-foreground">Like Wikipedia, guides are created and refined by experts and users</div>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
									<div>
										<div className="font-medium">Request what you need</div>
										<div className="text-muted-foreground">Can't find a guide? Request it and the community will create it</div>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
									<div>
										<div className="font-medium">Verified experts</div>
										<div className="text-muted-foreground">Guides are reviewed by domain experts to ensure quality and accuracy</div>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
									<div>
										<div className="font-medium">Submit your own guides</div>
										<div className="text-muted-foreground">Share your expertise and help others navigate similar situations</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="px-6 py-40 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-16">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							By the numbers
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							A comprehensive library of frameworks, questions, and resources — all free, forever.
						</p>
					</div>
					<div className="grid md:grid-cols-4 gap-12 text-center">
						<div>
							<div className="text-5xl font-semibold mb-3">1,200+</div>
							<div className="text-sm text-muted-foreground">Life guides</div>
						</div>
						<div>
							<div className="text-5xl font-semibold mb-3">104k+</div>
							<div className="text-sm text-muted-foreground">Expert questions</div>
						</div>
						<div>
							<div className="text-5xl font-semibold mb-3">25k+</div>
							<div className="text-sm text-muted-foreground">Curated readings</div>
						</div>
						<div>
							<div className="text-5xl font-semibold mb-3">100%</div>
							<div className="text-sm text-muted-foreground">Free forever</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="px-6 py-48 border-t border-border/40">
				<div className="mx-auto max-w-3xl">
					<div className="mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Common questions
						</h2>
						<p className="text-base text-muted-foreground max-w-2xl">
							Everything you need to know about how Templata works and what makes it different.
						</p>
					</div>

					<div className="space-y-8">
						<div>
							<h3 className="font-medium mb-2">Is this therapy?</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								No. Templata provides structured self-guidance for everyday decisions.
								If you're struggling with mental health, please see a licensed professional.
							</p>
						</div>

						<div>
							<h3 className="font-medium mb-2">Why is it free?</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								The core library is free — like Wikipedia. We may add optional premium guides later,
								but the everyday guides stay free forever.
							</p>
						</div>

						<div>
							<h3 className="font-medium mb-2">How does privacy work?</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Your answers save locally in your browser. We don't see them. Optional cloud sync
								coming later, but local-first will always be available.
							</p>
						</div>

						<div>
							<h3 className="font-medium mb-2">Can I request a guide?</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Yes. Use the "Request a Guide" button on any page. We review requests and may
								create guides based on demand.
							</p>
						</div>

						<div>
							<h3 className="font-medium mb-2">How is this different from ChatGPT?</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								ChatGPT gives generic responses. Templata provides pre-curated expert frameworks
								with specific questions and vetted readings. You get structure, not generic advice.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Simple footer CTA */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
						Ready to get started?
					</h2>
					<p className="text-base text-muted-foreground mb-8">
						Browse 1,200+ expert guides. No signup. No credit card. Just frameworks that work.
					</p>
					<Button size="lg" asChild>
						<Link href="/guides">
							Browse all guides
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</section>
		</PageLayout>
	);
}
