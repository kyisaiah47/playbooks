import type { Metadata } from 'next';
import Script from 'next/script';
import { LibraryHero } from "@/components/library-hero";
import { LibraryResources } from "@/components/library-resources";
import { PageLayout } from "@/components/layout";
import { TEMPLATA_FAQ } from '@/lib/seo';

export const metadata: Metadata = {
	title: 'Expert Reading Library - Curated Planning Resources & Articles | Templata',
	description: 'Access curated expert articles, guides & resources for life planning. Wedding planning tips, career change advice, home buying guides, business resources & more. All content vetted by domain experts. Free beta.',
	keywords: 'life planning resources, expert articles library, planning library, curated content, wedding planning articles, career change advice, home buying tips, business planning resources, expert guidance free, planning reading list, life planning articles, expert blog curated',
	authors: [{ name: 'Templata' }],
	creator: 'Templata',
	publisher: 'Templata',
	openGraph: {
		title: 'Expert Reading Library | Life Planning Resources | Templata',
		description: 'Access curated expert articles and resources for life\'s biggest moments.',
		url: 'https://templata.org/library',
		siteName: 'Templata',
		images: [
			{
				url: 'https://templata.org/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Templata Library',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Expert Reading Library | Life Planning Resources | Templata',
		description: 'Access curated expert articles and resources for life\'s biggest moments.',
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
		canonical: 'https://templata.org/library',
	},
};

export default function LibraryPage() {
	// WebPage schema
	const webPageSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Expert Reading Library',
		description: 'Curated expert articles and resources for life planning',
		url: 'https://templata.org/library',
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
				name: 'Library',
				item: 'https://templata.org/library',
			},
		],
	};

	return (
		<>
			<Script
				id="library-webpage-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
			/>
			<Script
				id="library-faq-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<Script
				id="library-breadcrumb-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<PageLayout>
				<LibraryHero />
				<LibraryResources />
			</PageLayout>

			{/* Hidden SEO content */}
			<div className="sr-only" aria-hidden="true">
				<h2>Expert Reading Library - Life Planning Resources</h2>
				<p>
					Access hundreds of curated expert articles, guides, and resources for major life events. Learn from domain specialists about planning weddings, career changes, home purchases, business launches, and more.
				</p>

				<h3>What's in the Library</h3>
				<ul>
					<li>Expert articles on career planning and professional development</li>
					<li>Financial planning resources and money management guides</li>
					<li>Wedding planning tips from industry professionals</li>
					<li>Home buying advice and real estate insights</li>
					<li>Business planning frameworks and startup resources</li>
					<li>Health and wellness guidance from specialists</li>
					<li>Relationship and family planning resources</li>
				</ul>

				<h3>Why Our Library is Different</h3>
				<p>
					Every resource in our library is carefully curated by experts. We select only the highest-quality content from trusted sources, ensuring you get actionable insights for your planning needs. All resources are organized by guide and category for easy discovery.
				</p>

				<h3>How to Use the Library</h3>
				<p>
					Browse by category, search for specific topics, or filter by guide. Each article includes read time estimates and author information. Save favorites and build your personalized reading list for any life event you're planning.
				</p>
			</div>
		</>
	);
}
