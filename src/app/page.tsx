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
import { InputButtonProvider, InputButton, InputButtonAction, InputButtonSubmit, InputButtonInput } from "@/components/ui/input-button";
import { StatsButton } from "@/components/ui/stats-button";
import {
	Heart,
	Home,
	Briefcase,
	ArrowRight,
	Zap,
	Star,
	CheckCircle2,
	Sparkles,
	Target,
	Rocket,
	Timer,
	MessageSquare,
	Play,
	BookOpen,
	Calendar,
	TrendingUp,
	Layout,
	Users,
	Crown,
	Dumbbell,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Typewriter } from "@/components/ui/typewriter";

// Metadata is handled in layout.tsx for client components

export default function LandingPage() {
	const { isLoggedIn } = useAuth();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'AI-powered life planning templates and workspaces for organizing life\'s biggest moments. 1,298 templates with 15,000+ prompts and 26,000+ articles.',
		url: 'https://templata.com',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		creator: {
			'@type': 'Organization',
			name: 'Templata',
			url: 'https://templata.com'
		},
		featureList: [
			'1,298 Life Planning Templates',
			'15,000+ Action Prompts',
			'26,000+ Expert Articles',
			'AI-Powered Axiom Engine',
			'Split-Screen Interface',
			'Template Workspaces',
			'Reflection Workspaces',
			'Life OS Management'
		],
		screenshot: 'https://templata.com/og-image.jpg'
	};

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
							<AnnouncementTitle>Now in public beta - explore 1,298 templates</AnnouncementTitle>
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
							Life shouldn&apos;t start with a blank page. Get workspaces powered by our Axiom Engine
							with 15,000+ prompts and 26,000+ articles to guide you through every step of your biggest moments.
						</p>


					</div>
				</div>
			</section>

			{/* Key Value Props */}
			<section className="py-24 border-t bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-start">
						<div className="space-y-8">
							<div className="space-y-4">
								<Badge
									variant="outline"
									className="w-fit"
								>
									<Zap className="mr-2 h-4 w-4" />
									Everything you need
								</Badge>
								<h2 className="text-4xl md:text-5xl font-bold leading-tight">
									1,298 templates for
									<br />
									every life moment
								</h2>
								<p className="text-xl text-muted-foreground">
									From life planning to career changes, goal setting to starting a
									business - we have systematically generated workspaces with Axiom Engine guidance for it all.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
										<Layout className="h-5 w-5 text-blue-600 dark:text-blue-400" />
									</div>
									<span className="text-lg">
										15,000+ structured prompts and reflection frameworks
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
										<Users className="h-5 w-5 text-green-600 dark:text-green-400" />
									</div>
									<span className="text-lg">
										26,000+ articles with Axiom Engine insights and best practices
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
										<Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
									</div>
									<span className="text-lg">
										Full access to all 1,298 templates—completely free
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
														250+ templates for weddings, relationships, personal growth, and life transitions.
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
														475+ templates for job searches, career changes, interviews, and professional development.
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
														270+ templates for fitness, nutrition, mental health, and wellness planning.
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
														Personal & Professional Growth
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														50+ templates for education, skills development, and business entrepreneurship.
													</h2>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>

							<div className="text-center">
								<Button
									variant="outline"
									size="lg"
									asChild
								>
									<Link href="/templates">
										Browse All Templates
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Powerful Features */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Zap className="mr-2 h-4 w-4" />
							Powered by Axiom Engine
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							15,000+ prompts meet
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								intelligent design
							</span>
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Every workspace is powered by our specialized AI system with tactical prompts, contextual articles, and seamless drag-and-drop functionality.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
										<MessageSquare className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">15,000+ Action Prompts</h3>
										<p className="text-muted-foreground">Tactical, practical prompts that drive decision-making. Categorized by planning phases and organized for maximum impact.</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
										<BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">26,000+ Expert Articles</h3>
										<p className="text-muted-foreground">In-depth guidance and insights for every situation. Contextually relevant to your current prompts and decisions.</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
										<Layout className="h-6 w-6 text-purple-600 dark:text-purple-400" />
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">Split-Screen Interface</h3>
										<p className="text-muted-foreground">Prompts on the left, articles on the right. Drag insights directly into your answers without losing momentum.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<Card className="p-6 space-y-4 bg-gradient-to-br from-background to-muted/50">
								<div className="flex items-center gap-2 text-sm font-medium text-primary">
									<Layout className="h-4 w-4" />
									<span>Live Workspace Preview</span>
								</div>
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div className="space-y-2">
										<div className="font-medium text-foreground">Action Prompts</div>
										<div className="space-y-1">
											<div className="p-3 bg-muted rounded text-muted-foreground">What's your venue budget range?</div>
											<div className="p-3 bg-muted rounded text-muted-foreground">Who are your must-have vendors?</div>
											<div className="p-3 bg-primary/10 rounded text-primary border border-primary/20">→ Current: Guest count priorities</div>
										</div>
									</div>
									<div className="space-y-2">
										<div className="font-medium text-foreground">Related Articles</div>
										<div className="space-y-1">
											<div className="p-3 bg-primary/5 rounded text-muted-foreground cursor-pointer hover:bg-primary/10 transition-colors">Venue Cost Breakdown</div>
											<div className="p-3 bg-primary/5 rounded text-muted-foreground cursor-pointer hover:bg-primary/10 transition-colors">Guest List Strategy</div>
											<div className="p-3 bg-primary/5 rounded text-muted-foreground cursor-pointer hover:bg-primary/10 transition-colors">Seasonal Pricing Guide</div>
										</div>
									</div>
								</div>
								<div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
									<ArrowRight className="h-3 w-3" />
									<span>Drag articles into prompt answers</span>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Workspace Evolution */}
			<section className="py-24 bg-muted/20">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<TrendingUp className="mr-2 h-4 w-4" />
							Complete Evolution
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							From guided templates to
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								life mastery
							</span>
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Learn structure, then graduate to complete autonomy. Our three progressive workspace modes take you from guided learning to mastering your own life operating system.
						</p>

						<div className="relative pt-8">
							{/* Workspace Cards */}
							<div className="grid md:grid-cols-3 gap-8">
								<div className="relative text-center space-y-4">
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
										1
									</div>
									<div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6">
										<Layout className="h-8 w-8 text-blue-600 dark:text-blue-400" />
									</div>
									<h3 className="text-xl font-semibold">Template Workspace</h3>
									<p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Start Here</p>
									<p className="text-muted-foreground">
										Split-screen guided experience with 15,000+ action prompts and contextual articles. Learn structure first.
									</p>
								</div>

								<div className="relative text-center space-y-4">
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
										2
									</div>
									<div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6">
										<Timer className="h-8 w-8 text-purple-600 dark:text-purple-400" />
									</div>
									<h3 className="text-xl font-semibold">Reflection Workspace</h3>
									<p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">Then Process</p>
									<p className="text-muted-foreground">
										Daily fullscreen immersion for processing your journey. Pause and think deeply about progress.
									</p>
								</div>

								<div className="relative text-center space-y-4">
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white font-bold text-sm">
										3
									</div>
									<div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mt-6">
										<Crown className="h-8 w-8 text-green-600 dark:text-green-400" />
									</div>
									<h3 className="text-xl font-semibold">Life OS</h3>
									<p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">Finally Master</p>
									<p className="text-muted-foreground">
										Unified life OS combining all your template work. Like Notion, but built from your foundation.
									</p>
								</div>
							</div>

							{/* Progression Message */}
							<div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
								<p className="text-lg font-medium text-foreground">
									This isn't just software—it's a complete evolution system

								</p>
								<p className="text-muted-foreground mt-2">
									Graduate from guided templates to autonomous life mastery
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">
							Ready to organize your next big moment?
						</h2>
						<p className="text-xl text-muted-foreground">
							Choose from our curated collection of templates and start organizing in minutes.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/templates">
									Browse Templates
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							{!isLoggedIn && (
								<Button
									variant="outline"
									size="lg"
									className="h-12 px-8 text-base"
									asChild
								>
									<Link href="/login">Get Started</Link>
								</Button>
							)}
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
