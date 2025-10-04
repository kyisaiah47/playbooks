"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArrowRight,
	HelpCircle,
	MessageSquare,
	Mail,
	Users,
	Sparkles,
	Clock,
} from "lucide-react";
import { PageLayout } from "@/components/layout";


export default function FAQPage() {
	const faqs = [
		{
			question: "What exactly is Templata?",
			answer:
				"Templata is a platform with 1,298 systematically designed templates for life's biggest moments. Instead of starting with blank pages when planning a wedding, buying a home, or changing careers, you get structured workspaces with split-screen interfaces. Each template includes categorized prompts powered by our Axiom Engine and relevant articles for deeper guidance.",
		},
		{
			question: "How much does Templata cost?",
			answer:
				"Templata offers three tiers: Free (1-2 starter templates, basic features), Plus ($9/mo for full access to 1,298 templates, advanced workflows, unlimited active templates), and Pro ($15/mo adding AI Autofill, integrations, team collaboration, and white-label exports). All plans include 14-day free trials with no commitment.",
		},
		{
			question: "How do the templates work?",
			answer:
				"Each template provides a clean, split-screen workspace. On the left, you'll find categorized reflection prompts powered by our Axiom Engine to guide your thinking. On the right, you'll access relevant articles with deeper insights and guidance. Simply browse the prompts, reflect on your situation, and use the articles for additional context and expert advice.",
		},
		{
			question: "What is the Axiom Engine?",
			answer:
				"The Axiom Engine is our specialized AI system designed exclusively for life guidance. It generates 15,000+ categorized prompts and 26,000+ in-depth articles across 1,298 templates. Unlike generic AI, the Axiom Engine uses purpose-built intelligence specifically trained for life decision-making scenarios, creating thoughtful frameworks designed for reflection rather than task completion.",
		},
		{
			question: "Do I need to create an account to use templates?",
			answer:
				"You can browse and explore all templates without an account. To save your personalized workspace and access it later, you'll need to create a free account. We support both email signup and Google authentication.",
		},
		{
			question: "Can I customize the templates?",
			answer:
				"Absolutely! Each template workspace is fully customizable. You can browse different prompt categories, focus on specific areas relevant to your situation, and access articles that match your needs. The templates provide a structured foundation that you can adapt to your specific circumstances.",
		},
		{
			question: "How many templates are available?",
			answer:
				"We currently offer 1,298 templates across categories like Personal Life (40+ templates), Career & Work (45+ templates), Property & Finance (35+ templates), and Business & Entrepreneurship (30+ templates). Each template includes categorized prompts and relevant articles powered by our Axiom Engine.",
		},
		{
			question: "Is my data secure?",
			answer:
				"Yes, we take data security seriously. Your personal information is encrypted, stored securely, and never shared with third parties. You maintain full control over your data and can export or delete it at any time.",
		},
		{
			question: "Can I use templates offline?",
			answer:
				"Currently, Templata is a web-based platform that requires an internet connection. However, you can export your completed templates to PDF or other formats for offline access and sharing.",
		},
		{
			question: "What if I need help with a template?",
			answer:
				"Each template includes built-in guidance through categorized prompts and relevant articles. The Axiom Engine provides thoughtful frameworks and in-depth insights for every situation. If you need additional help, you can contact our support team directly.",
		},
		{
			question: "How often are new templates added?",
			answer:
				"We add new templates regularly based on user feedback and requests. Follow our updates page or join our mailing list to be notified when new templates are available.",
		},
		{
			question: "Can I share my completed templates?",
			answer:
				"Yes! You can easily share your templates with family, friends, or collaborators. You control who can view or edit your templates, and you can revoke access at any time.",
		},
	];

	return (
		<PageLayout>

			{/* Hero Section */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<HelpCircle className="mr-2 h-4 w-4" />
							Frequently Asked Questions
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Get answers to
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								common questions
							</span>
						</h1>

						<p className="text-xl text-muted-foreground">
							Everything you need to know about Templata, our templates, and how
							to get the most out of our platform.
						</p>
					</div>
				</div>
			</section>

			{/* FAQ Accordion */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-4xl px-4">
					<Accordion
						type="single"
						collapsible
						className="space-y-4"
					>
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="border rounded-lg px-6"
							>
								<AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* Quick Stats */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl font-bold">Templata by the numbers</h2>
						<p className="text-xl text-muted-foreground">
							Helping people organize life&apos;s important moments
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Image
										src="/brand/templata-logo.svg"
										alt="Templata"
										width={32}
										height={32}
										className="dark:invert"
									/>
								</div>
								<CardTitle className="text-3xl font-bold">1,298</CardTitle>
								<CardDescription className="text-base">
									Templates powered by Axiom Engine
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Users className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-3xl font-bold">50k+</CardTitle>
								<CardDescription className="text-base">
									People organized
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Clock className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-3xl font-bold">15k+</CardTitle>
								<CardDescription className="text-base">
									Reflection prompts available
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Sparkles className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-3xl font-bold">3k+</CardTitle>
								<CardDescription className="text-base">
									Articles for deeper guidance
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Still Have Questions */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">Still have questions?</h2>
						<p className="text-xl text-muted-foreground">
							Can&apos;t find the answer you&apos;re looking for? Get in touch
							with our support team.
						</p>

						<div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
							<Card className="p-6 text-center hover:shadow-lg transition-shadow">
								<MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-2">Community Forum</h3>
								<p className="text-muted-foreground mb-4">
									Join our community to get help from other users and share your
									experiences.
								</p>
								<Button
									variant="outline"
									asChild
								>
									<Link
										href="#"
										className="w-full"
									>
										Visit Forum
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</Card>

							<Card className="p-6 text-center hover:shadow-lg transition-shadow">
								<Mail className="h-12 w-12 text-primary mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-2">Email Support</h3>
								<p className="text-muted-foreground mb-4">
									Send us an email and we&apos;ll get back to you within 24
									hours.
								</p>
								<Button
									variant="outline"
									asChild
								>
									<Link
										href="mailto:support@templata.com"
										className="w-full"
									>
										Contact Support
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">Ready to get organized?</h2>
						<p className="text-xl text-muted-foreground">
							Start with a template that fits your needs and get your workspace
							set up in minutes.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="h-12 px-8 text-base"
								onClick={() => {
									const event = new KeyboardEvent('keydown', {
										key: 'k',
										metaKey: true,
										bubbles: true
									});
									document.dispatchEvent(event);
								}}
							>
								Browse Templates
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="ghost"
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/about">Learn More</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}
