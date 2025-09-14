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

				{/* Modern Search and Filters */}
				<div className="mb-12">
					{/* Search Bar */}
					<div className="relative max-w-2xl mx-auto mb-8">
						<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
						<Input
							placeholder="Search templates by name, category, or use case..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-12 pr-4 h-14 text-lg bg-muted/30 border-2 border-transparent focus:border-primary focus:bg-background transition-all duration-200 rounded-xl"
						/>
					</div>

					{/* Category Pills */}
					<div className="flex flex-wrap items-center justify-center gap-3">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
									selectedCategory === category.id
										? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
										: "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
								}`}
							>
								<span>{category.name}</span>
								<Badge variant={selectedCategory === category.id ? "secondary" : "outline"} className="text-xs bg-background/20">
									{category.count}
								</Badge>
							</button>
						))}
					</div>

					{/* View Mode Toggle - Moved to bottom right */}
					<div className="flex justify-end mt-6">
						<div className="flex items-center bg-muted/30 rounded-lg p-1">
							<button
								onClick={() => setViewMode("grid")}
								className={`px-3 py-2 rounded-md transition-all ${
									viewMode === "grid"
										? "bg-background shadow-sm text-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								<Grid3X3 className="h-4 w-4" />
							</button>
							<button
								onClick={() => setViewMode("list")}
								className={`px-3 py-2 rounded-md transition-all ${
									viewMode === "list"
										? "bg-background shadow-sm text-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								<List className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				{/* Category-Cluster Layout */}
				{selectedCategory === "all" ? (
					<div className="space-y-12">
						{/* Featured Templates Section */}
						<div>
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-2xl font-bold">Featured Templates</h2>
								<p className="text-sm text-muted-foreground">Most popular choices</p>
							</div>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{displayTemplates
									.filter(template => template.popular)
									.slice(0, 6)
									.map((template) => {
										const Icon = template.icon;
										return (
											<Card
												key={template.id}
												className="group hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-primary/5 to-background border-primary/20"
											>
												<Link href={template.url}>
													<CardHeader>
														<div className="flex items-center justify-between mb-2">
															<Icon className="h-6 w-6 text-primary" />
															<Badge variant="secondary" className="text-xs">
																Featured
															</Badge>
														</div>
														<CardTitle className="group-hover:text-primary transition-colors">
															{template.name}
														</CardTitle>
														<CardDescription className="line-clamp-3">
															{template.description}
														</CardDescription>
													</CardHeader>
													<CardContent>
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
													</CardContent>
												</Link>
											</Card>
										);
									})}
							</div>
						</div>

						{/* Category Sections */}
						{categories.slice(1).map((category, index) => {
							const categoryTemplates = displayTemplates.filter(
								template => template.category === category.name
							);

							if (categoryTemplates.length === 0) return null;

							return (
								<div
									key={category.id}
									className={`relative rounded-2xl p-8 ${
										index % 2 === 0 ? 'bg-muted/20' : 'bg-background'
									}`}
								>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-xl font-semibold">{category.name}</h2>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<span>{categoryTemplates.length} templates</span>
											<Button
												variant="ghost"
												size="sm"
												onClick={() => setSelectedCategory(category.id)}
												className="text-xs"
											>
												View all →
											</Button>
										</div>
									</div>

									{/* Horizontal scroll for categories */}
									<div
										className="flex gap-4 overflow-x-auto pb-2"
										style={{
											scrollbarWidth: 'none',
											msOverflowStyle: 'none'
										}}
									>
										{categoryTemplates.slice(0, 6).map((template) => {
											const Icon = template.icon;
											return (
												<Card
													key={template.id}
													className="group hover:shadow-md transition-all duration-200 min-w-[280px] flex-shrink-0"
												>
													<Link href={template.url}>
														<CardHeader className="pb-3">
															<div className="flex items-center justify-between mb-2">
																<Icon className="h-5 w-5" />
																{template.popular && (
																	<Badge variant="secondary" className="text-xs">
																		Popular
																	</Badge>
																)}
															</div>
															<CardTitle className="group-hover:text-primary transition-colors text-base">
																{template.name}
															</CardTitle>
														</CardHeader>
														<CardContent className="pt-0">
															<p className="text-sm text-muted-foreground line-clamp-2 mb-3">
																{template.description}
															</p>
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
															</div>
														</CardContent>
													</Link>
												</Card>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<>
						{/* Results count for filtered view */}
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
					</>
				)}

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
