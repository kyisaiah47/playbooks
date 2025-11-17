import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
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
	title: 'Templata - Free Life Planning Platform for Weddings, Career & More',
	description: 'Stop stressing over blank pages. Get expert-crafted planning guides for weddings, career changes, home buying & more life events. 90%+ coverage guarantee. AI-refined questions. Curated expert readings. Free beta access.',
	keywords: 'life planning platform, life planning templates, wedding planning app free, career change planner, home buying checklist template, business planning guide, free life organizer, life planning software, expert planning frameworks, structured life planning, ai planning assistant, life coach alternative, wedding planner free, career transition guide, financial planning template, planning app, major life transitions, life event planning tool, comprehensive planning platform, free notion alternative for planning',
	authors: [{ name: 'Templata' }],
	creator: 'Templata',
	publisher: 'Templata',
	openGraph: {
		title: 'Templata - Free Life Planning Platform | 90%+ Coverage Guarantee',
		description: 'Expert-crafted planning guides for weddings, careers, home buying & 70+ life events. AI-refined questions. Curated readings. Free beta access. Start in 60 seconds.',
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
		title: 'Templata - Free Life Planning Platform | 90%+ Coverage Guarantee',
		description: 'Expert guides for weddings, careers, home buying & 70+ life events. AI-refined questions. Free beta access.',
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
		logo: 'https://templata.org/logo.png',
		description: 'Expert-crafted templates and planning guides for life\'s biggest moments',
		sameAs: [
			'https://twitter.com/templata',
		],
	};

	// WebSite schema with SearchAction for sitelinks search box
	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Templata',
		url: 'https://templata.org',
		description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments.',
		publisher: {
			'@type': 'Organization',
			name: 'Templata'
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://templata.org/guides?q={search_term_string}'
			},
			'query-input': 'required name=search_term_string'
		}
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

	// SoftwareApplication schema
	const softwareSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		applicationCategory: 'LifestyleApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
	};

	// HowTo schema for using Templata
	const howToSchema = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: 'How to Plan Life\'s Biggest Moments with Templata',
		description: 'Step-by-step guide to using Templata for comprehensive life planning',
		totalTime: 'PT5M',
		step: [
			{
				'@type': 'HowToStep',
				position: 1,
				name: 'Create Free Account',
				text: 'Sign up with your email. No credit card required. Takes 30 seconds.',
				url: 'https://templata.org',
			},
			{
				'@type': 'HowToStep',
				position: 2,
				name: 'Choose Your Guide',
				text: 'Browse 70+ expert-crafted planning guides. Select the life event you\'re planning (wedding, career change, home buying, etc.)',
				url: 'https://templata.org/guides',
			},
			{
				'@type': 'HowToStep',
				position: 3,
				name: 'Answer AI-Refined Questions',
				text: 'Work through 50+ questions designed to ensure 90%+ comprehensive coverage. Skip what doesn\'t apply. Your answers auto-save.',
				url: 'https://templata.org/how-to-use',
			},
			{
				'@type': 'HowToStep',
				position: 4,
				name: 'Read Expert Content',
				text: 'Learn from curated expert readings alongside questions. All content vetted for quality and relevance.',
				url: 'https://templata.org/library',
			},
			{
				'@type': 'HowToStep',
				position: 5,
				name: 'Track Progress',
				text: 'Use integrated calendar, tasks, and notes. Monitor progress with visual analytics. Export your planning data anytime.',
				url: 'https://templata.org/features',
			},
		],
	};

	// Product schema for SEO - represents Templata as a product/service
	const productSchema = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Templata Life Planning Platform',
		description: 'Expert-crafted planning guides for weddings, careers, home buying & 70+ life events. AI-refined questions with 90%+ coverage guarantee. Curated expert readings. Integrated calendar, tasks, and analytics.',
		brand: {
			'@type': 'Brand',
			name: 'Templata'
		},
		category: 'Software > Productivity Software > Life Planning',
		offers: {
			'@type': 'Offer',
			url: 'https://templata.org',
			priceCurrency: 'USD',
			price: '0.00',
			priceValidUntil: '2026-12-31',
			availability: 'https://schema.org/InStock',
			seller: {
				'@type': 'Organization',
				name: 'Templata'
			}
		}
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
			<Script
				id="home-software-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
			/>
			<Script
				id="home-howto-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
			/>
			<Script
				id="home-product-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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

				<h3>Compare Templata to Other Tools</h3>
				<p>
					See how Templata compares to other popular tools for life planning:
				</p>
				<ul>
					<li><Link href="/vs/notion">Templata vs Notion</Link> - Expert frameworks vs blank databases. Why Templata wins for life planning.</li>
					<li><Link href="/vs/google">Templata vs Google Search</Link> - Organized planning vs 50 scattered browser tabs.</li>
					<li><Link href="/vs/google-docs">Templata vs Google Docs</Link> - Expert guidance vs blank documents.</li>
					<li><Link href="/vs/wikipedia">Templata vs Wikipedia</Link> - Active planning vs passive encyclopedia reading.</li>
				</ul>

				<h3>Powerful Features for Life Planning</h3>
				<p>
					Templata includes premium features completely free:
				</p>
				<ul>
					<li><Link href="/features">All Features</Link> - Comprehensive overview of Templata&apos;s planning tools.</li>
					<li><Link href="/features/calendar">Planning Calendar</Link> - Per-guide calendars to track milestones and deadlines separately.</li>
					<li><Link href="/features/tasks">Task Management</Link> - Organize action items by priority and status for each life event.</li>
					<li><Link href="/features/analytics">Progress Analytics</Link> - Visual charts and insights to track your planning progress.</li>
				</ul>

				<h3>Why Choose Templata</h3>
				<p>
					<strong>For Wedding Planning:</strong> Templata provides 400+ wedding-specific questions, expert vendor guidance, budget tracking, and timeline management. Compare to <Link href="/vs/notion">planning your wedding in Notion</Link> or <Link href="/vs/google">researching on Google</Link> - Templata offers comprehensive coverage from day one.
				</p>
				<p>
					<strong>For Career Transitions:</strong> Get expert career assessment questions, transition strategies, and job search tactics. More effective than <Link href="/vs/google-docs">creating your own career plan in Google Docs</Link>.
				</p>
				<p>
					<strong>For Home Buying:</strong> Expert guidance on financing, location criteria, inspection priorities, and negotiation strategies. Better than <Link href="/vs/google">googling home buying tips</Link> across dozens of websites.
				</p>
				<p>
					Learn more about <Link href="/pricing">Templata&apos;s free pricing</Link>, explore our <Link href="/guides">70+ planning guides</Link>, or browse our <Link href="/library">expert reading library</Link>.
				</p>
			</div>
		</>
	);
}
