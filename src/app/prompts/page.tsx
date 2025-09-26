import Link from "next/link";
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
	Zap,
	Target,
	CheckCircle2,
	Brain,
	Lightbulb,
	FileText,
	MessageSquare,
	List,
	Clock,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
export default function PromptsPage() {
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
							<Zap className="mr-2 h-4 w-4" />
							Axiom Engine
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							15,000+ prompts that
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								drive action
							</span>
						</h1>

						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Every template is powered by tactical, practical prompts that turn overwhelming decisions into clear next steps. No fluff, no philosophy — just the exact questions you need to move forward.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" asChild>
								<Link href="/templates">
									Explore Templates
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/workspaces">View Workspaces</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* How Prompts Work */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							How Prompts Drive Progress
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Every prompt is designed to extract actionable insights and move you closer to your goal.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<Target className="h-6 w-6 text-primary" />
								</div>
								<CardTitle>Tactical Questions</CardTitle>
								<CardDescription>
									No vague "How do you feel?" prompts. Every question drives toward specific decisions and concrete next steps.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardHeader>
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<Brain className="h-6 w-6 text-primary" />
								</div>
								<CardTitle>Context-Aware</CardTitle>
								<CardDescription>
									Prompts adapt to your specific situation — wedding planning prompts are different from career change prompts.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardHeader>
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<CheckCircle2 className="h-6 w-6 text-primary" />
								</div>
								<CardTitle>Progress-Driven</CardTitle>
								<CardDescription>
									Each prompt builds on the last, creating momentum and ensuring you don't get stuck overthinking any single decision.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Types of Prompts */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Types of Action Prompts
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Different prompts for different stages of your journey.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
								<Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="font-semibold mb-2">Discovery</h3>
							<p className="text-sm text-muted-foreground">
								Uncover what you actually want and need from this life moment.
							</p>
						</Card>

						<Card className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
								<List className="h-8 w-8 text-green-600 dark:text-green-400" />
							</div>
							<h3 className="font-semibold mb-2">Planning</h3>
							<p className="text-sm text-muted-foreground">
								Break down complex decisions into manageable, actionable steps.
							</p>
						</Card>

						<Card className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
								<MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-400" />
							</div>
							<h3 className="font-semibold mb-2">Decision</h3>
							<p className="text-sm text-muted-foreground">
								Cut through analysis paralysis with focused decision frameworks.
							</p>
						</Card>

						<Card className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-4">
								<Clock className="h-8 w-8 text-orange-600 dark:text-orange-400" />
							</div>
							<h3 className="font-semibold mb-2">Execution</h3>
							<p className="text-sm text-muted-foreground">
								Turn plans into action with timeline and accountability prompts.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Integration with Articles */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								Prompts + Articles = Clarity
							</h2>
							<p className="text-lg text-muted-foreground">
								Every prompt is backed by relevant articles you can drag directly into your workspace. Get the context you need without losing momentum.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Contextual Articles</p>
										<p className="text-sm text-muted-foreground">Related articles appear as you work through prompts</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Drag & Drop</p>
										<p className="text-sm text-muted-foreground">Pull key insights directly into your prompt answers</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Split-Screen View</p>
										<p className="text-sm text-muted-foreground">See prompts and articles side-by-side in workspaces</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<Card className="p-6 space-y-4">
								<div className="flex items-center gap-2">
									<FileText className="h-4 w-4 text-primary" />
									<span className="text-sm font-medium">Split-Screen Workspace</span>
								</div>
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div className="space-y-2">
										<div className="font-medium">Action Prompts</div>
										<div className="space-y-1 text-muted-foreground">
											<div className="p-2 bg-muted rounded">What's your venue budget range?</div>
											<div className="p-2 bg-muted rounded">What's your guest count?</div>
											<div className="p-2 bg-muted rounded">When's your ideal date?</div>
										</div>
									</div>
									<div className="space-y-2">
										<div className="font-medium">Related Articles</div>
										<div className="space-y-1 text-muted-foreground">
											<div className="p-2 bg-primary/10 rounded">Venue Cost Breakdown</div>
											<div className="p-2 bg-primary/10 rounded">Guest List Strategy</div>
											<div className="p-2 bg-primary/10 rounded">Seasonal Pricing</div>
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Ready to turn decisions into action?
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Experience how 15,000+ tactical prompts can transform your approach to life's biggest moments.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<Link href="/templates">
								Start with Templates
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/workspaces">Explore Workspaces</Link>
						</Button>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}