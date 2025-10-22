"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/layout";
import {
	MessageSquare,
	Lightbulb,
	Users,
	TrendingUp,
	ArrowRight,
	CheckCircle2,
} from "lucide-react";

export default function CommunityPage() {
	const stats = {
		discussions: 342,
		requests: 127,
		experts: 8,
		activeToday: 56,
	};

	const recentDiscussions = [
		{
			template: "Career Transition",
			slug: "career-transition",
			comments: 23,
			lastActivity: "2 hours ago",
			preview: "This guide helped me navigate my move from finance to tech...",
		},
		{
			template: "Wedding Planning",
			slug: "wedding-planning-comprehensive-guide",
			comments: 18,
			lastActivity: "5 hours ago",
			preview: "Great checklist! I'd also add: negotiate with vendors early...",
		},
		{
			template: "Chronic Illness Management",
			slug: "chronic-illness-management",
			comments: 31,
			lastActivity: "1 day ago",
			preview: "As someone with lupus, the medical decision prompts were invaluable...",
		},
	];

	const topRequests = [
		{
			topic: "Starting a side business while working full-time",
			votes: 34,
			category: "Career",
		},
		{
			topic: "Navigating a layoff with young children",
			votes: 28,
			category: "Life Events",
		},
		{
			topic: "Managing parents with dementia",
			votes: 21,
			category: "Health",
		},
	];

	return (
		<PageLayout>
			{/* Hero Section */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<motion.div
						className="text-center space-y-6 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Badge variant="outline" className="px-4 py-2">
							<Users className="mr-2 h-4 w-4" />
							{stats.activeToday} active today
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Community
						</h1>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							The guides get people in. The community keeps them coming back.
							<br />
							Discuss guides, request new ones, and learn from others' experiences.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
							<Button asChild size="lg">
								<Link href="/community/discussions">
									<MessageSquare className="mr-2 h-5 w-5" />
									Browse Discussions
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/community/requests">
									<Lightbulb className="mr-2 h-5 w-5" />
									Request a Guide
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Community Principles */}
			<section className="py-16 bg-muted/30 border-y">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">How community works</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Stack Overflow vibes × Reddit upvoting × Notion's calm tone
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<MessageSquare className="h-8 w-8 mb-4 text-primary" />
								<CardTitle>Discuss guides</CardTitle>
								<CardDescription>
									Share your experience using a guide. What worked? What would you add?
									Real stories make guides more valuable.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardHeader>
								<Lightbulb className="h-8 w-8 mb-4 text-primary" />
								<CardTitle>Request new guides</CardTitle>
								<CardDescription>
									Don't see a guide for your situation? Request it. Upvote others'
									requests. The most-voted get built first.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CheckCircle2 className="h-8 w-8 mb-4 text-primary" />
								<CardTitle>Expert insights</CardTitle>
								<CardDescription>
									Verified experts (therapists, coaches, advisors) weigh in with
									high-signal comments that surface automatically.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Stats Grid */}
			<section className="py-16">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-4xl font-bold text-primary mb-2">
								{stats.discussions}
							</div>
							<div className="text-sm text-muted-foreground">Active Discussions</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-primary mb-2">
								{stats.requests}
							</div>
							<div className="text-sm text-muted-foreground">Guide Requests</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-primary mb-2">
								{stats.experts}
							</div>
							<div className="text-sm text-muted-foreground">Verified Experts</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-primary mb-2">
								{stats.activeToday}
							</div>
							<div className="text-sm text-muted-foreground">Active Today</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recent Discussions */}
			<section className="py-16 border-t">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold">Recent Discussions</h2>
						<Link
							href="/community/discussions"
							className="text-sm text-primary hover:underline flex items-center"
						>
							View all <ArrowRight className="ml-1 h-4 w-4" />
						</Link>
					</div>

					<div className="space-y-4">
						{recentDiscussions.map((discussion) => (
							<Link
								key={discussion.slug}
								href={`/community/templates/${discussion.slug}`}
								className="block"
							>
								<Card className="hover:border-primary transition-colors">
									<CardHeader>
										<div className="flex items-start justify-between">
											<div className="flex-1">
												<CardTitle className="text-lg mb-2">
													{discussion.template}
												</CardTitle>
												<CardDescription className="line-clamp-2">
													{discussion.preview}
												</CardDescription>
											</div>
										</div>
										<div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
											<span className="flex items-center">
												<MessageSquare className="mr-1 h-4 w-4" />
												{discussion.comments} comments
											</span>
											<span>{discussion.lastActivity}</span>
										</div>
									</CardHeader>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Top Requests */}
			<section className="py-16 bg-muted/30 border-y">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold">Most Requested Guides</h2>
						<Link
							href="/community/requests"
							className="text-sm text-primary hover:underline flex items-center"
						>
							View all <ArrowRight className="ml-1 h-4 w-4" />
						</Link>
					</div>

					<div className="space-y-4">
						{topRequests.map((request, index) => (
							<Card key={index} className="hover:border-primary transition-colors">
								<CardHeader>
									<div className="flex items-start justify-between">
										<div className="flex-1">
											<CardTitle className="text-lg mb-2">{request.topic}</CardTitle>
											<Badge variant="outline">{request.category}</Badge>
										</div>
										<div className="flex items-center gap-2 text-primary">
											<TrendingUp className="h-5 w-5" />
											<span className="font-bold text-lg">{request.votes}</span>
										</div>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Community Guidelines */}
			<section className="py-16">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">Community Guidelines</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card className="border-green-500/20 bg-green-500/5">
							<CardHeader>
								<CardTitle className="text-green-600 dark:text-green-400">
									✓ Do
								</CardTitle>
								<ul className="space-y-2 text-sm text-muted-foreground mt-4">
									<li>• Be kind and constructive</li>
									<li>• Speak from personal experience</li>
									<li>• Share what actually helped you</li>
									<li>• Upvote helpful comments</li>
									<li>• Suggest improvements to guides</li>
								</ul>
							</CardHeader>
						</Card>

						<Card className="border-red-500/20 bg-red-500/5">
							<CardHeader>
								<CardTitle className="text-red-600 dark:text-red-400">
									✗ Don't
								</CardTitle>
								<ul className="space-y-2 text-sm text-muted-foreground mt-4">
									<li>• Give medical/legal diagnoses</li>
									<li>• Make personal attacks</li>
									<li>• Post spam or self-promotion</li>
									<li>• Share private information</li>
									<li>• Be performative or preachy</li>
								</ul>
							</CardHeader>
						</Card>
					</div>
					<p className="text-center text-sm text-muted-foreground mt-8">
						Think: Stack Overflow rules with therapy energy
					</p>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24">
				<div className="container mx-auto max-w-3xl px-4 text-center">
					<h2 className="text-3xl font-bold mb-4">Join the conversation</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Every community action makes a guide better. Discuss, request, improve.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild size="lg">
							<Link href="/community/discussions">Browse Discussions</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/community/requests">Request a Guide</Link>
						</Button>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}
