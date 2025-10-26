"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { HeroWorkspace } from "@/components/landing/HeroWorkspace";
import { BrowseGuidesReal } from "@/components/landing/BrowseGuidesReal";
import { SplitScreenReal } from "@/components/landing/SplitScreenReal";
import { ReadingsLibrary } from "@/components/landing/ReadingsLibrary";
import { WorkspaceDashboard } from "@/components/landing/WorkspaceDashboard";
import { BrowseAndFeatured } from "@/components/landing/BrowseAndFeatured";
import { FeatureBreakdown } from "@/components/landing/FeatureBreakdown";

export default function LandingPage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'Wikipedia × Notion for life planning. 1,200+ guides for life\'s biggest decisions.',
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

			{/* Hero Section - 3-line layout with CTA on right */}
			<section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-24">
				<div className="mx-auto max-w-7xl">
					<div className="max-w-3xl mx-auto">
						{/* Title - flexbox layout */}
						<div className="flex items-center justify-between mb-8">
							<div>
								<h1 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]">
									Wikipedia
								</h1>
							</div>
							<div className="px-4">
								<h2 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]">
									×
								</h2>
							</div>
							<div>
								<h3 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]">
									Notion
								</h3>
							</div>
						</div>

						{/* Features - below left and right */}
						<div className="flex justify-between">
							<div className="text-sm space-y-2">
								<div className="text-muted-foreground">Guides</div>
								<div className="text-muted-foreground">Readings</div>
								<div className="text-muted-foreground">Questions</div>
							</div>
							<div className="text-sm space-y-2 text-right">
								<div className="text-muted-foreground">Todos</div>
								<div className="text-muted-foreground">Calendar</div>
								<div className="text-muted-foreground">Journal</div>
								<div className="text-muted-foreground">Kanban</div>
								<div className="text-muted-foreground">Notes</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Hero Screenshot - Wider layout */}
			<section className="px-6 pb-32">
				<div className="mx-auto max-w-[1400px]">
					<HeroWorkspace />
				</div>
			</section>

			{/* How It Works - 2x2 grid */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-5xl">
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-medium tracking-[-0.01em] mb-4 leading-tight">
							How It Works
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-3">
							<h3 className="text-base font-medium">Browse 1,200+ guides</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Curated for major life decisions
							</p>
							<BrowseGuidesReal />
						</div>

						<div className="space-y-3">
							<h3 className="text-base font-medium">Work in split-screen</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Questions on left, notes on right
							</p>
							<SplitScreenReal />
						</div>

						<div className="space-y-3">
							<h3 className="text-base font-medium">Curated readings</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Selected readings for each guide
							</p>
							<ReadingsLibrary />
						</div>

						<div className="space-y-3">
							<h3 className="text-base font-medium">Track progress</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Organize multiple projects in one workspace
							</p>
							<WorkspaceDashboard />
						</div>
					</div>
				</div>
			</section>

			{/* Browse and Featured */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<BrowseAndFeatured />
				</div>
			</section>
		</PageLayout>
	);
}
