import type { Metadata } from 'next';
import { ChangelogTimeline } from "@/components/changelog-timeline";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
	title: 'Changelog | Templata Updates & New Features',
	description: 'Stay updated with the latest features, improvements, and updates to Templata. See what\'s new in our life planning platform.',
	keywords: 'templata changelog, product updates, new features, platform improvements, release notes',
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
		images: ['https://templata.org/og-image.svg'],
	},
};

export default function ChangelogPage() {
	return (
		<PageLayout>
			<ChangelogTimeline />
		</PageLayout>
	);
}
