"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { BrowseGuidesReal } from "@/components/landing/BrowseGuidesReal";
import { SplitScreenReal } from "@/components/landing/SplitScreenReal";
import { ReadingsLibrary } from "@/components/landing/ReadingsLibrary";
import { WorkspaceDashboard } from "@/components/landing/WorkspaceDashboard";
import { BrowseAndFeatured } from "@/components/landing/BrowseAndFeatured";
import WorkspaceLayout from "@/app/app/[workspaceId]/layout";
import OverviewPage from "@/app/app/[workspaceId]/page";

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
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
						<div className="max-w-3xl">
							<h1 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]">
								Wikipedia
							</h1>
							<h2 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9]">
								×
							</h2>
							<h3 className="text-[3.5rem] font-medium tracking-[-0.02em] md:text-[6rem] leading-[0.9] mb-6">
								Notion
							</h3>
							<p className="text-base text-muted-foreground leading-relaxed max-w-lg">
								Comprehensive guides meet flexible workspaces
							</p>
						</div>
						<div>
							<Button size="lg" asChild className="font-medium">
								<Link href="/guides">
									Browse Guides
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Hero Screenshot - Wider layout */}
			<section className="px-6 pb-32">
				<div className="mx-auto max-w-[1400px]">
					<div className="w-full bg-background rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ring-1 ring-black/5 dark:ring-white/10">
						{/* Browser Chrome */}
						<div className="h-7 bg-muted/60 border-b border-border/60 flex items-center px-2 gap-2">
							<div className="flex gap-1.5">
								<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
								<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
								<div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
							</div>
							<div className="flex-1 flex justify-center -ml-12">
								<div className="px-3 py-0.5 bg-background/50 rounded text-[9px] text-muted-foreground border border-border/40 max-w-[200px] truncate">
									templata.org
								</div>
							</div>
						</div>
						{/* App Content */}
						<div className="h-[600px] overflow-hidden">
							<WorkspaceLayout demoMode={true}>
								<OverviewPage />
							</WorkspaceLayout>
						</div>
					</div>
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
