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

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" className="h-12 px-8 text-base" asChild>
								<Link href="/guides">
									Browse Guides
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							{!isLoggedIn && (
								<Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white hover:bg-white/90 text-foreground" asChild>
									<Link href="/signup">Get Started Free</Link>
								</Button>
							)}
						</div>
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

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<FileText className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-xl">Comprehensive Questions</CardTitle>
								<CardDescription className="text-base">
									90%+ coverage guarantee. AI-refined over months to ensure nothing important is missed.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<BookOpen className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-xl">Expert Readings</CardTitle>
								<CardDescription className="text-base">
									Curated knowledge saves you hundreds of hours of research. Wikipedia for life planning.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Calendar className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-xl">Integrated Planning</CardTitle>
								<CardDescription className="text-base">
									Calendar and tasks tied to specific life events—not a generic task manager.
								</CardDescription>
							</CardHeader>
						</Card>
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

						<div className="grid grid-cols-2 gap-4">
							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<FileText className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Blank Documents
									</div>
									<div className="text-sm text-muted-foreground">
										Where do I even start?
									</div>
								</div>
							</Card>

							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<Layout className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Scattered Research
									</div>
									<div className="text-sm text-muted-foreground">
										Hours on Google, nothing organized
									</div>
								</div>
							</Card>

							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<CheckCircle2 className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Forgotten Details
									</div>
									<div className="text-sm text-muted-foreground">
										Constant fear of missing something
									</div>
								</div>
							</Card>

							<Card className="p-6 border-dashed">
								<div className="space-y-3">
									<Target className="h-8 w-8 text-muted-foreground" />
									<div className="font-semibold text-muted-foreground">
										Generic Advice
									</div>
									<div className="text-sm text-muted-foreground">
										One-size-fits-all doesn't fit you
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
