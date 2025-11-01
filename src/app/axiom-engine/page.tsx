"use client";

import Link from "next/link";
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
	Brain,
	Cog,
	Sparkles,
	Target,
	Zap,
	CheckCircle2,
	Layers,
	FileText,
	MessageSquare,
	Wand2,
	Lightbulb,
	Shield,
	RefreshCw,
} from "lucide-react";
import { PageLayout } from "@/components/layout";


export default function AxiomEnginePage() {
	return (
		<PageLayout>

			{/* Hero Section */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-6 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="w-fit px-4 py-2"
						>
							<Brain className="mr-2 h-4 w-4" />
							Powering Templata
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Meet the
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								Axiom Engine
							</span>
						</h1>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Templata's specialized AI system, designed exclusively for life guidance.
							Every prompt, resource, and insight is generated through carefully crafted
							intelligence, refined specifically for helping you navigate life's biggest decisions.
						</p>
					</div>
				</div>
			</section>

			{/* What is the Axiom Engine */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="space-y-6">
							<Badge
								variant="outline"
								className="w-fit"
							>
								<Cog className="mr-2 h-4 w-4" />
								What It Is
							</Badge>

							<h2 className="text-3xl md:text-4xl font-bold leading-tight">
								Purpose-built intelligence for life guidance
							</h2>

							<div className="space-y-4 text-muted-foreground">
								<p className="text-lg">
									The Axiom Engine isn't generic AI - it's a specialized system
									designed exclusively for generating thoughtful, comprehensive
									guidance for life's biggest decisions.
								</p>
								<p className="text-lg">
									Every piece of content you see on Templata has been generated
									through carefully crafted prompts, multiple iterations, and
									human oversight to ensure quality and relevance.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
									<Brain className="h-4 w-4 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">Specialized Training</h3>
									<p className="text-sm text-muted-foreground">Optimized for life guidance, not general content</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
									<Wand2 className="h-4 w-4 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">Curated Prompts</h3>
									<p className="text-sm text-muted-foreground">Every output refined through expert prompting</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
									<Target className="h-4 w-4 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">Decision-Focused</h3>
									<p className="text-sm text-muted-foreground">Built for reflection and decision-making</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
									<Shield className="h-4 w-4 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">Human Oversight</h3>
									<p className="text-sm text-muted-foreground">Reviewed and refined by domain experts</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Sparkles className="mr-2 h-4 w-4" />
							How It Works
						</Badge>

						<h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
							From prompt engineering to
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								{" "}
								thoughtful guidance
							</span>
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							The Axiom Engine uses sophisticated prompt engineering and iterative
							refinement to generate comprehensive, thoughtful guidance for each life situation.
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								step: "1",
								title: "Specialized Prompting",
								description: "Custom-crafted prompts designed specifically for life guidance scenarios, not generic content generation.",
								icon: Cog
							},
							{
								step: "2",
								title: "Multiple Iterations",
								description: "Each template goes through multiple refinement cycles to ensure comprehensive coverage and thoughtful insights.",
								icon: RefreshCw
							},
							{
								step: "3",
								title: "Quality Curation",
								description: "Human oversight ensures every piece of content meets our standards for relevance and helpfulness.",
								icon: Shield
							},
							{
								step: "4",
								title: "Thoughtful Output",
								description: "48+ unique prompts and comprehensive resources that help you think through every aspect of your decision.",
								icon: Sparkles
							}
						].map((step, index) => {
							const Icon = step.icon;
							return (
								<div key={index} className="text-center space-y-4">
									<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto relative">
										<span className="text-2xl font-bold text-primary">
											{step.step}
										</span>
										<div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
											<Icon className="h-3 w-3 text-primary-foreground" />
										</div>
									</div>
									<h3 className="text-xl font-semibold">
										{step.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{step.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* What Makes It Different */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-6 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">
							Why specialized AI matters
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Generic AI gives generic answers. The Axiom Engine is specifically
							designed for the unique challenges of life guidance.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
						{/* Generic AI Side */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
									<MessageSquare className="h-5 w-5 text-red-600 dark:text-red-400" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
										Generic AI
									</h3>
									<p className="text-sm text-muted-foreground">
										Surface-level advice and generic templates
									</p>
								</div>
							</div>

							<div className="space-y-2 pl-13">
								{[
									"One-size-fits-all responses",
									"Lacks depth and nuance",
									"No consideration for complexity",
									"Missing real-world scenarios"
								].map((item, index) => (
									<div key={index} className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
										<span className="text-sm text-muted-foreground">{item}</span>
									</div>
								))}
							</div>
						</div>

						{/* Axiom Engine Side */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
									<Brain className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-primary">
										Axiom Engine
									</h3>
									<p className="text-sm text-muted-foreground">
										Deep, thoughtful guidance for complex decisions
									</p>
								</div>
							</div>

							<div className="space-y-2 pl-13">
								{[
									"Considers multiple perspectives and edge cases",
									"48+ unique prompts per life situation",
									"Designed for reflection and deep thinking",
									"Comprehensive coverage of real scenarios"
								].map((item, index) => (
									<div key={index} className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
										<span className="text-sm text-muted-foreground">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical Excellence */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-6 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">Built for excellence</h2>
						<p className="text-xl text-muted-foreground">
							The technical principles that make the Axiom Engine effective
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{[
							{
								icon: Target,
								title: "Domain-Specific",
								description: "Trained specifically for life guidance scenarios, not general content generation."
							},
							{
								icon: Layers,
								title: "Multi-Layered",
								description: "Complex prompting strategies that consider context, nuance, and real-world complexity."
							},
							{
								icon: RefreshCw,
								title: "Iteratively Refined",
								description: "Continuous improvement through feedback and refinement cycles."
							},
							{
								icon: Lightbulb,
								title: "Context-Aware",
								description: "Understands the unique challenges and considerations of each life situation."
							},
							{
								icon: Zap,
								title: "Comprehensive",
								description: "Generates complete ecosystems of prompts, resources, and guidance."
							},
							{
								icon: Shield,
								title: "Quality Assured",
								description: "Human oversight ensures every output meets our standards for helpfulness."
							}
						].map((principle, index) => {
							const Icon = principle.icon;
							return (
								<div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors duration-200">
									<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
										<Icon className="h-4 w-4 text-primary" />
									</div>
									<div className="space-y-1">
										<h3 className="text-sm font-semibold">{principle.title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Transparency */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-start gap-4 p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
							<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
								<Shield className="h-5 w-5 text-primary" />
							</div>
							<div className="space-y-4">
								<h3 className="text-xl font-bold">
									Transparency & Trust
								</h3>
								<div className="space-y-3 text-muted-foreground">
									<p>
										We believe in being transparent about our use of AI while emphasizing
										the specialized nature and quality of our approach.
									</p>
									<p>
										The Axiom Engine represents thousands of hours of prompt engineering,
										testing, and refinement to create the most helpful life guidance system possible.
									</p>
								</div>
								<div className="flex items-center gap-6 pt-2">
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
										<span>AI-Powered</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
										<span>Human-Curated</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
										<span>Specialized</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">
							Experience the Axiom Engine in action
						</h2>
						<p className="text-xl text-muted-foreground">
							See how specialized AI can transform your approach to life's biggest decisions.
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
								Try Templates
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/wedding-planning">See Example Template</Link>
							</Button>
						</div>

						{/* Bottom Indicators */}
						<div className="pt-6">
							<div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary" />
									<span>Free to start</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary" />
									<span>48+ prompts per template</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary" />
									<span>AI-powered guidance</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}