"use client";

import { useState, useEffect } from "react";
import type { Metadata } from 'next';
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Heart,
	Briefcase,
	ArrowRight,
	Zap,
	CheckCircle2,
	Sparkles,
	Target,
	Timer,
	BookOpen,
	Calendar,
	Layout,
	Users,
	Crown,
	Dumbbell,
	FileText,
	Brain,
	Lightbulb,
	Shield,
	TrendingUp,
	BarChart3,
	Flame,
	Globe,
	BookMarked,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Typewriter } from "@/components/ui/typewriter";

export default function LandingPage() {
	const { isLoggedIn } = useAuth();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'The first encyclopedia for living. 1,298 guided workspaces with 26,000+ articles and 15,000+ prompts for life\'s biggest decisions.',
		url: 'https://templata.com',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		creator: {
			'@type': 'Organization',
			name: 'Templata',
			url: 'https://templata.com'
		},
		featureList: [
			'1,298 Guided Workspaces',
			'15,000+ Action Prompts',
			'26,000+ Expert Articles',
			'Split-Screen Interface',
			'Daily Reflection Journaling',
			'Life OS Dashboard'
		],
		screenshot: 'https://templata.com/og-image.jpg'
	};

	const faqs = [
		{
			question: "What exactly is Templata?",
			answer: "Templata is the first encyclopedia for living. We provide 1,298 guided workspaces for life's biggest decisions—from weddings to career changes. Each workspace includes a split-screen interface with categorized prompts to guide your thinking (left), a writing space to organize your plans (middle), and 26,000+ expert articles for deeper knowledge (right). Think Wikipedia meets Notion for life planning."
		},
		{
			question: "How does the split-screen workspace work?",
			answer: "Our signature interface has three columns: Left shows categorized action prompts (like 'What's your venue budget?' or 'Who are your must-have vendors?'). Middle is your writing workspace where you answer prompts and build your plans—it auto-saves as you type. Right displays relevant articles that expand to full-screen when you need deeper knowledge. Work left to right: prompts guide thinking, workspace captures decisions, articles provide expertise."
		},
		{
			question: "What is the Axiom Engine?",
			answer: "The Axiom Engine is our specialized AI system that generated all 15,000+ prompts and 26,000+ articles. Unlike generic AI, it's purpose-built for life guidance—creating thoughtful, comprehensive frameworks for decision-making. Every piece of content went through multiple iterations and human oversight to ensure quality and relevance."
		},
		{
			question: "How much does Templata cost?",
			answer: "Templata is completely free. All 1,298 workspaces, 15,000+ prompts, and 26,000+ articles are available at no cost. No paywalls, no premium tiers, no hidden fees. We believe structured thinking and expert guidance should be accessible to everyone."
		},
		{
			question: "Do I need an account to use workspaces?",
			answer: "You can browse templates without an account. To save your work and access it later, you'll need a free account. We support email signup and Google authentication. Your data is encrypted and secure."
		},
		{
			question: "Can I customize the workspace?",
			answer: "Yes! Each workspace is fully customizable. Browse different prompt categories, focus on areas relevant to your situation, and access articles that match your needs. The structure provides a foundation that you adapt to your specific circumstances."
		},
		{
			question: "What are the three stages (Workspace, Reflection, Life OS)?",
			answer: "Stage 1: Workspace is where you work through templates with guided prompts and articles. Stage 2: Reflection is a daily journaling space with rotating prompts for processing your journey. Stage 3: Life OS is your dashboard showing all progress, activity heatmaps, and insights over time. It's a complete system from structured planning to life mastery."
		},
		{
			question: "Is my data secure?",
			answer: "Yes. Your information is encrypted, stored securely, and never shared with third parties. You maintain full control over your data and can export or delete it anytime."
		}
	];

	return (
		<PageLayout includeHeaderPadding={false}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero Section */}
			<section className="h-screen flex items-center justify-center relative overflow-hidden">
				{/* Geometric Background Image */}
				<div
					className="absolute inset-0 w-full h-full bg-background"
					style={{
						backgroundImage: 'url(/geometric-monuments.png)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				{/* Theme-aware color overlay */}
				<div className="absolute inset-0 bg-primary/80 mix-blend-multiply dark:mix-blend-screen dark:bg-primary/20" />
				{/* Dark overlay for text readability */}
				<div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

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
										"moves",
										"careers",
										"launches",
										"events",
										"projects",
										"decisions",
										"changes",
										"milestones",
										"transitions",
										"goals",
										"adventures",
										"journeys",
										"challenges",
										"achievements",
										"dreams",
										"plans",
										"ventures",
										"celebrations"
									]}
									speed={70}
									className="text-white"
									waitTime={1500}
									deleteSpeed={40}
									cursorChar={"_"}
								/>
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-xl text-white">
							1,298 guided workspaces with 26,000+ articles and 15,000+ prompts.
							Never start with a blank page. Never miss an important question.
						</p>
					</div>
				</div>
			</section>

			{/* The Problem */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
						<Badge variant="outline" className="px-4 py-2">
							<Target className="mr-2 h-4 w-4" />
							The Problem
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Why life&apos;s big decisions
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								feel overwhelming
							</span>
						</h2>

						<p className="text-xl text-muted-foreground">
							Planning a wedding, buying a home, changing careers—you&apos;re faced with scattered information,
							no structure, and the constant worry you&apos;re missing something crucial.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="p-6 border-dashed">
							<FileText className="h-8 w-8 text-muted-foreground mb-4" />
							<h3 className="font-semibold mb-2">Scattered Information</h3>
							<p className="text-sm text-muted-foreground">
								50+ browser tabs, bookmarks you&apos;ll never read, advice from everyone
							</p>
						</Card>

						<Card className="p-6 border-dashed">
							<Layout className="h-8 w-8 text-muted-foreground mb-4" />
							<h3 className="font-semibold mb-2">No Structure</h3>
							<p className="text-sm text-muted-foreground">
								Blank pages that don&apos;t tell you where to start or what to ask
							</p>
						</Card>

						<Card className="p-6 border-dashed">
							<Brain className="h-8 w-8 text-muted-foreground mb-4" />
							<h3 className="font-semibold mb-2">Analysis Paralysis</h3>
							<p className="text-sm text-muted-foreground">
								Too many options, not enough clarity on what matters
							</p>
						</Card>

						<Card className="p-6 border-dashed">
							<Sparkles className="h-8 w-8 text-muted-foreground mb-4" />
							<h3 className="font-semibold mb-2">Missing Questions</h3>
							<p className="text-sm text-muted-foreground">
								The crucial things you should be asking yourself—but aren&apos;t
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* The Solution - Split-Screen Workspace */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
						<Badge variant="outline" className="px-4 py-2">
							<Zap className="mr-2 h-4 w-4" />
							The Solution
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Wikipedia meets Notion
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								for life planning
							</span>
						</h2>

						<p className="text-xl text-muted-foreground">
							Our signature split-screen interface combines guided prompts,
							a structured workspace, and an encyclopedia of knowledge—all in one view.
						</p>
					</div>

					{/* Split-Screen Mockup */}
					<Card className="p-8 space-y-6 max-w-6xl mx-auto">
						<div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
							<Layout className="h-4 w-4" />
							<span>Live Workspace Preview</span>
						</div>

						<div className="grid grid-cols-3 gap-6 text-sm">
							{/* Left: Prompts */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 font-medium text-foreground mb-3">
									<FileText className="h-4 w-4" />
									<span>Guided Prompts</span>
								</div>
								<div className="space-y-2">
									<div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Budget</div>
									<div className="p-3 bg-muted rounded text-muted-foreground text-sm">What&apos;s your venue budget?</div>
									<div className="p-3 bg-muted rounded text-muted-foreground text-sm">Expected guest count?</div>
									<div className="p-3 bg-primary/10 rounded text-primary border border-primary/20 text-sm">→ Who are must-have vendors?</div>
								</div>
							</div>

							{/* Middle: Workspace */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 font-medium text-foreground mb-3">
									<BookOpen className="h-4 w-4" />
									<span>Your Workspace</span>
								</div>
								<div className="p-4 bg-background rounded border min-h-[200px] text-muted-foreground text-sm">
									<div className="space-y-2">
										<p>Photographer - top priority</p>
										<p>Videographer - nice to have</p>
										<p>Florist - DIY option possible</p>
										<p className="text-xs text-muted-foreground mt-4">Auto-saves as you type...</p>
									</div>
								</div>
							</div>

							{/* Right: Articles */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 font-medium text-foreground mb-3">
									<Globe className="h-4 w-4" />
									<span>Knowledge Base</span>
								</div>
								<div className="space-y-2">
									<div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
										<div className="font-medium text-foreground mb-1">Vendor Cost Breakdown</div>
										<div className="text-xs text-muted-foreground">Average costs by category...</div>
									</div>
									<div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
										<div className="font-medium text-foreground mb-1">Negotiating with Vendors</div>
										<div className="text-xs text-muted-foreground">Expert tips for saving...</div>
									</div>
									<div className="p-3 bg-primary/5 rounded cursor-pointer hover:bg-primary/10 transition-colors text-sm">
										<div className="font-medium text-foreground mb-1">Vendor Contract Checklist</div>
										<div className="text-xs text-muted-foreground">What to look for...</div>
									</div>
								</div>
							</div>
						</div>

						<div className="border-t pt-6 space-y-3">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<ArrowRight className="h-4 w-4 text-primary" />
								<span><strong>Work left to right:</strong> Prompts guide your thinking → Workspace captures your decisions → Articles provide expertise</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<CheckCircle2 className="h-4 w-4 text-primary" />
								<span><strong>Never miss a question.</strong> 15,000+ categorized prompts ensure you consider everything</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Globe className="h-4 w-4 text-primary" />
								<span><strong>Expert knowledge at your fingertips.</strong> 26,000+ articles like Wikipedia for life</span>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* 1,298 Guided Workspaces */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-start">
						<div className="space-y-8">
							<div className="space-y-4">
								<Badge variant="outline" className="w-fit">
									<Sparkles className="mr-2 h-4 w-4" />
									Everything you need
								</Badge>
								<h2 className="text-4xl md:text-5xl font-bold leading-tight">
									1,298 guided workspaces
									<br />
									for every life moment
								</h2>
								<p className="text-xl text-muted-foreground">
									Each workspace is a structured environment for thinking through specific life decisions—
									complete with categorized prompts, writing space, and expert articles.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
										<FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
									</div>
									<span className="text-lg">
										15,000+ structured prompts to guide your thinking
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
										<Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
									</div>
									<span className="text-lg">
										26,000+ expert articles like Wikipedia for life
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
										<Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
									</div>
									<span className="text-lg">
										Completely free—all workspaces, no paywalls
									</span>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<ul className="grid grid-cols-2 gap-4">
								<li className="min-h-[14rem] list-none">
									<div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
										<GlowingEffect
											spread={40}
											glow={true}
											disabled={false}
											proximity={64}
											inactiveZone={0.01}
											borderWidth={3}
										/>
										<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
											<div className="relative flex flex-1 flex-col justify-between gap-3">
												<div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
													<Heart className="h-4 w-4" />
												</div>
												<div className="space-y-3">
													<h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
														Life Planning
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														250+ workspaces for weddings, relationships, personal growth, and life transitions.
													</h2>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li className="min-h-[14rem] list-none">
									<div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
										<GlowingEffect
											spread={40}
											glow={true}
											disabled={false}
											proximity={64}
											inactiveZone={0.01}
											borderWidth={3}
										/>
										<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
											<div className="relative flex flex-1 flex-col justify-between gap-3">
												<div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
													<Briefcase className="h-4 w-4" />
												</div>
												<div className="space-y-3">
													<h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
														Career & Finance
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														475+ workspaces for job searches, career changes, interviews, and professional development.
													</h2>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li className="min-h-[14rem] list-none">
									<div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
										<GlowingEffect
											spread={40}
											glow={true}
											disabled={false}
											proximity={64}
											inactiveZone={0.01}
											borderWidth={3}
										/>
										<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
											<div className="relative flex flex-1 flex-col justify-between gap-3">
												<div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
													<Dumbbell className="h-4 w-4" />
												</div>
												<div className="space-y-3">
													<h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
														Health & Wellness
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														270+ workspaces for fitness, nutrition, mental health, and wellness planning.
													</h2>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li className="min-h-[14rem] list-none">
									<div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
										<GlowingEffect
											spread={40}
											glow={true}
											disabled={false}
											proximity={64}
											inactiveZone={0.01}
											borderWidth={3}
										/>
										<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
											<div className="relative flex flex-1 flex-col justify-between gap-3">
												<div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
													<Target className="h-4 w-4" />
												</div>
												<div className="space-y-3">
													<h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
														Personal Growth
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														303+ workspaces for education, skills development, and entrepreneurship.
													</h2>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>

							<div className="text-center">
								<Button variant="outline" size="lg" asChild>
									<Link href="/templates">
										Browse All Workspaces
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Three-Stage Evolution */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
						<Badge variant="outline" className="px-4 py-2">
							<TrendingUp className="mr-2 h-4 w-4" />
							Complete System
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							From guided learning to
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								life mastery
							</span>
						</h2>

						<p className="text-xl text-muted-foreground">
							Learn structure through guided workspaces, process your journey with daily reflection,
							then track everything in your personal Life OS.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<Card className="p-8 relative overflow-hidden">
							<div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
								1
							</div>
							<div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6 mb-6">
								<Layout className="h-8 w-8 text-blue-600 dark:text-blue-400" />
							</div>
							<div className="text-center space-y-3">
								<h3 className="text-xl font-semibold">Workspace</h3>
								<p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Start Here</p>
								<p className="text-muted-foreground">
									Split-screen guided experience with prompts, workspace, and articles. Learn how to think through complex decisions.
								</p>
							</div>
						</Card>

						<Card className="p-8 relative overflow-hidden">
							<div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
								2
							</div>
							<div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6 mb-6">
								<BookMarked className="h-8 w-8 text-purple-600 dark:text-purple-400" />
							</div>
							<div className="text-center space-y-3">
								<h3 className="text-xl font-semibold">Reflection</h3>
								<p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">Then Process</p>
								<p className="text-muted-foreground">
									Daily fullscreen journaling with rotating prompts. Process your journey, track moods, and identify themes.
								</p>
							</div>
						</Card>

						<Card className="p-8 relative overflow-hidden">
							<div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white font-bold text-sm">
								3
							</div>
							<div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6 mb-6">
								<BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400" />
							</div>
							<div className="text-center space-y-3">
								<h3 className="text-xl font-semibold">Life OS</h3>
								<p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">Finally Master</p>
								<p className="text-muted-foreground">
									Dashboard showing all progress, activity heatmaps, and insights. Your unified life operating system.
								</p>
							</div>
						</Card>
					</div>

					<div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20 max-w-4xl mx-auto">
						<p className="text-lg font-medium text-foreground">
							This isn&apos;t just software—it&apos;s a complete system for structured thinking
						</p>
						<p className="text-muted-foreground mt-2">
							Graduate from guided workspaces to autonomous life mastery
						</p>
					</div>
				</div>
			</section>

			{/* The Manifesto - Short Version */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="max-w-4xl mx-auto">
						<Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-12">
							<div className="space-y-6 text-center">
								<Badge variant="outline" className="px-4 py-2">
									<Sparkles className="mr-2 h-4 w-4" />
									Our Philosophy
								</Badge>

								<h2 className="text-3xl md:text-4xl font-bold">
									The blank page is dead
								</h2>

								<div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
									<p>A blank page has never planned a wedding.</p>
									<p>A blank page has never bought a home.</p>
									<p>A blank page has never changed a life.</p>
									<p className="text-foreground font-medium pt-4">Templata is the first encyclopedia for living.</p>
									<p className="text-foreground">Not emptiness — abundance. Not silence — guidance. Not guessing — clarity.</p>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* What is the Axiom Engine */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
						<Badge variant="outline" className="px-4 py-2">
							<Brain className="mr-2 h-4 w-4" />
							Axiom Engine
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Our AI system for
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								life guidance
							</span>
						</h2>

						<p className="text-xl text-muted-foreground">
							The Axiom Engine generated all 15,000+ prompts and 26,000+ articles through specialized AI—
							not generic ChatGPT, but purpose-built for life decisions.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
						{/* Generic AI */}
						<div className="space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
									<Brain className="h-5 w-5 text-red-600 dark:text-red-400" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
										Generic AI
									</h3>
									<p className="text-sm text-muted-foreground">
										Surface-level advice
									</p>
								</div>
							</div>

							<div className="space-y-3">
								{[
									"One-size-fits-all responses",
									"Lacks depth and nuance",
									"No structure or categorization",
									"Missing real-world scenarios"
								].map((item, index) => (
									<div key={index} className="flex items-start gap-2">
										<div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-muted-foreground">{item}</span>
									</div>
								))}
							</div>
						</div>

						{/* Axiom Engine */}
						<div className="space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
									<Sparkles className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-primary">
										Axiom Engine
									</h3>
									<p className="text-sm text-muted-foreground">
										Deep, thoughtful guidance
									</p>
								</div>
							</div>

							<div className="space-y-3">
								{[
									"26,000+ comprehensive articles",
									"Context-specific to your situation",
									"Categorized by decision phase",
									"Real scenarios with edge cases"
								].map((item, index) => (
									<div key={index} className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
										<span className="text-muted-foreground">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
							<Shield className="h-4 w-4 text-primary" />
							<span className="text-sm font-medium">Every piece of content went through human oversight for quality</span>
						</div>
					</div>
				</div>
			</section>

			{/* Inspiration - Notion & Wikipedia */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Standing on the shoulders of giants
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							We drew inspiration from tools that made complexity accessible to everyone.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
						<Card className="p-6 text-center">
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
								<FileText className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Notion for notes</h3>
							<p className="text-sm text-muted-foreground mb-3">
								Turned scattered thoughts into structured knowledge
							</p>
							<div className="text-xs text-muted-foreground space-y-1">
								<p>Before: fragmented notes everywhere</p>
								<p>After: unified workspace</p>
							</div>
						</Card>

						<Card className="p-6 text-center">
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
								<Globe className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Wikipedia for knowledge</h3>
							<p className="text-sm text-muted-foreground mb-3">
								Made expert information accessible to everyone
							</p>
							<div className="text-xs text-muted-foreground space-y-1">
								<p>Before: knowledge in textbooks</p>
								<p>After: comprehensive encyclopedia</p>
							</div>
						</Card>

						<Card className="p-6 text-center border-2 border-primary/20 bg-primary/5">
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
								<Sparkles className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Templata for life decisions</h3>
							<p className="text-sm text-muted-foreground mb-3">
								Structure + knowledge for life&apos;s biggest moments
							</p>
							<div className="text-xs text-muted-foreground space-y-1">
								<p>Before: blank pages + browser tabs</p>
								<p>After: guided workspaces with expertise</p>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-4xl px-4">
					<div className="text-center space-y-8 mb-12">
						<Badge variant="outline" className="px-4 py-2">
							<Lightbulb className="mr-2 h-4 w-4" />
							Frequently Asked
						</Badge>

						<h2 className="text-3xl md:text-4xl font-bold">
							Common questions
						</h2>
					</div>

					<Accordion type="single" collapsible className="space-y-4">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="border rounded-lg px-6 bg-background"
							>
								<AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* By the Numbers */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl font-bold">Templata by the numbers</h2>
						<p className="text-xl text-muted-foreground">
							Helping people organize life&apos;s important moments
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center p-8">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Layout className="h-8 w-8 text-primary" />
							</div>
							<div className="text-4xl font-bold mb-2">1,298</div>
							<p className="text-muted-foreground">Guided Workspaces</p>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center p-8">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<FileText className="h-8 w-8 text-primary" />
							</div>
							<div className="text-4xl font-bold mb-2">15,000+</div>
							<p className="text-muted-foreground">Action Prompts</p>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center p-8">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Globe className="h-8 w-8 text-primary" />
							</div>
							<div className="text-4xl font-bold mb-2">26,000+</div>
							<p className="text-muted-foreground">Expert Articles</p>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center p-8">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Users className="h-8 w-8 text-primary" />
							</div>
							<div className="text-4xl font-bold mb-2">50k+</div>
							<p className="text-muted-foreground">People Organized</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">
							Ready to organize your next big moment?
						</h2>
						<p className="text-xl text-muted-foreground">
							Start with a guided workspace. Everything is free—no credit card required.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" className="h-12 px-8 text-base" asChild>
								<Link href="/templates">
									Browse Workspaces
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							{!isLoggedIn && (
								<Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
									<Link href="/login">Get Started Free</Link>
								</Button>
							)}
						</div>

						<div className="pt-8 text-sm text-muted-foreground">
							<p>Questions? Email us at <a href="mailto:support@templata.com" className="text-primary hover:underline">support@templata.com</a></p>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
