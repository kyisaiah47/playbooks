"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	Lightbulb,
	Target,
	Users,
	Zap,
	Sparkles,
	FileText,
	PenTool,
	Layers,
	CheckCircle2,
	Heart,
	Palette,
} from "lucide-react";
import { PageLayout } from "@/components/layout";

export default function AboutPage() {
	return (
		<PageLayout>

			{/* Hero Section */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Lightbulb className="mr-2 h-4 w-4" />
							Our Philosophy
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Life shouldn&apos;t start with
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								a blank page
							</span>
						</h1>

						<p className="text-xl text-muted-foreground">
							Just like Notion revolutionized note-taking and Canva transformed
							design, Templata is reimagining how we organize life&apos;s most
							important moments.
						</p>
					</div>
				</div>
			</section>

			{/* The Problem */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="space-y-6">
							<Badge
								variant="outline"
								className="w-fit"
							>
								<Target className="mr-2 h-4 w-4" />
								The Problem
							</Badge>

							<h2 className="text-3xl md:text-4xl font-bold leading-tight">
								Complex life events deserve better than DIY chaos
							</h2>

							<div className="space-y-4 text-muted-foreground">
								<p className="text-lg">
									When you&apos;re planning a wedding, buying a home, or
									starting a business, you&apos;re handed a mountain of
									decisions with no roadmap. You end up with scattered notes,
									forgotten tasks, and the constant worry that you&apos;re
									missing something important.
								</p>
								<p className="text-lg">
									Traditional tools give you blank documents and empty
									spreadsheets. But life&apos;s biggest moments need structure,
									not starting from zero.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<FileText className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Blank Documents
									</div>
									<div className="text-sm text-muted-foreground">
										Where do I even start?
									</div>
								</div>
							</Card>

							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<Layers className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Scattered Info
									</div>
									<div className="text-sm text-muted-foreground">
										Notes everywhere, clarity nowhere
									</div>
								</div>
							</Card>

							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<CheckCircle2 className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Forgotten Tasks
									</div>
									<div className="text-sm text-muted-foreground">
										What am I missing?
									</div>
								</div>
							</Card>

							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<Users className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										No Guidance
									</div>
									<div className="text-sm text-muted-foreground">
										Flying blind on important decisions
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Our Solution */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Sparkles className="mr-2 h-4 w-4" />
							Our Solution
						</Badge>

						<h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
							What if every life moment came with
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								{" "}
								expert guidance
							</span>
							?
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							That&apos;s exactly what Templata provides. We&apos;ve taken the
							complexity out of life&apos;s biggest moments by giving you proven
							templates created by domain experts.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<PenTool className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-xl">
									Expert-Crafted Templates
								</CardTitle>
								<CardDescription className="text-base">
									Created by wedding planners, real estate agents, career
									coaches, and other domain experts who know what you need to
									succeed.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Zap className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-xl">Guided Setup Process</CardTitle>
								<CardDescription className="text-base">
									No more blank pages. Our intelligent wizards ask the right
									questions to build your personalized workspace in minutes.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Palette className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-xl">
									Beautiful & Functional
								</CardTitle>
								<CardDescription className="text-base">
									Like Canva made design accessible to everyone, we make
									professional-grade organization accessible for life&apos;s
									important moments.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Inspiration */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Inspired by the best
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							We drew inspiration from tools that democratized complex tasks for
							everyday people.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
									<FileText className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h3 className="text-xl font-semibold">
										Like Notion for notes
									</h3>
									<p className="text-muted-foreground">
										Turned scattered thoughts into organized knowledge
									</p>
								</div>
							</div>

							<p className="text-muted-foreground">
								Notion showed us that the right structure can transform how we
								capture and organize information. Before Notion, people
								struggled with fragmented notes across different apps. After
								Notion, they had a unified system that grew with their needs.
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
									<Palette className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h3 className="text-xl font-semibold">
										Like Canva for design
									</h3>
									<p className="text-muted-foreground">
										Made professional design accessible to everyone
									</p>
								</div>
							</div>

							<p className="text-muted-foreground">
								Canva democratized design by providing templates and tools that
								non-designers could use to create professional-looking graphics.
								They proved that the right templates and guidance could unlock
								creativity for millions of people.
							</p>
						</div>
					</div>

					<Card className="border-2 border-primary/20 bg-primary/5 p-8 text-center">
						<div className="space-y-4">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
								<Image
									src="/shift.svg"
									alt="Templata"
									width={32}
									height={32}
									className="dark:invert"
								/>
							</div>

							<h3 className="text-2xl font-bold">
								Templata for life organization
							</h3>

							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								We&apos;re doing for life&apos;s big moments what Notion did for
								notes and Canva did for design - making the complex simple and
								the overwhelming manageable.
							</p>
						</div>
					</Card>
				</div>
			</section>

			{/* Our Values */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">What we believe</h2>
						<p className="text-xl text-muted-foreground">
							The principles that guide everything we build
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Always Free</CardTitle>
								<CardDescription>
									Life&apos;s important moments shouldn&apos;t come with
									subscription fees. Our templates are free, forever.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Users className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Expert Guidance</CardTitle>
								<CardDescription>
									Every template is crafted by domain experts who understand
									what you need to succeed.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Zap className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Instant Setup</CardTitle>
								<CardDescription>
									No learning curve. Answer a few questions and your workspace
									is ready to use.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Heart className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Human-Centered</CardTitle>
								<CardDescription>
									Built for real people organizing real life moments, not just
									productivity enthusiasts.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">
							Ready to skip the blank page?
						</h2>
						<p className="text-xl text-muted-foreground">
							Join thousands of people who&apos;ve organized their biggest
							moments with Templata.
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
							<Button
								variant="outline"
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/faq">Learn More</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
