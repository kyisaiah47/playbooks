"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { PageLayout } from "@/components/layout";
import {
	MessageSquare,
	ArrowUp,
	Reply,
	User,
	ExternalLink,
	Flag,
	ChevronDown,
	ChevronUp,
} from "lucide-react";

interface Comment {
	id: string;
	author: string;
	content: string;
	upvotes: number;
	isExpert: boolean;
	isHelpful: boolean;
	createdAt: string;
	replies: Comment[];
}

interface TemplateDiscussion {
	templateName: string;
	templateSlug: string;
	category: string;
	commentCount: number;
	comments: Comment[];
}

export default function TemplateDiscussionPage({
	params,
}: {
	params: { slug: string };
}) {
	const [sortBy, setSortBy] = useState<"helpful" | "recent" | "expert">("helpful");
	const [replyingTo, setReplyingTo] = useState<string | null>(null);
	const [votedComments, setVotedComments] = useState<Set<string>>(new Set());
	const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());

	// Mock data for template discussions
	const mockDiscussions: Record<string, TemplateDiscussion> = {
		"career-transition": {
			templateName: "Career Transition",
			templateSlug: "career-transition",
			category: "Career",
			commentCount: 23,
			comments: [
				{
					id: "1",
					author: "Sarah Martinez",
					content:
						"This guide helped me navigate my move from finance to tech. The networking prompts were especially useful. I'd add one thing: consider informational interviews 3-6 months BEFORE you're ready to apply. It gives you time to build relationships without the pressure of needing a job immediately.",
					upvotes: 34,
					isExpert: false,
					isHelpful: true,
					createdAt: "2025-10-20T14:30:00Z",
					replies: [
						{
							id: "1-1",
							author: "Michael Chen",
							content:
								"100% agree on the timing. I made the mistake of starting informational interviews while actively job hunting and it felt desperate. Starting earlier made a huge difference.",
							upvotes: 12,
							isExpert: false,
							isHelpful: false,
							createdAt: "2025-10-20T16:45:00Z",
							replies: [],
						},
					],
				},
				{
					id: "2",
					author: "Dr. Jennifer Park",
					content:
						"As a career coach who works with mid-career professionals, this is incredibly comprehensive. The only thing I'd add: don't underestimate the psychological adjustment period. Most people focus on skills and networking but ignore the identity shift. You've been 'a finance person' for years—becoming 'a tech person' takes mental work too.",
					upvotes: 28,
					isExpert: true,
					isHelpful: true,
					createdAt: "2025-10-19T10:15:00Z",
					replies: [
						{
							id: "2-1",
							author: "Alex Thompson",
							content:
								"This is so true. I felt like an imposter for months after my transition. Would love to see prompts specifically about identity and mindset.",
							upvotes: 8,
							isExpert: false,
							isHelpful: false,
							createdAt: "2025-10-19T12:30:00Z",
							replies: [],
						},
						{
							id: "2-2",
							author: "Dr. Jennifer Park",
							content:
								"Exactly, Alex. The imposter syndrome is real during transitions. I usually recommend: 1) Journal about what skills ARE transferable, 2) Find a community in your new field ASAP, 3) Give yourself 6 months before judging if you 'belong'.",
							upvotes: 15,
							isExpert: true,
							isHelpful: true,
							createdAt: "2025-10-19T14:00:00Z",
							replies: [],
						},
					],
				},
				{
					id: "3",
					author: "David Liu",
					content:
						"Used this guide when transitioning from teaching to corporate training. The financial runway calculation was a wake-up call—I thought I had 6 months saved but it was really only 3 when I factored in health insurance and moving costs. Started freelancing on the side first instead of a cold jump.",
					upvotes: 19,
					isExpert: false,
					isHelpful: true,
					createdAt: "2025-10-18T09:20:00Z",
					replies: [],
				},
				{
					id: "4",
					author: "Rachel Kim",
					content:
						"The transferable skills section is gold. I made a spreadsheet based on these prompts and realized I had way more relevant experience than I thought. Helped me reframe my resume completely.",
					upvotes: 14,
					isExpert: false,
					isHelpful: false,
					createdAt: "2025-10-17T16:45:00Z",
					replies: [],
				},
			],
		},
		"wedding-planning-comprehensive-guide": {
			templateName: "Wedding Planning",
			templateSlug: "wedding-planning-comprehensive-guide",
			category: "Life Events",
			commentCount: 18,
			comments: [
				{
					id: "5",
					author: "Emily Anderson",
					content:
						"As a wedding planner for 10+ years, this is impressively thorough. I'd add: negotiate with vendors 6+ months out. Prices increase closer to the date, and you have zero leverage last-minute. Also, the '20% buffer' budget rule here is perfect—weddings ALWAYS go over.",
					upvotes: 22,
					isExpert: true,
					isHelpful: true,
					createdAt: "2025-10-21T11:00:00Z",
					replies: [],
				},
				{
					id: "6",
					author: "James Foster",
					content:
						"The family dynamics prompts saved our sanity. My mom wanted to invite 50 extra people we'd never met. Having these questions helped us have that conversation objectively instead of emotionally.",
					upvotes: 16,
					isExpert: false,
					isHelpful: true,
					createdAt: "2025-10-20T13:30:00Z",
					replies: [],
				},
			],
		},
	};

	const discussion = mockDiscussions[params.slug];

	if (!discussion) {
		notFound();
	}

	const handleVote = (commentId: string) => {
		setVotedComments((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(commentId)) {
				newSet.delete(commentId);
			} else {
				newSet.add(commentId);
			}
			return newSet;
		});
	};

	const toggleReplies = (commentId: string) => {
		setExpandedReplies((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(commentId)) {
				newSet.delete(commentId);
			} else {
				newSet.add(commentId);
			}
			return newSet;
		});
	};

	const sortComments = (comments: Comment[]): Comment[] => {
		const sorted = [...comments];
		if (sortBy === "helpful") {
			return sorted.sort((a, b) => {
				if (a.isHelpful && !b.isHelpful) return -1;
				if (!a.isHelpful && b.isHelpful) return 1;
				return b.upvotes - a.upvotes;
			});
		} else if (sortBy === "expert") {
			return sorted.sort((a, b) => {
				if (a.isExpert && !b.isExpert) return -1;
				if (!a.isExpert && b.isExpert) return 1;
				return b.upvotes - a.upvotes;
			});
		} else {
			// recent
			return sorted.sort(
				(a, b) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
			);
		}
	};

	const renderComment = (comment: Comment, depth: number = 0) => {
		const hasVoted = votedComments.has(comment.id);
		const hasReplies = comment.replies.length > 0;
		const isExpanded = expandedReplies.has(comment.id);

		return (
			<div
				key={comment.id}
				className={depth > 0 ? "ml-8 border-l-2 border-muted pl-4" : ""}
			>
				<Card className="mb-4">
					<CardHeader>
						<div className="flex items-start gap-4">
							{/* Vote */}
							<button
								onClick={() => handleVote(comment.id)}
								className={`flex flex-col items-center gap-1 min-w-[50px] py-2 px-2 rounded-md transition-colors ${
									hasVoted
										? "bg-primary text-primary-foreground"
										: "bg-muted hover:bg-muted/80"
								}`}
							>
								<ArrowUp className="h-4 w-4" />
								<span className="font-bold text-sm">
									{comment.upvotes + (hasVoted ? 1 : 0)}
								</span>
							</button>

							{/* Content */}
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-2">
									<User className="h-4 w-4 text-muted-foreground" />
									<span className="font-medium">{comment.author}</span>
									{comment.isExpert && (
										<Badge
											variant="outline"
											className="bg-primary/10 text-primary text-xs"
										>
											Expert
										</Badge>
									)}
									{comment.isHelpful && (
										<Badge variant="outline" className="text-xs">
											Helpful
										</Badge>
									)}
									<span className="text-sm text-muted-foreground ml-auto">
										{new Date(comment.createdAt).toLocaleDateString()}
									</span>
								</div>

								<p className="text-sm leading-relaxed mb-4">{comment.content}</p>

								{/* Actions */}
								<div className="flex items-center gap-4">
									<button
										onClick={() =>
											setReplyingTo(replyingTo === comment.id ? null : comment.id)
										}
										className="text-sm text-muted-foreground hover:text-foreground flex items-center"
									>
										<Reply className="h-4 w-4 mr-1" />
										Reply
									</button>
									{hasReplies && (
										<button
											onClick={() => toggleReplies(comment.id)}
											className="text-sm text-muted-foreground hover:text-foreground flex items-center"
										>
											{isExpanded ? (
												<>
													<ChevronUp className="h-4 w-4 mr-1" />
													Hide {comment.replies.length} repl
													{comment.replies.length === 1 ? "y" : "ies"}
												</>
											) : (
												<>
													<ChevronDown className="h-4 w-4 mr-1" />
													Show {comment.replies.length} repl
													{comment.replies.length === 1 ? "y" : "ies"}
												</>
											)}
										</button>
									)}
									<button className="text-sm text-muted-foreground hover:text-foreground flex items-center ml-auto">
										<Flag className="h-4 w-4 mr-1" />
										Flag
									</button>
								</div>

								{/* Reply Form */}
								{replyingTo === comment.id && (
									<div className="mt-4 space-y-2">
										<Textarea
											placeholder="Write a reply..."
											rows={3}
											className="text-sm"
										/>
										<div className="flex gap-2">
											<Button size="sm">Post Reply</Button>
											<Button
												size="sm"
												variant="outline"
												onClick={() => setReplyingTo(null)}
											>
												Cancel
											</Button>
										</div>
									</div>
								)}
							</div>
						</div>
					</CardHeader>
				</Card>

				{/* Render replies */}
				{hasReplies && isExpanded && (
					<div className="mb-4">
						{comment.replies.map((reply) => renderComment(reply, depth + 1))}
					</div>
				)}
			</div>
		);
	};

	const sortedComments = sortComments(discussion.comments);

	return (
		<PageLayout>
			{/* Header */}
			<section className="py-16 border-b">
				<div className="container mx-auto max-w-4xl px-4">
					<Link
						href="/community/discussions"
						className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
					>
						← Back to discussions
					</Link>

					<div className="flex items-start justify-between mb-6">
						<div>
							<h1 className="text-3xl font-bold mb-2">{discussion.templateName}</h1>
							<div className="flex items-center gap-3">
								<Badge variant="outline">{discussion.category}</Badge>
								<span className="text-sm text-muted-foreground">
									<MessageSquare className="inline h-4 w-4 mr-1" />
									{discussion.commentCount} comments
								</span>
							</div>
						</div>

						<Link href={`/templates/${discussion.templateSlug}`}>
							<Button variant="outline">
								<ExternalLink className="mr-2 h-4 w-4" />
								View Template
							</Button>
						</Link>
					</div>

					<p className="text-muted-foreground">
						Share your experience using this guide. What worked? What would you add?
						Real stories make guides more valuable.
					</p>
				</div>
			</section>

			{/* New Comment */}
			<section className="py-8 bg-muted/30 border-b">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-lg font-semibold mb-4">Add a comment</h2>
					<Textarea
						placeholder="Share your experience with this guide..."
						rows={4}
						className="mb-3"
					/>
					<div className="flex gap-2">
						<Button>Post Comment</Button>
						<Button variant="outline">Preview</Button>
					</div>
					<p className="text-xs text-muted-foreground mt-2">
						Be kind and constructive. Speak from experience, not authority.
					</p>
				</div>
			</section>

			{/* Sort Controls */}
			<section className="py-6 border-b">
				<div className="container mx-auto max-w-4xl px-4">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">
							{discussion.commentCount} Comment
							{discussion.commentCount !== 1 ? "s" : ""}
						</h2>
						<select
							className="h-9 px-3 rounded-md border border-input bg-background text-sm"
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
						>
							<option value="helpful">Most Helpful</option>
							<option value="expert">Expert First</option>
							<option value="recent">Most Recent</option>
						</select>
					</div>
				</div>
			</section>

			{/* Comments */}
			<section className="py-8">
				<div className="container mx-auto max-w-4xl px-4">
					{sortedComments.map((comment) => renderComment(comment))}
				</div>
			</section>

			{/* Community Guidelines Footer */}
			<section className="py-8 bg-muted/30 border-t">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<p className="text-sm text-muted-foreground">
						Remember: Be kind and constructive. Speak from experience, not authority.
						<br />
						No diagnoses or personal attacks. Stack Overflow rules with therapy energy.
					</p>
				</div>
			</section>
		</PageLayout>
	);
}
