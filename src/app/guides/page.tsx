import type { Metadata } from 'next';
import { GuidesHero } from "@/components/guides-hero";
import { GuidesList } from "@/components/guides-list";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
	title: 'Expert Planning Guides & Templates | Templata',
	description: 'Browse expert-crafted planning guides for life\'s biggest moments. Wedding planning, career changes, home buying, business planning, and more. Free forever.',
	keywords: 'planning guides, life templates, wedding planning guide, career change guide, home buying guide, business planning template, expert planning frameworks, free planning guides',
	openGraph: {
		title: 'Expert Planning Guides & Templates | Templata',
		description: 'Browse expert-crafted planning guides for life\'s biggest moments. Free forever.',
		url: 'https://templata.org/guides',
		siteName: 'Templata',
		images: [
			{
				url: 'https://templata.org/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Templata Planning Guides',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Expert Planning Guides & Templates | Templata',
		description: 'Browse expert-crafted planning guides for life\'s biggest moments.',
		images: ['https://templata.org/og-image.svg'],
	},
};

export default function GuidesPage() {
	return (
		<PageLayout>
			<GuidesHero />
			<GuidesList />
		</PageLayout>
	);
}
