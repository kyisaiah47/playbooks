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
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingPage() {
	const [hoveredSide, setHoveredSide] = useState<'wikipedia' | 'notion' | null>(null);
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
			<section className="relative px-6 pt-40 pb-12 md:pt-52 md:pb-16">
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto w-fit">
						{/* Small intro text */}
						<motion.p
							className="text-2xl md:text-3xl text-muted-foreground mb-8"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							Templata is
						</motion.p>

						{/* Wikipedia and Notion sections with features */}
						<div className="flex items-start justify-between gap-8">
							{/* Wikipedia side */}
							<div
								onMouseEnter={() => setHoveredSide('wikipedia')}
								onMouseLeave={() => setHoveredSide(null)}
								className="cursor-pointer flex flex-col items-start"
							>
								<motion.div
									initial={{ opacity: 0, x: -30 }}
									animate={{
										opacity: hoveredSide === 'notion' ? 0.15 : 1,
										x: 0
									}}
									transition={{ duration: 0.2, ease: "easeOut" }}
									className="mb-12"
								>
									<h1 className="text-[5rem] font-medium tracking-[-0.02em] md:text-[8rem] leading-[0.9]">
										Wikipedia
									</h1>
								</motion.div>
								<motion.div
									className="text-base md:text-lg space-y-3"
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: hoveredSide === 'notion' ? 0.15 : 1,
										y: 0
									}}
									transition={{ opacity: { duration: 0.2 }, y: { duration: 0.6, delay: 0.4 }, ease: "easeOut" }}
								>
								<motion.div className="flex items-center gap-4 cursor-pointer">
									<span className="text-muted-foreground">
										Guides
									</span>
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: hoveredSide === 'wikipedia' ? 1 : 0, x: hoveredSide === 'wikipedia' ? 0 : -10 }}
										transition={{ duration: 0.15 }}
									>
										Structured frameworks for any situation
									</motion.span>
								</motion.div>
								<motion.div className="flex items-center gap-4 cursor-pointer">
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Readings
									</motion.span>
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: hoveredSide === 'wikipedia' ? 1 : 0, x: hoveredSide === 'wikipedia' ? 0 : -10 }}
										transition={{ duration: 0.15, delay: 0.03 }}
									>
										AI-curated articles and resources
									</motion.span>
								</motion.div>
								<motion.div className="flex items-center gap-4 cursor-pointer">
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Questions
									</motion.span>
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: hoveredSide === 'wikipedia' ? 1 : 0, x: hoveredSide === 'wikipedia' ? 0 : -10 }}
										transition={{ duration: 0.15, delay: 0.06 }}
									>
										Thought-provoking prompts to guide you
									</motion.span>
								</motion.div>
							</motion.div>
							</div>

							{/* × in the middle */}
							<motion.div
								className="px-8 pt-0"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							>
								<h2 className="text-[5rem] font-medium tracking-[-0.02em] md:text-[8rem] leading-[0.9]">
									×
								</h2>
							</motion.div>

							{/* Notion side */}
							<div
								onMouseEnter={() => setHoveredSide('notion')}
								onMouseLeave={() => setHoveredSide(null)}
								className="cursor-pointer flex flex-col items-end"
							>
								<motion.div
									initial={{ opacity: 0, x: 30 }}
									animate={{
										opacity: hoveredSide === 'wikipedia' ? 0.15 : 1,
										x: 0
									}}
									transition={{ duration: 0.2, ease: "easeOut" }}
									className="mb-12"
								>
									<h3 className="text-[5rem] font-medium tracking-[-0.02em] md:text-[8rem] leading-[0.9]">
										Notion
									</h3>
								</motion.div>
								<motion.div
									className="text-base md:text-lg space-y-3 text-right"
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: hoveredSide === 'wikipedia' ? 0.15 : 1,
										y: 0
									}}
									transition={{ opacity: { duration: 0.2 }, y: { duration: 0.6, delay: 0.4 }, ease: "easeOut" }}
								>
								<motion.div className="flex items-center justify-end gap-4 cursor-pointer">
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: hoveredSide === 'notion' ? 1 : 0, x: hoveredSide === 'notion' ? 0 : 10 }}
										transition={{ duration: 0.15 }}
									>
										Task lists that sync across guides
									</motion.span>
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Todos
									</motion.span>
								</motion.div>
								<motion.div className="flex items-center justify-end gap-4 cursor-pointer">
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: hoveredSide === 'notion' ? 1 : 0, x: hoveredSide === 'notion' ? 0 : 10 }}
										transition={{ duration: 0.15, delay: 0.03 }}
									>
										Important dates and deadlines
									</motion.span>
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Calendar
									</motion.span>
								</motion.div>
								<motion.div className="flex items-center justify-end gap-4 cursor-pointer">
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: hoveredSide === 'notion' ? 1 : 0, x: hoveredSide === 'notion' ? 0 : 10 }}
										transition={{ duration: 0.15, delay: 0.06 }}
									>
										Daily reflections and progress notes
									</motion.span>
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Journal
									</motion.span>
								</motion.div>
								<motion.div className="flex items-center justify-end gap-4 cursor-pointer">
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: hoveredSide === 'notion' ? 1 : 0, x: hoveredSide === 'notion' ? 0 : 10 }}
										transition={{ duration: 0.15, delay: 0.09 }}
									>
										Visual workflow boards
									</motion.span>
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Kanban
									</motion.span>
								</motion.div>
								<motion.div className="flex items-center justify-end gap-4 cursor-pointer">
									<motion.span
										className="text-sm text-muted-foreground whitespace-nowrap"
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: hoveredSide === 'notion' ? 1 : 0, x: hoveredSide === 'notion' ? 0 : 10 }}
										transition={{ duration: 0.15, delay: 0.12 }}
									>
										Rich text editor for capturing thoughts
									</motion.span>
									<motion.span
										className="text-muted-foreground"
										whileHover={{ color: "hsl(var(--foreground))" }}
										transition={{ duration: 0.2 }}
									>
										Notes
									</motion.span>
								</motion.div>
							</motion.div>
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
