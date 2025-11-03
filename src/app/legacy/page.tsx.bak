"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";
import {
	ArrowRight,
	Layout,
	FileText,
	Globe,
	CheckCircle2,
	BookOpen,
	Target,
	Library,
	Calendar,
	Sparkles,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Typewriter } from "@/components/ui/typewriter";

export default function LandingPage() {
	const { isLoggedIn } = useAuth();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'The first encyclopedia for living. Comprehensive questions, expert readings, and integrated planning for life\'s biggest decisions.',
		url: 'https://templata.org',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		featureList: [
			'Life Event Guides',
			'Comprehensive Questions',
			'Expert Readings',
			'Split-Screen Interface',
		],
	};

	return (
		<PageLayout includeHeaderPadding={false}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero Section */}
			<section className="h-screen flex items-center justify-center relative overflow-hidden">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: 'url(/geometric-monuments.webp)',
						filter: 'brightness(0.4)',
					}}
				/>

				<div className="container mx-auto max-w-7xl px-4 relative z-10">
					<div className="text-center space-y-8">
						<Announcement className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
							<AnnouncementTag>Beta</AnnouncementTag>
							<AnnouncementTitle>The first encyclopedia for living<span className="hidden sm:inline">—</span><br className="sm:hidden" />now in public beta</AnnouncementTitle>
						</Announcement>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
							Organize life&apos;s
							<br />
							<span className="text-white">
								biggest{" "}
								<Typewriter
									text={[
										"moments",
										"weddings",
										"careers",
										"moves",
										"launches",
									]}
									speed={70}
									waitTime={1500}
									deleteSpeed={40}
									cursorChar={"_"}
								/>
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90">
							Comprehensive questions covering 90%+ of what you need to consider.<br />
							Expert readings to guide your decisions. Integrated planning to execute.
						</p>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							The comprehensive guide + planning tool<br />for life's biggest moments
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Not another blank page. A complete system designed for major life decisions.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-12">
						<div className="space-y-4">
							<div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
								<FileText className="h-6 w-6 text-muted-foreground" />
							</div>
							<h3 className="text-xl font-semibold">Comprehensive Questions</h3>
							<p className="text-muted-foreground leading-relaxed">
								90%+ coverage guarantee. AI-refined over months to ensure nothing important is missed.
							</p>
						</div>

						<div className="space-y-4">
							<div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
								<BookOpen className="h-6 w-6 text-muted-foreground" />
							</div>
							<h3 className="text-xl font-semibold">Expert Readings</h3>
							<p className="text-muted-foreground leading-relaxed">
								Curated knowledge saves you hundreds of hours of research. Wikipedia for life planning.
							</p>
						</div>

						<div className="space-y-4">
							<div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
								<Calendar className="h-6 w-6 text-muted-foreground" />
							</div>
							<h3 className="text-xl font-semibold">Integrated Planning</h3>
							<p className="text-muted-foreground leading-relaxed">
								Calendar and tasks tied to specific life events—not a generic task manager.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Templata */}
			<section className="py-24 bg-muted/30 border-y">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold leading-tight">
								Major life decisions deserve better than blank pages
							</h2>
							<div className="space-y-4 text-muted-foreground">
								<p className="text-lg">
									Planning a wedding, buying a home, or changing careers means hundreds of decisions with no roadmap.
									You're left with scattered notes, forgotten tasks, and constant anxiety about what you're missing.
								</p>
								<p className="text-lg">
									Traditional tools give you empty documents. Competitors give you generic advice.
									Templata gives you comprehensive coverage backed by months of AI refinement.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-3">
								<FileText className="h-6 w-6 text-muted-foreground/60" />
								<div className="font-medium">
									Blank Documents
								</div>
								<div className="text-sm text-muted-foreground">
									Where do I even start?
								</div>
							</div>

							<div className="space-y-3">
								<Layout className="h-6 w-6 text-muted-foreground/60" />
								<div className="font-medium">
									Scattered Research
								</div>
								<div className="text-sm text-muted-foreground">
									Hours on Google, nothing organized
								</div>
							</div>

							<div className="space-y-3">
								<CheckCircle2 className="h-6 w-6 text-muted-foreground/60" />
								<div className="font-medium">
									Forgotten Details
								</div>
								<div className="text-sm text-muted-foreground">
									Constant fear of missing something
								</div>
							</div>

							<div className="space-y-3">
								<Target className="h-6 w-6 text-muted-foreground/60" />
								<div className="font-medium">
									Generic Advice
								</div>
								<div className="text-sm text-muted-foreground">
									One-size-fits-all doesn't fit you
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
