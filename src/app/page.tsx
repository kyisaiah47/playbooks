"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowRight,
	FileText,
	BookOpen,
	Globe,
	Check,
	X,
	Briefcase,
	Heart,
	Activity,
	Brain,
	DollarSign,
	Home,
} from "lucide-react";
import { PageLayout } from "@/components/layout";

export default function LandingPage() {
	const { isLoggedIn } = useAuth();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'Wikipedia × Notion for life planning. 1,200+ templates with expert prompts and articles for major life decisions.',
		url: 'https://templata.org',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		featureList: [
			'1,200+ Life Planning Templates',
			'Expert-Curated Prompts',
			'Curated Articles',
			'Split-Screen Workspace',
		],
	};

	const categories = [
		{ icon: Briefcase, name: "Career & Work", count: 156, slug: "career" },
		{ icon: Heart, name: "Relationships", count: 203, slug: "relationships" },
		{ icon: Activity, name: "Health & Wellness", count: 142, slug: "health" },
		{ icon: Brain, name: "Personal Growth", count: 189, slug: "personal-growth" },
		{ icon: DollarSign, name: "Finance", count: 127, slug: "finance" },
		{ icon: Home, name: "Life Events", count: 181, slug: "life-events" },
	];

	return (
		<PageLayout includeHeaderPadding={false}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero Section */}
			<section className="min-h-[90vh] flex items-center justify-center py-20 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left: Copy */}
						<div className="space-y-8">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
									Wikipedia × Notion
									<br />
									<span className="text-muted-foreground">for life planning</span>
								</h1>

								<p className="text-xl md:text-2xl mb-8">
									1,200+ templates with expert prompts and articles
									<br />
									for major life decisions.
								</p>

								<div className="space-y-3 text-lg text-muted-foreground">
									<p className="flex items-start gap-2">
										<ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
										<span>Templates for career changes, relationships, health, life events</span>
									</p>
									<p className="flex items-start gap-2">
										<ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
										<span>Each template has structured prompts and curated articles</span>
									</p>
									<p className="flex items-start gap-2">
										<ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
										<span>Try instantly — no signup needed</span>
									</p>
								</div>
							</motion.div>

							<motion.div
								className="flex flex-col sm:flex-row gap-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<Button size="lg" className="h-12 px-8 text-base" asChild>
									<Link href="/templates">
										Browse Templates
										<ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
								<Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
									<Link href="/app">Try Demo</Link>
								</Button>
							</motion.div>

							<p className="text-sm text-muted-foreground">
								Free forever. No signup required.
							</p>
						</div>

						{/* Right: Screenshot/Example */}
						<motion.div
							className="relative"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<Card className="p-6 border-2">
								<div className="space-y-4">
									<div className="flex items-center gap-2 text-sm font-semibold border-b pb-3">
										<FileText className="h-4 w-4" />
										<span>Career Transition Template</span>
									</div>

									<div className="space-y-3">
										<div className="text-sm font-medium">Prompts:</div>
										<div className="space-y-2 text-sm text-muted-foreground">
											<p>• What skills give me energy vs. drain me?</p>
											<p>• What's my financial runway?</p>
											<p>• Who in my network made a similar move?</p>
											<p>• Same industry or pivot?</p>
										</div>
									</div>

									<div className="space-y-2">
										<div className="text-sm font-medium">Articles:</div>
										<div className="space-y-1 text-xs text-muted-foreground">
											<p>→ "Identifying Transferable Skills" (HBR)</p>
											<p>→ "Financial Planning for Career Changes"</p>
											<p>→ "Networking During Transitions"</p>
										</div>
									</div>
								</div>
							</Card>
							<div className="text-xs text-center mt-4 text-muted-foreground">
								↑ Real template example
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Before/After Comparison */}
			<motion.section
				className="py-20 md:py-32 bg-muted/30"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-5xl px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							When you face a big life decision...
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8 items-start">
						{/* Without Templata */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-destructive/80">Without Templata</h3>
							<div className="space-y-3">
								<div className="flex items-start gap-3">
									<X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Endless tabs, contradictory advice</p>
								</div>
								<div className="flex items-start gap-3">
									<X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Blank page, unstructured thoughts</p>
								</div>
								<div className="flex items-start gap-3">
									<X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Hours piecing together random tips</p>
								</div>
								<div className="flex items-start gap-3">
									<X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Don't know where to start</p>
								</div>
							</div>
						</div>

						{/* With Templata */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-primary">With Templata</h3>
							<div className="space-y-3">
								<div className="flex items-start gap-3">
									<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">One template with structured prompts</p>
								</div>
								<div className="flex items-start gap-3">
									<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Split-screen workspace that saves your work</p>
								</div>
								<div className="flex items-start gap-3">
									<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Expert frameworks organized by category</p>
								</div>
								<div className="flex items-start gap-3">
									<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
									<p className="text-muted-foreground">Start immediately, no guessing</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* How It Works */}
			<motion.section
				className="py-20 md:py-32"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-5xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-5xl font-bold">
							How Templata works
						</h2>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<div className="space-y-3">
							<div className="text-4xl font-bold text-primary">1</div>
							<h3 className="font-semibold">Pick a life situation</h3>
							<p className="text-sm text-muted-foreground">
								Example: "Career transition"
							</p>
						</div>

						<div className="space-y-3">
							<div className="text-4xl font-bold text-primary">2</div>
							<h3 className="font-semibold">Open the template</h3>
							<p className="text-sm text-muted-foreground">
								See structured prompts and curated articles in split-screen
							</p>
						</div>

						<div className="space-y-3">
							<div className="text-4xl font-bold text-primary">3</div>
							<h3 className="font-semibold">Work through prompts</h3>
							<p className="text-sm text-muted-foreground">
								Answer in workspace, read articles for context. Saves in browser.
							</p>
						</div>

						<div className="space-y-3">
							<div className="text-4xl font-bold text-primary">4</div>
							<h3 className="font-semibold">Return anytime</h3>
							<p className="text-sm text-muted-foreground">
								Your progress is saved locally
							</p>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Categories */}
			<motion.section
				className="py-20 md:py-32 bg-muted/30"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-6xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-5xl font-bold">
							What do you need a template for?
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{categories.map((category, index) => {
							const Icon = category.icon;
							return (
								<motion.div
									key={category.slug}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Link href={`/templates/categories/${category.slug}`}>
										<Card className="p-6 h-full hover:border-primary/50 transition-colors cursor-pointer">
											<div className="flex items-start gap-4">
												<div className="p-3 rounded-lg bg-primary/10">
													<Icon className="h-6 w-6 text-primary" />
												</div>
												<div className="flex-1">
													<h3 className="font-semibold mb-1">{category.name}</h3>
													<p className="text-sm text-muted-foreground">{category.count} templates</p>
												</div>
												<ArrowRight className="h-5 w-5 text-muted-foreground" />
											</div>
										</Card>
									</Link>
								</motion.div>
							);
						})}
					</div>

					<div className="text-center mt-8">
						<Button variant="outline" size="lg" asChild>
							<Link href="/templates">View all templates</Link>
						</Button>
					</div>
				</div>
			</motion.section>

			{/* Live Example */}
			<motion.section
				className="py-20 md:py-32"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-5xl px-4">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-3xl md:text-5xl font-bold">
							See how it works
						</h2>
						<p className="text-xl text-muted-foreground">
							Career Transition Template
						</p>
					</div>

					<Card className="p-8">
						<div className="space-y-8">
							{/* Prompts */}
							<div>
								<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
									<FileText className="h-5 w-5 text-primary" />
									Prompts
								</h3>
								<div className="space-y-2 text-muted-foreground">
									<p>• What skills from my current role give me energy vs. drain me?</p>
									<p>• What's my financial runway? (savings ÷ monthly expenses)</p>
									<p>• Who in my network has made a similar transition?</p>
									<p>• What does success look like for me in 5 years?</p>
									<p>• Same industry or completely pivot?</p>
									<p>• Take a pay cut for better fit, or wait for ideal role?</p>
									<p className="text-sm pt-2">+ 40+ more prompts</p>
								</div>
							</div>

							{/* Articles */}
							<div>
								<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
									<Globe className="h-5 w-5 text-primary" />
									Articles
								</h3>
								<div className="space-y-2 text-sm text-muted-foreground">
									<p>→ "How to Identify Transferable Skills" (Harvard Business Review)</p>
									<p>→ "Financial Planning for Career Changes" (The Balance)</p>
									<p>→ "Networking During Transitions" (Forbes)</p>
									<p>→ "When to Tell Your Boss You're Leaving" (Inc.)</p>
									<p className="pt-2">+ more expert articles</p>
								</div>
							</div>
						</div>

						<div className="mt-8 pt-8 border-t">
							<Button size="lg" asChild>
								<Link href="/templates/career-transition">
									Try this template live
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
						</div>
					</Card>
				</div>
			</motion.section>

			{/* How Is This Different */}
			<motion.section
				className="py-20 md:py-32 bg-muted/30"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-5xl px-4">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-3xl md:text-5xl font-bold">
							How is this different?
						</h2>
					</div>

					<div className="space-y-6">
						<Card className="p-6">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="font-semibold mb-3">ChatGPT / AI tools</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Generic responses</p>
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Starts from zero every time</p>
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> No structure or context</p>
									</div>
								</div>
								<div>
									<h3 className="font-semibold mb-3 text-primary">Templata</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Pre-curated expert templates</p>
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Ready to use immediately</p>
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Structured prompts + articles</p>
									</div>
								</div>
							</div>
						</Card>

						<Card className="p-6">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="font-semibold mb-3">Blank journal / notebook</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Don't know what to write</p>
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> No structure or guidance</p>
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Easy to miss important things</p>
									</div>
								</div>
								<div>
									<h3 className="font-semibold mb-3 text-primary">Templata</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Structured prompts ready to use</p>
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Expert-organized frameworks</p>
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Comprehensive coverage</p>
									</div>
								</div>
							</div>
						</Card>

						<Card className="p-6">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="font-semibold mb-3">Googling advice</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Scattered random articles</p>
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Hours piecing together info</p>
										<p className="flex items-start gap-2"><X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /> Contradictory advice, no plan</p>
									</div>
								</div>
								<div>
									<h3 className="font-semibold mb-3 text-primary">Templata</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Curated in one place</p>
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Framework + reading combined</p>
										<p className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Coherent expert guidance</p>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</motion.section>

			{/* Final CTA */}
			<motion.section
				className="py-20 md:py-32"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto max-w-3xl px-4 text-center space-y-8">
					<h2 className="text-3xl md:text-5xl font-bold">
						Ready to get started?
					</h2>
					<p className="text-xl text-muted-foreground">
						Browse 1,200+ templates. Completely free, no signup required.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" className="h-12 px-8 text-base" asChild>
							<Link href="/templates">
								Browse All Templates
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
							<Link href="/app">Try Demo</Link>
						</Button>
					</div>
				</div>
			</motion.section>

		</PageLayout>
	);
}
