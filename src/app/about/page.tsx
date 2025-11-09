import type { Metadata } from 'next';
import Script from 'next/script';
import { AboutHeroVideo } from "@/components/about-hero-video";
import { AboutHero } from "@/components/about-hero";
import { AboutLogos } from "@/components/about-logos";
import { AboutFaq } from "@/components/about-faq";
import { PageLayout } from "@/components/layout";
import { TEMPLATA_FAQ } from '@/lib/seo';

export const metadata: Metadata = {
	title: 'About Templata | Expert-Crafted Life Planning Templates',
	description: 'Learn how Templata helps you organize life\'s biggest moments with expert-crafted templates, curated readings, and AI-refined questions. Completely free, forever.',
	keywords: 'about templata, life planning, expert templates, planning methodology, free planning tools, life organization platform, planning framework, expert guidance, life event planning, planning resources',
	authors: [{ name: 'Templata' }],
	creator: 'Templata',
	publisher: 'Templata',
	openGraph: {
		title: 'About Templata | Expert-Crafted Life Planning Templates',
		description: 'Learn how Templata helps you organize life\'s biggest moments with expert-crafted templates and curated content.',
		url: 'https://templata.org/about',
		siteName: 'Templata',
		images: [
			{
				url: 'https://templata.org/og-image.png',
				width: 1200,
				height: 630,
				alt: 'About Templata',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About Templata | Expert-Crafted Life Planning Templates',
		description: 'Learn how Templata helps you organize life\'s biggest moments.',
		images: ['https://templata.org/og-image.png'],
		creator: '@templata',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://templata.org/about',
	},
};

export default function AboutPage() {
	// AboutPage schema
	const aboutSchema = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: 'About Templata',
		description: 'Learn how Templata helps you organize life\'s biggest moments with expert-crafted templates',
		url: 'https://templata.org/about',
		mainEntity: {
			'@type': 'Organization',
			name: 'Templata',
			url: 'https://templata.org',
			description: 'Expert-crafted templates and planning guides for life\'s biggest moments',
		},
	};

	// FAQ schema
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: TEMPLATA_FAQ.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};

	// Breadcrumb schema
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://templata.org',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'About',
				item: 'https://templata.org/about',
			},
		],
	};

	return (
		<>
			<Script
				id="about-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
			/>
			<Script
				id="about-faq-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<Script
				id="about-breadcrumb-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<PageLayout>
				<AboutHeroVideo />
				<AboutLogos />
				<AboutHero />
				<AboutFaq />
			</PageLayout>

			{/* Hidden SEO content */}
			<div className="sr-only" aria-hidden="true">
				<h2>About Templata - Life Planning Platform</h2>
				<p>
					Templata is a free life planning platform that helps you organize major life events and transitions. We provide expert-crafted templates, AI-refined planning questions, and curated expert readings for life's biggest moments.
				</p>

				<h3>Our Mission</h3>
				<p>
					To help everyone successfully navigate life's biggest moments by providing expert frameworks, proven methodologies, and actionable guidance. We believe effective planning should be accessible to all.
				</p>

				<h3>What We Offer</h3>
				<ul>
					<li>
						<strong>Expert-Crafted Templates</strong> - Planning guides built by domain experts for major life events including career changes, weddings, home buying, business launches, and more.
					</li>
					<li>
						<strong>AI-Refined Questions</strong> - Hundreds of systematically organized planning questions to help you think through every aspect of your plans.
					</li>
					<li>
						<strong>Curated Expert Readings</strong> - Hand-selected articles and resources from industry leaders and domain specialists.
					</li>
					<li>
						<strong>Completely Free</strong> - All planning resources are available at no cost, forever.
					</li>
				</ul>

				<h3>How Templata Works</h3>
				<p>
					1. Choose a planning guide for your life event (wedding, career change, home buying, etc.)
					<br />
					2. Answer AI-refined questions to systematically think through your plans
					<br />
					3. Read curated expert content to learn best practices
					<br />
					4. Track your progress and organize your notes in one integrated workspace
				</p>

				<h3>Why Choose Templata</h3>
				<p>
					Unlike generic planning tools or expensive consultants, Templata combines expert frameworks with AI-powered organization. Each guide is crafted by domain specialists and refined through user feedback. You get professional-grade planning resources for free.
				</p>
			</div>
		</>
	);
}
