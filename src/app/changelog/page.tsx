import type { Metadata } from 'next';
import Script from 'next/script';
import { ChangelogTimeline } from "@/components/changelog-timeline";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
	title: 'Changelog | Templata Updates & New Features',
	description: 'Stay updated with the latest features, improvements, and updates to Templata. See what\'s new in our life planning platform.',
	keywords: 'templata changelog, product updates, new features, platform improvements, release notes, templata updates, new planning guides, feature releases',
	authors: [{ name: 'Templata' }],
	creator: 'Templata',
	publisher: 'Templata',
	openGraph: {
		title: 'Changelog | Templata Updates & New Features',
		description: 'Stay updated with the latest features and improvements to Templata.',
		url: 'https://templata.org/changelog',
		siteName: 'Templata',
		images: [
			{
				url: 'https://templata.org/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Templata Changelog',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Changelog | Templata Updates & New Features',
		description: 'Stay updated with the latest features and improvements to Templata.',
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
		canonical: 'https://templata.org/changelog',
	},
};

export default function ChangelogPage() {
	// WebPage schema
	const webPageSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Templata Changelog',
		description: 'Latest updates, features, and improvements to the Templata platform',
		url: 'https://templata.org/changelog',
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
				name: 'Changelog',
				item: 'https://templata.org/changelog',
			},
		],
	};

	return (
		<>
			<Script
				id="changelog-webpage-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
			/>
			<Script
				id="changelog-breadcrumb-jsonld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<PageLayout>
				<ChangelogTimeline />
			</PageLayout>

			{/* Hidden SEO content */}
			<div className="sr-only" aria-hidden="true">
				<h2>Templata Platform Changelog</h2>
				<p>
					Stay up to date with all new features, improvements, and updates to the Templata life planning platform. We continuously add new guides, enhance existing features, and improve the user experience.
				</p>

				<h3>Recent Updates</h3>
				<p>
					We regularly release new planning guides, expand our expert reading library, add AI-refined questions, and enhance platform features. Check this page frequently to see what's new.
				</p>

				<h3>What Gets Updated</h3>
				<ul>
					<li>New planning guides for major life events</li>
					<li>Additional expert readings and curated content</li>
					<li>Enhanced AI-refined planning questions</li>
					<li>Platform features and user experience improvements</li>
					<li>Bug fixes and performance optimizations</li>
				</ul>

				<h3>Subscribe to Updates</h3>
				<p>
					Follow our changelog to stay informed about new planning resources, features, and improvements. We're committed to continuously enhancing Templata to help you better organize life's biggest moments.
				</p>
			</div>
		</>
	);
}
