"use client";

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
} from "lucide-react";
import { PageLayout } from "@/components/layout";

export default function LandingPage() {
	return (
		<PageLayout>

			{/* Hero Section */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Sparkles className="mr-2 h-4 w-4" />
							Skip the blank page
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Organize life&apos;s
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								biggest moments
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
							From planning projects to organizing life goals
							shouldn&apos;t start with a blank page. Get expertly crafted
							templates that guide you through every step.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
							<Button
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/templates">
									Start Free
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/templates/wedding-planning">
									<Play className="mr-2 h-4 w-4" />
									Try Demo
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Key Value Props */}
			<section className="py-24 border-t bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-center">
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
									<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
										<CheckCircle2 className="h-5 w-5 text-primary" />
									</div>
									<span className="text-lg">
										Complete guided setup for every template
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
										<CheckCircle2 className="h-5 w-5 text-primary" />
									</div>
									<span className="text-lg">
										Expert insights and best practices included
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
										<CheckCircle2 className="h-5 w-5 text-primary" />
									</div>
									<span className="text-lg">
										Start free, upgrade for full access to all templates
									</span>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<div className="grid grid-cols-2 gap-4">
								<Card className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
										<Heart className="h-6 w-6 text-primary" />
									</div>
									<div className="font-semibold">Personal Life</div>
									<div className="text-sm text-muted-foreground">
										25+ templates
									</div>
								</Card>

								<Card className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
										<Briefcase className="h-6 w-6 text-primary" />
									</div>
									<div className="font-semibold">Career & Work</div>
									<div className="text-sm text-muted-foreground">
										30+ templates
									</div>
								</Card>

								<Card className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
										<Home className="h-6 w-6 text-primary" />
									</div>
									<div className="font-semibold">Property & Moving</div>
									<div className="text-sm text-muted-foreground">
										20+ templates
									</div>
								</Card>

								<Card className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
										<Target className="h-6 w-6 text-primary" />
									</div>
									<div className="font-semibold">Business & Finance</div>
									<div className="text-sm text-muted-foreground">
										25+ templates
									</div>
								</Card>
							</div>

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

			{/* Guided Setup Focus */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Timer className="mr-2 h-4 w-4" />
							Guided Setup Process
						</Badge>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Every template comes with
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								step-by-step guidance
							</span>
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							No more staring at blank pages. Our intelligent setup wizards ask
							the right questions and build your personalized workspace in
							minutes.
						</p>

						<div className="grid md:grid-cols-3 gap-8 pt-8">
							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
									<MessageSquare className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">Answer Questions</h3>
								<p className="text-muted-foreground">
									Our wizard asks targeted questions about your specific
									situation and goals.
								</p>
							</div>

							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
									<Sparkles className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">Get Personalized</h3>
								<p className="text-muted-foreground">
									Your template is customized with relevant sections and
									pre-filled with your details.
								</p>
							</div>

							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
									<Rocket className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">Start Organizing</h3>
								<p className="text-muted-foreground">
									Jump straight into managing your project with expert guidance
									at every step.
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
										<span>Basic setup wizard</span>
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
									asChild
								>
									<Link href="/templates">Get Started Free</Link>
								</Button>
							</CardContent>
						</Card>

						{/* Plus Tier */}
						<Card className="relative bg-background border-2 border-primary shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<Badge className="px-3 py-1">Most Popular</Badge>
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
								<Link href="/login">Start Plus Trial</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
