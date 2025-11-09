import type { Metadata } from 'next';
import { AboutHeroVideo } from "@/components/about-hero-video";
import { AboutHero } from "@/components/about-hero";
import { AboutLogos } from "@/components/about-logos";
import { AboutFaq } from "@/components/about-faq";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
	title: 'About Templata | Expert-Crafted Life Planning Templates',
	description: 'Learn how Templata helps you organize life\'s biggest moments with expert-crafted templates, curated readings, and AI-refined questions. Completely free, forever.',
	keywords: 'about templata, life planning, expert templates, planning methodology, free planning tools, life organization platform',
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
		images: ['https://templata.org/og-image.svg'],
	},
};

export default function AboutPage() {
	return (
		<PageLayout>
			<AboutHeroVideo />
			<AboutLogos />
			<AboutHero />
			<AboutFaq />
		</PageLayout>
	);
}
