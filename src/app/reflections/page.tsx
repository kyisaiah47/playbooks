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
	Moon,
	Sunrise,
	Focus,
	Calendar,
	Maximize2,
	Eye,
	Pause,
	RotateCcw,
	Layers,
} from "lucide-react";
import { PageLayout } from "@/components/layout";

export default function ReflectionsPage() {
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
							<Moon className="mr-2 h-4 w-4" />
							Daily Feature
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							A moment to
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								pause & process
							</span>
						</h1>

						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							While Templata focuses on action, sometimes you need space to think. Our daily reflection mode offers a distraction-free environment to process your journey.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" asChild>
								<Link href="/templates">
									Try Templates First
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

			{/* Not the Main Feature */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-6 max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold">
							Action First, Reflection Second
						</h2>
						<p className="text-lg text-muted-foreground">
							We're not a meditation app. Templata is built for getting things done. But we recognize that life's biggest moments deserve thoughtful processing too.
						</p>
						<div className="grid md:grid-cols-2 gap-8 mt-12">
							<Card className="text-left">
								<CardHeader>
									<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
										<Layers className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>Primary: Action Templates</CardTitle>
									<CardDescription>
										15,000+ tactical prompts drive decision-making and progress. This is where you spend 90% of your time.
									</CardDescription>
								</CardHeader>
							</Card>

							<Card className="text-left">
								<CardHeader>
									<div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
										<Pause className="h-6 w-6 text-secondary" />
									</div>
									<CardTitle>Secondary: Reflection Mode</CardTitle>
									<CardDescription>
										A handful of deeper prompts per template, offered daily in an immersive environment for processing.
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* How Reflection Mode Works */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							How Reflection Mode Works
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							A completely different experience designed for depth, not productivity.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<Maximize2 className="h-6 w-6 text-primary" />
								</div>
								<CardTitle>Fullscreen Immersion</CardTitle>
								<CardDescription>
									All sidebars, navigation, and distractions disappear. Just you, one prompt, and space to think.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardHeader>
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<RotateCcw className="h-6 w-6 text-primary" />
								</div>
								<CardTitle>Daily Rotation</CardTitle>
								<CardDescription>
									Each template has a handful of reflection prompts that rotate daily, giving you fresh perspectives.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardHeader>
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<Focus className="h-6 w-6 text-primary" />
								</div>
								<CardTitle>Template-Specific</CardTitle>
								<CardDescription>
									Reflection prompts are contextual to your specific life moment — wedding, career change, home buying.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* The Reflection Experience */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								A Different Kind of Workspace
							</h2>
							<p className="text-lg text-muted-foreground">
								While action templates are structured and guided, reflection mode gives you freedom to explore your thoughts without constraints.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Distraction-Free</p>
										<p className="text-sm text-muted-foreground">No split screens, sidebars, or productivity features</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Daily Rhythm</p>
										<p className="text-sm text-muted-foreground">One prompt per day, creating a gentle reflection habit</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Focus className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Open-Ended</p>
										<p className="text-sm text-muted-foreground">Large workspace for free-form thinking and processing</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<Card className="p-8 bg-gradient-to-br from-muted/50 to-muted border-2 border-dashed">
								<div className="text-center space-y-6">
									<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
										<Moon className="h-8 w-8 text-primary" />
									</div>
									<div className="space-y-4">
										<h3 className="text-lg font-semibold">Today's Reflection</h3>
										<p className="text-muted-foreground italic">
											"What aspects of your wedding planning journey have surprised you the most, and what do they reveal about your values as a couple?"
										</p>
									</div>
									<div className="h-32 bg-background rounded border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
										<span className="text-muted-foreground/60">Your thoughts here...</span>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Why Add Reflection */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Why Balance Action with Reflection
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Life's biggest moments aren't just logistical challenges — they're emotional journeys too.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
								<Sunrise className="h-8 w-8 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="font-semibold mb-4">Process the Journey</h3>
							<p className="text-muted-foreground">
								Planning a wedding isn't just about logistics — it's about processing what marriage means to you. Reflection helps you engage with the deeper significance.
							</p>
						</Card>

						<Card className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
								<Focus className="h-8 w-8 text-green-600 dark:text-green-400" />
							</div>
							<h3 className="font-semibold mb-4">Prevent Overwhelm</h3>
							<p className="text-muted-foreground">
								Taking time to pause and reflect prevents the rushing and decision fatigue that can make big life moments feel overwhelming instead of meaningful.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Start with action, add reflection later
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Templata's core strength is tactical guidance. Once you're making progress, reflection mode adds depth to your journey.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<Link href="/templates">
								Begin with Templates
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/prompts">View Action Prompts</Link>
						</Button>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}