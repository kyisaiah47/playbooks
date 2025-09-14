"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import BackgroundPaperShaders from "@/components/ui/background-paper-shaders";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Typewriter } from "@/components/ui/typewriter";


export default function LandingPage() {
	return (
		<PageLayout includeHeaderPadding={false}>

			{/* Hero Section */}
			<section className="h-screen flex items-center justify-center relative overflow-hidden">
				{/* Shader Background */}
				<BackgroundPaperShaders />

				<div className="container mx-auto max-w-7xl px-4 relative z-10">
					<div className="text-center space-y-8">
						<Badge
							variant="outline"
							className="px-4 py-2 border-white/30 text-white bg-white/10 backdrop-blur-sm"
						>
							<Sparkles className="mr-2 h-4 w-4" />
							Skip the blank page
						</Badge>

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
							Life shouldn&apos;t start with a blank page. Get expertly crafted
							templates that guide you through every step of your biggest moments.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
							<Button
								size="lg"
								className="h-12 px-8 text-base bg-white/80 backdrop-blur-sm text-black hover:bg-white/90"
								asChild
							>
								<Link href="/templates">
									Start Free
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								size="lg"
								className="h-12 px-8 text-base bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30"
								asChild
							>
								<Link href="/templates/wedding-planning">
									<Play className="mr-2 h-4 w-4" />
									See Templates in Action
								</Link>
							</Button>
						</div>
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
									100+ templates for
									<br />
									every life moment
								</h2>
								<p className="text-xl text-muted-foreground">
									From life planning to career changes, goal setting to starting a
									business - we have expertly crafted templates for it all.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
										<Layout className="h-5 w-5 text-blue-600 dark:text-blue-400" />
									</div>
									<span className="text-lg">
										Structured frameworks and reflection prompts
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
										<Users className="h-5 w-5 text-green-600 dark:text-green-400" />
									</div>
									<span className="text-lg">
										Expert insights and best practices included
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
										<Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
									</div>
									<span className="text-lg">
										Start free, upgrade for full access to all templates
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
														Personal Life
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														25+ templates for weddings, relationships, personal growth, and life transitions.
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
														Career & Work
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														30+ templates for job searches, career changes, interviews, and professional development.
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
													<Home className="h-4 w-4" />
												</div>
												<div className="space-y-3">
													<h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
														Property & Moving
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														20+ templates for home buying, selling, moving, and real estate decisions.
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
														Business & Finance
													</h3>
													<h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
														25+ templates for startups, business planning, budgeting, and financial decisions.
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
									onClick={() => {
										const event = new KeyboardEvent('keydown', {
											key: 'k',
											metaKey: true,
											bubbles: true
										});
										document.dispatchEvent(event);
									}}
								>
									Browse All Templates
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Template Structure Focus */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<BookOpen className="mr-2 h-4 w-4" />
							Structured Approach
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Every template comes with
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								expert frameworks
							</span>
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							No more staring at blank pages. Our templates provide clear 
							frameworks and reflection prompts to organize your thoughts
							and plans systematically.
						</p>

						<div className="grid md:grid-cols-3 gap-8 pt-8">
							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
									<BookOpen className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">Choose Template</h3>
								<p className="text-muted-foreground">
									Select from expertly crafted templates designed for
									your specific life moment or goal.
								</p>
							</div>

							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
									<MessageSquare className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">Follow Prompts</h3>
								<p className="text-muted-foreground">
									Work through reflection prompts and structured sections
									that guide your thinking process.
								</p>
							</div>

							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
									<Rocket className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">Take Action</h3>
								<p className="text-muted-foreground">
									Use your organized thoughts and plans to confidently
									move forward with your goals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-24 bg-muted/20">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Star className="mr-2 h-4 w-4" />
							Choose Your Plan
						</Badge>
						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Simple pricing for
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								every need
							</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Start free and upgrade as you grow. All plans include our expert
							guidance and step-by-step setup.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Free Tier */}
						<Card className="relative bg-background border-2">
							<CardHeader className="text-center pb-8">
								<CardTitle className="text-2xl font-bold">Free</CardTitle>
								<div className="text-4xl font-bold">$0</div>
								<CardDescription className="text-base">
									Perfect for trying out Templata
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>1-2 starter templates</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Structured templates</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Export to PDF/CSV</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Basic support</span>
									</div>
								</div>
								<Button
									className="w-full mt-8"
									variant="outline"
									onClick={() => {
										const event = new KeyboardEvent('keydown', {
											key: 'k',
											metaKey: true,
											bubbles: true
										});
										document.dispatchEvent(event);
									}}
								>
									Get Started Free
								</Button>
							</CardContent>
						</Card>

						{/* Plus Tier */}
						<Card className="relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary shadow-xl ring-2 ring-primary/20 transform scale-105">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<Badge className="px-4 py-1.5 bg-gradient-to-r from-primary to-primary/80 shadow-lg">
									<Star className="mr-1 h-3 w-3" />
									Most Popular
								</Badge>
							</div>
							<CardHeader className="text-center pb-8 pt-8">
								<CardTitle className="text-2xl font-bold">Plus</CardTitle>
								<div className="text-4xl font-bold">
									$9
									<span className="text-lg font-normal text-muted-foreground">
										/mo
									</span>
								</div>
								<CardDescription className="text-base">
									Full access to all templates
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span className="font-medium">
											Everything in Free, plus:
										</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Full access to 100+ templates</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Deeper workflows & automation</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Unlimited active templates</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Advanced customization</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Priority support</span>
									</div>
								</div>
								<Button
									className="w-full mt-8"
									asChild
								>
									<Link href="/login">Start Plus Trial</Link>
								</Button>
							</CardContent>
						</Card>

						{/* Pro Tier */}
						<Card className="relative bg-background border-2">
							<CardHeader className="text-center pb-8">
								<CardTitle className="text-2xl font-bold">Pro</CardTitle>
								<div className="text-4xl font-bold">
									$15
									<span className="text-lg font-normal text-muted-foreground">
										/mo
									</span>
								</div>
								<CardDescription className="text-base">
									For power users and teams
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span className="font-medium">
											Everything in Plus, plus:
										</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>AI Autofill from documents</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Calendar & tool integrations</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Team collaboration</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>White-label exports</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
										<span>Dedicated support</span>
									</div>
								</div>
								<Button
									className="w-full mt-8"
									variant="outline"
									asChild
								>
									<Link href="/login">Start Pro Trial</Link>
								</Button>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-12">
						<p className="text-sm text-muted-foreground">
							All plans include 14-day free trial • No commitment • Cancel
							anytime
						</p>
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
							Choose from our curated collection of templates and get started in
							minutes. Start free or unlock full access with our premium plans.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="h-12 px-8 text-base"
								onClick={() => {
									const event = new KeyboardEvent('keydown', {
										key: 'k',
										metaKey: true,
										bubbles: true
									});
									document.dispatchEvent(event);
								}}
							>
								Browse Templates
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/login">Start Plus Trial</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
