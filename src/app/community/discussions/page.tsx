"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PageLayout } from "@/components/layout";
import {
	MessageSquare,
	TrendingUp,
	Clock,
	Search,
	User,
	ArrowRight,
} from "lucide-react";

interface Discussion {
	templateName: string;
	templateSlug: string;
	category: string;
	commentCount: number;
	lastActivity: string;
	recentComment: {
		author: string;
		preview: string;
		isExpert: boolean;
	};
}

export default function DiscussionsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const [sortBy, setSortBy] = useState<"activity" | "comments">("activity");

	// Mock discussions data
	const mockDiscussions: Discussion[] = [
		{
			templateName: "Career Transition",
			templateSlug: "career-transition",
			category: "Career",
			commentCount: 23,
			lastActivity: "2 hours ago",
			recentComment: {
				author: "Sarah M.",
				preview:
					"This guide helped me navigate my move from finance to tech. The networking prompts were especially useful...",
				isExpert: false,
			},
		},
		{
			templateName: "Wedding Planning",
			templateSlug: "wedding-planning-comprehensive-guide",
			category: "Life Events",
			commentCount: 18,
			lastActivity: "5 hours ago",
			recentComment: {
				author: "Dr. Emily Chen",
				preview:
					"As a wedding planner, I'd add: negotiate with vendors 6+ months out. Prices increase closer to the date...",
				isExpert: true,
			},
		},
		{
			templateName: "Chronic Illness Management",
			templateSlug: "chronic-illness-management",
			category: "Health",
			commentCount: 31,
			lastActivity: "1 day ago",
			recentComment: {
				author: "Michael R.",
				preview:
					"Living with lupus, the medical decision prompts were invaluable. I now ask my doctors way better questions...",
				isExpert: false,
			},
		},
		{
			templateName: "Home Buying Process",
			templateSlug: "home-buying-process",
			category: "Finance",
			commentCount: 15,
			lastActivity: "1 day ago",
			recentComment: {
				author: "Jennifer K.",
				preview:
					"The inspection checklist saved us from a terrible purchase. Found foundation issues the seller tried to hide...",
				isExpert: false,
			},
		},
		{
			templateName: "Starting a Business",
			templateSlug: "starting-a-business",
			category: "Career",
			commentCount: 27,
			lastActivity: "2 days ago",
			recentComment: {
				author: "David Park",
				preview:
					"3 startups later, this guide covers 90% of what I wish I knew. Only thing missing: co-founder equity splits...",
				isExpert: true,
			},
		},
		{
			templateName: "Relationship Breakup Recovery",
			templateSlug: "relationship-breakup-recovery",
			category: "Relationships",
			commentCount: 42,
			lastActivity: "2 days ago",
			recentComment: {
				author: "Alex T.",
				preview:
					"Going through this now. The 'no contact' prompts are hard but necessary. Day 14 and feeling clearer...",
				isExpert: false,
			},
		},
		{
			templateName: "Graduate School Decision",
			templateSlug: "graduate-school-decision",
			category: "Education",
			commentCount: 19,
			lastActivity: "3 days ago",
			recentComment: {
				author: "Prof. James Liu",
				preview:
					"As a PhD advisor, I tell students: only pursue grad school if you can't NOT do it. The ROI question here is crucial...",
				isExpert: true,
			},
		},
		{
			templateName: "Mental Health Crisis",
			templateSlug: "mental-health-crisis",
			category: "Health",
			commentCount: 38,
			lastActivity: "3 days ago",
			recentComment: {
				author: "Rachel S.",
				preview:
					"This guide gave me structure when I couldn't think straight. The crisis hotline numbers at the top were a lifesaver...",
				isExpert: false,
			},
		},
	];

	const categories = Array.from(new Set(mockDiscussions.map((d) => d.category))).sort();

	const filteredDiscussions = mockDiscussions
		.filter((discussion) => {
			if (categoryFilter !== "all" && discussion.category !== categoryFilter) {
				return false;
			}
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase();
				return (
					discussion.templateName.toLowerCase().includes(query) ||
					discussion.category.toLowerCase().includes(query) ||
					discussion.recentComment.preview.toLowerCase().includes(query)
				);
			}
			return true;
		})
		.sort((a, b) => {
			if (sortBy === "comments") {
				return b.commentCount - a.commentCount;
			}
			// For activity, just use the order as-is (mock data already sorted by recent)
			return 0;
		});

	return (
		<PageLayout>
			{/* Hero */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<motion.div
						className="text-center space-y-6 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Badge variant="outline" className="px-4 py-2">
							<MessageSquare className="mr-2 h-4 w-4" />
							{mockDiscussions.length} active discussions
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Community Discussions
						</h1>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Real experiences from people using guides. What worked, what they'd add,
							<br />
							and insights from verified experts.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Filters */}
			<section className="py-8 border-y bg-muted/30">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
						{/* Search */}
						<div className="relative w-full md:w-96">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search discussions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10"
							/>
						</div>

						{/* Filters */}
						<div className="flex gap-2 w-full md:w-auto">
							<select
								className="h-10 px-3 rounded-md border border-input bg-background flex-1 md:flex-none"
								value={categoryFilter}
								onChange={(e) => setCategoryFilter(e.target.value)}
							>
								<option value="all">All Categories</option>
								{categories.map((cat) => (
									<option key={cat} value={cat}>
										{cat}
									</option>
								))}
							</select>

							<select
								className="h-10 px-3 rounded-md border border-input bg-background flex-1 md:flex-none"
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
							>
								<option value="activity">Recent Activity</option>
								<option value="comments">Most Comments</option>
							</select>
						</div>
					</div>

					<p className="text-sm text-muted-foreground mt-4">
						{filteredDiscussions.length} discussion
						{filteredDiscussions.length !== 1 ? "s" : ""}
					</p>
				</div>
			</section>

			{/* Discussions List */}
			<section className="py-16">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="space-y-4">
						{filteredDiscussions.map((discussion) => (
							<Link
								key={discussion.templateSlug}
								href={`/community/templates/${discussion.templateSlug}`}
								className="block"
							>
								<Card className="hover:border-primary transition-colors">
									<CardHeader>
										<div className="flex items-start justify-between mb-2">
											<div className="flex-1">
												<CardTitle className="text-lg mb-1">
													{discussion.templateName}
												</CardTitle>
												<Badge variant="outline" className="mb-3">
													{discussion.category}
												</Badge>
											</div>
										</div>

										{/* Recent Comment Preview */}
										<div className="bg-muted/50 rounded-md p-4 mb-3">
											<div className="flex items-center gap-2 mb-2">
												<User className="h-4 w-4 text-muted-foreground" />
												<span className="text-sm font-medium">
													{discussion.recentComment.author}
												</span>
												{discussion.recentComment.isExpert && (
													<Badge
														variant="outline"
														className="bg-primary/10 text-primary text-xs"
													>
														Expert
													</Badge>
												)}
											</div>
											<CardDescription className="line-clamp-2">
												{discussion.recentComment.preview}
											</CardDescription>
										</div>

										{/* Stats */}
										<div className="flex items-center gap-4 text-sm text-muted-foreground">
											<span className="flex items-center">
												<MessageSquare className="mr-1 h-4 w-4" />
												{discussion.commentCount} comments
											</span>
											<span className="flex items-center">
												<Clock className="mr-1 h-4 w-4" />
												{discussion.lastActivity}
											</span>
											<span className="flex items-center ml-auto text-primary">
												View discussion
												<ArrowRight className="ml-1 h-4 w-4" />
											</span>
										</div>
									</CardHeader>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Why Discussions Matter */}
			<section className="py-16 bg-muted/30 border-y">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">
						Why community discussions matter
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<TrendingUp className="h-8 w-8 mx-auto mb-4 text-primary" />
							<h3 className="font-semibold mb-2">Continuous improvement</h3>
							<p className="text-sm text-muted-foreground">
								Community spots gaps and outdated info, keeping guides current
							</p>
						</div>
						<div className="text-center">
							<User className="h-8 w-8 mx-auto mb-4 text-primary" />
							<h3 className="font-semibold mb-2">Real stories</h3>
							<p className="text-sm text-muted-foreground">
								Lived experiences make guides more valuable than theory alone
							</p>
						</div>
						<div className="text-center">
							<MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
							<h3 className="font-semibold mb-2">Expert insights</h3>
							<p className="text-sm text-muted-foreground">
								Verified experts add nuance and professional perspective
							</p>
						</div>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}
