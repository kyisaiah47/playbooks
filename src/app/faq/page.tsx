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
				"Templata is a platform that provides expertly crafted templates for life's biggest moments. Instead of starting with blank pages when planning a wedding, buying a home, or changing careers, you get structured templates with guided setup wizards that ask the right questions and build your personalized workspace. Start with free templates or upgrade to access our full library.",
		},
		{
			question: "How much does Templata cost?",
			answer:
				"Templata offers three tiers: Free (1-2 starter templates, basic features), Plus ($9/mo for full access to 100+ templates, advanced workflows, unlimited active templates), and Pro ($15/mo adding AI Autofill, integrations, team collaboration, and white-label exports). All plans include 14-day free trials with no commitment.",
		},
		{
			question: "How does the guided setup work?",
			answer:
				"Each template comes with an intelligent setup wizard that asks targeted questions about your specific situation. Based on your answers, the template is customized with relevant sections, pre-filled with your details, and configured to match your needs. Most setups take 3-5 minutes.",
		},
		{
			question: "Who creates these templates?",
			answer:
				"Our templates are crafted by domain experts - wedding planners, real estate agents, career coaches, business advisors, and other professionals who understand what you need to succeed. Each template includes their best practices and proven frameworks.",
		},
		{
			question: "Do I need to create an account to use templates?",
			answer:
				"You can browse and explore all templates without an account. To save your personalized workspace and access it later, you'll need to create a free account. We support both email signup and Google authentication.",
		},
		{
			question: "Can I customize the templates?",
			answer:
				"Absolutely! After the guided setup, you can modify any section, add or remove items, and adapt the template to your specific needs. The initial setup just gives you a solid foundation to build upon.",
		},
		{
			question: "How many templates are available?",
			answer:
				"We currently offer 100+ templates across categories like Personal Life (25+ templates), Career & Work (30+ templates), Property & Moving (20+ templates), and Business & Finance (25+ templates). We&apos;re constantly adding new templates based on user requests.",
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
				"Each template includes built-in guidance and expert tips throughout. If you need additional help, you can access our help center, join our community forum, or contact our support team directly.",
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
										src="/shift.svg"
										alt="Templata"
										width={32}
										height={32}
										className="dark:invert"
									/>
								</div>
								<CardTitle className="text-3xl font-bold">100+</CardTitle>
								<CardDescription className="text-base">
									Expert-crafted templates
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
								<CardTitle className="text-3xl font-bold">4 min</CardTitle>
								<CardDescription className="text-base">
									Average setup time
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Sparkles className="h-8 w-8 text-primary" />
								</div>
								<CardTitle className="text-3xl font-bold">3</CardTitle>
								<CardDescription className="text-base">
									Pricing tiers available
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
