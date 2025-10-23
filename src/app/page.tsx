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
			<section className="relative px-6 pt-32 pb-24 md:pt-48 md:pb-32">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-5xl font-semibold tracking-tight md:text-7xl mb-6">
						Wikipedia × Notion
						<br />
						<span className="text-muted-foreground">for life planning</span>
					</h1>

					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
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
						No signup needed · Export to PDF anytime
					</p>
				</div>
			</section>

			{/* Hero Screenshot - Code-based UI */}
			<section className="px-6 pb-32">
				<div className="mx-auto max-w-6xl">
					<HeroWorkspace />
				</div>
			</section>

			{/* How It Works - 2x2 grid */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-5xl">
					<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">
						How it works
					</h2>

					<div className="grid md:grid-cols-2 gap-12">
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
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">
						Browse by category
					</h2>
					<CategorySelection />
				</div>
			</section>

			{/* Why different */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-4xl">
					<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">
						Not just another tool
					</h2>

					<div className="space-y-4">
						<Card className="p-6">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="font-medium mb-3">ChatGPT / AI</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										<li>Generic responses</li>
										<li>Starts from zero</li>
										<li>No structure</li>
									</ul>
								</div>
								<div>
									<h3 className="font-medium mb-3">Templata</h3>
									<ul className="space-y-2 text-sm">
										<li className="flex items-start gap-2">
											<Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
											<span>Expert-curated templates</span>
										</li>
										<li className="flex items-start gap-2">
											<Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
											<span>Structured frameworks</span>
										</li>
										<li className="flex items-start gap-2">
											<Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
											<span>Ready to use</span>
										</li>
									</ul>
								</div>
							</div>
						</Card>

						<Card className="p-6">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="font-medium mb-3">Blank journal</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										<li>Don't know what to write</li>
										<li>No guidance</li>
										<li>Easy to miss things</li>
									</ul>
								</div>
								<div>
									<h3 className="font-medium mb-3">Templata</h3>
									<ul className="space-y-2 text-sm">
										<li className="flex items-start gap-2">
											<Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
											<span>Pre-written questions</span>
										</li>
										<li className="flex items-start gap-2">
											<Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
											<span>Expert frameworks</span>
										</li>
										<li className="flex items-start gap-2">
											<Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
											<span>Comprehensive coverage</span>
										</li>
									</ul>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Featured Guides */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold tracking-tight mb-4 text-center">
						Popular guides
					</h2>
					<p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
						Most used frameworks by the community
					</p>

					<div className="grid md:grid-cols-3 gap-4">
						{[
							{
								title: "Career Transition",
								questions: 12,
								readings: 8,
								slug: "career-transition"
							},
							{
								title: "Setting Boundaries",
								questions: 10,
								readings: 6,
								slug: "setting-boundaries"
							},
							{
								title: "Breakup Recovery",
								questions: 9,
								readings: 7,
								slug: "breakup-recovery"
							},
							{
								title: "Decision Fatigue",
								questions: 11,
								readings: 5,
								slug: "decision-fatigue"
							},
							{
								title: "Finding Purpose",
								questions: 15,
								readings: 6,
								slug: "finding-purpose"
							},
							{
								title: "Building Habits",
								questions: 10,
								readings: 5,
								slug: "healthy-habits"
							},
						].map((guide) => (
							<Link key={guide.slug} href={`/guides/${guide.slug}`}>
								<Card className="p-6 hover:border-foreground/20 transition-colors cursor-pointer h-full">
									<h3 className="font-medium mb-3">{guide.title}</h3>
									<p className="text-sm text-muted-foreground">
										{guide.questions} questions · {guide.readings} readings
									</p>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Use Cases */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">
						Common situations
					</h2>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-4">
							<h3 className="font-medium text-lg">Career decisions</h3>
							<ul className="space-y-3 text-sm text-muted-foreground">
								<li>→ Should I switch careers or stay?</li>
								<li>→ How to negotiate a promotion</li>
								<li>→ Dealing with difficult manager</li>
								<li>→ Starting a side business</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h3 className="font-medium text-lg">Relationship decisions</h3>
							<ul className="space-y-3 text-sm text-muted-foreground">
								<li>→ Should we move in together?</li>
								<li>→ Handling conflict with partner</li>
								<li>→ Setting boundaries with family</li>
								<li>→ Recovering from breakup</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h3 className="font-medium text-lg">Life transitions</h3>
							<ul className="space-y-3 text-sm text-muted-foreground">
								<li>→ Moving to a new city</li>
								<li>→ Deciding on grad school</li>
								<li>→ Buying first home</li>
								<li>→ Having kids vs. not</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h3 className="font-medium text-lg">Personal growth</h3>
							<ul className="space-y-3 text-sm text-muted-foreground">
								<li>→ Building better habits</li>
								<li>→ Managing decision fatigue</li>
								<li>→ Finding your purpose</li>
								<li>→ Dealing with burnout</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-semibold mb-2">1,200+</div>
							<div className="text-sm text-muted-foreground">Life guides</div>
						</div>
						<div>
							<div className="text-4xl font-semibold mb-2">104k+</div>
							<div className="text-sm text-muted-foreground">Questions</div>
						</div>
						<div>
							<div className="text-4xl font-semibold mb-2">25k+</div>
							<div className="text-sm text-muted-foreground">Articles</div>
						</div>
						<div>
							<div className="text-4xl font-semibold mb-2">100%</div>
							<div className="text-sm text-muted-foreground">Free</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="px-6 py-32 border-t border-border/40">
				<div className="mx-auto max-w-3xl">
					<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">
						Common questions
					</h2>

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
								with specific questions and vetted articles. You get structure, not generic advice.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Simple footer CTA */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-2xl text-center">
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
