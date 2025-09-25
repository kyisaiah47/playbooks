"use client";

import Link from "next/link";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
	CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	Layers,
	Maximize2,
	Grid3x3,
	Monitor,
	Split,
	Zap,
	Moon,
	Palette,
	FileText,
	Brain,
	Target,
	TrendingUp,
	Workflow,
	RotateCcw,
} from "lucide-react";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: 'Workspaces - Three Modes of Life Organization | Templata',
  description: 'Discover Templata\'s three workspace modes: Template (structured guidance), Reflection (deep processing), and Life OS (unified management). Perfect for organizing life\'s biggest moments.',
  keywords: 'templata workspaces, template workspace, reflection workspace, life os, split screen interface, life organization, structured planning, workspace modes',
  authors: [{ name: 'Templata Team' }],
  creator: 'Templata',
  publisher: 'Templata',
  metadataBase: new URL('https://templata.com'),
  alternates: {
    canonical: '/workspaces',
  },
  openGraph: {
    title: 'Workspaces - Three Modes of Life Organization | Templata',
    description: 'Discover Templata\'s three workspace modes for organizing life\'s biggest moments. From structured templates to unified life management.',
    url: 'https://templata.com/workspaces',
    siteName: 'Templata',
    images: [
      {
        url: '/og-workspaces.jpg',
        width: 1200,
        height: 630,
        alt: 'Templata Workspaces - Three Modes of Life Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workspaces - Three Modes of Life Organization',
    description: 'Discover Templata\'s three workspace modes for organizing life\'s biggest moments. Template, Reflection, and Life OS modes.',
    images: ['/twitter-workspaces.jpg'],
    creator: '@templata',
    site: '@templata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function WorkspacesPage() {
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
							<Monitor className="mr-2 h-4 w-4" />
							Three Workspace Modes
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							From guided to
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								autonomous
							</span>
						</h1>

						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Start with structured templates, pause for reflection, then graduate to a unified life management system. Your workspace evolves as you do.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" asChild>
								<Link href="/templates">
									Start Your Journey
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/prompts">View Action Prompts</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* The Three Modes */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Three Modes, One Journey
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Each workspace mode serves a different purpose in your evolution from guidance to independence.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Template Workspace */}
						<Card className="border-2 border-primary/20 shadow-lg">
							<CardHeader className="text-center">
								<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
									<Split className="h-8 w-8 text-primary" />
								</div>
								<Badge variant="default" className="w-fit mx-auto mb-2">Start Here</Badge>
								<CardTitle>Template Workspace</CardTitle>
								<CardDescription>
									Split-screen interface with guided prompts and relevant articles. Perfect for learning and structured progress.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-3 text-sm">
									<div className="flex items-center gap-2">
										<Target className="h-4 w-4 text-primary" />
										<span>15,000+ action prompts</span>
									</div>
									<div className="flex items-center gap-2">
										<FileText className="h-4 w-4 text-primary" />
										<span>Contextual articles</span>
									</div>
									<div className="flex items-center gap-2">
										<Zap className="h-4 w-4 text-primary" />
										<span>Drag & drop functionality</span>
									</div>
									<div className="flex items-center gap-2">
										<Workflow className="h-4 w-4 text-primary" />
										<span>Structured progression</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Reflection Workspace */}
						<Card className="border-2 border-secondary/20 shadow-lg">
							<CardHeader className="text-center">
								<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
									<Maximize2 className="h-8 w-8 text-secondary" />
								</div>
								<Badge variant="secondary" className="w-fit mx-auto mb-2">Pause & Process</Badge>
								<CardTitle>Reflection Workspace</CardTitle>
								<CardDescription>
									Fullscreen, distraction-free environment for deeper thinking. Daily rotating prompts for emotional processing.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-3 text-sm">
									<div className="flex items-center gap-2">
										<Moon className="h-4 w-4 text-secondary" />
										<span>Daily reflection prompts</span>
									</div>
									<div className="flex items-center gap-2">
										<Maximize2 className="h-4 w-4 text-secondary" />
										<span>Fullscreen immersion</span>
									</div>
									<div className="flex items-center gap-2">
										<RotateCcw className="h-4 w-4 text-secondary" />
										<span>Template-specific rotation</span>
									</div>
									<div className="flex items-center gap-2">
										<Brain className="h-4 w-4 text-secondary" />
										<span>Open-ended exploration</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Life OS */}
						<Card className="border-2 border-green-500/20 shadow-lg">
							<CardHeader className="text-center">
								<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
									<Grid3x3 className="h-8 w-8 text-green-600 dark:text-green-400" />
								</div>
								<Badge variant="outline" className="w-fit mx-auto mb-2 border-green-500/50 text-green-600">Graduate To</Badge>
								<CardTitle>Life OS</CardTitle>
								<CardDescription>
									Unified view of all your template work. Like Notion, but built from your structured journey through life's moments.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-3 text-sm">
									<div className="flex items-center gap-2">
										<Layers className="h-4 w-4 text-green-600 dark:text-green-400" />
										<span>All templates unified</span>
									</div>
									<div className="flex items-center gap-2">
										<Palette className="h-4 w-4 text-green-600 dark:text-green-400" />
										<span>Free-form organization</span>
									</div>
									<div className="flex items-center gap-2">
										<TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
										<span>Cross-template insights</span>
									</div>
									<div className="flex items-center gap-2">
										<Monitor className="h-4 w-4 text-green-600 dark:text-green-400" />
										<span>Advanced interface</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* The Progression */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Your Evolution as a Life Planner
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Like Headspace's progression from guided to free-form meditation, we guide you from structured templates to autonomous life management.
						</p>
					</div>

					<div className="relative">
						{/* Connection Lines */}
						<div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-secondary to-green-500 -translate-y-1/2"></div>

						<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
							{/* Stage 1 */}
							<div className="text-center space-y-4">
								<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-4 border-primary/20">
									<span className="text-2xl font-bold text-primary">1</span>
								</div>
								<h3 className="text-xl font-semibold">Learn the Structure</h3>
								<p className="text-muted-foreground">
									Use templates with guided prompts and articles. Learn how to break down complex decisions systematically.
								</p>
							</div>

							{/* Stage 2 */}
							<div className="text-center space-y-4">
								<div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto border-4 border-secondary/20">
									<span className="text-2xl font-bold text-secondary">2</span>
								</div>
								<h3 className="text-xl font-semibold">Process the Journey</h3>
								<p className="text-muted-foreground">
									Balance action with reflection. Use daily prompts to process the emotional aspects of your life changes.
								</p>
							</div>

							{/* Stage 3 */}
							<div className="text-center space-y-4">
								<div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto border-4 border-green-500/20">
									<span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
								</div>
								<h3 className="text-xl font-semibold">Graduate to Freedom</h3>
								<p className="text-muted-foreground">
									Your template work becomes the foundation for a unified life management system. Full autonomy with earned structure.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Template Workspace Details */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								Template Workspace: Your Training Ground
							</h2>
							<p className="text-lg text-muted-foreground">
								The split-screen interface teaches you how to think systematically about life's biggest decisions. Prompts on the left, contextual articles on the right.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Split className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Split-Screen Design</p>
										<p className="text-sm text-muted-foreground">Action prompts and relevant articles side-by-side</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Drag & Drop</p>
										<p className="text-sm text-muted-foreground">Pull insights from articles directly into your answers</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Guided Progress</p>
										<p className="text-sm text-muted-foreground">Structured flow prevents overwhelm and analysis paralysis</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<Card className="p-6 space-y-4">
								<div className="text-center space-y-2 mb-4">
									<h4 className="font-semibold">Wedding Planning Template</h4>
									<p className="text-sm text-muted-foreground">Split-screen workspace in action</p>
								</div>
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div className="space-y-2">
										<div className="font-medium text-center">Action Prompts</div>
										<div className="space-y-2">
											<div className="p-3 bg-primary/10 rounded border-l-4 border-primary">
												What's your realistic budget range?
											</div>
											<div className="p-3 bg-primary/10 rounded border-l-4 border-primary">
												What's your ideal guest count?
											</div>
											<div className="p-3 bg-primary/10 rounded border-l-4 border-primary">
												What season works best?
											</div>
										</div>
									</div>
									<div className="space-y-2">
										<div className="font-medium text-center">Related Articles</div>
										<div className="space-y-2">
											<div className="p-3 bg-muted rounded cursor-pointer hover:bg-muted/80 transition-colors">
												<FileText className="h-4 w-4 inline mr-2" />
												Budget Breakdown Guide
											</div>
											<div className="p-3 bg-muted rounded cursor-pointer hover:bg-muted/80 transition-colors">
												<FileText className="h-4 w-4 inline mr-2" />
												Guest List Strategy
											</div>
											<div className="p-3 bg-muted rounded cursor-pointer hover:bg-muted/80 transition-colors">
												<FileText className="h-4 w-4 inline mr-2" />
												Seasonal Pricing Tips
											</div>
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Life OS */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="lg:order-2 space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								Life OS: Your Life Management System
							</h2>
							<p className="text-lg text-muted-foreground">
								Once you've learned the structure, all your template work becomes the foundation for a unified life management system. Like graduating from training wheels to advanced cycling.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Layers className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">All Templates Unified</p>
										<p className="text-sm text-muted-foreground">Wedding, career, home buying — all in one organized workspace</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Palette className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Free-Form Organization</p>
										<p className="text-sm text-muted-foreground">Organize your life your way, with the structure you've learned</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Cross-Template Insights</p>
										<p className="text-sm text-muted-foreground">See connections between different areas of your life</p>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:order-1 relative">
							<Card className="p-6 space-y-4">
								<div className="text-center space-y-2 mb-4">
									<h4 className="font-semibold">Your Life Dashboard</h4>
									<p className="text-sm text-muted-foreground">Notion-like interface with your template foundation</p>
								</div>
								<div className="space-y-3 text-sm">
									<div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded border-l-4 border-blue-500">
										<div className="font-medium">🏠 Home Buying Journey</div>
										<div className="text-muted-foreground">Budget set, areas researched, viewing checklist ready</div>
									</div>
									<div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded border-l-4 border-purple-500">
										<div className="font-medium">💼 Career Transition</div>
										<div className="text-muted-foreground">Skills assessed, network mapped, applications tracking</div>
									</div>
									<div className="p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded border-l-4 border-green-500">
										<div className="font-medium">💰 Financial Planning</div>
										<div className="text-muted-foreground">Emergency fund built, investment strategy defined</div>
									</div>
									<div className="p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded border-l-4 border-orange-500">
										<div className="font-medium">✈️ Travel Planning</div>
										<div className="text-muted-foreground">Destinations prioritized, budgets allocated, timelines set</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Why This Progression Works */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Why This Progression Is Genius
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Most apps start with blank pages or overwhelm you with options. We teach you the skill, then give you the freedom.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card className="text-center p-6 border-2 border-primary/20">
							<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
								<Brain className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold mb-4">Learn the Framework</h3>
							<p className="text-muted-foreground">
								Templates teach you how to think systematically about complex decisions. You internalize the process through guided practice.
							</p>
						</Card>

						<Card className="text-center p-6 border-2 border-green-500/20">
							<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
								<TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
							</div>
							<h3 className="font-semibold mb-4">Graduate to Autonomy</h3>
							<p className="text-muted-foreground">
								Your structured work becomes the foundation for advanced life management. You get the best of both worlds: guidance when learning, freedom when ready.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Ready to begin your workspace journey?
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Start with guided templates, evolve through reflection, graduate to unified life management. Your workspace grows with you.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<Link href="/templates">
								Start with Templates
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/prompts">Explore Action Prompts</Link>
						</Button>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}