import type { Metadata } from 'next';
import { LibraryHero } from "@/components/library-hero";
import { LibraryResources } from "@/components/library-resources";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
	title: 'Expert Reading Library | Life Planning Resources | Templata',
	description: 'Access curated expert articles, guides, and resources for life\'s biggest moments. Learn from domain experts about wedding planning, career changes, home buying, and more.',
	keywords: 'life planning resources, expert articles, planning library, curated content, wedding planning articles, career advice, home buying tips, expert guidance',
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
		images: ['https://templata.org/og-image.svg'],
	},
};

export default function LibraryPage() {
	return (
		<PageLayout>
			<LibraryHero />
			<LibraryResources />
		</PageLayout>
	);
}
