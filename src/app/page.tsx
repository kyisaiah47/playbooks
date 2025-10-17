"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { motion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";
import {
	ArrowRight,
	Layout,
	FileText,
	Globe,
	CheckCircle2,
	BookOpen,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Typewriter } from "@/components/ui/typewriter";

export default function LandingPage() {
	const { isLoggedIn } = useAuth();

	useEffect(() => {
		// Initialize Lenis for smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'The first encyclopedia for living. 1,298 guided workspaces with 26,000+ articles and 15,000+ prompts for life\'s biggest decisions.',
		url: 'https://templata.com',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		featureList: [
			'1,298 Guided Workspaces',
			'15,000+ Action Prompts',
			'26,000+ Expert Articles',
			'Split-Screen Interface',
		],
	};

	return (
		<PageLayout includeHeaderPadding={false}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero Section */}
			<section className="h-screen flex items-center justify-center relative overflow-hidden">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: 'url(/geometric-monuments.png)',
						filter: 'brightness(0.4)',
					}}
				/>

				<div className="container mx-auto max-w-7xl px-4 relative z-10">
					<div className="text-center space-y-8">
						<Announcement className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
							<AnnouncementTag>Beta</AnnouncementTag>
							<AnnouncementTitle>The first encyclopedia for living—now in public beta</AnnouncementTitle>
						</Announcement>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
							Organize life&apos;s
							<br />
							<span className="text-white">
								biggest{" "}
								<Typewriter
									text={[
										"moments",
										"weddings",
										"careers",
										"moves",
										"launches",
									]}
									speed={70}
									waitTime={1500}
									deleteSpeed={40}
									cursorChar={"_"}
								/>
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90">
							1,298 guided workspaces with 26,000+ articles and 15,000+ prompts.
							<br />
							Never start with a blank page.
						</p>

						<div className="flex items-center justify-center pt-4">
							<Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-white/90" asChild>
								<Link href="/app">
									Browse Workspaces
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* What It Is - Split-Screen Workspace */}
			<motion.section
				className="py-24 md:py-32"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-5xl font-bold">
							Wikipedia meets Notion for life planning
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Our split-screen interface combines guided prompts, a structured workspace, and an encyclopedia of knowledge.
						</p>
					</div>

					{/* Split-Screen Visual */}
					<Card className="p-8 max-w-6xl mx-auto">
						<div className="grid md:grid-cols-3 gap-6">
							{/* Prompts Column */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 font-semibold mb-4">
									<FileText className="h-5 w-5 text-primary" />
									<span>Guided Prompts</span>
								</div>
								<div className="space-y-2">
									<div className="p-3 bg-muted rounded text-sm">What's your venue budget?</div>
									<div className="p-3 bg-muted rounded text-sm">Expected guest count?</div>
									<div className="p-3 bg-primary/10 rounded text-primary border border-primary/20 text-sm">→ Who are must-have vendors?</div>
								</div>
							</div>

							{/* Workspace Column */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 font-semibold mb-4">
									<BookOpen className="h-5 w-5 text-primary" />
									<span>Your Workspace</span>
								</div>
								<div className="p-4 bg-background rounded border min-h-[160px] text-sm text-muted-foreground">
									<div className="space-y-2">
										<p>Photographer - top priority</p>
										<p>Videographer - nice to have</p>
										<p>Florist - DIY option possible</p>
									</div>
								</div>
							</div>

							{/* Articles Column */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 font-semibold mb-4">
									<Globe className="h-5 w-5 text-primary" />
									<span>Knowledge Base</span>
								</div>
								<div className="space-y-2">
									<div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
										<div className="font-medium mb-1">Vendor Cost Breakdown</div>
										<div className="text-xs text-muted-foreground">Average costs by category...</div>
									</div>
									<div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
										<div className="font-medium mb-1">Contract Checklist</div>
										<div className="text-xs text-muted-foreground">What to look for...</div>
									</div>
								</div>
							</div>
						</div>

						<div className="border-t mt-8 pt-6 space-y-3">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
								<span>15,000+ categorized prompts ensure you consider everything</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
								<span>26,000+ articles like Wikipedia for life decisions</span>
							</div>
						</div>
					</Card>
				</div>
			</motion.section>

			{/* Numbers */}
			<motion.section
				className="py-24 md:py-32 bg-muted/30"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-5xl px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Built for every life moment</h2>
						<p className="text-lg text-muted-foreground">Comprehensive, structured, and completely free</p>
					</div>

					<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">1,298</div>
							<p className="text-muted-foreground">Guided Workspaces</p>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">15k+</div>
							<p className="text-muted-foreground">Action Prompts</p>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">26k+</div>
							<p className="text-muted-foreground">Expert Articles</p>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">Free</div>
							<p className="text-muted-foreground">No Paywalls</p>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Final CTA */}
			<motion.section
				className="py-24 md:py-32"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-3xl px-4 text-center space-y-8">
					<h2 className="text-3xl md:text-5xl font-bold">
						Ready to organize your next big moment?
					</h2>
					<p className="text-xl text-muted-foreground">
						Start with a guided workspace. Everything is free—no credit card required.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" className="h-12 px-8 text-base" asChild>
							<Link href="/app">
								Browse All Workspaces
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
						{!isLoggedIn && (
							<Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
								<Link href="/login">Get Started Free</Link>
							</Button>
						)}
					</div>
				</div>
			</motion.section>

		</PageLayout>
	);
}
