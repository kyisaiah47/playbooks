import type { Metadata } from 'next';
import Script from 'next/script';
import { LandingHero } from "@/components/landing-hero";
import { LandingAbout } from "@/components/landing-about";
import { LandingFeatures } from "@/components/landing-features";
import { LandingTestimonials } from "@/components/landing-testimonials";
import { LandingStats } from "@/components/landing-stats";
import { LandingTechStack } from "@/components/landing-tech-stack";
import { LandingIntegrations } from "@/components/landing-integrations";
import { PageLayout } from "@/components/layout";
import { TEMPLATA_FAQ } from '@/lib/seo';

export const metadata: Metadata = {
	title: 'Templata | Organize Life\'s Biggest Moments',
	description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments. From wedding planning to career changes, get organized in minutes with proven frameworks from domain experts.',
	keywords: 'life planning templates, wedding planning, career change, home buying, business planning, expert guidance, structured frameworks, life organization, planning tools, life coach, planning resources, life events planning, major life transitions',
	authors: [{ name: 'Templata' }],
	creator: 'Templata',
	publisher: 'Templata',
	openGraph: {
		title: 'Templata | Organize Life\'s Biggest Moments',
		description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments. Get organized in minutes with proven frameworks from domain experts.',
		url: 'https://templata.org',
		siteName: 'Templata',
		images: [
			{
				url: 'https://templata.org/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Templata - Organize Life\'s Biggest Moments',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Templata | Organize Life\'s Biggest Moments',
		description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments.',
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
		canonical: 'https://templata.org',
	},
};

export default function HomePage() {
	// Organization schema
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Templata',
		url: 'https://templata.org',
		logo: 'https://templata.org/brand/templata-logo.png',
		description: 'Expert-crafted templates and planning guides for life\'s biggest moments',
		sameAs: [
			'https://twitter.com/templata',
		],
	};

	// WebSite schema
	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Templata',
		url: 'https://templata.org',
		description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments.',
		publisher: {
			'@type': 'Organization',
			name: 'Templata',
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

	return (
		<>
			<Script
				id="home-organization-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<Script
				id="home-website-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<Script
				id="home-faq-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			<PageLayout>
				<LandingHero />
				<LandingAbout />
				<LandingFeatures />
				<LandingTestimonials />
				<LandingStats />
				<LandingTechStack />
				<LandingIntegrations />
			</PageLayout>

			{/* Hidden SEO content */}
			<div className="sr-only" aria-hidden="true">
				<h2>Templata - Life Planning Platform</h2>
				<p>
					Templata is the leading platform for organizing life's biggest moments. Get access to expert-crafted planning templates, curated readings, and AI-refined questions for major life events.
				</p>

				<h3>Life Planning Categories</h3>
				<ul>
					<li>
						<strong>Career & Work Planning</strong> - Job search, career change, leadership transitions, freelancing, and professional development
					</li>
					<li>
						<strong>Finance & Money Planning</strong> - Budgeting, investing, debt payoff, retirement planning, and financial freedom
					</li>
					<li>
						<strong>Relationships & Family</strong> - Wedding planning, family dynamics, communication, and relationship building
					</li>
					<li>
						<strong>Life Events</strong> - Moving, home buying, major life transitions, and safety planning
					</li>
					<li>
						<strong>Health & Wellness</strong> - Fitness planning, mental health, nutrition, and overall wellbeing
					</li>
					<li>
						<strong>Personal Growth</strong> - Learning new skills, creativity, hobbies, and self-improvement
					</li>
				</ul>

				<h3>What Makes Templata Different</h3>
				<p>
					Unlike generic planning tools, Templata offers expert-crafted frameworks from domain specialists. Each guide includes AI-refined planning questions, curated expert readings, and proven methodologies. Completely free, forever.
				</p>

				<h3>Popular Planning Guides</h3>
				<ul>
					<li>Wedding Planning Template & Guide - Complete wedding organization from engagement to honeymoon</li>
					<li>Career Change Guide - Strategic career transition planning with expert frameworks</li>
					<li>Home Buying Checklist - Step-by-step guide from search to closing</li>
					<li>Financial Planning Templates - Budget, invest, and achieve financial freedom</li>
					<li>Starting a Business Guide - Launch and grow your business with confidence</li>
					<li>Moving Checklist & Guide - Stress-free relocation planning</li>
				</ul>
			</div>
		</>
	);
}
