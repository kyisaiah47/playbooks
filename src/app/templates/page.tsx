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
	Search,
	Grid3X3,
	List,
	Heart,
	Zap,
	MoveRight,
	FileText,
	Home,
	Briefcase,
	Target,
	Baby,
	Rocket,
	GraduationCap,
	BookOpen,
	Dumbbell,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { templateRegistry, getAllCategories } from "@/registry/templates";

// Generate categories dynamically from template registry
const allCategories = getAllCategories().map(category => ({
	id: category.toLowerCase().replace(/ /g, '-'),
	name: category,
	count: templateRegistry.filter(t => t.category === category).length
}));

const categories = [
	{ id: "all", name: "All Templates", count: templateRegistry.length },
	...allCategories
];

// Featured templates data
const featuredTemplate = {
	logo: "/shift.svg",
	company: "Most Popular",
	tags: "LIFE PLANNING / RELATIONSHIP",
	title: "Complete Wedding Planning Guide",
	subtitle: "From engagement to honeymoon.",
	image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
	link: "/wedding-planning/app",
};

const additionalFeaturedTemplates = [
	{
		logo: "/shift.svg",
		company: "Real Estate",
		tags: "PROPERTY / INVESTMENT",
		title: "Home Buying Checklist",
		subtitle: "Navigate your first home purchase.",
		image: "",
		link: "/home-buying/app",
	},
	{
		logo: "/shift.svg",
		company: "Career",
		tags: "PROFESSIONAL / GROWTH",
		title: "Job Search Strategy",
		subtitle: "Land your dream position.",
		image: "",
		link: "/job-search/app",
	},
];

// Map each template to unique Lucide icons
const getTemplateIcon = (template: { id: string }) => {
	switch (template.id) {
		case 'wedding-planning': return Heart;
		case 'home-buying': return Home;
		case 'baby-planning': return Baby;
		case 'job-search': return Briefcase;
		case 'business-launch': return Rocket;
		case 'college-planning': return GraduationCap;
		case 'academic-research': return BookOpen;
		case 'fitness-journey': return Dumbbell;
		default: return Target;
	}
};

// Use template registry for display (add features for display)
const displayTemplates = templateRegistry.map(template => ({
	...template,
	features: template.comingSoon ? ["Coming Soon"] : [
		"Expert Guidance",
		"Reflection Prompts", 
		"Resource Library",
		"Step-by-Step Process"
	],
	setupTime: "5 min",
	icon: getTemplateIcon(template)
}));

export default function TemplatesPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const filteredTemplates = displayTemplates.filter((template) => {
		const matchesSearch =
			template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || template.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<PageLayout>
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<FileText className="mr-2 h-4 w-4" />
							Life Templates
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Choose Your Template
						</h1>

						<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
							Get started instantly with expertly designed templates for life&apos;s biggest moments.
						</p>
					</div>
				</div>
			</section>

			<div className="container mx-auto max-w-7xl px-4 pb-8">
				{/* Page Header */}
				<div className="mb-8">
					<h2 className="text-2xl font-semibold mb-2">All Templates</h2>
					<p className="text-muted-foreground">
						Browse our complete collection of expertly designed templates.
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
									<Link href={template.url}>
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<Icon className="h-8 w-8 flex-shrink-0" />

												<div className="flex-1 min-w-0">
													<div className="flex items-center gap-2 mb-2">
														<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
															{template.name}
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
														<div className="flex flex-wrap gap-2 mt-3">
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
								<Link href={template.url}>
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<Icon className="h-6 w-6" />
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
											{template.name}
										</CardTitle>
										<CardDescription className="line-clamp-3">
											{template.description}
										</CardDescription>
									</CardHeader>

									<CardContent>
										<div className="space-y-3">
											<div className="flex flex-wrap gap-1 mt-3">
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
