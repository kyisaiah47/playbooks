"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { HeroWorkspace } from "@/components/landing/HeroWorkspace";
import { BrowseGuides } from "@/components/landing/BrowseGuides";
import { SplitScreenOpen } from "@/components/landing/SplitScreenOpen";
import { WorkspaceActive } from "@/components/landing/WorkspaceActive";
import { ExportOverview } from "@/components/landing/ExportOverview";
import { CategorySelection } from "@/components/landing/CategorySelection";
import { PopularGuides } from "@/components/landing/PopularGuides";
import { motion } from "framer-motion";

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

			{/* Hero Section - 3-line layout with CTA on right */}
			<section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-24">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
						<div className="max-w-3xl">
							<motion.h1
								className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0 }}
							>
								Wikipedia
							</motion.h1>
							<motion.h2
								className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								×
							</motion.h2>
							<motion.h3
								className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9] mb-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Notion
							</motion.h3>
							<motion.p
								className="text-base text-muted-foreground leading-relaxed max-w-lg"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.25 }}
							>
								Expert-curated guides for life's biggest decisions
							</motion.p>
						</div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Button size="lg" asChild className="font-medium">
								<Link href="/guides">
									Browse Guides
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</motion.div>
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
							How it works
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-3">
							<h3 className="text-base font-medium">Browse 1,200+ guides</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Expert-curated for major decisions
							</p>
							<BrowseGuides />
						</div>

						<div className="space-y-3">
							<h3 className="text-base font-medium">Work in split-screen</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Questions on left, notes on right
							</p>
							<SplitScreenOpen />
						</div>

						<div className="space-y-3">
							<h3 className="text-base font-medium">Read curated articles</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Expert-selected for each guide
							</p>
							<WorkspaceActive />
						</div>

						<div className="space-y-3">
							<h3 className="text-base font-medium">Track across workspaces</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Calendar, tasks, journal, timeline
							</p>
							<ExportOverview />
						</div>
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-medium tracking-[-0.01em] mb-4 leading-tight">
							Browse by category
						</h2>
					</div>
					<CategorySelection />
				</div>
			</section>

			{/* Featured Guides */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-medium tracking-[-0.01em] mb-4 leading-tight">
							Popular guides
						</h2>
					</div>
					<PopularGuides />
				</div>
			</section>

			{/* Simple footer */}
			<section className="px-6 py-20 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
						Browse all guides
						<ArrowRight className="h-3.5 w-3.5" />
					</Link>
				</div>
			</section>
		</PageLayout>
	);
}
