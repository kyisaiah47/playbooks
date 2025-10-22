"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageLayout } from "@/components/layout";
import {
	TrendingUp,
	Clock,
	CheckCircle2,
	Lightbulb,
	ArrowUp,
	Search,
	Plus,
} from "lucide-react";

type RequestStatus = "queued" | "processing" | "published";

interface GuideRequest {
	id: string;
	topic: string;
	description: string;
	category: string;
	votes: number;
	status: RequestStatus;
	createdAt: string;
	publishedTemplateSlug?: string;
}

export default function RequestsPage() {
	const [filter, setFilter] = useState<"all" | RequestStatus>("all");
	const [sortBy, setSortBy] = useState<"votes" | "recent">("votes");
	const [searchQuery, setSearchQuery] = useState("");
	const [showRequestForm, setShowRequestForm] = useState(false);
	const [votedRequests, setVotedRequests] = useState<Set<string>>(new Set());

	// Mock data
	const mockRequests: GuideRequest[] = [
		{
			id: "1",
			topic: "Starting a side business while working full-time",
			description:
				"How to balance a 9-5 job while building a business. Time management, legal considerations, when to quit the day job.",
			category: "Career",
			votes: 34,
			status: "queued",
			createdAt: "2025-10-20",
		},
		{
			id: "2",
			topic: "Navigating a layoff with young children",
			description:
				"Handling job loss while supporting a family. Financial planning, talking to kids, job search strategies.",
			category: "Life Events",
			votes: 28,
			status: "processing",
			createdAt: "2025-10-19",
		},
		{
			id: "3",
			topic: "Managing parents with dementia",
			description:
				"Caring for aging parents with cognitive decline. Medical decisions, finding care, managing stress.",
			category: "Health",
			votes: 21,
			status: "queued",
			createdAt: "2025-10-18",
		},
		{
			id: "4",
			topic: "Deciding whether to get a PhD",
			description:
				"Is a PhD worth it? Career prospects, financial considerations, alternative paths.",
			category: "Education",
			votes: 18,
			status: "queued",
			createdAt: "2025-10-17",
		},
		{
			id: "5",
			topic: "Recovering from burnout",
			description:
				"Steps to recover from severe work burnout. Setting boundaries, therapy, career changes.",
			category: "Health",
			votes: 15,
			status: "published",
			createdAt: "2025-10-15",
			publishedTemplateSlug: "recovering-from-burnout",
		},
		{
			id: "6",
			topic: "Moving to a new country for work",
			description:
				"International relocation guide. Visas, housing, cultural adjustment, finance setup.",
			category: "Life Events",
			votes: 12,
			status: "queued",
			createdAt: "2025-10-14",
		},
		{
			id: "7",
			topic: "Dealing with workplace discrimination",
			description:
				"How to handle discrimination at work. Documentation, reporting, legal options.",
			category: "Career",
			votes: 11,
			status: "processing",
			createdAt: "2025-10-13",
		},
		{
			id: "8",
			topic: "Planning for a gap year",
			description:
				"Taking time off between jobs or school. Budgeting, activities, making it valuable.",
			category: "Personal Growth",
			votes: 9,
			status: "queued",
			createdAt: "2025-10-12",
		},
	];

	const handleVote = (requestId: string) => {
		setVotedRequests((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(requestId)) {
				newSet.delete(requestId);
			} else {
				newSet.add(requestId);
			}
			return newSet;
		});
	};

	const filteredRequests = mockRequests
		.filter((req) => {
			if (filter !== "all" && req.status !== filter) return false;
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase();
				return (
					req.topic.toLowerCase().includes(query) ||
					req.description.toLowerCase().includes(query) ||
					req.category.toLowerCase().includes(query)
				);
			}
			return true;
		})
		.sort((a, b) => {
			if (sortBy === "votes") return b.votes - a.votes;
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		});

	const statusConfig = {
		queued: { label: "Queued", icon: Clock, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
		processing: { label: "In Progress", icon: TrendingUp, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
		published: { label: "Published", icon: CheckCircle2, color: "bg-green-500/10 text-green-600 dark:text-green-400" },
	};

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
							<Lightbulb className="mr-2 h-4 w-4" />
							{mockRequests.length} total requests
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Request a Guide
						</h1>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Don't see a guide for your situation? Request it. Upvote others' requests.
							<br />
							The most-voted get built first.
						</p>

						<Button
							size="lg"
							onClick={() => setShowRequestForm(!showRequestForm)}
							className="mt-4"
						>
							<Plus className="mr-2 h-5 w-5" />
							Submit New Request
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Request Form */}
			{showRequestForm && (
				<section className="py-8 border-y bg-muted/30">
					<div className="container mx-auto max-w-3xl px-4">
						<Card>
							<CardHeader>
								<CardTitle>Submit a Guide Request</CardTitle>
								<CardDescription>
									Tell us what life situation you need a guide for
								</CardDescription>
								<div className="space-y-4 mt-6">
									<div>
										<label className="text-sm font-medium mb-2 block">
											What do you need a guide for?
										</label>
										<Input placeholder="e.g., Starting a side business while working full-time" />
									</div>
									<div>
										<label className="text-sm font-medium mb-2 block">
											Description (optional)
										</label>
										<Textarea
											placeholder="Add more context about what you'd want this guide to cover..."
											rows={4}
										/>
									</div>
									<div>
										<label className="text-sm font-medium mb-2 block">Category</label>
										<select className="w-full h-10 px-3 rounded-md border border-input bg-background">
											<option>Career</option>
											<option>Relationships</option>
											<option>Health</option>
											<option>Finance</option>
											<option>Life Events</option>
											<option>Personal Growth</option>
											<option>Education</option>
										</select>
									</div>
									<div>
										<label className="text-sm font-medium mb-2 block">
											Email (optional - we'll notify you when it's ready)
										</label>
										<Input type="email" placeholder="your@email.com" />
									</div>
									<div className="flex gap-3 pt-2">
										<Button className="flex-1">Submit Request</Button>
										<Button
											variant="outline"
											onClick={() => setShowRequestForm(false)}
										>
											Cancel
										</Button>
									</div>
								</div>
							</CardHeader>
						</Card>
					</div>
				</section>
			)}

			{/* Filters and Search */}
			<section className="py-8 border-b">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
						{/* Search */}
						<div className="relative w-full md:w-96">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search requests..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10"
							/>
						</div>

						{/* Filters */}
						<div className="flex gap-2 w-full md:w-auto">
							<select
								className="h-10 px-3 rounded-md border border-input bg-background flex-1 md:flex-none"
								value={filter}
								onChange={(e) => setFilter(e.target.value as typeof filter)}
							>
								<option value="all">All Requests</option>
								<option value="queued">Queued</option>
								<option value="processing">In Progress</option>
								<option value="published">Published</option>
							</select>

							<select
								className="h-10 px-3 rounded-md border border-input bg-background flex-1 md:flex-none"
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
							>
								<option value="votes">Most Voted</option>
								<option value="recent">Most Recent</option>
							</select>
						</div>
					</div>

					<p className="text-sm text-muted-foreground mt-4">
						{filteredRequests.length} request{filteredRequests.length !== 1 ? "s" : ""}
					</p>
				</div>
			</section>

			{/* Requests List */}
			<section className="py-16">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="space-y-4">
						{filteredRequests.map((request) => {
							const StatusIcon = statusConfig[request.status].icon;
							const hasVoted = votedRequests.has(request.id);

							return (
								<Card
									key={request.id}
									className={`hover:border-primary transition-colors ${
										request.status === "published" ? "border-green-500/20" : ""
									}`}
								>
									<CardHeader>
										<div className="flex items-start gap-4">
											{/* Vote Button */}
											<button
												onClick={() => handleVote(request.id)}
												className={`flex flex-col items-center gap-1 min-w-[60px] py-2 px-3 rounded-md transition-colors ${
													hasVoted
														? "bg-primary text-primary-foreground"
														: "bg-muted hover:bg-muted/80"
												}`}
												disabled={request.status === "published"}
											>
												<ArrowUp className="h-5 w-5" />
												<span className="font-bold text-lg">
													{request.votes + (hasVoted ? 1 : 0)}
												</span>
											</button>

											{/* Content */}
											<div className="flex-1">
												<div className="flex items-start justify-between mb-2">
													<CardTitle className="text-lg">{request.topic}</CardTitle>
													<Badge
														variant="outline"
														className={statusConfig[request.status].color}
													>
														<StatusIcon className="mr-1 h-3 w-3" />
														{statusConfig[request.status].label}
													</Badge>
												</div>

												<CardDescription className="mb-3">
													{request.description}
												</CardDescription>

												<div className="flex items-center gap-3 text-sm text-muted-foreground">
													<Badge variant="outline">{request.category}</Badge>
													<span>Requested {new Date(request.createdAt).toLocaleDateString()}</span>
												</div>

												{request.status === "published" && request.publishedTemplateSlug && (
													<Link
														href={`/templates/${request.publishedTemplateSlug}`}
														className="inline-block mt-4"
													>
														<Button size="sm">
															View Published Guide →
														</Button>
													</Link>
												)}
											</div>
										</div>
									</CardHeader>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-16 bg-muted/30 border-y">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">How it works</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								1
							</div>
							<h3 className="font-semibold mb-2">Submit or Vote</h3>
							<p className="text-sm text-muted-foreground">
								Request a new guide or upvote existing requests
							</p>
						</div>
						<div className="text-center">
							<div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								2
							</div>
							<h3 className="font-semibold mb-2">We Build It</h3>
							<p className="text-sm text-muted-foreground">
								Top-voted requests get generated nightly with our AI engine
							</p>
						</div>
						<div className="text-center">
							<div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								3
							</div>
							<h3 className="font-semibold mb-2">You Get Notified</h3>
							<p className="text-sm text-muted-foreground">
								Receive an email when your requested guide is published
							</p>
						</div>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}
