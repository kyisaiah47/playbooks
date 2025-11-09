import type { Metadata } from 'next';
import { LandingHero } from "@/components/landing-hero";
import { LandingAbout } from "@/components/landing-about";
import { LandingFeatures } from "@/components/landing-features";
import { LandingTestimonials } from "@/components/landing-testimonials";
import { LandingStats } from "@/components/landing-stats";
import { LandingTechStack } from "@/components/landing-tech-stack";
import { LandingIntegrations } from "@/components/landing-integrations";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
	title: 'Templata | Organize Life\'s Biggest Moments',
	description: 'Skip the blank page with expertly crafted templates for life\'s biggest moments. From wedding planning to career changes, get organized in minutes with proven frameworks from domain experts.',
	keywords: 'life planning templates, wedding planning, career change, home buying, business planning, expert guidance, structured frameworks, life organization, planning tools, life coach',
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
		images: ['https://templata.org/og-image.svg'],
		creator: '@templata',
	},
};

export default function HomePage() {
	return (
		<PageLayout>
			<LandingHero />
			<LandingAbout />
			<LandingFeatures />
			<LandingTestimonials />
			<LandingStats />
			<LandingTechStack />
			<LandingIntegrations />

			{/* More blocks will be added here */}
		</PageLayout>
	);
}
