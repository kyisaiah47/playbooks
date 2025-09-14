"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Search,
	FileText,
	Zap,
	Sparkles,
	Command,
	ArrowRight
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { CommandPalette } from "@/components/command-palette";
import { templateRegistry, getAllCategories } from "@/registry/templates";


export default function TemplatesPage() {
	const [isCommandOpen, setIsCommandOpen] = useState(false);

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
							Search-First Templates
						</h1>

						<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
							Skip the browsing. Find exactly what you need with our smart search interface.
						</p>

						{/* Main Search CTA */}
						<div className="flex flex-col items-center gap-6 mt-12">
							<Button
								size="lg"
								onClick={() => setIsCommandOpen(true)}
								className="h-16 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200"
							>
								<Search className="mr-3 h-5 w-5" />
								Search Templates
								<div className="ml-3 flex items-center gap-1 text-sm opacity-75">
									<Command className="h-3 w-3" />
									<span>K</span>
								</div>
							</Button>

							<p className="text-sm text-muted-foreground flex items-center gap-2">
								<Sparkles className="h-4 w-4" />
								Or press <kbd className="px-2 py-1 bg-muted rounded text-xs font-medium">Cmd+K</kbd> anytime
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Preview Section */}
			<div className="container mx-auto max-w-7xl px-4 pb-16">
				<div className="text-center mb-12">
					<h2 className="text-2xl font-semibold mb-4">What you'll find</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Our smart search covers {templateRegistry.length} expertly designed templates across {getAllCategories().length} life categories.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<div className="text-center space-y-3">
						<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
							<Search className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold">Instant Search</h3>
						<p className="text-sm text-muted-foreground">
							Find templates by name, category, or even describe what you need
						</p>
					</div>

					<div className="text-center space-y-3">
						<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
							<Zap className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold">Smart Suggestions</h3>
						<p className="text-sm text-muted-foreground">
							Get personalized recommendations based on popular choices
						</p>
					</div>

					<div className="text-center space-y-3">
						<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
							<FileText className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold">Expert Guidance</h3>
						<p className="text-sm text-muted-foreground">
							Every template includes step-by-step guidance and resources
						</p>
					</div>
				</div>

				{/* Alternative Action */}
				<div className="text-center">
					<Button
						variant="outline"
						size="lg"
						onClick={() => setIsCommandOpen(true)}
						className="group"
					>
						Try it now
						<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</div>

			{/* Command Palette */}
			<CommandPalette
				isOpen={isCommandOpen}
				onClose={() => setIsCommandOpen(false)}
				mode="templates"
				autoFocus={true}
			/>
		</PageLayout>
	);
}
