"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Heart,
	Briefcase,
	GraduationCap,
	Baby,
	Search,
	Home,
	Zap,
	Grid3X3,
	List,
	Target,
	Dumbbell,
	School,
} from "lucide-react";
import { PageLayout } from "@/components/layout";

const categories = [
	{ id: "all", name: "All Templates", count: 7 },
	{ id: "life-events", name: "Life Events", count: 2 },
	{ id: "career", name: "Career & Education", count: 3 },
	{ id: "property", name: "Property & Finance", count: 1 },
	{ id: "health", name: "Health & Wellness", count: 1 },
];

const templates = [
	{
		id: "wedding-planning",
		title: "Wedding Planning",
		description:
			"Organize your perfect day with vendor management, guest tracking, budget planning, and timeline coordination",
		category: "life-events",
		icon: Heart,
		color: "bg-muted/50 border-border text-foreground",
		popular: true,
		features: [
			"Vendor Directory",
			"Guest Management",
			"Budget Tracker",
			"Task Timeline",
		],
		setupTime: "5 min",
	},
	{
		id: "academic-research",
		title: "Academic Research",
		description:
			"Comprehensive research management platform for academics, researchers, and students with literature review, data management, and collaboration tools",
		category: "career",
		icon: GraduationCap,
		color: "bg-muted/50 border-border text-foreground",
		popular: true,
		features: [
			"Literature Review",
			"Methodology Planning",
			"Data Management",
			"Writing Tracker",
		],
		setupTime: "4 min",
	},
	{
		id: "job-search",
		title: "Job Search",
		description:
			"Track applications, prepare for interviews, manage networking, and organize your career transition with comprehensive job search tools",
		category: "career",
		icon: Briefcase,
		color: "bg-muted/50 border-border text-foreground",
		popular: true,
		features: [
			"Application Tracker",
			"Interview Prep",
			"Network Management",
			"Salary Tracking",
		],
		setupTime: "7 min",
	},
	{
		id: "baby-planning",
		title: "Baby Planning",
		description:
			"Complete pregnancy and baby preparation with milestone tracking, gear checklists, name selection, and parenting resources",
		category: "life-events",
		icon: Baby,
		color: "bg-muted/50 border-border text-foreground",
		popular: true,
		features: [
			"Milestone Tracker",
			"Gear Checklist",
			"Name Tracker",
			"Healthcare Planning",
		],
		setupTime: "5 min",
	},
	{
		id: "college-planning",
		title: "College Planning",
		description:
			"Navigate college applications, financial planning, course selection, and academic preparation for higher education success",
		category: "career",
		icon: School,
		color: "bg-muted/50 border-border text-foreground",
		popular: false,
		features: [
			"Application Tracker",
			"Financial Planning",
			"Course Selection",
			"Scholarship Search",
		],
		setupTime: "6 min",
	},
	{
		id: "fitness-journey",
		title: "Fitness Journey",
		description:
			"Track workouts, nutrition, goals, and progress with comprehensive fitness planning and health monitoring tools",
		category: "health",
		icon: Dumbbell,
		color: "bg-muted/50 border-border text-foreground",
		popular: false,
		features: [
			"Workout Planner",
			"Nutrition Tracker",
			"Goal Setting",
			"Progress Photos",
		],
		setupTime: "4 min",
	},
	{
		id: "home-buying",
		title: "Home Buying",
		description:
			"Navigate the home buying process with property tracking, budget management, inspection checklists, and mortgage planning",
		category: "property",
		icon: Home,
		color: "bg-muted/50 border-border text-foreground",
		popular: false,
		features: [
			"Property Search",
			"Budget Tracker",
			"Inspection Checklist",
			"Mortgage Calculator",
		],
		setupTime: "8 min",
	},
];

export default function TemplatesPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const filteredTemplates = templates.filter((template) => {
		const matchesSearch =
			template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || template.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<PageLayout>
			<div className="container mx-auto max-w-7xl px-4 py-8">
				{/* Page Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold mb-2">Choose Your Template</h1>
					<p className="text-muted-foreground">
						Get started instantly with expertly designed templates for
						life&apos;s biggest moments.
					</p>
				</div>

				{/* Search and Filters */}
				<div className="flex flex-col lg:flex-row gap-4 mb-8">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search templates..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10"
						/>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center border rounded-md">
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setSelectedCategory(category.id)}
									className={`px-3 py-2 text-sm font-medium transition-colors ${
										selectedCategory === category.id
											? "bg-primary text-primary-foreground"
											: "hover:bg-muted"
									} ${category.id === categories[0].id ? "rounded-l-md" : ""} ${
										category.id === categories[categories.length - 1].id
											? "rounded-r-md"
											: ""
									}`}
								>
									{category.name}
									<span className="ml-1 text-xs opacity-70">
										({category.count})
									</span>
								</button>
							))}
						</div>

						<div className="flex items-center border rounded-md">
							<button
								onClick={() => setViewMode("grid")}
								className={`p-2 ${
									viewMode === "grid"
										? "bg-primary text-primary-foreground"
										: "hover:bg-muted"
								} rounded-l-md`}
							>
								<Grid3X3 className="h-4 w-4" />
							</button>
							<button
								onClick={() => setViewMode("list")}
								className={`p-2 ${
									viewMode === "list"
										? "bg-primary text-primary-foreground"
										: "hover:bg-muted"
								} rounded-r-md`}
							>
								<List className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				{/* Results count */}
				<div className="mb-6">
					<p className="text-sm text-muted-foreground">
						Showing {filteredTemplates.length} template
						{filteredTemplates.length !== 1 ? "s" : ""}
						{selectedCategory !== "all" &&
							` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
					</p>
				</div>

				{/* Templates Grid/List */}
				<div
					className={
						viewMode === "grid"
							? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
							: "space-y-4"
					}
				>
					{filteredTemplates.map((template) => {
						const Icon = template.icon;

						if (viewMode === "list") {
							return (
								<Card
									key={template.id}
									className="group hover:shadow-md transition-all duration-200"
								>
									<Link href={`/templates/${template.id}`}>
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div
													className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${template.color}`}
												>
													<Icon className="h-6 w-6" />
												</div>

												<div className="flex-1 min-w-0">
													<div className="flex items-center gap-2 mb-2">
														<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
															{template.title}
														</h3>
														{template.popular && (
															<Badge
																variant="secondary"
																className="text-xs"
															>
																Popular
															</Badge>
														)}
													</div>

													<p className="text-muted-foreground mb-3 line-clamp-2">
														{template.description}
													</p>

													<div className="flex items-center justify-between">
														<div className="flex flex-wrap gap-2">
															{template.features.slice(0, 2).map((feature) => (
																<Badge
																	key={feature}
																	variant="outline"
																	className="text-xs"
																>
																	{feature}
																</Badge>
															))}
															{template.features.length > 2 && (
																<span className="text-xs text-muted-foreground">
																	+{template.features.length - 2} more
																</span>
															)}
														</div>

														<div className="flex items-center text-sm text-muted-foreground">
															<Zap className="mr-1 h-3 w-3" />
															{template.setupTime} setup
														</div>
													</div>
												</div>
											</div>
										</CardContent>
									</Link>
								</Card>
							);
						}

						return (
							<Card
								key={template.id}
								className="group hover:shadow-md transition-all duration-200"
							>
								<Link href={`/templates/${template.id}`}>
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<div
												className={`w-10 h-10 rounded-lg flex items-center justify-center ${template.color}`}
											>
												<Icon className="h-5 w-5" />
											</div>
											{template.popular && (
												<Badge
													variant="secondary"
													className="text-xs"
												>
													Popular
												</Badge>
											)}
										</div>
										<CardTitle className="group-hover:text-primary transition-colors">
											{template.title}
										</CardTitle>
										<CardDescription className="line-clamp-3">
											{template.description}
										</CardDescription>
									</CardHeader>

									<CardContent>
										<div className="space-y-3">
											<div className="flex flex-wrap gap-1">
												{template.features.slice(0, 2).map((feature) => (
													<Badge
														key={feature}
														variant="outline"
														className="text-xs"
													>
														{feature}
													</Badge>
												))}
												{template.features.length > 2 && (
													<span className="text-xs text-muted-foreground">
														+{template.features.length - 2} more
													</span>
												)}
											</div>

											<div className="flex items-center text-sm text-muted-foreground">
												<Zap className="mr-1 h-3 w-3" />
												{template.setupTime} setup time
											</div>
										</div>
									</CardContent>
								</Link>
							</Card>
						);
					})}
				</div>

				{/* Empty State */}
				{filteredTemplates.length === 0 && (
					<div className="text-center py-12">
						<div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
							<Search className="h-6 w-6 text-muted-foreground" />
						</div>
						<h3 className="text-lg font-semibold mb-2">No templates found</h3>
						<p className="text-muted-foreground mb-4">
							Try adjusting your search or browse different categories.
						</p>
						<Button
							variant="outline"
							onClick={() => {
								setSearchTerm("");
								setSelectedCategory("all");
							}}
						>
							Clear filters
						</Button>
					</div>
				)}
			</div>
		</PageLayout>
	);
}
